import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { useModal } from '../../context/ModalContext';

const AppointmentModal: React.FC = () => {
  const { isModalOpen, closeModal } = useModal();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Appointment request submitted! Our team will contact you shortly.');
    closeModal();
  };

  return (
    <AnimatePresence>
      {isModalOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto"
          onClick={closeModal}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="bg-white rounded-lg shadow-xl w-full max-w-lg relative my-8 max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-6 md:p-8">
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
                aria-label="Close modal"
              >
                <X size={24} />
              </button>

              <h2 className="text-2xl md:text-3xl font-serif font-bold text-deep-navy mb-2">Book an Appointment</h2>
              <p className="text-neutral-800 mb-6">Fill out the form below and our team will contact you shortly.</p>

              <form className="space-y-4" onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="modal-name" className="block text-sm font-medium text-neutral-800">Patient's Full Name</label>
                  <input type="text" id="modal-name" required className="mt-1 block w-full px-4 py-2.5 text-base border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary" />
                </div>
                <div>
                  <label htmlFor="modal-phone" className="block text-sm font-medium text-neutral-800">Phone Number</label>
                  <input type="tel" id="modal-phone" required className="mt-1 block w-full px-4 py-2.5 text-base border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary" />
                </div>
                <div>
                  <label htmlFor="modal-email" className="block text-sm font-medium text-neutral-800">Email Address</label>
                  <input type="email" id="modal-email" required className="mt-1 block w-full px-4 py-2.5 text-base border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary" />
                </div>
                <div>
                  <label htmlFor="modal-inquiry" className="block text-sm font-medium text-neutral-800">Type of Consultation</label>
                  <select id="modal-inquiry" className="mt-1 block w-full px-4 py-2.5 text-base border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary bg-white appearance-none">
                    <option>New Patient Appointment</option>
                    <option>Second Opinion</option>
                    <option>Genetic Counseling</option>
                    <option>Follow-up Visit</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="modal-preference" className="block text-sm font-medium text-neutral-800">Preferred Mode</label>
                  <select id="modal-preference" className="mt-1 block w-full px-4 py-2.5 text-base border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary bg-white appearance-none">
                    <option>In-Person (Coimbatore)</option>
                    <option>Virtual Consultation</option>
                  </select>
                </div>
                <div className="pt-4">
                  <button type="submit" className="w-full bg-primary text-white px-6 py-3 rounded-full text-base font-semibold hover:bg-opacity-90 transition-all">
                    Request Appointment
                  </button>
                </div>
              </form>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default AppointmentModal;
