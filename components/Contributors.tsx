'use client';

import React from 'react';
import { Github, Users, GitPullRequest, Star, ArrowUpRight, Code2, Heart } from 'lucide-react';

const ArkaContributors: React.FC = () => {
  return (
    <section className="py-32 px-6 bg-black border-t border-white/5" dir="ltr">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/3 border border-white/10 rounded-full">
            <Users size={12} className="text-zinc-500" />
            <span className="text-[10px] font-black uppercase tracking-widest text-zinc-500">Community Driven</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-[1000] text-white tracking-tighter leading-none">
            Built by the <br /> 
            <span className="text-transparent bg-clip-text bg-linear-to-r from-indigo-500 to-purple-500">Community.</span>
          </h2>
          
          <p className="text-lg text-zinc-500 font-medium leading-relaxed max-w-md">
            Arka is an open-source initiative. Join our global network of engineers to build the next generation of visual infrastructure.
          </p>

          <div className="flex flex-wrap gap-4">
            <a href="#" className="h-14 px-8 bg-white text-black rounded-2xl font-black flex items-center gap-3 hover:bg-indigo-600 hover:text-white transition-all duration-500 shadow-2xl active:scale-95">
              <Github size={20} />
              Contribute
            </a>
          </div>
        </div>

        <div className="relative h-100 flex items-center justify-center">
          
          <div className="relative z-10 w-24 h-24 bg-indigo-600 rounded-full flex items-center justify-center shadow-[0_0_50px_rgba(79,70,229,0.4)] border-4 border-black group cursor-pointer transition-transform hover:scale-110">
             <Github size={40} className="text-white" />
             <div className="absolute inset-0 rounded-full bg-indigo-600 animate-ping opacity-20" />
          </div>

          <div className="absolute top-0 left-10 p-4 bg-zinc-900/80 border border-white/10 rounded-2xl backdrop-blur-md flex items-center gap-4 animate-bounce-slow shadow-2xl group hover:border-indigo-500 transition-colors">
             <div className="w-10 h-10 rounded-full bg-linear-to-tr from-indigo-500 to-blue-500" />
             <div>
                <p className="text-[10px] font-black text-white uppercase">@alex_dev</p>
                <p className="text-[8px] text-zinc-500 font-bold">42 Contributions</p>
             </div>
          </div>

          <div className="absolute bottom-10 left-0 p-4 bg-zinc-900/80 border border-white/10 rounded-2xl backdrop-blur-md flex items-center gap-4 animate-bounce-delayed shadow-2xl group hover:border-pink-500 transition-colors">
             <div className="w-10 h-10 rounded-full bg-linear-to-tr from-pink-500 to-rose-500" />
             <div>
                <p className="text-[10px] font-black text-white uppercase">@sara.design</p>
                <p className="text-[8px] text-zinc-500 font-bold">Core Reviewer</p>
             </div>
          </div>

          <div className="absolute top-20 right-0 p-4 bg-zinc-900/80 border border-white/10 rounded-2xl backdrop-blur-md flex items-center gap-4 animate-bounce-slow shadow-2xl group hover:border-emerald-500 transition-colors">
             <div className="w-10 h-10 rounded-full bg-linear-to-tr from-emerald-500 to-teal-500" />
             <div>
                <p className="text-[10px] font-black text-white uppercase">@nik_tech</p>
                <p className="text-[8px] text-zinc-500 font-bold">SEO Optimizer</p>
             </div>
          </div>

          <div className="absolute bottom-0 right-10 p-4 bg-indigo-600/10 border border-dashed border-indigo-500/40 rounded-2xl flex items-center gap-4 cursor-pointer hover:bg-indigo-600 group transition-all">
             <div className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center border border-white/5 text-indigo-500 group-hover:text-white">
                <Heart size={18} fill="currentColor" />
             </div>
             <div>
                <p className="text-[10px] font-black text-white uppercase">You?</p>
                <p className="text-[8px] text-zinc-400 font-bold group-hover:text-white/80">Submit your first PR</p>
             </div>
          </div>

          <svg className="absolute inset-0 w-full h-full -z-10 opacity-10" viewBox="0 0 400 400">
             <line x1="200" y1="200" x2="100" y2="50" stroke="white" strokeWidth="1" strokeDasharray="4" />
             <line x1="200" y1="200" x2="50" y2="300" stroke="white" strokeWidth="1" strokeDasharray="4" />
             <line x1="200" y1="200" x2="350" y2="100" stroke="white" strokeWidth="1" strokeDasharray="4" />
             <line x1="200" y1="200" x2="300" y2="350" stroke="white" strokeWidth="1" strokeDasharray="4" />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default ArkaContributors;