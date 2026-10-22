# Compatibilidade com navegadores — EmitaGo

## Situação identificada em 2026-10-22

O projeto utiliza Tailwind CSS 4.x e Vite 8.x. O Tailwind CSS v4 foi projetado para navegadores modernos e depende de recursos de CSS que não estão disponíveis em versões antigas, incluindo `oklch()`, `color-mix()`, `@property` e sintaxe moderna de media queries. A documentação oficial recomenda Tailwind CSS 3.4 quando há necessidade de suportar navegadores anteriores.

Fontes:
- https://tailwindcss.com/docs/compatibility
- https://tailwindcss.com/docs/upgrade-guide
- https://vite.dev/guide/build

## Mitigação aplicada nesta branch

A configuração de produção do Vite agora declara alvos de transformação para Chrome 90, Edge 90, Firefox 115 e Safari 15, tanto para JavaScript quanto para a etapa de minificação CSS. Isso permite que o build transforme parte da sintaxe para esses alvos quando o pipeline suporta a transformação.

**Limitação importante:** definir alvos do Vite não torna Tailwind CSS v4 compatível por completo com esses navegadores. Recursos CSS que o Tailwind v4 exige podem continuar causando diferenças de layout. A alteração é uma mitigação, não uma garantia de compatibilidade.

## Recomendação para suporte amplo

Se a exigência comercial inclui Chrome anterior ao 111, Edge anterior ao 111, Safari anterior ao 16.4 e Firefox anterior ao 128, planejar uma migração controlada para Tailwind CSS 3.4. Essa migração não deve ser feita como simples troca de dependências: revisar primeiro a folha `src/styles.css`, tokens de tema, utilitários personalizados, variantes, animações e classes usadas pelos componentes.

## Checklist de validação antes de publicar

- [ ] Instalar dependências em ambiente limpo e executar o build de produção.
- [ ] Confirmar que a configuração `vite.build.target` e `vite.build.cssTarget` é aceita pelo wrapper de configuração do projeto.
- [ ] Verificar a página inicial e páginas públicas em Chrome 90 e Chrome atual.
- [ ] Verificar responsividade, menus, formulários, botões, tabelas e modais.
- [ ] Testar rotas de autenticação e páginas do produto sem executar transações reais.
- [ ] Conferir console, requisições de rede, fontes, imagens e CSS carregado.
- [ ] Confirmar que metadados SEO, canonical, sitemap e URLs não mudaram.
- [ ] Não publicar até que o build e os testes visuais passem.

## Escopo desta alteração

Esta alteração não muda componentes de negócio, integrações fiscais, autenticação, banco de dados ou conteúdo SEO. Os testes em navegadores reais ainda precisam ser executados em um ambiente de CI ou em máquinas com as versões-alvo instaladas.
