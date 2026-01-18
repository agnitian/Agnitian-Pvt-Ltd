# Agnitian — AI-Powered Solutions

Agnitian is a TypeScript + React frontend that showcases Agnitian's AI & product offerings, platform descriptions, and marketing content. It’s built with Vite and uses modern UI libraries and animation tooling to present solutions and case studies for AI, generative systems, agent frameworks, healthcare intelligence, finance automation, and creator platforms.

Key goals:
- Present product and solution descriptions
- Serve as a marketing / company site and product showcase
- Provide a foundation for interactive contact/conversation panel and site navigation

---

## Quick snapshot

- Framework: Vite + React
- Language: TypeScript (TSX)
- UI/UX: Tailwind-style utility classes present in markup (Tailwind implied), Lucide icons, Framer Motion animations
- Entrypoints and config:
  - `index.html` — main HTML entry
  - `vite.config.ts` — Vite configuration, path alias `@` -> `src`
  - `src/main.tsx` (expected) — JS/TS entry referenced from `index.html`
  - `src/Layout.tsx` — site layout, header/footer, contact panel integration
  - `src/lib/description.ts` — central content: solutions, services, blog metadata
  - `src/pages/*` — individual pages (e.g., `About.tsx`, `Solutions.tsx`)
  - `src/lib/utils.tsx` — shared components such as `AgnitianText` SVG logo

---

## Tech stack

- TypeScript + TSX
- React
- Vite (dev server / build)
- Framer Motion (animations)
- lucide-react (icons)
- CSS via utility classes (Tailwind-like)
- Optional tooling: pnpm / npm / yarn

---

## Project structure (high level)

- index.html
- vite.config.ts
- src/
  - main.tsx (app bootstrap — referenced in index.html)
  - Layout.tsx
  - pages/
    - About.tsx
    - Solutions.tsx
    - ... other pages
  - Components/
    - ui/ (buttons, UI primitives)
    - contact/ConversationPanel.tsx
  - lib/
    - description.ts (site content, solutions/services/blog)
    - utils.tsx (AgnitianText logo)
  - assets/ (images, static media — if present)

---

## Prerequisites

- Node.js (16+ recommended)
- npm, yarn or pnpm
- Git

(If your repo uses a specific package manager or Node engine, update this file to reflect that and check package.json)

---

## Install & development

Using npm:
```bash
npm install
npm run dev
```

Using pnpm:
```bash
pnpm install
pnpm dev
```

Using yarn:
```bash
yarn
yarn dev
```

Default Vite dev server port is configured to 3000 in `vite.config.ts`. The site opens automatically when running the dev server (config: open: true).

---

## Build & preview

```bash
# build for production
npm run build

# locally preview the production build
npm run preview
```

(If your package.json uses different scripts, replace commands accordingly.)

---

## Environment & configuration

- Check for `.env` or `.env.local` files for environment-specific configuration (API keys, analytics).
- If you integrate external APIs (analytics, forms, CMS), add appropriate VITE_ prefixed env variables and document them here.

---

## Key files & what they do

- `index.html` — basic HTML entry with `<div id="root"></div>` and script to `src/main.tsx`.
- `vite.config.ts` — configures Vite with React plugin and path alias `@` -> `./src`.
- `src/main.tsx` — app bootstrap (mounts React app).
- `src/Layout.tsx` — site frame, header, footer, contact panel and main content wrapper.
- `src/lib/description.ts` — canonical site content (solutions, services, blog metadata); primary place to edit copy and product listings.
- `src/pages/About.tsx`, `src/pages/Solutions.tsx` — example pages showing how the `description` content is used.
- `src/lib/utils.tsx` — contains `AgnitianText` (SVG logo) and other helpers.

---

## Development notes & suggestions

- Central content is stored in `src/lib/description.ts`. Use it to edit solution descriptions, services, or blog metadata rather than editing pages directly for consistent content reuse.
- Confirm whether Tailwind is installed/ configured (utility classes are used in components). If not present, either add Tailwind or convert styles to your chosen CSS solution.
- Add tests (unit / integration) as needed; currently no test commands are documented here.
- Add TypeScript path types if using `@` alias in tsconfig (`tsconfig.json` should include matching `paths`).

---

## Deployment

You can deploy the production build (contents of `dist`) to any static hosting or CDN:
- Vercel (recommended for frontend)
- Netlify
- GitHub Pages (via build pipeline)
- Static CDN + S3 + CloudFront

Typical pipeline:
1. CI runs `npm ci` and `npm run build`
2. Upload `dist` to host / serve via CDN

If using server-side rendering or dynamic APIs, extend this README with server instructions.

---

## Contributing

- Fork the repo and create feature branches.
- Keep changes scoped per PR (content, UI, or infra).
- Add or update documentation in `src/lib/description.ts` and create example pages if adding new product content.
- Run linters and type checks before submitting a PR.

Suggested quick PR checklist:
- [ ] Linted / formatted code
- [ ] TypeScript build passes
- [ ] No console errors in dev
- [ ] Content added to `description.ts` for new solutions

---

## Roadmap & next steps (suggested)

- Add CI pipeline: build, lint, typecheck, and preview (GitHub Actions)
- Add a LICENSE (MIT or preferred license)
- Add CONTRIBUTING.md and CODE_OF_CONDUCT.md
- Add tests and a storybook (for components) if you want to ship reusable UI
- Add real environment variables and secure storage for any secrets
- Internationalization if you plan multi-language support

---

## License

No LICENSE file detected in this README — add a `LICENSE` file with your desired license (e.g., MIT) to make project licensing explicit.

---

## Contact

For project ownership and contact, update this with your preferred email or company contact page.

---

Acknowledgements
- Built with Vite, React, Framer Motion, lucide-react and TypeScript.
- Content driven by `src/lib/description.ts` for easy product/service updates.
