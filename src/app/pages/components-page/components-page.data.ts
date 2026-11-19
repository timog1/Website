export interface LifecycleHook {
  name: string;
  description: string;
}

export interface TemplateSyntax {
  name: string;
  description: string;
  example: string;
}

export interface SignalType {
  name: string;
  description: string;
}

export const componentExample = `import { Component } from '@angular/core';

@Component({
  selector: 'app-user-card',
  standalone: true,
  imports: [],
  template: \`
    <div class="card">
      <h2>{{ name }}</h2>
      <p>{{ email }}</p>
      <button (click)="onToggle()">Toggle</button>
    </div>
  \`,
  styles: [\`
    :host { display: block; }
    .card { padding: 1rem; border: 1px solid #ddd; }
  \`]
})
export class UserCardComponent {
  name = 'John Doe';
  email = 'john@example.com';
  isVisible = true;

  onToggle() {
    this.isVisible = !this.isVisible;
  }
}`;

export const standaloneExample = `// Modern Angular — standalone by default
@Component({
  selector: 'app-header',
  standalone: true,  // No NgModule needed!
  imports: [RouterLink],  // Direct imports
  template: \`<nav>...</nav>\`
})
export class HeaderComponent {}

// Bootstrap without BrowserModule
bootstrapApplication(AppComponent, appConfig);`;

export const inputExample = `// Child component
@Component({
  selector: 'app-user-card',
  standalone: true,
  template: \`<h2>{{ name() }}</h2>\`
})
export class UserCardComponent {
  name = input.required<string>();
  email = input('default@example.com');  // with default
}

// Parent template
<app-user-card [name]="user.name" [email]="user.email" />`;

export const outputExample = `// Child component
import { output } from '@angular/core';

@Component({
  selector: 'app-search-box',
  standalone: true,
  template: \`
    <input (keyup)="onSearch($event)" />
  \`
})
export class SearchBoxComponent {
  searched = output<string>();

  onSearch(event: Event) {
    const value = (event.target as HTMLInputElement).value;
    this.searched.set(value);
  }
}

// Parent template
<app-search-box (searched)="onSearch($event)" />`;

export const lifecycleHooks: LifecycleHook[] = [
  { name: 'constructor()', description: 'TypeScript constructor. Use for DI only, not for initialization logic.' },
  { name: 'ngOnChanges()', description: 'Called when an @input() binding value changes. Receives SimpleChanges map.' },
  { name: 'ngOnInit()', description: 'Called once after the first ngOnChanges. Best place for initialization logic.' },
  { name: 'ngDoCheck()', description: 'Custom change detection logic. Called every cycle — use sparingly.' },
  { name: 'ngAfterContentInit()', description: 'Called after content (ng-content) is projected into the component.' },
  { name: 'ngAfterViewInit()', description: 'Called after the component\'s view and child views are initialized.' },
  { name: 'ngOnDestroy()', description: 'Called before the component is destroyed. Clean up subscriptions and listeners.' }
];

export const templateSyntax: TemplateSyntax[] = [
  {
    name: 'Interpolation',
    description: 'Display component property values using double curly braces.',
    example: '<p>Welcome, {{ userName }}!</p>'
  },
  {
    name: 'Property Binding',
    description: 'Bind component values to HTML element properties using square brackets.',
    example: '<img [src]="imageUrl" [alt]="imageAlt" />'
  },
  {
    name: 'Event Binding',
    description: 'Listen to DOM events using parentheses.',
    example: '<button (click)="onSave()">Save</button>'
  },
  {
    name: 'Two-Way Binding',
    description: 'Sync form inputs with component properties using banana-in-a-box syntax.',
    example: '<input [()]="userName" />'
  },
  {
    name: 'Control Flow',
    description: 'Modern Angular control flow with @if, @for, and @switch.',
    example: `@if (user.isAdmin) {
  <admin-panel />
} @else {
  <user-panel />
}`
  }
];

export const signalsExample = `import { signal, computed, effect } from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: true,
  template: \`
    <p>Count: {{ count() }}</p>
    <p>Doubled: {{ doubled() }}</p>
    <button (click)="increment()">+</button>
  \`
})
export class CounterComponent {
  // Writable signal
  count = signal(0);

  // Computed signal — auto-updates when count changes
  doubled = computed(() => this.count() * 2);

  // Effect — runs side effects when signal changes
  constructor() {
    effect(() => {
      console.log('Count is now:', this.count());
    });
  }

  increment() {
    this.count.update(c => c + 1);
  }
}`;

export const signalTypes: SignalType[] = [
  { name: 'signal()', description: 'Creates a writable signal with a initial value. Update with .set() or .update().' },
  { name: 'computed()', description: 'Creates a read-only signal derived from other signals. Auto-recomputes when dependencies change.' },
  { name: 'effect()', description: 'Runs a side effect when dependent signals change. Use for logging, DOM manipulation, or API calls.' }
];
