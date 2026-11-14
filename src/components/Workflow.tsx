import React from 'react';

export const Workflow: React.FC = () => {
  const steps = [
    {
      num: '01',
      title: 'Discover',
      subtitle: 'Understand the Problem',
      desc: 'We deconstruct technical requirements, analyze data constraints, and map user expectations before writing a single line of production code.',
    },
    {
      num: '02',
      title: 'Plan',
      subtitle: 'Develop Practical Strategy',
      desc: 'Architecting schema designs, API contracts, deployment milestones, and UX flows with clean separation of concerns and clear milestones.',
    },
    {
      num: '03',
      title: 'Build',
      subtitle: 'Create the Solution',
      desc: 'Writing clean, modular, and type-checked code backed by continuous integration tests, performance audits, and responsive design checks.',
    },
    {
      num: '04',
      title: 'Innovate',
      subtitle: 'Improve & Evolve',
      desc: 'Gathering real performance telemetry, benchmarking bottlenecks, and iterating swiftly to keep solutions resilient as scale grows.',
    },
  ];

  return (
    <section id="workflow" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-20">
          <p className="text-xs font-mono font-semibold tracking-widest text-[#008CFF] uppercase">Methodology</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-heading">
            Our Approach & Workflow
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-[#00D4F5] to-[#008CFF] mx-auto rounded-full" />
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed pt-2">
            A disciplined, four-stage lifecycle that transforms ambitious ideas into robust, verified software.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
          {steps.map((s, index) => (
            <div key={index} className="flex flex-col items-center text-center group">
              <div className="w-16 h-16 rounded-2xl bg-[#008CFF]/10 border-2 border-[#008CFF] flex items-center justify-center text-[#008CFF] font-heading font-extrabold text-xl mb-6 bg-white group-hover:scale-110 group-hover:bg-[#008CFF] group-hover:text-white transition-all shadow-sm">
                {s.num}
              </div>
              <h3 className="text-xl font-bold font-heading text-slate-900 mb-2">{s.title}</h3>
              <p className="text-xs font-mono text-[#008CFF] font-semibold uppercase mb-3">{s.subtitle}</p>
              <p className="text-sm text-slate-600 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
