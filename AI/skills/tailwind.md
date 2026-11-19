# Tailwind CSS Skill

## Version
Tailwind CSS 4 with `@tailwindcss/postcss` plugin.

## Common Patterns Used
- **Containers**: `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`
- **Cards**: `bg-white rounded-2xl shadow-sm border border-gray-100 p-8`
- **Gradients**: `bg-gradient-to-r from-red-600 to-pink-600`
- **Text gradients**: `text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-pink-600`
- **Hover**: `hover:shadow-md hover:border-red-200 transition-all`
- **Responsive**: `hidden lg:block`, `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3`
- **Sticky**: `sticky top-24`

## Color Palette
- Primary: `red-600` → `pink-600` → `purple-700`
- Backgrounds: `gray-50`, `white`
- Text: `gray-900` (headings), `gray-600` (body), `gray-500` (secondary)
- Accents: `red-50`, `pink-50`, `blue-50`, `green-50` for section backgrounds

## Rules
- Use utility classes directly in templates — no separate CSS files
- Prefer `rounded-xl` / `rounded-2xl` for cards
- Use `space-y-*` for vertical spacing between children
- Use `gap-*` for grid/flex spacing
- Keep code blocks in `bg-gray-900 rounded-lg p-4 font-mono text-sm text-green-400`
