import React from 'react';
import { Link } from 'react-router-dom';
import { services } from '../data/mockData';
import { ArrowRight } from 'lucide-react';
import Section from '../components/ui/Section';

const ServicesPage: React.FC = () => {
  return (
    <div className="bg-white">
      <Section title="Services & Specialties" subtitle="OUR COMPREHENSIVE CARE">
        <p className="max-w-3xl mx-auto text-center text-lg text-neutral-800 mb-12">
          At Geneomm, we offer a wide range of specialized services to provide accurate diagnoses, comprehensive management, and compassionate support for individuals and families facing genetic and rare diseases.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <Link 
              to={`/services/${service.slug}`} 
              key={service.title} 
              className="bg-neutral p-6 rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300 flex flex-col group"
            >
              <div className="flex items-center mb-4">
                <service.icon className="h-8 w-8 text-primary mr-4" />
                <h3 className="text-xl font-serif font-bold text-deep-navy">{service.title}</h3>
              </div>
              <p className="text-neutral-800 text-sm mb-4 flex-grow">{service.description}</p>
              <span className="text-primary font-semibold text-sm flex items-center group-hover:text-secondary transition-colors mt-auto">
                Learn More <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
          ))}
        </div>
      </Section>
    </div>
  );
};

export default ServicesPage;
