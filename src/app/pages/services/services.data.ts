export interface ProviderLevel {
  icon: string;
  name: string;
  description: string;
  example: string;
}

export const basicService = `import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'  // Singleton — one instance per app
})
export class UserService {
  private users = signal([
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' }
  ]);

  getAll() {
    return this.users();
  }

  getById(id: number) {
    return this.users().find(u => u.id === id);
  }

  add(user: { id: number; name: string }) {
    this.users.update(users => [...users, user]);
  }
}`;

export const useService = `import { Component } from '@angular/core';
import { UserService } from './user.service';

@Component({
  selector: 'app-user-list',
  standalone: true,
  template: \`
    @for (user of users(); track user.id) {
      <div>{{ user.name }}</div>
    }
  \`
})
export class UserListComponent {
  // Method 1: Constructor injection (classic)
  // constructor(private userService: UserService) {}

  // Method 2: Field-level injection (Angular 14+)
  private userService = inject(UserService);

  // Expose for template
  users = this.userService.getAll;
}`;

export const providerLevels: ProviderLevel[] = [
  {
    icon: '🌐',
    name: 'Root Injector (providedIn: "root")',
    description: 'Creates a singleton service available throughout the entire application. This is the most common and recommended approach.',
    example: `@Injectable({
  providedIn: 'root'
})
export class ApiService {}`
  },
  {
    icon: '📦',
    name: 'Component Injector',
    description: 'Creates a new instance for each component and its children. Useful for component-specific state.',
    example: `@Component({
  selector: 'app-dashboard',
  providers: [DashboardService],
  template: \`...\`
})
export class DashboardComponent {}`
  },
  {
    icon: '🏗️',
    name: 'Directive/Component (providedIn: "self")',
    description: 'Each instance of the directive/component gets its own service instance.',
    example: `@Injectable({
  providedIn: 'self'
})
export class CounterService {}`
  },
  {
    icon: '📋',
    name: 'Module Injector',
    description: 'Register at the NgModule level. Less common with standalone components.',
    example: `@NgModule({
  providers: [LoggerService]
})
export class SharedModule {}`
  }
];

export const httpClientExample = `import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class DataService {
  private apiUrl = 'https://api.example.com';

  constructor(private http: HttpClient) {}

  // GET request
  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(\`\${this.apiUrl}/users\`);
  }

  // POST request
  createUser(user: User): Observable<User> {
    return this.http.post<User>(\`\${this.apiUrl}/users\`, user);
  }

  // PUT request
  updateUser(id: number, user: User): Observable<User> {
    return this.http.put<User>(\`\${this.apiUrl}/users/\${id}\`, user);
  }

  // DELETE request
  deleteUser(id: number): Observable<void> {
    return this.http.delete<void>(\`\${this.apiUrl}/users/\${id}\`);
  }
}

// Provide in app config
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient()  // Required for HttpClient
  ]
};`;

export const injectExample = `import { inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

// No constructor needed!
export class DataComponent {
  // Inject at field level — clean and concise
  private http = inject(HttpClient);
  private route = inject(ActivatedRoute);
  private userService = inject(UserService);

  // Inject optional dependencies
  private logger = inject(LoggerService, { optional: true });

  ngOnInit() {
    this.route.params.subscribe(params => {
      console.log('ID:', params.id);
    });
  }
}`;

export const bestPractices = [
  'Use providedIn: "root" for most services to get singleton behavior and tree-shaking.',
  'Keep services focused on a single responsibility — one service, one purpose.',
  'Use the inject() function for cleaner dependency injection at the field level.',
  'Use Signals in services for reactive state management instead of Subject/BehaviorSubject when possible.',
  'Always provide HttpClient with provideHttpClient() in your app config.',
  'Use RxJS operators like catchError, retry, and tap for robust HTTP handling.',
  'Avoid putting DOM manipulation or component-specific logic in services.',
  'Use interfaces to define service contracts for better testability and type safety.'
];
