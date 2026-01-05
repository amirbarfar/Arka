'use client';

import React from 'react';
import { Scale, FileText, CheckCircle2 } from 'lucide-react';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

const TermsOfService = () => {
    const terms = [
        {
            id: "01.0",
            title: "Open Source License",
            content: "All components provided by Arka Engine are licensed under the MIT License. You are free to use, modify, and distribute the code in personal and commercial projects.",
            icon: <FileText className="w-5 h-5 text-indigo-500" />
        },
        {
            id: "02.0",
            title: "No Warranty",
            content: "The software is provided 'as is', without warranty of any kind. Arka Engine is not responsible for any bugs, crashes, or security vulnerabilities in your final implementation.",
            icon: <Scale className="w-5 h-5 text-indigo-500" />
        },
        {
            id: "03.0",
            title: "Attribution",
            content: "While not mandatory, we appreciate a shout-out or a link back to Arka Engine if you use our components to build something amazing.",
            icon: <CheckCircle2 className="w-5 h-5 text-indigo-500" />
        }
    ];

    return (
        <>
            <Navbar />
            <div className="bg-black text-white min-h-screen py-24 md:py-32 pt-32 md:pt-44 px-6 selection:bg-indigo-500" dir="ltr">
                <div className="max-w-4xl mx-auto my-10">
                    {/* --- HEADER --- */}
                    <header className="mb-16 md:mb-24 border-b border-white/10 pb-10 md:pb-16 relative">
                        <div className="flex items-center gap-3 mb-6">
                            <span className="text-indigo-500 font-black uppercase tracking-[0.3em] md:tracking-[0.4em] text-[10px]">
                                Legal Framework
                            </span>
                            <div className="h-[1px] w-12 bg-indigo-500/30" />
                        </div>
                        
                        <h1 className="text-6xl md:text-9xl font-[1000] tracking-tighter uppercase mb-6 leading-none">
                            Terms.
                        </h1>
                        
                        <p className="text-zinc-500 font-mono text-[9px] md:text-[10px] uppercase tracking-widest">
                            Usage Agreement // Active Status
                        </p>
                    </header>

                    {/* --- TERMS SECTIONS --- */}
                    <div className="space-y-16 md:space-y-24">
                        {terms.map((term) => (
                            <section key={term.id} className="group relative">
                                <div className="flex flex-col md:flex-row items-start gap-4 md:gap-10">
                                    
                                    {/* ID & Mobile Icon */}
                                    <div className="flex items-center gap-4 md:block">
                                        <span className="text-indigo-600 font-black text-xl md:text-2xl tracking-tighter block md:mb-2">
                                            {term.id}
                                        </span>
                                        <div className="md:hidden">
                                            {term.icon}
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="space-y-4">
                                        <h2 className="text-xl md:text-3xl font-[1000] uppercase tracking-wider text-white group-hover:text-indigo-400 transition-colors">
                                            {term.title}
                                        </h2>
                                        <p className="text-zinc-400 text-base md:text-xl leading-relaxed font-medium max-w-2xl">
                                            {term.content}
                                        </p>
                                    </div>
                                </div>
                                
                                {/* Divider for Mobile */}
                                <div className="mt-12 w-full h-[1px] bg-white/5 md:hidden" />
                            </section>
                        ))}
                    </div>

                    {/* --- CALL TO ACTION / SUMMARY --- */}
                    <div className="mt-32 p-1 bg-gradient-to-r from-transparent via-white/10 to-transparent">
                        <div className="bg-black py-12 text-center">
                            <p className="text-zinc-500 text-[10px] md:text-xs font-black uppercase tracking-[0.5em] mb-8">
                                End of Agreement
                            </p>
                            <div className="inline-flex items-center gap-2 px-6 py-3 bg-zinc-900 rounded-full border border-white/5 text-[10px] font-bold uppercase tracking-widest text-zinc-400">
                                <CheckCircle2 className="w-3 h-3 text-indigo-500" /> 
                                Fully Compliant with MIT Standards
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <Footer />
        </>
    );
};

export default TermsOfService;