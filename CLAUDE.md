# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal portfolio website for Xingyu Bian, hosted at https://xingyubian.com. Built with React 19, TypeScript, Vite, and Tailwind CSS v4.

## Development Commands

```bash
npm run dev      # Start Vite dev server
npm run build    # TypeScript check + production build
npm run lint     # ESLint with zero warnings tolerance
npm run preview  # Preview production build
```

## Architecture

### Routing

Uses **HashRouter** (not BrowserRouter) for GitHub Pages compatibility. Routes:
- `/` - Home page with typing animation and skills showcase
- `/projects` - Project portfolio grid
- `/resume` - Work experience timeline with dark/light mode toggle

### Directory Structure

- `src/components/` - Reusable UI components (Nav, Profile)
- `src/pages/` - Route-level page components (Home, Projects, Resume)
- `src/utils/` - Utility functions (time calculations)
- `public/images/` - Static images (referenced via absolute paths)

### Key Patterns

- Path alias: `@/*` maps to `src/*`
- Tailwind v4 with custom utilities in `index.css` (text-gradient, text-shadow variants)
- Icons from Lucide React and React Icons
- Strict TypeScript and ESLint (max-warnings: 0)

## Deployment

GitHub Actions automatically deploys to GitHub Pages on push to main. The workflow runs `npm ci` → `npm run build` → deploys `/dist`.