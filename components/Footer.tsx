'use client';

import React from 'react';
import { Github, Twitter, Linkedin, ArrowUpRight, Zap, Mail, Heart } from 'lucide-react';

const ArkaFooter: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-black pt-24 pb-12 px-6 overflow-hidden border-t border-white/5" dir="ltr">
      
      <div className="absolute bottom-[-10%] left-1/2 -translate-x-1/2 select-none">
        <h2 className="text-[20vw] font-[1000] text-white/4 leading-none">
          ARKA
        </h2>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 mb-20">
          
          <div className="md:col-span-5 space-y-8">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center shadow-lg shadow-indigo-600/20">
                <Zap size={24} className="text-white fill-white" />
              </div>
              <span className="text-2xl font-black text-white tracking-tighter">ARKA</span>
            </div>
            <p className="text-zinc-500 text-lg font-medium leading-relaxed max-w-sm">
              The next-generation visual infrastructure for Next.js 15. Build faster, ship cleaner, and grow as a Design Engineer.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-zinc-500 hover:text-white hover:border-white transition-all">
                <Github size={20} />
              </a>
              <a href="#" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-zinc-500 hover:text-white hover:border-white transition-all">
                <Twitter size={20} />
              </a>
              <a href="#" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-zinc-500 hover:text-white hover:border-white transition-all">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          <div className="md:col-span-3 space-y-6">
            <h4 className="text-white font-black uppercase text-xs tracking-[0.3em]">Platform</h4>
            <ul className="space-y-4">
              {['Components', 'Templates', 'Showcase', 'Open Source'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-zinc-500 hover:text-indigo-400 font-bold flex items-center gap-1 group transition-colors">
                    {link} <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4 space-y-6">
            <h4 className="text-white font-black uppercase text-xs tracking-[0.3em]">Stay in the loop</h4>
            <p className="text-zinc-500 text-sm font-medium">Get notified when we release new components or updates.</p>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="email@example.com" 
                className="bg-zinc-900 border border-white/10 rounded-xl px-4 py-3 text-white text-sm w-full focus:outline-none focus:border-indigo-500 transition-all"
              />
              <button className="bg-white text-black font-black px-6 rounded-xl hover:bg-indigo-600 hover:text-white transition-all active:scale-95">
                Join
              </button>
            </div>
          </div>

        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-zinc-600 font-bold text-[10px] uppercase tracking-widest">
          <div className="flex items-center gap-2">
            © {currentYear} ARKA ENGINE. ALL RIGHTS RESERVED.
          </div>
          <div className="flex items-center gap-1">
            BUILT WITH <Heart size={12} className="text-rose-500 fill-rose-500 mx-1" /> BY THE COMMUNITY
          </div>
          <div className="flex items-center gap-8">
            <a href="/privacy" className="hover:text-white transition-colors">Privacy</a>
            <a href="/terms" className="hover:text-white transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default ArkaFooter;