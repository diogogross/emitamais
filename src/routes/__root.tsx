import { createRootRoute, Outlet, ScrollRestoration } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/router-devtools';
import { Toaster } from '@/components/ui/sonner';
import '../index.css';

export const Route = createRootRoute({
  component: () => (
    <>
      <ScrollRestoration />
      <Outlet />
      <Toaster />
      <TanStackRouterDevtools />
    </>
  ),
  errorComponent: ({ error }) => (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 text-center">
      <h1 className="text-2xl font-bold mb-2">Algo deu errado</h1>
      <p className="text-muted-foreground mb-4">Pedimos desculpas, ocorreu um erro inesperado.</p>
      <button 
        onClick={() => window.location.href = '/'}
        className="px-4 py-2 bg-primary text-primary-foreground rounded-md"
      >
        Voltar para o início
      </button>
    </div>
  ),
});