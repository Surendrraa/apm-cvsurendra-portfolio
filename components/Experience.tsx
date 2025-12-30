
import React from 'react';
import { EXPERIENCES } from '../constants';
import { SectionHeading } from './SectionHeading';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <SectionHeading title="Experience Journey" subtitle="Bridging product leadership and technical execution." />
        <div className="space-y-12">
          {EXPERIENCES.map((exp, i) => (
            <div key={i} className="relative pl-8 md:pl-0">
              <div className="hidden md:block absolute left-1/2 -translate-x-px h-full w-px bg-zinc-800"></div>
              <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="md:w-1/2 md:text-right md:pr-12">
                  <h3 className="text-2xl font-bold text-white">{exp.role}</h3>
                  <p className="text-indigo-400 font-medium mb-1">
                    {exp.company === 'VibeKodes' ? (
                      <a href="https://vibekodes.com" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-300 transition-colors">VibeKodes</a>
                    ) : exp.company}
                  </p>
                  <span className="text-zinc-500 text-xs font-bold uppercase tracking-tighter px-2 py-1 bg-zinc-900 border border-zinc-800 rounded">
                    {exp.period}
                  </span>
                </div>
                <div className="relative md:w-1/2 md:pl-12">
                  <div className="absolute -left-[35px] md:-left-[9px] top-1 w-4 h-4 rounded-full bg-indigo-600 ring-4 ring-indigo-500/20"></div>
                  <ul className="space-y-4">
                    {exp.description.map((desc, j) => (
                      <li key={j} className="flex items-start text-zinc-400 text-sm leading-relaxed">
                        <span className="text-indigo-500 mr-3 mt-1.5 h-1.5 w-1.5 rounded-full bg-indigo-500 flex-shrink-0" />
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
