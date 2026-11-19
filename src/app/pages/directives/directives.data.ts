export interface DirectiveType {
  icon: string;
  name: string;
  description: string;
}

export interface DirectiveExample {
  name: string;
  description: string;
  example: string;
}

export interface ControlFlowBlock {
  name: string;
  description: string;
  example: string;
}

export const directiveTypes: DirectiveType[] = [
  { icon: '🧩', name: 'Components', description: 'Directives with a template. The most common type — every component is a directive with a template.' },
  { icon: '🏗️', name: 'Structural Directives', description: 'Change the DOM layout by adding, removing, or replacing elements. Identified by * prefix.' },
  { icon: '🎨', name: 'Attribute Directives', description: 'Change the appearance or behavior of an element, such as styling or responsiveness.' }
];

export const structuralDirectives: DirectiveExample[] = [
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

export const modernControlFlow: ControlFlowBlock[] = [
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

export const attributeDirectives: DirectiveExample[] = [
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

export const customAttributeExample = `import { Directive, ElementRef, Renderer2 } from '@angular/core';

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

export const customStructuralExample = `import { Directive, TemplateRef, ViewContainerRef, Inject, PLATFORM_ID } from '@angular/core';
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

export const bestPractices = [
  'Use modern @if/@for/@switch syntax instead of *ngIf/*ngFor/*ngSwitch for better performance.',
  'Always use the track expression in @for loops to help Angular efficiently update the DOM.',
  'Use $index, $count, $first, $last, $even, $odd built-in variables in @for for common patterns.',
  'Keep custom directives focused on a single responsibility.',
  'Use Renderer2 instead of direct DOM manipulation in custom directives for SSR compatibility.',
  'Use @HostListener and @HostBinding for clean event handling and property binding in directives.',
  'Consider using directives instead of components when you only need to modify existing elements.'
];
