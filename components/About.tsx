
import React from 'react';
import { PROFESSIONAL_SUMMARY } from '../constants';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 bg-zinc-950/50 border-y border-zinc-900">
      <div className="max-w-4xl mx-auto text-center">
         <h2 className="text-xs font-bold text-indigo-400 uppercase tracking-[0.3em] mb-8">Professional Summary</h2>
         <p className="text-2xl md:text-3xl text-zinc-300 font-medium leading-relaxed italic">
           "{PROFESSIONAL_SUMMARY}"
         </p>
      </div>
    </section>
  );
};
