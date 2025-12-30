
import React from 'react';
import { DOCUMENTATION_RESOURCES } from '../constants.tsx';
import { SectionHeading } from './SectionHeading.tsx';

export const Documentation: React.FC = () => {
  const getIcon = (type: string) => {
    switch (type) {
      case 'figma':
        return (
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
             <path d="M12 2C9.79086 2 8 3.79086 8 6V6C8 8.20914 9.79086 10 12 10C14.2091 10 16 8.20914 16 6V6C16 3.79086 14.2091 2 12 2Z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
             <path d="M12 10C9.79086 10 8 11.7909 8 14V14C8 16.2091 9.79086 18 12 18C14.2091 18 16 16.2091 16 14V14C16 11.7909 14.2091 10 12 10Z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
             <path d="M8 14C5.79086 14 4 15.7909 4 18V18C4 20.2091 5.79086 22 8 22C10.2091 22 12 20.2091 12 18V14H8Z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
             <path d="M8 6C5.79086 6 4 7.79086 4 10V10C4 12.2091 5.79086 14 8 14H12V6H8Z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
             <path d="M16 14C18.2091 14 20 15.7909 20 18V18C20 20.2091 18.2091 22 16 22V14Z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        );
      case 'prd':
        return (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
        );
      case 'list':
        return (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 10h16M4 14h16M4 18h16" />
          </svg>
        );
      case 'priority':
        return (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <section id="docs" className="py-24 px-4 sm:px-6 lg:px-8 bg-zinc-950/30">
      <div className="max-w-7xl mx-auto">
        <SectionHeading 
          title="Product Strategy & Documentation" 
          subtitle="The analytical backbone: Mapping feature requirements, business value, and strategic roadmaps." 
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {DOCUMENTATION_RESOURCES.map((doc, i) => (
            <div key={i} className="group p-8 bg-zinc-900 border border-zinc-800 rounded-3xl hover:border-violet-500/30 transition-all duration-300">
              <div className="w-12 h-12 bg-violet-500/10 rounded-2xl flex items-center justify-center text-violet-500 mb-6 group-hover:bg-[#8B5CF6] group-hover:text-white transition-all">
                {getIcon(doc.icon)}
              </div>
              <h4 className="text-xl font-black text-white mb-4 tracking-tight leading-tight italic">{doc.title}</h4>
              <p className="text-sm text-zinc-400 leading-relaxed mb-10 font-medium">{doc.description}</p>
              <div className="flex flex-wrap gap-3 mt-auto">
                {doc.links.map((link, j) => (
                  <a 
                    key={j}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-3 px-6 py-4 bg-zinc-800 text-white rounded-2xl text-xs font-black uppercase tracking-widest hover:bg-violet-600 border border-zinc-700 hover:border-violet-500 transition-all shadow-xl"
                  >
                    {link.label}
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
