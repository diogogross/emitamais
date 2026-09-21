import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/')({
  component: Index,
});

function Index() {
  return (
    <div className="p-4">
      <h1>Bem-vindo ao Emita Go</h1>
      <p>Sua solução completa de emissão.</p>
    </div>
  );
}
