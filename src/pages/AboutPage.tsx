import React from 'react';
import Section from '../components/ui/Section';
import { Award, HeartHandshake, Microscope, Users } from 'lucide-react';

const AboutPage: React.FC = () => {
  return (
    <>
      {/* Page Header */}
      <div className="bg-deep-navy text-white py-16 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold">About Geneomm</h1>
          <p className="mt-4 text-lg text-neutral-200 max-w-3xl mx-auto">
            Combining medical excellence with compassionate care to be India's leading destination for Pediatric Genetics and Rare Diseases.
          </p>
        </div>
      </div>

      {/* Founder's Vision */}
      <Section className="bg-white">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="md:order-2">
            <h2 className="text-3xl font-serif font-bold text-deep-navy mb-4">Founder's Vision</h2>
            <p className="text-secondary font-semibold mb-4">A Message from Dr. M. Pradeep Kumar</p>
            <div className="space-y-4 text-neutral-800">
              <p>
                "My journey into genetics was driven by a desire to find answers for families facing the uncertainty of rare and complex conditions. Too often, I saw the frustration and despair that came with a diagnostic odyssey."
              </p>
              <p>
                "Geneomm was founded on a simple yet powerful principle: to provide hope. Hope through accurate, timely diagnosis. Hope through compassionate, comprehensive care. Hope through empowering families with knowledge. We are here to unlock genetic mysteries and walk with you on your journey."
              </p>
            </div>
          </div>
          <div className="flex justify-center md:order-1">
            <img
              src="/assets/Dr.Pradeep1.JPG"
              alt="Dr. M. Pradeep Kumar"
              className="rounded-lg shadow-2xl w-full max-w-sm object-cover"
            />
          </div>
        </div>
      </Section>

      {/* Mission, Vision, Values */}
      <Section>
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div className="flex flex-col items-center">
            <h3 className="text-2xl font-serif font-bold text-deep-navy mb-3">Our Mission</h3>
            <p className="text-neutral-800 max-w-xs">To provide hope and improve lives through advanced genetic diagnosis, personalized rare disease management, and unwavering compassionate support.</p>
          </div>
          <div className="flex flex-col items-center">
            <h3 className="text-2xl font-serif font-bold text-deep-navy mb-3">Our Vision</h3>
            <p className="text-neutral-800 max-w-xs">To be India's most trusted and authoritative centre for Pediatric genetics and rare diseases, recognized for scientific innovation and patient-centered excellence.</p>
          </div>
          <div className="flex flex-col items-center">
            <h3 className="text-2xl font-serif font-bold text-deep-navy mb-3">Our Values</h3>
            <p className="text-neutral-800 max-w-xs">Trust, Compassion, Innovation, and Clarity guide every interaction and decision we make at Geneomm.</p>
          </div>
        </div>
      </Section>

      {/* Why Choose Geneomm */}
      <Section title="Why Choose Geneomm?" subtitle="OUR COMMITMENT TO YOU" className="bg-white">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center p-4 md:p-6">
            <Award className="h-12 w-12 text-primary mx-auto mb-4" />
            <h4 className="text-xl font-serif font-bold mb-2">Unmatched Expertise</h4>
            <p className="text-sm text-neutral-800">Led by one of India's foremost Pediatric geneticists, our team possesses deep, specialized knowledge in rare diseases.</p>
          </div>
          <div className="text-center p-4 md:p-6">
            <HeartHandshake className="h-12 w-12 text-primary mx-auto mb-4" />
            <h4 className="text-xl font-serif font-bold mb-2">Patient-Centered Care</h4>
            <p className="text-sm text-neutral-800">You are at the heart of everything we do. We listen, we support, and we partner with you in your healthcare journey.</p>
          </div>
          <div className="text-center p-4 md:p-6">
            <Microscope className="h-12 w-12 text-primary mx-auto mb-4" />
            <h4 className="text-xl font-serif font-bold mb-2">Advanced Diagnostics</h4>
            <p className="text-sm text-neutral-800">We utilize cutting-edge genetic testing technologies to provide the most accurate and comprehensive diagnoses possible.</p>
          </div>
          <div className="text-center p-4 md:p-6">
            <Users className="h-12 w-12 text-primary mx-auto mb-4" />
            <h4 className="text-xl font-serif font-bold mb-2">Collaborative Approach</h4>
            <p className="text-sm text-neutral-800">We work closely with a network of specialists to ensure holistic and integrated care for complex conditions.</p>
          </div>
        </div>
      </Section>
    </>
  );
};

export default AboutPage;
