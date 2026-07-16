"use client";

import React, { useEffect, useState, useRef } from 'react';
import { Mail } from 'lucide-react';

export default function CTASection() {
  const [revealed, setRevealed] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([e]) => e.isIntersecting && setRevealed(true), { threshold: 0.1 });
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="w-full py-24 px-4 sm:px-6 lg:px-16 bg-slate-900 text-white overflow-hidden">
      <div className={`max-w-4xl mx-auto text-center space-y-8 transition-all duration-1000 transform ${revealed ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
        
        {/* Core Prompt Info */}
        <div className="space-y-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-sans tracking-tight leading-none">
            Stay informed when Zoiko Sema service health changes.
          </h2>
          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto font-normal">
            Subscribe to updates for incidents, planned maintenance, resolved issues, and component-specific service changes.
          </p>
        </div>

        {/* Actions Cluster Panel */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <button className="w-full sm:w-auto px-8 h-12 bg-blue-600 hover:bg-blue-500 text-white text-sm font-bold rounded-full shadow-xl shadow-blue-600/30 flex items-center justify-center gap-2 transition-all hover:-translate-y-0.5 active:translate-y-0">
            <Mail className="w-4 h-4" />
            <span>Subscribe to updates</span>
          </button>
          
          <button className="w-full sm:w-auto px-8 h-12 bg-slate-800 hover:bg-slate-700 text-white text-sm font-bold rounded-full border border-slate-700 transition-all hover:-translate-y-0.5 active:translate-y-0">
            View incident history
          </button>
          
          <button className="w-full sm:w-auto px-6 h-12 text-blue-400 hover:text-blue-300 text-sm font-bold transition-colors">
            Contact support &rarr;
          </button>
        </div>

      </div>
    </section>
  );
}