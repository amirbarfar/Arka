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
        <section className="relative pt-30 flex flex-col items-center justify-center bg-black px-6 overflow-hidden select-none" dir="ltr">

            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-200 h-100 bg-indigo-500/10 blur-[150px] rounded-full -z-10" />
            <div className="mb-10">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/3 border border-white/10 rounded-full backdrop-blur-md cursor-pointer hover:bg-white/8 transition-all group">
                    <Zap size={12} className="text-indigo-500 fill-indigo-500" />
                    <span className="text-[10px] font-black tracking-[0.2em] text-zinc-400 uppercase">
                        Arka Engine v1.0
                    </span>
                    <ArrowRight size={12} className="text-zinc-600 group-hover:translate-x-1 transition-transform" />
                </div>
            </div>

            <div className="text-center max-w-5xl space-y-10">
                <h1 className="text-6xl md:text-8xl lg:text-[110px] font-black text-white tracking-tighter leading-[0.85]">
                    Visual <br />
                    <span className="text-transparent bg-clip-text bg-linear-to-b from-white to-zinc-600">
                        Infrastructure
                    </span>
                    <br />
                    <span className="text-indigo-500">for Teams.</span>
                </h1>

                <p className="text-lg md:text-xl text-zinc-500 max-w-2xl mx-auto font-medium leading-relaxed">
                    Stop fighting with boilerplate. Arka ships production-grade
                    <span className="text-zinc-200"> Next.js 15 </span> apps with 100/100 Lighthouse scores by default.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-5 pt-4">
                    <button className="h-16 px-10 bg-white text-black rounded-2xl font-black text-base flex items-center gap-3 hover:bg-indigo-600 hover:text-white transition-all duration-500 shadow-2xl active:scale-95">
                        Launch Arka Engine
                        <ArrowRight size={20} strokeWidth={3} />
                    </button>
                </div>

                <div className="pt-14 space-y-8">
                    <p className="text-[10px] font-black uppercase tracking-[0.4em] text-zinc-700">
                        Built for modern stacks
                    </p>
                    <div className="flex items-center justify-center gap-10 opacity-30 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-700">
                        <div className="flex items-center justify-center gap-10  transition-all duration-700">
                            <SiReact className="w-9 h-9 text-white" />
                            <SiJavascript className="w-9 h-9 text-white" />
                            <SiNextdotjs className="w-9 h-9 text-white" />
                            <SiTailwindcss className="w-9 h-9 text-white" />
                            <SiTypescript className="w-9 h-9 text-white" />
                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default Hero;