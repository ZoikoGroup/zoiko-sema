"use client";

import React, { useEffect, useState, useRef } from 'react';
import { ArrowRight, ShieldCheck } from 'lucide-react';

export default function CustomerSupportHero() {
  const [hasEntered, setHasEntered] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

  // Intersection observer to handle slide-up scroll reveal
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasEntered(true);
        }
      },
      { threshold: 0.05 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={containerRef}
      className={`w-full min-h-[804px] py-10 lg:py-10 px-4 sm:px-8 lg:px-20 bg-slate-900 dark:bg-gray-950 flex items-center justify-center transition-all duration-1000 ease-out transform ${
        hasEntered ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
      }`}
    >
      <div className="max-w-[1232px] w-full mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
        
        {/* Left Copy & Actions Panel */}
        <div className="flex-1 w-full space-y-6 text-left">
          
          {/* Badge Label */}
          <div>
            <div className="inline-flex items-center px-3 py-1 bg-violet-400/20 rounded-full border border-violet-400/30">
              <span className="text-violet-400 text-[10px] font-bold  uppercase tracking-wider leading-none">
                CUSTOMER SUPPORT
              </span>
            </div>
          </div>

          {/* Main Title Block */}
          <h1 className="text-white dark:text-slate-100 text-3xl sm:text-4xl lg:text-[40px] font-extrabold font-['Plus_Jakarta_Sans'] leading-tight lg:leading-[48px] tracking-tight">
            Resolve customer issues with every conversation, owner, and next step connected.
          </h1>

          {/* Descriptive Copy Context */}
          <p className="text-slate-300 dark:text-gray-400 text-sm sm:text-base font-normal  leading-6 max-w-[580px]">
            Zoiko Sema brings customer conversations, escalation threads, meetings, files, tasks, knowledge, and reviewed follow-up into one governed support workspace.
          </p>

          {/* Interactive Button CTA Hub */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 pt-4 font-['Inter']">
            <button className="px-10 py-2.5 bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold  rounded-full shadow-[0px_4px_16px_0px_rgba(52,87,232,0.3)] transition-all hover:-translate-y-0.5 active:scale-98 cursor-pointer text-center">
              Get a demo
            </button>
            
            <button className=" font-['Inter'] px-10 py-2.5 bg-white text-slate-900 hover:bg-slate-100 text-xs font-bold  rounded-full border border-slate-200 transition-all hover:-translate-y-0.5 active:scale-98 cursor-pointer text-center">
              Start free
            </button>

            <a 
              href="#" 
              className="inline-flex items-center gap-2 text-teal-400 hover:text-teal-300 text-xs font-semibold  transition-colors group py-2"
            >
              <span>Explore messaging for support</span>
              <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" />
            </a>
          </div>

          {/* Governed AI Compliance Separator Box */}
          <div className="pt-6 w-full max-w-[588px]">
            <div className="flex items-start gap-3 p-4 bg-teal-400/5 rounded-2xl border border-teal-400/20">
              <ShieldCheck className="size-4 text-teal-400 shrink-0 mt-0.5" />
              <p className="text-slate-300 dark:text-gray-400 text-xs font-normal  leading-relaxed">
                Customer-facing updates stay separate from internal collaboration. AI drafts remain reviewable, source-linked, and policy-controlled.
              </p>
            </div>
          </div>

        </div>

        {/* Right Product Screen Mockup */}
        <div className="flex-1 w-full flex justify-center lg:justify-end">
          <div className="w-full max-w-[588px] aspect-[588/503] bg-gray-900 rounded-2xl shadow-[0px_0px_0px_1px_rgba(45,212,191,0.12),0px_32px_80px_0px_rgba(0,0,0,0.50)] border border-white/10 overflow-hidden relative group">
            
            {/* Header Browser Window Controls */}
            <div className="w-full h-10 px-4 bg-gray-900/90 border-b border-white/5 flex items-center gap-2 relative z-10">
              <div className="size-2 bg-red-400/70 rounded-full" />
              <div className="size-2 bg-yellow-400/70 rounded-full" />
              <div className="size-2 bg-emerald-500/70 rounded-full" />
              <div className="flex-1 pl-4">
                <div className="max-w-[180px] px-3 py-0.5 bg-white/5 rounded text-gray-500 text-[10px] font-normal  tracking-wide">
                  Support Operations Hub
                </div>
              </div>
            </div>

            {/* Visual Image Screen */}
            <div className="w-full h-[calc(100%-40px)] relative overflow-hidden">
              <img 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.02]" 
                src="/customer-support/image 206.png" 
                alt="Zoiko Sema workspace customer escalation ticket system panel detail" 
              />
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}