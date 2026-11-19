# Angular Skill

## Components (Three-File Pattern)
Each component consists of three separate files: `.ts`, `.html`, `.css`.
For large pages, extract data to a separate `.data.ts` file.

### `name.ts`
```typescript
import { Component } from '@angular/core';
import { items } from './name.data';

@Component({
  selector: 'app-name',
  imports: [],
  templateUrl: './name.html',
  styleUrl: './name.css'
})
export class NameComponent {
  items = items;
}
```

### `name.html`
```html
@for (item of items; track item.id) {
  <div>{{ item.name }}</div>
}
```

### `name.css`
```css
/* Component-specific styles */
```

### `name.data.ts` (for large pages)
```typescript
export interface Item {
  id: number;
  name: string;
}

export const items: Item[] = [
  { id: 1, name: 'First' },
  { id: 2, name: 'Second' }
];
```

## Key Patterns
- **Standalone**: Always set `standalone: true` (default in Angular 21)
- **Inputs**: Use `input()` for required, `input(default)` for optional
- **Outputs**: Use `output()` for event emission
- **Signals**: Use `signal()` for reactive state, `computed()` for derived values
- **Control flow**: `@if`, `@for`, `@switch` — never use `*ngIf`/`*ngFor`
- **Binding**: Property `[prop]="value"`, event `(event)="handler()"`, two-way `[(value)]="model"`

## Routing
```typescript
// Lazy-loaded route
{ path: 'page', loadComponent: () => import('./page/page').then(m => m.PageComponent) }
```

## Services & DI
- Use `inject()` inside components (no constructor DI)
- Provide services at component, route, or application level
- Use `providedIn: 'root'` for singletons
