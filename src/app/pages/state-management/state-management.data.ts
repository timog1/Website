export interface StatePattern {
  name: string;
  icon: string;
  description: string;
  code: string;
  whenToUse: string;
}

export interface SignalConcept {
  title: string;
  description: string;
  code: string;
}

export interface NgrxConcept {
  name: string;
  description: string;
  code: string;
}

export const signalConcepts: SignalConcept[] = [
  {
    title: 'Writable Signals',
    description: 'Signals are the foundation of reactive state in modern Angular. They hold a value and notify dependents when that value changes.',
    code: `import { signal } from '@angular/core';

@Component({ selector: 'app-counter', standalone: true })
export class CounterComponent {
  count = signal(0);

  increment() {
    this.count.update(c => c + 1);
  }

  reset() {
    this.count.set(0);
  }
}

// In template
<p>Count: {{ count() }}</p>`
  },
  {
    title: 'Computed Signals',
    description: 'Derived values that automatically update when their source signals change. They are read-only and memoized.',
    code: `import { signal, computed } from '@angular/core';

@Component({ selector: 'app-shopping', standalone: true })
export class ShoppingComponent {
  items = signal([{ name: 'Book', price: 15 }, { name: 'Pen', price: 3 }]);

  total = computed(() =>
    this.items().reduce((sum, item) => sum + item.price, 0)
  );

  itemCount = computed(() => this.items().length);

  isEmpty = computed(() => this.items().length === 0);
}

// In template
<p>Total: ${'$'}{{ total() }}</p>
<p>Items: {{ itemCount() }}</p>`
  },
  {
    title: 'Effects',
    description: 'Side effects that run when a signal changes. Use for logging, API calls, or DOM manipulation outside the template.',
    code: `import { signal, effect } from '@angular/core';

@Component({ selector: 'app-user', standalone: true })
export class UserComponent {
  username = signal('john');

  constructor() {
    // Runs when username changes
    effect(() => {
      console.log('Username is now:', this.username());
      localStorage.setItem('lastUser', this.username());
    });
  }
}

// Untracked effect (runs once)
import { untracked } from '@angular/core';
effect(() => {
  untracked(() => {
    console.log('This does not trigger re-runs');
  });
});`
  },
  {
    title: 'Linked Signals',
    description: 'Create linked signals that share a source but can be overridden by child components.',
    code: `import { linkedSignal } from '@angular/core';

@Component({ selector: 'app-data', standalone: true })
export class DataComponent {
  data = linkedSignal<string[]>({
    initialValue: [],
    compute: async (previous) => {
      return fetch('/api/data').then(r => r.json());
    }
  });

  refresh() {
    this.data.set([]); // Triggers recomputation
  }
}`
  }
];

export const statePatterns: StatePattern[] = [
  {
    name: 'Service with Signals',
    icon: '🔧',
    description: 'Share state across components using a service with signal-based properties. This is the simplest and most common pattern.',
    code: `import { Injectable, signal, computed } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class TodoService {
  private todos = signal<Todo[]>([]);

  todos$ = this.todos.asReadonly();
  completedCount = computed(() =>
    this.todos().filter(t => t.done).length
  );

  addTodo(text: string) {
    this.todos.update(todos => [...todos, { text, done: false }]);
  }

  toggleTodo(index: number) {
    this.todos.update(todos =>
      todos.map((t, i) => i === index ? { ...t, done: !t.done } : t)
    );
  }
}`,
    whenToUse: 'Use for most apps — simple, effective, and built into Angular.'
  },
  {
    name: 'model() — Two-Way Signal Input',
    icon: '🔄',
    description: 'The model() function creates a two-way signal input, allowing child components to both read and write a value.',
    code: `// Child component
@Component({ selector: 'app-input', standalone: true })
export class InputComponent {
  value = model('');  // Two-way signal

  onKeyup(event: Event) {
    this.value.set((event.target as HTMLInputElement).value);
  }
}

// Parent template
<app-input [model]="searchTerm" (modelChange)="searchTerm = $event" />
<!-- Or with shorthand -->
<app-input [(model)]="searchTerm" />`,
    whenToUse: 'Use for form-like components that need to sync values with parent.'
  },
  {
    name: 'Input with Transform',
    icon: '🔀',
    description: 'Transform input values on the fly using the transform option.',
    code: `@Component({ selector: 'app-display', standalone: true })
export class DisplayComponent {
  // Automatically trims and lowercases
  name = input.required({
    transform: (value: string) => value.trim().toLowerCase()
  });

  // Parse string to number
  age = input(0, {
    transform: (value: string) => parseInt(value, 10)
  });
}`,
    whenToUse: 'Use when you need automatic type conversion or normalization.'
  },
  {
    name: 'NgRx / SignalStore',
    icon: '📦',
    description: 'For large-scale apps, Angular provides @angular/signals SignalStore and the popular NgRx library for structured state management.',
    code: `import { signalStore, state, computed, method } from '@angular/ssr/signal-store';

const TodoStore = signalStore(
  { providedIn: 'root' },
  state({ todos: [] as Todo[] }),
  computed((store) => ({
    completedCount: () =>
      store.todos().filter(t => t.done).length
  })),
  method((store) => ({
    addTodo: (text: string) => {
      store.todos.update(t => [...t, { text, done: false }]);
    }
  }))
);

// Inject in components
const store = inject(TodoStore);`,
    whenToUse: 'Use for large enterprise apps with complex state and many teams.'
  }
];

export const ngrxConcepts: NgrxConcept[] = [
  {
    name: 'NgRx Actions',
    description: 'Actions represent state changes as discrete events with a type and optional payload.',
    code: `import { createAction, props } from '@ngrx/store';

export const loadTodos = createAction(
  '[Todo] Load Todos'
);

export const addTodo = createAction(
  '[Todo] Add Todo',
  props<{ text: string }>()
);

export const toggleTodo = createAction(
  '[Todo] Toggle Todo',
  props<{ id: number }>()
);`
  },
  {
    name: 'NgRx Reducers',
    description: 'Reducers define how the state changes in response to actions. They are pure functions.',
    code: `import { createReducer, on } from '@ngrx/store';

export interface TodoState {
  todos: Todo[];
  loading: boolean;
}

export const initialState: TodoState = {
  todos: [],
  loading: false
};

export const todoReducer = createReducer(
  initialState,
  on(addTodo, (state, { text }) => ({
    ...state,
    todos: [...state.todos, { text, done: false }]
  })),
  on(toggleTodo, (state, { id }) => ({
    ...state,
    todos: state.todos.map(t =>
      t.id === id ? { ...t, done: !t.done } : t
    )
  }))
);`
  },
  {
    name: 'NgRx Effects',
    description: 'Effects handle side effects like API calls, triggered by actions.',
    code: `import { inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { switchMap, map } from 'rxjs/operators';

export class TodoEffects {
  actions$ = inject(Actions);
  http = inject(HttpClient);

  loadTodos$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadTodos),
      switchMap(() =>
        this.http.get<Todo[]>('/api/todos').pipe(
          map(todos => loadTodosSuccess({ todos }))
        )
      )
    )
  );
}`
  }
];

export const comparisonTable = [
  {
    feature: 'Complexity',
    service: 'Low — simple service class',
    ngrx: 'High — actions, reducers, effects'
  },
  {
    feature: 'Learning Curve',
    service: 'Easy — signals are intuitive',
    ngrx: 'Steep — requires RxJS knowledge'
  },
  {
    feature: 'Scalability',
    service: 'Good for small to medium apps',
    ngrx: 'Excellent for large enterprise apps'
  },
  {
    feature: 'Debugging',
    service: 'Basic — console logging',
    ngrx: 'Powerful — time-travel debugging'
  },
  {
    feature: 'Boilerplate',
    service: 'Minimal',
    ngrx: 'Significant'
  },
  {
    feature: 'Team Collaboration',
    service: 'Good — shared services',
    ngrx: 'Excellent — predictable state flow'
  }
];
