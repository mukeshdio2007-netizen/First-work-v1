import React from 'react';
import { Code2, Cloud, Cpu, Layout, Globe, Shield } from 'lucide-react';

export const Services: React.FC = () => {
  const serviceList = [
    {
      title: 'Custom Software Engineering',
      desc: 'Building scalable backend systems, high-concurrency microservices, and modular full-stack architectures engineered for high reliability and type safety.',
      tech: 'TypeScript • Python • Go • REST/GraphQL',
      icon: <Code2 className="w-6 h-6" />,
    },
    {
      title: 'Cloud Infrastructure & DevOps',
      desc: 'Designing reproducible infrastructure-as-code, automated CI/CD deployment pipelines, container orchestration, and serverless environments.',
      tech: 'Docker • AWS / GCP • CI/CD • Terraform',
      icon: <Cloud className="w-6 h-6" />,
    },
    {
      title: 'AI & Applied Automation',
      desc: 'Practical integration of intelligent models, LLM tooling, workflow orchestration, and automated data pipelines that eliminate repetitive friction.',
      tech: 'LangChain • Vector DBs • Workflows • FastAPIs',
      icon: <Cpu className="w-6 h-6" />,
    },
    {
      title: 'Product Design & Systems',
      desc: 'Crafting cohesive design systems, user journey mappings, interactive prototypes, and accessible component libraries that establish instant brand identity.',
      tech: 'Figma • Tailwind • Design Tokens • WCAG 2.1',
      icon: <Layout className="w-6 h-6" />,
    },
    {
      title: 'Modern Web Applications',
      desc: 'Building ultra-fast, responsive web applications with state management, seamless client-side routing, and real-time backend synchronization.',
      tech: 'React • Next.js • TypeScript • WebSockets',
      icon: <Globe className="w-6 h-6" />,
    },
    {
      title: 'Technical Architecture Advisory',
      desc: 'Comprehensive code reviews, architectural audits, scalability planning, and security evaluations to prevent technical debt before launching.',
      tech: 'System Design • Performance • Security Checks',
      icon: <Shield className="w-6 h-6" />,
    },
  ];

  return (
    <section id="services" className="py-24 bg-[#020817] text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <p className="text-xs font-mono font-semibold tracking-widest text-[#00D4F5] uppercase">Capabilities</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-heading">
            What We Do
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-[#00D4F5] to-[#008CFF] mx-auto rounded-full" />
          <p className="text-base sm:text-lg text-slate-400 leading-relaxed pt-2">
            Engineered capabilities designed to take digital ideas from whiteboard concepts into scalable, production-grade applications.
          </p>
          <p className="text-xs font-mono text-[#00D4F5]/70">[Emerging Service Offerings • Tailored to Client Specifications]</p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceList.map((item, index) => (
            <div 
              key={index} 
              className="bg-[#06152E]/60 border border-[#00D4F5]/15 rounded-2xl p-7 transition-all duration-300 hover:border-[#00D4F5]/40 hover:-translate-y-1 shadow-lg group"
            >
              <div className="w-12 h-12 rounded-xl bg-[#008CFF]/15 border border-[#008CFF]/30 flex items-center justify-center text-[#00D4F5] mb-6 group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold font-heading text-white mb-2">{item.title}</h3>
              <p className="text-slate-300 text-sm leading-relaxed mb-4">{item.desc}</p>
              <div className="pt-4 border-t border-slate-800 text-xs font-mono text-[#00D4F5]">
                {item.tech}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
