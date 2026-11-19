export interface RoutingConcept {
  title: string;
  description: string;
  code: string;
}

export interface GuardType {
  name: string;
  icon: string;
  description: string;
  code: string;
}

export interface ResolverExample {
  title: string;
  code: string;
}

export const routingBasics: RoutingConcept[] = [
  {
    title: 'Define Routes',
    description: 'Routes map URLs to components. Each route has a path and a component (or loadComponent for lazy loading).',
    code: `import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', component: HomePage },
  { path: 'about', component: AboutPage },
  { path: 'users/:id', component: UserPage },
  { path: '**', component: NotFoundPage }  // Wildcard
];`
  },
  {
    title: 'Route Parameters',
    description: 'Extract dynamic segments from the URL using ActivatedRoute.',
    code: `import { inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({ selector: 'app-user', standalone: true })
export class UserPage {
  route = inject(ActivatedRoute);

  ngOnInit() {
    // Static: route.snapshot.params['id']
    // Dynamic (observes changes):
    this.route.params.subscribe(p => console.log(p['id']));
    this.route.queryParams.subscribe(q => console.log(q['page']));
  }
}`
  },
  {
    title: 'Navigation',
    description: 'Use routerLink for declarative navigation and Router for programmatic navigation.',
    code: `<!-- Template: routerLink -->
<a routerLink="/users/42" routerLinkActive="active">User 42</a>
<a [routerLink]="'/users/' + userId">User</a>
<a [routerLink]="['/users', userId, 'profile']">Profile</a>

<!-- TypeScript: Router -->
import { Router } from '@angular/router';

export class SomeComponent {
  router = inject(Router);

  goToUser(id: number) {
    this.router.navigate(['/users', id], {
      queryParams: { tab: 'details' }
    });
  }
}`
  },
  {
    title: 'Lazy Loading',
    description: 'Load route components on demand with loadComponent to reduce initial bundle size.',
    code: `export const routes: Routes = [
  { path: '', component: HomePage },
  {
    path: 'admin',
    loadComponent: () => import('./admin/admin').then(m => m.AdminPage)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard.routes').then(m => m.routes)
  }
];`
  }
];

export const guardTypes: GuardType[] = [
  {
    name: 'CanActivate',
    icon: '🔒',
    description: 'Prevents route activation if conditions are not met (e.g., user not authenticated).',
    code: `import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  if (authService.isLoggedIn()) {
    return true;
  }
  return router.createUrlTree(['/login'], {
    queryParams: { returnUrl: state.url }
  });
};`
  },
  {
    name: 'CanMatch',
    icon: '🚧',
    description: 'Prevents a route from being matched at all, useful for feature flags or role-based module loading.',
    code: `import { CanMatchFn } from '@angular/router';

export const adminGuard: CanMatchFn = (route, segments) => {
  const authService = inject(AuthService);
  return authService.hasRole('admin');
};

// Usage
{
  path: 'admin',
  canMatch: [adminGuard],
  loadComponent: () => import('./admin/admin').then(m => m.AdminPage)
}`
  },
  {
    name: 'CanDeactivate',
    icon: '💾',
    description: 'Prevents leaving a route if conditions are not met (e.g., unsaved changes).',
    code: `import { CanDeactivateFn } from '@angular/router';

export const unsavedGuard: CanDeactivateFn<EditComponent> = (component) => {
  if (component.hasUnsavedChanges()) {
    return confirm('You have unsaved changes. Leave anyway?');
  }
  return true;
};`
  },
  {
    name: 'Resolve',
    icon: '📦',
    description: 'Pre-fetches data before route activation, ensuring data is available when the component loads.',
    code: `import { ResolveFn } from '@angular/router';

export const userResolver: ResolveFn<User> = (route) => {
  const id = route.paramMap.get('id');
  return inject(UserService).getUser(id!);
};

// Usage
{
  path: 'users/:id',
  component: UserPage,
  resolve: { user: userResolver }
}`
  }
];

export const resolverExamples: ResolverExample[] = [
  {
    title: 'Using Resolved Data',
    code: `@Component({ selector: 'app-user', standalone: true })
export class UserPage {
  route = inject(ActivatedRoute);

  // Data is already available in snapshot
  ngOnInit() {
    const user = this.route.snapshot.data['user'] as User;
    console.log('User loaded:', user);
  }
}`
  },
  {
    title: 'Router Outlet',
    code: `<!-- Main outlet -->
<router-outlet />

<!-- Named outlets for side-by-side components -->
<router-outlet name="sidebar" />
<router-outlet />

// Secondary route
this.router.navigate(['/main'], { outlets: { sidebar: 'details' } });`
  }
];

export const routeConfigurations = [
  {
    title: 'Route Configuration Options',
    items: [
      { option: 'path', description: 'URL path pattern (supports :param and ** wildcard)' },
      { option: 'component', description: 'Component to display for this route' },
      { option: 'loadComponent', description: 'Lazy-loads a component dynamically' },
      { option: 'loadChildren', description: 'Lazy-loads a child route configuration' },
      { option: 'canActivate', description: 'Guards that must pass before activation' },
      { option: 'canMatch', description: 'Guards that must pass before route matching' },
      { option: 'canDeactivate', description: 'Guards that must pass before leaving' },
      { option: 'resolve', description: 'Data resolvers to pre-fetch data' },
      { option: 'data', description: 'Static data attached to the route' },
      { option: 'title', description: 'Document title (or a resolve for dynamic titles)' },
      { option: 'redirectTo', description: 'Redirect to another route' },
      { option: 'children', description: 'Nested child routes' }
    ]
  }
];
