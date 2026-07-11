"use client";

import React from "react";
import { useInView } from "@/components/Personal-to-team/useInView";

export function RemoteCoordinationHeroSection() {
  const { ref, inView } = useInView(0.1);

  return (
    <section className="w-full bg-slate-50 pt-8 lg:pt-12 pb-20 font-sans antialiased overflow-hidden relative">
      {/* Background Decorators */}
      <div className="absolute right-0 top-20 size-96 bg-violet-100/50 rounded-full blur-3xl -z-0"></div>

      <div className="max-w-[1248px] mx-auto px-6 md:px-10 flex flex-col lg:flex-row items-center gap-16 relative z-10">
        
        {/* Left Content */}
        <div ref={ref} className={`flex-1 flex flex-col items-start transition-all duration-1000 transform ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}>
          
          <div className="bg-violet-50 rounded-full px-4 py-1.5 mb-8">
            <span className="text-violet-600 text-xs font-bold tracking-widest uppercase font-['Inter']">
              USE CASE &middot; REMOTE COORDINATION
            </span>
          </div>
          
          <h1 className="text-slate-900 text-4xl sm:text-5xl lg:text-[56px] font-bold leading-[1.1] mb-6 font-['Inter'] max-w-[560px] tracking-tight">
            Coordinate remote teams without losing momentum.
          </h1>
          
          <p className="text-slate-600 text-lg leading-7 mb-10 max-w-[500px] font-['Inter']">
            Bring chats, meetings, async updates, handoffs, files, AI summaries, and follow-ups into one governed workspace built for distributed work.
          </p>
          
          <div className="flex flex-wrap items-center gap-4 mb-10">
            <button className="px-8 py-3.5 bg-blue-600 text-white rounded-full font-bold text-base shadow-[0px_10px_24px_-8px_rgba(37,99,235,0.50)] hover:scale-105 transition-transform">
              Get a demo
            </button>
            <button className="px-8 py-3.5 bg-white text-slate-900 border border-slate-200 rounded-full font-bold text-base hover:bg-slate-50 hover:scale-105 transition-all shadow-sm">
              Start free
            </button>
            <a href="#" className="text-violet-600 text-base font-bold underline underline-offset-4 decoration-violet-200 hover:decoration-violet-600 transition-colors ml-2">
              Talk to sales
            </a>
          </div>

          <div className="flex flex-wrap gap-x-8 gap-y-4">
            <div className="flex items-center gap-2">
              <span className="text-emerald-600 text-sm font-semibold">✓</span>
              <span className="text-slate-500 text-sm font-semibold font-['Inter']">Remote & hybrid teams</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-emerald-600 text-sm font-semibold">✓</span>
              <span className="text-slate-500 text-sm font-semibold font-['Inter']">Time-zone-aware handoffs</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-emerald-600 text-sm font-semibold">✓</span>
              <span className="text-slate-500 text-sm font-semibold font-['Inter']">Governed coordination</span>
            </div>
          </div>
        </div>

        {/* Right Visual */}
        <div className={`w-full lg:w-[637px] h-auto lg:h-[384px] shrink-0 bg-white rounded-[24px] shadow-[0px_40px_80px_-30px_rgba(20,22,60,0.25)] outline outline-1 outline-slate-200 overflow-hidden relative transition-all duration-1000 delay-300 transform ${inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"}`}>
          <img 
            src="/Remote/two.png" 
            alt="Remote Coordination UI" 
            className="w-[105%] h-[100%] max-w-none object-cover absolute top-0 left-[-2.5%]"
            onError={(e) => {
              e.currentTarget.src = "https://placehold.co/1200x800";
            }}
          />
        </div>

      </div>
    </section>
  );
}
