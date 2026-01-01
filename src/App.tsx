import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect, lazy, Suspense } from 'react';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import { ModalProvider } from './context/ModalContext';
import AppointmentModal from './components/layout/AppointmentModal';
import SocialSidebar from './components/ui/SocialSidebar';
import FloatingSocial from './components/ui/FloatingSocial';

// Lazy load page components for better performance
const HomePage = lazy(() => import('./pages/HomePage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const ConsultantsPage = lazy(() => import('./pages/ConsultantsPage'));
const ServicesPage = lazy(() => import('./pages/ServicesPage'));
const ServiceDetailPage = lazy(() => import('./pages/ServiceDetailPage.tsx'));
const HospitalsPage = lazy(() => import('./pages/HospitalsPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

function App() {
  return (
    <ModalProvider>
      <Router>
        <ScrollToTop />
        <div className="flex flex-col min-h-screen bg-neutral">
          <Header />
          <main className="flex-grow">
            <Suspense fallback={
              <div className="flex items-center justify-center min-h-screen">
                <div className="text-center">
                  <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
                  <p className="text-neutral-600">Loading...</p>
                </div>
              </div>
            }>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/consultants" element={<ConsultantsPage />} />
                <Route path="/services" element={<ServicesPage />} />
                <Route path="/services/:slug" element={<ServiceDetailPage />} />
                <Route path="/hospitals" element={<HospitalsPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="*" element={<HomePage />} />
              </Routes>
            </Suspense>
          </main>
          <Footer />
          <AppointmentModal />
          <SocialSidebar />
          <FloatingSocial />
        </div>
      </Router>
    </ModalProvider>
  );
}

export default App;
