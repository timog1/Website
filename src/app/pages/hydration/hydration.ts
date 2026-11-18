import { Component } from '@angular/core';

@Component({
  selector: 'app-hydration',
  template: `
    <div class="space-y-12">
      <!-- Header -->
      <section>
        <h1 class="text-4xl font-bold text-gray-900 mb-4">Hydration & Server-Side Rendering</h1>
        <p class="text-xl text-gray-600">
          Understanding how Angular renders on the server and hydrates the client for optimal performance and SEO.
        </p>
      </section>

      <!-- What is SSR -->
      <section class="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
        <h2 class="text-2xl font-bold text-gray-900 mb-4">What is Server-Side Rendering (SSR)?</h2>
        <div class="prose prose-gray max-w-none">
          <p class="text-gray-600 leading-relaxed mb-4">
            Server-Side Rendering (SSR) is a technique where the HTML for a web page is generated on the server
            and sent to the browser as a fully-formed document, rather than sending an empty HTML shell and letting
            JavaScript build the page in the browser.
          </p>
          <p class="text-gray-600 leading-relaxed mb-4">
            In traditional Single Page Applications (SPAs), the browser downloads a minimal HTML file with a root element,
            then fetches JavaScript bundles, executes them, and constructs the DOM. This means search engine crawlers
            and users see an empty page until JavaScript finishes loading and executing.
          </p>
          <p class="text-gray-600 leading-relaxed">
            With SSR, the server runs your Angular application, renders the initial view to HTML, and sends that HTML
            directly to the browser. Users see content immediately, and search engines can index the page content without
            executing JavaScript.
          </p>
        </div>
      </section>

      <!-- Why SSR Matters -->
      <section class="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8">
        <h2 class="text-2xl font-bold text-gray-900 mb-6">Why Does SSR Matter?</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          @for (benefit of benefits; track benefit.title) {
            <div class="bg-white rounded-xl p-5 shadow-sm">
              <div class="text-2xl mb-2">{{ benefit.icon }}</div>
              <h3 class="font-semibold text-gray-900 mb-1">{{ benefit.title }}</h3>
              <p class="text-gray-500 text-sm leading-relaxed">{{ benefit.description }}</p>
            </div>
          }
        </div>
      </section>

      <!-- How SSR Works in Angular -->
      <section class="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
        <h2 class="text-2xl font-bold text-gray-900 mb-6">How SSR Works in Angular</h2>
        <div class="space-y-6">
          @for (step of ssrSteps; track step.number) {
            <div class="flex gap-4">
              <div class="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-red-500 to-pink-500 text-white flex items-center justify-center font-bold text-lg">
                {{ step.number }}
              </div>
              <div>
                <h3 class="font-semibold text-gray-900 text-lg mb-1">{{ step.title }}</h3>
                <p class="text-gray-600 leading-relaxed">{{ step.description }}</p>
              </div>
            </div>
          }
        </div>
      </section>

      <!-- What is Hydration -->
      <section class="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
        <h2 class="text-2xl font-bold text-gray-900 mb-4">What is Hydration?</h2>
        <div class="prose prose-gray max-w-none">
          <p class="text-gray-600 leading-relaxed mb-4">
            Hydration is the process where Angular takes the static HTML sent from the server and makes it interactive
            on the client side. After the browser receives the server-rendered HTML, Angular's JavaScript bundles load
            and "hydrate" the page by attaching event listeners, setting up data bindings, and initializing components.
          </p>
          <p class="text-gray-600 leading-relaxed mb-4">
            Think of it like this: the server sends you a beautifully painted picture (static HTML). Hydration is the
            process of turning that picture into a living, breathing application where buttons respond to clicks,
            data updates in real-time, and navigation works seamlessly.
          </p>
          <p class="text-gray-600 leading-relaxed">
            Before Angular 17, hydration required re-rendering the entire DOM — Angular would destroy the server-rendered
            DOM and rebuild it from scratch on the client. This caused a visible flash and wasted resources. Angular 17
            introduced <strong>Incremental Hydration</strong>, which reuses the server-rendered DOM and only attaches
            the necessary event listeners and bindings.
          </p>
        </div>
      </section>

      <!-- Hydration Strategies -->
      <section class="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
        <h2 class="text-2xl font-bold text-gray-900 mb-6">Hydration Strategies in Angular</h2>
        <div class="space-y-6">
          @for (strategy of hydrationStrategies; track strategy.name) {
            <div class="border border-gray-200 rounded-xl p-6">
              <div class="flex items-center gap-3 mb-3">
                <span class="text-2xl">{{ strategy.icon }}</span>
                <h3 class="text-xl font-semibold text-gray-900">{{ strategy.name }}</h3>
              </div>
              <p class="text-gray-600 leading-relaxed mb-3">{{ strategy.description }}</p>
              <div class="bg-gray-50 rounded-lg p-4 font-mono text-sm text-gray-700 overflow-x-auto">
                <pre>{{ strategy.code }}</pre>
              </div>
              <p class="text-gray-500 text-sm mt-3 italic">{{ strategy.whenToUse }}</p>
            </div>
          }
        </div>
      </section>

      <!-- SSR vs CSR Comparison -->
      <section class="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
        <h2 class="text-2xl font-bold text-gray-900 mb-6">SSR vs CSR: Side-by-Side Comparison</h2>
        <div class="overflow-x-auto">
          <table class="w-full text-sm">
            <thead>
              <tr class="border-b-2 border-gray-200">
                <th class="text-left py-3 px-4 font-semibold text-gray-900">Feature</th>
                <th class="text-left py-3 px-4 font-semibold text-red-600">SSR + Hydration</th>
                <th class="text-left py-3 px-4 font-semibold text-gray-600">Client-Side Only</th>
              </tr>
            </thead>
            <tbody>
              @for (row of comparisonRows; track row.feature) {
                <tr class="border-b border-gray-100">
                  <td class="py-3 px-4 font-medium text-gray-900">{{ row.feature }}</td>
                  <td class="py-3 px-4 text-gray-600">{{ row.ssr }}</td>
                  <td class="py-3 px-4 text-gray-600">{{ row.csr }}</td>
                </tr>
              }
            </tbody>
          </table>
        </div>
      </section>

      <!-- Code Example -->
      <section class="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
        <h2 class="text-2xl font-bold text-gray-900 mb-4">Setting Up SSR in Angular</h2>
        <p class="text-gray-600 leading-relaxed mb-6">
          Angular makes it easy to add SSR to your application. Here's how to get started:
        </p>
        <div class="space-y-4">
          @for (step of setupSteps; track step.title) {
            <div>
              <h4 class="font-medium text-gray-900 mb-2">{{ step.title }}</h4>
              <div class="bg-gray-900 rounded-lg p-4 font-mono text-sm text-green-400 overflow-x-auto">
                <pre>{{ step.code }}</pre>
              </div>
            </div>
          }
        </div>
      </section>

      <!-- Best Practices -->
      <section class="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8">
        <h2 class="text-2xl font-bold text-gray-900 mb-6">Best Practices for Hydration</h2>
        <div class="space-y-4">
          @for (practice of bestPractices; track practice.title) {
            <div class="flex gap-3 bg-white rounded-xl p-4 shadow-sm">
              <div class="flex-shrink-0 text-green-600 text-xl">💡</div>
              <div>
                <h4 class="font-medium text-gray-900 mb-1">{{ practice.title }}</h4>
                <p class="text-gray-500 text-sm leading-relaxed">{{ practice.description }}</p>
              </div>
            </div>
          }
        </div>
      </section>

      <!-- Common Pitfalls -->
      <section class="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
        <h2 class="text-2xl font-bold text-gray-900 mb-6">Common Pitfalls & Solutions</h2>
        <div class="space-y-4">
          @for (pitfall of pitfalls; track pitfall.title) {
            <div class="border-l-4 border-yellow-400 bg-yellow-50 rounded-r-xl p-5">
              <h4 class="font-semibold text-gray-900 mb-2">⚠️ {{ pitfall.title }}</h4>
              <p class="text-gray-600 text-sm leading-relaxed mb-2">{{ pitfall.problem }}</p>
              <p class="text-gray-700 text-sm"><strong>Solution:</strong> {{ pitfall.solution }}</p>
            </div>
          }
        </div>
      </section>
    </div>
  `
})
export class HydrationPage {
  benefits = [
    { icon: '🔍', title: 'SEO', description: 'Search engines can crawl and index your content immediately without waiting for JavaScript execution.' },
    { icon: '⚡', title: 'Faster First Paint', description: 'Users see meaningful content on the first paint, improving perceived performance and Core Web Vitals.' },
    { icon: '📱', title: 'Better Mobile Experience', description: 'Lower-end devices benefit from server-side computation, reducing client-side processing.' },
    { icon: '🔗', title: 'Social Media Sharing', description: 'Social media bots can read your page content for rich preview cards without executing JavaScript.' },
    { icon: '📊', title: 'Analytics Accuracy', description: 'Page views are tracked even when users block JavaScript or leave before the app loads.' },
    { icon: '♿', title: 'Accessibility', description: 'Screen readers can immediately access page content without waiting for JavaScript hydration.' }
  ];

  ssrSteps = [
    { number: 1, title: 'Request Arrives', description: 'A user or crawler requests a URL from your Angular application hosted on a server.' },
    { number: 2, title: 'Server Bootstraps Angular', description: 'The server uses Angular\'s platform-server to bootstrap your application in a headless environment using Domino or jsdom.' },
    { number: 3, title: 'Components Render', description: 'Angular resolves the route, loads the necessary components, fetches data from services, and renders the component tree to HTML.' },
    { number: 4, title: 'HTML Sent to Browser', description: 'The fully rendered HTML is sent to the browser along with the JavaScript bundles needed for interactivity.' },
    { number: 5, title: 'Browser Displays Content', description: 'The browser displays the HTML immediately — users see content without waiting for JavaScript to load.' },
    { number: 6, title: 'Hydration Begins', description: 'Once JavaScript bundles load, Angular hydrates the page by attaching event listeners and data bindings to the existing DOM.' },
    { number: 7, title: 'Fully Interactive', description: 'The application is now fully interactive on the client side, with all Angular features working as expected.' }
  ];

  hydrationStrategies = [
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

  comparisonRows = [
    { feature: 'Initial Page Load', ssr: 'Fast — HTML is pre-rendered', csr: 'Slower — waits for JS download and execution' },
    { feature: 'SEO', ssr: 'Excellent — content is in HTML', csr: 'Poor — requires JS rendering' },
    { feature: 'Time to Interactive', ssr: 'Good with incremental hydration', csr: 'Depends on bundle size' },
    { feature: 'Server Load', ssr: 'Higher — server renders pages', csr: 'None — client handles everything' },
    { feature: 'Complexity', ssr: 'More complex setup', csr: 'Simple — just serve static files' },
    { feature: 'Data Fetching', ssr: 'Server can fetch data before render', csr: 'Client fetches after page load' },
    { feature: 'Social Sharing', ssr: 'Rich previews work', csr: 'Often shows empty preview' }
  ];

  setupSteps = [
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

  bestPractices = [
    { title: 'Use Event Replay for Form Inputs', description: 'Angular\'s withEventReplay() ensures that user interactions like form input are replayed during hydration, preventing input loss during the transition from server to client.' },
    { title: 'Avoid Browser-Only APIs in Components', description: 'Don\'t directly access window, document, or localStorage in component constructors or ngOnInit — these don\'t exist on the server. Use isPlatformBrowser() or ONPLATFORM_ID checks.' },
    { title: 'Lazy Load Heavy Routes', description: 'Combine SSR with lazy loading to reduce the initial bundle size. Routes that aren\'t needed immediately can be loaded on demand.' },
    { title: 'Use TransferState for Data Sharing', description: 'Pass data fetched on the server to the client using Angular\'s TransferState API, avoiding duplicate API calls during hydration.' },
    { title: 'Test SSR Output', description: 'Regularly check your server-rendered HTML to ensure it contains the expected content and doesn\'t have mismatches with the client-rendered version.' },
    { title: 'Monitor Hydration Time', description: 'Use Angular DevTools and browser performance tools to measure hydration time and identify components that slow down the hydration process.' }
  ];

  pitfalls = [
    { title: 'Window/Document Access', problem: 'Accessing window or document directly in a component constructor causes errors during SSR because these objects don\'t exist on the server.', solution: 'Use isPlatformBrowser() from @angular/common/platforms or inject(PLATFORM_ID) to check the platform before accessing browser APIs.' },
    { title: 'Hydration Mismatch', problem: 'When the server-rendered HTML differs from what the client renders, Angular may need to re-render portions of the DOM, causing a visual flash.', solution: 'Ensure your components produce the same output on both server and client. Avoid using Date.now() or Math.random() for rendering decisions.' },
    { title: 'Session Storage in SSR', problem: 'Using sessionStorage or localStorage during component initialization fails on the server.', solution: 'Wrap storage access in platform checks or use Angular\'s provideZoneChangeDetection with proper platform guards.' },
    { title: 'Third-Party Libraries', problem: 'Some third-party libraries assume a browser environment and fail during SSR.', solution: 'Load third-party scripts conditionally using NgIf with isPlatformBrowser, or use the hydrationComponent: \'never\' strategy for components that use these libraries.' },
    { title: 'Event Loss During Hydration', problem: 'User clicks or form inputs made before hydration completes may be lost.', solution: 'Use withEventReplay() in provideClientHydration() to replay user interactions during the hydration phase.' }
  ];
}
