import React, { useMemo } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import Section from '../ui/Section';
import { testimonials } from '../../data/mockData';
import { Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  const autoplayPlugin = useMemo(() => Autoplay({ delay: 4000, stopOnInteraction: false }), []);
  const [emblaRef] = useEmblaCarousel({ loop: true, align: 'start' }, [autoplayPlugin]);

  return (
    <Section title="Stories of Hope" subtitle="PATIENT TESTIMONIALS" className="bg-white">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="flex-grow-0 flex-shrink-0 w-full sm:w-1/2 lg:w-1/3 pl-4">
              <div className="h-full bg-neutral p-6 rounded-lg shadow-sm flex flex-col">
                <Quote className="h-8 w-8 text-primary/20 mb-3" />
                <p className="italic text-deep-navy mb-4 flex-grow">"{testimonial.quote}"</p>
                
                <div className="flex items-center mt-auto pt-4 border-t border-gray-200">
                  {/* --- CHANGED SECTION START --- */}
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4 shrink-0">
                    <span className="text-xl font-bold text-primary">
                      {testimonial.name.charAt(0).toUpperCase()}
                    </span>
                  </div>
                  {/* --- CHANGED SECTION END --- */}
                  
                  <div>
                    <p className="font-bold text-deep-navy">{testimonial.name}</p>
                    <p className="text-sm text-neutral-800">{testimonial.relation}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Testimonials;