'use client';

import React from 'react';
import { ShieldCheck, Lock, EyeOff } from 'lucide-react';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

const PrivacyPolicy = () => {
    const sections = [
        {
            id: "01.0",
            title: "Data Philosophy",
            content: "Arka Engine is built on the principle of anonymity. We believe that developer tools should stay out of your personal data. Our architecture is designed to be a 'Pass-Through' system.",
            icon: <ShieldCheck className="w-5 h-5 text-indigo-500" />
        },
        {
            id: "02.0",
            title: "Zero Logging",
            content: "We do not track, store, or sell your source code, IP addresses, or project metadata. When you copy a component, that transaction is local to your machine.",
            icon: <EyeOff className="w-5 h-5 text-indigo-500" />
        },
        {
            id: "03.0",
            title: "Analytics",
            content: "We use minimal, privacy-focused telemetry to understand which components are popular. This data is aggregated and contains zero personally identifiable information (PII).",
            icon: <Lock className="w-5 h-5 text-indigo-500" />
        }
    ];

    return (
        <>
            <Navbar />
            <div className="bg-black text-white min-h-screen py-24 md:py-32 pt-32 md:pt-44 px-6 selection:bg-indigo-500" dir="ltr">
                <div className="max-w-4xl mx-auto my-10">
                    
                    <header className="mb-16 md:mb-24 border-b border-white/10 pb-10 md:pb-16 relative">
                        <div className="flex items-center gap-3 mb-6">
                            <span className="text-indigo-500 font-black uppercase tracking-[0.3em] md:tracking-[0.4em] text-[10px]">
                                Security Protocol
                            </span>
                            <div className="h-px w-12 bg-indigo-500/30" />
                        </div>
                        
                        <h1 className="text-6xl md:text-9xl font-[1000] tracking-tighter uppercase mb-6 leading-none">
                            Privacy.
                        </h1>
                        
                        <p className="text-zinc-500 font-mono text-[9px] md:text-[10px] uppercase tracking-widest flex items-center gap-4">
                            <span>Version 1.0</span>
                            <span className="text-zinc-800">|</span>
                            <span>Last Initialized: 2026</span>
                        </p>
                    </header>

                    <div className="space-y-16 md:space-y-24">
                        {sections.map((section) => (
                            <section key={section.id} className="group relative">
                                <div className="flex flex-col md:flex-row items-start gap-4 md:gap-10">
                                    
                                    {/* شناسه بخش */}
                                    <div className="flex items-center gap-4 md:block">
                                        <span className="text-indigo-600 font-black text-xl md:text-2xl tracking-tighter block md:mb-2">
                                            {section.id}
                                        </span>
                                        <div className="md:hidden">
                                            {section.icon}
                                        </div>
                                    </div>

                                    {/* متن محتوا */}
                                    <div className="space-y-4">
                                        <h2 className="text-xl md:text-3xl font-[1000] uppercase tracking-wider text-white group-hover:text-indigo-400 transition-colors">
                                            {section.title}
                                        </h2>
                                        <p className="text-zinc-400 text-base md:text-xl leading-relaxed font-medium max-w-2xl">
                                            {section.content}
                                        </p>
                                    </div>
                                </div>
                                
                                <div className="mt-12 w-full h-px bg-white/5 md:hidden" />
                            </section>
                        ))}
                    </div>

                </div>
            </div >
            <Footer />
        </>
    );
};

export default PrivacyPolicy;