import Section from '@/components/ui/Section';
import { MapPin } from 'lucide-react';
import Link from 'next/link';

const hospitals = [
  "Meenakshi Mission Hospital, Madurai",
  "Lotus Hospital, Erode",
  "Maa Kauvery Hospital, Trichy",
  "Dharshana Hospital, Erode",
  "Neuro One Hospital, Trichy",
  "Rio Hospital, Madurai"
];

export default function VisitingHospitalsPreview() {
  return (
    <Section title="Our Visiting Hospitals Network" subtitle="EXTENDING OUR REACH" className="bg-neutral">
      <div className="flex flex-col lg:flex-row items-center gap-12">
        <div className="lg:w-1/2">
          <p className="text-lg text-neutral-800 mb-6">
            To make our specialized genetic services more accessible, Dr. Pradeep Kumar visits a network of esteemed hospitals across Tamil Nadu. Find expert care closer to you.
          </p>
          <div className="space-y-4">
            {hospitals.map(hospital => (
              <div key={hospital} className="flex items-center">
                <MapPin className="h-6 w-6 text-accent mr-4" />
                <span className="font-semibold text-deep-navy">{hospital}</span>
              </div>
            ))}
          </div>
          <Link href="/hospitals" className="bg-accent text-white px-8 py-3 rounded-full text-base font-semibold hover:bg-opacity-90 transition-all mt-8 inline-block">
            View All Locations & Schedules
          </Link>
        </div>
        <div className="lg:w-1/2">
          <iframe
            src="https://www.google.com/maps/d/u/0/embed?mid=1QJH1wsCRUQDIJycZrN2_nwwSB71drsI&ehbc=2E312F&noprof=1"
            width="100%"
            height="480"
            className="rounded-lg shadow-2xl border-0"
            title="Hospital Network Map"
          ></iframe>
        </div>
      </div>
    </Section>
  );
}
