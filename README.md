# 📦 Next.js Starter Pack

A modern **Next.js** starter template with **TypeScript**, **TailwindCSS**, **Shadcn UI**, **Radix UI**, and developer-friendly tools pre-configured for rapid development.

---

## 🚀 Features

### Core

- **[Next.js](https://nextjs.org/)** — Modern React framework for SSR/SSG.
- **TypeScript** — Typed JavaScript.
- **[TailwindCSS](https://tailwindcss.com/)** — Utility-first CSS framework.
- **PostCSS** + **Autoprefixer** — CSS optimization.
- **[tw-animate-css](https://github.com/tailwindlabs/tailwindcss-animations)** — Tailwind animations.

### UI

- **[Shadcn UI](https://ui.shadcn.com/)** — Modern component library.
- **[Lucide React](https://lucide.dev/)** — Modern icon library.
- **Tailwind Merge** & **Clsx** — Class merging tools.
- **Sonner** — Toast notifications.

### State & Data

- **[Zustand](https://zustand-demo.pmnd.rs/)** — State management.
- **[React Query](https://tanstack.com/query/latest)** — Data fetching and caching.
- **Immer** — Immutable state updates.

### Forms

- **[React Hook Form](https://react-hook-form.com/)** — Form handling library.
- **@hookform/resolvers** — Validation integration.
- **Input OTP** — OTP input component.

### Utilities

- **Axios** — HTTP client.
- **Universal Cookie** — Cookie management.

### Development Tools

- ESLint & Prettier — Code linting and formatting.
- Husky & lint-staged — Git hooks and pre-commit checks.
- Commitlint — Enforce commit message style.

### Architecture

- **Feature-based** folder structure — code organized by business domain under `src/features/`.
- **App Router** — thin page shells in `src/app/` import from feature modules.
- **Shared primitives** — `src/components/ui/` for shadcn components, `src/lib/` for utilities.

---

## ⚙ Installation

Clone the repository:

```bash
git clone https://github.com/MadeSatya5/nextjs-starter
cd nextjs-starter

pnpm install
pnpm prepare   # Install Husky Git hooks
```

## 📁 Folder Structure

```plaintext
.
├── public/                      # Static assets
├── src/
│   ├── app/                     # Next.js App Router (thin route shells)
│   ├── features/                # Feature modules (one folder per domain)
│   │   └── <name>/
│   │       ├── components/      # Feature-specific components
│   │       ├── hooks/           # Feature-specific hooks
│   │       ├── types/           # Feature-specific types
│   │       ├── api/             # Feature-specific API calls
│   │       ├── constants/       # Feature-specific constants
│   │       └── index.ts         # Barrel exports
│   ├── components/              # Shared UI components
│   │   └── ui/                  # shadcn primitives (Button, Card, Input, etc.)
│   ├── hooks/                   # Shared hooks
│   ├── lib/                     # Shared utilities (cn, api, cookies, url)
│   ├── styles/                  # Global CSS (Tailwind v4 with @theme)
│   └── types/                   # Shared TypeScript types
├── eslint.config.mjs            # ESLint flat config
├── prettier.config.js           # Prettier config
├── tsconfig.json                # TypeScript config
├── commitlint.config.js         # Commit message linting
├── components.json              # shadcn/ui config
└── package.json
```

## 📜 Scripts

| Script              | Description                                |
| ------------------- | ------------------------------------------ |
| `pnpm dev`          | Start development server                   |
| `pnpm build`        | Build the project                          |
| `pnpm postbuild`    | Run sitemap generation with `next-sitemap` |
| `pnpm start`        | Start production server                    |
| `pnpm lint`         | Run ESLint to check code quality           |
| `pnpm lint:fix`     | Automatically fix linting issues           |
| `pnpm lint:strict`  | Run ESLint with no warnings allowed        |
| `pnpm format`       | Run Prettier to format all files           |
| `pnpm format:check` | Check formatting without writing changes   |
| `pnpm format:write` | Format code and fix linting issues         |
| `pnpm fix`          | Run both format and lint fixes             |
| `pnpm typecheck`    | Run TypeScript type checking               |
| `pnpm prepare`      | Install Husky Git hooks                    |
