import React from 'react';
import { ArrowDown, Mail, ShieldCheck } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section id="home" className="relative pt-32 pb-24 lg:pt-40 lg:pb-36 bg-[#020817] text-white overflow-hidden">
      {/* Background Lighting Gradients */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-[#008CFF]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 -right-32 w-[30rem] h-[30rem] bg-[#00D4F5]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Hero Copy */}
          <div className="lg:col-span-7 space-y-7 text-center lg:text-left">
            
            {/* Tagline Badge */}
            <div className="inline-flex items-center">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#00D4F5]/10 border border-[#00D4F5]/30 text-xs font-mono font-semibold tracking-wider text-[#00D4F5] uppercase">
                <span className="w-2 h-2 rounded-full bg-[#00D4F5] animate-ping" />
                STUZEN TECHNOLOGIES &bull; Learn. Build. Innovate.
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight tracking-tight font-heading">
              Building Tomorrow's <br className="hidden sm:inline" />
              <span className="bg-gradient-to-r from-[#00D4F5] to-[#008CFF] bg-clip-text text-transparent">
                Technology, Today.
              </span>
            </h1>

            {/* Supporting Text */}
            <p className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
              We are a technology-driven startup focused on learning, building, and creating meaningful digital solutions.
            </p>

            {/* Action Buttons */}
            <div className="pt-3 flex flex-wrap items-center justify-center lg:justify-start gap-4">
              <a 
                href="#solutions" 
                className="bg-gradient-to-r from-[#00D4F5] to-[#008CFF] text-white font-heading font-semibold text-base py-3.5 px-7 rounded-lg inline-flex items-center gap-2 shadow-lg hover:shadow-cyan-500/25 transition-all hover:-translate-y-0.5"
              >
                <span>Explore Our Work</span>
                <ArrowDown className="w-4 h-4" />
              </a>
              <a 
                href="#contact" 
                className="bg-white/5 border border-[#00D4F5]/30 text-white font-heading font-semibold text-base py-3.5 px-7 rounded-lg inline-flex items-center gap-2 hover:bg-[#00D4F5]/10 hover:border-[#00D4F5] hover:text-[#00D4F5] transition-all hover:-translate-y-0.5"
              >
                <span>Contact Us</span>
                <Mail className="w-4 h-4" />
              </a>
            </div>

            {/* Metric / Ethos Badges */}
            <div className="pt-8 border-t border-slate-800/80 grid grid-cols-3 gap-4 max-w-lg mx-auto lg:mx-0 text-left">
              <div>
                <p className="text-xs uppercase tracking-wider text-slate-400 font-mono">Foundational</p>
                <p className="text-lg font-bold text-white font-heading mt-0.5">Learn</p>
                <p className="text-xs text-slate-400">Deep Technical Inquiry</p>
              </div>
              <div className="border-l border-slate-800 pl-4">
                <p className="text-xs uppercase tracking-wider text-slate-400 font-mono">Execution</p>
                <p className="text-lg font-bold text-[#008CFF] font-heading mt-0.5">Build</p>
                <p className="text-xs text-slate-400">Resilient Engineering</p>
              </div>
              <div className="border-l border-slate-800 pl-4">
                <p className="text-xs uppercase tracking-wider text-slate-400 font-mono">Evolution</p>
                <p className="text-lg font-bold text-[#00D4F5] font-heading mt-0.5">Innovate</p>
                <p className="text-xs text-slate-400">Scalable Impact</p>
              </div>
            </div>

          </div>

          {/* Hero Visual Card */}
          <div className="lg:col-span-5 flex justify-center items-center">
            <div className="relative w-full max-w-md">
              <div className="absolute inset-0 bg-gradient-to-tr from-[#008CFF]/20 to-[#00D4F5]/30 rounded-3xl blur-2xl transform scale-95" />

              <div className="bg-[#06152E]/70 backdrop-blur-md rounded-2xl p-8 relative z-10 border border-[#00D4F5]/25 shadow-2xl">
                <div className="flex items-center justify-between pb-6 border-b border-slate-800">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/80" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                    <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  </div>
                  <span className="text-xs font-mono text-[#00D4F5] bg-[#00D4F5]/10 px-2.5 py-0.5 rounded-full border border-[#00D4F5]/20">
                    STUZEN Core v1.0
                  </span>
                </div>

                <div className="py-10 flex flex-col items-center justify-center">
                  <img 
                    src="/assets/logos/STUZEN_Icon_Only.png" 
                    alt="STUZEN Ribbon S Symbol" 
                    className="w-48 h-auto object-contain filter drop-shadow-[0_10px_25px_rgba(0,140,255,0.4)]"
                  />
                  <h3 className="text-xl font-bold font-heading text-white mt-6 tracking-wider">
                    STU<span className="text-[#00D4F5]">Z</span>EN
                  </h3>
                  <p className="text-xs text-slate-400 font-mono tracking-widest uppercase mt-1">TECHNOLOGIES</p>
                </div>

                <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
                  <span className="flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-[#00D4F5]" />
                    Engineered for Scalability
                  </span>
                  <span className="font-mono text-slate-500">2026.11</span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
