# Architecture

## Component Hierarchy
```
App (layout shell)
├── HeaderComponent       — Sticky nav with gradient, router links
├── SidebarComponent      — Table of contents, accepts navigation input()
└── RouterOutlet          — Lazy-loaded pages
    ├── HomePage
    ├── HydrationPage
    ├── ComponentsPage
    ├── DirectivesPage
    ├── ServicesPage
    └── FormsPage
```

## Routing
- All pages are **lazy-loaded** via `loadComponent`
- Routes defined in `app.routes.ts`
- Wildcard route (`**`) redirects to home

## Component Patterns
- **Standalone components** — no NgModules
- **Three-file components** — separate `.ts`, `.html`, `.css` files per component
- **Data files** — large pages extract data/constants to `.data.ts` files (max 200 lines per TS file)
- **File size limits**: TS max 200 lines, HTML max 150 lines, CSS max 100 lines
- **Function size limit**: Max 50 lines per function
- **Input signals** — use `input()` for configurable props (e.g. sidebar navigation)
- **Data-driven templates** — page data imported from `.data.ts`, rendered via `@for` loops

## Layout
- `app.html` provides the shell: header + sidebar + router outlet + footer
- Sidebar hidden on mobile, visible on `lg+` screens
- Content area uses `max-w-7xl` centered container
