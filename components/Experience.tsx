import React from 'react';
import { EXPERIENCES } from '../constants.tsx';
import { SectionHeading } from './SectionHeading.tsx';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <SectionHeading title="Experience Journey" subtitle="Bridging product leadership and technical execution." />
        <div className="space-y-16">
          {EXPERIENCES.map((exp, i) => (
            <div key={i} className="relative pl-8 md:pl-0">
              <div className="hidden md:block absolute left-1/2 -translate-x-px h-full w-px bg-zinc-800"></div>
              <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="md:w-1/2 md:text-right md:pr-12">
                  <h3 className="text-2xl md:text-3xl font-black text-white tracking-tight mb-2 italic uppercase">
                    {exp.role}
                  </h3>
                  <div className="text-lg md:text-xl font-bold text-indigo-400 mb-3">
                    {exp.company}
                  </div>
                  {exp.period && (
                    <span className="inline-block text-[10px] font-black text-zinc-500 uppercase tracking-widest px-3 py-1 bg-zinc-900 border border-zinc-800 rounded-lg">
                      {exp.period}
                    </span>
                  )}
                </div>
                <div className="relative md:w-1/2 md:pl-12 pt-1.5">
                  <div className="absolute -left-[35px] md:-left-[9px] top-3.5 w-4 h-4 rounded-full bg-indigo-600 ring-4 ring-indigo-500/10 shadow-[0_0_12px_rgba(79,70,229,0.3)]"></div>
                  <ul className="space-y-5">
                    {exp.description.map((desc, j) => (
                      <li key={j} className="flex items-start text-zinc-400 text-base md:text-lg leading-relaxed font-medium group">
                        <span className="text-indigo-500 mr-3 mt-2 h-1.5 w-1.5 rounded-full bg-indigo-500 flex-shrink-0 shadow-[0_0_6px_rgba(99,102,241,0.5)] group-hover:scale-125 transition-transform" />
                        {desc}
                      </li>
                    ))}
                  </ul>
                  {exp.company === 'VibeKodes' && (
                    <div className="mt-8 p-6 bg-indigo-500/5 border border-indigo-500/10 rounded-2xl group/link transition-all hover:bg-indigo-500/10">
                       <p className="text-[10px] text-zinc-500 font-black uppercase tracking-[0.2em] mb-3">Direct Access</p>
                       <a 
                        href="https://vibekodes.com/" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="flex items-center gap-3 text-white font-bold text-base hover:text-indigo-400 transition-colors"
                       >
                         Visit VibeKodes: https://vibekodes.com/
                         <svg className="w-5 h-5 group-hover/link:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                         </svg>
                       </a>
                       <p className="text-[10px] text-zinc-600 font-medium uppercase mt-2">Public EdTech Learning Platform | Outside full-time role</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};