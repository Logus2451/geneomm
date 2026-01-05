# Next.js Migration - Code Examples

This document provides ready-to-use code examples for migrating specific components from Vite React to Next.js.

---

## 1. Root Layout (app/layout.tsx)

```typescript
import type { Metadata } from 'next';
import { Inter, Merriweather } from 'next/font/google';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { ModalProvider } from '@/components/providers/ModalProvider';
import AppointmentModal from '@/components/layout/AppointmentModal';
import SocialSidebar from '@/components/ui/SocialSidebar';
import FloatingSocial from '@/components/ui/FloatingSocial';

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

export const metadata: Metadata = {
  title: {
    default: 'Geneomm Medical Center - Pediatric Genetics & Rare Disease Care',
    template: '%s | Geneomm Medical Center',
  },
  description:
    "India's leading destination for Pediatric Genetics, providing hope through advanced diagnosis and compassionate care.",
  keywords: [
    'pediatric genetics',
    'genetic counseling',
    'rare diseases',
    'Coimbatore',
    'genetic testing',
    'fetal genetics',
  ],
  authors: [{ name: 'Geneomm Medical Center' }],
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://geneomm.com',
    siteName: 'Geneomm Medical Center',
    title: 'Geneomm Medical Center - Pediatric Genetics',
    description:
      "India's leading destination for Pediatric Genetics and Rare Disease Care",
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Geneomm Medical Center',
    description: 'Pediatric Genetics & Rare Disease Care',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${merriweather.variable}`}
    >
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

---

## 2. Home Page (app/page.tsx)

```typescript
import HeroSection from '@/components/home/HeroSection';
import ImpactStats from '@/components/home/ImpactStats';
import ServicesGrid from '@/components/home/ServicesGrid';
import TeamShowcase from '@/components/home/TeamShowcase';
import VisitingHospitalsPreview from '@/components/home/VisitingHospitalsPreview';
import Testimonials from '@/components/home/Testimonials';
import FAQ from '@/components/home/FAQ';
import MapSection from '@/components/home/MapSection';
import ContactSection from '@/components/home/ContactSection';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ImpactStats />
      <ServicesGrid />
      <TeamShowcase />
      <VisitingHospitalsPreview />
      <Testimonials />
      <FAQ />
      <MapSection />
      <ContactSection />
    </>
  );
}
```

---

## 3. Dynamic Service Page (app/services/[slug]/page.tsx)

```typescript
import { notFound } from 'next/navigation';
import { services } from '@/lib/data';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import Section from '@/components/ui/Section';
import BookConsultationButton from '@/components/services/BookConsultationButton';

// Generate static params for all services (SSG)
export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

// Generate metadata for each service
export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const service = services.find((s) => s.slug === params.slug);

  if (!service) {
    return {
      title: 'Service Not Found',
    };
  }

  return {
    title: service.title,
    description: service.description,
    openGraph: {
      title: `${service.title} | Geneomm Medical Center`,
      description: service.description,
    },
  };
}

// Server Component (default)
export default function ServiceDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const service = services.find((s) => s.slug === params.slug);

  if (!service) {
    notFound();
  }

  const { title, details } = service;

  return (
    <div className="bg-white">
      {/* Breadcrumb */}
      <div className="bg-neutral py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center text-sm">
            <Link href="/" className="hover:text-primary">
              Home
            </Link>
            <ChevronRight className="h-4 w-4 mx-1" />
            <Link href="/services" className="hover:text-primary">
              Services
            </Link>
            <ChevronRight className="h-4 w-4 mx-1" />
            <span className="text-neutral-800 font-semibold">{title}</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <Section title={title} subtitle="SPECIALIZED GENETIC SERVICE">
        <div className="max-w-4xl mx-auto">
          <div className="prose lg:prose-lg max-w-none">
            {/* What is it */}
            <div className="p-8 bg-neutral rounded-lg mb-12">
              <h3 className="text-2xl font-serif font-bold text-deep-navy mb-3">
                What is it?
              </h3>
              <p className="text-neutral-800">{details.whatIsIt}</p>
            </div>

            {/* Who Needs It & What to Expect */}
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="p-8 border border-gray-200 rounded-lg">
                <h3 className="text-2xl font-serif font-bold text-deep-navy mb-3">
                  Who Needs It?
                </h3>
                <p className="text-neutral-800">{details.whoNeedsIt}</p>
              </div>
              <div className="p-8 border border-gray-200 rounded-lg">
                <h3 className="text-2xl font-serif font-bold text-deep-navy mb-3">
                  What to Expect
                </h3>
                <p className="text-neutral-800">{details.whatToExpect}</p>
              </div>
            </div>

            {/* FAQs */}
            <div>
              <h3 className="text-2xl font-serif font-bold text-deep-navy mb-4">
                Frequently Asked Questions
              </h3>
              <div className="space-y-4">
                {details.faqs.map((faq, index) => (
                  <div key={index} className="border-b border-gray-200 pb-4">
                    <p className="font-semibold text-deep-navy">{faq.q}</p>
                    <p className="mt-1 text-neutral-800">{faq.a}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="text-center mt-16">
              <BookConsultationButton />
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}
```

---

## 4. Client Component: Book Consultation Button

```typescript
// components/services/BookConsultationButton.tsx
'use client';

import { useModal } from '@/components/providers/ModalProvider';

export default function BookConsultationButton() {
  const { openModal } = useModal();

  return (
    <button
      onClick={openModal}
      className="bg-primary text-white px-10 py-4 rounded-full text-lg font-semibold hover:bg-opacity-90 transition-all"
    >
      Book a Consultation
    </button>
  );
}
```

---

## 5. Modal Provider (Client Component)

```typescript
// components/providers/ModalProvider.tsx
'use client';

import {
  createContext,
  useState,
  useContext,
  ReactNode,
  useMemo,
  useCallback,
} from 'react';

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
    <ModalContext.Provider value={value}>{children}</ModalContext.Provider>
  );
}
```

---

## 6. Hero Section (Client Component)

```typescript
// components/home/HeroSection.tsx
'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useModal } from '@/components/providers/ModalProvider';
import { Instagram, Youtube, Facebook } from 'lucide-react';
import Image from 'next/image';

const rotatingMessages = [
  'Unlocking Genetic Mysteries, Empowering Families',
  'Expert Care for Rare Diseases',
  'Where Advanced Science Meets Compassionate Care',
];

export default function HeroSection() {
  const [index, setIndex] = useState(0);
  const { openModal } = useModal();

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % rotatingMessages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative bg-deep-navy text-white flex flex-col justify-center min-h-[600px]">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/assets/hero.png"
          alt="Child's hand holding an adult's finger, symbolizing care and hope"
          fill
          className="object-cover"
          priority
          quality={90}
        />
        <div className="absolute inset-0 bg-deep-navy/60"></div>
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="max-w-3xl text-center md:text-left py-16">
          {/* Rotating Messages */}
          <div className="h-36 md:h-40 my-4 flex items-center justify-center md:justify-start">
            <AnimatePresence mode="wait">
              <motion.h1
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.7, ease: 'easeInOut' }}
                className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold leading-tight"
              >
                {rotatingMessages[index]}
              </motion.h1>
            </AnimatePresence>
          </div>

          {/* Subtitle */}
          <p className="font-sans text-neutral-200 max-w-2xl mx-auto md:mx-0 text-lg md:text-xl mb-10">
            India's leading destination for Pediatric Genetics, providing hope
            through advanced diagnosis and compassionate, patient-centered care.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <button
              onClick={openModal}
              className="bg-primary text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-opacity-90 transition-all transform hover:scale-105"
            >
              Book Appointment
            </button>
            <a
              href="tel:+917373146666"
              className="bg-transparent border-2 border-accent text-accent px-8 py-3 rounded-full text-lg font-semibold hover:bg-accent hover:text-white transition-all transform hover:scale-105 text-center"
            >
              Emergency Call
            </a>
          </div>

          {/* Social Media Buttons */}
          <div className="hidden md:flex gap-3 justify-center md:justify-start mt-6">
            <a
              href="https://www.instagram.com/geneomm_medical_center_/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center px-4 py-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-sm border border-purple-300/30 text-white rounded-lg hover:from-purple-500/30 hover:to-pink-500/30 transition-all duration-200 text-sm"
            >
              <Instagram className="mr-2" size={16} />
              <span className="font-medium">Instagram</span>
            </a>
            <a
              href="https://www.youtube.com/@doctorpradeep"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center px-4 py-2 bg-red-600/20 backdrop-blur-sm border border-red-300/30 text-white rounded-lg hover:bg-red-600/30 transition-all duration-200 text-sm"
            >
              <Youtube className="mr-2" size={16} />
              <span className="font-medium">YouTube</span>
            </a>
            <a
              href="https://www.facebook.com/GeneOmmCoimbatore7373146666/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center px-4 py-2 bg-blue-600/20 backdrop-blur-sm border border-blue-300/30 text-white rounded-lg hover:bg-blue-600/30 transition-all duration-200 text-sm"
            >
              <Facebook className="mr-2" size={16} />
              <span className="font-medium">Facebook</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
```

---

## 7. Impact Stats (Client Component)

```typescript
// components/home/ImpactStats.tsx
'use client';

import { useRef, useEffect, useState } from 'react';
import { motion, useInView, animate } from 'framer-motion';
import Section from '@/components/ui/Section';
import { Award, HeartHandshake, TestTube, Users } from 'lucide-react';

const stats = [
  { icon: Award, value: 15, label: 'Years of Experience', suffix: '+' },
  { icon: HeartHandshake, value: 30000, label: 'Patients Helped', suffix: '+' },
  {
    icon: TestTube,
    value: 100000,
    label: 'Genetic Tests Performed',
    suffix: '+',
  },
  {
    icon: Users,
    value: 20000,
    label: 'Family Consultations',
    suffix: '+',
  },
];

const AnimatedCounter = ({ to, suffix }: { to: number; suffix: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  useEffect(() => {
    if (isInView) {
      const controls = animate(0, to, {
        duration: 2,
        onUpdate(value) {
          setCount(Math.floor(value));
        },
      });
      return () => controls.stop();
    }
  }, [isInView, to]);

  return (
    <span ref={ref}>
      {count.toLocaleString('en-US')}
      {suffix}
    </span>
  );
};

export default function ImpactStats() {
  return (
    <Section className="bg-white !py-12">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="bg-neutral-200 rounded-2xl p-6 md:p-8 text-center hover:shadow-xl transition-all duration-300 border border-transparent hover:border-primary/20 min-h-[180px] flex flex-col justify-center"
          >
            <stat.icon
              className="text-primary h-12 w-12 mx-auto mb-4"
              strokeWidth={1.5}
            />
            <p className="text-2xl md:text-4xl font-bold text-primary mb-2 overflow-hidden">
              <AnimatedCounter to={stat.value} suffix={stat.suffix} />
            </p>
            <p className="text-sm md:text-base text-neutral-800 font-medium leading-tight">
              {stat.label}
            </p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
```

---

## 8. Header Component (Client Component)

```typescript
// components/layout/Header.tsx
'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Phone } from 'lucide-react';
import { useModal } from '@/components/providers/ModalProvider';
import Image from 'next/image';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Consultants', href: '/consultants' },
  { name: 'Visiting Hospitals', href: '/hospitals' },
  { name: 'Contact', href: '/contact' },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { openModal } = useModal();
  const pathname = usePathname();

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.png"
              alt="Geneomm Medical Center"
              width={150}
              height={50}
              priority
              className="h-12 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`text-sm font-medium transition-colors ${
                  pathname === item.href
                    ? 'text-primary'
                    : 'text-neutral-700 hover:text-primary'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href="tel:+917373146666"
              className="flex items-center text-primary hover:text-primary/80 transition-colors"
            >
              <Phone className="h-5 w-5 mr-2" />
              <span className="font-semibold">+91 73731 46666</span>
            </a>
            <button
              onClick={openModal}
              className="bg-primary text-white px-6 py-2 rounded-full text-sm font-semibold hover:bg-opacity-90 transition-all"
            >
              Book Appointment
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="lg:hidden p-2 rounded-md text-neutral-700"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t">
            <div className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`text-base font-medium ${
                    pathname === item.href
                      ? 'text-primary'
                      : 'text-neutral-700'
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <button
                onClick={() => {
                  openModal();
                  setMobileMenuOpen(false);
                }}
                className="bg-primary text-white px-6 py-2 rounded-full text-sm font-semibold text-center"
              >
                Book Appointment
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
```

---

## 9. Data Library (lib/data.ts)

```typescript
// lib/data.ts
import {
  Dna,
  Baby,
  Microscope,
  Stethoscope,
  HeartPulse,
  BrainCircuit,
  Users,
  ShieldCheck,
  RefreshCcw,
  Target,
} from 'lucide-react';

export const services = [
  {
    slug: 'genetic-counseling',
    icon: Dna,
    title: 'Genetic Counseling',
    description:
      'Personalized guidance to help you understand and adapt to the medical, psychological, and familial implications of genetic contributions to disease.',
    details: {
      whatIsIt:
        'Genetic counseling is a communication process that deals with the human problems associated with the occurrence, or the risk of occurrence, of a genetic disorder in a family.',
      whoNeedsIt:
        'Individuals or families concerned about a genetic condition, couples planning a pregnancy, or anyone with a family history of hereditary disease.',
      whatToExpect:
        'A session involves reviewing your family and medical histories, discussing genetic testing options, and receiving support and resources.',
      faqs: [
        {
          q: 'Is a referral needed?',
          a: 'A referral is helpful but not always necessary. You can contact us directly.',
        },
        {
          q: 'How long is a session?',
          a: 'Initial sessions typically last about 60 minutes.',
        },
      ],
    },
  },
  // ... rest of services
];

export const team = [
  // ... team data
];

export const testimonials = [
  // ... testimonials data
];

export const faqs = [
  // ... faqs data
];
```

---

## 10. Next.js Config (next.config.ts)

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
  // Optimize package imports
  experimental: {
    optimizePackageImports: ['lucide-react', 'framer-motion'],
  },
};

export default nextConfig;
```

---

## 11. TailwindCSS Config (tailwind.config.ts)

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
        primary: '#4F46E5',
        accent: '#10B981',
        'deep-navy': '#1E293B',
        neutral: {
          DEFAULT: '#F8FAFC',
          200: '#E2E8F0',
          600: '#475569',
          700: '#334155',
          800: '#1E293B',
          900: '#0F172A',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        serif: ['var(--font-merriweather)', 'serif'],
      },
    },
  },
  plugins: [],
};

export default config;
```

---

## 12. Package.json Updates

```json
{
  "name": "geneomm-nextjs",
  "version": "1.0.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  },
  "dependencies": {
    "next": "^15.1.0",
    "react": "^19.1.0",
    "react-dom": "^19.1.0",
    "framer-motion": "^12.23.24",
    "lucide-react": "^0.511.0",
    "embla-carousel-react": "^8.6.0",
    "embla-carousel-autoplay": "^8.6.0"
  },
  "devDependencies": {
    "@types/node": "^20",
    "@types/react": "^19",
    "@types/react-dom": "^19",
    "typescript": "^5",
    "tailwindcss": "^3.4.1",
    "postcss": "^8",
    "autoprefixer": "^10"
  }
}
```

---

## 13. Not Found Page (app/not-found.tsx)

```typescript
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-neutral-800 mb-4">
          Page Not Found
        </h2>
        <p className="text-neutral-600 mb-8">
          The page you are looking for does not exist.
        </p>
        <Link
          href="/"
          className="bg-primary text-white px-8 py-3 rounded-full text-base font-semibold hover:bg-opacity-90 transition-all inline-block"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
}
```

---

## 14. Loading State (app/loading.tsx)

```typescript
export default function Loading() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
        <p className="text-neutral-600">Loading...</p>
      </div>
    </div>
  );
}
```

---

## 15. Error Boundary (app/error.tsx)

```typescript
'use client';

import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <div className="text-center">
        <h2 className="text-2xl font-semibold text-neutral-800 mb-4">
          Something went wrong!
        </h2>
        <button
          onClick={reset}
          className="bg-primary text-white px-8 py-3 rounded-full text-base font-semibold hover:bg-opacity-90 transition-all"
        >
          Try again
        </button>
      </div>
    </div>
  );
}
```

---

## Migration Checklist

- [ ] Copy all code examples to appropriate files
- [ ] Update import paths to use `@/` alias
- [ ] Add `'use client'` to all interactive components
- [ ] Replace `<img>` with `<Image>` from `next/image`
- [ ] Replace `react-router-dom` imports with `next/navigation`
- [ ] Move static data to `lib/data.ts`
- [ ] Test all routes
- [ ] Test dynamic routes
- [ ] Test client interactions
- [ ] Run production build
- [ ] Deploy to staging

---

**Ready to implement!** Use these examples as templates for your migration.
