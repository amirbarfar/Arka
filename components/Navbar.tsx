'use client';

import React, { useState } from 'react';
import { Box, Github, Languages, ArrowUpRight, Layout, Cpu, Info, Menu, X } from 'lucide-react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion'; // برای انیمیشن

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="fixed top-0 left-0 right-0 z-[100] flex justify-center p-4 md:p-6 pointer-events-none" dir="ltr">
      <nav className="
        pointer-events-auto
        flex items-center justify-between lg:justify-start gap-4 md:gap-6 px-4 md:px-6 py-2
        bg-[#050505]/80 backdrop-blur-2xl
        border border-white/5 rounded-2xl
        shadow-[0_20px_50px_rgba(0,0,0,0.8)]
        w-full max-w-5xl
      ">
        {/* Logo */}
        <Link href={'/'} className="flex items-center gap-3 border-r border-white/5 pr-4 md:pr-6 group cursor-pointer select-none">
          <div className="relative">
            <Box size={20} className="text-indigo-500 group-hover:scale-110 transition-transform duration-500" strokeWidth={2.5} />
            <div className="absolute -top-1 -right-1 w-1.5 h-1.5 bg-indigo-500 rounded-full blur-[2px] animate-pulse" />
          </div>
          <span className="text-sm font-[1000] tracking-[0.2em] text-white transition-colors group-hover:text-indigo-400">ARKA</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-1">
          <NavButton label="Templates" icon={<Layout size={14} />} />
          <NavButton label="Design" icon={<Cpu size={14} />} />
          <NavButton label="About" icon={<Info size={14} />} />
        </div>

        {/* Right Section (Desktop) */}
        <div className="hidden lg:flex items-center gap-3 ml-auto">
           <Link
            href="https://github.com/amirbarfar/Arka"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-zinc-950 border border-white/10 pl-4 pr-2 py-1.5 rounded-xl hover:border-indigo-500/50 transition-all group"
          >
            <div className="flex items-center gap-2">
              <Github size={16} className="text-zinc-400 group-hover:text-white transition-colors" />
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-500 group-hover:text-zinc-300">
                GitHub
              </span>
            </div>
            <div className="w-px h-4 bg-white/10 mx-1" />
            <img
              src="https://img.shields.io/github/stars/amirbarfar/Arka?style=flat-square&label=&labelColor=18181b&color=6366f1"
              alt="Stars"
              className="h-5 rounded-sm filter saturate-[1.2]"
            />
          </Link>

          <button className="flex items-center gap-1.5 px-2 py-1 text-zinc-500 hover:text-zinc-300 transition-colors">
            <Languages size={15} />
            <span className="text-[10px] font-black uppercase tracking-widest">EN</span>
          </button>

          <div className="flex items-center gap-2 border-l border-white/5 pl-4">
            <Link href="/auth/login">
              <button className="px-3 py-1.5 text-xs font-bold text-zinc-500 hover:text-white transition-colors">
                Login
              </button>
            </Link>
            <Link href="/auth/register">
              <button className="
                flex items-center gap-2 px-5 py-2.5
                bg-zinc-950 text-white hover:bg-indigo-600
                text-[11px] font-[1000] uppercase tracking-tighter
                rounded-xl transition-all duration-300 active:scale-95
              ">
                Join
                <ArrowUpRight size={14} strokeWidth={3} />
              </button>
            </Link>
          </div>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={toggleMenu}
          className="lg:hidden p-2 text-white hover:text-indigo-400 transition-colors z-[110]"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-20 left-4 right-4 bg-[#050505]/95 backdrop-blur-3xl border border-white/10 rounded-3xl p-6 shadow-2xl pointer-events-auto lg:hidden"
          >
            <div className="flex flex-col gap-6">
              {/* Navigation Links */}
              <div className="grid grid-cols-2 gap-2">
                <MobileNavButton href="/templates" label="Templates" icon={<Layout size={18} />} onClick={toggleMenu} />
                <MobileNavButton href="/design" label="Design" icon={<Cpu size={18} />} onClick={toggleMenu} />
                <MobileNavButton href="/about" label="About" icon={<Info size={18} />} onClick={toggleMenu} />
              </div>

              <div className="h-px bg-white/5 w-full" />

              {/* GitHub & Language */}
              <div className="flex flex-col gap-3">
                <Link
                  href="https://github.com/amirbarfar/Arka"
                  className="flex items-center justify-between bg-zinc-900/50 p-4 rounded-2xl border border-white/5"
                  onClick={toggleMenu}
                >
                  <div className="flex items-center gap-3">
                    <Github size={20} className="text-white" />
                    <span className="text-sm font-bold text-white">GitHub Repository</span>
                  </div>
                  <img
                    src="https://img.shields.io/github/stars/amirbarfar/Arka?style=flat-square&label=&labelColor=18181b&color=6366f1"
                    alt="Stars"
                    className="h-5"
                  />
                </Link>
                
                <button className="flex items-center gap-3 p-4 text-zinc-400">
                  <Languages size={20} />
                  <span className="text-sm font-bold uppercase">Language: EN</span>
                </button>
              </div>

              {/* Auth Buttons */}
              <div className="flex flex-col gap-3">
                <Link href="/auth/login" className="w-full" onClick={toggleMenu}>
                  <button className="w-full py-4 text-sm font-bold text-zinc-400 bg-transparent border border-white/5 rounded-2xl">
                    Login
                  </button>
                </Link>
                <Link href="/auth/register" className="w-full" onClick={toggleMenu}>
                  <button className="w-full py-4 text-sm font-[1000] text-white bg-indigo-600 rounded-2xl flex items-center justify-center gap-2">
                    JOIN ARKA
                    <ArrowUpRight size={18} />
                  </button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

// Desktop Button Component
const NavButton = ({ label, icon }: { label: string; icon: React.ReactNode }) => (
  <Link href={`/${label.toLowerCase()}`} className="
    relative flex items-center gap-2.5 px-4 py-2
    text-zinc-500 hover:text-white
    text-[13px] font-bold transition-all duration-300
    group
  ">
    <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg -z-10" />
    <span className="text-zinc-500 group-hover:text-indigo-400 transition-colors">
      {icon}
    </span>
    {label}
  </Link>
);

// Mobile Button Component
const MobileNavButton = ({ href, label, icon, onClick }: { href: string; label: string; icon: React.ReactNode; onClick: () => void }) => (
  <Link 
    href={href} 
    onClick={onClick}
    className="flex flex-col items-center gap-2 p-4 bg-zinc-900/30 border border-white/5 rounded-2xl text-zinc-400 hover:text-white hover:border-indigo-500/50 transition-all"
  >
    {icon}
    <span className="text-xs font-bold">{label}</span>
  </Link>
);

export default Navbar;