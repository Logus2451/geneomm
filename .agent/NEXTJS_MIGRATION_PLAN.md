# Next.js Migration Plan: Vite React to Next.js SSR

**Project**: Geneomm Medical Center Website  
**Current Stack**: React 19 + Vite + React Router + TailwindCSS  
**Target Stack**: Next.js 15 (App Router) + React Server Components + TailwindCSS  
**Migration Type**: Client-Side Rendering (CSR) → Server-Side Rendering (SSR)

---

## Executive Summary

This document provides a comprehensive migration strategy to transform the current Vite-based React application into a Next.js application with Server-Side Rendering capabilities. The migration will improve SEO, initial page load performance, and enable advanced features like streaming and partial pre-rendering.

### Key Benefits of Migration
- ✅ **Improved SEO**: Server-rendered HTML for better search engine indexing
- ✅ **Faster Initial Load**: Pre-rendered content reduces Time to First Byte (TTFB)
- ✅ **Better Performance**: Automatic code splitting and optimized bundling
- ✅ **Enhanced User Experience**: Streaming SSR and progressive hydration
- ✅ **Built-in Routing**: File-based routing eliminates react-router-dom
- ✅ **API Routes**: Built-in serverless functions for backend logic

---

## Current Application Analysis

### 1. **Application Structure**
```
src/
├── App.tsx                 # Main router component
├── main.tsx               # Entry point (CSR)
├── components/
│   ├── home/             # Home page sections (10 components)
│   ├── layout/           # Header, Footer, Modal (3 components)
│   └── ui/               # Reusable UI components (3 components)
├── pages/                # Page components (9 pages)
├── context/              # React Context (ModalContext)
└── data/                 # Static data (mockData.ts)
```

### 2. **Routing Analysis**
**Current Routes (React Router v7):**
```javascript
/ → HomePage
/about → AboutPage
/consultants → ConsultantsPage
/services → ServicesPage
/services/:slug → ServiceDetailPage (Dynamic)
/hospitals → HospitalsPage
/contact → ContactPage
* → HomePage (Fallback)
```

**Features Used:**
- ✅ Lazy loading with `React.lazy()`
- ✅ Dynamic routes with URL parameters (`:slug`)
- ✅ Custom `ScrollToTop` component using `useLocation`
- ✅ Suspense boundaries with loading fallback

### 3. **Data Fetching Patterns**
**Current Approach:**
- ✅ Static data imported from `mockData.ts`
- ✅ No external API calls (axios installed but unused)
- ✅ Client-side data filtering (e.g., `services.find(s => s.slug === slug)`)

**Components with useEffect:**
1. `App.tsx` - ScrollToTop functionality (`window.scrollTo`)
2. `HeroSection.tsx` - Auto-rotating messages (timer)
3. `ImpactStats.tsx` - Animated counters with Intersection Observer

### 4. **Browser API Usage**
**Window/Document Dependencies:**
- `window.scrollTo(0, 0)` in ScrollToTop component
- `document.getElementById('root')` in main.tsx
- Framer Motion animations (uses window for viewport detection)
- Intersection Observer API in ImpactStats

### 5. **State Management**
- ✅ React Context API (`ModalContext`) for global modal state
- ✅ Local component state with `useState`
- ✅ No external state management (Redux, Zustand, etc.)

### 6. **Styling & UI Libraries**
- ✅ TailwindCSS for styling
- ✅ Framer Motion for animations
- ✅ Lucide React for icons
- ✅ Embla Carousel for sliders

### 7. **Third-Party Dependencies**
```json
{
  "axios": "^1.9.0",                    // Not used - can be removed
  "embla-carousel-autoplay": "^8.6.0",
  "embla-carousel-react": "^8.6.0",
  "framer-motion": "^12.23.24",
  "lucide-react": "^0.511.0",
  "react": "^19.1.0",
  "react-dom": "^19.1.0",
  "react-router-dom": "^7.9.5"          // Will be replaced
}
```

---

## Migration Strategy

### Phase 1: Pre-Migration Preparation

#### 1.1 Backup Current Codebase
```bash
# Create a backup branch
git checkout -b backup/vite-version
git push origin backup/vite-version

# Create migration branch
git checkout -b feature/nextjs-migration
```

#### 1.2 Audit Dependencies
**Keep:**
- framer-motion (Next.js compatible)
- lucide-react (SSR-safe)
- embla-carousel-react (works with SSR)
- tailwindcss (Next.js native support)

**Remove:**
- react-router-dom (replaced by Next.js routing)
- vite & @vitejs/plugin-react (replaced by Next.js)
- axios (unused)

**Add:**
- next (^15.1.0)
- @types/node (for TypeScript)

#### 1.3 Identify Migration Challenges

| Challenge | Current Implementation | Next.js Solution |
|-----------|----------------------|------------------|
| **Routing** | React Router with BrowserRouter | File-based App Router |
| **Dynamic Routes** | `/services/:slug` | `/services/[slug]/page.tsx` |
| **Data Fetching** | Client-side with useEffect | Server Components (async/await) |
| **Browser APIs** | Direct window/document access | Client Components with 'use client' |
| **Context Providers** | Wrapped in App.tsx | Separate layout.tsx with 'use client' |
| **Lazy Loading** | React.lazy() | Next.js automatic code splitting |
| **Scroll Restoration** | Custom ScrollToTop component | Built-in Next.js behavior |

---

## Phase 2: Next.js Project Setup

### 2.1 Initialize Next.js Project

**Option A: Fresh Installation (Recommended)**
```bash
# Create new Next.js app in a temporary directory
npx create-next-app@latest nextjs-temp --typescript --tailwind --app --no-src-dir

# Copy configuration files to current project
# Then manually migrate components
```

**Option B: Manual Setup**
```bash
# Install Next.js dependencies
npm install next@latest react@latest react-dom@latest

# Install dev dependencies
npm install -D @types/node @types/react @types/react-dom

# Update package.json scripts
```

### 2.2 Update package.json Scripts
```json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  }
}
```

### 2.3 Create Next.js Configuration Files

**next.config.ts:**
```typescript
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  // Enable experimental features if needed
  experimental: {
    optimizePackageImports: ['lucide-react', 'framer-motion'],
  },
};

export default nextConfig;
```

**tsconfig.json (Update):**
```json
{
  "compilerOptions": {
    "target": "ES2017",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "plugins": [
      {
        "name": "next"
      }
    ],
    "paths": {
      "@/*": ["./*"]
    }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
  "exclude": ["node_modules"]
}
```

---

## Phase 3: Routing Migration

### 3.1 New Directory Structure

**Target Structure:**
```
app/
├── layout.tsx                    # Root layout (replaces App.tsx wrapper)
├── page.tsx                      # Home page (replaces HomePage)
├── about/
│   └── page.tsx                  # About page
├── consultants/
│   └── page.tsx                  # Consultants page
├── services/
│   ├── page.tsx                  # Services listing
│   └── [slug]/
│       └── page.tsx              # Dynamic service detail
├── hospitals/
│   └── page.tsx                  # Hospitals page
├── contact/
│   └── page.tsx                  # Contact page
├── api/                          # API routes (if needed)
│   └── appointment/
│       └── route.ts              # POST /api/appointment
components/
├── home/                         # Home sections (unchanged)
├── layout/                       # Layout components
└── ui/                           # UI components
lib/
├── data.ts                       # Renamed from mockData.ts
└── utils.ts                      # Utility functions
public/
└── assets/                       # Static assets
```

### 3.2 Route Mapping

| Vite Route | Next.js File Path | Type |
|------------|------------------|------|
| `/` | `app/page.tsx` | Static |
| `/about` | `app/about/page.tsx` | Static |
| `/consultants` | `app/consultants/page.tsx` | Static |
| `/services` | `app/services/page.tsx` | Static |
| `/services/:slug` | `app/services/[slug]/page.tsx` | Dynamic |
| `/hospitals` | `app/hospitals/page.tsx` | Static |
| `/contact` | `app/contact/page.tsx` | Static |

### 3.3 Root Layout Implementation

**app/layout.tsx:**
```typescript
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { ModalProvider } from '@/components/providers/ModalProvider';
import AppointmentModal from '@/components/layout/AppointmentModal';
import SocialSidebar from '@/components/ui/SocialSidebar';
import FloatingSocial from '@/components/ui/FloatingSocial';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    default: 'Geneomm Medical Center - Pediatric Genetics & Rare Disease Care',
    template: '%s | Geneomm Medical Center'
  },
  description: "India's leading destination for Pediatric Genetics, providing hope through advanced diagnosis and compassionate care.",
  keywords: ['pediatric genetics', 'genetic counseling', 'rare diseases', 'Coimbatore'],
  authors: [{ name: 'Geneomm Medical Center' }],
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://geneomm.com',
    siteName: 'Geneomm Medical Center',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ModalProvider>
          <div className="flex flex-col min-h-screen bg-neutral">
            <Header />
            <main className="flex-grow">{children}</main>
            <Footer />
            <AppointmentModal />
            <SocialSidebar />
            <FloatingSocial />
          </div>
        </ModalProvider>
      </body>
    </html>
  );
}
```

**Key Changes:**
- ✅ No `<Router>` wrapper needed
- ✅ Metadata API for SEO
- ✅ Font optimization with `next/font`
- ✅ ModalProvider moved to layout
- ✅ ScrollToTop removed (Next.js handles this)

### 3.4 Dynamic Route Implementation

**app/services/[slug]/page.tsx:**
```typescript
import { notFound } from 'next/navigation';
import { services } from '@/lib/data';
import ServiceDetailClient from '@/components/services/ServiceDetailClient';

// Generate static params for all services (SSG)
export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

// Generate metadata for each service
export async function generateMetadata({ params }: { params: { slug: string } }) {
  const service = services.find((s) => s.slug === params.slug);
  
  if (!service) {
    return {
      title: 'Service Not Found',
    };
  }

  return {
    title: service.title,
    description: service.description,
  };
}

// Server Component (default)
export default function ServiceDetailPage({ params }: { params: { slug: string } }) {
  const service = services.find((s) => s.slug === params.slug);

  if (!service) {
    notFound(); // Triggers 404 page
  }

  return <ServiceDetailClient service={service} />;
}
```

**Key Features:**
- ✅ `generateStaticParams()` - Pre-renders all service pages at build time
- ✅ `generateMetadata()` - Dynamic SEO metadata per service
- ✅ Server Component fetches data (no useEffect needed)
- ✅ `notFound()` - Proper 404 handling

---

## Phase 4: Data Fetching Adaptation

### 4.1 Server Components vs Client Components

**Decision Matrix:**

| Component | Current Pattern | Next.js Approach | Reason |
|-----------|----------------|------------------|---------|
| **HomePage** | Static imports | Server Component | No interactivity, pure content |
| **ServiceDetailPage** | useParams + find | Server Component | Data fetching on server |
| **HeroSection** | useState + useEffect | Client Component | Auto-rotating messages (timer) |
| **ImpactStats** | useEffect + IntersectionObserver | Client Component | Animated counters |
| **Header** | Static | Client Component | Navigation state, mobile menu |
| **AppointmentModal** | Context + useState | Client Component | Interactive modal |

### 4.2 Converting Static Data Fetching

**Before (CSR with useEffect):**
```typescript
// ServiceDetailPage.tsx (Vite)
const ServiceDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const service = services.find(s => s.slug === slug);
  
  if (!service) {
    return <div>Not Found</div>;
  }
  
  return <div>{service.title}</div>;
};
```

**After (SSR with Server Component):**
```typescript
// app/services/[slug]/page.tsx (Next.js)
export default function ServiceDetailPage({ params }: { params: { slug: string } }) {
  const service = services.find(s => s.slug === params.slug);
  
  if (!service) {
    notFound();
  }
  
  return <div>{service.title}</div>;
}
```

**Benefits:**
- ✅ No client-side JavaScript for data fetching
- ✅ SEO-friendly (search engines see full content)
- ✅ Faster initial render (no loading state)

### 4.3 Handling Future API Calls

**If you need to fetch from external APIs:**

**Server Component (Recommended):**
```typescript
// app/services/page.tsx
async function getServices() {
  const res = await fetch('https://api.example.com/services', {
    next: { revalidate: 3600 } // Cache for 1 hour
  });
  
  if (!res.ok) {
    throw new Error('Failed to fetch services');
  }
  
  return res.json();
}

export default async function ServicesPage() {
  const services = await getServices();
  
  return <div>{/* Render services */}</div>;
}
```

**Client Component (for interactive data):**
```typescript
'use client';

import { useState, useEffect } from 'react';

export default function DynamicServices() {
  const [services, setServices] = useState([]);
  
  useEffect(() => {
    fetch('/api/services')
      .then(res => res.json())
      .then(setServices);
  }, []);
  
  return <div>{/* Render services */}</div>;
}
```

---

## Phase 5: Browser API Handling

### 5.1 Identifying Browser-Specific Code

**Current Browser API Usage:**

1. **window.scrollTo** (App.tsx - ScrollToTop)
2. **document.getElementById** (main.tsx)
3. **IntersectionObserver** (ImpactStats.tsx)
4. **window timers** (HeroSection.tsx - setInterval)

### 5.2 Migration Strategies

#### Strategy 1: Use 'use client' Directive

**Before:**
```typescript
// App.tsx (Vite)
const ScrollToTop = () => {
  const { pathname } = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  
  return null;
};
```

**After:**
```typescript
// Not needed - Next.js handles scroll restoration automatically
// If custom behavior needed:

'use client';

import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

export function ScrollToTop() {
  const pathname = usePathname();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  
  return null;
}
```

#### Strategy 2: Conditional Rendering (SSR-Safe)

**For components that need window:**
```typescript
'use client';

import { useState, useEffect } from 'react';

export function BrowserOnlyComponent() {
  const [isMounted, setIsMounted] = useState(false);
  
  useEffect(() => {
    setIsMounted(true);
  }, []);
  
  if (!isMounted) {
    return null; // or loading skeleton
  }
  
  // Safe to use window/document here
  return <div>{window.innerWidth}</div>;
}
```

#### Strategy 3: Dynamic Imports (No SSR)

**For heavy client-only components:**
```typescript
// app/page.tsx
import dynamic from 'next/dynamic';

const ClientOnlyCarousel = dynamic(
  () => import('@/components/ClientOnlyCarousel'),
  { ssr: false }
);

export default function Page() {
  return <ClientOnlyCarousel />;
}
```

### 5.3 Component-Specific Migrations

**HeroSection.tsx (Timer-based rotation):**
```typescript
'use client'; // Required for useState, useEffect

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const rotatingMessages = [
  "Unlocking Genetic Mysteries, Empowering Families",
  "Expert Care for Rare Diseases",
  "Where Advanced Science Meets Compassionate Care"
];

export default function HeroSection() {
  const [index, setIndex] = useState(0);
  
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % rotatingMessages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);
  
  return (
    <div className="relative bg-deep-navy text-white">
      <AnimatePresence mode="wait">
        <motion.h1 key={index}>
          {rotatingMessages[index]}
        </motion.h1>
      </AnimatePresence>
    </div>
  );
}
```

**ImpactStats.tsx (IntersectionObserver):**
```typescript
'use client'; // Required for hooks and browser APIs

import { useRef, useEffect, useState } from 'react';
import { motion, useInView, animate } from 'framer-motion';

const AnimatedCounter = ({ to, suffix }: { to: number, suffix: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  useEffect(() => {
    if (isInView) {
      const controls = animate(0, to, {
        duration: 2,
        onUpdate(value) {
          setCount(Math.floor(value));
        }
      });
      return () => controls.stop();
    }
  }, [isInView, to]);
  
  return <span ref={ref}>{count.toLocaleString('en-US')}{suffix}</span>;
};

export default function ImpactStats() {
  // Component implementation
}
```

**No changes needed** - Framer Motion's `useInView` is SSR-safe when used in client components.

---

## Phase 6: Context & State Management

### 6.1 Context Provider Migration

**Current Implementation:**
```typescript
// context/ModalContext.tsx (Vite)
export const ModalProvider: React.FC<ModalProviderProps> = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  // ...
  return (
    <ModalContext.Provider value={value}>
      {children}
    </ModalContext.Provider>
  );
};
```

**Next.js Implementation:**
```typescript
// components/providers/ModalProvider.tsx
'use client'; // Required for Context with state

import { createContext, useState, useContext, ReactNode, useMemo, useCallback } from 'react';

interface ModalContextType {
  isModalOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export const useModal = () => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error('useModal must be used within a ModalProvider');
  }
  return context;
};

export function ModalProvider({ children }: { children: ReactNode }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const openModal = useCallback(() => setIsModalOpen(true), []);
  const closeModal = useCallback(() => setIsModalOpen(false), []);
  
  const value = useMemo(
    () => ({ isModalOpen, openModal, closeModal }),
    [isModalOpen, openModal, closeModal]
  );
  
  return (
    <ModalContext.Provider value={value}>
      {children}
    </ModalContext.Provider>
  );
}
```

**Usage in Layout:**
```typescript
// app/layout.tsx
import { ModalProvider } from '@/components/providers/ModalProvider';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ModalProvider>
          {children}
        </ModalProvider>
      </body>
    </html>
  );
}
```

**Key Points:**
- ✅ Add `'use client'` to provider file
- ✅ Move to `components/providers/` directory
- ✅ Import in root layout
- ✅ All consuming components automatically become client components

---

## Phase 7: Styling Migration

### 7.1 TailwindCSS Configuration

**Minimal changes needed:**

**tailwind.config.ts (Next.js):**
```typescript
import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#4F46E5',
        'accent': '#10B981',
        'deep-navy': '#1E293B',
        'neutral': '#F8FAFC',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
      },
    },
  },
  plugins: [],
};

export default config;
```

**app/globals.css:**
```css
@tailwind base;
@tailwind components;
@tailwind utilities;

/* Copy existing custom CSS from index.css */
@layer base {
  body {
    @apply text-neutral-900 antialiased;
  }
}
```

### 7.2 Font Optimization

**Replace Google Fonts CDN with next/font:**

**Before (index.html):**
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap" rel="stylesheet">
```

**After (app/layout.tsx):**
```typescript
import { Inter, Merriweather } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const merriweather = Merriweather({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-merriweather',
  display: 'swap',
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${merriweather.variable}`}>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
```

**Benefits:**
- ✅ Self-hosted fonts (no external requests)
- ✅ Automatic font subsetting
- ✅ Zero layout shift

---

## Phase 8: Image Optimization

### 8.1 Replace <img> with Next.js Image

**Before:**
```typescript
<img
  src="/assets/hero.png"
  alt="Child's hand holding an adult's finger"
  className="w-full h-full object-cover"
/>
```

**After:**
```typescript
import Image from 'next/image';

<Image
  src="/assets/hero.png"
  alt="Child's hand holding an adult's finger"
  fill
  className="object-cover"
  priority // For above-the-fold images
  quality={90}
/>
```

**For external images (Unsplash):**
```typescript
<Image
  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d"
  alt="Testimonial"
  width={400}
  height={400}
  className="rounded-full"
/>
```

**Update next.config.ts:**
```typescript
const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
};
```

---

## Phase 9: Step-by-Step Implementation

### Week 1: Foundation Setup

#### Day 1-2: Project Initialization
- [ ] Create backup branch
- [ ] Install Next.js dependencies
- [ ] Create `app/` directory structure
- [ ] Set up `next.config.ts`
- [ ] Update `tsconfig.json`
- [ ] Configure TailwindCSS for Next.js
- [ ] Create `app/globals.css`

#### Day 3-4: Root Layout & Providers
- [ ] Create `app/layout.tsx`
- [ ] Migrate `ModalProvider` to `components/providers/`
- [ ] Add `'use client'` directive to provider
- [ ] Set up font optimization with `next/font`
- [ ] Configure metadata API
- [ ] Test basic layout rendering

#### Day 5: Static Assets
- [ ] Move images to `public/` directory
- [ ] Update image paths
- [ ] Test asset loading

### Week 2: Page Migration

#### Day 6-7: Static Pages
- [ ] Create `app/page.tsx` (Home)
- [ ] Create `app/about/page.tsx`
- [ ] Create `app/consultants/page.tsx`
- [ ] Create `app/contact/page.tsx`
- [ ] Create `app/hospitals/page.tsx`
- [ ] Add metadata to each page

#### Day 8-9: Services Pages
- [ ] Create `app/services/page.tsx`
- [ ] Create `app/services/[slug]/page.tsx`
- [ ] Implement `generateStaticParams()`
- [ ] Implement `generateMetadata()`
- [ ] Add `notFound()` handling
- [ ] Test dynamic routing

#### Day 10: Component Migration
- [ ] Identify client vs server components
- [ ] Add `'use client'` to interactive components
- [ ] Migrate home section components
- [ ] Test component rendering

### Week 3: Advanced Features

#### Day 11-12: Layout Components
- [ ] Migrate `Header` component (add 'use client')
- [ ] Migrate `Footer` component
- [ ] Migrate `AppointmentModal` (add 'use client')
- [ ] Migrate `SocialSidebar` (add 'use client')
- [ ] Migrate `FloatingSocial` (add 'use client')

#### Day 13-14: Interactive Components
- [ ] Migrate `HeroSection` (add 'use client')
- [ ] Migrate `ImpactStats` (add 'use client')
- [ ] Migrate `Testimonials` carousel
- [ ] Test animations and interactions

#### Day 15: Image Optimization
- [ ] Replace all `<img>` with `<Image>`
- [ ] Configure remote image patterns
- [ ] Add `priority` to above-fold images
- [ ] Test image loading

### Week 4: Testing & Optimization

#### Day 16-17: Testing
- [ ] Test all routes
- [ ] Test dynamic routes with all slugs
- [ ] Test 404 pages
- [ ] Test modal functionality
- [ ] Test mobile responsiveness
- [ ] Test browser compatibility

#### Day 18-19: Performance Optimization
- [ ] Run Lighthouse audit
- [ ] Optimize bundle size
- [ ] Add loading states where needed
- [ ] Implement error boundaries
- [ ] Test Core Web Vitals

#### Day 20: Deployment Preparation
- [ ] Update environment variables
- [ ] Configure build settings
- [ ] Test production build locally
- [ ] Update deployment configuration (Netlify/Vercel)
- [ ] Create deployment checklist

---

## Phase 10: Testing Checklist

### Functional Testing
- [ ] All routes accessible
- [ ] Dynamic routes work for all services
- [ ] Navigation works correctly
- [ ] Modal opens and closes
- [ ] Forms submit correctly
- [ ] Links work (internal and external)
- [ ] 404 page displays for invalid routes

### Visual Testing
- [ ] Layout matches original design
- [ ] Responsive design works (mobile, tablet, desktop)
- [ ] Animations work smoothly
- [ ] Images load correctly
- [ ] Fonts render properly
- [ ] Colors match design system

### Performance Testing
- [ ] Lighthouse score > 90 (Performance)
- [ ] First Contentful Paint < 1.5s
- [ ] Largest Contentful Paint < 2.5s
- [ ] Time to Interactive < 3.5s
- [ ] Cumulative Layout Shift < 0.1

### SEO Testing
- [ ] Meta tags present on all pages
- [ ] Open Graph tags configured
- [ ] Structured data added (if applicable)
- [ ] Sitemap generated
- [ ] robots.txt configured

---

## Phase 11: Deployment Strategy

### Option 1: Vercel (Recommended)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Production deployment
vercel --prod
```

**Benefits:**
- ✅ Zero-config deployment
- ✅ Automatic HTTPS
- ✅ Edge network
- ✅ Built-in analytics

### Option 2: Netlify
```bash
# Install Netlify CLI
npm i -g netlify-cli

# Build
npm run build

# Deploy
netlify deploy --prod
```

**netlify.toml:**
```toml
[build]
  command = "npm run build"
  publish = ".next"

[[plugins]]
  package = "@netlify/plugin-nextjs"
```

### Option 3: Self-Hosted (Node.js)
```bash
# Build
npm run build

# Start production server
npm run start
```

---

## Phase 12: Rollback Plan

### If Migration Fails

**Immediate Rollback:**
```bash
# Switch back to Vite version
git checkout backup/vite-version

# Reinstall dependencies
npm install

# Start Vite dev server
npm run dev
```

**Gradual Migration:**
- Keep Vite version running on main domain
- Deploy Next.js version to subdomain (e.g., next.geneomm.com)
- Test thoroughly before switching DNS

---

## Common Pitfalls & Solutions

### Issue 1: "window is not defined"
**Cause:** Server component trying to access browser APIs

**Solution:**
```typescript
'use client'; // Add to component

// OR use conditional check
if (typeof window !== 'undefined') {
  // Browser-only code
}
```

### Issue 2: Hydration Mismatch
**Cause:** Server-rendered HTML doesn't match client

**Solution:**
```typescript
const [mounted, setMounted] = useState(false);

useEffect(() => {
  setMounted(true);
}, []);

if (!mounted) return null;
```

### Issue 3: Context Not Working
**Cause:** Provider not marked as client component

**Solution:**
```typescript
'use client'; // Add to provider file
```

### Issue 4: Framer Motion SSR Warnings
**Solution:**
```typescript
import dynamic from 'next/dynamic';

const MotionDiv = dynamic(
  () => import('framer-motion').then(mod => mod.motion.div),
  { ssr: false }
);
```

---

## Performance Benchmarks

### Expected Improvements

| Metric | Vite (CSR) | Next.js (SSR) | Improvement |
|--------|-----------|---------------|-------------|
| **First Contentful Paint** | ~2.5s | ~0.8s | 68% faster |
| **Time to Interactive** | ~4.0s | ~2.0s | 50% faster |
| **SEO Score** | 75 | 95 | +20 points |
| **Bundle Size (Initial)** | ~250KB | ~150KB | 40% smaller |

---

## Maintenance Considerations

### Long-term Benefits
- ✅ Better SEO rankings
- ✅ Faster page loads
- ✅ Improved user experience
- ✅ Built-in API routes for future features
- ✅ Easier deployment with Vercel/Netlify
- ✅ Automatic code splitting
- ✅ Better developer experience

### Trade-offs
- ⚠️ Learning curve for App Router
- ⚠️ More complex mental model (server vs client)
- ⚠️ Requires Node.js hosting (can't use static hosting)

---

## Conclusion

This migration plan provides a comprehensive roadmap to transform your Vite React application into a Next.js SSR application. The migration is estimated to take **3-4 weeks** with proper testing.

### Success Criteria
- ✅ All pages render correctly
- ✅ SEO improved (meta tags, SSR)
- ✅ Performance improved (Lighthouse > 90)
- ✅ No broken functionality
- ✅ Smooth animations and interactions
- ✅ Mobile-responsive design maintained

### Next Steps
1. Review this plan with your team
2. Set up development environment
3. Create backup branch
4. Begin Week 1 tasks
5. Regular testing throughout migration
6. Deploy to staging environment
7. Final testing and QA
8. Production deployment

---

**Document Version:** 1.0  
**Last Updated:** 2026-01-04  
**Author:** Senior Web Architect  
**Status:** Ready for Implementation
