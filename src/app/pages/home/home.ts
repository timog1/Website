import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

export interface Topic {
  icon: string;
  title: string;
  description: string;
  path: string;
}

export interface Reason {
  title: string;
  description: string;
}

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class HomePage {
  topics: Topic[] = [
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

  reasons: Reason[] = [
    { title: 'TypeScript First', description: 'Built on TypeScript for better tooling, type safety, and developer experience.' },
    { title: 'Complete Framework', description: 'Everything you need is included: routing, forms, HTTP client, and more.' },
    { title: 'Server-Side Rendering', description: 'Built-in SSR and hydration for better SEO and faster initial page loads.' },
    { title: 'Reactive Architecture', description: 'Built-in support for reactive programming with Signals and RxJS observables.' },
    { title: 'Strong Ecosystem', description: 'Angular CLI, Angular Material, and a large community with extensive resources.' },
    { title: 'Enterprise Ready', description: 'Used by major companies worldwide with long-term support and stability.' }
  ];
}
