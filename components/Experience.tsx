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
                    {exp.company === 'VibeKodes' ? (
                      <a href="https://vibekodes.com" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-300 transition-colors">VibeKodes</a>
                    ) : exp.company}
                  </div>
                  <span className="inline-block text-[10px] font-black text-zinc-500 uppercase tracking-widest px-3 py-1 bg-zinc-900 border border-zinc-800 rounded-lg">
                    {exp.period}
                  </span>
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
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};