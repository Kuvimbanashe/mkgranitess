import React from 'react';
import { Hammer, Wrench, MessageCircle, Scissors, PenTool, Brush } from 'lucide-react';

const services = [
  { title: 'Custom Fabrication', description: 'Tailored granite solutions for your unique needs', icon: Scissors },
  { title: 'Installation', description: 'Professional installation of granite countertops and flooring', icon: Hammer },
  { title: 'Maintenance', description: 'Regular maintenance and repair services for granite surfaces', icon: Wrench },
  { title: 'Consultation', description: 'Expert advice on choosing the right granite for your project', icon: MessageCircle },
  { title: 'Gravesite Design', description: 'Custom gravesite designs with high-quality granite', icon: PenTool },
  { title: 'Gravesite Maintenance', description: 'Ongoing care and maintenance for gravesites', icon: Brush },
];

const Services = () => {
  return (
    <div className="bg-gradient-to-b from-gray-100 to-white min-h-screen py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-12 text-primary text-center">Our Services</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105">
              {React.createElement(service.icon, { className: "w-12 h-12 text-primary mb-4" })}
              <h2 className="text-xl font-semibold mb-2 text-secondary">{service.title}</h2>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Services;
