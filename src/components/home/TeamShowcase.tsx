import React from 'react';
import { Link } from 'react-router-dom';
import Section from '../ui/Section';
import { team } from '../../data/mockData';
import { motion } from 'framer-motion';

const TeamShowcase: React.FC = () => {
  return (
    <Section title="Meet Our Medical Team" subtitle="EXPERTS IN GENETIC MEDICINE" className="bg-white overflow-hidden">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {team.map((member, index) => (
          <motion.div 
            key={member.name} 
            className="text-center group"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            <div className="relative overflow-hidden rounded-lg mb-4 shadow-lg">
              <img src={member.image} alt={member.name} className="w-full h-80 sm:h-96 object-cover rounded-lg transform group-hover:scale-110 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-4 w-full">
                 <h3 className="text-xl font-serif font-bold text-white">{member.name}</h3>
                 <p className="text-sm text-neutral-200">{member.title}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      <div className="text-center mt-12">
        <Link to="/consultants" className="bg-primary text-white px-8 py-3 rounded-full text-base font-semibold hover:bg-opacity-90 transition-all">
          View All Consultants
        </Link>
      </div>
    </Section>
  );
};

export default TeamShowcase;
