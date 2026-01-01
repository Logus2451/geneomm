import React from 'react';
import HeroSection from '../components/home/HeroSection';
import ImpactStats from '../components/home/ImpactStats';
import ServicesGrid from '../components/home/ServicesGrid';
import TeamShowcase from '../components/home/TeamShowcase';
import VisitingHospitalsPreview from '../components/home/VisitingHospitalsPreview';
import Testimonials from '../components/home/Testimonials';
import FAQ from '../components/home/FAQ.tsx';
import MapSection from '../components/home/MapSection';
import ContactSection from '../components/home/ContactSection';

const HomePage: React.FC = () => {
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
};

export default HomePage;
