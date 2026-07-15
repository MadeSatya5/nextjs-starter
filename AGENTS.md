# AGENTS.md — NextJS Starter

## Build / Lint / TypeCheck Commands

```bash
pnpm dev          # Start dev server
pnpm build        # Production build
pnpm start        # Production server
pnpm lint         # ESLint check (src/)
pnpm lint:fix     # ESLint fix + format
pnpm lint:strict  # ESLint with --max-warnings=0
pnpm format       # Prettier check
pnpm format:write # Prettier write + ESLint fix
pnpm fix          # format:write + lint:fix (full auto-fix)
pnpm typecheck    # tsc --noEmit (run BEFORE pushing)
```

**No test framework is configured.** Before adding tests, install one (e.g., vitest) and document the command here.

**Pre-push hook** runs `pnpm typecheck`. **Pre-commit hook** runs `lint-staged` (ESLint on staged `.ts/.tsx`, Prettier on `.json/.css/.md`).

## Code Style Guidelines

### Project Architecture (Feature-Based)

```
src/
  app/                   # Next.js App Router — thin page shells only
  features/<name>/       # One folder per business domain
    components/          # Feature-specific components
    hooks/               # Feature-specific hooks
    types/               # Feature-specific types
    api/                 # Feature-specific API calls
    constants/           # Feature-specific constants
    index.ts             # Barrel exports (re-export public API)
  components/            # Shared UI (Typography, NextImage)
    ui/                  # shadcn primitives (Button, Card, Input, Select…)
  hooks/                 # Shared hooks (use-mobile)
  lib/                   # Shared utilities (cn, api, cookies, url)
  styles/                # Global CSS (globals.css)
  types/                 # Shared types (api.ts)
```

**Rules:**

- Features import from `@/components`, `@/lib`, `@/hooks`, `@/types`, and `@features/*`
- Features NEVER import from other features. Extract shared code to `@/components` or `@/lib` instead.
- App Router pages (`src/app/`) are thin shells — they import and render feature components, no business logic.
- Barrel files (`index.ts`) re-export the feature's public API.

### Imports (enforced by `eslint-plugin-simple-import-sort`)

Ordered in groups with blank lines between:

1. External packages (`react`, `next`, `lucide-react`, `sonner`, etc.)
2. CSS imports (`*.css`)
3. `@/lib`, `@/hooks` — shared utilities
4. `@/data` — data/constants
5. `@/components`, `@/container` — shared components
6. `@/store` — state management
7. Other `@/` aliases (including `@features/*`)
8. Relative imports (`./`, `../`)
9. `@/types`

Always use `import type { … }` for type-only imports to avoid bundler overhead.

### Naming Conventions

| Kind                  | Convention               | Example                        |
| --------------------- | ------------------------ | ------------------------------ |
| Components            | PascalCase               | `ButtonDemo`, `FormDemo`       |
| Files (components)    | PascalCase               | `ButtonDemo.tsx`               |
| Files (utilities)     | kebab-case               | `use-mobile.ts`, `cn.ts`       |
| Files (ui primitives) | kebab-case               | `input-select.tsx`             |
| Functions/variables   | camelCase                | `getToken`, `isBrowser`        |
| Types/interfaces      | PascalCase               | `ButtonProps`, `ApiResponse`   |
| Enums                 | PascalCase               | `TypographyVariant`            |
| Constants             | UPPER_SNAKE or camelCase | `MOBILE_BREAKPOINT`, `BUTTONS` |

### Component Patterns

**Shared components** — use `function` declarations with named exports:

```tsx
export function Card({ className, ...props }: React.ComponentProps<"div">) {
  return <div data-slot="card" className={cn("…", className)} {...props} />;
}
```

**Form controls** — use `React.forwardRef` with `.displayName`:

```tsx
const Input = React.forwardRef<HTMLInputElement, InputProps>(({ className, … }, ref) => {
  return <input className={cn("…", className)} ref={ref} … />;
});
Input.displayName = "Input";
export { Input };
```

**Page components** — use default exports (`export default function Page()`).

**"use client" directive** — required for components using hooks, event handlers, or browser APIs.

### Variants with CVA

Use `class-variance-authority` for multi-variant components:

```tsx
import { cva, type VariantProps } from "class-variance-authority";

const buttonVariants = cva("base-classes", {
  variants: {
    variant: { default: "…", outline: "…" },
    size: { default: "h-9 px-4", sm: "h-8 px-3" },
  },
  defaultVariants: { variant: "default", size: "default" },
});

export interface ButtonProps extends React.ButtonHTMLAttributes<…>, VariantProps<…> { … }
```

### Styling

- Tailwind CSS v4 with `@theme inline` for CSS variables and `oklch()` color values.
- Use `cn()` from `@/lib/cn` (wraps `clsx` + `tailwind-merge`) for conditional classes.
- Apply global resets via `@layer base` in `globals.css`.
- Dark mode via `.dark` class (next-themes).
- Use shadcn `data-slot` attributes on UI primitives.
- Prefer `gap-*` over `space-*` for flex/grid spacing.

### TypeScript

- `strict: true` — always type parameters and return values.
- Use `React.ComponentProps<"element">` for native HTML attributes.
- Use `React.ComponentProps<typeof Component>` for shadcn/Radix primitives.
- Define props interfaces/types locally in the component file; put shared types in `@/types`.
- Use `as const` for readonly arrays/literals.
- Avoid `any`. Use `// eslint-disable-next-line @typescript-eslint/no-explicit-any` only as last resort.

### Error Handling

- Form errors: use react-hook-form's `Controller` + `get(errors, name)` pattern with `<ErrorText>` component.
- API errors: the axios interceptor in `@/lib/api` normalizes error messages. Catch with `try/catch` or `.catch()`.
- Toast notifications: use `sonner` (`toast.success(…)`, `toast.error(…)`).

### State Management

- Server state: `@tanstack/react-query` with the configured axios client (`@/lib/api`).
- Client state: `zustand` with `immer` for complex stores.
- Form state: `react-hook-form` with `FormProvider` + `Controller` pattern.

### API Client

- Configured in `@/lib/api` (axios instance with auth interceptor).
- Server-side: call `setApiContext(context)` before use.
- Token management via `@/lib/cookies` (universal-cookie).

### File Size & Organization

- Keep components under ~150 lines. Extract sub-components or hooks if they grow.
- One component per file (except tightly coupled compound components like Card, Select).
- Feature barrel files re-export only what routes need.
- Avoid deep nesting beyond 3 levels in features.

### Commit Convention

Follow [conventional commits](https://www.conventionalcommits.org/):

```
feat: add user profile page
fix: correct email validation regex
refactor: extract auth guard into middleware
chore: update dependencies
```

Allowed types: `feat`, `fix`, `docs`, `chore`, `style`, `refactor`, `ci`, `test`, `perf`, `revert`, `vercel`.

Husky hooks enforce commitlint and lint-staged automatically.
