
import React, { useState } from 'react';
import { Navbar } from './components/Navbar.tsx';
import { Hero } from './components/Hero.tsx';
import { About } from './components/About.tsx';
import { Portfolio } from './components/Portfolio.tsx';
import { VibeKodesSection } from './components/VibeKodesSection.tsx';
import { Documentation } from './components/Documentation.tsx';
import { Experience } from './components/Experience.tsx';
import { Skills } from './components/Skills.tsx';
import { Footer } from './components/Footer.tsx';
import { PRDModal } from './components/PRDModal.tsx';
import { BackgroundSnake } from './components/BackgroundSnake.tsx';
import { ChatBot } from './components/ChatBot.tsx';
import { CaseStudy } from './types.ts';

const App: React.FC = () => {
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<CaseStudy | null>(null);

  return (
    <div className="relative min-h-screen selection:bg-violet-500/30 bg-[#09090b]">
      <BackgroundSnake />
      <Navbar />
      <main className="relative z-10 space-y-0">
        <Hero />
        <About />
        <Portfolio onSelectCaseStudy={setSelectedCaseStudy} />
        <VibeKodesSection />
        <Documentation />
        <Experience />
        <Skills />
      </main>
      <Footer />
      <ChatBot />
      
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
