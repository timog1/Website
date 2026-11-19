# Project Overview

## What It Is
Angular learning website for web developers covering Hydration, SSR, Components, Directives, Services, and Forms.

## Tech Stack
- **Angular 21** — standalone components, signals, modern control flow
- **TypeScript 5.9** — strict mode
- **Tailwind CSS 4** — utility-first styling via PostCSS
- **Express 5** — SSR server
- **Vitest** — testing framework

## Key Features
- Server-Side Rendering (SSR) with incremental hydration
- Lazy-loaded route-based pages
- Responsive layout with sticky header and sidebar
- Code examples and comparison tables

## Commands
```bash
npm start          # Dev server on port 4200
npm run build      # Production build with SSR prerender
npm test           # Run Vitest tests
```

## Project Structure
```
src/app/
├── components/    # Reusable UI (header, sidebar)
│   ├── header/
│   │   ├── header.ts
│   │   ├── header.html
│   │   └── header.css
│   └── sidebar/
│       ├── sidebar.ts
│       ├── sidebar.html
│       └── sidebar.css
├── pages/         # Route-based page components
│   ├── home/
│   │   ├── home.ts
│   │   ├── home.html
│   │   └── home.css
│   ├── hydration/
│   │   ├── hydration.ts
│   │   ├── hydration.html
│   │   ├── hydration.css
│   │   └── hydration.data.ts   # Data extracted for large pages
│   └── ... (other pages follow same pattern)
├── app.ts         # Root component (layout shell)
├── app.routes.ts  # Lazy-loaded routes
├── app.config.ts  # App config with hydration
└── app.config.server.ts
```
