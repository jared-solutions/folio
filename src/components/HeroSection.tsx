import React, { useState, useEffect } from 'react';
import { ArrowDown } from 'lucide-react';
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaLinkedin,
  FaGithub,
  FaWhatsapp
} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

interface HeroSectionProps {
  guestName?: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ guestName = 'My Guest' }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  const texts = ["Full-Stack Software Engineer", "Backend Engineer (Java & Spring Boot)"];

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 200 && scrollY < 1000);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Typewriter effect
  useEffect(() => {
    const currentText = texts[currentIndex];
    
    if (isTyping) {
      if (displayText.length < currentText.length) {
        const timeout = setTimeout(() => {
          setDisplayText(currentText.slice(0, displayText.length + 1));
        }, 100);
        return () => clearTimeout(timeout);
      } else {
        // Pause after typing complete
        const timeout = setTimeout(() => {
          setIsTyping(false);
        }, 2000);
        return () => clearTimeout(timeout);
      }
    } else {
      // Deleting effect
      if (displayText.length > 0) {
        const timeout = setTimeout(() => {
          setDisplayText(displayText.slice(0, -1));
        }, 50);
        return () => clearTimeout(timeout);
      } else {
        // Move to next text
        setCurrentIndex((prev) => (prev + 1) % texts.length);
        setIsTyping(true);
      }
    }
  }, [displayText, currentIndex, isTyping, texts]);

  return (
    <section className="relative min-h-screen flex items-center bg-black text-white overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/uploads/image2.png"
          alt="Jared Mogonchi"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Hero content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 md:ml-auto md:pl-4 lg:pl-12 mb-8 md:mb-0 md:text-right px-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <motion.h2
                className="text-2xl mb-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                Hello, <span className="text-green-600 font-bold">{guestName}</span>
              </motion.h2>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <h3 className="text-xl mb-2 lg:mb-6">My name is</h3>
                <h1 className="text-4xl lg:text-6xl font-bold mb-2 lg:mb-4">
                  Jared <span className="text-green-600">Mogonchi</span>
                </h1>
                <h3 className="text-lg lg:text-xl mb-4 lg:mb-6">And I'm a:</h3>
                <div className="text-2xl lg:text-3xl font-bold mb-6 lg:mb-8 h-12 lg:h-10">
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="text-green-600"
                  >
                    {displayText}
                    <span className="animate-pulse">|</span>
                  </motion.span>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="mt-8 lg:mt-12"
              >
                <Link
                  to="/contact"
                  className="border border-green-600 text-green-600 hover:bg-green-600 hover:text-black transition-colors px-8 py-3 rounded-full font-medium inline-flex items-center justify-center"
                >
                  Hire Me <ArrowDown size={18} className="ml-2" />
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Floating Social Media Icons */}
      <motion.div
        className={`fixed top-1/3 left-0 z-50 transition-opacity duration-300 ${
          isScrolled ? 'opacity-100' : 'opacity-0'
        }`}
        initial={{ x: -60 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="flex flex-col space-y-4">
          {[
            {
              name: 'Facebook',
              href: 'https://www.facebook.com/web.dev.578960?mibextid=rS40aB7S9Ucbxw6v',
              bg: 'bg-blue-600',
              icon: <FaFacebook className="w-3 h-3" />
            },
            {
              name: 'X (Twitter)',
              href: 'https://x.com/JaredOmbongi1',
              bg: 'bg-black',
              icon: <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
            },
            {
              name: 'Instagram',
              href: 'https://www.instagram.com/thecodejar?igsh=MXRmMHIzdnRva2pscA==',
              bg: 'bg-gradient-to-tr from-purple-600 via-pink-500 to-orange-400',
              icon: <FaInstagram className="w-3 h-3" />
            },
            {
              name: 'LinkedIn',
              href: 'https://www.linkedin.com/in/jared-ombongi-b9187127b?utm_source=share_via&utm_content=profile&utm_medium=member_android',
              bg: 'bg-blue-700',
              icon: <FaLinkedin className="w-3 h-3" />
            },
            {
              name: 'GitHub',
              href: 'https://github.com/jared-solutions',
              bg: 'bg-gray-800',
              icon: <FaGithub className="w-3 h-3" />
            },
            {
              name: 'TikTok',
              href: 'https://www.tiktok.com/@code.jar',
              bg: 'bg-black',
              icon: <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24"><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z"/></svg>
            },
            {
              name: 'WhatsApp',
              href: 'https://wa.me/254710464858',
              bg: 'bg-green-600',
              icon: <FaWhatsapp className="w-3 h-3" />
            }
          ].map((icon, i) => (
            <motion.a
              key={i}
              href={icon.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`group relative flex items-center justify-center p-3 rounded-full ${icon.bg} text-white hover:scale-110 transition-transform duration-300`}
            >
              {icon.icon}
              <span className="absolute left-12 bg-black text-white text-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                {icon.name}
              </span>
            </motion.a>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
