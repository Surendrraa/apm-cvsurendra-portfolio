
import React from 'react';
import { VIBEKODES_PRODUCT } from '../constants.tsx';
import { SectionHeading } from './SectionHeading.tsx';

export const VibeKodesSection: React.FC = () => {
  return (
    <section id="vibekodes" className="py-24 px-4 sm:px-6 lg:px-8 bg-zinc-950/20">
      <div className="max-w-7xl mx-auto">
        <SectionHeading 
          title="Product Experience" 
          subtitle="Building VibeKodes from zero to one: Leading the future of AI-driven Edu-Tech." 
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-8">
            <div className="flex flex-col sm:flex-row sm:items-center gap-4">
              <div className="inline-flex items-center gap-4 bg-violet-600/10 border border-violet-600/20 px-5 py-2 rounded-2xl">
                <div className="w-10 h-10 bg-violet-600 rounded-xl flex items-center justify-center text-white font-black text-lg shadow-lg shadow-violet-600/20">V</div>
                <div>
                  <h3 className="text-xl font-bold text-white leading-none">{VIBEKODES_PRODUCT.title}</h3>
                  <p className="text-zinc-500 text-[10px] uppercase font-black tracking-widest mt-1">{VIBEKODES_PRODUCT.subtitle}</p>
                </div>
              </div>
            </div>

            <p className="text-xl text-zinc-400 leading-relaxed italic border-l-4 border-violet-600/30 pl-6">
              "{VIBEKODES_PRODUCT.mission}"
            </p>

            <div className="space-y-6">
              <h4 className="text-xs font-black text-zinc-500 uppercase tracking-[0.3em]">The VibeKoding Methodology</h4>
              <div className="grid gap-4">
                {VIBEKODES_PRODUCT.methodology.points.map((point, idx) => (
                  <div key={idx} className="bg-zinc-900/40 border border-zinc-800/50 p-8 rounded-[2.5rem] hover:border-violet-500/20 transition-all group">
                    <div className="flex items-start gap-6">
                      <div className="w-12 h-12 rounded-2xl bg-violet-600/10 flex items-center justify-center text-violet-500 font-black text-xl shrink-0 group-hover:bg-violet-600 group-hover:text-white transition-all shadow-inner">
                        {idx + 1}
                      </div>
                      <div>
                        <h5 className="text-white font-black text-xl mb-2 tracking-tight">{point.title}</h5>
                        <p className="text-zinc-400 text-sm leading-relaxed font-medium">{point.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {VIBEKODES_PRODUCT.mindsets.map((mindset, idx) => (
                <div key={idx} className="p-5 bg-zinc-900/80 border border-zinc-800 rounded-3xl">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-2 h-2 rounded-full bg-violet-500 shadow-[0_0_8px_rgba(139,92,246,0.6)]" />
                    <h5 className="text-white font-black text-[11px] uppercase tracking-wider">{mindset.title}</h5>
                  </div>
                  <p className="text-zinc-500 text-[11px] leading-relaxed uppercase font-medium tracking-wide">{mindset.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative group sticky top-24">
            {/* Background Glow */}
            <div className="absolute -inset-4 bg-gradient-to-tr from-violet-600/20 to-indigo-600/20 rounded-[3.5rem] blur-2xl group-hover:blur-3xl transition-all duration-500 opacity-50"></div>
            
            {/* Card Container */}
            <div className="relative bg-zinc-900 border border-zinc-800 p-3 rounded-[3rem] overflow-hidden shadow-2xl flex flex-col gap-4">
              {/* Dashboard Preview Area */}
              <div className="bg-zinc-950 rounded-[2.5rem] overflow-hidden aspect-[16/10] flex items-center justify-center relative border border-white/5">
                <img 
                  src="public/Dark_Mode.png" 
                  alt="VibeKodes Platform Preview" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  onError={(e) => {
                    // Fallback if image doesn't load
                    e.currentTarget.style.display = 'none';
                    const container = e.currentTarget.parentElement;
                    if (container) {
                      container.innerHTML = `
                        <div class="flex flex-col items-center justify-center p-6 text-center h-full bg-zinc-950">
                          <div class="w-12 h-12 sm:w-16 sm:h-16 bg-violet-600/10 rounded-2xl flex items-center justify-center text-violet-500 mb-6 sm:mb-8 animate-pulse">
                            <svg class="w-6 h-6 sm:w-8 sm:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                          </div>
                          <div class="animate-fade-up-reveal">
                            <h4 class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white italic uppercase tracking-tighter leading-[1.1] animate-text-glow px-4 mx-auto">
                              Dream at night,<br /> Build by Morning,<br /> Deploy by evening
                            </h4>
                          </div>
                        </div>
                      `;
                    }
                  }}
                />
              </div>

              {/* Features Quick List inside card - Uniform light styling */}
              <div className="px-5 py-2 grid grid-cols-1 gap-4">
                 {VIBEKODES_PRODUCT.achievements.map((item, idx) => (
                    <div key={idx} className="space-y-2 p-5 rounded-[1.5rem] bg-white/5 border border-white/5 hover:bg-white/[0.08] transition-colors">
                       <p className="text-zinc-100 font-black text-sm leading-none uppercase tracking-tight">{item.title}</p>
                       <p className="text-zinc-300 text-xs leading-relaxed">{item.description}</p>
                    </div>
                 ))}
              </div>

              {/* Action Button inside Card */}
              <div className="px-3 pb-3">
                <a 
                  href={VIBEKODES_PRODUCT.links[0].url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-3 px-8 py-5 bg-violet-600 hover:bg-violet-500 text-white rounded-[2rem] font-bold transition-all shadow-xl shadow-violet-600/20 active:scale-[0.98] group/btn"
                >
                  Explore VibeKodes Live
                  <svg className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
