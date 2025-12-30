
import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Portfolio } from './components/Portfolio';
import { Documentation } from './components/Documentation';
import { Experience } from './components/Experience';
import { Skills } from './components/Skills';
import { Footer } from './components/Footer';
import { PRDModal } from './components/PRDModal';
import { CaseStudy } from './types';

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
