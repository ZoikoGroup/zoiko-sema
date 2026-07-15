"use client";

import React, { useEffect, useState, useRef } from 'react';
import { ChevronDown, Layers, MessageSquareText, ShieldAlert } from 'lucide-react';

const FAQS = [
  "What does Zoiko Sema System Status show?",
  "How often are incidents updated?",
  "Can I subscribe to status updates?",
  "Does the page show planned maintenance?",
  "Does System Status replace support?",
  "Can enterprise customers receive component-specific notifications?"
];

const FEATURES = [
  { icon: "/status/Icon (4).png", title: "Real-time monitoring", desc: "Service health checked continuously across all components." },
  { icon: "/status/Icon (5).png", title: "Plain-language updates", desc: "Every incident explains customer impact without engineering jargon." },
  { icon: "/status/Icon (6).png", title: "Structured resolution", desc: "Active incidents always show a next update time and clear status." }
];

export default function CommonQuestions() {
  const [revealed, setRevealed] = useState(false);
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([e]) => e.isIntersecting && setRevealed(true), { threshold: 0.05 });
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="w-full py-25 px-4 sm:px-6 lg:px-16 bg-white dark:bg-gray-900 text-slate-900 dark:text-white transition-colors duration-300">
      <div className="max-w-5xl mx-auto space-y-12">
        
        {/* Header Block */}
        <div className={`text-center space-y-3 transition-all duration-1000 transform ${revealed ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          <span className="text-violet-600 dark:text-violet-400 text-xs font-bold uppercase tracking-wider block">Trust & Transparency</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-sans text-slate-900 dark:text-white">Common questions about System Status</h2>
        </div>

        {/* Accordion List Box */}
        <div className={`space-y-3 transition-all duration-1000 delay-150 transform ${revealed ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
          {FAQS.map((question, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div 
                key={idx} 
                className="rounded-2xl border border-violet-100 dark:border-slate-800 overflow-hidden bg-transparent transition-all"
              >
                <button 
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-slate-50 dark:hover:bg-slate-850/40 transition-colors"
                >
                  <span className="text-sm font-semibold text-slate-900 dark:text-slate-100">{question}</span>
                  <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
                </button>
                <div className={`transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? 'max-h-40 border-t border-violet-50 dark:border-slate-800/60' : 'max-h-0'}`}>
                  <div className="p-6 text-sm text-gray-500 dark:text-slate-400 bg-slate-50/50 dark:bg-slate-950/20">
                    Zoiko Sema updates this view dynamically when infrastructure telemetry deviates from default operating targets. Detailed resolution actions follow shortly.
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Lower Features Grid Framework */}
        <div className={`grid grid-cols-1 md:grid-cols-3 gap-6 pt-12 border-t border-slate-100 dark:border-slate-800 transition-all duration-1000 delay-300 transform ${revealed ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
          {FEATURES.map((feat, idx) => {
            const FeatIcon = feat.icon;
            return (
              <div key={idx} className="p-6 bg-slate-50 dark:bg-slate-950 border border-transparent dark:border-slate-800/60 rounded-2xl flex flex-col items-center text-center group hover:scale-[1.02] transition-transform duration-300">
                <div className="w-12 h-12 rounded-2xl bg-violet-100 dark:bg-violet-950/50 text-violet-600 dark:text-violet-400 flex items-center justify-center mb-4 transition-transform duration-300 group-hover:rotate-6">
                  <img className="w-6 h-6" src={feat.icon}/>
                </div>
                <h4 className="text-sm font-bold mb-2 text-slate-900 dark:text-white">{feat.title}</h4>
                <p className="text-gray-500 dark:text-slate-400 text-xs leading-relaxed">{feat.desc}</p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}