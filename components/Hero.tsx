
import React from 'react';

export const Hero: React.FC = () => {
  const scrollToWork = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById('work');
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
    <section className="pt-32 md:pt-48 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center md:text-left grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <div className="inline-flex items-center space-x-2 bg-violet-500/10 border border-violet-500/20 px-3 py-1 rounded-full mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-violet-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#8B5CF6]"></span>
            </span>
            <span className="text-[#8B5CF6] text-xs font-semibold uppercase tracking-wider">
              Product Lead @ <a href="https://vibekodes.com" target="_blank" rel="noopener noreferrer" className="hover:text-violet-300 font-black">VibeKodes</a> | APM Aspirant @ Vegastack
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight mb-6 leading-tight">
            Bridging Vision with <span className="text-[#8B5CF6]">Strategic Execution.</span>
          </h1>
          <p className="text-xl text-zinc-400 leading-relaxed mb-8 max-w-2xl">
            Associate Product Manager aspirant with <span className="text-white font-bold">1.6 years</span> of experience in a software product environment as an Associate QA Engineer. 
            Currently driving hands-on building through <a href="https://vibekodes.com" target="_blank" rel="noopener noreferrer" className="text-white font-medium hover:text-[#8B5CF6] underline decoration-violet-500/30 underline-offset-4">VibeKodes</a>, an innovative <span className="text-[#8B5CF6] font-bold">Edu-Tech</span> platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a 
              href="#work" 
              onClick={scrollToWork}
              className="px-8 py-4 bg-[#8B5CF6] hover:bg-[#7C3AED] text-white rounded-2xl font-bold transition-all shadow-lg shadow-violet-500/20 flex items-center justify-center gap-2"
            >
              Explore Case Studies
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
            </a>
            <a href="#contact" className="px-8 py-4 bg-zinc-900 hover:bg-zinc-800 text-white border border-zinc-700 rounded-2xl font-bold transition-all text-center">
              Get in Touch
            </a>
          </div>
        </div>
        <div className="relative hidden lg:block">
          <div className="absolute -inset-4 bg-violet-500/10 rounded-[2rem] blur-2xl animate-pulse"></div>
          {/* Card: Prominent size and refined spacing */}
          <div className="relative bg-zinc-900 border border-zinc-800 p-10 rounded-[3.5rem] shadow-2xl overflow-hidden flex flex-col max-w-lg ml-auto">
             <div className="space-y-8">
                <div className="flex items-center justify-between border-b border-zinc-800 pb-6 mb-2">
                   <div className="w-16 h-16 bg-[#8B5CF6] rounded-2xl flex items-center justify-center text-white font-bold text-2xl shadow-xl">V</div>
                   <div className="text-right">
                      <p className="text-zinc-500 text-[10px] uppercase font-black tracking-widest leading-none mb-1.5">Active Product Lead</p>
                      <a href="https://vibekodes.com" target="_blank" rel="noopener noreferrer" className="text-white font-black text-lg hover:text-[#8B5CF6] block leading-none">VibeKodes</a>
                   </div>
                </div>
                
                <div className="bg-zinc-950/50 rounded-[2.5rem] p-8 border border-zinc-800 shadow-inner">
                  <h4 className="text-[12px] font-black text-zinc-500 uppercase mb-6 tracking-widest">Product Thinking Snapshot</h4>
                  <div className="space-y-6">
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                         <span className="text-zinc-500 text-[11px] uppercase font-black">User Focus</span>
                         <span className="text-[#8B5CF6] text-[12px] font-black italic">90%</span>
                      </div>
                      <div className="h-2 w-full bg-zinc-800 rounded-full overflow-hidden">
                        <div className="h-full w-[90%] bg-[#8B5CF6] shadow-[0_0_15px_rgba(139,92,246,0.5)]"></div>
                      </div>
                    </div>
                    
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                         <span className="text-zinc-500 text-[11px] uppercase font-black">Edu-Tech Strategy</span>
                         <span className="text-white text-[12px] font-black italic">High</span>
                      </div>
                      <div className="h-2 w-full bg-zinc-800 rounded-full overflow-hidden">
                        <div className="h-full w-[85%] bg-zinc-600"></div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-6">
                  <div className="bg-zinc-950/50 p-6 rounded-3xl border border-zinc-800 text-center shadow-inner">
                    <p className="text-[10px] text-zinc-600 uppercase font-black mb-2 tracking-widest">Active Focus</p>
                    <p className="text-base font-black text-white leading-none italic">Product Integrity</p>
                  </div>
                  <div className="bg-zinc-950/50 p-6 rounded-3xl border border-zinc-800 text-center shadow-inner">
                    <p className="text-[10px] text-zinc-600 uppercase font-black mb-2 tracking-widest">Impact</p>
                    <p className="text-base font-black text-[#8B5CF6] leading-none italic">Strategic</p>
                  </div>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};
