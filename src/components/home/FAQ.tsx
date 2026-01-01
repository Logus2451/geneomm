import React, { useState } from 'react';
import Section from '../ui/Section';
import { faqs } from '../../data/mockData';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const FAQ: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <Section title="Frequently Asked Questions" subtitle="ANSWERS TO YOUR QUESTIONS">
      <div className="max-w-3xl mx-auto">
        {faqs.map((faq, index) => (
          <div key={`faq-${index}-${faq.question.slice(0, 20)}`} className="border-b border-gray-200 py-4">
            <button
              className="w-full flex justify-between items-center text-left"
              onClick={() => toggleFAQ(index)}
            >
              <h3 className="text-lg font-semibold text-deep-navy">{faq.question}</h3>
              {activeIndex === index ? <Minus className="text-primary" /> : <Plus className="text-neutral-800" />}
            </button>
            <AnimatePresence initial={false}>
              {activeIndex === index && (
                <motion.div
                  initial="collapsed"
                  animate="open"
                  exit="collapsed"
                  variants={{
                    open: { opacity: 1, height: 'auto', marginTop: '16px' },
                    collapsed: { opacity: 0, height: 0, marginTop: '0px' },
                  }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                  className="overflow-hidden"
                >
                  <p className="text-neutral-800">{faq.answer}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default FAQ;
