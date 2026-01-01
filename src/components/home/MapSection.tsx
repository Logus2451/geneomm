import React from 'react';
import Section from '../ui/Section';

const MapSection: React.FC = () => {
  return (
    <Section title="Visit Us" subtitle="OUR LOCATION" className="bg-white">
      <div className="w-full h-96 rounded-lg overflow-hidden shadow-lg">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.2577410627755!2d77.02347019999999!3d11.0192787!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba857c1322d623f%3A0x766e49c9e6be556d!2sGeneomm%20Medical%20Centre!5e0!3m2!1sen!2sin!4v1762374017070!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Geneomm Medical Centre Location"
        />
      </div>
    </Section>
  );
};

export default MapSection;
