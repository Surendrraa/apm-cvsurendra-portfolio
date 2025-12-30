import React, { useState, useRef, useEffect } from 'react';
import { getPortfolioResponse } from '../services/geminiService';

export const ChatBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: 'user' | 'ai', text: string }[]>([
    { role: 'ai', text: 'Hi! I am the AI Twin of CV Surendra. Ask me anything about my product journey, Vegastack experience, or VibeKodes!' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isLoading]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg = input;
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setInput('');
    setIsLoading(true);

    const aiMsg = await getPortfolioResponse(userMsg);
    setMessages(prev => [...prev, { role: 'ai', text: aiMsg || 'I encountered an issue. Please try again.' }]);
    setIsLoading(false);
  };

  const formatMessage = (text: string) => {
    // Basic markdown processing for bold and line breaks
    // 1. Handle Bold (**text**)
    // 2. Handle line breaks
    // 3. Handle bullet points
    const lines = text.split('\n');
    return lines.map((line, i) => {
      let processedLine = line.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
      processedLine = processedLine.replace(/^\* (.*)/g, '• $1');
      
      return (
        <div key={i} className={i !== 0 ? 'mt-1' : ''} dangerouslySetInnerHTML={{ __html: processedLine }} />
      );
    });
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isOpen ? (
        <div className="bg-zinc-900 border border-zinc-800 w-[90vw] max-w-[400px] rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden flex flex-col h-[550px] animate-in slide-in-from-bottom-4 duration-300">
          <div className="bg-zinc-800 p-5 flex justify-between items-center border-b border-zinc-700/50">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-10 h-10 bg-violet-600 rounded-xl flex items-center justify-center text-white font-black text-lg">S</div>
                <div className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 bg-green-500 rounded-full border-2 border-zinc-800" />
              </div>
              <div>
                <span className="font-black text-xs uppercase tracking-widest block text-white">APM Assistant</span>
                <span className="text-[10px] text-zinc-500 font-bold uppercase tracking-tight">Surendra's AI Twin</span>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-zinc-500 hover:text-white transition-colors p-2 hover:bg-zinc-700 rounded-lg">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div ref={scrollRef} className="flex-1 overflow-y-auto p-5 space-y-5 scroll-smooth no-scrollbar">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] px-5 py-3 rounded-2xl text-[13px] leading-relaxed ${
                  m.role === 'user' 
                  ? 'bg-violet-600 text-white font-medium rounded-tr-none shadow-lg shadow-violet-600/10' 
                  : 'bg-zinc-800 text-zinc-200 border border-zinc-700/50 rounded-tl-none'
                }`}>
                  {formatMessage(m.text)}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-zinc-800/50 border border-zinc-700/50 px-5 py-3 rounded-2xl rounded-tl-none text-[13px] text-zinc-500 italic animate-pulse">
                  Analyzing product strategy...
                </div>
              </div>
            )}
          </div>

          <div className="p-5 bg-zinc-950/50 border-t border-zinc-800/50">
            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Ask about my PM philosophy..."
                className="flex-1 bg-zinc-900 border border-zinc-700 rounded-xl px-4 py-3 text-[13px] text-white focus:outline-none focus:ring-2 focus:ring-violet-500/50 placeholder:text-zinc-600 transition-all"
              />
              <button 
                onClick={handleSend}
                disabled={isLoading || !input.trim()}
                className="bg-violet-600 hover:bg-violet-500 disabled:opacity-50 disabled:grayscale p-3 rounded-xl transition-all shadow-lg shadow-violet-600/20 active:scale-95 flex items-center justify-center"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="white">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </button>
            </div>
            <p className="text-[9px] text-zinc-600 text-center mt-3 font-bold uppercase tracking-widest">Powered by Gemini Flash 3</p>
          </div>
        </div>
      ) : (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-violet-600 hover:bg-violet-500 text-white p-5 rounded-[2rem] shadow-2xl shadow-violet-600/30 transition-all transform hover:scale-110 active:scale-95 flex items-center justify-center group relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
          <svg className="w-6 h-6 relative z-10 group-hover:rotate-12 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"></path>
          </svg>
          <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs group-hover:ml-3 transition-all duration-500 font-bold text-xs uppercase tracking-widest">Chat with AI</span>
        </button>
      )}
    </div>
  );
};