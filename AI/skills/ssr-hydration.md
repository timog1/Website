# SSR & Hydration Skill

## Configuration
```typescript
// app.config.ts
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';

provideClientHydration(withEventReplay())
```

## Key Concepts
- **SSR**: Server renders HTML before sending to browser
- **Hydration**: Client attaches event listeners to server-rendered DOM
- **Incremental Hydration**: Reuses server DOM instead of re-rendering

## Hydration Strategies
- **Full** (default) — hydrates entire app at once
- **Route Triggers** — defer hydration until route is visited
- **Component Triggers** — defer until interaction (hover, viewport, idle)
- **Never** — skip hydration for static content

## SSR-Safe Code
- Avoid `window`, `document`, `localStorage` in component class body
- Use `isPlatformBrowser()` check or `afterNextRender()` for browser-only code
- Avoid `Date()` in component class — values differ between server and client

## Common Issues
- **Mismatch errors**: Server and client render different HTML → check platform-specific code
- **Missing window**: Wrap browser APIs in `@if (isBrowser)` or `afterNextRender()`
- **Slow SSR**: Heavy data fetching on every request → use caching

## Build & Run
```bash
npm run build           # Builds client + server, prerenders routes
npm run serve:ssr:Website  # Runs SSR server
```
