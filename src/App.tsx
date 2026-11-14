import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { Solutions } from './components/Solutions';
import { Workflow } from './components/Workflow';
import { WhyUs } from './components/WhyUs';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#F5F9FF] text-slate-800 flex flex-col font-body selection:bg-[#00D4F5] selection:text-slate-900">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <About />
        <Services />
        <Solutions />
        <Workflow />
        <WhyUs />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
