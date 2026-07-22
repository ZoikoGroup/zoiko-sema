"use client";

import React, { useEffect, useState, useRef } from 'react';
import Link from "next/link";

// --- Custom Intersection Observer Hook for Entrance Animations ---
function useScrollReveal() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.05 }
    );
    const currentRef = ref.current;
    if (currentRef) observer.observe(currentRef);
    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, []);

  return { ref, isVisible };
}

export default function WebinarsEventsHero() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section
      ref={ref}
      className={`w-full min-h-[719px] py-16 sm:py-24 px-4 sm:px-8 lg:px-28 bg-gradient-to-br from-indigo-950 via-slate-900 to-gray-950 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 text-white relative overflow-hidden flex items-center transition-all duration-1000 ease-out transform ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
      }`}
    >
      {/* Ambient Radial Overlay Background Blur Grid */}
      <div className="absolute inset-0 bg-radial-[at_20%_15%] from-indigo-600/40 to-transparent to-60% pointer-events-none opacity-80" />

      <div className="w-full max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-10">
        
        {/* Left Columns: Text Content Structure */}
        <div className="lg:col-span-6 flex flex-col items-start gap-6 max-w-[560px]">
          
          {/* Badge Label */}
          <div className="flex items-center gap-3 h-5">
            <div className="size-1.5 bg-indigo-400 rounded-full animate-pulse" />
            <span className="text-indigo-400 text-xs font-bold   uppercase tracking-widest">
              WEBINARS & EVENTS
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-white text-3xl sm:text-4xl lg:text-4xl font-extrabold  leading-tight tracking-tight">
            Learn live. Revisit what matters. Put better communication into practice.
          </h1>

          {/* Paragraph Description */}
          <p className="text-white/70 text-sm sm:text-base font-normal   leading-relaxed">
            Join expert-led Zoiko Sema sessions, practical workshops, product demonstrations, and on-demand briefings designed to turn communication into clearer decisions and accountable work.
          </p>

          {/* Action Buttons Hub Container */}
          <div className="w-full sm:w-auto flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
             <Link
    href="/login"
    className="inline-flex items-center justify-center px-7 py-3.5 bg-blue-600 text-white text-sm font-semibold rounded-full shadow-md transition-all duration-200 hover:bg-blue-500 hover:-translate-y-0.5 active:translate-y-0"
  >
    Register for next event
  </Link>

  <Link
    href="/contact"
    className="inline-flex items-center justify-center px-7 py-3.5 bg-transparent text-white text-sm font-semibold rounded-full border border-white/30 transition-all duration-200 hover:bg-white/10 hover:border-white/50 hover:-translate-y-0.5 active:translate-y-0 text-center"
  >
    Contact Support
  </Link>
          </div>

          {/* Compliance Disclaimer Note */}
          <p className="text-white/40 text-[11px] sm:text-xs font-normal   leading-relaxed pt-4 border-t border-white/5 w-full">
            Recording, captions, AI-assisted summaries, and attendee data are handled under the published event notice and applicable workspace policies.
          </p>
        </div>

        {/* Right Columns: Interactive Media Framework Preview Window */}
        <div className="lg:col-span-6 w-full flex justify-center lg:justify-end">
          <div className="w-full max-w-[540px] aspect-[538/346] rounded-[20px] shadow-[0px_30px_80px_rgba(0,0,0,0.45)] border border-white/10 overflow-hidden bg-slate-900 group">
            <img
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.015]"
              src="/webinars/Topic and audienc (4).png"
              alt="Zoiko Sema live preview interface mockup workspace"
            />
          </div>
        </div>

      </div>
    </section>
  );
}