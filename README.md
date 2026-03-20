# Sumita Makeover — Website

Modern portfolio site for a premium makeup artist.

## Technology Stack
- React 19.1 (Vite + TS)
- Vite 7
- Tailwind CSS + Tailwind plugin (v4)
- wouter for routing
- framer-motion for page transitions
- lucide-react icons
- state + forms handled in React

## Key Features
- Fully responsive hero + animated callouts
- Service pricing cards with premium glossy dark theme
- Smooth horizontally-scrollable Featured Work gallery
- Contact page with a glassmorphism form and clipboard copy action
- Services page with dark comparison table and cards
- Sticky header with page-specific scrolled gradient backgrounds
- Global `ErrorBoundary` for runtime errors
- Production-ready `npm run build` pass

## Production Readiness Checklist
- [x] `npm run build` success
- [x] No unbalanced JSX tags
- [x] No breakpoints causing white background flashes
- [x] Safe null/undefined handling in hooks and components
- [x] Error boundary guards app-level render errors
- [x] Responsive mobile menu and footer present

## Error Handling Summary
- `src/App.tsx`: app wrapped in `ErrorBoundary`
- `src/components/ErrorBoundary.tsx`: renders fallback UI / reload
- `src/pages/Home.tsx`: `galleryRef` has null-check and `scrollBy` only after ref is available
- UI components that rely on context use null defaults (`React.createContext<...|null>(null)`) with fallbacks
- `Contact.tsx` and `Services.tsx` guard optional fields like `href` and `note`

## Setup & Run
```bash
npm install
npm run dev
```

Dev server: `http://localhost:5176/` (or next free port)

## Build
```bash
npm run build
```

## Notes
- This branch now includes all UI requests in this session and is styled for strong visual hierarchy and modern brand presence.

