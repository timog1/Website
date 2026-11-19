export interface PerformanceConcept {
  title: string;
  description: string;
  code: string;
}

export interface OptimizationTip {
  title: string;
  description: string;
  icon: string;
}

export const performanceConcepts: PerformanceConcept[] = [
  {
    title: 'OnPush Change Detection',
    description: 'By default, Angular checks every component on every event. With OnPush, Angular checks a component only when its @input() reference changes, an event originates from the component, or an observable/async pipe emits.',
    code: `import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-user-list',
  standalone: true,
  // Only check when inputs change or events fire
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserListComponent {
  users = input.required<User[]>();

  // This triggers change detection:
  // 1. Parent passes a new array reference
  // 2. A click event happens inside this component
  // 3. An observable in the template emits
}`
  },
  {
    title: 'Tracking @for Loops',
    description: 'Always use a unique property to track items in @for loops. This helps Angular reuse DOM elements instead of recreating them.',
    code: `<!-- Bad: Angular recreates all DOM elements -->
@for (item of items; track $index) {
  <div>{{ item.name }}</div>
}

<!-- Good: Angular reuses elements by ID -->
@for (item of items; track item.id) {
  <div>{{ item.name }}</div>
}

<!-- With caching (reduces re-queries) -->
@for (item of items; track item.id; cache) {
  <div>{{ item.name }}</div>
}

<!-- Access loop metadata -->
@for (item of items; track item.id;
  let i = $index,
  first = $first,
  last = $last,
  even = $even) {
  <div [class.first]="first">{{ i }}: {{ item.name }}</div>
}`
  },
  {
    title: 'Deferred Loading',
    description: 'Lazy-load components and content based on triggers like viewport entry, interaction, or idle time.',
    code: `<!-- Load when element enters the viewport -->
@defer (viewport) {
  <app-heavy-chart [data]="chartData" />
} @placeholder {
  <div class="skeleton">Loading chart...</div>
} @loading {
  <p>Loading... {{ loadingTime }}</p>
} @error {
  <p>Failed to load chart.</p>
}

<!-- Load on hover -->
@defer (hover) {
  <app-comment-section />
}

<!-- Load after idle time -->
@defer (idle) {
  <app-analytics-widget />
}

<!-- Load after a delay -->
@defer (after 3s) {
  <app-promotional-banner />
}

<!-- Load on interaction (click) -->
@defer (interaction) {
  <app-expanded-details />
}`
  },
  {
    title: 'Pure Pipes for Performance',
    description: 'Pure pipes are cached — they only recompute when the input reference changes. Use them instead of method calls in templates.',
    code: `<!-- Bad: Method called on every change detection -->
<p>{{ formatDate(user.birthday) }}</p>

<!-- Good: Pipe caches the result -->
<p>{{ user.birthday | date:'fullDate' }}</p>

<!-- Custom pure pipe (default) -->
@Pipe({ name: 'formatPrice', standalone: true })
export class FormatPricePipe implements PipeTransform {
  transform(value: number): string {
    // Only runs when 'value' reference changes
    return '$' + value.toFixed(2);
  }
}

<!-- Usage -->
<p>{{ price | formatPrice }}</p>`
  },
  {
    title: 'Async Pipe',
    description: 'The async pipe subscribes to Observables and Promises automatically, preventing memory leaks and simplifying templates.',
    code: `<!-- Bad: Manual subscription -->
ngOnInit() {
  this.dataService.getData().subscribe(data => {
    this.data = data;
  });
}
// Don't forget to unsubscribe!

<!-- Good: Async pipe handles everything -->
@for (item of (data$ | async); track item.id) {
  <div>{{ item.name }}</div>
}

<!-- With @for and let -->
@let data = data$ | async;
@for (item of data; track item.id) {
  <div>{{ item.name }}</div>
}`
  },
  {
    title: 'Optimizing HTTP Requests',
    description: 'Use shareReplay, caching, and request deduplication to avoid duplicate API calls.',
    code: `import { shareReplay } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class DataService {
  private data$ = new BehaviorSubject<Data[] | null>(null);

  // Cache the result — multiple subscribers get the same data
  getData$ = this.http.get<Data[]>('/api/data').pipe(
    shareReplay({ bufferSize: 1, refCount: true })
  );

  // Manual cache with refresh
  private cache: Data[] | null = null;
  private lastFetch = 0;
  private CACHE_TIME = 5 * 60 * 1000; // 5 minutes

  getCachedData() {
    const now = Date.now();
    if (this.cache && now - this.lastFetch < this.CACHE_TIME) {
      return of(this.cache);
    }
    return this.http.get<Data[]>('/api/data').pipe(
      tap(data => {
        this.cache = data;
        this.lastFetch = now;
      })
    );
  }
}`
  },
  {
    title: 'Bundle Size Optimization',
    description: 'Reduce bundle size with tree-shaking, lazy loading, and common optimizations.',
    code: `// 1. Use standalone components (smaller bundles)
@Component({ standalone: true })

// 2. Lazy-load routes
{
  path: 'admin',
  loadComponent: () => import('./admin/admin').then(m => m.AdminPage)
}

// 3. Use provideRouter instead of RouterModule
provideRouter(routes)

// 4. Tree-shakable providers
@Injectable({ providedIn: 'root' })

// 5. Analyze bundle size
ng build --configuration production --stats-json
npx source-map-explorer dist/stats.json

// 6. Common chunks config
// angular.json:
"builder": "@angular-devkit/build-angular:application",
"options": {
  "outputHashing": "all"
}`
  }
];

export const optimizationTips: OptimizationTip[] = [
  { icon: '⚡', title: 'Use OnPush Everywhere', description: 'Apply ChangeDetectionStrategy.OnPush to all components by default. It reduces change detection cycles dramatically.' },
  { icon: '📦', title: 'Lazy Load Routes', description: 'Split your app into lazy-loaded chunks so users download only what they need.' },
  { icon: '🔄', title: 'Track by Unique ID', description: 'Always track @for loops by a unique property, never by $index unless items are truly static.' },
  { icon: '🚀', title: 'Use @defer for Heavy Components', description: 'Defer loading charts, maps, and other heavy components until they are actually needed.' },
  { icon: '📊', title: 'Monitor with DevTools', description: 'Use Angular DevTools to measure change detection time and identify slow components.' },
  { icon: '🗂️', title: 'Avoid Template Methods', description: 'Replace method calls in templates with pipes, computed signals, or pre-computed properties.' },
  { icon: '💾', title: 'Cache API Responses', description: 'Use shareReplay or manual caching to avoid redundant HTTP requests.' },
  { icon: '🔍', title: 'Profile Bundle Size', description: 'Regularly analyze your bundle with source-map-explorer to find and remove unused dependencies.' }
];

export const changeDetectionComparison = [
  {
    aspect: 'When it runs',
    default: 'Every event, timer, HTTP response',
    onPush: 'Input reference change, event, async emit'
  },
  {
    aspect: 'Performance',
    default: 'Slower — checks all components',
    onPush: 'Faster — skips unchanged components'
  },
  {
    aspect: 'Complexity',
    default: 'Simple — automatic updates',
    onPush: 'Requires understanding of references'
  },
  {
    aspect: 'Best for',
    default: 'Small apps, quick prototyping',
    onPush: 'Production apps, large component trees'
  },
  {
    aspect: 'With Signals',
    default: 'Signals still work',
    onPush: 'Signals + OnPush = optimal performance'
  }
];
