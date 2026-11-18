import { readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import process from "node:process";
import ts from "typescript";

const ROOT = process.cwd();
const BLOG_SOURCE = path.join(ROOT, "src/lib/blog-posts.ts");
const TRANSPORT_BLOG_SOURCE = path.join(ROOT, "src/lib/transport-blog-posts.ts");
const SITEMAP_PATH = path.join(ROOT, "public/sitemap.xml");
const SITE_URL = "https://www.emitago.com.br";
const SITEMAP_NAMESPACE = "http://www.sitemaps.org/schemas/sitemap/0.9";

const MONTHS = new Map([
  ["jan", 1], ["janeiro", 1],
  ["fev", 2], ["feb", 2], ["fevereiro", 2],
  ["mar", 3], ["marco", 3], ["março", 3],
  ["abr", 4], ["apr", 4], ["abril", 4],
  ["mai", 5], ["may", 5], ["maio", 5],
  ["jun", 6], ["junho", 6],
  ["jul", 7], ["julho", 7],
  ["ago", 8], ["aug", 8], ["agosto", 8],
  ["set", 9], ["sep", 9], ["setembro", 9],
  ["out", 10], ["oct", 10], ["outubro", 10],
  ["nov", 11], ["novembro", 11],
  ["dez", 12], ["dec", 12], ["dezembro", 12],
]);

function fail(message) {
  console.error(`[sitemap] ERRO: ${message}`);
  process.exit(1);
}

function readString(node) {
  if (ts.isStringLiteral(node) || ts.isNoSubstitutionTemplateLiteral(node)) {
    return node.text;
  }
  return undefined;
}

function propertyValue(objectLiteral, propertyName) {
  const property = objectLiteral.properties.find((item) =>
    ts.isPropertyAssignment(item) &&
    ((ts.isIdentifier(item.name) && item.name.text === propertyName) ||
      (ts.isStringLiteral(item.name) && item.name.text === propertyName))
  );
  return property && ts.isPropertyAssignment(property)
    ? readString(property.initializer)
    : undefined;
}

function toIsoDate(value, fieldName, slug) {
  if (!value) return undefined;
  const match = value.trim().match(/^(\d{1,2})\s+([\p{L}]+)\s+(\d{4})$/u);
  if (!match) fail(`data "${value}" inválida em ${fieldName} do artigo "${slug}". Use "14 Nov 2026".`);

  const day = Number(match[1]);
  const month = MONTHS.get(match[2].toLocaleLowerCase("pt-BR"));
  const year = Number(match[3]);
  if (!month) fail(`mês não reconhecido em ${fieldName} do artigo "${slug}": ${match[2]}.`);

  const date = new Date(Date.UTC(year, month - 1, day));
  if (
    date.getUTCFullYear() !== year ||
    date.getUTCMonth() !== month - 1 ||
    date.getUTCDate() !== day
  ) {
    fail(`data impossível em ${fieldName} do artigo "${slug}": ${value}.`);
  }
  return date.toISOString().slice(0, 10);
}

function extractBlogPosts(sourceText, sourcePath = BLOG_SOURCE, arrayName = "blogPosts") {
  const source = ts.createSourceFile(
    sourcePath,
    sourceText,
    ts.ScriptTarget.Latest,
    true,
    ts.ScriptKind.TS
  );

  const declaration = source.statements
    .filter(ts.isVariableStatement)
    .flatMap((statement) => [...statement.declarationList.declarations])
    .find((item) => ts.isIdentifier(item.name) && item.name.text === arrayName);

  if (!declaration || !declaration.initializer || !ts.isArrayLiteralExpression(declaration.initializer)) {
    fail('não foi possível localizar o array "blogPosts" em src/lib/blog-posts.ts.');
  }

  const posts = declaration.initializer.elements.filter(ts.isObjectLiteralExpression).map((element) => {
    if (!ts.isObjectLiteralExpression(element)) {
      fail("cada artigo em blogPosts precisa ser um objeto literal.");
    }

    const slug = propertyValue(element, "slug");
    const date = propertyValue(element, "date");
    const updatedAt = propertyValue(element, "updatedAt");

    if (!slug || !/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug)) {
      fail(`slug ausente ou inválido em um artigo: "${slug ?? ""}".`);
    }
    if (!date) fail(`o artigo "${slug}" precisa ter uma data de publicação.`);

    return {
      slug,
      publishedDate: toIsoDate(date, "date", slug),
      modifiedDate: updatedAt ? toIsoDate(updatedAt, "updatedAt", slug) : undefined,
    };
  });

  const slugs = new Set();
  for (const post of posts) {
    if (slugs.has(post.slug)) fail(`slug duplicado: "${post.slug}".`);
    slugs.add(post.slug);
  }

  return posts;
}

function readExistingStaticUrls(xml) {
  const urls = [];
  const blocks = xml.match(/<url>\s*[\s\S]*?<\/url>/g) ?? [];

  for (const block of blocks) {
    const location = block.match(/<loc>([^<]+)<\/loc>/)?.[1]?.trim();
    if (!location) continue;

    const parsed = new URL(location);
    if (parsed.origin !== SITE_URL) {
      fail(`URL fora do domínio canônico encontrada no sitemap: ${location}`);
    }

    // The blog detail URLs are rebuilt from the source of truth below.
    if (parsed.pathname.startsWith("/blog/")) continue;

    const lastmod = block.match(/<lastmod>(\d{4}-\d{2}-\d{2})<\/lastmod>/)?.[1];
    urls.push({ location, lastmod });
  }

  return urls;
}

function escapeXml(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;");
}

const [blogSource, transportBlogSource, existingSitemap] = await Promise.all([
  readFile(BLOG_SOURCE, "utf8"),
  readFile(TRANSPORT_BLOG_SOURCE, "utf8"),
  readFile(SITEMAP_PATH, "utf8"),
]);

const posts = [
  ...extractBlogPosts(blogSource),
  ...extractBlogPosts(transportBlogSource, TRANSPORT_BLOG_SOURCE, "transportBlogPosts"),
];
const staticUrls = readExistingStaticUrls(existingSitemap);
const blogUrls = posts.map((post) => ({
  location: `${SITE_URL}/blog/${post.slug}`,
  lastmod: post.modifiedDate,
}));

const allUrls = [...staticUrls, ...blogUrls];
const uniqueUrls = new Set(allUrls.map((item) => item.location));
if (uniqueUrls.size !== allUrls.length) fail("foram encontradas URLs duplicadas no sitemap.");
if (allUrls.length > 50_000) fail("o sitemap ultrapassou o limite de 50.000 URLs.");

const entries = allUrls.map(({ location, lastmod }) => {
  const lastmodTag = lastmod ? `\n    <lastmod>${lastmod}</lastmod>` : "";
  return `  <url>\n    <loc>${escapeXml(location)}</loc>${lastmodTag}\n  </url>`;
});

const output = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="${SITEMAP_NAMESPACE}">\n${entries.join("\n")}\n</urlset>\n`;
await writeFile(SITEMAP_PATH, output, "utf8");

console.log(
  `[sitemap] Gerado com sucesso: ${allUrls.length} URLs totais, ${posts.length} artigos e ${staticUrls.length} páginas institucionais.`
);
