import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useModal } from '../../context/ModalContext';
import { Instagram, Youtube, Facebook } from 'lucide-react';

const rotatingMessages = [
  "Unlocking Genetic Mysteries, Empowering Families",
  "Expert Care for Rare Diseases",
  "Where Advanced Science Meets Compassionate Care"
];

const HeroSection: React.FC = () => {
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
      <div className="absolute inset-0">
        <img
          src="/assets/hero.png"
          alt="Child's hand holding an adult's finger, symbolizing care and hope"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-deep-navy/60"></div>
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="max-w-3xl text-center md:text-left py-16">
          <div className="h-36 md:h-40 my-4 flex items-center justify-center md:justify-start">
            <AnimatePresence mode="wait">
              <motion.h1
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.7, ease: "easeInOut" }}
                className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold leading-tight"
              >
                {rotatingMessages[index]}
              </motion.h1>
            </AnimatePresence>
          </div>
          <p className="font-sans text-neutral-200 max-w-2xl mx-auto md:mx-0 text-lg md:text-xl mb-10">
            India's leading destination for Pediatric Genetics, providing hope through advanced diagnosis and compassionate, patient-centered care.
          </p>

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

          {/* Social Media Buttons - Desktop/Tablet Only */}
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
};

export default HeroSection;
