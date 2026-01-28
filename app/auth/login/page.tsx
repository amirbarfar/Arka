'use client';

import React from 'react';
import { Github, Mail, Lock, ArrowRight, Chrome } from 'lucide-react';
import Link from 'next/link';

const LoginPage = () => {
    return (
        <div className="bg-black min-h-screen text-white flex flex-col lg:flex-row overflow-x-hidden" dir="ltr">
            
            <div className="lg:w-1/2 min-h-[40vh] lg:min-h-screen p-8 md:p-12 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-white/5 relative overflow-hidden bg-zinc-950">
                <div className="absolute top-0 left-0 w-full h-full bg-indigo-600/5 blur-[120px] pointer-events-none" />
                
                <Link href="/" className="text-xl md:text-2xl font-black tracking-tighter uppercase relative z-10 hover:text-indigo-500 transition-colors">
                    Arka.
                </Link>
                
                <div className="relative z-10 py-10 lg:py-0">
                    <h1 className="text-[15vw] lg:text-[10vw] font-[1000] tracking-tighter uppercase leading-[0.8] mb-6">
                        Access <br /> <span className="text-zinc-800">Engine.</span>
                    </h1>
                    <p className="text-zinc-500 text-[10px] md:text-xs uppercase tracking-[0.3em] font-bold">
                        Initialize Session // Auth 2.0
                    </p>
                </div>

                <div className="hidden lg:block text-[10px] font-black uppercase tracking-[0.4em] text-zinc-700 relative z-10">
                    Protected by Arka Security Protocol
                </div>
            </div>

            <div className="lg:w-1/2 flex items-center justify-center p-6 md:p-12 lg:p-24 bg-black">
                <div className="w-full max-w-md space-y-8 md:space-y-12">
                    
                    <div className="space-y-2 text-center lg:text-left">
                        <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tighter">Login</h2>
                        <p className="text-zinc-500 font-medium text-sm md:text-base">Enter your credentials to access the engine.</p>
                    </div>

                    <form className="space-y-6">
                        <div className="space-y-4">
                            {/* Email Input */}
                            <div className="group space-y-2">
                                <label className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-500 ml-1">Identity (Email)</label>
                                <div className="relative">
                                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-700 group-focus-within:text-indigo-500 transition-colors w-4.5 h-4.5" />
                                    <input 
                                        type="email" 
                                        placeholder="SENDER@CORE.COM" 
                                        className="w-full bg-zinc-900/50 border border-white/5 rounded-2xl py-4 pl-12 pr-4 outline-none focus:border-indigo-600 focus:bg-transparent transition-all font-bold text-sm placeholder:text-zinc-800" 
                                    />
                                </div>
                            </div>

                            {/* Password Input */}
                            <div className="group space-y-2">
                                <label className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-500 ml-1">Access Key (Password)</label>
                                <div className="relative">
                                    <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-700 group-focus-within:text-indigo-500 transition-colors w-4.5 h-4.5" />
                                    <input 
                                        type="password" 
                                        placeholder="••••••••" 
                                        className="w-full bg-zinc-900/50 border border-white/5 rounded-2xl py-4 pl-12 pr-4 outline-none focus:border-indigo-600 focus:bg-transparent transition-all font-bold text-sm placeholder:text-zinc-800" 
                                    />
                                </div>
                            </div>
                        </div>

                        <button className="w-full py-4 md:py-5 bg-white text-black rounded-2xl font-black uppercase tracking-widest hover:bg-indigo-600 hover:text-white transition-all transform active:scale-[0.98] flex items-center justify-center gap-3">
                            Authorize <ArrowRight className="w-4.5 h-4.5" />
                        </button>
                    </form>

                    {/* Divider */}
                    <div className="relative py-2">
                        <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-white/5"></div></div>
                        <div className="relative flex justify-center text-[10px] uppercase font-black tracking-widest bg-black px-4 text-zinc-700">Or Continue With</div>
                    </div>

                    {/* Social Login */}
                    <div className="grid grid-cols-2 gap-4">
                        <button className="py-4 bg-zinc-950 border border-white/5 rounded-2xl flex items-center justify-center gap-3 hover:bg-white hover:text-black transition-all group">
                            <Github className="w-4.5 h-4.5" /> 
                            <span className="text-[10px] font-black uppercase tracking-widest">GitHub</span>
                        </button>
                        <button className="py-4 bg-zinc-950 border border-white/5 rounded-2xl flex items-center justify-center gap-3 hover:bg-white hover:text-black transition-all group">
                            <Chrome className="w-4.5 h-4.5" /> 
                            <span className="text-[10px] font-black uppercase tracking-widest">Google</span>
                        </button>
                    </div>

                    {/* Footer Link */}
                    <p className="text-center text-zinc-600 text-[10px] font-black uppercase tracking-widest pt-4">
                        New here? <Link href="/auth/register" className="text-white hover:text-indigo-500 transition-colors underline underline-offset-4 ml-2">Initialize Account</Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;