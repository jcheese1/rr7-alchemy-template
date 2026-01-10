## Project Overview

React Router 7 full-stack application deployed to Cloudflare Workers via Alchemy.

### Tech Stack

| Layer | Technology |
|-------|------------|
| Framework | React Router 7 (SSR) |
| Runtime | Cloudflare Workers |
| Styling | Tailwind CSS v4 |
| Language | TypeScript |
| Package Manager | Bun |
| Deployment | Alchemy |

### Directory Structure

```
app/                  # React Router application
├── routes/           # Route components (loaders, actions, components)
├── root.tsx          # Root layout, error boundary, global links
├── routes.ts         # Route configuration
├── app.css           # Global styles + Tailwind theme
├── env.server.ts     # Server-only environment access
└── env.d.ts          # Environment type definitions

workers/              # Cloudflare Workers
├── app.ts            # Main worker entry point
└── do/               # Durable Objects
    └── counter.ts    # Example Durable Object

public/               # Static assets (images, videos, fonts)
alchemy.run.ts        # Alchemy deployment configuration
```

### Architecture

- **SSR**: React Router handles server-side rendering on Cloudflare Workers
- **Bindings**: Environment variables and Durable Objects are bound via `alchemy.run.ts`
- **Request Flow**: `workers/app.ts` → React Router request handler → route loaders/actions
- **State**: Durable Objects for persistent state (e.g., `Counter`)

## Commands

| Command | Description |
|---------|-------------|
| `bun install` | Install dependencies |
| `bun run dev` | Start dev server with HMR (localhost:5173) |
| `bun run build` | Create production build |
| `bun run preview` | Preview production build locally |
| `bun run typecheck` | Run TypeScript type checking |
| `bun run deploy:staging` | Deploy to staging environment |
| `bun run deploy:production` | Deploy to production environment |
| `bun run destroy` | Tear down Alchemy resources |

### UI Components

When you need a UI component (button, dialog, form, etc.), use the ones available in app/components.

Available components: accordion, alert, alert-dialog, autocomplete, avatar, badge, breadcrumb, button, card, checkbox, checkbox-group, collapsible, combobox, command, dialog, empty, field, fieldset, form, frame, group, input, input-group, kbd, label, menu, meter, number-field, pagination, popover, preview-card, progress, radio-group, scroll-area, select, separator, sheet, skeleton, slider, spinner, switch, table, tabs, textarea, toast, toggle, toggle-group, toolbar, tooltip.

These use base-ui as the foundation as opposed to radix. The main difference is that base-ui does not have an `asChild` prop. Instead, it uses the `render` prop to render the component as a child.

Full docs: https://coss.com/ui/llms.txt

## Code Style

### TypeScript
- Strict mode enabled
- Use `type` imports: `import type { Route } from "./+types/root"`
- Prefer `interface` for object shapes, `type` for unions/intersections

### React Router Conventions
- Routes live in `app/routes/` and are registered in `app/routes.ts`
- Use `loader` for data fetching, `action` for mutations
- Access Cloudflare bindings via `context.cloudflare.env`

### Tailwind CSS v4
- Theme customization in `app/app.css` using `@theme` directive
- Prefer utility classes over custom CSS
- Use CSS variables for design tokens: `var(--color-*)`

### File Naming
- All files: `kebab-case.ts` / `kebab-case.tsx`
- Route index files: `_index.tsx`

### Imports
- Group imports: React → third-party → local → types
- Use path aliases where configured

## Testing

### Setup (Not yet configured)

Recommended: Vitest (native Vite integration)

```bash
bun add -d vitest @testing-library/react @testing-library/dom jsdom
```

Add to `package.json`:
```json
{
  "scripts": {
    "test": "vitest",
    "test:run": "vitest run"
  }
}
```

Add `vitest.config.ts`:
```ts
import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    environment: "jsdom",
    globals: true,
  },
});
```

### Conventions (when implemented)
- Test files: `*.test.ts` or `*.test.tsx` alongside source files
- Unit tests for utilities and hooks
- Integration tests for route loaders/actions
- Use `@cloudflare/vitest-pool-workers` for Worker-specific tests

## Security

### Environment Variables
- Never commit `.env` files (already in `.gitignore`)
- Use `.env.example` as a template with placeholder values

### Accessing Environment
- **Workers/Durable Objects** (pure server code): `import { env } from 'cloudflare:workers'`
- **React Router app** (isomorphic): Use global `ENV` - works in loaders, actions, and components (server & client)

### Secrets Management
- Local dev: Store in `.env`
- Production: Use GitHub environment secrets (Settings → Environments)
- In `alchemy.run.ts`: Wrap secrets with `alchemy.secret(process.env.SECRET)`

### Bindings
- Public values: Prefix with `PUBLIC_` to expose via `ENV`
- Secrets: Never prefix with `PUBLIC_`, always use `alchemy.secret()` wrapper
- Add new secrets to:
  1. `.env` (local)
  2. `.env.example` (placeholder)
  3. `alchemy.run.ts` bindings
  4. `.github/workflows/deploy.yml`
  5. GitHub environment secrets (staging + production)