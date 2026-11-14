import React, { useState } from 'react';

interface SolutionItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  category: 'enterprise' | 'devtools' | 'research';
  categoryLabel: string;
  status: string;
  statusColor: string;
  technologies: string[];
}

export const Solutions: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'enterprise' | 'devtools' | 'research'>('all');
  const [activeModal, setActiveModal] = useState<string | null>(null);

  const solutions: SolutionItem[] = [
    {
      id: 'omnix',
      title: 'Stuzen Omnix Core',
      subtitle: 'Multi-Tenant Workflow Orchestrator',
      description: 'An extensible asynchronous event broker and microservices orchestration engine built for handling high-volume organizational data workflows with end-to-end tracing.',
      category: 'enterprise',
      categoryLabel: 'Enterprise',
      status: 'Active Prototype',
      statusColor: 'text-emerald-400',
      technologies: ['TypeScript', 'Node / Bun', 'Redis', 'PostgreSQL'],
    },
    {
      id: 'cli',
      title: 'Stuzen CLI & UI Tokens',
      subtitle: 'Cross-Platform Design System Generator',
      description: 'A unified developer CLI tool for compiling design tokens into CSS variables, Tailwind configurations, and typed React components with zero configuration overhead.',
      category: 'devtools',
      categoryLabel: 'Developer Tools',
      status: 'Open Ecosystem',
      statusColor: 'text-cyan-300',
      technologies: ['Rust / CLI', 'Tailwind', 'CSS Tokens'],
    },
    {
      id: 'learnlab',
      title: 'Stuzen LearnLab',
      subtitle: 'Interactive Systems Architecture Explorer',
      description: 'An educational sandbox helping aspiring software engineers visualize distributed systems, memory management, and asynchronous protocols in real time.',
      category: 'research',
      categoryLabel: 'EdTech & Research',
      status: 'Incubating',
      statusColor: 'text-purple-300',
      technologies: ['React', 'WebAssembly', 'Canvas API'],
    },
  ];

  const filtered = filter === 'all' ? solutions : solutions.filter((s) => s.category === filter);

  return (
    <section id="solutions" className="py-24 bg-[#F5F9FF] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <p className="text-xs font-mono font-semibold tracking-widest text-[#008CFF] uppercase">Portfolio & Projects</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-heading">
            Our Solutions & Products
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-[#00D4F5] to-[#008CFF] mx-auto rounded-full" />
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed pt-2">
            Selected product prototypes, open digital architectures, and research projects initiated by STUZEN TECHNOLOGIES.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {(['all', 'enterprise', 'devtools', 'research'] as const).map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                filter === cat
                  ? 'bg-[#008CFF] text-white shadow-md'
                  : 'bg-white text-slate-600 border border-slate-200 hover:border-[#008CFF]'
              }`}
            >
              {cat === 'all' && 'All Initiatives'}
              {cat === 'enterprise' && 'Enterprise Platforms'}
              {cat === 'devtools' && 'Developer Tools'}
              {cat === 'research' && 'EdTech & Research'}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((item) => (
            <div
              key={item.id}
              className="flex flex-col bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-lg transition-all group"
            >
              <div className="h-48 bg-gradient-to-tr from-[#020817] to-[#06152E] p-6 flex flex-col justify-between relative overflow-hidden">
                <div className="flex items-center justify-between z-10">
                  <span className="text-xs font-mono font-medium px-2.5 py-1 rounded bg-[#008CFF]/20 text-[#00D4F5] border border-[#00D4F5]/30">
                    {item.categoryLabel}
                  </span>
                  <span className={`text-xs font-mono flex items-center gap-1 ${item.statusColor}`}>
                    <span className="w-2 h-2 rounded-full bg-current inline-block" />
                    {item.status}
                  </span>
                </div>
                <div className="z-10">
                  <h4 className="text-xl font-bold font-heading text-white">{item.title}</h4>
                  <p className="text-xs text-slate-300 mt-1">{item.subtitle}</p>
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between">
                <p className="text-sm text-slate-600 mb-4 leading-relaxed">{item.description}</p>

                <div className="space-y-4">
                  <div className="flex flex-wrap gap-1.5 text-xs font-mono">
                    {item.technologies.map((t, idx) => (
                      <span key={idx} className="px-2 py-0.5 rounded bg-slate-100 text-slate-700">
                        {t}
                      </span>
                    ))}
                  </div>

                  <button
                    type="button"
                    onClick={() => setActiveModal(item.id)}
                    className="w-full text-center py-2 px-4 rounded-lg border border-slate-200 text-xs font-semibold text-slate-800 hover:bg-[#F0F7FF] hover:border-[#008CFF] hover:text-[#008CFF] transition-colors"
                  >
                    View Architecture • Learn More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Architecture Modal */}
        {activeModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
            <div className="bg-white rounded-2xl max-w-2xl w-full p-8 shadow-2xl relative">
              <h3 className="text-2xl font-bold font-heading text-slate-900 mb-2">Architecture Specification</h3>
              <p className="text-sm text-slate-600 mb-6">Detailed microservice contracts, schemas, and benchmark records are available under engineering review.</p>
              <div className="p-4 bg-slate-100 rounded-lg text-xs font-mono text-slate-800 mb-6">
                Status: In active prototyping under STUZEN Core Architecture Guidelines.
              </div>
              <div className="flex justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setActiveModal(null)}
                  className="bg-[#008CFF] text-white text-xs font-semibold py-2 px-5 rounded-lg"
                >
                  Close Specification
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
