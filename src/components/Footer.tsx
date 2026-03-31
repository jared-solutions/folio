

import { Facebook, Twitter, Instagram, Linkedin, Github } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa'; 
import { FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-portfolio-navy text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Jared Mogonchi</h3>
            <p className="text-gray-300 mb-4">
              A passionate full-stack developer creating innovative web solutions for real-world problems.
            </p>
            <div className="flex items-center space-x-4 text-gray-300">
            <a
  href="https://mail.google.com/mail/?view=cm&fs=1&to=ombongijared2@gmail.com"
  target="_blank"
  rel="noopener noreferrer"
  className="flex items-center space-x-2 hover:underline"
>
  <FaEnvelope size={18} color="#EA4335" />
  <span className="text-white">ombongijared2@gmail.com</span>
</a>

</div>

<div className="flex items-center space-x-4 text-gray-300 mt-2">
  <a href="tel:+254710464858" className="flex items-center space-x-2 hover:underline">
    <FaPhoneAlt size={18} color="#25D366" />
    <span className="text-white">+254 710 464 858</span>
  </a>
</div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-300">
              <li>
                <a href="/" className="hover:text-portfolio-gold transition-colors">Home</a>
              </li>
              <li>
                <a href="/about" className="hover:text-portfolio-gold transition-colors">About</a>
              </li>
              <li>
                <a href="/projects" className="hover:text-portfolio-gold transition-colors">Projects</a>
              </li>
              <li>
                <a href="/contact" className="hover:text-portfolio-gold transition-colors">Contact</a>
              </li>
            </ul>
          </div>
          
          <div>
  <h3 className="text-xl font-bold mb-4">Connect</h3>
  <div className="flex space-x-4">
    <a
      href="https://www.facebook.com/web.dev.578960?mibextid=rS40aB7S9Ucbxw6v"
      target="_blank"
      rel="noopener noreferrer"
      className="w-10 h-10 rounded-full bg-[#1877F2] text-white flex items-center justify-center hover:opacity-80 transition-colors"
    >
      <Facebook size={20} />
    </a>
    <a
      href="https://x.com/JaredOmbongi1"
      target="_blank"
      rel="noopener noreferrer"
      className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center hover:opacity-80 transition-colors"
    >
      <Twitter size={20} />
    </a>
    <a
      href="https://www.instagram.com/thecodejar?igsh=MXRmMHIzdnRva2pscA=="
      target="_blank"
      rel="noopener noreferrer"
      className="w-10 h-10 rounded-full bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 text-white flex items-center justify-center hover:opacity-80 transition-colors"
    >
      <Instagram size={20} />
    </a>
    <a
      href="https://www.linkedin.com/in/jared-ombongi-b9187127b?utm_source=share_via&utm_content=profile&utm_medium=member_android"
      target="_blank"
      rel="noopener noreferrer"
      className="w-10 h-10 rounded-full bg-[#0A66C2] text-white flex items-center justify-center hover:opacity-80 transition-colors"
    >
      <Linkedin size={20} />
    </a>
    <a
      href="https://github.com/jared-solutions"
      target="_blank"
      rel="noopener noreferrer"
      className="w-10 h-10 rounded-full bg-[#333] text-white flex items-center justify-center hover:opacity-80 transition-colors"
    >
      <Github size={20} />
    </a>
    <a
      href="https://www.tiktok.com/@code.jar"
      target="_blank"
      rel="noopener noreferrer"
      className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center hover:opacity-80 transition-colors"
    >
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z"/></svg>
    </a>
    <a
      href="https://wa.me/+254710464858" 
      target="_blank"
      rel="noopener noreferrer"
      className="w-10 h-10 rounded-full bg-[#25D366] text-white flex items-center justify-center hover:opacity-80 transition-colors"
    >
      <FaWhatsapp size={20} />
    </a>
  </div>
</div>
        </div>
        
        <div className="border-t border-white/10 mt-8 pt-8 text-center text-gray-300">
          <p>&copy; {currentYear} Jared Mogonchi. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
