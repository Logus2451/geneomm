import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Instagram, Youtube } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = 2025;

  return (
    <footer className="bg-deep-navy text-neutral-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-serif font-bold text-white mb-4">Geneomm</h3>
            <p className="text-sm text-neutral-300">
              Centre for Genetics and Rare Diseases. Providing hope through advanced genetic diagnosis and rare disease management.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link to="/services" className="hover:text-primary transition-colors">Services</Link></li>
              <li><Link to="/consultants" className="hover:text-primary transition-colors">Our Consultants</Link></li>
              <li><Link to="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start">
                <MapPin size={16} className="mr-3 mt-1 flex-shrink-0 text-primary" />
                <span>N-79, Ramanujam Nagar, (Near Rangasamy Gounder Kalyana Mandapam), Off Kamarajar Road (Hopes to Singanallur Road), Uppilipalayam, Coimbatore 641 015, Tamil Nadu, India</span>
              </li>
              <li className="flex items-center">
                <Mail size={16} className="mr-3 flex-shrink-0 text-primary" />
                <a href="mailto:geneomm@gmail.in" className="hover:text-primary">geneomm@gmail.in</a>
              </li>
              <li className="flex items-center">
                <Phone size={16} className="mr-3 flex-shrink-0 text-primary" />
                <a href="tel:+917373146666" className="hover:text-primary">+91 73731 46666</a>
              </li>
              <li className="flex items-center">
                <Phone size={16} className="mr-3 flex-shrink-0 text-primary" />
                <a href="tel:+914222575666" className="hover:text-primary">0422 2575666</a>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/geneomm_medical_center_/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-300 hover:text-primary transition-colors"
              >
                <Instagram size={24} />
              </a>
              <a
                href="https://www.youtube.com/@doctorpradeep"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-300 hover:text-primary transition-colors"
              >
                <Youtube size={24} />
              </a>
            </div>
          </div>

        </div>

        <div className="mt-8 pt-8 border-t border-neutral-800 text-center text-sm text-neutral-400">
          <p>&copy; {currentYear} Geneomm. All Rights Reserved. Designed with care.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
