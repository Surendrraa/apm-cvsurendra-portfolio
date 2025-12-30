
// Add missing React import
import React from 'react';
import { CASE_STUDIES } from '../constants';
import { SectionHeading } from './SectionHeading';
import { CaseStudy } from '../types';

interface Props {
  onSelectCaseStudy: (study: CaseStudy) => void;
}

export const Portfolio: React.FC<Props> = ({ onSelectCaseStudy }) => {
  return (
    <section id="work" className="py-24 px-4 sm:px-6 lg:px-8 bg-zinc-950">
      <div className="max-w-7xl mx-auto">
        <SectionHeading 
          title="Strategic Feature Design" 
          subtitle="Deep dives into functional solutions, user experience prototypes, and business innovation." 
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {CASE_STUDIES.map((study) => (
            <div key={study.id} className="group bg-zinc-900 border border-zinc-800/50 p-8 rounded-[2.5rem] hover:border-violet-500/50 transition-all duration-300 flex flex-col h-full hover:shadow-2xl hover:shadow-violet-500/10">
              <div className="flex gap-2 mb-6 flex-wrap">
                {study.tags.map(tag => (
                  <span key={tag} className="text-[10px] uppercase font-bold tracking-widest px-3 py-1 bg-zinc-800/50 text-zinc-400 rounded-full border border-zinc-700/30">
                    {tag}
                  </span>
                ))}
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-[#8B5CF6] transition-colors">
                {study.title}
              </h3>
              <p className="text-zinc-400 mb-6 flex-grow leading-relaxed">{study.oneLineDescription}</p>
              
              <div className="space-y-4 mb-8">
                <div className="p-5 bg-zinc-950/50 rounded-2xl border border-zinc-800">
                  <h4 className="text-[10px] font-bold text-zinc-500 uppercase mb-2 tracking-widest">Problem Solved</h4>
                  <p className="text-sm text-zinc-300 leading-relaxed">{study.problem}</p>
                </div>
                <div className="p-5 bg-violet-500/5 rounded-2xl border border-violet-500/10">
                  <h4 className="text-[10px] font-bold text-[#8B5CF6] uppercase mb-2 tracking-widest">Key Innovation</h4>
                  <p className="text-sm text-zinc-300 leading-relaxed">{study.innovation}</p>
                </div>
                <div className="p-5 bg-emerald-500/5 rounded-2xl border border-emerald-500/10">
                  <h4 className="text-[10px] font-bold text-emerald-400 uppercase mb-2 tracking-widest">Impact</h4>
                  <p className="text-sm text-white leading-relaxed font-semibold">{study.impact}</p>
                </div>
              </div>

              <div className="border-t border-zinc-800 pt-6 mt-auto">
                <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
                  <button 
                    onClick={() => onSelectCaseStudy(study)}
                    className="w-full sm:w-auto px-6 py-3 bg-violet-500/10 hover:bg-[#8B5CF6] text-[#8B5CF6] hover:text-white rounded-xl text-xs font-bold transition-all border border-violet-500/20 flex items-center justify-center gap-2"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
                    View Screens
                  </button>
                  <a 
                    href={study.notionUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto px-6 py-3 bg-zinc-800 hover:bg-zinc-700 text-white rounded-xl text-xs font-bold transition-all border border-zinc-700 flex items-center justify-center gap-2"
                  >
                    Read PRD
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
