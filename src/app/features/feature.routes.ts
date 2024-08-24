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
      { path: '**', redirectTo: '' },
    ],
  },
];
