import React from 'react';
import { SKILLS } from '../constants.tsx';
import { SectionHeading } from './SectionHeading.tsx';

export const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8 bg-zinc-950">
      <div className="max-w-[1400px] mx-auto">
        <SectionHeading title="Competencies" subtitle="A toolkit balanced between strategic vision and technical execution." />
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-6">
          {SKILLS.map((skillGroup, i) => (
            <div key={i} className="p-6 bg-zinc-900 border border-zinc-800 rounded-3xl hover:border-indigo-500/30 transition-all group">
              <h4 className="text-indigo-400 font-bold mb-6 text-sm uppercase tracking-widest group-hover:text-white transition-colors">
                {skillGroup.category}
              </h4>
              <div className="flex flex-col gap-3">
                {skillGroup.items.map(skill => (
                  <div key={skill} className="flex items-center gap-3 group/item">
                    <div className="w-2 h-2 rounded-full bg-indigo-600 group-hover/item:scale-125 transition-transform shrink-0" />
                    <span className="text-zinc-400 text-sm font-medium group-hover/item:text-white transition-colors">
                      {skill}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};