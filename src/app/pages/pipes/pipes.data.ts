export interface BuiltInPipe {
  name: string;
  icon: string;
  description: string;
  example: string;
  output: string;
}

export interface CustomPipeConcept {
  title: string;
  description: string;
  code: string;
}

export const builtInPipes: BuiltInPipe[] = [
  {
    name: 'date',
    icon: '📅',
    description: 'Formats a date value according to patterns. Supports full date, short date, custom formats, and timezone.',
    example: `{{ birthday | date:'fullDate' }}
{{ birthday | date:'MM/dd/yyyy' }}
{{ birthday | date:'short' }}`,
    output: 'Thursday, November 19, 2026'
  },
  {
    name: 'currency',
    icon: '💰',
    description: 'Formats a number as currency with symbol, code, or symbol-display notation.',
    example: `{{ price | currency:'USD' }}
{{ price | currency:'EUR':'symbol-narrow' }}
{{ price | currency:'USD':true }}`,
    output: '$1,234.56'
  },
  {
    name: 'percent',
    icon: '📊',
    description: 'Formats a number as a percentage with configurable decimal places.',
    example: `{{ 0.75234 | percent }}
{{ 0.75234 | percent:'3.1-1' }}`,
    output: '75%'
  },
  {
    name: 'number',
    icon: '🔢',
    description: 'Formats a number with locale-specific digit group separators and decimal digits.',
    example: `{{ 1234567.891 | number }}
{{ 1234567.891 | number:'3.2-2' }}`,
    output: '1,234,567.89'
  },
  {
    name: 'uppercase / lowercase',
    icon: '🔤',
    description: 'Converts a string to all uppercase or all lowercase letters.',
    example: `{{ name | uppercase }}
{{ name | lowercase }}`,
    output: 'JOHN DOE / john doe'
  },
  {
    name: 'json',
    icon: '{ }',
    description: 'Converts an object or value to a JSON string. Useful for debugging.',
    example: `{{ user | json }}`,
    output: '{"name":"John","age":30}'
  },
  {
    name: 'slice',
    icon: '✂️',
    description: 'Creates a new array or string containing a subset of the elements.',
    example: `{{ 'Hello World' | slice:0:5 }}
{{ items | slice:0:3 }}`,
    output: 'Hello'
  },
  {
    name: 'async',
    icon: '⚡',
    description: 'Subscribes to a Promise or Observable and returns the latest value. Auto-unsubscribes.',
    example: `{{ user$ | async }}
@for (item of (items$ | async); track item.id) { ... }`,
    output: 'Latest emitted value'
  },
  {
    name: 'titlecase',
    icon: '📝',
    description: 'Converts text to title case — first letter of each word is capitalized.',
    example: `{{ 'hello world' | titlecase }}`,
    output: 'Hello World'
  },
  {
    name: 'i18nPlural / i18nSelect',
    icon: '🌐',
    description: 'Internationalization pipes for pluralization and gender selection.',
    example: `{{ count | i18nPlural: pluralMap }}
{{ user.gender | i18nSelect: genderMap }}`,
    output: 'Depends on mapping'
  }
];

export const customPipeConcepts: CustomPipeConcept[] = [
  {
    title: 'Creating a Custom Pipe',
    description: 'Use the @Pipe decorator to create a reusable transformation. Implement the transform method.',
    code: `import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate',
  standalone: true
})
export class TruncatePipe implements PipeTransform {
  transform(value: string, length: number = 50): string {
    if (!value) return '';
    if (value.length <= length) return value;
    return value.slice(0, length) + '...';
  }
}

// Usage in template
{{ longText | truncate:100 }}`
  },
  {
    title: 'Chaining Pipes',
    description: 'Pipes can be chained together. The output of one pipe becomes the input of the next.',
    code: `<!-- Chain multiple pipes -->
{{ price | currency:'USD' | uppercase }}
{{ name | lowercase | truncate:20 }}
{{ birthday | date:'fullDate' | titlecase }}

<!-- With async -->
{{ user$ | async | json }}`
  },
  {
    title: 'Pure vs Impure Pipes',
    description: 'Pure pipes run only when the input reference changes. Impure pipes run on every change detection cycle.',
    code: `// Pure pipe (default) — runs on reference change
@Pipe({
  name: 'filterByName',
  standalone: true,
  pure: true
})
export class FilterByNamePipe implements PipeTransform {
  transform(items: any[], name: string): any[] {
    return items.filter(i => i.name.includes(name));
  }
}

// Impure pipe — runs every cycle (use sparingly!)
@Pipe({
  name: 'searchFilter',
  standalone: true,
  pure: false  // ⚠️ Performance impact!
})
export class SearchFilterPipe implements PipeTransform {
  transform(items: any[], query: string): any[] {
    return items.filter(i =>
      i.name.toLowerCase().includes(query.toLowerCase())
    );
  }
}`
  },
  {
    title: 'Pipe with Multiple Arguments',
    description: 'Pipes can accept multiple arguments for flexible transformations.',
    code: `@Pipe({
  name: 'highlight',
  standalone: true
})
export class HighlightPipe implements PipeTransform {
  transform(value: string, search: string, color: string = 'red'): string {
    if (!value || !search) return value;
    const regex = new RegExp(search, 'gi');
    return value.replace(regex,
      '<mark style="background:$&{color}">$&</mark>');
  }
}

// Usage
{{ text | highlight:searchTerm:'yellow' }}`
  }
];

export const pipeTips = [
  { tip: 'Prefer pure pipes for better performance', detail: 'Pure pipes only re-run when the input object reference changes, making them much faster.' },
  { tip: 'Use async pipe to avoid manual subscriptions', detail: 'The async pipe handles subscription and unsubscription automatically, preventing memory leaks.' },
  { tip: 'Chain pipes for complex formatting', detail: 'Combine multiple pipes to achieve complex transformations without custom logic.' },
  { tip: 'Avoid impure pipes in large lists', detail: 'Impure pipes run on every change detection cycle, which can cause performance issues with large datasets.' },
  { tip: 'Mark standalone pipes for modern Angular', detail: 'Use standalone: true in the @Pipe decorator to avoid NgModule boilerplate.' }
];
