
import React from 'react';

const Features: React.FC = () => {
  return (
    <section id="engine" className="py-24 bg-slate-50 dark:bg-slate-900/50 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto space-y-32">
        
        {/* Module 1: Functional Foundation */}
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2">
            <div className="inline-block bg-sky-500/10 text-sky-500 text-[10px] font-black px-4 py-1 rounded-full tracking-[0.3em] uppercase mb-6">Module 01 // Visibility</div>
            <h2 className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white mb-8 italic uppercase tracking-tighter leading-none">
              Get <span className="text-sky-500">Found.</span> <br />Showcase Success.
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-400 mb-8 leading-relaxed font-medium">
              We provide a functional website that ensures your business is visible exactly where it matters. 
            </p>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                "10 to 20 High-Converting Pages",
                "Optimized for Local Google Search",
                "Full Mobile-Responsive Design",
                "Real-Time Project Showcasing"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-sm font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest">
                  <div className="w-1.5 h-1.5 bg-sky-500 rounded-full"></div>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:w-1/2 relative">
             <div className="aspect-video bg-slate-200 dark:bg-slate-800 rounded-2xl border border-slate-300 dark:border-slate-700 overflow-hidden shadow-2xl relative">
                <div className="absolute inset-0 radar-grid opacity-10"></div>
                <div className="absolute inset-x-0 top-0 h-6 bg-slate-300 dark:bg-slate-700 flex items-center px-4 gap-1.5">
                   <div className="w-2 h-2 rounded-full bg-red-400"></div>
                   <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
                   <div className="w-2 h-2 rounded-full bg-green-400"></div>
                </div>
                <div className="p-8 pt-12">
                   <div className="h-4 bg-sky-500/20 w-32 rounded mb-4"></div>
                   <div className="h-8 bg-sky-500 w-full rounded mb-6"></div>
                   <div className="grid grid-cols-3 gap-4">
                      <div className="h-20 bg-slate-400/20 rounded"></div>
                      <div className="h-20 bg-slate-400/20 rounded"></div>
                      <div className="h-20 bg-slate-400/20 rounded"></div>
                   </div>
                </div>
             </div>
          </div>
        </div>

        {/* Module 2: Five-Star Magic Review Funnel */}
        <div className="flex flex-col lg:flex-row-reverse items-center gap-16">
          <div className="lg:w-1/2">
            <div className="inline-block bg-indigo-500/10 text-indigo-500 text-[10px] font-black px-4 py-1 rounded-full tracking-[0.3em] uppercase mb-6">Module 02 // Reputation Shield</div>
            <h2 className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white mb-8 italic uppercase tracking-tighter leading-none">
              Five-Star <span className="text-indigo-500">Magic</span> Funnel.
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-400 mb-8 leading-relaxed font-medium italic">
              "I'll leave you a review," but truth is, people forget. We make sure they don't.
            </p>
            <p className="text-slate-500 dark:text-slate-400 mb-8 font-medium">
              Stop worrying about bad reviews. If you're unsure if you should ask, we take the guesswork out by guiding your customer to leave a five-star review.
            </p>
            <div className="space-y-6">
              <div className="p-6 rounded-2xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-white/5 shadow-xl">
                 <h4 className="text-xs font-black text-indigo-500 uppercase tracking-widest mb-2">Automated Persistence</h4>
                 <p className="text-sm text-slate-500">We gently remind customers for a few weeks until they remember. One-click, zero friction.</p>
              </div>
              <div className="p-6 rounded-2xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-white/5 shadow-xl">
                 <h4 className="text-xs font-black text-indigo-500 uppercase tracking-widest mb-2">Selective Routing</h4>
                 <p className="text-sm text-slate-500">Systemically engineered to capture 5-star reviews only. Negative feedback is routed privately for your attention.</p>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 grid grid-cols-2 gap-6">
             <div className="aspect-square bg-white dark:bg-slate-800 rounded-3xl shadow-xl flex flex-col items-center justify-center p-8 border border-slate-100 dark:border-white/5">
                <div className="text-4xl mb-4">✨</div>
                <div className="text-[10px] font-black text-indigo-500 uppercase tracking-[0.2em] text-center">Auto-Reminder Dispatch</div>
             </div>
             <div className="aspect-square bg-indigo-600 rounded-3xl shadow-2xl flex flex-col items-center justify-center p-8 text-white">
                <div className="text-4xl font-black mb-2">100%</div>
                <div className="text-[10px] font-black uppercase tracking-[0.2em] text-center">Review Capture Target</div>
             </div>
          </div>
        </div>

        {/* Module 3: Missed Call Text Back */}
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2">
            <div className="inline-block bg-emerald-500/10 text-emerald-500 text-[10px] font-black px-4 py-1 rounded-full tracking-[0.3em] uppercase mb-6">Module 03 // Responsive Link</div>
            <h2 className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white mb-8 italic uppercase tracking-tighter leading-none">
              Missed Call <br /><span className="text-emerald-500 text-6xl md:text-8xl">Text Back.</span>
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-400 mb-8 leading-relaxed font-medium">
              No more lost leads. Show customers you care and stand out from your competition by being available 24/7.
            </p>
            <div className="grid grid-cols-2 gap-4">
               {[
                 { label: "Lost Leads", value: "0%" },
                 { label: "Response Time", value: "<10s" },
                 { label: "Availability", value: "24/7" },
                 { label: "Conversion Lift", value: "40%+" }
               ].map((stat, i) => (
                 <div key={i} className="p-4 border-l-2 border-emerald-500/30 bg-white dark:bg-slate-950/50">
                    <div className="text-xs font-black text-emerald-500 uppercase tracking-widest">{stat.label}</div>
                    <div className="text-xl font-black text-slate-900 dark:text-white italic">{stat.value}</div>
                 </div>
               ))}
            </div>
          </div>
          <div className="lg:w-1/2 relative p-8">
             <div className="bg-slate-950 rounded-[2.5rem] p-10 border border-white/10 shadow-3xl transform -rotate-1 relative group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 blur-3xl rounded-full"></div>
                <div className="space-y-6">
                   <div className="flex justify-end">
                      <div className="bg-slate-800 text-white p-4 rounded-2xl rounded-tr-none text-xs font-medium max-w-[80%]">
                         "Hey, I'm looking for a quote on a new roof. Can you help?"
                      </div>
                   </div>
                   <div className="flex justify-start">
                      <div className="bg-emerald-600 text-white p-4 rounded-2xl rounded-tl-none text-xs font-black uppercase tracking-widest max-w-[80%] animate-in slide-in-from-left-4 duration-1000">
                         "STRATUS AUTO-REPLY: Sorry we missed your call! How can we assist you today? 🛠️"
                      </div>
                   </div>
                </div>
             </div>
          </div>
        </div>

        {/* Module 4: Marketing Matrix */}
        <div className="p-16 rounded-[3rem] bg-slate-950 text-white relative overflow-hidden border border-white/10">
           <div className="absolute inset-0 radar-grid opacity-5"></div>
           <div className="relative z-10 flex flex-col lg:flex-row gap-16 items-center">
              <div className="lg:w-1/2">
                 <div className="inline-block bg-white/10 px-4 py-1 rounded-full text-[10px] font-black tracking-widest mb-6 border border-white/20 uppercase">Module 04 // Growth Matrix</div>
                 <h2 className="text-4xl md:text-5xl font-black mb-6 italic uppercase tracking-tighter leading-none">One-Click <span className="text-sky-500 underline">Campaigns.</span></h2>
                 <p className="text-lg text-slate-400 mb-8 font-medium">
                    Referrals and repeat customers are the best. Let's get you both. Our system puts return customer campaigns and referral engines at your fingertips.
                 </p>
                 <div className="space-y-4 mb-10">
                    <div className="flex items-center gap-3">
                       <div className="w-2 h-2 bg-sky-500 rounded-full"></div>
                       <span className="text-[10px] font-black uppercase tracking-[0.2em]">Done-for-you Referral Dispatch</span>
                    </div>
                    <div className="flex items-center gap-3">
                       <div className="w-2 h-2 bg-sky-500 rounded-full"></div>
                       <span className="text-[10px] font-black uppercase tracking-[0.2em]">Repeat Client Reactivation</span>
                    </div>
                    <div className="flex items-center gap-3">
                       <div className="w-2 h-2 bg-sky-500 rounded-full text-sky-500">
                          <svg className="w-2 h-2" fill="currentColor" viewBox="0 0 20 20"><circle cx="10" cy="10" r="10"/></svg>
                       </div>
                       <span className="text-[10px] font-black uppercase tracking-[0.2em] text-sky-500">Integrated with Local SEO Protocol</span>
                    </div>
                 </div>
                 <a 
                   href="https://stratusmarketingllc.com" 
                   target="_blank" 
                   className="inline-flex items-center gap-4 px-8 py-4 bg-white text-slate-950 rounded-xl text-[10px] font-black uppercase tracking-[0.3em] hover:bg-sky-500 hover:text-white transition-all group"
                 >
                    Access Advanced Marketing Services
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                 </a>
              </div>
              <div className="lg:w-1/2 grid grid-cols-1 gap-4">
                 <div className="p-8 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-between">
                    <div>
                       <div className="text-[10px] font-black text-sky-500 uppercase tracking-widest mb-1">Local SEO</div>
                       <div className="text-lg font-black italic uppercase">Qualified Leads</div>
                    </div>
                    <div className="w-12 h-12 bg-sky-500/20 rounded-lg flex items-center justify-center text-sky-500 font-black">
                       ↑
                    </div>
                 </div>
                 <div className="p-8 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-between opacity-50">
                    <div>
                       <div className="text-[10px] font-black uppercase tracking-widest mb-1">Unqualified Leads</div>
                       <div className="text-lg font-black italic uppercase">Eliminated</div>
                    </div>
                    <div className="w-12 h-12 bg-red-500/20 rounded-lg flex items-center justify-center text-red-500 font-black">
                       ✕
                    </div>
                 </div>
              </div>
           </div>
        </div>

      </div>
    </section>
  );
};

export default Features;
