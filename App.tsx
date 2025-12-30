
import React, { useState } from 'react';
import { Navbar } from './components/Navbar.tsx';
import { Hero } from './components/Hero.tsx';
import { About } from './components/About.tsx';
import { Portfolio } from './components/Portfolio.tsx';
import { Documentation } from './components/Documentation.tsx';
import { Experience } from './components/Experience.tsx';
import { Skills } from './components/Skills.tsx';
import { Footer } from './components/Footer.tsx';
import { PRDModal } from './components/PRDModal.tsx';
import { CaseStudy } from './types.ts';

const App: React.FC = () => {
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<CaseStudy | null>(null);

  return (
    <div className="min-h-screen selection:bg-violet-500/30">
      <Navbar />
      <main className="space-y-0">
        <Hero />
        <About />
        <Portfolio onSelectCaseStudy={setSelectedCaseStudy} />
        <Documentation />
        <Experience />
        <Skills />
      </main>
      <Footer />
      
      {selectedCaseStudy && (
        <PRDModal 
          selectedCaseStudy={selectedCaseStudy} 
          onClose={() => setSelectedCaseStudy(null)} 
        />
      )}
    </div>
  );
};

export default App;
