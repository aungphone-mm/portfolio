# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start development server
npm run build    # Production build
npm run start    # Start production server
npm run lint     # Run ESLint
```

No test suite is configured.

## Architecture

This is a **Next.js 16 App Router** single-page portfolio. The entire site renders from `src/app/page.js`, which assembles section components in order: `Navbar → Hero → About → Skills → Projects → EmailAssistant → Contact → Footer`.

**Path alias**: `@/` maps to `src/`.

### Styling

CSS Modules co-located with each component (e.g., `Hero.jsx` + `Hero.module.css`). Global styles and CSS variables (including theme tokens) live in `src/app/globals.css`. Theme switching is done via a `data-theme` attribute on `<html>`, which CSS variables respond to.

### Contexts

Two React contexts wrap the app in `src/app/layout.js`:

- **`ThemeContext`** (`src/context/ThemeContext.js`) — `{ theme, toggleTheme }`. Default is `'dark'`. Persists to `localStorage` under key `'theme'`.
- **`LanguageContext`** (`src/context/LanguageContext.js`) — `{ language, toggleLanguage, t, mounted }`. Supports `'en'` (English) and `'my'` (Burmese/Myanmar). Persists to `localStorage` under key `'portfolio_lang'`. The `mounted` flag guards against SSR hydration mismatches.

### Translations

All UI strings live in `src/lib/translations.js` as nested objects with `{ en, my }` leaf nodes. Arrays (like `hero.roles`) use `{ en, my }` objects at each index.

Access via the `t()` helper from `useLanguage()`:
- `t('section', 'key')` for scalar strings
- `t('section', 'key', index)` for array items

To add a new translated string, add it to `translations` and call `t()` in the component — never hardcode visible text.

### Static Data

`src/data/portfolioData.js` holds projects (with `id`, `tech`, `category`, `color`, `demo`, `source`), contact info, and social links. Project descriptions and other translatable copy for projects are in `translations.projects.descriptions` keyed by project `id`.

### Environment Variables

Create a `.env.local` file at the project root for local development:

```
GROQ_API_KEY=your_groq_api_key_here
```

`GROQ_API_KEY` is required for the AI Email Assistant section. Without it, the API route returns a 503 and the demo shows an error. Get a free key at console.groq.com.

### Contact API

`src/app/api/contact/route.js` handles `POST /api/contact`. Currently simulated (logs to console, adds artificial delay). To wire up real email sending, integrate Resend or SendGrid here.

### Dependencies

- **framer-motion** — animations throughout components
- **lucide-react** — icons
- No TypeScript; plain JavaScript with `jsconfig.json` for path aliases
