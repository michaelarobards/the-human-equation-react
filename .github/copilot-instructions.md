# Copilot Instructions for The Human Equation

Quick orientation
- Project type: Vite + React single-page app (ESM, JSX). Entry: `src/main.jsx`.
- Frontend-only app that calls serverless functions in `functions/` (Cloudflare Pages Functions style).

Key commands
- Dev server: `npm run dev` ([../package.json](../package.json#L1-L40)).
- Build: `npm run build`.
- Preview production build: `npm run preview`.
- Lint: `npm run lint`.

Architecture & important locations
- UI components: `src/components/` — small, focused function components (example: [../src/components/RegisterModal.jsx](../src/components/RegisterModal.jsx#L1-L64)).
- Pages & routes: `src/pages/` — each page is a route component used by the router.
- Layouts: `src/layouts/` contains top-level layout components (e.g., `RootLayout.jsx`).
- Hooks: `src/hooks/` contains custom hooks (e.g., `useModal.js`).
- Static assets: `public/` and `src/assets/` for images and static files.
- Serverless functions: `functions/` — backend-side code invoked by the frontend fetches (example: `functions/join-group.js`).

Integration patterns you must follow
- Frontend -> server: frontend code uses fetch to call the published Pages Functions domain (see fetch in [../src/components/RegisterModal.jsx](../src/components/RegisterModal.jsx#L1-L64)). Keep request/response shapes consistent with `functions/join-group.js`.
- Functions share helpers in `functions/utils/` — reuse those utilities rather than duplicating logic.

Project-specific conventions
- File extensions: `.jsx` for React components; prefer named exports only when present in existing files.
- Styling: global CSS files in `src/` (e.g., `App.css`, `index.css`). Components import class names directly.
- Component props: small, explicit prop lists (avoid prop spreading across many components).
- Keep changes minimal and localized: prefer editing/adding components under `src/components` or pages under `src/pages` unless the change is cross-cutting.

When modifying serverless functions
- Edit code in `functions/` and ensure the frontend `fetch` URL and payload shape match the function handler.
- Tests are not present in the repo; after edits, run a local dev build and test the UI flow manually with `npm run dev` and browser.

Notes for code suggestions and PRs
- Provide concrete file edits and use the existing project style (functional components, hooks, clear prop names).
- When adding environment-specific values (URLs, keys), prefer documenting where to set them rather than hardcoding.
- If changing public API shapes (request bodies or response fields for the functions), update both `functions/` and the calling components together in the same PR.

Examples to inspect before changing related code
- [../src/components/RegisterModal.jsx](../src/components/RegisterModal.jsx#L1-L64) — shows fetch to the Pages Functions API and modal form pattern.
- `functions/join-group.js` and `functions/utils/` — backend handler and shared helpers (search `functions/` for usage patterns).

Ask the user if any runtime secrets, CI/CD details, or deployment steps (Cloudflare Pages settings) are required before making changes that affect builds or publishing.

Please review—tell me if you'd like more detail on any area (deploy, function contracts, or component conventions).
