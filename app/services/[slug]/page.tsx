import { notFound } from 'next/navigation';
import { services } from '@/lib/data';
import Section from '@/components/ui/Section';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const service = services.find((s) => s.slug === params.slug);
  
  if (!service) {
    return { title: 'Service Not Found' };
  }

  return {
    title: service.title,
    description: service.description,
  };
}

export default function ServiceDetailPage({ params }: { params: { slug: string } }) {
  const service = services.find((s) => s.slug === params.slug);

  if (!service) {
    notFound();
  }

  const { title, details } = service;

  return (
    <div className="bg-white">
      <div className="bg-neutral py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center text-sm">
            <Link href="/" className="hover:text-primary">Home</Link>
            <ChevronRight className="h-4 w-4 mx-1" />
            <Link href="/services" className="hover:text-primary">Services</Link>
            <ChevronRight className="h-4 w-4 mx-1" />
            <span className="text-neutral-800 font-semibold">{title}</span>
          </div>
        </div>
      </div>

      <Section title={title} subtitle="SPECIALIZED GENETIC SERVICE">
        <div className="max-w-4xl mx-auto">
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
        </div>
      </Section>
    </div>
  );
}
