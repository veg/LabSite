# LabSite Architecture

This document describes the architecture of the ACME Lab website.

## Tech Stack
- **Framework:** [Next.js 16.2.6](https://nextjs.org/) (App Router)
- **Library:** [React 19.2.4](https://react.dev/)
- **Styling:** [Tailwind CSS 4](https://tailwindcss.com/)
- **Fonts:** Next.js Font Optimization (`next/font/google`)
    - `Press_Start_2P`: Retro gaming aesthetic
    - `VT323`: Terminal/VAX aesthetic
    - `Share_Tech_Mono`: Modern technical aesthetic
    - `Pixelify_Sans`: Pixel-art aesthetic
- **Theming:** Custom React Context-based system with `localStorage` persistence.
- **Data:** Static JSON-driven content.

## Directory Structure
- `src/app/`: Next.js App Router pages and layouts.
    - `layout.js`: Root layout providing `ThemeProvider` and global font variables.
    - `page.js`: Homepage with extensive era-specific conditional rendering.
    - `members/page.js`: Team page.
    - `projects/page.js`: Software and projects page.
    - `papers/page.js`: Publication list with categorization and real-time statistics calculation.
    - `former/page.js`: Alumni list.
- `src/components/`: Reusable, theme-aware UI components.
    - `ThemeContext.js`: Manages the current "era" theme and persistence.
    - `PageContainer.js`: Orchestrates layout, backgrounds, and headers based on the theme. Acts as the primary wrapper for all pages.
    - `Navbar.js`: Theme-aware navigation with an era switcher.
    - `Card.js`: Primary content container with structural branching for era aesthetics.
    - `EraSelectionSplash.js`: Interactive entry point for theme selection (Quiz/Manual).
- `src/data/`: JSON files containing site content.
- `public/`: Static assets (images, icons).
- `backup/`: Legacy version of the site (CRA-based) for historical reference.

## Core Systems

### Theming System
The site features several "era" themes that radically change the visual appearance, implemented through:
1.  **CSS Variables:** Defined in `globals.css` and scoped by `data-theme` or `theme-*` classes on `document.documentElement` or `document.body`.
2.  **Conditional Tailwind Classes:** Extensive use of `theme === '...' ? 'class-a' : 'class-b'` patterns.
3.  **Structural Branching:** Components like `Card`, `Navbar`, and `PageContainer` return entirely different JSX trees based on the theme.

**Supported Eras:**
- `vax`: 1978 VAX/VMS monochrome green terminal.
- `80s`: 1985 CRT Terminal with scanlines and flicker.
- `profdr`: 1994 Yahoo-style web directory.
- `geocities`: 1996 Classic "eye-bleed" aesthetic.
- `90s`: 1998 Tactical/Stealth UI (Metal Gear Solid style).
- `y2k`: 2003 "Aqua" style Web 2.0.
- `2000s`: 2007 Sci-fi HUD (Mass Effect style).
- `2010s`: 2012 High-contrast gaming UI (Borderlands style).
- `enterprise`: 2018 Professional corporate style.
- `2020s`: 2024 AI Assistant interface with glassy blurs.
- `knuth`: Minimalist, TeX-inspired academic style.

### Data Processing
The `papers/page.js` file performs several client-side computations on the `papers.json` dataset (approx. 450KB):
- **Category Counting:** Aggregates publications by research area.
- **Contribution Mapping:** Maps publications to lab members based on last name matching in the author string.
- **Collaboration Network:** Extracts unique co-authors to calculate the "Alliance Network" size.

## Development Workflows
- **Running locally:** `npm run dev`
- **Building:** `npm run build`
- **Linting:** `npm run lint`
- **Adding Content:** Update the relevant JSON file in `src/data/`.
- **Modifying Themes:**
    1. Update `globals.css` for shared variables/styles.
    2. Update `ThemeContext.js` if adding a new era.
    3. Implement era-specific logic in `PageContainer.js`, `Navbar.js`, `Card.js`, and `app/page.js`.
    4. Don't forget to update `EraSelectionSplash.js` if the theme should be discoverable.
