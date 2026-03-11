# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

```bash
npm run dev      # Start development server (localhost:3000)
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint on all files
```

## High-Level Architecture

### Framework & Styling
- **Next.js 16.1.6** with App Router (not Pages Router)
- **React 19** with Server & Client Components
- **Tailwind CSS v4** with custom @theme configuration
- Path alias: `@/*` resolves to repository root

### Theme System (Dark/Light Mode)
The theme is managed using **React Context** with localStorage persistence:

1. **Providers/ThemeProvider.tsx** - Client component that:
   - Creates ThemeContext with theme state and setTheme function
   - Loads theme from localStorage or system preference on mount
   - Updates `<html>` classList and localStorage on theme change

2. **FOUC Prevention** - app/layout.tsx includes an inline script in `<head>` that:
   - Runs before React hydration
   - Checks localStorage for saved theme
   - Applies dark class to html element immediately
   - This prevents light flash when page loads in dark mode

3. **useTheme Hook** (hooks/use-theme.ts) - Custom hook for components to:
   - Access theme and setTheme from context
   - Handle SSR safely (returns default value when context unavailable)

### Component Organization

```
components/
├── layout/
│   ├── Header.tsx        - Navigation, theme toggle, mobile menu
│   ├── Footer.tsx        - Global footer
│   ├── ThemeToggle.tsx   - Theme toggle button (Client)
│   └── MobileMenu.tsx    - Sheet-based mobile navigation (Client)
├── sections/
│   ├── HeroSection.tsx   - Landing hero section
│   └── FeaturesSection.tsx - Features showcase (6 cards)
├── ui/                   - shadcn/radix-nova components (custom)
│   ├── button.tsx
│   ├── card.tsx          - Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter
│   ├── badge.tsx         - Variants: default, secondary, destructive, outline
│   └── sheet.tsx         - Radix Dialog-based slide panel
├── Container.tsx         - max-w-7xl wrapper for consistent layout
└── Section.tsx           - Vertical padding wrapper for sections

providers/
└── ThemeProvider.tsx     - React Context for theme management

hooks/
└── use-theme.ts         - Custom hook for theme access

lib/
├── utils.ts             - General utilities (cn() helper, etc.)
└── nav-links.ts         - Navigation link configuration
```

### Key Files

- **app/layout.tsx** - Root layout with metadata, font setup, and FOUC prevention script
- **app/page.tsx** - Home page (Server Component)
- **app/globals.css** - Tailwind directives and CSS variables for theming
- **tsconfig.json** - TypeScript configuration with @ alias
- **eslint.config.mjs** - ESLint with Next.js and TypeScript rules

## Code Style & Patterns

- **Indentation**: 2 spaces
- **Naming**: camelCase for variables/functions, PascalCase for components
- **Component size**: Keep components under 30 lines when possible
- **Client vs Server**: Mark Client Components with `"use client"` at top
- **UI Library**: Use custom shadcn components from components/ui/ (do not install from npm)

### Common Patterns

1. **Container & Section wrappers** for consistent layout:
   ```tsx
   <Section>
     <Container>
       {/* Content */}
     </Container>
   </Section>
   ```

2. **Theme access in Client Components**:
   ```tsx
   "use client"
   import { useTheme } from "@/hooks/use-theme"

   export function MyComponent() {
     const { theme, setTheme } = useTheme()
     // ...
   }
   ```

3. **Navigation configuration** - Edit `lib/nav-links.ts` to update header links

## Build Status

✅ TypeScript strict mode (no errors)
✅ SSR compatible
✅ Dark mode with localStorage persistence
✅ Responsive design with mobile menu
