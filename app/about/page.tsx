'use client';

import React from 'react';
import {
    Github, Terminal, Cpu, Zap, Send,
    Layers, FileCode
} from 'lucide-react';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

const ArkaEngineAboutFinal = () => {
    return (
        <>
            <Navbar />
            <div className="bg-black text-white min-h-screen py-20 md:py-32 pt-32 md:pt-44 px-6 selection:bg-indigo-500" dir="ltr">
                <div className="max-w-7xl mx-auto">

                    {/* --- 1. HERO SECTION --- */}
                    <header className="mb-20 md:mb-24 relative">
                        <div className="absolute -top-10 md:-top-20 -left-10 md:-left-20 w-48 h-48 md:w-64 md:h-64 bg-indigo-600/20 blur-[80px] md:blur-[120px] rounded-full pointer-events-none" />
                        <h1 className="text-[16vw] md:text-[10vw] font-[1000] leading-[0.8] md:leading-[0.75] tracking-tighter uppercase mb-10">
                            Minimal Effort. <br />
                            <span className="text-zinc-800">Fast Build.</span>
                        </h1>
                    </header>

                    {/* --- 2. THE ORIGIN --- */}
                    <section className="mb-20 md:mb-32 grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-12 items-start md:items-center border-t border-white/10 pt-16 md:pt-20">
                        <div className="lg:col-span-8">
                            <h2 className="text-3xl md:text-6xl font-black tracking-tighter uppercase mb-6 md:mb-8 text-white leading-none">
                                Death to <span className="text-indigo-500 underline decoration-indigo-500/30 underline-offset-8">Bloated</span> Projects.
                            </h2>
                            <p className="text-lg md:text-3xl text-zinc-400 font-medium leading-relaxed md:leading-[1.15] tracking-tight max-w-4xl">
                                We realized that modern tools are making projects unnecessarily heavy. <span className="text-white">Arka was built to solve this.</span> We simplified the workflow so anyone can build professional, high-performance websites for free.
                            </p>
                        </div>
                        <div className="lg:col-span-4 flex flex-col justify-end lg:items-end font-mono text-[9px] md:text-[10px] text-zinc-600 tracking-[0.2em] md:tracking-[0.3em] uppercase space-y-2">
                            <span>// Lightweight Initiative</span>
                            <span>// Speed Optimization</span>
                            <span>// 100% Free Access</span>
                        </div>
                    </section>

                    {/* --- 3. THE DEEP FEATURE GRID --- */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-24 md:mb-40">
                        
                        {/* Box 1 - JS & TS */}
                        <div className="group p-8 md:p-10 bg-zinc-950 border border-white/5 rounded-[32px] md:rounded-[48px] hover:border-blue-500/30 transition-all duration-700 relative overflow-hidden">
                            <div className="relative z-10">
                                <div className="flex items-center gap-4 mb-6 md:mb-8">
                                    <div className="p-3 md:p-4 bg-blue-500/10 rounded-2xl border border-blue-500/20 group-hover:scale-110 transition-transform">
                                        <FileCode className="text-blue-500 w-6 h-6 md:w-8 md:h-8" />
                                    </div>
                                    <h3 className="text-2xl md:text-3xl font-[1000] tracking-tighter uppercase leading-none text-white">JS & TS <br /> Native</h3>
                                </div>
                                <p className="text-zinc-400 text-base md:text-lg leading-relaxed mb-6 font-medium">
                                    Arka components are available in both <span className="text-white">TypeScript</span> and <span className="text-white">JavaScript</span>.
                                </p>
                                <ul className="space-y-3 text-[9px] md:text-[10px] font-black uppercase tracking-[0.2em] text-zinc-600">
                                    <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-blue-500 rounded-full" /> Auto-complete support</li>
                                    <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-blue-500 rounded-full" /> Type-safe props</li>
                                </ul>
                            </div>
                        </div>

                        {/* Box 2 - Zero Installation */}
                        <div className="group p-8 md:p-10 bg-zinc-950 border border-white/5 rounded-[32px] md:rounded-[48px] hover:border-emerald-500/30 transition-all duration-700 relative overflow-hidden">
                            <div className="relative z-10">
                                <div className="flex items-center gap-4 mb-6 md:mb-8">
                                    <div className="p-3 md:p-4 bg-emerald-500/10 rounded-2xl border border-emerald-500/20 group-hover:scale-110 transition-transform">
                                        <Zap className="text-emerald-500 w-6 h-6 md:w-8 md:h-8" />
                                    </div>
                                    <h3 className="text-2xl md:text-3xl font-[1000] tracking-tighter uppercase leading-none text-white">Zero <br /> Installation</h3>
                                </div>
                                <p className="text-zinc-400 text-base md:text-lg leading-relaxed mb-6 font-medium">
                                    The code is yours—no external packages required. Just copy the source and build.
                                </p>
                                <ul className="space-y-3 text-[9px] md:text-[10px] font-black uppercase tracking-[0.2em] text-zinc-600">
                                    <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-emerald-500 rounded-full" /> No dependency bloat</li>
                                    <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-emerald-500 rounded-full" /> Instant performance</li>
                                </ul>
                            </div>
                        </div>

                        {/* Box 3 - Modern Architecture */}
                        <div className="group p-8 md:p-10 bg-zinc-950 border border-white/5 rounded-[32px] md:rounded-[48px] hover:border-indigo-500/30 transition-all duration-700 relative overflow-hidden">
                            <div className="relative z-10">
                                <div className="flex items-center gap-4 mb-6 md:mb-8">
                                    <div className="p-3 md:p-4 bg-indigo-500/10 rounded-2xl border border-indigo-500/20 group-hover:scale-110 transition-transform">
                                        <Cpu className="text-indigo-500 w-6 h-6 md:w-8 md:h-8" />
                                    </div>
                                    <h3 className="text-2xl md:text-3xl font-[1000] tracking-tighter uppercase leading-none text-white">Modern <br /> Architecture</h3>
                                </div>
                                <p className="text-zinc-400 text-base md:text-lg leading-relaxed mb-6 font-medium">
                                    Optimized for <span className="text-white">Next.js 15</span>. Experience the fastest SSR out of the box.
                                </p>
                                <ul className="space-y-3 text-[9px] md:text-[10px] font-black uppercase tracking-[0.2em] text-zinc-600">
                                    <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-indigo-500 rounded-full" /> RSC Ready</li>
                                    <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-indigo-500 rounded-full" /> Perfect Score</li>
                                </ul>
                            </div>
                        </div>

                        {/* Box 4 - Tailwind */}
                        <div className="group p-8 md:p-10 bg-zinc-950 border border-white/5 rounded-[32px] md:rounded-[48px] hover:border-cyan-500/30 transition-all duration-700 relative overflow-hidden">
                            <div className="relative z-10">
                                <div className="flex items-center gap-4 mb-6 md:mb-8">
                                    <div className="p-3 md:p-4 bg-cyan-500/10 rounded-2xl border border-cyan-500/20 group-hover:scale-110 transition-transform">
                                        <Layers className="text-cyan-500 w-6 h-6 md:w-8 md:h-8" />
                                    </div>
                                    <h3 className="text-2xl md:text-3xl font-[1000] tracking-tighter uppercase leading-none text-white">Tailwind <br /> Optimized</h3>
                                </div>
                                <p className="text-zinc-400 text-base md:text-lg leading-relaxed mb-6 font-medium">
                                    Styling is <span className="text-white">Utility-First</span>. 100% control over every pixel.
                                </p>
                                <ul className="space-y-3 text-[9px] md:text-[10px] font-black uppercase tracking-[0.2em] text-zinc-600">
                                    <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-cyan-500 rounded-full" /> Mobile-First code</li>
                                    <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-cyan-500 rounded-full" /> Pure Utilities</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* --- 4. DARK GITHUB SECTION --- */}
                    <div className="bg-zinc-950 border border-white/10 rounded-[40px] md:rounded-[60px] p-8 md:p-20 mb-24 md:mb-40 relative overflow-hidden group">
                        <div className="absolute top-0 right-0 w-full max-w-[500px] h-[500px] bg-indigo-600/10 blur-[100px] md:blur-[120px] rounded-full pointer-events-none" />
                        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-10 md:gap-12 text-white">
                            <div className="max-w-2xl text-center md:text-left">
                                <h2 className="text-5xl md:text-8xl font-[1000] tracking-tighter uppercase leading-[0.9] md:leading-[0.85] mb-6 md:mb-8">
                                    The Source <br /> <span className="text-indigo-600">is Free.</span>
                                </h2>
                                <p className="text-zinc-400 text-base md:text-xl font-medium mb-8 md:mb-10 max-w-lg mx-auto md:mx-0">
                                    Arka is a gift to the developer community. No subscriptions, no licenses. Follow our GitHub.
                                </p>
                                <div className="flex flex-wrap justify-center md:justify-start gap-4">
                                    <a href="https://github.com" className="w-full sm:w-auto flex items-center justify-center gap-3 bg-white text-black px-10 md:px-12 py-4 md:py-5 rounded-full font-black uppercase tracking-tighter hover:bg-indigo-600 hover:text-white transition-all duration-500">
                                        <Github className="w-5 h-5" /> Open Repository
                                    </a>
                                </div>
                            </div>
                            <div className="relative opacity-10 md:opacity-20 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000">
                                <Github className="text-white w-[180px] h-[180px] md:w-[260px] md:h-[260px]" />
                            </div>
                        </div>
                    </div>

                    {/* --- 5. THE CORE FORM SECTION --- */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-10 mb-20 items-stretch">
                        
                        <div className="lg:col-span-4 bg-zinc-950 border border-white/10 rounded-[32px] md:rounded-[48px] p-10 md:p-12 flex flex-col justify-between overflow-hidden relative group">
                            <div className="absolute top-0 right-0 p-8 opacity-20 group-hover:opacity-100 transition-opacity">
                                <Terminal className="text-indigo-600 w-12 h-12 md:w-20 md:h-20" />
                            </div>
                            <div>
                                <div className="w-12 h-1 bg-indigo-600 mb-8" />
                                <h2 className="text-6xl md:text-8xl font-[1000] tracking-tighter uppercase leading-[0.8] mb-6">
                                    Let's <br /> Talk.
                                </h2>
                            </div>
                            <div className="space-y-4">
                                <p className="text-[10px] font-black uppercase tracking-[0.3em] text-indigo-500">System: Online</p>
                                <p className="text-zinc-500 text-base md:text-lg leading-snug">
                                    Drop your thoughts. Our engine is waiting.
                                </p>
                            </div>
                        </div>

                        <div className="lg:col-span-8 bg-zinc-900/40 border border-white/10 rounded-[32px] md:rounded-[48px] p-8 md:p-12">
                            <form className="space-y-8 md:space-y-10">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
                                    <div className="space-y-3">
                                        <label className="text-[10px] font-black uppercase tracking-[0.4em] text-zinc-400 ml-1">Identity</label>
                                        <input 
                                            type="text" 
                                            placeholder="YOUR NAME" 
                                            className="w-full bg-transparent border-b-2 border-white/20 p-4 focus:border-indigo-500 outline-none transition-all placeholder:text-zinc-800 font-bold text-base uppercase text-white rounded-none" 
                                        />
                                    </div>
                                    <div className="space-y-3">
                                        <label className="text-[10px] font-black uppercase tracking-[0.4em] text-zinc-400 ml-1">Endpoint</label>
                                        <input 
                                            type="email" 
                                            placeholder="EMAIL ADDRESS" 
                                            className="w-full bg-transparent border-b-2 border-white/20 p-4 focus:border-indigo-500 outline-none transition-all placeholder:text-zinc-800 font-bold text-base uppercase text-white rounded-none" 
                                        />
                                    </div>
                                </div>
                                
                                <div className="space-y-3">
                                    <label className="text-[10px] font-black uppercase tracking-[0.4em] text-zinc-400 ml-1">Message Payload</label>
                                    <textarea 
                                        rows={4} 
                                        placeholder="WHAT IS ON YOUR MIND?" 
                                        className="w-full bg-transparent border-b-2 border-white/20 p-4 focus:border-indigo-500 outline-none transition-all resize-none placeholder:text-zinc-800 font-bold text-base uppercase text-white rounded-none"
                                    ></textarea>
                                </div>

                                <button className="w-full py-6 md:py-8 bg-white text-black rounded-2xl md:rounded-3xl font-[1000] uppercase tracking-[0.3em] md:tracking-[0.5em] transition-all hover:bg-indigo-600 hover:text-white flex items-center justify-center gap-4 text-xs md:text-base">
                                    Send Transmission <Send className="w-5 h-5" />
                                </button>
                            </form>
                        </div>
                    </div>

                </div>
            </div>
            <Footer />
        </>
    );
};

export default ArkaEngineAboutFinal;