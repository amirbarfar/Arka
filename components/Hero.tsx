'use client';

import React from 'react';
import { ArrowRight, Zap } from 'lucide-react';
import {
    SiTypescript,
    SiJavascript,
    SiReact,
    SiNextdotjs,
    SiTailwindcss,
} from "react-icons/si";

const Hero: React.FC = () => {
    return (
        <section className="relative pt-24 md:pt-30 pb-20 flex flex-col items-center justify-center bg-white dark:bg-black px-6 overflow-hidden select-none" dir="ltr">

            {/* Background Glow - بهینه شده برای موبایل */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[500px] md:max-w-[800px] h-[300px] bg-indigo-500/10 blur-[80px] md:blur-[150px] rounded-full -z-10" />

            {/* Badge */}
            <div className="mb-8 md:mb-10">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-1.5 bg-zinc-900/5 border border-white/10 rounded-full backdrop-blur-md cursor-pointer hover:bg-zinc-900/10 dark:hover:bg-white/8 transition-all group">
                    <Zap size={12} className="text-indigo-500 fill-indigo-500" />
                    <span className="text-[9px] md:text-[10px] font-black tracking-[0.1em] md:tracking-[0.2em] text-zinc-500 dark:text-zinc-400 uppercase">
                        Arka Engine v1.0
                    </span>
                    <ArrowRight size={12} className="text-zinc-600 group-hover:translate-x-1 transition-transform" />
                </div>
            </div>

            <div className="text-center max-w-5xl space-y-8 md:space-y-10">
                {/* Main Heading - تنظیم شده برای موبایل */}
                <h1 className="text-5xl sm:text-6xl md:text-8xl lg:text-[110px] font-black text-black dark:text-white tracking-tighter leading-[0.9] md:leading-[0.85]">
                    Visual <br className="hidden sm:block" />
                    <span className="text-transparent bg-clip-text bg-gradient-to-b from-black dark:from-white to-gray-400 dark:to-zinc-600">
                        Infrastructure
                    </span>
                    <br />
                    <span className="text-indigo-500">for Teams.</span>
                </h1>

                {/* Subtitle */}
                <p className="text-base md:text-xl text-zinc-500 max-w-2xl mx-auto font-medium leading-relaxed px-4">
                    Stop fighting with boilerplate. Arka ships production-grade
                    <span className="text-zinc-900 dark:text-zinc-200 font-bold"> Next.js 15 </span> 
                    apps with 100/100 Lighthouse scores by default.
                </p>

                {/* CTA Button */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-5 pt-4">
                    <button className="w-full sm:w-auto h-16 px-10 bg-black dark:bg-white text-white dark:text-black rounded-2xl font-black text-base flex items-center justify-center gap-3 hover:bg-indigo-600 hover:text-white transition-all duration-500 shadow-2xl active:scale-95">
                        Launch Arka Engine
                        <ArrowRight size={20} strokeWidth={3} />
                    </button>
                </div>

                {/* Tech Stack Section */}
                <div className="pt-14 space-y-6 md:space-y-8">
                    <p className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.3em] md:tracking-[0.4em] text-zinc-700">
                        Built for modern stacks
                    </p>
                    
                    {/* Icons Container - ریسپانسیو شده */}
                    <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10 opacity-30 px-4">
                        <SiReact className="w-7 h-7 md:w-9 md:h-9 text-black dark:text-white hover:opacity-100 hover:scale-110 transition-all duration-300" />
                        <SiJavascript className="w-7 h-7 md:w-9 md:h-9 text-black dark:text-white hover:opacity-100 hover:scale-110 transition-all duration-300" />
                        <SiNextdotjs className="w-7 h-7 md:w-9 md:h-9 text-black dark:text-white hover:opacity-100 hover:scale-110 transition-all duration-300" />
                        <SiTailwindcss className="w-7 h-7 md:w-9 md:h-9 text-black dark:text-white hover:opacity-100 hover:scale-110 transition-all duration-300" />
                        <SiTypescript className="w-7 h-7 md:w-9 md:h-9 text-black dark:text-white hover:opacity-100 hover:scale-110 transition-all duration-300" />
                    </div>
                </div>
            </div>

        </section>
    );
};

export default Hero;