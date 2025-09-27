📦 Next.js Starter Pack

This is a modern Next.js starter template with TypeScript, TailwindCSS, Shadcn UI, Radix UI, and developer-friendly tools pre-configured for rapid development.

🚀 Features

This starter comes with:

Core

Next.js
(v15) — Modern React framework for SSR/SSG.

TypeScript
— Typed JavaScript.

TailwindCSS
— Utility-first CSS framework.

PostCSS

- Autoprefixer
  — CSS optimizations.

tw-animate-css
— Tailwind animations.

UI

Shadcn UI
— Modern component library.

Radix UI
— Accessible headless UI components.

Lucide React
— Modern icon library.

Tailwind Merge
& Clsx
— CSS class merging tools.

Cmdk
— Command palette component.

Recharts
— Charting library.

Sonner
— Toast notifications.

State & Data

Zustand
— State management.

React Query
— Data fetching and caching.

Zod
— Schema validation.

Immer
— Immutable state updates.

Forms

React Hook Form
— Form handling library.

@hookform/resolvers
— Validation integration.

Input OTP
— OTP input component.

Utilities

Axios
— HTTP client.

Date-fns
— Date manipulation library.

Universal Cookie
— Cookie management.

Vaul
— State persistence.

Development Tools

ESLint & Prettier — Code linting and formatting.

Husky & lint-staged — Git hooks and pre-commit checks.

Commitlint — Enforce commit message style.

Type definitions for Node.js & React.

⚙ Installation

Clone the repo:

git clone <repo-url>
cd nextjs-starter

Install dependencies:

pnpm install

Run the development server:

pnpm dev

Build the project:

pnpm build

Start production server:

pnpm start

📂 Recommended Folder Structure
.
├── public/ # Static assets (images, fonts, icons, etc.)
├── src/
│ ├── components/ # UI components
│ ├── pages/ # Next.js pages
│ ├── styles/ # Tailwind/CSS styles
│ ├── utils/ # Helper functions
│ ├── hooks/ # Custom hooks
│ ├── store/ # Zustand store
│ └── types/ # TypeScript type definitions
├── .eslintrc.js # ESLint config
├── .prettierrc # Prettier config
├── tailwind.config.js # TailwindCSS config
├── postcss.config.js # PostCSS config
├── tsconfig.json # TypeScript config
└── package.json

📦 Scripts
Script Description
pnpm dev Start development server
pnpm build Build project
pnpm start Start production server
pnpm lint Run ESLint
pnpm lint:fix Lint & auto-fix issues
pnpm format Run Prettier formatting
pnpm format:check Check formatting
pnpm format:write Format & lint code
pnpm typecheck Run TypeScript type checking
pnpm prepare Install Husky hooks
🛠 Styling

TailwindCSS is configured with:

Custom colors

Animations (tw-animate-css)

Dark mode support

CSS variables

📚 Documentation

Next.js: https://nextjs.org/docs

TailwindCSS: https://tailwindcss.com/docs

Shadcn UI: https://ui.shadcn.com/docs

Radix UI: https://www.radix-ui.com/docs/primitives/overview/introduction

React Query: https://tanstack.com/query/latest

Zustand: https://zustand-demo.pmnd.rs/

🤝 Contribution

You can improve this starter by adding:

Reusable UI components

Custom hooks

API integrations

Testing tools like Jest or Cypress
