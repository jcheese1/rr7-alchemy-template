# React Router 8 + Alchemy + Cloudflare

[![Deployed with Alchemy](https://alchemy.run/alchemy-badge.svg)](https://alchemy.run)

A highly opinionated, modern template for building full-stack React Router 8 applications on Cloudflare Workers with Alchemy.

## Features

- 🚀 Server-side rendering
- ⚡️ Hot Module Replacement (HMR)
- 📦 Asset bundling and optimization
- 🔄 Data loading and mutations
- 🔒 TypeScript by default
- 🎉 TailwindCSS for styling
- 📖 [React Router docs](https://reactrouter.com/)

## Getting Started

### Installation

Install the dependencies:

```bash
bun install
```

### Development

Start the development server with HMR:

```bash
bun run dev
```

Your application will be available at `http://localhost:5173`.

## Previewing the Production Build

Alchemy generates the local Wrangler configuration when `bun run dev` starts. After that initialization, preview the production build locally:

```bash
bun run preview
```

## Building for Production

After Alchemy has generated the local Wrangler configuration, create a production build:

```bash
bun run build
```

## Deployment

Deployment is managed by Alchemy.

To build and deploy directly to production:

```sh
bun run deploy:production
```

To deploy the shared staging stage:

```sh
bun run deploy:staging
```

Pull requests are deployed automatically to isolated `pr-<number>` stages by the GitHub Actions workflow and destroyed when the pull request closes.

## CI

Create `production` and `staging` environments under **Settings → Environments**, then add these environment secrets to both:

- `ALCHEMY_PASSWORD`
- `ALCHEMY_STATE_TOKEN`
- `CLOUDFLARE_API_TOKEN`
- `CLOUDFLARE_EMAIL`

Deployments from `main` use `production`; pull-request previews and cleanup use `staging`. Public values can be declared directly in `alchemy.run.ts`.

## Adding Secrets

Secrets are managed through the local environment and the matching GitHub environments:

- Add the secret to `.env`.
- Add a placeholder to `.env.example`.
- Add the binding to `ReactRouter` in `alchemy.run.ts`. Wrap secrets with `alchemy.secret(process.env.SECRET)`; plain public values can use `process.env.PUBLIC_VALUE` with a default.
- Pass the secret through the deploy workflow's `env` block.
- Add it to both the `staging` and `production` GitHub environments.

## AI (optional)
- Uses opencode as the AI agent. Make sure to have the opencode CLI installed with opencode zen.
- Open opencode from the root of the project, and run `/scaffold {description of the project}` to have it create a base UI for the project.
- Ralph scripts are under `/scripts`. If you plan to use it, make sure that `plans/prd.json` is filled in with the project's PRD.

## Styling

This template comes with [Tailwind CSS](https://tailwindcss.com/) already configured for a simple default starting experience. You can use whatever CSS framework you prefer.


## Lint/Format

```sh
bunx ultracite init # install ultracite
```

and follow the prompts.

---

Built with ❤️ using React Router.
