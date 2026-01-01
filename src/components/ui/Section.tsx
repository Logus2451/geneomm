import React from 'react';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  title?: string;
  subtitle?: string;
}

const Section: React.FC<SectionProps> = ({ children, className = '', title, subtitle }) => {
  return (
    <section className={`py-16 md:py-24 ${className}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {title && (
          <div className="text-center mb-12">
            {subtitle && <p className="text-secondary font-semibold tracking-wider mb-2">{subtitle}</p>}
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-deep-navy">{title}</h2>
          </div>
        )}
        {children}
      </div>
    </section>
  );
};

export default Section;
