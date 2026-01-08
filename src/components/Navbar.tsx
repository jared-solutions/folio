
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Add scroll listener to change navbar style when scrolling
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Services', path: '/services' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 dark:bg-gray-900/90 shadow-md backdrop-blur-md py-3' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-portfolio-burgundy">
          Jaredfolio
        </Link>
        
        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="link-underline font-medium text-gray-700 hover:text-portfolio-burgundy dark:text-gray-300 dark:hover:text-portfolio-gold"
            >
              {link.name}
            </Link>
          ))}
          <ThemeToggle />
        </div>

        {/* Mobile Nav Toggle */}
        <div className="md:hidden flex items-center space-x-2">
          <ThemeToggle />
          <button className="text-gray-700 dark:text-gray-300" onClick={toggleMenu}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Nav Menu */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-gray-800 shadow-lg animate-fade-in">
          <div className="container mx-auto px-4 py-3 flex flex-col space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="font-medium text-gray-700 dark:text-gray-300 hover:text-portfolio-burgundy dark:hover:text-portfolio-gold py-2 px-4 hover:bg-gray-50 dark:hover:bg-gray-700 rounded"
                onClick={toggleMenu}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
