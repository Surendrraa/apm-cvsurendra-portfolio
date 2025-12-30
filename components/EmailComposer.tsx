
import React, { useState } from 'react';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export const EmailComposer: React.FC<Props> = ({ isOpen, onClose }) => {
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [isSending, setIsSending] = useState(false);
  const [sent, setSent] = useState(false);

  if (!isOpen) return null;

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);
    
    // Construct mailto link
    const mailtoLink = `mailto:cvsurendra2001@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;
    
    // Simulate a brief delay for UX
    setTimeout(() => {
      window.location.href = mailtoLink;
      setIsSending(false);
      setSent(true);
      setTimeout(() => {
        setSent(false);
        onClose();
      }, 2000);
    }, 8000);
  };

  return (
    <div className="fixed inset-0 z-[110] flex items-center justify-center px-4">
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm animate-in fade-in duration-300" 
        onClick={onClose} 
      />
      
      <div className="relative w-full max-w-lg bg-zinc-900 border border-zinc-800 rounded-[2rem] shadow-2xl overflow-hidden animate-in zoom-in-95 duration-300">
        {/* Header */}
        <div className="bg-zinc-800/50 px-6 py-4 border-b border-zinc-800 flex justify-between items-center">
          <h3 className="text-white font-bold text-sm uppercase tracking-widest">New Message</h3>
          <button onClick={onClose} className="text-zinc-500 hover:text-white transition-colors">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSend} className="p-6 space-y-4">
          <div className="space-y-1">
            <div className="flex border-b border-zinc-800 py-2">
              <span className="text-zinc-500 text-sm w-12">To:</span>
              <span className="text-zinc-300 text-sm font-medium">cvsurendra2001@gmail.com</span>
            </div>
            <div className="flex border-b border-zinc-800 py-2 items-center">
              <span className="text-zinc-500 text-sm w-12">Sub:</span>
              <input 
                required
                type="text" 
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                placeholder="Regarding APM Opportunity"
                className="flex-1 bg-transparent border-none text-white text-sm focus:ring-0 placeholder:text-zinc-700"
              />
            </div>
          </div>

          <textarea 
            required
            rows={8}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type your message here..."
            className="w-full bg-zinc-950/50 border border-zinc-800 rounded-2xl p-4 text-sm text-zinc-300 focus:border-indigo-500/50 focus:ring-0 transition-colors resize-none placeholder:text-zinc-700"
          />

          <div className="flex items-center justify-between pt-2">
            <div className="flex gap-2">
               {/* Fix: Correctly closed SVG tags and removed mismatched button closing tags */}
               <button type="button" className="p-2 text-zinc-500 hover:text-indigo-400 transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
               </button>
               {/* Fix: Correctly closed SVG tags and removed mismatched button closing tags */}
               <button type="button" className="p-2 text-zinc-500 hover:text-indigo-400 transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
               </button>
            </div>
            
            <button 
              type="submit"
              disabled={isSending || sent}
              className={`px-8 py-3 rounded-xl font-bold text-xs uppercase tracking-widest transition-all flex items-center gap-2 ${
                sent ? 'bg-green-600 text-white' : 'bg-indigo-600 hover:bg-indigo-500 text-white shadow-lg shadow-indigo-600/20'
              } disabled:opacity-70`}
            >
              {isSending ? (
                <>
                  <svg className="animate-spin h-4 w-4 text-white" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
                  Sending...
                </>
              ) : sent ? (
                <>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  Sent!
                </>
              ) : (
                <>
                  Send Message
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
