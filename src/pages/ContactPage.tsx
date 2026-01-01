import React from 'react';
import Section from '../components/ui/Section';
import { Mail, Phone, MapPin, Instagram, Youtube, Facebook } from 'lucide-react';

const ContactPage: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    try {
      alert('Message sent successfully! We will get back to you soon.');
    } catch (error) {
      console.error('Error sending message:', error);
      alert('Failed to send message. Please try again.');
    }
  };

  return (
    <div className="bg-white">
      <Section title="Contact Us" subtitle="GET IN TOUCH">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-neutral p-6 sm:p-8 rounded-lg">
            <h3 className="text-2xl font-serif font-bold text-deep-navy mb-6">Send Us a Message</h3>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-neutral-800">Full Name</label>
                <input type="text" id="name" required className="mt-1 block w-full px-4 py-2.5 text-base border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-neutral-800">Email Address</label>
                <input type="email" id="email" required className="mt-1 block w-full px-4 py-2.5 text-base border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary" />
              </div>
              <div>
                <label htmlFor="inquiry" className="block text-sm font-medium text-neutral-800">Type of Inquiry</label>
                <select id="inquiry" className="mt-1 block w-full px-4 py-2.5 text-base border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary bg-white">
                  <option>New Patient Appointment</option>
                  <option>Second Opinion</option>
                  <option>General Query</option>
                  <option>Visiting Hospital Inquiry</option>
                </select>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-neutral-800">Message</label>
                <textarea id="message" rows={5} required className="mt-1 block w-full px-4 py-2.5 text-base border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary"></textarea>
              </div>
              <div>
                <button type="submit" className="w-full bg-primary text-white px-6 py-3 rounded-full text-base font-semibold hover:bg-opacity-90 transition-all">
                  Send Message
                </button>
              </div>
            </form>
          </div>

          {/* Contact Details */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-serif font-bold text-deep-navy mb-4">Contact Information</h3>
              <p className="text-neutral-800 mb-6">We are here to help. Reach out to us through any of the channels below, and our team will assist you.</p>
              <ul className="space-y-4 text-lg">
                <li className="flex items-center">
                  <Phone size={24} className="mr-4 text-primary flex-shrink-0" />
                  <div>
                    <span className="font-semibold text-base">Mobile/WhatsApp:</span> <a href="tel:+917373146666" className="hover:text-primary block text-base">+91 73731 46666</a>
                  </div>
                </li>
                <li className="flex items-center">
                  <Phone size={24} className="mr-4 text-primary flex-shrink-0" />
                  <div>
                    <span className="font-semibold text-base">Landline:</span> <a href="tel:+914222575666" className="hover:text-primary block text-base">0422 2575666</a>
                  </div>
                </li>
                <li className="flex items-center">
                  <Mail size={24} className="mr-4 text-primary flex-shrink-0" />
                  <div>
                    <span className="font-semibold text-base">Email:</span> <a href="mailto:geneomm@gmail.in" className="hover:text-primary block text-base">geneomm@gmail.in</a>
                  </div>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-serif font-bold text-deep-navy mb-4">Connect With Us</h3>
              <div className="flex flex-wrap gap-4 mb-8">
                <a
                  href="https://www.instagram.com/geneomm_medical_center_/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg hover:opacity-90 transition-opacity shadow-md hover:scale-105 transform duration-200"
                >
                  <Instagram className="mr-2" size={20} />
                  <span className="font-semibold">Instagram</span>
                </a>
                <a
                  href="https://www.youtube.com/@doctorpradeep"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center px-6 py-3 bg-red-600 text-white rounded-lg hover:opacity-90 transition-opacity shadow-md hover:scale-105 transform duration-200"
                >
                  <Youtube className="mr-2" size={20} />
                  <span className="font-semibold">YouTube</span>
                </a>
                <a
                  href="https://www.facebook.com/GeneOmmCoimbatore7373146666/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:opacity-90 transition-opacity shadow-md hover:scale-105 transform duration-200"
                >
                  <Facebook className="mr-2" size={20} />
                  <span className="font-semibold">Facebook</span>
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-serif font-bold text-deep-navy mb-4">Our Clinic</h3>
              <div className="flex items-start">
                <MapPin size={32} className="mr-4 text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold">N-79, Ramanujam Nagar,</p>
                  <p className="text-neutral-800">(Near Rangasamy Gounder Kalyana Mandapam),</p>
                  <p className="text-neutral-800">Off Kamarajar Road (Hopes to Singanallur Road),</p>
                  <p className="text-neutral-800">Uppilipalayam, Coimbatore 641 015,</p>
                  <p className="text-neutral-800">Tamil Nadu, India</p>
                </div>
              </div>
            </div>
            <div className="w-full h-64 rounded-lg overflow-hidden shadow-md">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.2577410627755!2d77.02347019999999!3d11.0192787!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba857c1322d623f%3A0x766e49c9e6be556d!2sGeneomm%20Medical%20Centre!5e0!3m2!1sen!2sin!4v1762374017070!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Geneomm Clinic Location"
              ></iframe>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default ContactPage;
