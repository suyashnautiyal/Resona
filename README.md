# Resona — AI Voice Agents Landing Page

A responsive SaaS landing page for **Resona**, an AI voice-agent product that answers real customer calls in under a second, switches languages mid-conversation, and hands off to a human when it matters.

Built as a front-end development assignment demonstrating layout, responsive design, code structure, and interactive UI.

## Live Demo

🔗 **Deployed at:** https://resona-chi.vercel.app

## Tech Stack

| Layer | Choice |
|---|---|
| Framework | React 19 (JavaScript) |
| Build tool | Vite 8 |
| Styling | Tailwind CSS v4 (via @tailwindcss/vite) |
| Icons | Inline SVG registry (no icon library) |
| State | React hooks only — no state library |
| Backend | None — the demo form simulates submission |

## Setup

### Prerequisites
Node.js 20+
npm 10+

### Run locally

    git clone https://github.com/suyash/resona.git
    cd resona
    npm install
    npm run dev

Open http://localhost:5173 in your browser.

### Production build

    npm run build
    npm run preview

The optimized build lands in the dist/ folder.

## Project Structure

    resona/
    ├── public/
    │   └── favicon.svg
    ├── src/
    │   ├── components/
    │   │   ├── Navbar.jsx          Sticky header with scroll-spy + mobile menu
    │   │   ├── Hero.jsx            Hero section with headline + CTAs
    │   │   ├── CallCard.jsx        Live-call illustration (pure CSS)
    │   │   ├── Features.jsx        6 feature cards in a responsive grid
    │   │   ├── HowItWorks.jsx      3 numbered steps
    │   │   ├── Pricing.jsx         3 plans + monthly/yearly toggle
    │   │   ├── DemoForm.jsx        Validated demo-request form
    │   │   ├── Footer.jsx          3-column footer with contact details
    │   │   ├── Container.jsx       Max-width layout primitive
    │   │   ├── SectionHeading.jsx  Reusable eyebrow / title / description
    │   │   ├── Icon.jsx            SVG icon registry
    │   │   └── Field.jsx           Labelled input + error message
    │   ├── data/
    │   │   └── content.js          All copy, pricing, features, and links
    │   ├── hooks/
    │   │   └── useScrollSpy.js     IntersectionObserver-based active-section spy
    │   ├── lib/
    │   │   └── validateDemoForm.js Pure form-validation function
    │   ├── App.jsx                 Section composition
    │   ├── main.jsx                React entry point
    │   └── index.css               Tailwind import + smooth scroll
    ├── index.html
    ├── vite.config.js
    └── package.json

## Features Implemented

### Layout & design
- Responsive across mobile, tablet, and desktop
- Consistent spacing via a shared Container primitive
- Unified section headers via a shared SectionHeading component
- Indigo-on-slate palette — accent colour reserved for actions and eyebrows

### Navigation
- Sticky navbar with active-section highlighting (scroll-spy)
- Smooth scrolling on anchor clicks
- Mobile hamburger menu that auto-closes on desktop resize

### Interactions
- Monthly / yearly pricing toggle (yearly price derives 10× monthly)
- Demo form with four states: idle, invalid, pending, success
- Per-field validation with inline error clearing as the user types
- Button disabled state during simulated submission

### Accessibility
- Skip-to-content link revealed on keyboard focus
- Semantic HTML tags
- Form controls wired with aria-invalid and aria-describedby
- Pricing toggle uses role="switch" with aria-checked
- Mobile menu button uses aria-expanded and aria-controls

## Design Notes

- **Palette:** Indigo for primary actions, slate for text and surfaces. Indigo only appears on CTAs, active nav links, and section eyebrows.
- **Layout system:** Every section is anchored by Container (max-w-6xl) and SectionHeading, keeping typography and spacing consistent.
- **Content-as-data:** All copy and pricing lives in src/data/content.js, keeping components focused on rendering logic.
- **Interactions:** Scroll-spy uses IntersectionObserver. Form validation lives in a pure function. The yearly price is derived mathematically.

## Screenshots

### Desktop
![Desktop layout](screenshots/desktop.png)

### Mobile
![Mobile layout](screenshots/mobile.png)

## Scripts

| Command | Description |
|---|---|
| npm run dev | Start dev server with hot reload |
| npm run build | Build production bundle to dist/ |
| npm run preview | Preview production build locally |
| npm run lint | Run ESLint |

## Deployment

This is a standard Vite app.

### Vercel (recommended)
1. Push the repo to GitHub
2. Import the repo at vercel.com/new
3. Framework preset: Vite 
4. Build command: npm run build
5. Output directory: dist
6. Deploy

## Notes

- No backend, database, authentication, or payment integration.
- No API keys or secrets are used anywhere in the project.
- All copy and pricing values are placeholder content intended for demonstration only.

## Author

**Suyash** — front-end development assignment, Sankar Group.
Built with React 19, Vite 8, and Tailwind CSS v4.