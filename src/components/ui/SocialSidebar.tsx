import React from 'react';
import { Instagram, Youtube, Phone } from 'lucide-react';

const SocialSidebar: React.FC = () => {
  return (
    <div className="fixed right-0 top-1/2 transform -translate-y-1/2 z-50 flex flex-col space-y-2">
      <a
        href="https://www.instagram.com/geneomm_medical_center_/"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-3 rounded-l-lg hover:scale-110 transition-transform shadow-lg"
      >
        <Instagram size={20} />
      </a>
      <a
        href="tel:+917373146666"
        className="bg-green-500 text-white p-3 rounded-l-lg hover:scale-110 transition-transform shadow-lg"
      >
        <Phone size={20} />
      </a>
      <a
        href="https://www.youtube.com/@doctorpradeep"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-red-500 text-white p-3 rounded-l-lg hover:scale-110 transition-transform shadow-lg"
      >
        <Youtube size={20} />
      </a>
    </div>
  );
};

export default SocialSidebar;