'use client';

import React from 'react';

const WorkflowCanvas: React.FC = () => {
    return (
        <section className="relative w-screen h-screen bg-black overflow-hidden">

            {/* Top Topic — OUTSIDE the frame */}
            <div className="absolute top-2 md:top-3 left-1/2 -translate-x-1/2 z-30 pointer-events-none">
                <h1 className="text-xs md:text-2xl font-black tracking-[0.4em] uppercase text-zinc-500">
                    Let&apos;s
                    <span className="ml-2 text-transparent bg-clip-text bg-gradient-to-b from-white to-zinc-400">
                        Build it
                    </span>
                </h1>
            </div>

            {/* Outer Frame */}
            <div className="absolute inset-8 md:inset-12 rounded-3xl border border-white/15 z-10">

                {/* Grid Layout */}
                <div className="absolute inset-0 grid grid-cols-[1.5fr_10fr_0.5fr]">

                    <div className="border-r border-white/15" />

                    <div className="border-r border-white/15 relative">
                        <div className="absolute inset-0 bg-indigo-500/5 blur-[120px] pointer-events-none" />
                    </div>

                    <div />
                </div>
            </div>

            {/* Global ambient glow */}
            <div className="absolute top-1/2 left-1/2 w-[40vw] h-[40vw] -translate-x-1/2 -translate-y-1/2 bg-indigo-400/10 blur-[200px] rounded-full pointer-events-none" />
        </section>
    );
};

export default WorkflowCanvas;
