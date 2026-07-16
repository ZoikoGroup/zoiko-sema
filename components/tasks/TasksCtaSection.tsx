"use client";

import React, { useEffect, useState, useRef } from 'react';
import { ArrowUpRight, Zap } from 'lucide-react';

export default function CTAHeroSection() {
  const [revealed, setRevealed] = useState(false);
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setRevealed(true);
    }, { threshold: 0.1 });

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="w-full py-24 px-4 sm:px-6 lg:px-8 bg-slate-900 dark:bg-gray-950 text-white transition-colors duration-300 overflow-hidden font-sans flex flex-col justify-center items-center"
    >
      <div className="max-w-4xl mx-auto flex flex-col items-center text-center gap-6">
        
        {/* Animated Feature Icon Badge */}
        <div className={`p-4 bg-blue-600/20 dark:bg-blue-500/10 rounded-2xl inline-flex justify-center items-center border border-blue-500/20 transition-all duration-1000 transform ${
          revealed ? 'scale-100 opacity-100 rotate-0' : 'scale-75 opacity-0 -rotate-12'
        }`}>
          <Zap className="w-6 h-6 text-blue-500 dark:text-blue-400 fill-blue-500/10" />
        </div>

        {/* Hero Header */}
        <h1 className={`max-w-3xl text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white font-sans leading-tight transition-all duration-1000 delay-150 transform ${
          revealed ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}>
          Start turning conversations into accountable work.
        </h1>

        {/* Supporting Context Copy */}
        <p className={`max-w-lg text-slate-400 dark:text-slate-400 text-sm sm:text-base font-normal leading-relaxed transition-all duration-1000 delay-300 transform ${
          revealed ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
        }`}>
          Source-linked tasks, clear ownership, governed AI, and every view your team needs — free to start, designed to scale.
        </p>

        {/* Dynamic Action Buttons Grid Component */}
        <div className={`w-full max-w-md sm:max-w-none pt-4 flex flex-col sm:flex-row justify-center items-stretch sm:items-center gap-3 transition-all duration-1000 delay-450 transform ${
          revealed ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
        }`}>
          <button className="px-7 py-3.5 bg-blue-600 hover:bg-blue-700 text-white text-sm font-bold rounded-full shadow-[0px_10px_24px_0px_rgba(52,87,232,0.30)] active:scale-98 transition-all duration-200">
            Start free
          </button>
          
          <button className="px-7 py-3.5 bg-white/10 hover:bg-white/15 border border-white/20 text-white text-sm font-semibold rounded-full active:scale-98 transition-all duration-200">
            Get a demo
          </button>
          
          <button className="px-7 py-3.5 bg-white/5 hover:bg-white/10 border border-white/10 text-white text-sm font-semibold rounded-full active:scale-98 transition-all duration-200">
            Explore Teams
          </button>
        </div>

        {/* Secondary Sub-navigation Links */}
        <div className={`pt-6 flex flex-wrap justify-center items-center gap-x-6 gap-y-3 transition-all duration-1000 delay-600 transform ${
          revealed ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
        }`}>
          {[
            { label: "Compare plans", href: "#" },
            { label: "Trust Center", href: "#" },
            { label: "Admin Console", href: "#" }
          ].map((link) => (
            <a 
              key={link.label}
              href={link.href}
              className="flex items-center gap-1 text-blue-400 hover:text-blue-300 text-xs font-semibold leading-5 group transition-colors duration-200"
            >
              <span>{link.label}</span>
              <ArrowUpRight className="w-3 h-3 transform transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          ))}
        </div>

      </div>
    </section>
  );
}