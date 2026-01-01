import React from 'react';
import Section from '../components/ui/Section';
import { team } from '../data/mockData';
import { BookOpen, Languages, Mic } from 'lucide-react';
import { useModal } from '../context/ModalContext';

const ConsultantsPage: React.FC = () => {
  const { openModal } = useModal();

  return (
    <div className="bg-white">
      <Section title="Our Consultants" subtitle="A TEAM OF DEDICATED EXPERTS">
        <p className="max-w-3xl mx-auto text-center text-lg text-neutral-800 mb-12">
          Geneomm is proud to collaborate with a distinguished team of medical experts, each a leader in their respective field. Our multidisciplinary approach ensures that every patient receives comprehensive, holistic care tailored to their unique genetic profile.
        </p>
        <div className="space-y-12">
          {team.map((consultant, index) => (
            <div key={index} className="bg-neutral rounded-lg shadow-md p-6 sm:p-8 grid md:grid-cols-3 gap-8 items-start">
              <div className="md:col-span-1 text-center">
                <img src={consultant.image} alt={consultant.name} className="w-40 h-40 sm:w-48 sm:h-48 rounded-full object-cover mx-auto mb-4 shadow-lg border-4 border-white" />
                <h3 className="text-2xl font-serif font-bold text-deep-navy">{consultant.name}</h3>
                <p className="text-primary font-semibold">{consultant.title}</p>
                <button
                  onClick={openModal}
                  className="mt-4 bg-primary text-white w-full px-4 py-2.5 rounded-full text-sm font-semibold hover:bg-opacity-90 transition-all"
                >
                  Book Appointment
                </button>
              </div>
              <div className="md:col-span-2">
                <p className="text-neutral-800 mb-6 text-base">{consultant.experience}</p>
                
                <div className="space-y-4">
                    <div className="border-t border-gray-200 pt-4">
                      <h4 className="font-semibold text-deep-navy mb-2 flex items-center"><BookOpen size={18} className="mr-2 text-secondary" />Qualifications</h4>
                      <p className="text-sm text-neutral-800">{consultant.qualifications}</p>
                    </div>

                    <div className="border-t border-gray-200 pt-4">
                      <h4 className="font-semibold text-deep-navy mb-3 flex items-center"><Mic size={18} className="mr-2 text-secondary" />Special Interests</h4>
                      <div className="flex flex-wrap gap-2">
                        {consultant.specialInterests.map(interest => (
                          <span key={interest} className="bg-secondary/10 text-secondary text-xs font-semibold px-2 py-1 rounded-full">{interest}</span>
                        ))}
                      </div>
                    </div>

                     <div className="border-t border-gray-200 pt-4">
                      <h4 className="font-semibold text-deep-navy mb-2 flex items-center"><Languages size={18} className="mr-2 text-secondary" />Languages Spoken</h4>
                      <p className="text-sm text-neutral-800">{consultant.languages.join(', ')}</p>
                    </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
};

export default ConsultantsPage;
