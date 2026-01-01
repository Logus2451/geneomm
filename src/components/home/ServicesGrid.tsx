import React from 'react';
import { Link } from 'react-router-dom';
import Section from '../ui/Section';
import { services } from '../../data/mockData';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: "easeOut"
    },
  }),
};

const ServicesGrid: React.FC = () => {
  return (
    <Section title="Our Specialty Services" subtitle="COMPREHENSIVE GENETIC CARE">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((service, i) => (
          <motion.div
            key={service.title}
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col group"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={i}
          >
            <div className="flex-shrink-0">
              <service.icon className="h-10 w-10 text-primary mb-4" />
            </div>
            <h3 className="text-xl font-serif font-bold text-deep-navy mb-2 flex-grow">{service.title}</h3>
            <p className="text-neutral-800 text-sm mb-4 flex-grow">{service.description}</p>
            <Link to={`/services/${service.slug}`} className="text-primary font-semibold text-sm flex items-center group-hover:text-secondary transition-colors">
              Learn More <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

export default ServicesGrid;
