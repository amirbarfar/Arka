'use client';

import React from 'react';
import { ArrowRight, Globe, Zap, Copy, Layout, Sparkles, Code2 } from 'lucide-react';

const ArkaFeatures: React.FC = () => {
  return (
    <section className="py-24 px-6 bg-black overflow-hidden" dir="ltr">
      <div className="max-w-7xl mx-auto">

        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-indigo-500 font-black text-xs uppercase tracking-[0.3em]">
              <Sparkles size={14} /> The Future of Workflow
            </div>
            <h2 className="text-5xl md:text-7xl font-[1000] text-white tracking-[1px] leading-none">
              Engineered for <br /> <span className="text-zinc-700">Perfection.</span>
            </h2>
          </div>
          <p className="text-zinc-500 max-w-sm text-lg font-medium leading-relaxed">
            Arka isn't just a tool; it's a visual infrastructure that helps you grow from a dev to a <span className="text-white">Design Engineer</span>.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-4 h-full md:h-162.5">
          <div className="md:col-span-2 md:row-span-2 relative group overflow-hidden bg-[#0a0a0b] border border-white/5 rounded-[2.5rem] p-10 transition-all hover:border-indigo-500/30">
            <div className="absolute top-10 right-10 opacity-[0.03] -rotate-12">
               <Layout size={180} className="text-white" />
            </div>
            <div className="absolute -bottom-10 right-20 opacity-[0.02] rotate-12 scale-150">
               <Code2 size={250} className="text-white" />
            </div>

            <div className="relative z-10 flex flex-col h-full justify-between">
              <div className="space-y-4">
                <div className="w-12 h-12 bg-indigo-500/10 rounded-2xl flex items-center justify-center text-indigo-500 border border-indigo-500/20">
                  <Layout size={24} />
                </div>
                <h3 className="text-3xl font-black text-white">Visual Component Builder</h3>
                <p className="text-zinc-500 max-w-sm leading-relaxed text-lg font-medium">
                  Stop writing divs. Shape your UI visually and watch Arka generate clean, production-ready React code instantly.
                </p>
              </div>
              <div className="mt-auto">
                <div className="flex gap-2">
                  <div className="h-1 w-12 bg-indigo-500/50 rounded-full" />
                  <div className="h-1 w-6 bg-zinc-800 rounded-full" />
                </div>
              </div>
            </div>
          </div>

          <div className="relative group overflow-hidden bg-[#0a0a0b] border border-white/5 rounded-[2.5rem] p-10 transition-all hover:border-emerald-500/30">
            <div className="absolute -top-5 -right-5 opacity-[0.03]">
               <Globe size={180} className="text-white" />
            </div>
            <div className="relative z-10 space-y-4">
              <div className="w-12 h-12 bg-emerald-500/10 rounded-2xl flex items-center justify-center text-emerald-400 border border-emerald-500/20">
                <Zap size={24} />
              </div>
              <h3 className="text-2xl font-black text-white">Instant SEO</h3>
              <p className="text-zinc-500 text-sm leading-relaxed font-medium">
                Automated Metadata and JSON-LD. Your personal development journey includes mastering SEO without the pain.
              </p>
            </div>
          </div>

          <div className="relative group overflow-hidden bg-[#0a0a0b] border border-white/5 rounded-[2.5rem] p-10 transition-all hover:border-amber-500/30">
            <div className="absolute -bottom-5 -right-2.5 opacity-[0.03]">
               <Copy size={150} className="text-white" />
            </div>
            <div className="relative z-10 space-y-4">
              <div className="w-12 h-12 bg-amber-500/10 rounded-2xl flex items-center justify-center text-amber-500 border border-amber-500/20">
                <Copy size={24} />
              </div>
              <h3 className="text-2xl font-black text-white">Zero-Install</h3>
              <p className="text-zinc-500 text-sm leading-relaxed font-medium">
                Just copy. Pure, optimized code for Next.js 15. No package overhead, just speed.
              </p>
              <div className="pt-4">
                 <div className="h-10 w-full bg-black/50 border border-white/10 rounded-lg flex items-center px-4 font-mono text-[10px] text-zinc-600">
                    Ctrl + C to Excellence
                 </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ArkaFeatures;