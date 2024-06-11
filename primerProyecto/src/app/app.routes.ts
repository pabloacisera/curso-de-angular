import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: "dashboard",
    loadComponent: () => import('./dashboard/dashboard.component').then(m => m.DashboardComponent),
    children: [
      // Añadir rutas secundarias aquí si es necesario
    ]
  }, 
  {
    path: "",
    redirectTo: '/dashboard',
    pathMatch: 'full'
  }
];
