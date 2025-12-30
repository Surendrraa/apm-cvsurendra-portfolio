
import React from 'react';
import { ScreenMockup } from '../types';

interface Props {
  screen: ScreenMockup;
  caseStudyId?: string;
}

export const MobileScreenRenderer: React.FC<Props> = ({ screen, caseStudyId }) => {
  const isWhatsApp = caseStudyId === 'whatsapp-ai';
  const isRapido = caseStudyId === 'rapido-pooling';
  const isPromptsDen = caseStudyId === 'prompts-den';

  // Branding Colors
  const rapidoYellow = '#FDE047'; 
  const rapidoBlack = '#000000';
  const denPurple = '#8B5CF6'; // Electric Purple for Prompts Den
  const darkBg = '#09090b';
  const whatsappDark = '#0b141a';
  const whatsappHeader = '#202c33';
  const whatsappGreen = '#00a884';

  const StatusBar = ({ color = 'white' }: { color?: string }) => (
    <div className="flex justify-between items-center px-6 pt-2 pb-1 text-[10px] font-bold" style={{ color }}>
      <span>9:41</span>
      <div className="flex items-center gap-1.5">
        <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24"><path d="M12 21L15.5 17.5L12 14L8.5 17.5L12 21Z" /><path d="M12 3C7.03 3 3 7.03 3 12C3 16.97 7.03 21 12 21C16.97 21 21 16.97 21 12C21 7.03 16.97 3 12 3ZM12 19C8.13 19 5 15.87 5 12C5 8.13 8.13 5 12 5C15.87 5 19 12C19 15.87 15.87 19 12 19Z" /></svg>
        <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24"><path d="M15.67 4H14V2h-4v2H8.33C7.6 4 7 4.6 7 5.33v15.33C7 21.4 7.6 22 8.33 22h7.33c.74 0 1.34-.6 1.34-1.34V5.33C17 4.6 16.4 4 15.67 4z" /></svg>
      </div>
    </div>
  );

  const Header = ({ title, bg, color, subtitle }: { title: string; bg: string; color: string; subtitle?: string }) => (
    <div className={`p-4 flex items-center gap-4 sticky top-0 z-20 shadow-lg`} style={{ backgroundColor: bg }}>
      <button className="p-1 hover:bg-black/5 rounded-full transition-colors">
        <svg className="w-5 h-5" style={{ color }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <div>
        <span className="font-extrabold text-[13px] uppercase tracking-tight block leading-tight" style={{ color }}>{title}</span>
        {subtitle && <span className="text-[9px] font-bold opacity-60 block uppercase mt-0.5" style={{ color }}>{subtitle}</span>}
      </div>
    </div>
  );

  const PromptsDenScreen = () => {
    switch (screen.type) {
      case 'home':
        return (
          <div className="flex-1 bg-zinc-950 flex flex-col">
            <StatusBar />
            <Header title="Prompts Den" bg={denPurple} color="white" subtitle="Storage & Organization" />
            <div className="p-5 space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-zinc-900 p-5 rounded-3xl border border-white/5 space-y-2">
                  <p className="text-zinc-500 text-[9px] font-black uppercase">Stored Prompts</p>
                  <p className="text-2xl font-black text-white italic">42</p>
                </div>
                <div className="bg-zinc-900 p-5 rounded-3xl border border-white/5 space-y-2">
                  <p className="text-zinc-500 text-[9px] font-black uppercase">Categories</p>
                  <p className="text-2xl font-black text-white italic">08</p>
                </div>
              </div>

              <div className="space-y-4">
                <p className="text-zinc-500 text-[10px] font-black uppercase tracking-widest px-1">Recent Collections</p>
                <div className="space-y-3">
                  {['Copywriting Pro', 'Bug Debugger', 'Social Media Suite'].map((collection, i) => (
                    <div key={i} className="bg-zinc-900/50 border border-white/5 p-4 rounded-2xl flex items-center justify-between group hover:border-purple-500/30 transition-all">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-zinc-800 rounded-xl flex items-center justify-center text-purple-400 group-hover:scale-110 transition-transform">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                        </div>
                        <span className="text-white font-bold text-xs">{collection}</span>
                      </div>
                      <svg className="w-4 h-4 text-zinc-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M9 5l7 7-7 7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );
      case 'browse':
        return (
          <div className="flex-1 bg-zinc-950 flex flex-col">
            <StatusBar />
            <Header title="Library" bg={denPurple} color="white" />
            <div className="p-4 space-y-4 overflow-y-auto no-scrollbar">
              <div className="flex gap-2 mb-2 overflow-x-auto no-scrollbar">
                {['All', 'Coding', 'Writing', 'Marketing', 'Legal'].map((cat, i) => (
                  <span key={i} className={`px-4 py-2 rounded-full text-[10px] font-black uppercase whitespace-nowrap ${i === 1 ? 'bg-purple-600 text-white' : 'bg-zinc-900 text-zinc-500 border border-white/5'}`}>{cat}</span>
                ))}
              </div>
              {[
                { title: 'Python Refactorer', desc: 'Optimize legacy code for clean architecture...', variables: 2 },
                { title: 'Landing Page Hook', desc: 'Generate 5 compelling hooks based on ICP...', variables: 3 },
                { title: 'Contract Summarizer', desc: 'Extract key clauses and liability terms...', variables: 1 }
              ].map((item, i) => (
                <div key={i} className="bg-zinc-900 border border-white/5 p-5 rounded-[2rem] space-y-3 hover:border-purple-500/20 transition-all">
                  <div className="flex justify-between items-start">
                    <h5 className="text-white font-black text-sm italic">{item.title}</h5>
                    <span className="text-[9px] font-black text-purple-400 uppercase">{item.variables} Vars</span>
                  </div>
                  <p className="text-zinc-500 text-[10px] leading-relaxed line-clamp-2">{item.desc}</p>
                  <div className="flex gap-2 pt-2">
                    <button className="flex-1 py-2.5 bg-zinc-800 text-zinc-400 rounded-xl font-black text-[9px] uppercase tracking-widest">Preview</button>
                    <button className="flex-1 py-2.5 bg-purple-600 text-white rounded-xl font-black text-[9px] uppercase tracking-widest shadow-lg shadow-purple-600/20">Use</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      case 'edit':
        return (
          <div className="flex-1 bg-zinc-950 flex flex-col">
            <StatusBar />
            <Header title="Smart Editor" bg={denPurple} color="white" subtitle="New Prompt Template" />
            <div className="p-5 flex-1 space-y-6 overflow-y-auto">
              <div className="space-y-2">
                <label className="text-zinc-500 text-[9px] font-black uppercase tracking-widest ml-1">Title</label>
                <input className="w-full bg-zinc-900 border border-white/5 rounded-2xl px-4 py-3 text-xs text-white" defaultValue="SEO Blog Outliner" />
              </div>
              <div className="space-y-2 flex-1 flex flex-col">
                <div className="flex justify-between items-center ml-1">
                  <label className="text-zinc-500 text-[9px] font-black uppercase tracking-widest">Prompt Logic</label>
                  <span className="text-purple-400 text-[8px] font-black uppercase bg-purple-400/10 px-2 py-0.5 rounded">Vars: [topic], [tone]</span>
                </div>
                <div className="flex-1 bg-zinc-900 border border-white/5 rounded-[2rem] p-4 text-xs font-mono text-zinc-400 leading-relaxed">
                  "Act as a senior content strategist. Create a detailed blog outline for <span className="text-purple-400 font-bold">[topic]</span> using a <span className="text-purple-400 font-bold">[tone]</span> voice. Include H1, H2s and bullet points for sections."
                </div>
              </div>
            </div>
            <div className="p-4 border-t border-white/5 bg-zinc-950">
              <button className="w-full py-4 bg-purple-600 text-white rounded-3xl font-black text-[10px] uppercase tracking-[0.2em] shadow-2xl active:scale-95 transition-all">Save Template</button>
            </div>
          </div>
        );
      case 'analytics':
        return (
          <div className="flex-1 bg-zinc-950 flex flex-col">
            <StatusBar />
            <Header title="Analytics" bg={denPurple} color="white" />
            <div className="p-5 space-y-6">
              <div className="bg-zinc-900 p-6 rounded-[2.5rem] border border-white/5 text-center space-y-1">
                <p className="text-zinc-500 text-[10px] font-black uppercase tracking-widest">Total Tokens Saved</p>
                <p className="text-4xl font-black text-white italic">1.2M</p>
              </div>
              
              <div className="space-y-4">
                <p className="text-zinc-500 text-[10px] font-black uppercase tracking-widest px-1">Top Efficiency Prompts</p>
                {[
                  { name: 'PRD Builder', usage: 88, efficiency: '+45%' },
                  { name: 'Cold Email Gen', usage: 64, efficiency: '+32%' },
                  { name: 'SQL Query Fix', usage: 42, efficiency: '+28%' }
                ].map((stat, i) => (
                  <div key={i} className="bg-zinc-900/50 p-4 rounded-2xl border border-white/5 flex items-center justify-between">
                    <div>
                      <p className="text-white font-bold text-xs">{stat.name}</p>
                      <p className="text-zinc-600 text-[9px] font-black uppercase">{stat.usage} Times Used</p>
                    </div>
                    <div className="text-right">
                      <p className="text-emerald-400 font-black text-xs italic">{stat.efficiency}</p>
                      <p className="text-zinc-600 text-[8px] font-bold uppercase">ROI</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );
      default:
        return <div className="flex-1 bg-zinc-950 flex items-center justify-center text-zinc-700 text-[11px] uppercase font-black tracking-widest italic">UI Prototype Active</div>;
    }
  };

  const RapidoScreen = () => {
    switch (screen.type) {
      case 'home':
        return (
          <div className="flex-1 bg-[#09090b] flex flex-col">
            <StatusBar />
            <Header title="Ride Pool Home" bg={rapidoYellow} color={rapidoBlack} subtitle="Split costs, save more" />
            <div className="p-4 space-y-4">
              <div className="flex gap-3">
                <button 
                  className="flex-1 p-4 rounded-3xl flex flex-col items-center gap-2 shadow-lg active:scale-95 transition-all"
                  style={{ backgroundColor: rapidoYellow }}
                >
                  <div className="w-10 h-10 bg-black rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6" fill="none" stroke={rapidoYellow} viewBox="0 0 24 24"><path d="M12 4v16m8-8H4" strokeWidth="2.5"/></svg>
                  </div>
                  <span className="text-black font-black text-[10px] uppercase">Post Journey</span>
                </button>
                <button className="flex-1 bg-zinc-900 border border-zinc-800 p-4 rounded-3xl flex flex-col items-center gap-2 active:scale-95 transition-all">
                  <div className="w-10 h-10 bg-zinc-800 rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-zinc-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" strokeWidth="2.5"/></svg>
                  </div>
                  <span className="text-white font-black text-[10px] uppercase">Find Rides</span>
                </button>
              </div>

              <div className="space-y-4 pt-2">
                <div className="flex justify-between items-center">
                  <p className="text-zinc-500 font-black text-[10px] uppercase tracking-widest">Scheduled Rides</p>
                  <span className="text-[10px] font-bold uppercase" style={{ color: rapidoYellow }}>View All</span>
                </div>
                <div className="bg-zinc-900 border border-zinc-800 p-4 rounded-[2rem] flex items-center justify-between group hover:border-zinc-700 transition-colors">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-zinc-800 rounded-2xl flex items-center justify-center text-xl shadow-inner border border-zinc-700">🏢</div>
                    <div>
                      <p className="text-white font-bold text-xs">HSR ↔ Bellandur</p>
                      <p className="text-zinc-500 text-[9px] font-medium">Tomorrow, 08:45 AM ● 1 Seat Joined</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-black text-sm italic" style={{ color: rapidoYellow }}>₹67</p>
                    <p className="text-green-500 text-[8px] font-black uppercase mt-0.5">Hosting</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      case 'post':
        return (
          <div className="flex-1 bg-[#09090b] flex flex-col">
            <StatusBar />
            <Header title="Post Journey" bg={rapidoYellow} color={rapidoBlack} />
            <div className="p-5 flex-1 space-y-6 overflow-y-auto">
              <div className="space-y-4 bg-zinc-900 p-6 rounded-[2.5rem] border border-zinc-800 relative shadow-inner">
                <div className="absolute left-8 top-10 bottom-10 w-0.5 border-l border-dashed border-zinc-700"></div>
                <div className="relative pl-8">
                  <div className="absolute left-0 top-1.5 w-4 h-4 rounded-full bg-green-500 border-4 border-zinc-900 shadow-lg"></div>
                  <label className="text-[9px] font-black text-zinc-500 uppercase mb-1 block tracking-widest">Pickup Address</label>
                  <div className="text-white font-bold text-[13px] leading-tight">HSR Layout, Sector 7, Bangalore</div>
                </div>
                <div className="relative pl-8 pt-4">
                  <div className="absolute left-0 top-1.5 w-4 h-4 rounded-full bg-red-500 border-4 border-zinc-900 shadow-lg"></div>
                  <label className="text-[9px] font-black text-zinc-500 uppercase mb-1 block tracking-widest">Drop Address</label>
                  <div className="text-white font-bold text-[13px] leading-tight">Embassy Tech Village, Bellandur</div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-zinc-900 p-4 rounded-3xl border border-zinc-800">
                   <p className="text-[9px] text-zinc-500 font-bold uppercase mb-1.5 tracking-widest">Departure</p>
                   <p className="text-white font-black text-sm italic">Mon, 08:45 AM</p>
                </div>
                <div className="bg-zinc-900 p-4 rounded-3xl border border-zinc-800">
                   <p className="text-[9px] text-zinc-500 font-bold uppercase mb-1.5 tracking-widest">Seats</p>
                   <div className="flex gap-2">
                      {[1,2,3].map(n => <div key={n} style={{ backgroundColor: n === 2 ? rapidoYellow : '', color: n === 2 ? rapidoBlack : '' }} className={`w-8 h-8 rounded-xl flex items-center justify-center text-[11px] font-black ${n === 2 ? 'shadow-lg' : 'bg-zinc-800 text-zinc-600 border border-zinc-700'}`}>{n}</div>)}
                   </div>
                </div>
              </div>
            </div>
            <div className="p-4 border-t border-zinc-900 bg-zinc-950/50">
              <button 
                className="w-full py-5 text-black rounded-[2.5rem] font-black text-xs uppercase tracking-[0.2em] shadow-2xl active:scale-95 transition-all"
                style={{ backgroundColor: rapidoYellow }}
              >Publish Journey</button>
            </div>
          </div>
        );
      case 'browse':
        return (
          <div className="flex-1 bg-[#09090b] flex flex-col">
            <StatusBar />
            <Header title="Browse Rides" bg={rapidoYellow} color={rapidoBlack} subtitle="Searching for Bellandur" />
            <div className="p-4 space-y-4 overflow-y-auto no-scrollbar pb-20">
              <div className="relative group mb-4">
                <input className="w-full bg-zinc-900 border border-zinc-800 rounded-3xl py-4 pl-12 pr-4 text-xs text-white focus:outline-none transition-colors" placeholder="Search another route..." />
                <svg className="w-5 h-5 text-zinc-500 absolute left-4 top-1/2 -translate-y-1/2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" strokeWidth="2"/></svg>
              </div>
              {[
                { name: 'Sameer K.', from: 'HSR Layout', to: 'Bellandur Gate', car: 'Toyota Glanza', seats: '2/3', price: '₹67', time: '8:45 AM', tag: 'Top Host' },
                { name: 'Arjun P.', from: 'Koramangala 4th Block', to: 'Ecospace, Bellandur', car: 'Honda City', seats: '1/3', price: '₹67', time: '9:15 AM', tag: 'Verified' }
              ].map((ride, i) => (
                <div key={i} className="bg-zinc-900 border border-zinc-800 p-5 rounded-[2.5rem] space-y-4 hover:border-zinc-700 transition-all shadow-lg">
                  <div className="flex justify-between items-start">
                    <div className="flex items-center gap-3">
                       <div className="w-12 h-12 bg-zinc-800 rounded-2xl flex items-center justify-center font-black text-white shadow-xl border border-zinc-700 relative">
                          {ride.name[0]}
                       </div>
                       <div>
                         <p className="text-white font-black text-sm italic leading-none">{ride.name}</p>
                         <p className="text-[8px] font-black uppercase mt-1.5" style={{ color: rapidoYellow }}>{ride.tag}</p>
                       </div>
                    </div>
                    <div className="text-right">
                       <p className="text-white font-black text-lg italic leading-none">{ride.price}</p>
                       <p className="text-zinc-500 text-[9px] font-bold mt-1 uppercase">{ride.time}</p>
                    </div>
                  </div>

                  {/* Route Details */}
                  <div className="relative pl-6 py-1 space-y-3">
                    <div className="absolute left-[7px] top-2 bottom-2 w-0.5 border-l border-dashed border-zinc-700"></div>
                    <div className="relative">
                      <div className="absolute -left-[22px] top-1 w-2.5 h-2.5 rounded-full bg-green-500 border-2 border-zinc-900 shadow-sm"></div>
                      <p className="text-zinc-300 font-bold text-[11px] truncate leading-tight uppercase tracking-wide">{ride.from}</p>
                    </div>
                    <div className="relative">
                      <div className="absolute -left-[22px] top-1 w-2.5 h-2.5 rounded-full bg-red-500 border-2 border-zinc-900 shadow-sm"></div>
                      <p className="text-zinc-300 font-bold text-[11px] truncate leading-tight uppercase tracking-wide">{ride.to}</p>
                    </div>
                  </div>

                  <div className="flex justify-between items-center pt-3 border-t border-zinc-800/50">
                     <div className="flex items-center gap-1.5">
                       <span className="text-zinc-500 text-[9px] font-black uppercase">{ride.seats} Seats</span>
                       <span className="text-zinc-700 text-[8px]">●</span>
                       <span className="text-zinc-500 text-[9px] font-black uppercase">{ride.car}</span>
                     </div>
                     <button 
                       className="px-6 py-2.5 text-black rounded-2xl font-black text-[10px] uppercase tracking-widest shadow-xl active:scale-95 transition-all"
                       style={{ backgroundColor: rapidoYellow }}
                     >Request</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      case 'details':
        return (
          <div className="flex-1 bg-[#09090b] flex flex-col relative">
            <StatusBar />
            <Header title="Journey Details" bg={rapidoYellow} color={rapidoBlack} subtitle="Atomic Split in Progress" />
            <div className="flex-1 overflow-y-auto no-scrollbar">
              {/* Mock Map View */}
              <div className="h-44 bg-zinc-900 relative overflow-hidden border-b border-zinc-800">
                <div className="absolute inset-0 opacity-20" style={{ backgroundImage: `radial-gradient(${rapidoYellow} 1px, transparent 1px)`, backgroundSize: '24px 24px' }}></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-1 bg-yellow-400/30 rounded-full"></div>
                <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-green-500 border-2 border-white shadow-lg"></div>
                <div className="absolute top-1/2 right-1/4 translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-red-500 border-2 border-white shadow-lg"></div>
              </div>

              <div className="p-5 space-y-6">
                {/* Atomic Split Progress */}
                <div className="bg-zinc-900 p-5 rounded-[2rem] border border-zinc-800 space-y-3">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-[10px] font-black text-white uppercase tracking-wider">Pool Filling</span>
                    <span className="text-[10px] font-black italic" style={{ color: rapidoYellow }}>66% Complete</span>
                  </div>
                  <div className="h-2 w-full bg-zinc-800 rounded-full overflow-hidden">
                    <div className="h-full w-2/3 shadow-[0_0_10px_rgba(249,217,73,0.3)]" style={{ backgroundColor: rapidoYellow }}></div>
                  </div>
                  <p className="text-[8px] text-zinc-500 font-bold uppercase text-center mt-2">Ride triggers at 100% capacity</p>
                </div>

                {/* Confirmed Riders List */}
                <div className="space-y-4">
                  <h4 className="text-[10px] text-zinc-500 font-black uppercase tracking-widest px-1">Confirmed Riders</h4>
                  
                  <div className="space-y-2">
                    {[
                      { name: 'Surendra C.V.', role: 'Host', status: 'Verified', cost: '₹67', color: 'bg-yellow-400', initial: 'S' },
                      { name: 'Arjun P.', role: 'Rider', status: 'Payment Done', cost: '₹67', color: 'bg-zinc-700', initial: 'A' },
                      { name: 'Waiting...', role: 'Open Seat', status: 'Available', cost: '-', color: 'bg-zinc-800 border-dashed border border-zinc-600', initial: '?' },
                    ].map((rider, idx) => (
                      <div key={idx} className="bg-zinc-900/50 border border-zinc-800/50 p-4 rounded-2xl flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <div 
                            className={`w-12 h-12 rounded-xl flex items-center justify-center font-black shadow-lg ${idx === 0 ? '' : rider.color}`}
                            style={idx === 0 ? { backgroundColor: rapidoYellow, color: rapidoBlack } : { color: 'white' }}
                          >
                            {rider.initial}
                          </div>
                          <div>
                            <p className="text-white font-black text-xs italic">{rider.name}</p>
                            <p className="text-zinc-500 text-[9px] font-bold uppercase mt-0.5">{rider.role} ● <span className={rider.status === 'Verified' ? 'text-green-500' : ''}>{rider.status}</span></p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="text-white font-black text-xs italic">{rider.cost}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Secure Chat Access */}
                <div className="bg-indigo-500/5 border border-indigo-500/10 p-4 rounded-3xl flex items-center justify-between group cursor-pointer hover:bg-indigo-500/10 transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-indigo-600/20 rounded-full flex items-center justify-center text-indigo-400">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    </div>
                    <div>
                      <p className="text-indigo-400 font-black text-[10px] uppercase">Pool Group Chat</p>
                      <p className="text-zinc-500 text-[8px] font-bold uppercase">4 New Messages</p>
                    </div>
                  </div>
                  <svg className="w-4 h-4 text-zinc-600 group-hover:text-indigo-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M9 5l7 7-7 7" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </div>
              </div>
            </div>

            {/* Sticky Actions */}
            <div className="p-4 bg-zinc-950/80 backdrop-blur-md border-t border-zinc-900 grid grid-cols-2 gap-3">
              <button className="py-4 bg-zinc-900 text-zinc-500 border border-zinc-800 rounded-3xl font-black text-[10px] uppercase tracking-wider hover:text-white transition-colors">Cancel</button>
              <button 
                className="py-4 text-black rounded-3xl font-black text-[10px] uppercase tracking-[0.2em] shadow-xl"
                style={{ backgroundColor: rapidoYellow }}
              >Share Route</button>
            </div>
          </div>
        );
      case 'chat':
        return (
          <div className="flex-1 bg-[#09090b] flex flex-col relative">
            <StatusBar />
            <Header title="Pool Group Chat" bg={rapidoYellow} color={rapidoBlack} subtitle="HSR ↔ Bellandur Pool" />
            <div className="flex-1 overflow-y-auto p-4 space-y-4 no-scrollbar pb-24">
              <div className="flex justify-center my-4">
                <span className="bg-zinc-900 text-zinc-500 px-4 py-1 rounded-full text-[8px] font-black uppercase tracking-widest border border-zinc-800">Today, 08:32 AM</span>
              </div>
              
              <div className="flex flex-col gap-1 items-start max-w-[80%]">
                <p className="text-[8px] font-black uppercase ml-1" style={{ color: rapidoYellow }}>Surendra (Host)</p>
                <div className="bg-zinc-900 text-zinc-300 p-3 rounded-2xl rounded-tl-none text-[11px] leading-relaxed border border-zinc-800">
                  Hi everyone! I've confirmed the pool. I'll be at the HSR Sector 7 park entrance by 8:45 AM. 🚗
                </div>
              </div>

              <div className="flex flex-col gap-1 items-end ml-auto max-w-[80%]">
                <p className="text-[8px] font-black text-zinc-500 uppercase mr-1">You</p>
                <div 
                  className="text-black p-3 rounded-2xl rounded-tr-none text-[11px] font-bold leading-relaxed shadow-lg"
                  style={{ backgroundColor: rapidoYellow }}
                >
                  Perfect, I'm just 2 mins away. See you there!
                </div>
              </div>

              <div className="flex flex-col gap-1 items-start max-w-[80%]">
                <p className="text-[8px] font-black text-zinc-400 uppercase ml-1">Arjun</p>
                <div className="bg-zinc-900 text-zinc-300 p-3 rounded-2xl rounded-tl-none text-[11px] leading-relaxed border border-zinc-800">
                  Waiting at the gate. Ready when you are! 👍
                </div>
              </div>
            </div>

            <div className="absolute bottom-0 left-0 right-0 p-4 bg-zinc-950/80 backdrop-blur-md border-t border-zinc-900 flex gap-3 items-center">
              <div className="flex-1 bg-zinc-900 border border-zinc-800 rounded-2xl px-4 py-3 flex items-center gap-3">
                <div className="text-zinc-500">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </div>
                <input className="bg-transparent border-none text-[11px] text-white focus:outline-none placeholder:text-zinc-700 w-full" placeholder="Message group..." />
              </div>
              <button 
                className="w-10 h-10 rounded-xl flex items-center justify-center text-black shadow-lg"
                style={{ backgroundColor: rapidoYellow }}
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M2.01 21L23 12L2.01 3L2 10L17 12L2 14L2.01 21Z"/></svg>
              </button>
            </div>
          </div>
        );
      case 'requests':
        return (
          <div className="flex-1 bg-[#09090b] flex flex-col">
            <StatusBar />
            <Header title="Ride Requests" bg={rapidoYellow} color={rapidoBlack} subtitle="2 Pending" />
            <div className="p-4 space-y-4">
              {[
                { name: 'Kiran R.', rating: '4.8', emoji: '👨‍💻' },
                { name: 'Sonia V.', rating: '4.9', emoji: '👩‍💼' }
              ].map((req, i) => (
                <div key={i} className="bg-zinc-900 p-6 rounded-[2.5rem] border border-zinc-800 space-y-5">
                  <div className="flex items-center gap-4">
                     <div className="w-14 h-14 bg-zinc-800 border border-zinc-700 rounded-2xl flex items-center justify-center text-2xl shadow-xl">{req.emoji}</div>
                     <div>
                       <p className="text-white font-black text-[14px] italic">{req.name}</p>
                       <p className="text-[10px] font-black" style={{ color: rapidoYellow }}>⭐ {req.rating} Rating</p>
                     </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <button className="py-3.5 bg-zinc-800 text-zinc-500 border border-zinc-700 rounded-2xl font-black text-[10px] uppercase active:scale-95 transition-all">Decline</button>
                    <button 
                      className="py-3.5 text-black rounded-2xl font-black text-[10px] uppercase shadow-xl active:scale-95 transition-all"
                      style={{ backgroundColor: rapidoYellow }}
                    >Accept</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      case 'mypools':
        return (
          <div className="flex-1 bg-[#09090b] flex flex-col">
            <StatusBar />
            <Header title="My Pools" bg={rapidoYellow} color={rapidoBlack} />
            <div className="flex gap-8 px-8 py-3 border-b border-zinc-900 overflow-x-auto no-scrollbar">
              {['Upcoming', 'Past'].map((tab, idx) => (
                <span key={tab} className={`text-[10px] font-black uppercase tracking-widest pb-3 cursor-pointer whitespace-nowrap transition-all ${idx === 0 ? 'border-b-2 pb-2' : 'text-zinc-600'}`} style={{ color: idx === 0 ? rapidoYellow : '', borderColor: idx === 0 ? rapidoYellow : '' }}>{tab}</span>
              ))}
            </div>
            <div className="p-4 space-y-4 flex-1 overflow-y-auto">
              {[
                { from: 'Silk Board', to: 'Marathahalli', date: 'Oct 12', cost: '₹54' },
                { from: 'HSR Layout', to: 'ITPL Main Rd', date: 'Oct 10', cost: '₹67' }
              ].map((item, i) => (
                <div key={i} className="flex justify-between items-center p-5 bg-zinc-900 border border-zinc-800 rounded-[2rem]">
                  <div>
                    <p className="text-white font-black text-[11px] italic">{item.from} ↔ {item.to}</p>
                    <p className="text-zinc-600 text-[9px] uppercase font-bold mt-0.5">{item.date}</p>
                  </div>
                  <p className="text-white font-black text-sm italic">{item.cost}</p>
                </div>
              ))}
            </div>
          </div>
        );
      default:
        return <div className="flex-1 bg-zinc-950 flex items-center justify-center text-zinc-700 text-[11px] uppercase font-black tracking-widest italic">UI Prototype Active</div>;
    }
  };

  const WhatsAppScreen = () => {
    switch (screen.type) {
      case 'home':
        return (
          <div className="flex-1 overflow-y-auto bg-[#0b141a]">
            <StatusBar color="white" />
            <Header title="WhatsApp" bg={whatsappHeader} color="white" />
            <div className="flex gap-8 px-6 py-3 border-b border-white/5">
              {['Chats', 'Updates', 'Calls'].map((t, idx) => (
                <span key={t} className={`text-[11px] font-black uppercase tracking-widest ${idx === 0 ? 'text-[#00a884] border-b-2 border-[#00a884] pb-2' : 'text-zinc-500'}`}>{t}</span>
              ))}
            </div>
            <div className="space-y-0">
              {[
                { name: 'Arjun (VibeKodes)', msg: 'New landing page is live! 🔥', time: '9:41 AM', ai: true },
                { name: 'Boss (Vegastack)', msg: 'Need a QA update for Q4.', time: '9:30 AM', ai: true },
                { name: 'Mom ❤️', msg: 'Beta ghar kab aaoge?', time: '8:15 AM', ai: false },
                { name: 'HSR Gang', msg: 'Dinner tonight?', time: 'Yesterday', ai: true }
              ].map((chat, i) => (
                <div key={i} className="flex items-center gap-4 p-5 border-b border-white/5 hover:bg-white/5 transition-colors">
                  <div className="w-14 h-14 bg-zinc-800 rounded-full flex items-center justify-center font-black text-white relative shadow-xl">
                    {chat.name[0]}
                    {chat.ai && <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-[#00a884] rounded-full border-2 border-[#0b141a] flex items-center justify-center text-[9px] font-black">AI</div>}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-center mb-1">
                      <p className="text-[#e9edef] font-black text-[15px] truncate">{chat.name}</p>
                      <span className="text-[10px] text-[#8696a0] font-bold">{chat.time}</span>
                    </div>
                    <p className="text-[13px] text-[#8696a0] truncate flex-1 font-medium">{chat.msg}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      case 'chat':
        return (
          <div className="flex-1 bg-[#0b141a] flex flex-col relative">
            <StatusBar color="white" />
            <Header title="Arjun (VibeKodes)" bg={whatsappHeader} color="white" subtitle="Online ● AI Mode Active" />
            <div className="flex-1 p-5 space-y-6 overflow-y-auto">
              <div className="flex justify-start">
                <div className="bg-[#202c33] text-[#e9edef] p-3.5 rounded-2xl rounded-tl-none text-[13px] max-w-[85%] shadow-lg">
                  Hey, saw the new gamified student dashboard. It looks sick! 🚀
                </div>
              </div>
              <div className="flex justify-end">
                <div className="bg-[#005c4b] text-[#e9edef] p-3.5 rounded-2xl rounded-tr-none text-[13px] max-w-[85%] shadow-lg">
                  Glad you liked it! Spent the whole night testing the point system.
                </div>
              </div>
              <div className="flex justify-start">
                <div className="bg-[#202c33] text-[#e9edef] p-3.5 rounded-2xl rounded-tl-none text-[13px] max-w-[85%] shadow-lg">
                  Nice. Also, did you finish that QA audit for Vegastack?
                </div>
              </div>
              <div className="flex justify-end">
                <div className="bg-[#005c4b] text-[#e9edef] p-3.5 rounded-2xl rounded-tr-none text-[13px] max-w-[85%] shadow-lg">
                  Yup, just wrapping up the PRD for the new module there. Multi-tasking as usual! 😅
                </div>
              </div>
              <div className="flex justify-start">
                <div className="bg-[#202c33] text-[#e9edef] p-3.5 rounded-2xl rounded-tl-none text-[13px] max-w-[85%] shadow-lg relative">
                  Bro, when are we doing the official launch? VibeKodes users are asking!
                  <span className="text-[9px] text-[#8696a0] absolute bottom-1 right-3 font-bold">9:41 AM</span>
                </div>
              </div>
              <div className="flex justify-center">
                <span className="bg-[#00a884]/10 text-[#00a884] px-5 py-2 rounded-full text-[10px] font-black uppercase tracking-[0.2em] border border-[#00a884]/20 shadow-sm">AI thinking in your tone...</span>
              </div>
            </div>
            <div className="p-4 bg-[#111b21] space-y-4 border-t border-white/5 shadow-2xl">
              <div className="flex gap-2 overflow-x-auto no-scrollbar pb-2">
                {['Next Monday for sure! 🔥', 'Wait, checking server logs', 'Just a few more fixes'].map(chip => (
                  <button key={chip} className="flex-none px-6 py-3.5 bg-[#00a884] text-white rounded-[1.5rem] text-[11px] font-black shadow-xl active:scale-95 transition-all border border-white/10 hover:bg-[#00c99d]">{chip}</button>
                ))}
              </div>
              <div className="flex items-center gap-3 bg-[#202c33] p-3 rounded-[2rem] border border-white/5">
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-xl">😊</div>
                <div className="flex-1 text-[14px] text-zinc-500 font-medium px-2">Type a message...</div>
                <div className="w-10 h-10 rounded-full bg-[#00a884] flex items-center justify-center text-white shadow-lg">
                   <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3z"/></svg>
                </div>
              </div>
            </div>
          </div>
        );
      case 'settings':
        return (
          <div className="flex-1 bg-[#0b141a] flex flex-col relative">
            <StatusBar color="white" />
            <Header title="AI Preferences" bg={whatsappHeader} color="white" subtitle="Features & Privacy" />
            <div className="flex-1 overflow-y-auto p-6 space-y-8">
               <div className="space-y-4">
                  <div className="flex justify-between items-center bg-[#202c33] p-5 rounded-3xl border border-white/5">
                     <div>
                        <p className="text-[#e9edef] font-black text-sm uppercase">Smart Reply Feature</p>
                        <p className="text-[#8696a0] text-[10px] font-medium mt-1">Enable AI-powered personalized reply chips.</p>
                     </div>
                     <div className="w-12 h-6 bg-[#00a884] rounded-full relative shadow-inner">
                        <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full"></div>
                     </div>
                  </div>

                  <div className="flex justify-between items-center bg-[#202c33] p-5 rounded-3xl border border-white/5">
                     <div>
                        <p className="text-[#e9edef] font-black text-sm uppercase">Auto-Style Analysis</p>
                        <p className="text-[#8696a0] text-[10px] font-medium mt-1">Learns your tone from past 50 chats.</p>
                     </div>
                     <div className="w-12 h-6 bg-[#00a884] rounded-full relative shadow-inner">
                        <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full"></div>
                     </div>
                  </div>
               </div>

               <div className="space-y-4 pt-4 border-t border-white/5">
                  <h5 className="text-[#00a884] font-black text-[10px] uppercase tracking-widest">Tone Settings</h5>
                  <div className="grid grid-cols-1 gap-3">
                     {['Casual (Default)', 'Formal', 'Hinglish Mix'].map((tone, idx) => (
                       <div key={tone} className={`p-4 rounded-2xl border transition-all flex justify-between items-center ${idx === 0 ? 'bg-[#00a884]/10 border-[#00a884]/30' : 'bg-[#202c33] border-white/5'}`}>
                          <span className={`text-[11px] font-black uppercase ${idx === 0 ? 'text-[#00a884]' : 'text-[#8696a0]'}`}>{tone}</span>
                          {idx === 0 && <svg className="w-4 h-4 text-[#00a884]" fill="currentColor" viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>}
                       </div>
                     ))}
                  </div>
               </div>

               <div className="p-6 bg-zinc-950/50 rounded-3xl border border-white/5 text-center">
                  <svg className="w-8 h-8 text-[#8696a0] mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  <p className="text-[9px] text-[#8696a0] font-black uppercase tracking-widest leading-relaxed">Privacy: All AI training and inference happens locally on your device. Your data never leaves WhatsApp.</p>
               </div>
            </div>
          </div>
        );
      default:
        return <div className="flex-1 bg-zinc-950 flex items-center justify-center text-zinc-700 text-[11px] uppercase font-black tracking-widest italic">UI Prototype Active</div>;
    }
  };

  return (
    <div className="flex flex-col gap-10 group">
      {/* Modern Android Bezel-less Frame */}
      <div 
        className={`relative mx-auto w-full aspect-[9/19] rounded-[3rem] border-[10px] border-zinc-900 overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.9)] transition-all duration-700 ring-2 ring-white/5 group-hover:scale-[1.04] group-hover:shadow-indigo-500/20 active:scale-[1.02] cursor-default`}
        style={{ backgroundColor: isWhatsApp ? whatsappDark : (isPromptsDen ? '#09090b' : darkBg) }}
      >
        <div className="flex flex-col h-full font-sans select-none overflow-hidden">
          {isRapido ? <RapidoScreen /> : (isPromptsDen ? <PromptsDenScreen /> : <WhatsAppScreen />)}
        </div>
        
        {/* Minimal Punch-hole Camera */}
        <div className="absolute top-3 left-1/2 -translate-x-1/2 w-2.5 h-2.5 rounded-full bg-zinc-950 z-30 shadow-inner ring-1 ring-white/5"></div>

        {/* Minimal Home Pill */}
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-24 h-1.5 bg-white/5 rounded-full z-30 pointer-events-none"></div>
      </div>
      
      <div className="text-center px-6 space-y-2 group-hover:translate-y-2 transition-transform duration-500">
        <h5 className="text-[15px] font-black text-white uppercase tracking-tighter leading-none italic block group-hover:text-indigo-400 transition-colors">{screen.title}</h5>
        <p className="text-[10px] text-zinc-600 font-bold leading-relaxed max-w-[240px] mx-auto block uppercase tracking-[0.2em]">{screen.description}</p>
      </div>
    </div>
  );
};
