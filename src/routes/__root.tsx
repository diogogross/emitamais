import { Outlet } from '@tanstack/react-router';

export const Route = createRootRoute({
  component: () => (
    <>
      <header>Emita Go</header>
      <Outlet />
    </>
  ),
});