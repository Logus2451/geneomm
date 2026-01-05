# 🎯 Migration Quick Reference

**One-page summary of the Next.js migration process**

---

## 📅 Timeline Overview

```
┌─────────────┬─────────────┬─────────────┬─────────────┐
│   WEEK 1    │   WEEK 2    │   WEEK 3    │   WEEK 4    │
│ Foundation  │    Pages    │ Components  │   Testing   │
├─────────────┼─────────────┼─────────────┼─────────────┤
│ Days 1-5    │  Days 6-10  │ Days 11-15  │ Days 16-20  │
└─────────────┴─────────────┴─────────────┴─────────────┘
```

---

## 🚀 Quick Start Commands

```bash
# 1. Backup current version
git checkout -b backup/vite-version
git push origin backup/vite-version

# 2. Create migration branch
git checkout -b feature/nextjs-migration

# 3. Install Next.js
npm install next@latest react@latest react-dom@latest
npm install -D @types/node @types/react @types/react-dom

# 4. Remove old dependencies
npm uninstall vite @vitejs/plugin-react react-router-dom axios

# 5. Start development
npm run dev
```

---

## 📁 Directory Structure

### Before (Vite)
```
src/
├── App.tsx
├── main.tsx
├── components/
├── pages/
├── context/
└── data/
```

### After (Next.js)
```
app/
├── layout.tsx
├── page.tsx
├── about/page.tsx
├── services/
│   ├── page.tsx
│   └── [slug]/page.tsx
components/
├── home/
├── layout/
├── ui/
└── providers/
lib/
└── data.ts
public/
└── assets/
```

---

## 🔄 Key Changes

### 1. Routing
```typescript
// BEFORE (React Router)
<Route path="/services/:slug" element={<ServiceDetailPage />} />

// AFTER (Next.js)
app/services/[slug]/page.tsx
```

### 2. Navigation
```typescript
// BEFORE
import { Link } from 'react-router-dom';
<Link to="/about">About</Link>

// AFTER
import Link from 'next/link';
<Link href="/about">About</Link>
```

### 3. Client Components
```typescript
// Add to components that use:
'use client';

// - useState, useEffect, useContext
// - Event handlers (onClick, onChange)
// - Browser APIs (window, document)
// - React hooks
```

### 4. Images
```typescript
// BEFORE
<img src="/assets/hero.png" alt="Hero" />

// AFTER
import Image from 'next/image';
<Image src="/assets/hero.png" alt="Hero" fill priority />
```

---

## ✅ Components Requiring 'use client'

| Component | Reason |
|-----------|--------|
| HeroSection | useState, useEffect (timer) |
| ImpactStats | IntersectionObserver |
| Header | useState (mobile menu) |
| AppointmentModal | useState (modal state) |
| ModalProvider | Context with state |
| Testimonials | Embla Carousel |
| BookConsultationButton | useModal hook |

---

## 📊 Expected Improvements

| Metric | Before | After | Improvement |
|--------|--------|-------|-------------|
| **FCP** | ~2.0s | ~0.5s | **75% faster** |
| **LCP** | ~2.5s | ~0.8s | **68% faster** |
| **TTI** | ~3.0s | ~1.2s | **60% faster** |
| **Bundle** | ~250KB | ~150KB | **40% smaller** |
| **Lighthouse** | 65-75 | 90-95 | **+20 points** |
| **SEO** | 75 | 95 | **+20 points** |

---

## 🎯 Week-by-Week Goals

### Week 1: Foundation
- ✅ Install Next.js
- ✅ Configure files
- ✅ Create root layout
- ✅ Migrate providers
- ✅ Move static assets

### Week 2: Pages
- ✅ Migrate all static pages
- ✅ Implement dynamic routes
- ✅ Add metadata for SEO
- ✅ Create 404/error pages

### Week 3: Components
- ✅ Add 'use client' directives
- ✅ Migrate all components
- ✅ Optimize images
- ✅ Test interactivity

### Week 4: Launch
- ✅ Functional testing
- ✅ Performance optimization
- ✅ SEO validation
- ✅ Production deployment

---

## 🔧 Configuration Files

### package.json
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

### next.config.ts
```typescript
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com' }
    ]
  }
};
```

### tailwind.config.ts
```typescript
content: [
  './app/**/*.{js,ts,jsx,tsx,mdx}',
  './components/**/*.{js,ts,jsx,tsx,mdx}'
]
```

---

## 🐛 Common Issues & Solutions

### Issue: "window is not defined"
```typescript
// Solution: Add 'use client'
'use client';
```

### Issue: Hydration mismatch
```typescript
// Solution: Conditional rendering
const [mounted, setMounted] = useState(false);
useEffect(() => setMounted(true), []);
if (!mounted) return null;
```

### Issue: Context not working
```typescript
// Solution: Mark provider as client component
'use client';
export function ModalProvider({ children }) { ... }
```

---

## 📚 Documentation Files

| File | Purpose | Read Time |
|------|---------|-----------|
| **EXECUTIVE_SUMMARY.md** | High-level overview | 10 min |
| **NEXTJS_MIGRATION_PLAN.md** | Detailed migration guide | 45 min |
| **MIGRATION_CODE_EXAMPLES.md** | Code templates | 30 min |
| **ROUTER_COMPARISON.md** | Quick reference | 20 min |
| **ARCHITECTURE_COMPARISON.md** | Visual architecture | 35 min |
| **MIGRATION_CHECKLIST.md** | Progress tracking | 5 min |

---

## 🎯 Success Criteria

### Performance
- [ ] Lighthouse Performance > 90
- [ ] First Contentful Paint < 1s
- [ ] Time to Interactive < 2s
- [ ] Cumulative Layout Shift < 0.1

### SEO
- [ ] All pages have meta tags
- [ ] Open Graph tags configured
- [ ] Search engines see full content
- [ ] SEO Score > 90

### Functionality
- [ ] All routes work
- [ ] All features functional
- [ ] No visual regressions
- [ ] Mobile responsive

---

## 🚀 Deployment Options

### Vercel (Recommended)
```bash
npm i -g vercel
vercel
vercel --prod
```

### Netlify
```bash
npm i -g netlify-cli
netlify deploy
netlify deploy --prod
```

### Self-Hosted
```bash
npm run build
npm run start
# Configure Nginx/Apache reverse proxy
```

---

## 📞 Support Resources

- **Next.js Docs**: https://nextjs.org/docs
- **App Router Guide**: https://nextjs.org/docs/app
- **Migration Guide**: https://nextjs.org/docs/app/building-your-application/upgrading/from-vite
- **Discord**: https://discord.gg/nextjs
- **GitHub**: https://github.com/vercel/next.js/discussions

---

## ✅ Daily Checklist Template

```
Day ___: _____________________

Tasks:
[ ] _____________________
[ ] _____________________
[ ] _____________________

Testing:
[ ] _____________________
[ ] _____________________

Issues:
- _____________________

Notes:
_____________________

Commit: git commit -m "Day ___: _____________________"
```

---

## 🎉 Migration Complete!

Once all checklist items are done:

1. ✅ Run final tests
2. ✅ Deploy to production
3. ✅ Monitor performance
4. ✅ Collect feedback
5. ✅ Celebrate! 🎊

---

**Quick Reference Version**: 1.0  
**Last Updated**: January 2026  
**Status**: Ready to Use ✅
