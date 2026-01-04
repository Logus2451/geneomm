# React Router vs Next.js App Router - Quick Reference

A side-by-side comparison of common patterns when migrating from React Router to Next.js App Router.

---

## 1. Routing

### React Router (Vite)
```typescript
// App.tsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services/:slug" element={<ServiceDetailPage />} />
      </Routes>
    </Router>
  );
}
```

### Next.js App Router
```
app/
├── page.tsx              → /
├── about/
│   └── page.tsx          → /about
└── services/
    └── [slug]/
        └── page.tsx      → /services/:slug
```

---

## 2. Navigation Links

### React Router
```typescript
import { Link } from 'react-router-dom';

<Link to="/about">About</Link>
```

### Next.js
```typescript
import Link from 'next/link';

<Link href="/about">About</Link>
```

---

## 3. Getting URL Parameters

### React Router
```typescript
import { useParams } from 'react-router-dom';

function ServiceDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  return <div>{slug}</div>;
}
```

### Next.js
```typescript
// Server Component (default)
function ServiceDetailPage({ params }: { params: { slug: string } }) {
  return <div>{params.slug}</div>;
}

// Client Component
'use client';
import { useParams } from 'next/navigation';

function ServiceDetailPage() {
  const params = useParams();
  return <div>{params.slug}</div>;
}
```

---

## 4. Getting Current Route

### React Router
```typescript
import { useLocation } from 'react-router-dom';

function Component() {
  const { pathname } = useLocation();
  return <div>{pathname}</div>;
}
```

### Next.js
```typescript
'use client';
import { usePathname } from 'next/navigation';

function Component() {
  const pathname = usePathname();
  return <div>{pathname}</div>;
}
```

---

## 5. Programmatic Navigation

### React Router
```typescript
import { useNavigate } from 'react-router-dom';

function Component() {
  const navigate = useNavigate();
  
  const handleClick = () => {
    navigate('/about');
  };
  
  return <button onClick={handleClick}>Go to About</button>;
}
```

### Next.js
```typescript
'use client';
import { useRouter } from 'next/navigation';

function Component() {
  const router = useRouter();
  
  const handleClick = () => {
    router.push('/about');
  };
  
  return <button onClick={handleClick}>Go to About</button>;
}
```

---

## 6. Scroll Restoration

### React Router
```typescript
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';

function ScrollToTop() {
  const { pathname } = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  
  return null;
}

// Use in App.tsx
<Router>
  <ScrollToTop />
  <Routes>...</Routes>
</Router>
```

### Next.js
```typescript
// Built-in! No code needed.
// Next.js automatically scrolls to top on route changes.

// If you need custom behavior:
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

---

## 7. Lazy Loading / Code Splitting

### React Router
```typescript
import { lazy, Suspense } from 'react';

const HomePage = lazy(() => import('./pages/HomePage'));

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </Suspense>
  );
}
```

### Next.js
```typescript
// Automatic code splitting per route!
// Each page.tsx is automatically split.

// For client components that need no SSR:
import dynamic from 'next/dynamic';

const DynamicComponent = dynamic(
  () => import('@/components/HeavyComponent'),
  { 
    loading: () => <Loading />,
    ssr: false // Disable SSR for this component
  }
);
```

---

## 8. Data Fetching

### React Router (Client-Side)
```typescript
import { useState, useEffect } from 'react';

function ServiceDetailPage() {
  const { slug } = useParams();
  const [service, setService] = useState(null);
  
  useEffect(() => {
    fetch(`/api/services/${slug}`)
      .then(res => res.json())
      .then(setService);
  }, [slug]);
  
  if (!service) return <Loading />;
  
  return <div>{service.title}</div>;
}
```

### Next.js (Server-Side)
```typescript
// Server Component (default)
async function ServiceDetailPage({ params }: { params: { slug: string } }) {
  const service = await fetch(`https://api.example.com/services/${params.slug}`)
    .then(res => res.json());
  
  return <div>{service.title}</div>;
}

// OR with static data
import { services } from '@/lib/data';

function ServiceDetailPage({ params }: { params: { slug: string } }) {
  const service = services.find(s => s.slug === params.slug);
  return <div>{service.title}</div>;
}
```

---

## 9. 404 Handling

### React Router
```typescript
<Routes>
  <Route path="/" element={<HomePage />} />
  <Route path="/about" element={<AboutPage />} />
  <Route path="*" element={<NotFoundPage />} />
</Routes>
```

### Next.js
```typescript
// app/not-found.tsx (automatically used for 404s)
export default function NotFound() {
  return <div>404 - Page Not Found</div>;
}

// In a page, trigger 404:
import { notFound } from 'next/navigation';

function ServiceDetailPage({ params }: { params: { slug: string } }) {
  const service = services.find(s => s.slug === params.slug);
  
  if (!service) {
    notFound(); // Triggers app/not-found.tsx
  }
  
  return <div>{service.title}</div>;
}
```

---

## 10. Layout / Wrapper Components

### React Router
```typescript
// App.tsx
function App() {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}
```

### Next.js
```typescript
// app/layout.tsx
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
```

---

## 11. Nested Layouts

### React Router
```typescript
// Requires manual setup with Outlet
import { Outlet } from 'react-router-dom';

function DashboardLayout() {
  return (
    <div>
      <Sidebar />
      <Outlet /> {/* Child routes render here */}
    </div>
  );
}

<Routes>
  <Route path="/dashboard" element={<DashboardLayout />}>
    <Route path="settings" element={<Settings />} />
    <Route path="profile" element={<Profile />} />
  </Route>
</Routes>
```

### Next.js
```typescript
// app/dashboard/layout.tsx
export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Sidebar />
      {children}
    </div>
  );
}

// File structure automatically creates nested layouts:
// app/
// └── dashboard/
//     ├── layout.tsx        → Wraps all /dashboard/* routes
//     ├── settings/
//     │   └── page.tsx      → /dashboard/settings
//     └── profile/
//         └── page.tsx      → /dashboard/profile
```

---

## 12. Search Params / Query Strings

### React Router
```typescript
import { useSearchParams } from 'react-router-dom';

function SearchPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('q');
  
  return <div>Search: {query}</div>;
}

// URL: /search?q=genetics
```

### Next.js
```typescript
'use client';
import { useSearchParams } from 'next/navigation';

function SearchPage() {
  const searchParams = useSearchParams();
  const query = searchParams.get('q');
  
  return <div>Search: {query}</div>;
}

// Server Component alternative:
function SearchPage({ searchParams }: { searchParams: { q?: string } }) {
  return <div>Search: {searchParams.q}</div>;
}
```

---

## 13. Redirects

### React Router
```typescript
import { Navigate } from 'react-router-dom';

function ProtectedRoute() {
  const isAuthenticated = false;
  
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }
  
  return <Dashboard />;
}
```

### Next.js
```typescript
// Server Component
import { redirect } from 'next/navigation';

function ProtectedPage() {
  const isAuthenticated = false;
  
  if (!isAuthenticated) {
    redirect('/login');
  }
  
  return <Dashboard />;
}

// Client Component
'use client';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

function ProtectedPage() {
  const router = useRouter();
  const isAuthenticated = false;
  
  useEffect(() => {
    if (!isAuthenticated) {
      router.push('/login');
    }
  }, [isAuthenticated, router]);
  
  return <Dashboard />;
}
```

---

## 14. Loading States

### React Router
```typescript
import { Suspense, lazy } from 'react';

const HomePage = lazy(() => import('./pages/HomePage'));

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </Suspense>
  );
}
```

### Next.js
```typescript
// app/loading.tsx (automatic loading UI)
export default function Loading() {
  return <div>Loading...</div>;
}

// OR per-page loading:
// app/services/loading.tsx
export default function ServicesLoading() {
  return <div>Loading services...</div>;
}

// Streaming with Suspense:
import { Suspense } from 'react';

export default function Page() {
  return (
    <div>
      <Header />
      <Suspense fallback={<Loading />}>
        <SlowComponent />
      </Suspense>
    </div>
  );
}
```

---

## 15. Error Handling

### React Router
```typescript
// Manual error boundary setup required
import { ErrorBoundary } from 'react-error-boundary';

function App() {
  return (
    <ErrorBoundary fallback={<ErrorPage />}>
      <Routes>...</Routes>
    </ErrorBoundary>
  );
}
```

### Next.js
```typescript
// app/error.tsx (automatic error boundary)
'use client';

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <div>
      <h2>Something went wrong!</h2>
      <button onClick={reset}>Try again</button>
    </div>
  );
}
```

---

## 16. Metadata / SEO

### React Router
```typescript
// Requires react-helmet or similar
import { Helmet } from 'react-helmet';

function AboutPage() {
  return (
    <>
      <Helmet>
        <title>About Us | My Site</title>
        <meta name="description" content="About our company" />
      </Helmet>
      <div>About content</div>
    </>
  );
}
```

### Next.js
```typescript
// Built-in Metadata API
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us | My Site',
  description: 'About our company',
  openGraph: {
    title: 'About Us',
    description: 'About our company',
  },
};

export default function AboutPage() {
  return <div>About content</div>;
}

// Dynamic metadata:
export async function generateMetadata({ params }: { params: { slug: string } }) {
  const service = await getService(params.slug);
  
  return {
    title: service.title,
    description: service.description,
  };
}
```

---

## 17. Static Generation (SSG)

### React Router
```typescript
// Not available - CSR only
// Would need separate SSG tool like Gatsby
```

### Next.js
```typescript
// Automatic SSG for pages without dynamic data
export default function AboutPage() {
  return <div>About</div>;
}

// SSG with dynamic routes:
export async function generateStaticParams() {
  const services = await getServices();
  
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export default function ServicePage({ params }: { params: { slug: string } }) {
  // This page is pre-rendered at build time for all slugs
  return <div>{params.slug}</div>;
}
```

---

## 18. API Routes

### React Router
```typescript
// Requires separate backend (Express, etc.)
// OR serverless functions (Netlify/Vercel)
```

### Next.js
```typescript
// app/api/appointment/route.ts
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const data = await request.json();
  
  // Process appointment
  
  return NextResponse.json({ success: true });
}

// Usage:
fetch('/api/appointment', {
  method: 'POST',
  body: JSON.stringify({ name: 'John' }),
});
```

---

## 19. Environment Variables

### React Router (Vite)
```typescript
// .env
VITE_API_URL=https://api.example.com

// Usage:
const apiUrl = import.meta.env.VITE_API_URL;
```

### Next.js
```typescript
// .env.local
NEXT_PUBLIC_API_URL=https://api.example.com
API_SECRET=secret123

// Client-side (must use NEXT_PUBLIC_ prefix):
const apiUrl = process.env.NEXT_PUBLIC_API_URL;

// Server-side (can use any name):
const secret = process.env.API_SECRET;
```

---

## 20. Image Optimization

### React Router
```typescript
// Manual optimization required
<img src="/images/hero.jpg" alt="Hero" />
```

### Next.js
```typescript
// Automatic optimization
import Image from 'next/image';

<Image
  src="/images/hero.jpg"
  alt="Hero"
  width={1200}
  height={600}
  priority
  quality={90}
/>

// Responsive images:
<Image
  src="/images/hero.jpg"
  alt="Hero"
  fill
  className="object-cover"
/>
```

---

## Key Differences Summary

| Feature | React Router | Next.js App Router |
|---------|-------------|-------------------|
| **Routing** | Component-based | File-based |
| **Rendering** | Client-side only | Server + Client |
| **Data Fetching** | useEffect + fetch | async Server Components |
| **Code Splitting** | Manual (React.lazy) | Automatic |
| **SEO** | Requires extra libraries | Built-in Metadata API |
| **Loading States** | Manual Suspense | Automatic loading.tsx |
| **Error Handling** | Manual boundaries | Automatic error.tsx |
| **Layouts** | Manual with Outlet | Automatic with layout.tsx |
| **API Routes** | Separate backend | Built-in API routes |
| **Image Optimization** | Manual | Automatic with next/image |

---

## Migration Quick Tips

1. **'use client' directive**: Add to any component that uses:
   - useState, useEffect, useContext
   - Event handlers (onClick, onChange, etc.)
   - Browser APIs (window, document)
   - React hooks

2. **Server Components (default)**: Use for:
   - Static content
   - Data fetching
   - SEO-critical pages
   - No interactivity needed

3. **Import changes**:
   - `react-router-dom` → `next/navigation`
   - `<Link to=` → `<Link href=`
   - `useNavigate()` → `useRouter()`
   - `useParams()` → `params` prop (Server) or `useParams()` (Client)
   - `useLocation()` → `usePathname()`

4. **File structure**:
   - `src/pages/HomePage.tsx` → `app/page.tsx`
   - `src/pages/AboutPage.tsx` → `app/about/page.tsx`
   - `src/pages/ServiceDetailPage.tsx` → `app/services/[slug]/page.tsx`

---

**Ready to migrate!** Use this reference guide alongside the detailed migration plan.
