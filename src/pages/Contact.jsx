import React from 'react';
import { Phone, MapPin, Mail, Facebook, Twitter} from 'lucide-react';
import { CIcon } from '@coreui/icons-react';
import { cibTiktok } from '@coreui/icons';
const Contact = () => {
  const emailAddress = 'admin@mkgranites.com';
  const emailSubject = 'Inquiry from Website';
  const emailBody = 'Hello, I have a question about your products/services.';
  const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${emailAddress}&su=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;

  return (
    <div className="min-h-screen py-12 flex flex-col items-center bg-gradient-to-b from-gray-100 to-white">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl font-bold mb-8 text-primary max-w-2xl mx-auto">Contact Us</h1>
        <div className="w-full md:w-1/2 p-8 mx-auto">
          <h2 className="text-2xl font-semibold mb-6 text-secondary">Get in Touch</h2>
          <div className="space-y-4">
            <p className="flex items-center justify-center text-gray-700">
              <Phone className="mr-4 text-primary" />
              <a href="tel:+263780714167" className="hover:text-primary transition-colors">+263 780 714 167</a>
              {" / "}
              <a href="tel:+263786442368" className="hover:text-primary transition-colors">+263 786 442 368</a>
            </p>
            <p className="flex items-center justify-center text-gray-700">
              <MapPin className="mr-4 text-primary" />
              54 Leroux Drive, Hillside, Harare, Zimbabwe
            </p>
            <p className="flex items-center justify-center text-gray-700">
              <Mail className="mr-4 text-primary" />
              <a href={gmailLink} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">{emailAddress}</a>
            </p>
          </div>
          <h3 className="text-xl font-semibold mt-8 mb-4 text-secondary">Follow Us</h3>
          <div className="flex justify-center space-x-4">
            <a href="#" className="text-primary hover:text-secondary transition-colors">
              <Facebook size={24} />
            </a>
            <a href="#" className="text-primary hover:text-secondary transition-colors">
              <Twitter size={24} />
            </a>
            <a href="#" className="text-primary hover:text-secondary transition-colors">
            <CIcon icon={cibTiktok} className=" text-primary h-6 w-5.5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
