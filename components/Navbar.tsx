'use client';

import React, { useState } from 'react';
import { Box, Github, Moon, Sun, Languages, ArrowUpRight, Layout, Cpu, Info } from 'lucide-react';

const Navbar: React.FC = () => {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');

  return (
    <header className="fixed top-0 left-0 right-0 z-100 flex justify-center p-6 pointer-events-none" dir="ltr">
      <nav className="
        pointer-events-auto
        flex items-center gap-6 px-6 py-2
        bg-[#050505]/80 backdrop-blur-2xl
        border border-white/5 rounded-2xl
        shadow-[0_20px_50px_rgba(0,0,0,0.8)]
      ">
        <div className="flex items-center gap-3 border-r border-white/5 pr-6 group cursor-pointer select-none">
          <div className="relative">
            <Box size={20} className="text-indigo-500 group-hover:scale-110 transition-transform duration-500" strokeWidth={2.5} />
            <div className="absolute -top-1 -right-1 w-1.5 h-1.5 bg-indigo-500 rounded-full blur-[2px] animate-pulse" />
          </div>
          <span className="text-sm font-[1000] tracking-[0.2em] text-white transition-colors group-hover:text-indigo-400">ARKA</span>
        </div>

        <div className="flex items-center gap-1">
          <NavButton label="Templates" icon={<Layout size={14} />} />
          <NavButton label="Design" icon={<Cpu size={14} />} />
          <NavButton label="About" icon={<Info size={14} />} />
        </div>

        <div className="flex items-center gap-3 border-l border-white/5 pl-6">
          <a href="#" className="flex items-center gap-2 px-3 py-1.5 bg-white/3 border border-white/5 rounded-xl hover:bg-indigo-500/10 hover:border-indigo-500/20 transition-all group">
            <Github size={14} className="text-zinc-500 group-hover:text-indigo-400 transition-colors" />
            <span className="text-[11px] font-mono font-bold text-zinc-500 group-hover:text-zinc-200 transition-colors tracking-tighter">2.4k</span>
          </a>

          <button 
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="p-2 text-zinc-500 hover:text-indigo-400 hover:bg-white/3 rounded-lg transition-all"
          >
            {theme === 'dark' ? <Moon size={16} /> : <Sun size={16} />}
          </button>

          <button className="flex items-center gap-1.5 px-2 py-1 text-zinc-500 hover:text-zinc-100 transition-colors">
            <Languages size={15} />
            <span className="text-[10px] font-black uppercase tracking-widest">EN</span>
          </button>
        </div>

        <div className="flex items-center gap-3 ml-2">
          <button className="px-3 py-1.5 text-xs font-bold text-zinc-500 hover:text-white transition-colors">
            Login
          </button>
          <button className="
            flex items-center gap-2 px-5 py-2.5
            bg-white text-black hover:bg-indigo-600 hover:text-white
            text-[11px] font-[1000] uppercase tracking-tighter
            rounded-xl transition-all duration-300 active:scale-95
            shadow-xl shadow-white/5
          ">
            Join Arka
            <ArrowUpRight size={14} strokeWidth={3} />
          </button>
        </div>

      </nav>
    </header>
  );
};

const NavButton = ({ label, icon }: { label: string; icon: React.ReactNode }) => (
  <button className="
    relative flex items-center gap-2.5 px-4 py-2
    text-zinc-400 hover:text-zinc-100
    text-[13px] font-bold transition-all duration-300
    group overflow-hidden
  ">
    <div className="absolute inset-0 bg-indigo-500/0 group-hover:bg-indigo-500/10 transition-colors duration-300 rounded-lg -z-10" />
    
    <span className="text-zinc-500 group-hover:text-indigo-400 transition-colors duration-300">
      {icon}
    </span>
    <span className="relative">
      {label}
    </span>
  </button>
);

export default Navbar;