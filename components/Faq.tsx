'use client';

import React, { useState } from 'react';
import { Plus, Minus, HelpCircle, Sparkles } from 'lucide-react';

const FAQ_DATA = [
  {
    question: "Why no installation is required?",
    answer: "Arka is built as a Visual Infrastructure. Instead of bloating your node_modules with another package, we provide clean, optimized React/Next.js code that you can copy and own. This means zero overhead and total control."
  },
  {
    question: "Is the generated code SEO-optimized?",
    answer: "Absolutely. Every component follows semantic HTML standards and is pre-configured with Next.js Metadata API. We ensure a 100/100 Lighthouse SEO score out of the box."
  },
  {
    question: "Does it support Next.js 15 Server Components?",
    answer: "Yes, Arka is engineered for the latest React architecture. We distinguish between 'use client' and Server Components to ensure maximum performance and minimal client-side hydration."
  },
  {
    question: "Can I contribute to Arka on GitHub?",
    answer: "Arka is a community-driven project. Anyone can submit a Pull Request. Once approved by our core maintainers, your components will be featured on the platform for thousands of developers."
  }
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-32 px-6 bg-black border-t border-white/5" dir="ltr">
      <div className="max-w-4xl mx-auto">
        
        <div className="text-center mb-20 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-indigo-500/10 border border-indigo-500/20 rounded-full">
            <HelpCircle size={12} className="text-indigo-400" />
            <span className="text-[10px] font-black uppercase tracking-widest text-indigo-400">Support</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-[1000] text-white tracking-tighter">
            Common <span className="text-zinc-700">Questions.</span>
          </h2>
        </div>

        <div className="space-y-4">
          {FAQ_DATA.map((item, index) => (
            <div 
              key={index}
              className={`group border-b border-white/5 transition-all duration-500 ${openIndex === index ? 'bg-white/2 rounded-3xl px-8 pb-8' : 'px-4'}`}
            >
              <button 
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full py-8 flex items-center justify-between text-left focus:outline-none"
              >
                <span className={`text-xl md:text-2xl font-black tracking-tight transition-colors duration-300 ${openIndex === index ? 'text-white' : 'text-zinc-500 group-hover:text-zinc-300'}`}>
                  {item.question}
                </span>
                <div className={`shrink-0 w-8 h-8 rounded-full border border-white/10 flex items-center justify-center transition-all duration-500 ${openIndex === index ? 'bg-indigo-600 border-indigo-600 rotate-0' : 'rotate-90'}`}>
                  {openIndex === index ? <Minus size={16} className="text-white" /> : <Plus size={16} className="text-zinc-500" />}
                </div>
              </button>

              <div className={`overflow-hidden transition-all duration-500 ease-in-out ${openIndex === index ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}>
                <p className="text-zinc-500 text-lg leading-relaxed font-medium max-w-2xl">
                  {item.answer}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default FAQ;