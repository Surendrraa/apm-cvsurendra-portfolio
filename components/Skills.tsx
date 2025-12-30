
import React from 'react';
import { SKILLS } from '../constants.tsx';
import { SectionHeading } from './SectionHeading.tsx';

export const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8 bg-zinc-950">
      <div className="max-w-7xl mx-auto">
        <SectionHeading title="Competencies" subtitle="A toolkit balanced between strategic vision and technical execution." />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {SKILLS.map((skillGroup, i) => (
            <div key={i} className="p-8 bg-zinc-900 border border-zinc-800 rounded-3xl hover:bg-zinc-900/50 transition-colors">
              <h4 className="text-indigo-400 font-bold mb-6 text-xs uppercase tracking-widest">{skillGroup.category}</h4>
              <div className="flex flex-wrap gap-2">
                {skillGroup.items.map(skill => (
                  <span key={skill} className="px-3 py-1.5 bg-zinc-950 text-white rounded-lg text-xs border border-zinc-800 hover:border-indigo-500/50 transition-colors cursor-default">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
