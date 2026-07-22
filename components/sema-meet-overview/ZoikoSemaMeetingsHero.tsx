"use client";

import React, { useEffect, useState } from 'react';
import Link from "next/link";
import { ArrowRight, Shield, Sparkles, Link as LinkIcon, Settings } from 'lucide-react';

export default function ZoikoSemaMeetingsHero() {
  const [isMounted, setIsMounted] = useState(false);

  // Triggers the initial float-up fade entrance effect
  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <section className="relative w-full min-h-[733px] py-16 lg:py-24 px-4 sm:px-6 lg:px-8 bg-slate-950 dark:bg-gray-950 text-white overflow-hidden flex items-center justify-center">
      
      {/* Dynamic Radial Gradient Background Effect */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_20%_15%,rgba(79,70,229,0.35),transparent_55%)] dark:bg-[radial-gradient(circle_at_20%_15%,rgba(79,70,229,0.2),transparent_60%)] z-0" />

      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        
        {/* Left Interactive Content Column */}
        <div 
          className={`lg:col-span-6 flex flex-col justify-start items-start gap-6 transition-all duration-1000 transform ${
            isMounted ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          {/* Tagline Badge */}
          <div className="flex items-center gap-2">
            <div className="size-1.5 bg-indigo-400 rounded-full animate-pulse" />
            <span className="text-indigo-400 text-xs font-bold  uppercase tracking-widest">
              ZOIKO SEMA MEETINGS
            </span>
          </div>

          {/* Heading with layout constraints */}
          <h1 className="text-white dark:text-gray-100 text-4xl sm:text-5xl font-extrabold  leading-tight sm:leading-[57.20px] tracking-tight">
            Meetings that drive<br className="hidden sm:inline"/>decisions.
          </h1>

          {/* Core Description Text */}
          <p className="text-white/70 dark:text-gray-400 text-base font-normal  leading-7 max-w-[500px]">
            Host secure video meetings, collaborate in real time, capture decisions with AI, and keep every follow-up connected to your Zoiko Sema workspace.
          </p>

          {/* Primary & Secondary Call to Action Buttons */}
          <div className="w-full flex flex-col sm:flex-row items-center gap-4 pt-2">
             <Link
    href="/start-free"
    className="inline-flex w-full sm:w-auto items-center justify-center px-8 py-3 bg-blue-600 hover:bg-blue-700 active:scale-95 transition-all duration-200 rounded-full text-white text-sm font-semibold shadow-lg shadow-blue-600/20 cursor-pointer"
  >
    Start free
  </Link>

  <Link
    href="/get-a-demo"
    className="inline-flex w-full sm:w-auto items-center justify-center px-8 py-3 bg-transparent hover:bg-white/5 active:scale-95 transition-all duration-200 rounded-full border border-white/30 text-white dark:text-gray-200 text-sm font-semibold cursor-pointer"
  >
    Get a demo
  </Link>
          </div>

          {/* Secondary Action Text Navigation Links */}
          <div className="w-full flex flex-wrap gap-x-6 gap-y-3 pt-4 border-t border-white/5">
            {[
              { label: "Join a meeting" },
              { label: "Start a meeting" },
              { label: "Schedule a meeting" },
              { label: "Open Sema Meet" }
            ].map((link, idx) => (
              <a 
                key={idx} 
                href="#" 
                className="flex items-center gap-1.5 text-indigo-400 hover:text-indigo-300 text-sm font-semibold  transition-colors group cursor-pointer"
              >
                <span>{link.label}</span>
                <ArrowRight className="size-3.5 transform group-hover:translate-x-1 transition-transform duration-200" />
              </a>
            ))}
          </div>

          {/* Governance Context Feature Pills Grid */}
          <div className="flex flex-wrap gap-2.5 pt-4">
            {[
              { text: "Secure meetings" },
              { text: "Reviewed AI" },
              { text: "Connected follow-through" },
              { text: "Admin controls" }
            ].map((pill, idx) => (
              <div 
                key={idx} 
                className="px-4 py-2 bg-white/5 border border-white/10 backdrop-blur-[6px] rounded-full inline-flex items-center gap-2 hover:bg-white/10 hover:border-white/20 transition-all duration-200 select-none cursor-default"
              >
                <span className="text-white/90 dark:text-gray-300 text-xs font-semibold  leading-5">
                  {pill.text}
                </span>
              </div>
            ))}
          </div>

        </div>

        {/* Right Dashboard Presentation Column */}
        <div 
          className={`lg:col-span-6 w-full flex justify-center lg:justify-end transition-all duration-1000 delay-300 transform ${
            isMounted ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <div className="w-full max-w-[714px] bg-slate-900/40 border border-white/10 rounded-[20px] shadow-[0px_30px_80px_0px_rgba(0,0,0,0.45)] overflow-hidden group transition-all duration-500 hover:scale-[1.02] hover:border-indigo-500/30">
            <div className="aspect-[714/461] w-full bg-slate-950 relative">
              <img 
                className="w-full h-full object-cover opacity-90 transition-transform duration-700 group-hover:scale-105" 
                src="/sema-meet/image 177.png" 
                alt="Zoiko Sema Meet active interface presentation display context"
              />
              {/* Internal decorative shadow vignette layer */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}