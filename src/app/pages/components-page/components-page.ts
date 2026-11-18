import { Component } from '@angular/core';

@Component({
  selector: 'app-components-page',
  template: `
    <div class="space-y-12">
      <section>
        <h1 class="text-4xl font-bold text-gray-900 mb-4">Components</h1>
        <p class="text-xl text-gray-600">
          The building blocks of every Angular application — learn how to create, communicate, and manage components.
        </p>
      </section>

      <!-- What are Components -->
      <section class="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
        <h2 class="text-2xl font-bold text-gray-900 mb-4">What are Angular Components?</h2>
        <p class="text-gray-600 leading-relaxed mb-4">
          Components are the most basic UI building block of an Angular application. An Angular application is a set of
          Angular components, which are now more commonly known as <strong>smart components</strong>. These components
          will have some basic business logic and be displayed using <strong>presentational components</strong>,
          also known as <strong>presenters</strong> or <strong>dumb components</strong>.
        </p>
        <p class="text-gray-600 leading-relaxed">
          A component consists of three parts:
        </p>
        <ul class="list-disc list-inside text-gray-600 space-y-2 mt-3 ml-4">
          <li><strong>TypeScript class</strong> — handles the data and behavior</li>
          <li><strong>HTML template</strong> — defines what the user sees</li>
          <li><strong>Styles</strong> — scoped CSS for the component's view</li>
        </ul>
      </section>

      <!-- Component Structure -->
      <section class="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
        <h2 class="text-2xl font-bold text-gray-900 mb-6">Component Structure</h2>
        <div class="bg-gray-900 rounded-lg p-6 font-mono text-sm text-green-400 overflow-x-auto">
          <pre>{{ componentExample }}</pre>
        </div>
      </section>

      <!-- Standalone Components -->
      <section class="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
        <h2 class="text-2xl font-bold text-gray-900 mb-4">Standalone Components</h2>
        <p class="text-gray-600 leading-relaxed mb-4">
          Since Angular 14, components can be declared as <strong>standalone</strong>, meaning they don't need to be
          part of an NgModule. This is now the default when generating components with the Angular CLI.
        </p>
        <p class="text-gray-600 leading-relaxed mb-4">
          Standalone components simplify the architecture by removing the need for NgModules in most cases.
          They declare their own imports, making them truly self-contained.
        </p>
        <div class="bg-gray-900 rounded-lg p-6 font-mono text-sm text-green-400 overflow-x-auto">
          <pre>{{ standaloneExample }}</pre>
        </div>
      </section>

      <!-- Input and Output -->
      <section class="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
        <h2 class="text-2xl font-bold text-gray-900 mb-6">Component Communication: @input() and @output()</h2>
        <div class="space-y-6">
          <div>
            <h3 class="text-lg font-semibold text-gray-900 mb-2">Inputs — Parent to Child</h3>
            <p class="text-gray-600 leading-relaxed mb-3">
              Use <code class="bg-gray-100 px-2 py-0.5 rounded text-red-600 text-sm">@input()</code> to receive data from a parent component.
            </p>
            <div class="bg-gray-900 rounded-lg p-4 font-mono text-sm text-green-400 overflow-x-auto">
              <pre>{{ inputExample }}</pre>
            </div>
          </div>
          <div>
            <h3 class="text-lg font-semibold text-gray-900 mb-2">Outputs — Child to Parent</h3>
            <p class="text-gray-600 leading-relaxed mb-3">
              Use <code class="bg-gray-100 px-2 py-0.5 rounded text-red-600 text-sm">@output()</code> to emit events to a parent component.
            </p>
            <div class="bg-gray-900 rounded-lg p-4 font-mono text-sm text-green-400 overflow-x-auto">
              <pre>{{ outputExample }}</pre>
            </div>
          </div>
        </div>
      </section>

      <!-- Lifecycle Hooks -->
      <section class="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
        <h2 class="text-2xl font-bold text-gray-900 mb-6">Lifecycle Hooks</h2>
        <p class="text-gray-600 leading-relaxed mb-6">
          Angular provides lifecycle hooks that let you tap into key moments of a component's life.
          Here are the most commonly used hooks:
        </p>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          @for (hook of lifecycleHooks; track hook.name) {
            <div class="border border-gray-200 rounded-xl p-4">
              <code class="text-red-600 font-semibold text-sm">{{ hook.name }}</code>
              <p class="text-gray-500 text-sm mt-1">{{ hook.description }}</p>
            </div>
          }
        </div>
      </section>

      <!-- Template Syntax -->
      <section class="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
        <h2 class="text-2xl font-bold text-gray-900 mb-6">Template Syntax Essentials</h2>
        <div class="space-y-4">
          @for (syntax of templateSyntax; track syntax.name) {
            <div class="border border-gray-200 rounded-xl p-5">
              <h4 class="font-semibold text-gray-900 mb-1">{{ syntax.name }}</h4>
              <p class="text-gray-500 text-sm mb-3">{{ syntax.description }}</p>
              <div class="bg-gray-900 rounded-lg p-3 font-mono text-sm text-green-400 overflow-x-auto">
                <pre>{{ syntax.example }}</pre>
              </div>
            </div>
          }
        </div>
      </section>

      <!-- Signals -->
      <section class="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8">
        <h2 class="text-2xl font-bold text-gray-900 mb-4">Signals — The New Reactive Primitive</h2>
        <p class="text-gray-600 leading-relaxed mb-4">
          Introduced in Angular 16, Signals are a new reactive primitive that provides a more efficient way
          to manage state and trigger change detection. Unlike RxJS Observables, Signals are synchronous
          and provide a simple get/set pattern.
        </p>
        <div class="bg-gray-900 rounded-lg p-6 font-mono text-sm text-green-400 overflow-x-auto">
          <pre>{{ signalsExample }}</pre>
        </div>
        <div class="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
          @for (type of signalTypes; track type.name) {
            <div class="bg-white rounded-xl p-4 shadow-sm">
              <h4 class="font-semibold text-gray-900 mb-1">{{ type.name }}</h4>
              <p class="text-gray-500 text-sm">{{ type.description }}</p>
            </div>
          }
        </div>
      </section>
    </div>
  `
})
export class ComponentsPage {
  componentExample = `import { Component } from '@angular/core';

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

  standaloneExample = `// Modern Angular — standalone by default
@Component({
  selector: 'app-header',
  standalone: true,  // No NgModule needed!
  imports: [RouterLink],  // Direct imports
  template: \`<nav>...</nav>\`
})
export class HeaderComponent {}

// Bootstrap without BrowserModule
bootstrapApplication(AppComponent, appConfig);`;

  inputExample = `// Child component
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

  outputExample = `// Child component
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

  lifecycleHooks = [
    { name: 'constructor()', description: 'TypeScript constructor. Use for DI only, not for initialization logic.' },
    { name: 'ngOnChanges()', description: 'Called when an @input() binding value changes. Receives SimpleChanges map.' },
    { name: 'ngOnInit()', description: 'Called once after the first ngOnChanges. Best place for initialization logic.' },
    { name: 'ngDoCheck()', description: 'Custom change detection logic. Called every cycle — use sparingly.' },
    { name: 'ngAfterContentInit()', description: 'Called after content (ng-content) is projected into the component.' },
    { name: 'ngAfterViewInit()', description: 'Called after the component\'s view and child views are initialized.' },
    { name: 'ngOnDestroy()', description: 'Called before the component is destroyed. Clean up subscriptions and listeners.' }
  ];

  templateSyntax = [
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

  signalsExample = `import { signal, computed, effect } from '@angular/core';

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

  signalTypes = [
    { name: 'signal()', description: 'Creates a writable signal with a initial value. Update with .set() or .update().' },
    { name: 'computed()', description: 'Creates a read-only signal derived from other signals. Auto-recomputes when dependencies change.' },
    { name: 'effect()', description: 'Runs a side effect when dependent signals change. Use for logging, DOM manipulation, or API calls.' }
  ];
}
