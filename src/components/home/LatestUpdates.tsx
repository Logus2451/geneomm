import React from 'react';
import { Link } from 'react-router-dom';
import Section from '../ui/Section';
import { blogPosts } from '../../data/mockData';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const LatestUpdates: React.FC = () => {
  return (
    <Section title="Latest Updates & Research" subtitle="STAYING AT THE FOREFRONT">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {blogPosts.map((post, i) => (
          <motion.div 
            key={post.title}
            className="bg-white rounded-lg shadow-md overflow-hidden group"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
          >
            <div className="overflow-hidden">
              <img src={post.image} alt={post.title} className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-500" />
            </div>
            <div className="p-6">
              <p className="text-sm text-secondary font-semibold mb-2">{post.category}</p>
              <h3 className="text-xl font-serif font-bold text-deep-navy mb-3">{post.title}</h3>
              <p className="text-neutral-800 text-sm mb-4">{post.excerpt}</p>
              <Link to="/blog" className="text-primary font-semibold text-sm flex items-center group-hover:text-secondary transition-colors">
                Read More <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
       <div className="text-center mt-12">
        <Link to="/blog" className="bg-primary text-white px-8 py-3 rounded-full text-base font-semibold hover:bg-opacity-90 transition-all">
          Visit Our Blog
        </Link>
      </div>
    </Section>
  );
};

export default LatestUpdates;
