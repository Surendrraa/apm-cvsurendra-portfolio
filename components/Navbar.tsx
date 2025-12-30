
import React from 'react';

export const Navbar: React.FC = () => {
  const scrollToSection = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      <div className="h-1.5 w-full fixed top-0 z-[50] bg-[#8B5CF6]"></div>
      <nav className="fixed top-1.5 w-full z-40 bg-zinc-950/80 backdrop-blur-md border-b border-zinc-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              <span className="text-xl font-bold bg-gradient-to-r from-[#8B5CF6] to-[#A78BFA] bg-clip-text text-transparent">
                CV Surendra Portfolio
              </span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#about" onClick={scrollToSection('about')} className="text-zinc-400 hover:text-white transition-colors text-sm font-medium">About</a>
              <a href="#work" onClick={scrollToSection('work')} className="text-zinc-400 hover:text-white transition-colors text-sm font-medium">Portfolio</a>
              <a href="#docs" onClick={scrollToSection('docs')} className="text-zinc-400 hover:text-white transition-colors text-sm font-medium">Docs</a>
              <a href="#experience" onClick={scrollToSection('experience')} className="text-zinc-400 hover:text-white transition-colors text-sm font-medium">Experience</a>
              <a href="#skills" onClick={scrollToSection('skills')} className="text-zinc-400 hover:text-white transition-colors text-sm font-medium">Skills</a>
              <a href="#contact" onClick={scrollToSection('contact')} className="text-white bg-[#8B5CF6] hover:bg-[#7C3AED] transition-colors text-sm font-bold px-6 py-2 rounded-full shadow-lg shadow-violet-500/20">Contact</a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};
