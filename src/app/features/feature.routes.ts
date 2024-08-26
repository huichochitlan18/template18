import { Routes } from '@angular/router';

export const featureRoutes: Routes = [
  {
    path: '',
    loadComponent: () => import('../core/layout/main/main.component'),
    children: [
      {
        path: '',
        loadComponent: () => import('../features/home/home.component'),
      },
      {
        path: 'users',
        loadComponent: () => import('../features/users/users.component'),
      },
      { path: '**', redirectTo: '' },
    ],
  },
];
