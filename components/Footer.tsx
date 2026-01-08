
import React from 'react';

interface FooterProps {
  setView: (view: 'home' | 'engine' | 'contact' | 'pricing') => void;
}

const Footer: React.FC<FooterProps> = ({ setView }) => {
  return (
    <footer className="bg-slate-50 dark:bg-[#020617] border-t border-slate-200/10 py-20 px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">
        {/* Column 1: Brand & Social */}
        <div className="space-y-8">
          <div className="cursor-pointer" onClick={() => setView('home')}>
            <span className="text-xl font-black tracking-tighter text-slate-900 dark:text-white uppercase">
              Stratus <span className="text-sky-500">Websites</span>
            </span>
            <p className="text-slate-500 dark:text-slate-400 text-xs leading-relaxed mt-4 max-w-xs">
              Next-generation web systems designed for elite performance and uncompromising conversion rates.
            </p>
          </div>
          <div className="flex gap-4">
            {['LinkedIn', 'Facebook', 'Instagram'].map((social) => (
              <button key={social} className="w-10 h-10 rounded-lg border border-slate-200 dark:border-slate-800 flex items-center justify-center hover:border-sky-500/30 transition-all text-slate-600 dark:text-slate-400 hover:text-sky-500">
                <span className="sr-only">{social}</span>
                <div className="w-4 h-4 bg-current rounded-sm opacity-60"></div>
              </button>
            ))}
          </div>
        </div>

        {/* Column 2: System */}
        <div>
          <h4 className="text-[10px] font-black text-sky-500 uppercase tracking-[0.3em] mb-8">The System</h4>
          <ul className="space-y-4 text-[10px] font-bold text-slate-600 dark:text-slate-400 tracking-widest uppercase">
            <li><button onClick={() => setView('engine')} className="hover:text-sky-500 transition-colors">Core Engine</button></li>
            <li><button onClick={() => setView('engine')} className="hover:text-sky-500 transition-colors">Review Shield</button></li>
            <li><button onClick={() => setView('engine')} className="hover:text-sky-500 transition-colors">SMS Relay</button></li>
          </ul>
        </div>

        {/* Column 3: Network */}
        <div>
          <h4 className="text-[10px] font-black text-sky-500 uppercase tracking-[0.3em] mb-8">Network</h4>
          <ul className="space-y-4 text-[10px] font-bold text-slate-600 dark:text-slate-400 tracking-widest uppercase">
            <li><a href="https://stratusmarketingllc.com" target="_blank" className="hover:text-sky-500 transition-colors">Marketing Agency</a></li>
            <li><button onClick={() => setView('pricing')} className="hover:text-sky-500 transition-colors">Pricing Plans</button></li>
            <li><button onClick={() => setView('contact')} className="hover:text-sky-500 transition-colors">Support Desk</button></li>
          </ul>
        </div>

        {/* Column 4: Newsletter */}
        <div>
          <h4 className="text-[10px] font-black text-sky-500 uppercase tracking-[0.3em] mb-8">Dispatch</h4>
          <p className="text-xs text-slate-500 dark:text-slate-400 mb-6">Receive priority intelligence on web performance.</p>
          <div className="relative group">
            <input 
              type="email" 
              placeholder="EMAIL ADDRESS"
              className="w-full bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-md px-4 py-4 text-[10px] font-bold tracking-widest focus:ring-1 focus:ring-sky-500 outline-none transition-all placeholder:text-slate-400"
            />
            <button className="absolute right-3 top-1/2 -translate-y-1/2 text-sky-500 hover:translate-x-1 transition-transform">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-slate-200/10 text-center">
        <p className="text-[10px] font-bold text-slate-400 dark:text-slate-600 uppercase tracking-[0.5em] opacity-60">
          © {new Date().getFullYear()} STRATUS WEBSITES // A STRATUS MARKETING LLC COMPANY
        </p>
      </div>
    </footer>
  );
};

export default Footer;
