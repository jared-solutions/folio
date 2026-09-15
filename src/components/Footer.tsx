import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, ArrowUpRight, Github, Linkedin, Twitter, MessageCircle } from 'lucide-react';
import { FaWhatsapp, FaGithub, FaLinkedin, FaXTwitter } from 'react-icons/fa6';

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [time, setTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString('en-US', {
          timeZone: 'Africa/Nairobi',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: false,
        })
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="border-t border-white/10 bg-card/60 backdrop-blur-md text-foreground">
      <div className="container mx-auto px-4 max-w-6xl py-14">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          
          {/* Brand & Mission (Col 5) */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2">
              <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-mono text-sm font-bold">
                JM
              </span>
              <span className="text-lg font-bold tracking-tight">
                Jared Mogonchi
              </span>
            </div>

            <p className="text-sm text-muted-foreground leading-relaxed max-w-sm">
              Full-Stack Software Engineer & Backend Specialist. Architecting high-throughput distributed systems, secure REST APIs, and modern web applications.
            </p>

            <div className="flex items-center gap-2 text-xs font-mono text-emerald-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>All systems nominal • Ready for new deployments</span>
            </div>
          </div>

          {/* Quick Navigation (Col 3) */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-muted-foreground">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-emerald-400 transition-colors">
                  Overview & Telemetry
                </Link>
              </li>
              <li>
                <Link to="/projects" className="text-muted-foreground hover:text-emerald-400 transition-colors">
                  Systems & Architectures
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-muted-foreground hover:text-emerald-400 transition-colors">
                  Technical Capabilities
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-emerald-400 transition-colors">
                  Experience & Background
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-muted-foreground hover:text-emerald-400 transition-colors">
                  Contact & Inquiries
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Location (Col 4) */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-xs font-mono uppercase tracking-wider text-muted-foreground">
              Contact & Location
            </h4>

            <div className="space-y-2 text-sm">
              <a
                href="mailto:ombongijared2@gmail.com"
                className="flex items-center gap-2 text-muted-foreground hover:text-emerald-400 transition-colors"
              >
                <Mail className="w-4 h-4 text-emerald-400" />
                <span>ombongijared2@gmail.com</span>
              </a>

              <a
                href="tel:+254710464858"
                className="flex items-center gap-2 text-muted-foreground hover:text-emerald-400 transition-colors"
              >
                <Phone className="w-4 h-4 text-emerald-400" />
                <span>+254 710 464 858</span>
              </a>

              <div className="pt-2 text-xs font-mono text-muted-foreground flex items-center gap-2">
                <span>📍 Nairobi, Kenya (UTC+3):</span>
                <span className="text-foreground font-semibold">{time || '17:00:00'}</span>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://github.com/jared-solutions"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-xl bg-card border border-border text-muted-foreground hover:text-foreground hover:border-emerald-500/40 transition-all"
                title="GitHub"
              >
                <FaGithub className="w-4 h-4" />
              </a>
              <a
                href="https://www.linkedin.com/in/jared-ombongi-b9187127b"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-xl bg-card border border-border text-muted-foreground hover:text-foreground hover:border-emerald-500/40 transition-all"
                title="LinkedIn"
              >
                <FaLinkedin className="w-4 h-4" />
              </a>
              <a
                href="https://x.com/JaredOmbongi1"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-xl bg-card border border-border text-muted-foreground hover:text-foreground hover:border-emerald-500/40 transition-all"
                title="Twitter / X"
              >
                <FaXTwitter className="w-4 h-4" />
              </a>
              <a
                href="https://wa.me/254710464858"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-xl bg-card border border-border text-muted-foreground hover:text-foreground hover:border-emerald-500/40 transition-all"
                title="WhatsApp"
              >
                <FaWhatsapp className="w-4 h-4 text-emerald-400" />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-border/60 flex flex-col sm:flex-row items-center justify-between text-xs text-muted-foreground gap-4">
          <p>© {currentYear} Jared Mogonchi. Built with React 18, TypeScript, Tailwind & Spring/Django Architecture.</p>
          <div className="flex items-center gap-2">
            <span>Press <kbd className="font-mono px-1 py-0.5 rounded bg-muted border border-border text-[10px]">⌘K</kbd> for command palette</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
