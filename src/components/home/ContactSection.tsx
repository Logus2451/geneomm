import React from 'react';
import Section from '../ui/Section';
import { Phone, Mail, MapPin, Instagram, Youtube, Facebook } from 'lucide-react';

const ContactSection: React.FC = () => {
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
    <Section title="Get In Touch" subtitle="CONTACT US" className="bg-white">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
        <div className="bg-neutral p-8 rounded-lg">
          <h3 className="text-2xl font-serif font-bold text-deep-navy mb-6">Send Us a Message</h3>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-neutral-800">Full Name</label>
              <input type="text" id="name" required className="mt-1 block w-full px-4 py-2.5 border border-gray-300 rounded-md focus:ring-primary focus:border-primary" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-neutral-800">Email Address</label>
              <input type="email" id="email" required className="mt-1 block w-full px-4 py-2.5 border border-gray-300 rounded-md focus:ring-primary focus:border-primary" />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-neutral-800">Phone Number</label>
              <input type="tel" id="phone" className="mt-1 block w-full px-4 py-2.5 border border-gray-300 rounded-md focus:ring-primary focus:border-primary" />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-neutral-800">Message</label>
              <textarea id="message" rows={4} required className="mt-1 block w-full px-4 py-2.5 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"></textarea>
            </div>
            <button type="submit" className="w-full bg-primary text-white px-6 py-3 rounded-full font-semibold hover:bg-opacity-90 transition-all">
              Send Message
            </button>
          </form>
        </div>
        <div className="space-y-6">
          <div>
            <h3 className="text-2xl font-serif font-bold text-deep-navy mb-6">Contact Information</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <Phone className="text-primary h-6 w-6 mr-4 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-deep-navy">Phone</p>
                  <a href="tel:+917373146666" className="text-neutral-800 hover:text-primary">+91 73731 46666</a>
                </div>
              </div>
              <div className="flex items-start">
                <Mail className="text-primary h-6 w-6 mr-4 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-deep-navy">Email</p>
                  <a href="mailto:geneomm@gmail.in" className="text-neutral-800 hover:text-primary">geneomm@gmail.in</a>
                </div>
              </div>
              <div className="flex items-start">
                <MapPin className="text-primary h-6 w-6 mr-4 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-deep-navy">Address</p>
                  <div>
                    <p className="font-semibold">N-79, Ramanujam Nagar,</p>
                    <p className="text-neutral-800">(Near Rangasamy Gounder Kalyana Mandapam),</p>
                    <p className="text-neutral-800">Off Kamarajar Road (Hopes to Singanallur Road),</p>
                    <p className="text-neutral-800">Uppilipalayam, Coimbatore 641 015,</p>
                    <p className="text-neutral-800">Tamil Nadu, India</p>
                  </div>
                </div>
              </div>
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


          </div>
        </div>
      </div>
    </Section>
  );
};

export default ContactSection;
