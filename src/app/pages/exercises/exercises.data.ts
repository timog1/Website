export interface QuizQuestion {
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  topic: string;
}

export interface CodingExercise {
  title: string;
  description: string;
  starterCode: string;
  expectedOutput: string;
  hint: string;
  solution: string;
  topic: string;
}

export const quizQuestions: QuizQuestion[] = [
  {
    question: 'What is the purpose of the @Component decorator in Angular?',
    options: [
      'To define a TypeScript class',
      'To mark a class as an Angular component with metadata',
      'To create a new HTML element',
      'To import dependencies'
    ],
    correctAnswer: 1,
    explanation: 'The @Component decorator attaches metadata to a class, telling Angular that it is a component and providing configuration like selector, template, and styles.',
    topic: 'Components'
  },
  {
    question: 'Which signal function creates a read-only derived value?',
    options: ['signal()', 'computed()', 'effect()', 'input()'],
    correctAnswer: 1,
    explanation: 'computed() creates a read-only signal that automatically recalculates when its source signals change. It is memoized and only recomputes when needed.',
    topic: 'Signals'
  },
  {
    question: 'What does "hydration" mean in the context of Angular SSR?',
    options: [
      'Adding water to the server',
      'Attaching JavaScript event listeners to server-rendered HTML',
      'Converting HTML to CSS',
      'Minifying JavaScript bundles'
    ],
    correctAnswer: 1,
    explanation: 'Hydration is the process where Angular attaches event listeners, data bindings, and interactivity to the static HTML that was rendered on the server.',
    topic: 'Hydration'
  },
  {
    question: 'Which modern Angular control flow replaces *ngFor?',
    options: ['@loop', '@for', '@each', '@iterate'],
    correctAnswer: 1,
    explanation: 'The @for block is the modern Angular control flow syntax that replaces *ngFor. It includes built-in tracking and metadata variables like $index, $first, $last.',
    topic: 'Directives'
  },
  {
    question: 'What is the purpose of providedIn: "root" in a service?',
    options: [
      'It makes the service private',
      'It registers the service as a singleton at the root injector level',
      'It provides the service to a specific component only',
      'It creates a new instance for each injection'
    ],
    correctAnswer: 1,
    explanation: 'providedIn: "root" registers the service with the root injector, making it a singleton across the entire application. It also enables tree-shaking if the service is unused.',
    topic: 'Services'
  },
  {
    question: 'Which change detection strategy checks a component only when its input reference changes?',
    options: ['Default', 'OnPush', 'Manual', 'Async'],
    correctAnswer: 1,
    explanation: 'OnPush change detection only checks a component when its @input() reference changes, an event originates from the component, or an async pipe emits a new value.',
    topic: 'Performance'
  },
  {
    question: 'What does the async pipe do in an Angular template?',
    options: [
      'Converts a string to async',
      'Subscribes to an Observable or Promise and auto-unsubscribes',
      'Makes the template asynchronous',
      'Delays rendering by 1 second'
    ],
    correctAnswer: 1,
    explanation: 'The async pipe subscribes to an Observable or Promise, returns the latest value, and automatically handles unsubscription to prevent memory leaks.',
    topic: 'Pipes'
  },
  {
    question: 'Which route guard prevents a route from being activated?',
    options: ['CanMatch', 'CanActivate', 'CanDeactivate', 'Resolve'],
    correctAnswer: 1,
    explanation: 'CanActivate is called before a route is activated. If it returns false or a UrlTree, the navigation is blocked. CanMatch prevents route matching, CanDeactivate prevents leaving.',
    topic: 'Routing'
  },
  {
    question: 'What is the purpose of TestBed in Angular testing?',
    options: [
      'To create HTML test pages',
      'To configure and create testing modules for components and services',
      'To run end-to-end tests',
      'To mock database connections'
    ],
    correctAnswer: 1,
    explanation: 'TestBed is Angular\'s primary testing utility. It configures testing modules, provides dependency injection, and creates component fixtures for unit tests.',
    topic: 'Testing'
  },
  {
    question: 'What does the model() function create in Angular?',
    options: [
      'A database model',
      'A two-way signal input for parent-child communication',
      'A CSS model for styling',
      'An HTTP request model'
    ],
    correctAnswer: 1,
    explanation: 'model() creates a two-way signal input that allows child components to both read and write values, syncing with the parent component automatically.',
    topic: 'State Management'
  },
  {
    question: 'Which validator checks that a form control value matches a pattern?',
    options: ['Validators.required', 'Validators.minLength', 'Validators.pattern', 'Validators.email'],
    correctAnswer: 2,
    explanation: 'Validators.pattern accepts a regular expression and validates that the form control value matches the specified pattern.',
    topic: 'Forms'
  },
  {
    question: 'What is the purpose of @defer in Angular?',
    options: [
      'To delay all component rendering',
      'To lazy-load components based on triggers like viewport, hover, or idle',
      'To stop change detection',
      'To defer HTTP requests'
    ],
    correctAnswer: 1,
    explanation: '@defer blocks lazy-load components and content based on triggers like viewport entry, hover, idle time, interaction, or time delay — improving initial load performance.',
    topic: 'Performance'
  }
];

export const codingExercises: CodingExercise[] = [
  {
    title: 'Create a Signal Counter',
    description: 'Create a component with a signal counter that can increment, decrement, and reset. Use computed signals to display if the count is positive or negative.',
    starterCode: `import { Component, signal, computed } from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: true,
  templateUrl: './counter.html'
})
export class CounterComponent {
  // Create a signal for count (start at 0)
  
  // Create a computed signal for isPositive
  
  // Create a computed signal for doubled
  
  increment() {
    // Update count + 1
  }

  decrement() {
    // Update count - 1
  }

  reset() {
    // Set count to 0
  }
}`,
    expectedOutput: `count = signal(0)
isPositive = computed(() => this.count() > 0)
doubled = computed(() => this.count() * 2)
increment: this.count.update(c => c + 1)
decrement: this.count.update(c => c - 1)
reset: this.count.set(0)`,
    hint: 'Use signal(0) for the initial value, computed() for derived values, and .update() or .set() to modify signals.',
    solution: `import { Component, signal, computed } from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: true,
  templateUrl: './counter.html'
})
export class CounterComponent {
  count = signal(0);
  isPositive = computed(() => this.count() > 0);
  doubled = computed(() => this.count() * 2);

  increment() {
    this.count.update(c => c + 1);
  }

  decrement() {
    this.count.update(c => c - 1);
  }

  reset() {
    this.count.set(0);
  }
}`,
    topic: 'Signals'
  },
  {
    title: 'Build a Todo List Component',
    description: 'Create a component that manages a list of todos. Each todo has text and a done status. Use input() and output() for parent communication.',
    starterCode: `import { Component, input, output } from '@angular/core';

export interface Todo {
  id: number;
  text: string;
  done: boolean;
}

@Component({
  selector: 'app-todo-list',
  standalone: true,
  templateUrl: './todo-list.html'
})
export class TodoListComponent {
  // Create an input for todos
  
  // Create an output for toggle events
  
  // Create an output for delete events
  
  onToggle(todo: Todo) {
    // Emit toggle event
  }

  onDelete(todo: Todo) {
    // Emit delete event
  }
}`,
    expectedOutput: `todos = input.required<Todo[]>()
toggled = output<Todo>()
deleted = output<Todo>()
onToggle: this.toggled.emit(todo)
onDelete: this.deleted.emit(todo)`,
    hint: 'Use input.required<Todo[]>() for the todos list and output<Todo>() for events. Use .emit() to fire events.',
    solution: `import { Component, input, output } from '@angular/core';

export interface Todo {
  id: number;
  text: string;
  done: boolean;
}

@Component({
  selector: 'app-todo-list',
  standalone: true,
  templateUrl: './todo-list.html'
})
export class TodoListComponent {
  todos = input.required<Todo[]>();
  toggled = output<Todo>();
  deleted = output<Todo>();

  onToggle(todo: Todo) {
    this.toggled.emit(todo);
  }

  onDelete(todo: Todo) {
    this.deleted.emit(todo);
  }
}`,
    topic: 'Components'
  },
  {
    title: 'Create a Custom Pipe',
    description: 'Create a pipe that reverses a string. Then create another pipe that highlights all occurrences of a search term in text.',
    starterCode: `import { Pipe, PipeTransform } from '@angular/core';

// Reverse pipe
@Pipe({
  name: 'reverse',
  standalone: true
})
export class ReversePipe implements PipeTransform {
  transform(value: string): string {
    // Reverse the string
  }
}

// Highlight pipe
@Pipe({
  name: 'highlight',
  standalone: true
})
export class HighlightPipe implements PipeTransform {
  transform(value: string, search: string): string {
    // Replace all occurrences of search with <mark>search</mark>
  }
}`,
    expectedOutput: `Reverse: value.split('').reverse().join('')
Highlight: value.replace(new RegExp(search, 'gi'), '<mark>$&</mark>')`,
    hint: 'For reverse, split the string into an array, reverse it, and join back. For highlight, use RegExp with the "gi" flags for global case-insensitive matching.',
    solution: `import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse',
  standalone: true
})
export class ReversePipe implements PipeTransform {
  transform(value: string): string {
    if (!value) return '';
    return value.split('').reverse().join('');
  }
}

@Pipe({
  name: 'highlight',
  standalone: true
})
export class HighlightPipe implements PipeTransform {
  transform(value: string, search: string): string {
    if (!value || !search) return value;
    const regex = new RegExp('\\b' + search + '\\b', 'gi');
    return value.replace(regex, '<mark>$&</mark>');
  }
}`,
    topic: 'Pipes'
  },
  {
    title: 'Build a Reactive Form',
    description: 'Create a reactive form with a name field (required, min 3 chars), an email field (required, email pattern), and an age field (required, min 18).',
    starterCode: `import { Component } from '@angular/core';
import { FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-registration',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './registration.html'
})
export class RegistrationComponent {
  constructor(private fb: FormBuilder) {}

  registrationForm = this.fb.group({
    // Add name field with validators
    
    // Add email field with validators
    
    // Add age field with validators
    
  });

  get name() { return this.registrationForm.get('name'); }
  get email() { return this.registrationForm.get('email'); }
  get age() { return this.registrationForm.get('age'); }

  onSubmit() {
    if (this.registrationForm.valid) {
      console.log('Form valid:', this.registrationForm.value);
    }
  }
}`,
    expectedOutput: `name: ['', [Validators.required, Validators.minLength(3)]]
email: ['', [Validators.required, Validators.email]]
age: [null, [Validators.required, Validators.min(18)]]`,
    hint: 'Use Validators.required, Validators.minLength(), Validators.email, and Validators.min() from @angular/forms.',
    solution: `import { Component } from '@angular/core';
import { FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-registration',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './registration.html'
})
export class RegistrationComponent {
  constructor(private fb: FormBuilder) {}

  registrationForm = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    email: ['', [Validators.required, Validators.email]],
    age: [null, [Validators.required, Validators.min(18)]]
  });

  get name() { return this.registrationForm.get('name'); }
  get email() { return this.registrationForm.get('email'); }
  get age() { return this.registrationForm.get('age'); }

  onSubmit() {
    if (this.registrationForm.valid) {
      console.log('Form valid:', this.registrationForm.value);
    }
  }
}`,
    topic: 'Forms'
  },
  {
    title: 'Create a Route Guard',
    description: 'Create an authentication guard that checks if a user is logged in. If not, redirect to the login page with a return URL.',
    starterCode: `import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  // Inject the router
  
  // Check if user is logged in (simulate with a simple check)
  const isLoggedIn = localStorage.getItem('token') !== null;

  // If logged in, allow navigation
  
  // If not logged in, redirect to login with return URL
  
};`,
    expectedOutput: `const router = inject(Router)
const isLoggedIn = localStorage.getItem('token') !== null
if (isLoggedIn) return true
return router.createUrlTree(['/login'], { queryParams: { returnUrl: state.url } })`,
    hint: 'Use inject(Router) to get the router. Use router.createUrlTree() to redirect with query parameters.',
    solution: `import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const isLoggedIn = localStorage.getItem('token') !== null;

  if (isLoggedIn) {
    return true;
  }
  return router.createUrlTree(['/login'], {
    queryParams: { returnUrl: state.url }
  });
};`,
    topic: 'Routing'
  },
  {
    title: 'Create a Service with TransferState',
    description: 'Create a service that fetches data on the server and transfers it to the client using Angular\'s TransferState API.',
    starterCode: `import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { StateKey, TransferState } from '@angular/core';
import { firstValueFrom } from 'rxjs';

export interface User {
  id: number;
  name: string;
}

@Injectable({ providedIn: 'root' })
export class UserService {
  private http = inject(HttpClient);
  private transferState = inject(TransferState);

  private readonly USER_KEY = new StateKey<User[]>('users');

  async getUsers(): Promise<User[]> {
    // Check if data exists in transfer state
    
    // If not, fetch from API and store in transfer state
    
  }
}`,
    expectedOutput: `const users = this.transferState.get(this.USER_KEY, null)
if (users) return users
const data = await firstValueFrom(this.http.get<User[]>('/api/users'))
this.transferState.set(this.USER_KEY, data)
return data`,
    hint: 'Use transferState.get() to check for cached data, and transferState.set() to store fetched data for the client.',
    solution: `import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { StateKey, TransferState } from '@angular/core';
import { firstValueFrom } from 'rxjs';

export interface User {
  id: number;
  name: string;
}

@Injectable({ providedIn: 'root' })
export class UserService {
  private http = inject(HttpClient);
  private transferState = inject(TransferState);

  private readonly USER_KEY = new StateKey<User[]>('users');

  async getUsers(): Promise<User[]> {
    const users = this.transferState.get(this.USER_KEY, null);
    if (users) return users;

    const data = await firstValueFrom(this.http.get<User[]>('/api/users'));
    this.transferState.set(this.USER_KEY, data);
    return data;
  }
}`,
    topic: 'Services'
  }
];
