
import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer id="contact" className="py-24 px-4 sm:px-6 lg:px-8 bg-zinc-950 border-t border-zinc-900">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center text-center">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 tracking-tight">Let's Discuss <span className="text-indigo-500">Product.</span></h2>
          <p className="text-zinc-400 max-w-xl mb-12 text-lg leading-relaxed text-center">
            Seeking an APM role where I can apply my attention to detail, user-centric thinking, and startup-tested ownership.
          </p>
          
          <div className="flex flex-wrap justify-center gap-6 mb-12">
            <div className="flex flex-col items-center gap-2 group cursor-pointer" onClick={() => window.location.href = 'tel:+918186874383'}>
              <div className="w-12 h-12 bg-zinc-900 border border-zinc-800 rounded-full flex items-center justify-center text-indigo-400 group-hover:bg-indigo-600 group-hover:text-white transition-all">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
              </div>
              <span className="text-white font-bold text-sm">+91 8186874383</span>
            </div>

            <a href="mailto:cvsurendra2001@gmail.com" className="flex flex-col items-center gap-2 group cursor-pointer">
              <div className="w-12 h-12 bg-zinc-900 border border-zinc-800 rounded-full flex items-center justify-center text-indigo-400 group-hover:bg-indigo-600 group-hover:text-white transition-all">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
              </div>
              <span className="text-white font-bold text-sm">cvsurendra2001@gmail.com</span>
            </a>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href="https://www.linkedin.com/in/surendra-c-v-0b3900259/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-3 px-8 py-5 bg-zinc-900 text-white border border-zinc-800 rounded-2xl font-bold hover:bg-zinc-800 transition-colors"
            >
               <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path></svg>
               LinkedIn Profile
            </a>
          </div>
          <div className="mt-24 pt-8 border-t border-zinc-900 w-full flex flex-col md:flex-row justify-between items-center gap-4 text-zinc-500 text-xs font-medium uppercase tracking-widest">
            <p>© 2024-2025 Associate Product Manager Portfolio</p>
            <div className="flex gap-8">
              <a href="https://vibekodes.com" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-400 transition-colors">VibeKodes</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
