
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import SignupForm from './components/SignupForm';
import Footer from './components/Footer';
import BackgroundSystem from './components/BackgroundSystem';
import Contact from './components/Contact';
import Pricing from './components/Pricing';

type View = 'home' | 'engine' | 'contact' | 'pricing';

const App: React.FC = () => {
  const [view, setView] = useState<View>('home');

  // Scroll to top when changing views
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [view]);

  const renderContent = () => {
    switch (view) {
      case 'pricing':
        return <Pricing setView={setView} />;
      case 'contact':
        return <Contact setView={setView} />;
      case 'engine':
        return (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
            <section className="py-24 px-8 max-w-7xl mx-auto">
              <div className="text-center mb-24">
                <div className="inline-block bg-sky-500/10 border border-sky-500/20 text-sky-500 px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-[0.3em] mb-8">
                  Core Operational Framework
                </div>
                <h1 className="text-6xl md:text-9xl font-black text-slate-900 dark:text-white mb-12 uppercase italic tracking-tighter leading-none">
                  The <span className="text-sky-500">Engine.</span>
                </h1>
                <p className="text-2xl text-slate-500 dark:text-slate-400 max-w-3xl mx-auto font-medium leading-relaxed">
                  Go inside the technical architecture that powers the number one web designer platform. We don't just build sites; we deploy performance assets.
                </p>
              </div>

              {/* The 4-Phase Technical Breakdown (The Juice) */}
              <div className="grid gap-32 mb-40">
                {/* Phase 1: Structural Deployment */}
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                  <div>
                    <span className="text-sky-500 font-black text-[10px] uppercase tracking-[0.4em] mb-4 block">Phase 01 // Structural</span>
                    <h3 className="text-4xl font-black text-slate-900 dark:text-white uppercase italic mb-8 tracking-tighter">Foundation Building</h3>
                    <p className="text-lg text-slate-500 dark:text-slate-400 mb-8 leading-relaxed">
                      Every project begins with a 10 to 20 page build-out. This isn't just content; it's a structural network designed for maximum indexability. We deploy high-converting landing pages for every sector of your business.
                    </p>
                    <div className="p-6 bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-white/5 rounded-2xl">
                      <h4 className="text-[10px] font-black text-sky-500 uppercase tracking-widest mb-4">Core Deliverables</h4>
                      <ul className="space-y-3">
                        {["SEO-Optimized URL Architecture", "Proprietary Sub-Second Loading Stack", "Full Sector Coverage (10-20 Pages)", "Mobile-First UX Logic"].map((item, i) => (
                          <li key={i} className="flex items-center gap-3 text-xs font-bold text-slate-600 dark:text-slate-400 uppercase tracking-widest">
                            <div className="w-1 h-1 bg-sky-500 rounded-full"></div> {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="relative aspect-square bg-slate-200 dark:bg-slate-800 rounded-3xl overflow-hidden border border-slate-300 dark:border-white/10 p-8 flex items-center justify-center">
                     <div className="absolute inset-0 radar-grid opacity-20"></div>
                     <div className="grid grid-cols-4 grid-rows-4 gap-4 w-full h-full opacity-30">
                        {[...Array(16)].map((_, i) => (
                          <div key={i} className="bg-sky-500/20 rounded-md animate-pulse" style={{ animationDelay: `${i * 0.1}s` }}></div>
                        ))}
                     </div>
                     <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-48 h-48 bg-sky-500/10 border border-sky-500/20 rounded-full flex items-center justify-center animate-breathe-glow">
                           <span className="text-sky-500 font-black text-[10px] uppercase tracking-widest text-center">CORE SYSTEM<br/>DEPLOYMENT</span>
                        </div>
                     </div>
                  </div>
                </div>

                {/* Phase 2: Logic Integration */}
                <div className="grid lg:grid-cols-2 gap-16 items-center lg:flex-row-reverse">
                  <div className="lg:order-2">
                    <span className="text-indigo-500 font-black text-[10px] uppercase tracking-[0.4em] mb-4 block">Phase 02 // Cognitive</span>
                    <h3 className="text-4xl font-black text-slate-900 dark:text-white uppercase italic mb-8 tracking-tighter">Magic Review Funnel</h3>
                    <p className="text-lg text-slate-500 dark:text-slate-400 mb-8 leading-relaxed">
                      We hardcode your reputation shield directly into the platform. Our Magic Review Funnel identifies high-praise customers and guides them directly to your public profiles, while intercepting negative feedback for private resolution.
                    </p>
                    <div className="flex gap-4">
                       <div className="flex-1 p-6 bg-indigo-500/5 border border-indigo-500/20 rounded-2xl">
                          <div className="text-2xl font-black text-indigo-500 mb-1">98%</div>
                          <div className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Positive Routing</div>
                       </div>
                       <div className="flex-1 p-6 bg-red-500/5 border border-red-500/20 rounded-2xl">
                          <div className="text-2xl font-black text-red-500 mb-1">0%</div>
                          <div className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Review Leakage</div>
                       </div>
                    </div>
                  </div>
                  <div className="lg:order-1 relative aspect-square bg-slate-900 rounded-3xl overflow-hidden border border-white/5 p-12">
                     <div className="absolute inset-0 radar-grid opacity-10"></div>
                     <div className="flex flex-col h-full justify-between relative z-10">
                        <div className="p-4 bg-emerald-500/10 border border-emerald-500/20 rounded-xl flex items-center gap-4">
                           <div className="text-emerald-500">★★★★★</div>
                           <div className="h-2 w-full bg-emerald-500/20 rounded"></div>
                        </div>
                        <div className="flex justify-center">
                           <div className="w-1 h-24 bg-gradient-to-b from-indigo-500 to-transparent"></div>
                        </div>
                        <div className="p-4 bg-slate-800 border border-white/5 rounded-xl flex items-center justify-center">
                           <span className="text-[10px] font-black text-indigo-400 uppercase tracking-widest">REPUTATION PROTECTION ACTIVE</span>
                        </div>
                     </div>
                  </div>
                </div>

                {/* Phase 3: Communication Bridge */}
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                  <div>
                    <span className="text-emerald-500 font-black text-[10px] uppercase tracking-[0.4em] mb-4 block">Phase 03 // Connectivity</span>
                    <h3 className="text-4xl font-black text-slate-900 dark:text-white uppercase italic mb-8 tracking-tighter">Instant Relay Network</h3>
                    <p className="text-lg text-slate-500 dark:text-slate-400 mb-8 leading-relaxed">
                      This is where the money is made. Our system bridges the gap between lead generation and sales. The moment a lead hits your site, or a call is missed, our SMS Relay Node triggers an immediate response to the customer's phone.
                    </p>
                    <ul className="space-y-4">
                       {["Missed Call Text Back (24/7 Availability)", "Instant SMS Form Alerts to Your Phone", "Automatic Follow-up Reminder Sequences"].map((text, i) => (
                         <li key={i} className="flex gap-4 items-start">
                           <svg className="w-6 h-6 text-emerald-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"/></svg>
                           <span className="text-sm font-bold text-slate-600 dark:text-slate-400 uppercase tracking-widest">{text}</span>
                         </li>
                       ))}
                    </ul>
                  </div>
                  <div className="relative aspect-video bg-emerald-600/5 rounded-3xl border border-emerald-500/20 flex items-center justify-center overflow-hidden">
                     <div className="absolute inset-0 radar-grid opacity-10"></div>
                     <div className="text-center">
                        <div className="text-4xl font-black text-emerald-500 mb-4 animate-bounce">⚡</div>
                        <div className="text-[10px] font-black text-emerald-500 uppercase tracking-[0.4em]">RESPONSE LATENCY: &lt;200MS</div>
                     </div>
                  </div>
                </div>

                {/* Phase 4: Expansion Protocols */}
                <div className="grid lg:grid-cols-2 gap-16 items-center lg:flex-row-reverse">
                  <div className="lg:order-2">
                    <span className="text-amber-500 font-black text-[10px] uppercase tracking-[0.4em] mb-4 block">Phase 04 // Velocity</span>
                    <h3 className="text-4xl font-black text-slate-900 dark:text-white uppercase italic mb-8 tracking-tighter">Marketing Matrix</h3>
                    <p className="text-lg text-slate-500 dark:text-slate-400 mb-8 leading-relaxed">
                      We scale your reach with one-click marketing campaigns and deep Local SEO integration. By removing unqualified leads and supporting organic acquisition systems, we ensure you dominate your market sector.
                    </p>
                    <a href="https://stratusmarketingllc.com" target="_blank" className="inline-block px-8 py-4 bg-slate-900 dark:bg-white text-white dark:text-slate-950 rounded-xl text-[10px] font-black uppercase tracking-[0.3em] hover:bg-sky-500 dark:hover:bg-sky-500 dark:hover:text-white transition-all shadow-xl">
                       Explore Stratus Marketing Services
                    </a>
                  </div>
                  <div className="lg:order-1 relative aspect-square bg-slate-50 dark:bg-slate-900/40 rounded-3xl border border-slate-200 dark:border-white/5 p-16">
                     <div className="h-full flex flex-col items-center justify-center gap-8">
                        <div className="w-full h-8 bg-sky-500/20 rounded-full flex items-center px-4 overflow-hidden">
                           <div className="w-[85%] h-full bg-sky-500 animate-in slide-in-from-left duration-2000"></div>
                        </div>
                        <div className="w-full h-8 bg-indigo-500/20 rounded-full flex items-center px-4 overflow-hidden">
                           <div className="w-[95%] h-full bg-indigo-500 animate-in slide-in-from-left duration-2000 delay-500"></div>
                        </div>
                        <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Growth Vector Calibration</span>
                     </div>
                  </div>
                </div>
              </div>

              {/* The Process Timeline (Moved from Process tab) */}
              <div className="py-24 border-t border-slate-200 dark:border-white/5">
                <div className="inline-block bg-indigo-500/10 border border-indigo-500/20 text-indigo-500 px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-[0.3em] mb-8">
                  Execution Protocol
                </div>
                <h2 className="text-5xl md:text-7xl font-black text-slate-900 dark:text-white mb-16 uppercase italic tracking-tighter">
                  The <span className="text-indigo-500">Timeline.</span>
                </h2>
                <div className="space-y-12">
                  {[
                    { 
                      step: "01 Intelligence", 
                      title: "Demo Call", 
                      duration: "20 Minutes",
                      desc: "This is actually a sales call, but we didn't want to scare you. We will answer all your questions, show you any features you have questions about, and show you live client accounts and results." 
                    },
                    { 
                      step: "02 Construction", 
                      title: "Build Your System", 
                      duration: "7 to 10 Days",
                      desc: "Fill out a basic onboarding form with your business details. After we have the correct information, we will get to work on building your new website and marketing system." 
                    },
                    { 
                      step: "03 Deployment", 
                      title: "Launch Call", 
                      duration: "25 Minutes",
                      desc: "We will walk you through your new website and marketing system, answer any questions you have, and show you how everything works. By 'everything,' we're really just talking about pressing two buttons." 
                    }
                  ].map((s, i) => (
                    <div key={i} className="flex flex-col md:flex-row gap-8 border-l-2 border-slate-200 dark:border-slate-800 pl-8 py-4 group hover:border-indigo-500 transition-colors">
                      <div className="shrink-0 w-40">
                        <span className="text-indigo-500 font-black text-xs uppercase tracking-[0.3em] block mb-1">{s.step}</span>
                        <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{s.duration}</span>
                      </div>
                      <div>
                        <h3 className="text-2xl font-black text-slate-900 dark:text-white uppercase mb-4 italic group-hover:text-indigo-400 transition-colors">{s.title}</h3>
                        <p className="text-slate-500 dark:text-slate-400 max-w-2xl leading-relaxed">{s.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Ready to Initialize Call to Action */}
              <div className="mt-20 pt-20 border-t border-slate-200 dark:border-white/5 flex flex-col items-center">
                <h4 className="text-2xl font-black text-slate-900 dark:text-white uppercase italic tracking-tighter mb-8">Ready to Initialize?</h4>
                <button onClick={() => setView('pricing')} className="bg-sky-600 text-white px-16 py-6 rounded-2xl text-[12px] font-black uppercase tracking-[0.4em] animate-breathe-glow hover:bg-sky-500 transition-all shadow-2xl shadow-sky-500/20">
                   View Operational Pricing
                </button>
                <button onClick={() => setView('home')} className="mt-12 text-slate-400 font-black uppercase tracking-widest text-[9px] flex items-center gap-2 hover:text-sky-500 transition-all">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"/></svg>
                  Return to Home
                </button>
              </div>
            </section>
          </div>
        );
      default:
        return (
          <>
            <Hero />
            <section className="bg-slate-50/50 dark:bg-slate-900/40 py-12 border-y border-slate-200/10 dark:border-white/5">
              <div className="max-w-6xl mx-auto px-6 overflow-hidden text-center">
                <p className="text-slate-500 dark:text-slate-400 text-[10px] font-black uppercase tracking-[0.4em] mb-10 opacity-80">Trusted by Top Businesses Nationwide</p>
                <div className="flex flex-wrap justify-center items-center gap-12 lg:gap-20">
                  {[
                    "ELITE SERVICES",
                    "CONSTRUCTION PROS",
                    "MARKET LEADERS",
                    "GLOBAL LOGISTICS"
                  ].map((business, i) => (
                    <span 
                      key={i} 
                      className="text-xl lg:text-2xl font-black italic tracking-[0.2em] uppercase text-slate-400/60 dark:text-slate-500/60 hover:text-sky-500 dark:hover:text-sky-400 transition-all duration-300 cursor-default"
                    >
                      {business}
                    </span>
                  ))}
                </div>
              </div>
            </section>
            <Features />
            <HowItWorks setView={setView} />
            
            <section className="py-32 px-6 relative overflow-hidden bg-[#020617]">
              <div className="absolute inset-0 radar-grid opacity-10 pointer-events-none"></div>
              <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-sky-500/50 to-transparent"></div>
              
              <div className="max-w-7xl mx-auto relative z-10">
                <div className="grid lg:grid-cols-2 gap-24 items-center">
                  <div className="space-y-10">
                    <div>
                      <div className="inline-flex items-center gap-2 bg-sky-500/10 text-sky-500 px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-[0.3em] mb-8 border border-sky-500/20">
                        Operational Shield // Review Matrix
                      </div>
                      <h2 className="text-5xl md:text-7xl font-black text-white mb-8 italic uppercase tracking-tighter leading-none">
                        The End of <br /><span className="text-sky-500">Bad Reviews.</span>
                      </h2>
                      <p className="text-xl text-slate-400 leading-relaxed font-medium">
                        Our custom-coded review gateways act as a tactical filter for your business. We intelligently intercept feedback at the source to protect your public rating.
                      </p>
                    </div>

                    <div className="grid gap-6">
                      {[
                        { title: "No More 1-Star Hits", desc: "Intercept low-star feedback before it ever reaches public platforms." },
                        { title: "Google Profile Growth", desc: "Automated routing of 5-star reviews to boost your local SEO ranking." },
                        { title: "Customer Resolution Flow", desc: "Built-in private channel to resolve client issues before they escalate." }
                      ].map((feature, i) => (
                        <div key={i} className="flex gap-6 group">
                          <div className="shrink-0 w-12 h-12 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center text-sky-500 group-hover:bg-sky-500 group-hover:text-white transition-all">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                            </svg>
                          </div>
                          <div>
                            <h4 className="text-[11px] font-black text-white uppercase tracking-[0.2em] mb-2">{feature.title}</h4>
                            <p className="text-sm text-slate-500 font-medium">{feature.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="relative">
                    <div className="absolute -inset-10 bg-sky-500/10 blur-[120px] rounded-full"></div>
                    <div className="relative glass-panel bg-white/5 border border-white/10 rounded-[3rem] p-10 md:p-14 overflow-hidden shadow-2xl">
                       <div className="flex items-center justify-between mb-10">
                          <div className="text-[10px] font-black text-sky-500 uppercase tracking-[0.4em]">Review Routing Protocol</div>
                          <div className="flex gap-1.5">
                            <div className="w-2 h-2 rounded-full bg-sky-500"></div>
                            <div className="w-2 h-2 rounded-full bg-sky-500 opacity-30"></div>
                            <div className="w-2 h-2 rounded-full bg-sky-500 opacity-10"></div>
                          </div>
                       </div>
                       
                       <div className="space-y-6">
                         <div className="p-6 bg-emerald-500/10 border border-emerald-500/20 rounded-2xl flex items-center justify-between group cursor-default">
                           <div className="flex items-center gap-4">
                             <div className="text-emerald-500 flex gap-0.5">★★★★★</div>
                             <span className="text-[9px] font-black text-white uppercase tracking-widest">Target Confirmed</span>
                           </div>
                           <div className="text-[9px] font-black text-emerald-500 uppercase tracking-widest flex items-center gap-2">
                             PUSH TO GOOGLE
                             <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
                           </div>
                         </div>
                         
                         <div className="p-6 bg-red-500/10 border border-red-500/20 rounded-2xl flex items-center justify-between opacity-50 transition-opacity hover:opacity-100">
                           <div className="flex items-center gap-4">
                             <div className="text-red-500 flex gap-0.5">★☆☆☆☆</div>
                             <span className="text-[9px] font-black text-white uppercase tracking-widest">Anomalous Input</span>
                           </div>
                           <div className="text-[9px] font-black text-red-500 uppercase tracking-widest flex items-center gap-2">
                             INTERNAL TICKET
                             <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m0 0v3m0-3h3m-3 0H9m12-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                           </div>
                         </div>
                       </div>

                       <div className="mt-12 pt-12 border-t border-white/5">
                         <p className="text-sm italic text-slate-400 leading-relaxed text-center">
                           "The fastest response I've ever had. I filled out the form and they reached out in seconds!"
                         </p>
                         <div className="mt-6 flex justify-center items-center gap-3">
                           <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse"></div>
                           <span className="text-[9px] font-black text-emerald-500 uppercase tracking-[0.3em]">Verified 5-Star Protocol Post</span>
                         </div>
                       </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            
            <SignupForm />
          </>
        );
    }
  };

  return (
    <BackgroundSystem>
      <Navbar setView={setView} currentView={view} />
      <main>
        {renderContent()}
      </main>
      <Footer setView={setView} />
    </BackgroundSystem>
  );
};

export default App;
