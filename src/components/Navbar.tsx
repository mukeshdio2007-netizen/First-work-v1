import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';

interface NavbarProps {
  onContactClick?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onContactClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['home', 'about', 'services', 'solutions', 'workflow', 'why-us', 'contact'];
      const scrollPos = window.scrollY + 140;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home', id: 'home' },
    { label: 'About', href: '#about', id: 'about' },
    { label: 'Services', href: '#services', id: 'services' },
    { label: 'Solutions', href: '#solutions', id: 'solutions' },
    { label: 'Approach', href: '#workflow', id: 'workflow' },
    { label: 'Why Us', href: '#why-us', id: 'why-us' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ];

  return (
    <>
      <div className="h-[3px] bg-gradient-to-r from-[#00D4F5] to-[#008CFF] fixed top-0 left-0 w-full z-50" />
      <header className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
        isScrolled ? 'bg-[#020817]/90 backdrop-blur-md border-b border-[#00D4F5]/20 shadow-xl' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          
          <a href="#home" className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-[#00D4F5] rounded-md p-1">
            <img 
              src="/assets/logos/STUZEN_Logo_White.png" 
              alt="STUZEN TECHNOLOGIES" 
              className="h-10 w-auto object-contain transition-transform group-hover:scale-105" 
            />
          </a>

          <nav className="hidden md:flex items-center gap-8" aria-label="Main Navigation">
            {navLinks.map((item) => (
              <a
                key={item.id}
                href={item.href}
                className={`text-sm font-medium transition-colors py-1 ${
                  activeSection === item.id
                    ? 'text-[#00D4F5] border-b-2 border-[#00D4F5]'
                    : 'text-slate-300 hover:text-[#00D4F5]'
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <a
              href="#contact"
              onClick={onContactClick}
              className="bg-gradient-to-r from-[#00D4F5] to-[#008CFF] text-white text-xs font-heading font-semibold uppercase tracking-wider py-2.5 px-5 rounded-lg flex items-center gap-1.5 shadow-md hover:shadow-cyan-500/25 transition-all hover:-translate-y-0.5"
            >
              <span>Get in Touch</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-slate-300 hover:text-[#00D4F5] p-2 focus:outline-none focus:ring-2 focus:ring-[#00D4F5] rounded-lg"
            aria-label="Toggle menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden bg-[#020817]/95 border-b border-[#00D4F5]/20 backdrop-blur-xl px-6 pt-4 pb-8 space-y-4">
            <div className="flex flex-col space-y-3 font-heading">
              {navLinks.map((item) => (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-slate-200 hover:text-[#00D4F5] py-2 text-base border-b border-slate-800"
                >
                  {item.label}
                </a>
              ))}
            </div>
            <div className="pt-2">
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center block bg-gradient-to-r from-[#00D4F5] to-[#008CFF] text-white text-sm font-semibold py-3 rounded-lg shadow-md"
              >
                Get in Touch
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
