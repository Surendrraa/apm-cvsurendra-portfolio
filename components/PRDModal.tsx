
import React from 'react';
import { CaseStudy } from '../types';
import { MobileScreenRenderer } from './MobileScreenRenderer';

interface Props {
  selectedCaseStudy: CaseStudy;
  onClose: () => void;
}

export const PRDModal: React.FC<Props> = ({ selectedCaseStudy, onClose }) => {
  // We only care about the screen sections for this "View Flow" mode
  const screenSections = selectedCaseStudy.fullSpecs?.filter(s => s.type === 'screens') || [];

  return (
    <div className="fixed inset-0 z-[100] flex flex-col bg-zinc-950 animate-in fade-in zoom-in-95 duration-300">
      {/* Header */}
      <div className="flex-none p-6 border-b border-zinc-800 flex justify-between items-center bg-zinc-900/80 backdrop-blur-xl sticky top-0 z-10">
         <div className="max-w-7xl mx-auto w-full flex justify-between items-center px-4">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight">{selectedCaseStudy.title}</h3>
              <p className="text-indigo-400 text-sm font-medium mt-1 uppercase tracking-widest text-[10px]">Product Journey & Screen Visualization</p>
            </div>
            <button 
              onClick={onClose} 
              className="group flex items-center gap-2 px-6 py-3 bg-zinc-800 hover:bg-zinc-700 rounded-full transition-all text-zinc-400 hover:text-white border border-zinc-700 shadow-xl"
            >
              <span className="text-xs font-bold uppercase tracking-widest">Close Screens</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
         </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 overflow-y-auto bg-zinc-950 scroll-smooth pb-32">
        <div className="max-w-7xl mx-auto px-6 py-12 md:py-20">
           {screenSections.map((section, idx) => (
             <div key={idx} className="space-y-16">
                <div className="text-center space-y-4 max-w-2xl mx-auto mb-16">
                   <h2 className="text-4xl md:text-5xl font-black text-white italic uppercase tracking-tighter border-b-4 border-indigo-600 inline-block pb-2">
                     {section.title}
                   </h2>
                   <p className="text-zinc-500 font-medium leading-relaxed">
                     A step-by-step walkthrough of the user journey, highlighting critical interaction points and the underlying product logic.
                   </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-24">
                   {section.screens?.map((screen, sIdx) => (
                     <div key={sIdx} className="animate-in fade-in slide-in-from-bottom-8 duration-700 delay-[sIdx*100ms]">
                        <MobileScreenRenderer screen={screen} caseStudyId={selectedCaseStudy.id} />
                     </div>
                   ))}
                </div>
             </div>
           ))}

           {/* Call to Action Footer */}
           <div className="mt-40 p-12 md:p-20 bg-gradient-to-br from-indigo-900/40 via-zinc-900 to-emerald-900/20 border border-white/5 rounded-[4rem] text-center shadow-3xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/20 blur-[120px] rounded-full -mr-48 -mt-48 animate-pulse"></div>
              <div className="relative z-10">
                <div className="inline-block px-4 py-1.5 bg-indigo-500/20 border border-indigo-500/30 rounded-full text-indigo-400 text-[10px] font-black uppercase tracking-widest mb-6">
                  Deep Dive
                </div>
                <h5 className="text-white text-4xl md:text-6xl font-black mb-8 tracking-tighter leading-none">Want to see the logic behind these?</h5>
                <p className="text-zinc-400 text-xl italic max-w-3xl mx-auto leading-relaxed mb-12">
                  "These visual flows represent only 20% of the work. The rest lies in the functional requirements, edge case management, and metric tracking detailed in the PRD."
                </p>
                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                  <a 
                    href={selectedCaseStudy.notionUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-12 py-6 bg-indigo-600 hover:bg-indigo-500 text-white rounded-3xl font-black text-sm uppercase tracking-widest transition-all shadow-2xl shadow-indigo-600/40 active:scale-95 flex items-center justify-center gap-3"
                  >
                    Read Full PRD on Notion
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
                  </a>
                  <button 
                    onClick={onClose}
                    className="px-12 py-6 bg-zinc-800 hover:bg-zinc-700 text-zinc-300 rounded-3xl font-black text-sm uppercase tracking-widest transition-all border border-zinc-700"
                  >
                    Close & Explore Other Work
                  </button>
                </div>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};
