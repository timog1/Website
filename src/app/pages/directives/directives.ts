import { Component } from '@angular/core';

@Component({
  selector: 'app-directives',
  template: `
    <div class="space-y-12">
      <section>
        <h1 class="text-4xl font-bold text-gray-900 mb-4">Directives</h1>
        <p class="text-xl text-gray-600">
          Learn how directives change the appearance or behavior of DOM elements — from built-in control flow to custom directives.
        </p>
      </section>

      <!-- What are Directives -->
      <section class="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
        <h2 class="text-2xl font-bold text-gray-900 mb-4">What are Directives?</h2>
        <p class="text-gray-600 leading-relaxed mb-4">
          Directives are classes that add additional behavior to elements in an Angular application. There are three categories:
        </p>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
          @for (type of directiveTypes; track type.name) {
            <div class="border border-gray-200 rounded-xl p-5">
              <div class="text-2xl mb-2">{{ type.icon }}</div>
              <h3 class="font-semibold text-gray-900 mb-1">{{ type.name }}</h3>
              <p class="text-gray-500 text-sm leading-relaxed">{{ type.description }}</p>
            </div>
          }
        </div>
      </section>

      <!-- Built-in Structural Directives -->
      <section class="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
        <h2 class="text-2xl font-bold text-gray-900 mb-6">Built-in Structural Directives</h2>
        <p class="text-gray-600 leading-relaxed mb-6">
          Structural directives change the DOM layout by adding, removing, or manipulating elements.
          They are identified by the <code class="bg-gray-100 px-2 py-0.5 rounded text-red-600 text-sm">*</code> prefix.
        </p>
        <div class="space-y-6">
          @for (directive of structuralDirectives; track directive.name) {
            <div class="border border-gray-200 rounded-xl p-5">
              <h3 class="font-semibold text-gray-900 mb-1">{{ directive.name }}</h3>
              <p class="text-gray-500 text-sm mb-3">{{ directive.description }}</p>
              <div class="bg-gray-900 rounded-lg p-4 font-mono text-sm text-green-400 overflow-x-auto">
                <pre>{{ directive.example }}</pre>
              </div>
            </div>
          }
        </div>
      </section>

      <!-- Modern Control Flow -->
      <section class="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8">
        <h2 class="text-2xl font-bold text-gray-900 mb-4">Modern Control Flow (Angular 17+)</h2>
        <p class="text-gray-600 leading-relaxed mb-4">
          Angular 17 introduced a new built-in control flow syntax that replaces the traditional structural directives.
          The new syntax is more readable, more performant, and provides better developer experience.
        </p>
        <div class="space-y-6">
          @for (block of modernControlFlow; track block.name) {
            <div class="bg-white rounded-xl p-5 shadow-sm">
              <h3 class="font-semibold text-gray-900 mb-2">{{ block.name }}</h3>
              <p class="text-gray-500 text-sm mb-3">{{ block.description }}</p>
              <div class="bg-gray-900 rounded-lg p-4 font-mono text-sm text-green-400 overflow-x-auto">
                <pre>{{ block.example }}</pre>
              </div>
            </div>
          }
        </div>
      </section>

      <!-- Attribute Directives -->
      <section class="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
        <h2 class="text-2xl font-bold text-gray-900 mb-6">Built-in Attribute Directives</h2>
        <div class="space-y-4">
          @for (directive of attributeDirectives; track directive.name) {
            <div class="border border-gray-200 rounded-xl p-5">
              <h3 class="font-semibold text-gray-900 mb-1">{{ directive.name }}</h3>
              <p class="text-gray-500 text-sm mb-3">{{ directive.description }}</p>
              <div class="bg-gray-900 rounded-lg p-3 font-mono text-sm text-green-400 overflow-x-auto">
                <pre>{{ directive.example }}</pre>
              </div>
            </div>
          }
        </div>
      </section>

      <!-- Custom Directives -->
      <section class="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
        <h2 class="text-2xl font-bold text-gray-900 mb-6">Creating Custom Directives</h2>
        <div class="space-y-6">
          <div>
            <h3 class="text-lg font-semibold text-gray-900 mb-2">Custom Attribute Directive</h3>
            <p class="text-gray-600 leading-relaxed mb-3">
              Create a directive that highlights text on hover:
            </p>
            <div class="bg-gray-900 rounded-lg p-4 font-mono text-sm text-green-400 overflow-x-auto">
              <pre>{{ customAttributeExample }}</pre>
            </div>
          </div>
          <div>
            <h3 class="text-lg font-semibold text-gray-900 mb-2">Custom Structural Directive</h3>
            <p class="text-gray-600 leading-relaxed mb-3">
              Create a directive that shows content only on a specific platform:
            </p>
            <div class="bg-gray-900 rounded-lg p-4 font-mono text-sm text-green-400 overflow-x-auto">
              <pre>{{ customStructuralExample }}</pre>
            </div>
          </div>
        </div>
      </section>

      <!-- Best Practices -->
      <section class="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8">
        <h2 class="text-2xl font-bold text-gray-900 mb-6">Best Practices</h2>
        <div class="space-y-3">
          @for (practice of bestPractices; track practice) {
            <div class="flex gap-3 bg-white rounded-xl p-4 shadow-sm">
              <div class="flex-shrink-0 text-green-600">✓</div>
              <p class="text-gray-600 text-sm">{{ practice }}</p>
            </div>
          }
        </div>
      </section>
    </div>
  `
})
export class DirectivesPage {
  directiveTypes = [
    { icon: '🧩', name: 'Components', description: 'Directives with a template. The most common type — every component is a directive with a template.' },
    { icon: '🏗️', name: 'Structural Directives', description: 'Change the DOM layout by adding, removing, or replacing elements. Identified by * prefix.' },
    { icon: '🎨', name: 'Attribute Directives', description: 'Change the appearance or behavior of an element, such as styling or responsiveness.' }
  ];

  structuralDirectives = [
    {
      name: '*ngIf',
      description: 'Conditionally adds or removes an element from the DOM based on a truthy/falsy expression.',
      example: `<!-- Old syntax (still works) -->
<div *ngIf="isLoggedIn">
  Welcome, {{ user.name }}!
</div>

<!-- With else block -->
<div *ngIf="isLoading; else loading">
  <app-data [data]="data" />
</div>
<ng-template #loading>Loading...</ng-template>`
    },
    {
      name: '*ngFor',
      description: 'Repeats a template for each item in a collection.',
      example: `<!-- Old syntax (still works) -->
<div *ngFor="let item of items; let i = index">
  {{ i + 1 }}. {{ item.name }}
</div>`
    },
    {
      name: '*ngSwitch',
      description: 'Selects one of several templates based on a condition value.',
      example: `<div [ngSwitch]="status">
  <div *ngSwitchCase="'active'">Active</div>
  <div *ngSwitchCase="'pending'">Pending</div>
  <div *ngSwitchDefault>Unknown</div>
</div>`
    }
  ];

  modernControlFlow = [
    {
      name: '@if / @else',
      description: 'Replace *ngIf with the more readable @if block syntax.',
      example: `@if (isLoggedIn) {
  <welcome-component [user]="user" />
} @else if (isGuest) {
  <guest-welcome />
} @else {
  <login-form />
}`
    },
    {
      name: '@for',
      description: 'Replace *ngFor with the more powerful @for block with built-in tracking.',
      example: `@for (item of items; track item.id; let i = $index) {
  <div class="item">
    {{ i + 1 }}. {{ item.name }}
  </div>
} @empty {
  <p>No items found</p>
}`
    },
    {
      name: '@switch',
      description: 'Replace *ngSwitch with the cleaner @switch block syntax.',
      example: `@switch (status) {
  @case ('active') {
    <span class="badge-green">Active</span>
  }
  @case ('pending') {
    <span class="badge-yellow">Pending</span>
  }
  @default {
    <span class="badge-gray">Unknown</span>
  }
}`
    }
  ];

  attributeDirectives = [
    {
      name: 'ngClass',
      description: 'Dynamically sets or removes CSS classes on an element.',
      example: `<div [ngClass]="{
  'active': isActive,
  'disabled': isDisabled,
  'error': hasError
}">Content</div>

<!-- Or with a class string -->
<div [ngClass]="classExpression">Content</div>`
    },
    {
      name: 'ngStyle',
      description: 'Dynamically sets inline CSS styles on an element.',
      example: `<div [ngStyle]="{
  'font-size': fontSize + 'px',
  'color': textColor,
  'display': isVisible ? 'block' : 'none'
}">Styled content</div>`
    }
  ];

  customAttributeExample = `import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  standalone: true
})
export class HighlightDirective {
  constructor(
    private el: ElementRef,
    private renderer: Renderer2
  ) {
    renderer.setStyle(el.nativeElement, 'cursor', 'pointer');
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.renderer.setStyle(
      this.el.nativeElement,
      'background-color',
      'yellow'
    );
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.renderer.setStyle(
      this.el.nativeElement,
      'background-color',
      'transparent'
    );
  }
}

<!-- Usage -->
<p appHighlight>Hover over me!</p>`;

  customStructuralExample = `import { Directive, TemplateRef, ViewContainerRef, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Directive({
  selector: '[appOnlyOnBrowser]',
  standalone: true
})
export class OnlyOnBrowserDirective {
  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.viewContainer.createEmbeddedView(this.templateRef);
    } else {
      this.viewContainer.clear();
    }
  }
}

<!-- Usage -->
<div appOnlyOnBrowser>
  This only renders in the browser, not on the server!
</div>`;

  bestPractices = [
    'Use modern @if/@for/@switch syntax instead of *ngIf/*ngFor/*ngSwitch for better performance.',
    'Always use the track expression in @for loops to help Angular efficiently update the DOM.',
    'Use $index, $count, $first, $last, $even, $odd built-in variables in @for for common patterns.',
    'Keep custom directives focused on a single responsibility.',
    'Use Renderer2 instead of direct DOM manipulation in custom directives for SSR compatibility.',
    'Use @HostListener and @HostBinding for clean event handling and property binding in directives.',
    'Consider using directives instead of components when you only need to modify existing elements.'
  ];
}
