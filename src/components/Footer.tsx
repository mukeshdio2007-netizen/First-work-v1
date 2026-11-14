import React from 'react';
import { ChevronUp, Github, Linkedin, Twitter } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#020817] text-white border-t border-slate-800 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800">
          
          <div className="lg:col-span-2 space-y-4">
            <a href="#home" className="inline-block">
              <img 
                src="/assets/logos/STUZEN_Logo_White.png" 
                alt="STUZEN TECHNOLOGIES" 
                className="h-10 w-auto object-contain" 
              />
            </a>
            <p className="text-xs font-mono text-[#00D4F5] uppercase tracking-widest font-semibold">
              Learn. Build. Innovate.
            </p>
            <p className="text-sm text-slate-400 max-w-sm leading-relaxed">
              An emerging technology startup focused on learning, building, and creating meaningful digital solutions with engineering rigor.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a href="https://github.com" target="_blank" rel="noreferrer" className="w-8 h-8 rounded bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-[#00D4F5] hover:border-[#00D4F5] transition-colors" aria-label="GitHub">
                <Github className="w-4 h-4" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="w-8 h-8 rounded bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-[#00D4F5] hover:border-[#00D4F5] transition-colors" aria-label="LinkedIn">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" className="w-8 h-8 rounded bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-[#00D4F5] hover:border-[#00D4F5] transition-colors" aria-label="Twitter">
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div className="space-y-3">
            <h5 className="text-xs font-mono uppercase tracking-wider text-[#00D4F5] font-semibold">Navigation</h5>
            <ul className="space-y-2 text-sm text-slate-400 font-heading">
              <li><a href="#home" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Services</a></li>
              <li><a href="#solutions" className="hover:text-white transition-colors">Solutions</a></li>
              <li><a href="#workflow" className="hover:text-white transition-colors">Approach</a></li>
              <li><a href="#why-us" className="hover:text-white transition-colors">Why Choose Us</a></li>
            </ul>
          </div>

          <div className="space-y-3">
            <h5 className="text-xs font-mono uppercase tracking-wider text-[#00D4F5] font-semibold">Capabilities</h5>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><a href="#services" className="hover:text-white transition-colors">Custom Software</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Cloud & DevOps</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Applied AI Tools</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Design Systems</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Web Applications</a></li>
            </ul>
          </div>

          <div className="space-y-3">
            <h5 className="text-xs font-mono uppercase tracking-wider text-[#00D4F5] font-semibold">Communication</h5>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><a href="mailto:contact@stuzen.tech" className="hover:text-white transition-colors">contact@stuzen.tech</a></li>
              <li><span className="text-slate-500">[Bangalore Hub / India]</span></li>
            </ul>
          </div>

        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>&copy; 2026 STUZEN TECHNOLOGIES. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span className="font-mono text-slate-400">Brand Motto: Learn &bull; Build &bull; Innovate</span>
            <button 
              onClick={scrollToTop}
              className="text-slate-400 hover:text-[#00D4F5] flex items-center gap-1 transition-colors"
            >
              <span>Back to Top</span>
              <ChevronUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
