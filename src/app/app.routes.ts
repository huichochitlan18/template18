import { Routes } from '@angular/router';
import { authRoutes } from './core/auth/auth.routes';
import { featureRoutes } from './features/feature.routes';

export const routes: Routes = [
  { path: 'auth', loadChildren: () => authRoutes },
  { path: '', loadChildren: () => featureRoutes },
  { path: '', redirectTo: '', pathMatch: 'full' },
  {
    path: '**',
    loadComponent: () =>
      import('./shared/components/not-found/not-found.component'),
  },
];
