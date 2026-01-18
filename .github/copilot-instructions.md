# Agnitian Web - AI Coding Agent Instructions

## Project Overview
**Agnitian Web** is a React + TypeScript marketing website built with Vite, Tailwind CSS, and modern UI components from Radix UI. The application uses a file-based routing approach with React Router and emphasizes responsive design with Framer Motion animations.

**Tech Stack:**
- React 18.2 + TypeScript
- Vite 5 (build tool, dev server on port 3000)
- React Router 6 (SPA routing)
- Tailwind CSS 3.3 + custom animations
- Radix UI primitives
- Framer Motion (animations)
- Lucide React (icons)
- EmailJS (contact form integration)

## Architecture & Key Patterns

### Component Structure
```
src/
├── Components/              # Reusable UI components
│   ├── ui/                 # Radix UI + custom styled components
│   ├── home/               # Home page sections (Hero, CTA, Blog, etc.)
│   ├── navigation/         # MegaMenu, MobileDrawer (desktop/mobile nav)
│   └── contact/            # ConversationPanel (chat interface)
├── pages/                  # Route pages (Home, About, Products, Solutions, Blog)
├── lib/                    # Utilities (cn(), createPageUrl(), AgnitianText SVG logo)
├── Layout.tsx              # Root layout wrapper with global nav & contact panel
└── main.tsx / App.tsx      # Entry point & router setup
```

### Data Flow
1. **App.tsx** defines routes → **Layout.tsx** wraps all pages with navigation & contact panel
2. **Pages** (Home, Products, etc.) compose **home/** & **ui/** components
3. **Layout.tsx** manages:
   - Global scroll state (header blur effect)
   - Mobile menu state (`isMobileMenuOpen`)
   - Contact panel state (`isContactOpen`)
   - Route-based active menu tracking

### Critical Utilities
- `createPageUrl()` - Maps nav labels to routes (e.g., 'Products' → '/products')
- `cn()` - Tailwind class merging utility (uses `clsx`)
- `AgnitianText` - Custom SVG logo component with optional color prop

## Development Commands
```bash
npm run dev       # Start Vite dev server (port 3000, auto-opens browser)
npm run build     # Production build → dist/
npm run start     # Build + preview production build
npm run lint      # Placeholder (not configured)
```

## Important Design Conventions

### Styling
- **Tailwind-first**: Use Tailwind utilities in `className` attributes
- **Animation**: Framer Motion for complex animations (see Layout scroll effects)
- **Responsive**: Mobile-first approach; MobileDrawer for <lg screens, MegaMenu for desktop
- **Icons**: Lucide React icons (`lucide-react`); import from `lucide-react` directly

### Routing Patterns
- Routes defined in **App.tsx**; use `useLocation()` for active state
- Navigation links use `<Link>` with `createPageUrl()` helper
- Example: `<Link to={createPageUrl('Products')}>...</Link>`

### Component Naming
- UI components: lowercase with hyphens (`button.tsx`, `card.tsx`)
- Page/feature components: PascalCase (`HeroSection.tsx`, `MegaMenu.tsx`)
- Export as default unless shared utility

### State Management
- Local component state (`useState`) for UI toggles (mobile menu, contact panel)
- No Redux/Context API in use; global state via lifted state in Layout.tsx
- Effects for scroll listeners, route-based cleanup (see Layout.tsx useEffect patterns)

## Key Integration Points

### Contact Form
- **ConversationPanel** component in Layout.tsx
- Uses EmailJS for email delivery
- State: `isContactOpen` (boolean toggle)

### Navigation System
- **MegaMenu**: Desktop dropdown navigation
- **MobileDrawer**: Mobile slide-out menu
- Both fed from `navItems` array in Layout.tsx
- Active state tracked via `useLocation().pathname`

### Header Behavior
- Fixed header with scroll-triggered blur effect
- Transparent on home page (unless scrolled >20px)
- White background on other pages
- Transition duration: 500ms

## Common Tasks

### Adding a New Page
1. Create `src/pages/NewPage.tsx`
2. Add route in `App.tsx`: `<Route path="/newpage" element={<NewPage />} />`
3. Add nav item to `navItems` array in Layout.tsx
4. Update `createPageUrl()` in `lib/utils.tsx` if needed

### Creating UI Components
1. Use Radix UI primitives from `src/Components/ui/`
2. Wrap with Tailwind classes and Framer Motion if animated
3. Export as default with TypeScript interfaces for props

### Handling Responsive Design
- Use Tailwind breakpoints: `sm:`, `md:`, `lg:`, `xl:`
- MobileDrawer handles <lg navigation; MegaMenu for lg+
- Test mobile layout in dev tools

## Configuration References
- **Vite**: `vite.config.ts` (port 3000, path alias `@/` → `src/`)
- **TypeScript**: `tsconfig.json` (strict mode disabled, jsx: react-jsx)
- **Tailwind**: `tailwind.config.js` (custom theme, animations)
- **PostCSS**: `postcss.config.js` (Tailwind processing)
