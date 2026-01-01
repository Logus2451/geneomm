import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { services } from '../data/mockData';
import { ChevronRight } from 'lucide-react';
import Section from '../components/ui/Section';
import { useModal } from '../context/ModalContext';

const ServiceDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const { openModal } = useModal();
  const service = services.find(s => s.slug === slug);

  if (!service) {
    return (
      <Section title="Service Not Found">
        <div className="text-center">
          <p className="text-lg text-neutral-800 mb-8">The service you are looking for does not exist.</p>
          <Link to="/services" className="bg-primary text-white px-8 py-3 rounded-full text-base font-semibold hover:bg-opacity-90 transition-all">
            View All Services
          </Link>
        </div>
      </Section>
    );
  }

  const { title, details } = service;

  return (
    <div className="bg-white">
      <div className="bg-neutral py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center text-sm">
                <Link to="/" className="hover:text-primary">Home</Link>
                <ChevronRight className="h-4 w-4 mx-1" />
                <Link to="/services" className="hover:text-primary">Services</Link>
                <ChevronRight className="h-4 w-4 mx-1" />
                <span className="text-neutral-800 font-semibold">{title}</span>
            </div>
        </div>
      </div>
      <Section title={title} subtitle="SPECIALIZED GENETIC SERVICE">
        <div className="max-w-4xl mx-auto">
            <div className="prose lg:prose-lg max-w-none">
                <div className="p-8 bg-neutral rounded-lg mb-12">
                    <h3 className="text-2xl font-serif font-bold text-deep-navy mb-3">What is it?</h3>
                    <p className="text-neutral-800">{details.whatIsIt}</p>
                </div>
                
                <div className="grid md:grid-cols-2 gap-8 mb-12">
                    <div className="p-8 border border-gray-200 rounded-lg">
                        <h3 className="text-2xl font-serif font-bold text-deep-navy mb-3">Who Needs It?</h3>
                        <p className="text-neutral-800">{details.whoNeedsIt}</p>
                    </div>
                    <div className="p-8 border border-gray-200 rounded-lg">
                        <h3 className="text-2xl font-serif font-bold text-deep-navy mb-3">What to Expect</h3>
                        <p className="text-neutral-800">{details.whatToExpect}</p>
                    </div>
                </div>

                <div>
                    <h3 className="text-2xl font-serif font-bold text-deep-navy mb-4">Frequently Asked Questions</h3>
                    <div className="space-y-4">
                        {details.faqs.map((faq, index) => (
                            <div key={index} className="border-b border-gray-200 pb-4">
                                <p className="font-semibold text-deep-navy">{faq.q}</p>
                                <p className="mt-1 text-neutral-800">{faq.a}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="text-center mt-16">
                    <button onClick={openModal} className="bg-primary text-white px-10 py-4 rounded-full text-lg font-semibold hover:bg-opacity-90 transition-all">
                        Book a Consultation
                    </button>
                </div>
            </div>
        </div>
      </Section>
    </div>
  );
};

export default ServiceDetailPage;
