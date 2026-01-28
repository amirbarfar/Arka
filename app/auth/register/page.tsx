'use client';

import React from 'react';
import { Github, User, Mail, Lock, ArrowRight, Chrome } from 'lucide-react';
import Link from 'next/link';

const RegisterPage = () => {
    return (
        <div className="bg-black min-h-screen text-white flex flex-col lg:flex-row-reverse overflow-x-hidden" dir="ltr">

            {/* --- بخش بصری (Visual Side) --- */}
            <div className="lg:w-1/2 min-h-[35vh] lg:min-h-screen p-8 md:p-12 flex flex-col justify-between border-b lg:border-b-0 lg:border-l border-white/5 relative overflow-hidden bg-zinc-950">
                <div className="absolute bottom-0 right-0 w-full h-full  blur-[120px] pointer-events-none" />

                <Link href="/" className="text-xl md:text-2xl font-black tracking-tighter uppercase relative z-10 hover:text-purple-500 transition-colors">
                    Arka.
                </Link>

                <div className="relative z-10 py-8 lg:py-0">
                    <h1 className="text-[16vw] lg:text-[10vw] font-[1000] tracking-tighter uppercase leading-[0.8] mb-6">
                        Join <br /> <span className="text-zinc-800">Core.</span>
                    </h1>
                    <p className="text-zinc-500 text-[10px] md:text-xs uppercase tracking-[0.3em] font-bold">
                        Create Identity // Dev Portal
                    </p>
                </div>

                <div className="hidden lg:block text-[10px] font-black uppercase tracking-[0.4em] text-zinc-700 relative z-10">
                    Open-Source Community Standard
                </div>
            </div>

            {/* --- بخش فرم (Form Side) --- */}
            <div className="lg:w-1/2 flex items-center justify-center p-6 md:p-12 lg:p-24 bg-black">
                <div className="w-full max-w-md space-y-8 md:space-y-10">

                    <div className="space-y-2 text-center lg:text-left">
                        <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tighter">Register</h2>
                        <p className="text-zinc-500 font-medium text-sm md:text-base">Create your engine account to start building.</p>
                    </div>

                    <form className="space-y-5">
                        {/* Name Input */}
                        <div className="group space-y-2">
                            <label className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-500 ml-1">Full Name</label>
                            <div className="relative">
                                <User className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-700 group-focus-within:text-purple-500 transition-colors w-4.5 h-4.5" />
                                <input
                                    type="text"
                                    placeholder="JOHN DOE"
                                    className="w-full bg-zinc-900/50 border border-white/5 rounded-2xl py-4 pl-12 pr-4 outline-none focus:border-purple-600 focus:bg-transparent transition-all font-bold text-sm placeholder:text-zinc-800"
                                />
                            </div>
                        </div>

                        {/* Email Input */}
                        <div className="group space-y-2">
                            <label className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-500 ml-1">Email Endpoint</label>
                            <div className="relative">
                                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-700 group-focus-within:text-purple-500 transition-colors w-4.5 h-4.5" />
                                <input
                                    type="email"
                                    placeholder="DEV@ARKACORP.COM"
                                    className="w-full bg-zinc-900/50 border border-white/5 rounded-2xl py-4 pl-12 pr-4 outline-none focus:border-purple-600 focus:bg-transparent transition-all font-bold text-sm placeholder:text-zinc-800"
                                />
                            </div>
                        </div>

                        {/* Password Input */}
                        <div className="group space-y-2">
                            <label className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-500 ml-1">Security Key</label>
                            <div className="relative">
                                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-700 group-focus-within:text-purple-500 transition-colors w-[18px] h-[18px]" />
                                <input
                                    type="password"
                                    placeholder="CREATE PASSWORD"
                                    className="w-full bg-zinc-900/50 border border-white/5 rounded-2xl py-4 pl-12 pr-4 outline-none focus:border-purple-600 focus:bg-transparent transition-all font-bold text-sm placeholder:text-zinc-800"
                                />
                            </div>
                        </div>

                        <button className="w-full py-4 md:py-5 bg-white cursor-pointer text-black rounded-2xl font-black uppercase tracking-widest hover:bg-purple-600 hover:text-white transition-all transform active:scale-[0.98] flex items-center justify-center gap-3">
                            Confirm Registration <ArrowRight className="w-4.5 h-4.5" />
                        </button>
                    </form>

                    {/* Footer Link */}
                    <p className="text-center text-zinc-600 text-[10px] font-black uppercase tracking-widest pt-2">
                        Already registered? <Link href="/auth/login" className="text-white hover:text-purple-500 transition-colors underline underline-offset-4 ml-2">Access Account</Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default RegisterPage;