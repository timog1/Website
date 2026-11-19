# Coding Standards

## File Organization
- **Separate files** — HTML, TypeScript, and CSS must be in different files
- Use `templateUrl` and `styleUrl` in the component decorator — never inline templates
- File naming: `component.ts`, `component.html`, `component.css`

## File Size Constraints
- **TypeScript**: Max 200 lines per file
- **HTML templates**: Max 150 lines per file
- **CSS**: Max 100 lines per file
- If a file exceeds these limits, split the logic into child components or utilities

## Function Size
- **Max 50 lines per function** — count only code lines (exclude blank lines and comments)
- If a function exceeds 50 lines, extract logic into smaller helper functions
- Keep components focused — one responsibility per component

## TypeScript
- Use strict typing — no `any`
- One component per `.ts` file
- Export class names use PascalCase with `Component` or `Page` suffix
- Import only what you use

## Angular
- **Standalone components only** — no NgModules
- Use `input()` for component inputs (signals API)
- Use modern control flow: `@if`, `@for`, `@switch` (not `*ngIf`, `*ngFor`)
- Track `@for` loops with a unique property: `track item.id`

## Templates
- Use `routerLink` instead of `href` for navigation
- Use `routerLinkActive` for active link styling
- Keep templates clean and readable

## Naming
- Components: `HeaderComponent`, `HomePage`
- Files: lowercase, kebab-case for folders (`components-page`)
- Signals: lowercase with descriptive names (`navigation`, `topics`)

## Code Style
- 2-space indentation
- Trailing commas in arrays/objects
