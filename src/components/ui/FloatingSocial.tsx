import React from 'react';
import { Instagram, Youtube, Facebook } from 'lucide-react';

const FloatingSocial: React.FC = () => {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-t border-gray-200 p-3 shadow-lg">
      <div className="flex gap-2 justify-center">
        <a
          href="https://www.instagram.com/geneomm_medical_center_/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center px-3 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg hover:opacity-90 transition-opacity shadow-sm flex-1 justify-center text-sm"
        >
          <Instagram className="mr-1" size={16} />
          <span className="font-medium">Instagram</span>
        </a>
        <a
          href="https://www.youtube.com/@doctorpradeep"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center px-3 py-2 bg-red-600 text-white rounded-lg hover:opacity-90 transition-opacity shadow-sm flex-1 justify-center text-sm"
        >
          <Youtube className="mr-1" size={16} />
          <span className="font-medium">YouTube</span>
        </a>
        <a
          href="https://www.facebook.com/GeneOmmCoimbatore7373146666/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center px-3 py-2 bg-blue-600 text-white rounded-lg hover:opacity-90 transition-opacity shadow-sm flex-1 justify-center text-sm"
        >
          <Facebook className="mr-1" size={16} />
          <span className="font-medium">Facebook</span>
        </a>
      </div>
    </div>
  );
};

export default FloatingSocial;