import React from 'react';
import { Eye, Target, BookOpen, Hammer, Zap, CheckCircle2, Info } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-white border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <p className="text-xs font-mono font-semibold tracking-widest text-[#008CFF] uppercase">About STUZEN</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-heading">
            Rooted in Purpose, Built for Progress
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-[#00D4F5] to-[#008CFF] mx-auto rounded-full" />
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed pt-2">
            STUZEN TECHNOLOGIES is an emerging technology startup established on the principle that the most durable digital products come from a balance of deep learning, uncompromising craft, and constant innovation.
          </p>
        </div>

        {/* Vision & Mission */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-[#F5F9FF] border border-blue-100 rounded-2xl p-8 relative overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-xl bg-blue-100/80 flex items-center justify-center text-[#008CFF] mb-6">
              <Eye className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 font-heading mb-3">Our Vision</h3>
            <p className="text-slate-600 leading-relaxed">
              To engineer intelligent, accessible, and resilient digital architectures that empower organizations and people to solve complex problems effortlessly. We envision a technology landscape where software is built with long-term intent, clarity, and reliability.
            </p>
          </div>

          <div className="bg-[#F5F9FF] border border-blue-100 rounded-2xl p-8 relative overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-xl bg-cyan-100/80 flex items-center justify-center text-[#008CFF] mb-6">
              <Target className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 font-heading mb-3">Our Mission</h3>
            <p className="text-slate-600 leading-relaxed">
              To convert active technical inquiry and modern computational methodologies into functional, dependable digital systems. We bridge the gap between abstract research and concrete user-centered execution through rigorous development practices.
            </p>
          </div>
        </div>

        {/* Core Values */}
        <div className="space-y-8">
          <div className="text-center">
            <h3 className="text-xl font-bold text-slate-900 font-heading">Our Core Values</h3>
            <p className="text-sm text-slate-500">The enduring tenets guiding how we design, write code, and collaborate.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-xl border border-slate-200 bg-white hover:border-[#008CFF]/50 transition-colors">
              <div className="text-[#008CFF] mb-4">
                <BookOpen className="w-6 h-6" />
              </div>
              <h4 className="text-lg font-bold text-slate-900 font-heading mb-2">Continuous Learning</h4>
              <p className="text-sm text-slate-600">Every challenge begins with curiosity. We investigate fundamental mechanisms rather than merely adopting transient trends.</p>
            </div>

            <div className="p-6 rounded-xl border border-slate-200 bg-white hover:border-[#008CFF]/50 transition-colors">
              <div className="text-[#008CFF] mb-4">
                <Hammer className="w-6 h-6" />
              </div>
              <h4 className="text-lg font-bold text-slate-900 font-heading mb-2">Purposeful Craft</h4>
              <p className="text-sm text-slate-600">We prioritize maintainability, clean architecture, and type safety over expedient, fragile shortcuts.</p>
            </div>

            <div className="p-6 rounded-xl border border-slate-200 bg-white hover:border-[#008CFF]/50 transition-colors">
              <div className="text-[#008CFF] mb-4">
                <Zap className="w-6 h-6" />
              </div>
              <h4 className="text-lg font-bold text-slate-900 font-heading mb-2">Adaptive Innovation</h4>
              <p className="text-sm text-slate-600">We incorporate modern tools—cloud microservices, automation, intelligent agents—where they generate genuine utility.</p>
            </div>

            <div className="p-6 rounded-xl border border-slate-200 bg-white hover:border-[#008CFF]/50 transition-colors">
              <div className="text-[#008CFF] mb-4">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h4 className="text-lg font-bold text-slate-900 font-heading mb-2">Honest Integrity</h4>
              <p className="text-sm text-slate-600">No inflated vanity claims or buzzword marketing. We present verified capabilities and transparent timelines.</p>
            </div>
          </div>
        </div>

        {/* Verification Note */}
        <div className="mt-14 p-5 rounded-xl bg-slate-50 border border-dashed border-slate-300 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-mono">
          <div className="flex items-center gap-2">
            <Info className="w-4 h-4 text-slate-400" />
            <span>[Status Note: Corporate registrations and formal advisory profiles are in active setup for 2026]</span>
          </div>
          <span className="text-slate-400">STUZEN Documentation Desk</span>
        </div>

      </div>
    </section>
  );
};
