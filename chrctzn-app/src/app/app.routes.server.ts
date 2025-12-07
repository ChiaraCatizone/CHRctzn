import { RenderMode, ServerRoute } from '@angular/ssr';

export { routes } from './app.routes';
export const serverRoutes: ServerRoute[] = [
  {
    path: '**',
    renderMode: RenderMode.Prerender
  }
];