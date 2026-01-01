import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useModal } from '../../context/ModalContext';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { openModal } = useModal();

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Our Consultants', href: '/consultants' },
    { name: 'Services', href: '/services' },
    { name: 'Latest Updates', href: '/hospitals' },
    { name: 'Contact', href: '/contact' },
  ];

  const handleBookAppointment = () => {
    setIsMenuOpen(false);
    openModal();
  };

  return (
    <header className="bg-neutral-100/80 backdrop-blur-sm sticky top-0 z-40 shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center">
              <img src="/assets/logo.png" alt="Geneomm" className="h-16 w-auto" />
            </Link>
          </div>

          {/* Desktop Navigation (Centered) */}
          <div className="hidden lg:flex flex-1 items-center justify-center">
            <nav className="flex items-center gap-x-8">
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.href}
                  className={({ isActive }) =>
                    `text-sm font-medium transition-colors ${isActive ? 'text-primary font-semibold' : 'text-deep-navy hover:text-primary'
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
            </nav>
          </div>

          {/* CTA and Mobile Menu Toggle */}
          <div className="flex items-center">
            <div className="hidden lg:block">
              <button
                onClick={openModal}
                className="bg-primary text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-opacity-90 transition-all"
              >
                Book Appointment
              </button>
            </div>
            <div className="lg:hidden ml-4">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-deep-navy"
                aria-label="Toggle menu"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-neutral-100 border-t border-gray-200"
          >
            <nav className="flex flex-col items-center space-y-4 py-6">
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.href}
                  className={({ isActive }) =>
                    `text-base font-medium transition-colors ${isActive ? 'text-primary font-semibold' : 'text-deep-navy hover:text-primary'
                    }`
                  }
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </NavLink>
              ))}
              <button
                onClick={handleBookAppointment}
                className="bg-primary text-white px-8 py-3 rounded-full text-base font-semibold hover:bg-opacity-90 transition-all mt-4"
              >
                Book Appointment
              </button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
