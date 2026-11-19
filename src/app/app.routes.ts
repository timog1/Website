import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', loadComponent: () => import('./pages/home/home').then(m => m.HomePage) },
  { path: 'hydration', loadComponent: () => import('./pages/hydration/hydration').then(m => m.HydrationPage) },
  { path: 'components', loadComponent: () => import('./pages/components-page/components-page').then(m => m.ComponentsPage) },
  { path: 'directives', loadComponent: () => import('./pages/directives/directives').then(m => m.DirectivesPage) },
  { path: 'services', loadComponent: () => import('./pages/services/services').then(m => m.ServicesPage) },
  { path: 'forms', loadComponent: () => import('./pages/forms/forms').then(m => m.FormsPage) },
  { path: 'routing', loadComponent: () => import('./pages/routing/routing').then(m => m.RoutingPage) },
  { path: 'state', loadComponent: () => import('./pages/state-management/state-management').then(m => m.StateManagementPage) },
  { path: 'pipes', loadComponent: () => import('./pages/pipes/pipes').then(m => m.PipesPage) },
  { path: 'testing', loadComponent: () => import('./pages/testing/testing').then(m => m.TestingPage) },
  { path: 'performance', loadComponent: () => import('./pages/performance/performance').then(m => m.PerformancePage) },
  { path: 'exercises', loadComponent: () => import('./pages/exercises/exercises').then(m => m.ExercisesPage) },
  { path: '**', redirectTo: '' },
];
