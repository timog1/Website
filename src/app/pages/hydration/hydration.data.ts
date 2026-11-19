export interface Benefit {
  icon: string;
  title: string;
  description: string;
}

export interface SsrStep {
  number: number;
  title: string;
  description: string;
}

export interface HydrationStrategy {
  name: string;
  icon: string;
  description: string;
  code: string;
  whenToUse: string;
}

export interface ComparisonRow {
  feature: string;
  ssr: string;
  csr: string;
}

export interface SetupStep {
  title: string;
  code: string;
}

export interface BestPractice {
  title: string;
  description: string;
}

export interface Pitfall {
  title: string;
  problem: string;
  solution: string;
}

export const benefits: Benefit[] = [
  { icon: '🔍', title: 'SEO', description: 'Search engines can crawl and index your content immediately without waiting for JavaScript execution.' },
  { icon: '⚡', title: 'Faster First Paint', description: 'Users see meaningful content on the first paint, improving perceived performance and Core Web Vitals.' },
  { icon: '📱', title: 'Better Mobile Experience', description: 'Lower-end devices benefit from server-side computation, reducing client-side processing.' },
  { icon: '🔗', title: 'Social Media Sharing', description: 'Social media bots can read your page content for rich preview cards without executing JavaScript.' },
  { icon: '📊', title: 'Analytics Accuracy', description: 'Page views are tracked even when users block JavaScript or leave before the app loads.' },
  { icon: '♿', title: 'Accessibility', description: 'Screen readers can immediately access page content without waiting for JavaScript hydration.' }
];

export const ssrSteps: SsrStep[] = [
  { number: 1, title: 'Request Arrives', description: 'A user or crawler requests a URL from your Angular application hosted on a server.' },
  { number: 2, title: 'Server Bootstraps Angular', description: 'The server uses Angular\'s platform-server to bootstrap your application in a headless environment using Domino or jsdom.' },
  { number: 3, title: 'Components Render', description: 'Angular resolves the route, loads the necessary components, fetches data from services, and renders the component tree to HTML.' },
  { number: 4, title: 'HTML Sent to Browser', description: 'The fully rendered HTML is sent to the browser along with the JavaScript bundles needed for interactivity.' },
  { number: 5, title: 'Browser Displays Content', description: 'The browser displays the HTML immediately — users see content without waiting for JavaScript to load.' },
  { number: 6, title: 'Hydration Begins', description: 'Once JavaScript bundles load, Angular hydrates the page by attaching event listeners and data bindings to the existing DOM.' },
  { number: 7, title: 'Fully Interactive', description: 'The application is now fully interactive on the client side, with all Angular features working as expected.' }
];

export const hydrationStrategies: HydrationStrategy[] = [
  {
    name: 'Full Hydration (Default)',
    icon: '🔄',
    description: 'The entire application is hydrated at once after the JavaScript bundles load. This is the default behavior and works well for most applications.',
    code: `// No configuration needed - this is the default behavior
// Angular hydrates the entire app after bundles load
bootstrapApplication(AppComponent, {
  providers: [provideServerRendering()]
});`,
    whenToUse: 'Use when your app is small to medium-sized and you want simplicity.'
  },
  {
    name: 'Route Triggers',
    icon: '🛤️',
    description: 'Defer hydration of specific routes until they are actually navigated to. This reduces the initial hydration cost for pages with many routes.',
    code: `import { withRoutes } from '@angular/ssr';

bootstrapApplication(AppComponent, {
  providers: [
    provideServerRendering(),
    provideClientHydration(),
    withRoutes([
      { path: 'heavy-page', hydrationMode: 'never' }
    ])
  ];
});`,
    whenToUse: 'Use when you have routes that are rarely visited or don\'t need interactivity on the server.'
  },
  {
    name: 'Component Triggers',
    icon: '🧩',
    description: 'Defer hydration of specific components until a user interaction occurs, such as hover, viewport entry, or idle time.',
    code: `import { hydrationDirective, hydrationComponent } from '@angular/core';

@Component({
  selector: 'app-heavy-chart',
  standalone: true,
  hydrationDirective: 'hover', // Hydrate on hover
  template: \`<div>Chart loads on hover</div>\`
})
export class HeavyChartComponent {}`,
    whenToUse: 'Use for components that are below the fold or only need interactivity after user interaction.'
  },
  {
    name: 'Never Hydrate',
    icon: '🚫',
    description: 'Some components or routes don\'t need client-side interactivity at all. You can skip hydration entirely for them.',
    code: `import { hydrationDirective } from '@angular/core';

@Component({
  selector: 'app-static-content',
  standalone: true,
  hydrationDirective: 'never',
  template: \`<div>This is static content</div>\`
})
export class StaticContentComponent {}`,
    whenToUse: 'Use for purely display-only components like static text, images, or decorative elements.'
  }
];

export const comparisonRows: ComparisonRow[] = [
  { feature: 'Initial Page Load', ssr: 'Fast — HTML is pre-rendered', csr: 'Slower — waits for JS download and execution' },
  { feature: 'SEO', ssr: 'Excellent — content is in HTML', csr: 'Poor — requires JS rendering' },
  { feature: 'Time to Interactive', ssr: 'Good with incremental hydration', csr: 'Depends on bundle size' },
  { feature: 'Server Load', ssr: 'Higher — server renders pages', csr: 'None — client handles everything' },
  { feature: 'Complexity', ssr: 'More complex setup', csr: 'Simple — just serve static files' },
  { feature: 'Data Fetching', ssr: 'Server can fetch data before render', csr: 'Client fetches after page load' },
  { feature: 'Social Sharing', ssr: 'Rich previews work', csr: 'Often shows empty preview' }
];

export const setupSteps: SetupStep[] = [
  {
    title: '1. Generate SSR files (if starting fresh)',
    code: `ng add @angular/ssr`
  },
  {
    title: '2. Configure your app config (app.config.ts)',
    code: `import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideClientHydration(withEventReplay())
  ]
};`
  },
  {
    title: '3. Build and serve with SSR',
    code: `# Build for production
ng build --configuration production

# Serve with SSR
node dist/website/server/server.mjs`
  }
];

export const bestPractices: BestPractice[] = [
  { title: 'Use Event Replay for Form Inputs', description: 'Angular\'s withEventReplay() ensures that user interactions like form input are replayed during hydration, preventing input loss during the transition from server to client.' },
  { title: 'Avoid Browser-Only APIs in Components', description: 'Don\'t directly access window, document, or localStorage in component constructors or ngOnInit — these don\'t exist on the server. Use isPlatformBrowser() or ONPLATFORM_ID checks.' },
  { title: 'Lazy Load Heavy Routes', description: 'Combine SSR with lazy loading to reduce the initial bundle size. Routes that aren\'t needed immediately can be loaded on demand.' },
  { title: 'Use TransferState for Data Sharing', description: 'Pass data fetched on the server to the client using Angular\'s TransferState API, avoiding duplicate API calls during hydration.' },
  { title: 'Test SSR Output', description: 'Regularly check your server-rendered HTML to ensure it contains the expected content and doesn\'t have mismatches with the client-rendered version.' },
  { title: 'Monitor Hydration Time', description: 'Use Angular DevTools and browser performance tools to measure hydration time and identify components that slow down the hydration process.' }
];

export const pitfalls: Pitfall[] = [
  { title: 'Window/Document Access', problem: 'Accessing window or document directly in a component constructor causes errors during SSR because these objects don\'t exist on the server.', solution: 'Use isPlatformBrowser() from @angular/common/platforms or inject(PLATFORM_ID) to check the platform before accessing browser APIs.' },
  { title: 'Hydration Mismatch', problem: 'When the server-rendered HTML differs from what the client renders, Angular may need to re-render portions of the DOM, causing a visual flash.', solution: 'Ensure your components produce the same output on both server and client. Avoid using Date.now() or Math.random() for rendering decisions.' },
  { title: 'Session Storage in SSR', problem: 'Using sessionStorage or localStorage during component initialization fails on the server.', solution: 'Wrap storage access in platform checks or use Angular\'s provideZoneChangeDetection with proper platform guards.' },
  { title: 'Third-Party Libraries', problem: 'Some third-party libraries assume a browser environment and fail during SSR.', solution: 'Load third-party scripts conditionally using NgIf with isPlatformBrowser, or use the hydrationComponent: \'never\' strategy for components that use these libraries.' },
  { title: 'Event Loss During Hydration', problem: 'User clicks or form inputs made before hydration completes may be lost.', solution: 'Use withEventReplay() in provideClientHydration() to replay user interactions during the hydration phase.' }
];
