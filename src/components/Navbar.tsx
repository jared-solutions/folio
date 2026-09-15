import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Command as CommandIcon, ArrowUpRight } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';
import { CommandMenu } from './CommandMenu';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [commandOpen, setCommandOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Overview', path: '/' },
    { name: 'Projects', path: '/projects' },
    { name: 'Services', path: '/services' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' }
  ];

  const isActive = (path: string) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-40 px-4 sm:px-6 pt-4 pb-2 transition-all duration-300">
        <div
          className={`max-w-5xl mx-auto rounded-full px-4 sm:px-6 py-2.5 flex items-center justify-between transition-all duration-300 ${
            scrolled
              ? 'glass-pill shadow-xl shadow-black/10 dark:shadow-emerald-950/10'
              : 'bg-background/80 backdrop-blur-md border border-border/60'
          }`}
        >
          {/* Logo & Status */}
          <div className="flex items-center gap-3">
            <Link
              to="/"
              className="group flex items-center gap-2 font-bold text-lg tracking-tight text-foreground transition-colors"
            >
              <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-mono text-sm group-hover:bg-emerald-500 group-hover:text-black transition-all">
                JM
              </span>
              <span className="hidden sm:inline font-semibold">
                Jared<span className="text-emerald-400">.dev</span>
              </span>
            </Link>

            <div className="hidden lg:flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[11px] font-medium text-emerald-400">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Available for Q3/Q4 Roles
            </div>
          </div>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const active = isActive(link.path);
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${
                    active
                      ? 'bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 font-semibold'
                      : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Right Action Tools */}
          <div className="flex items-center gap-2">
            {/* Quick Command Trigger */}
            <button
              onClick={() => setCommandOpen(true)}
              className="hidden sm:flex items-center gap-2 px-2.5 py-1 rounded-full bg-muted/60 hover:bg-muted border border-border/80 text-muted-foreground text-xs transition-colors"
              title="Open Command Palette (Cmd + K)"
            >
              <CommandIcon className="w-3 h-3 text-emerald-400" />
              <span className="text-[11px]">Quick Jump</span>
              <kbd className="font-mono text-[9px] px-1 py-0.2 bg-background/80 rounded border border-border">
                ⌘K
              </kbd>
            </button>

            <ThemeToggle />

            {/* Resume button */}
            <a
              href="/Jared_Mogonchi_CV.pdf"
              download="Jared_Mogonchi_CV.pdf"
              className="hidden lg:inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500 text-slate-950 hover:bg-emerald-400 transition-colors shadow-sm"
            >
              Resume <ArrowUpRight className="w-3 h-3" />
            </a>

            {/* Mobile Menu Toggle */}
            <button
              className="md:hidden p-1.5 text-muted-foreground hover:text-foreground"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Nav Dropdown */}
        {isOpen && (
          <div className="md:hidden max-w-5xl mx-auto mt-2 p-3 rounded-2xl glass-card animate-fade-in">
            <div className="flex flex-col space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`px-4 py-2 rounded-xl text-sm font-medium transition-colors ${
                    isActive(link.path)
                      ? 'bg-emerald-500/15 text-emerald-400 font-semibold'
                      : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-2 border-t border-border flex items-center justify-between px-2">
                <button
                  onClick={() => {
                    setIsOpen(false);
                    setCommandOpen(true);
                  }}
                  className="text-xs text-muted-foreground flex items-center gap-1.5"
                >
                  <CommandIcon className="w-3.5 h-3.5 text-emerald-400" /> Open Command Menu (⌘K)
                </button>
                <a
                  href="/Jared_Mogonchi_CV.pdf"
                  download="Jared_Mogonchi_CV.pdf"
                  className="text-xs text-emerald-400 font-semibold hover:underline"
                >
                  Download CV →
                </a>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Global Command Palette */}
      <CommandMenu open={commandOpen} onOpenChange={setCommandOpen} />
    </>
  );
};

export default Navbar;
