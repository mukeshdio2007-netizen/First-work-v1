import React from 'react';
import { Sparkles, Wrench, Award, RefreshCw, Users, GitBranch } from 'lucide-react';

export const WhyUs: React.FC = () => {
  const points = [
    {
      title: 'Pragmatic Innovation',
      desc: 'We leverage modern technology frameworks only when they solve genuine problems, avoiding needless complexity and fragile hype cycles.',
      icon: <Sparkles className="w-6 h-6" />,
    },
    {
      title: 'Practical Problem-Solving',
      desc: 'Every design decision stems from real-world workflow requirements, creating solutions that reduce latency, friction, and operational overhead.',
      icon: <Wrench className="w-6 h-6" />,
    },
    {
      title: 'Uncompromising Quality',
      desc: 'Strict type safety, consistent linting rules, comprehensive unit tests, and modular architecture ensure long-term maintainability.',
      icon: <Award className="w-6 h-6" />,
    },
    {
      title: 'Continuous Learning',
      desc: 'True to our motto, we continuously absorb evolving best practices in security, cloud infrastructure, and user accessibility.',
      icon: <RefreshCw className="w-6 h-6" />,
    },
    {
      title: 'User-Focused Development',
      desc: 'Engineered for humans: responsive down to 320px screens, intuitive interaction states, readable typography, and fast loading times.',
      icon: <Users className="w-6 h-6" />,
    },
    {
      title: 'Adaptability & Agility',
      desc: 'As an agile startup, we adapt quickly to feedback, adjusting architectures with minimal friction and transparent sprint reporting.',
      icon: <GitBranch className="w-6 h-6" />,
    },
  ];

  return (
    <section id="why-us" className="py-24 bg-[#06152E] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <p className="text-xs font-mono font-semibold tracking-widest text-[#00D4F5] uppercase">The Stuzen Advantage</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-heading">
            Why Choose STUZEN
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-[#00D4F5] to-[#008CFF] mx-auto rounded-full" />
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed pt-2">
            We measure our success by the clarity, resilience, and longevity of the software we engineer.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {points.map((pt, index) => (
            <div key={index} className="bg-[#020817]/60 border border-[#00D4F5]/20 rounded-xl p-6 hover:border-[#00D4F5]/40 transition-colors">
              <div className="text-[#00D4F5] mb-4">{pt.icon}</div>
              <h4 className="text-lg font-bold font-heading text-white mb-2">{pt.title}</h4>
              <p className="text-sm text-slate-300 leading-relaxed">{pt.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
