import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import aalogo from '../public/logo.jpeg';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navItems = [
    { name: 'HOME', path: '/' },
    { name: 'SERVICES', path: '/services' },
    { name: 'RETAIL', path: '/retail' },
    { name: 'INDUSTRIAL', path: '/industrial' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-gray-200 shadow-md' : 'bg-white'}`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className={`flex items-center text-2xl font-bold ${isScrolled ? 'text-[#8d6a39]' : 'text-[#8d6a39]'}`}>
            <img src={aalogo} alt="Logo" className="mr-2 h-10 w-10 rounded-full" />
            MK Granites
          </Link>
          <div className="hidden md:flex flex-1 justify-center space-x-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`${isScrolled ? 'text-black hover:text-[#8d6a39] px-1' : 'px-1 text-black hover:text-[#8d6a39]'}`}
              >
                {item.name}
              </Link>
            ))}
          </div>
          <div className="hidden md:flex">
            <Link
              to="/contact"
              className="bg-primary text-white font-bold py-2 px-4 rounded-full hover:bg-primary-dark transition-colors duration-300"
            >
              Contact Us
            </Link>
          </div>
          <button className={`md:hidden ${isScrolled ? 'text-[#8d6a39]' : 'text-[#8d6a39]'}`} onClick={toggleMenu}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      {isOpen && (
        <div className={`md:hidden items-center ${isScrolled ? 'bg-primary' : 'bg-primary bg-opacity-90'}`}>
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={`block py-2 px-4 text-sm ${isScrolled ? 'text-white hover:bg-primary-dark' : 'text-white hover:bg-primary-dark'}`}
              onClick={toggleMenu}
            >
              {item.name}
            </Link>
          ))}
          <Link
            to="/contact"
            className="block py-2 px-4 text-sm text-white hover:bg-primary-dark"
            onClick={toggleMenu}
          >
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
