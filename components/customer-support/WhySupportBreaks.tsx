"use client";

import React, { useEffect, useState, useRef } from 'react';
import { AlertCircle, CheckCircle2 } from 'lucide-react';

export default function WhySupportBreaks() {
  const [hasEntered, setHasEntered] = useState(false);
  const sectionRef = useRef<HTMLDivElement | null>(null);

  // Intersection observer to handle page-scroll reveal transformations
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasEntered(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => observer.disconnect();
  }, []);

  // Structural dataset representing the issue vs governed resolution matrix
  const challengePairsLeft = [
    {
      problem: "Context is spread across chat, email, files, and ticket systems.",
      solution: "Source-linked case timeline with customer, product, prior actions, and connected records."
    },
    {
      problem: "Triage is inconsistent or opaque.",
      solution: "Explainable criteria, visible override, policy enforcement, and audit."
    }
  ];

  const challengePairsRight = [
    {
      problem: "Internal notes leak into customer updates.",
      solution: "Explicit audience labels, permissions, reviewed publishing, and audit trail."
    },
    {
      problem: "AI drafts sound authoritative without evidence.",
      solution: "Source links, confidence indicators, missing-fact flags, and mandatory human review."
    }
  ];

  return (
    <section
      ref={sectionRef}
      className={`w-full py-20 px-4 sm:px-8 lg:px-20 bg-slate-900 dark:bg-gray-950 text-white transition-all duration-1000 ease-out transform ${
        hasEntered ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'
      }`}
    >
      <div className="max-w-[1280px] mx-auto flex flex-col items-center gap-12 lg:gap-16">
        
        {/* Section Header */}
        <div className="w-full text-center space-y-4">
          <div className="inline-flex items-center px-3 py-1 bg-teal-400/10 rounded-full border border-teal-400/25">
            <span className="text-teal-400 text-xs font-semibold  uppercase tracking-wider leading-none">
              WHY SUPPORT WORK BREAKS
            </span>
          </div>
          <h2 className="text-white dark:text-slate-100 text-3xl sm:text-4xl lg:text-4xl font-extrabold   leading-tight tracking-tight max-w-4xl mx-auto">
            Six ways fragmented support fails customers.
          </h2>
          <p className="text-gray-400 dark:text-gray-500 text-base sm:text-lg font-normal ">
            And how a governed workspace solves each one.
          </p>
        </div>

        {/* 3-Column Grid Matrix Layout (Collapses to single columns on small breakpoints) */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          
          {/* Left Feature Column */}
          <div className="w-full flex flex-col gap-6 order-2 lg:order-1">
            {challengePairsLeft.map((item, idx) => (
              <ComparisonCard key={idx} problem={item.problem} solution={item.solution} />
            ))}
          </div>

          {/* Center Visual Mockup Display Element */}
          <div className="w-full flex justify-center order-1 lg:order-2">
            <div className="w-full max-w-[384px] aspect-[384/320] bg-white dark:bg-gray-900 rounded-2xl border border-white/5 overflow-hidden shadow-2xl relative group transform transition-transform duration-500 hover:scale-[1.02]">
              <img 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                src="/customer-support/image 207.png" 
                alt="Zoiko Sema workspace dashboard analytics preview breakdown graphics template layout" 
              />
            </div>
          </div>

          {/* Right Feature Column */}
          <div className="w-full flex flex-col gap-6 order-3">
            {challengePairsRight.map((item, idx) => (
              <ComparisonCard key={idx} problem={item.problem} solution={item.solution} />
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}

// Component helper block to render the structured internal problem/solution cards
function ComparisonCard({ problem, solution }: { problem: string; solution: string }) {
  return (
    <div className="w-full rounded-2xl border border-white/5 overflow-hidden flex flex-col backdrop-blur-[4px] bg-slate-900/40 dark:bg-gray-900/40 shadow-md transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:border-white/10 group">
      
      {/* Red Problem Flag Container */}
      <div className="p-5 bg-red-500/10 flex items-start gap-3 border-b border-white/5">
        <AlertCircle className="size-4.5 text-red-400 shrink-0 mt-0.5 transition-transform group-hover:rotate-12" />
        <p className="text-red-300 dark:text-red-400/90 text-sm font-normal  leading-relaxed">
          {problem}
        </p>
      </div>

      {/* Teal Rectified Solution Container */}
      <div className="p-5 bg-teal-400/5 dark:bg-teal-500/[0.02] flex items-start gap-3 flex-1">
        <CheckCircle2 className="size-4.5 text-teal-400 shrink-0 mt-0.5 transition-transform group-hover:scale-110" />
        <p className="text-slate-300 dark:text-gray-400 text-sm font-normal  leading-relaxed">
          {solution}
        </p>
      </div>

    </div>
  );
}