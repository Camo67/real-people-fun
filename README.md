# Real People Fun

A responsive marketing website built with Vite, React, TypeScript, Tailwind CSS, and shadcn/ui-style components.

## Overview

This site is designed as a polished entertainment and event landing page, featuring:
- Hero and onboarding section
- Services highlights
- Programs and gallery section
- Testimonials and social proof
- Call-to-action section and footer

The current gallery supports video content and image media.

## Built With

- Vite
- React 18
- TypeScript
- Tailwind CSS
- shadcn/ui-inspired components
- React Router
- Framer Motion
- React Query

## Project Structure

- `src/App.tsx` — application root and router setup
- `src/pages/Index.tsx` — landing page composition
- `src/components/` — reusable UI sections
- `src/components/ui/` — shared UI primitives and widgets
- `src/assets/` — static image imports
- `public/` — static public assets, including the gallery video

## Getting Started

### Install dependencies

```bash
npm install
```

### Run locally

```bash
npm run dev
```

### Build for production

```bash
npm run build
```

### Preview production build

```bash
npm run preview
```

### Run tests

```bash
npm run test
```

### Lint the project

```bash
npm run lint
```

## Notes

- The dev server uses Vite, which serves `public/` assets directly under the root path.
- The gallery currently renders a verified video item from the `public/` directory.

## Cloudflare Deployment

This project is prepped for Cloudflare Pages deployment.

- Build command: `npm run build`
- Build output directory: `dist`
- Cloudflare Pages workflow created at `.github/workflows/cloudflare-pages.yml`
- SPA route fallback configured with `public/_routes.json`

### Setup

1. Create a Cloudflare Pages project connected to this repository.
2. Add repository secrets:
   - `CLOUDFLARE_API_TOKEN`
   - `CLOUDFLARE_ACCOUNT_ID`
3. Push to `main` to trigger the deployment workflow.

## License

This project is private and configured as a non-published application.

