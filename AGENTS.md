# AGENTS.md

## Project Overview

Event landing page for AI JAM #1 workshop (Prague, April 9, 2026).

**Tech Stack:** React 19.2.4, TypeScript 6.0.2, Vite 8.0.4, Tailwind CSS 4.2.2, React Compiler (Babel)

**Type:** Single Page Application (SPA)

## Commands

| Command           | Purpose                          | When to use        |
| ----------------- | -------------------------------- | ------------------ |
| `npm run dev`     | Start Vite dev server with HMR   | Development        |
| `npm run build`   | Type-check + production build    | Before deployment  |
| `npm run lint`    | Run ESLint on all .ts/.tsx files | Code quality check |
| `npm run preview` | Preview production build locally | Test before deploy |

## Project Structure

```
index.html              # HTML entry point, loads src/main.tsx
vite.config.ts          # Vite config (React, Babel, Tailwind plugins)
eslint.config.js        # ESLint flat config (TS, React Hooks, React Refresh)
tsconfig.json           # TypeScript root config (references app/node)
tsconfig.app.json       # App TypeScript config (strict, ESNext, bundler mode)
package.json            # Dependencies and scripts
src/
  main.tsx              # Entry point, renders App in StrictMode
  App.tsx               # Main component (event info, hero section)
  index.css             # Tailwind CSS import
  assets/               # Static assets
docs/                   # Documentation, guides, project templates
```

## Architecture

**Data Flow:** `index.html` → `src/main.tsx` → `App.tsx` → DOM (`#root`)

**Key Decisions:**

- No routing: Single static page with all content
- No state management: Static content, no user interaction
- React Compiler enabled: Auto-optimization via Babel plugin
- Base path: Dynamic (uses repo name from `GITHUB_REPOSITORY` in CI, defaults to `/aijam/`)

**Build Pipeline:** Vite → React plugin → Babel (React Compiler) → Tailwind CSS → Bundle

## Conventions

**TypeScript:**

- Strict mode: `noUnusedLocals`, `noUnusedParameters`, `erasableSyntaxOnly`
- Module resolution: `bundler` mode
- Syntax: `verbatimModuleSyntax` (explicit type imports)
- Target: ES2023

**Styling:**

- Tailwind CSS utility classes only
- Dark mode support via `dark:` variants
- No custom CSS files (App.css is empty)

**Code Style:**

```tsx
function App() {
  return (
    <section className="flex min-h-screen flex-col items-center justify-center gap-6">
      <h1 className="text-5xl font-medium tracking-tight text-gray-900 dark:text-gray-100">
        Title
      </h1>
    </section>
  );
}
```

## Boundaries

✅ **Always do:**

- Run `npm run lint` before committing
- Use Tailwind utility classes for styling
- Keep components functional with hooks
- Include dark mode variants for colors

⚠️ **Ask first:**

- Adding new dependencies (minimalist project)
- Changing Vite/Babel/ESLint config
- Adding routing or state management (intentionally omitted)
- Modifying base path logic (auto-detects from repo name in CI)

🚫 **Never:**

- Commit `node_modules/` or `dist/`
- Write inline styles or custom CSS classes
- Use class components or legacy React patterns
- Disable TypeScript strict checks
