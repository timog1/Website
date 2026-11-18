import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  template: `
    <div class="space-y-12">
      <!-- Hero Section -->
      <section class="text-center py-12">
        <h1 class="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Learn <span class="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-pink-600">Angular</span>
        </h1>
        <p class="text-xl text-gray-600 max-w-2xl mx-auto">
          A comprehensive guide for web developers to master Angular — from fundamentals to advanced topics like Server-Side Rendering and Hydration.
        </p>
      </section>

      <!-- What is Angular -->
      <section class="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
        <h2 class="text-2xl font-bold text-gray-900 mb-4">What is Angular?</h2>
        <div class="prose prose-gray max-w-none">
          <p class="text-gray-600 leading-relaxed mb-4">
            Angular is a platform and framework for building single-page client applications using HTML and TypeScript.
            It is built on TypeScript and incorporates many best practices right into the core, such as modular organization,
            optimized rendering with incremental DOM, reactive programming patterns, and built-in support for common development tools.
          </p>
          <p class="text-gray-600 leading-relaxed">
            Maintained by Google, Angular follows a component-based architecture where every UI element is a reusable component.
            It provides a complete toolkit including routing, forms handling, client-server communication, and state management patterns.
          </p>
        </div>
      </section>

      <!-- Topic Cards -->
      <section>
        <h2 class="text-2xl font-bold text-gray-900 mb-6">Topics</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          @for (topic of topics; track topic.title) {
            <a [routerLink]="topic.path"
               class="group bg-white rounded-2xl shadow-sm border border-gray-100 p-6 hover:shadow-md hover:border-red-200 transition-all cursor-pointer">
              <div class="text-3xl mb-3">{{ topic.icon }}</div>
              <h3 class="text-lg font-semibold text-gray-900 group-hover:text-red-600 transition-colors mb-2">
                {{ topic.title }}
              </h3>
              <p class="text-gray-500 text-sm leading-relaxed">{{ topic.description }}</p>
            </a>
          }
        </div>
      </section>

      <!-- Why Angular -->
      <section class="bg-gradient-to-br from-red-50 to-pink-50 rounded-2xl p-8">
        <h2 class="text-2xl font-bold text-gray-900 mb-4">Why Choose Angular?</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          @for (reason of reasons; track reason.title) {
            <div class="flex gap-3">
              <div class="flex-shrink-0 w-6 h-6 rounded-full bg-red-100 flex items-center justify-center mt-0.5">
                <span class="text-red-600 text-sm">✓</span>
              </div>
              <div>
                <h4 class="font-medium text-gray-900">{{ reason.title }}</h4>
                <p class="text-gray-500 text-sm">{{ reason.description }}</p>
              </div>
            </div>
          }
        </div>
      </section>
    </div>
  `
})
export class HomePage {
  topics = [
    {
      icon: '🔄',
      title: 'Hydration & SSR',
      description: 'Understand Server-Side Rendering, hydration strategies, and how Angular renders on the server for better SEO and performance.',
      path: '/hydration'
    },
    {
      icon: '🧩',
      title: 'Components',
      description: 'Learn about Angular components, templates, input/output bindings, lifecycle hooks, and standalone components.',
      path: '/components'
    },
    {
      icon: '🏷️',
      title: 'Directives',
      description: 'Explore structural and attribute directives, including *ngFor, *ngIf, and how to create custom directives.',
      path: '/directives'
    },
    {
      icon: '⚙️',
      title: 'Services & DI',
      description: 'Master dependency injection, services, providers, and how to share data across components.',
      path: '/services'
    },
    {
      icon: '📝',
      title: 'Forms',
      description: 'Build forms with both template-driven and reactive approaches, including validation and dynamic forms.',
      path: '/forms'
    }
  ];

  reasons = [
    { title: 'TypeScript First', description: 'Built on TypeScript for better tooling, type safety, and developer experience.' },
    { title: 'Complete Framework', description: 'Everything you need is included: routing, forms, HTTP client, and more.' },
    { title: 'Server-Side Rendering', description: 'Built-in SSR and hydration for better SEO and faster initial page loads.' },
    { title: 'Reactive Architecture', description: 'Built-in support for reactive programming with Signals and RxJS observables.' },
    { title: 'Strong Ecosystem', description: 'Angular CLI, Angular Material, and a large community with extensive resources.' },
    { title: 'Enterprise Ready', description: 'Used by major companies worldwide with long-term support and stability.' }
  ];
}
