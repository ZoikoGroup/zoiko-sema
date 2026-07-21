"use client";

import React from "react";
import Link from "next/link";
import { useInView } from "./useInView";

export function PersonalToTeamHeroSection() {
  const { ref: textRef, inView: textIn } = useInView(0.2);
  const { ref: uiRef, inView: uiIn } = useInView(0.15);

  return (
    <section className="relative w-full bg-violet-50 overflow-hidden pt-6 pb-10 sm:pt-8 sm:pb-14 lg:pt-10 lg:pb-16 font-sans antialiased flex items-center">
      <div className="absolute right-0 top-[20%] size-60 bg-radial from-violet-100 to-transparent to-70% pointer-events-none" />

      <div className="relative z-10 max-w-[1248px] w-full mx-auto px-6 md:px-10 grid grid-cols-1 lg:grid-cols-[1fr_640px] gap-12 lg:gap-8 items-center">
        
        {/* Left Content */}
        <div ref={textRef} className={`ptt-hidden ${textIn ? "ptt-visible" : ""} flex flex-col items-start gap-5 max-w-[520px]`}>
          <div className="bg-violet-100/50 rounded-full px-4 py-1.5 border border-violet-100">
            <span className="text-xs font-bold uppercase tracking-widest text-indigo-500">
              USE CASE &middot; PERSONAL-TO-TEAM
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-extrabold leading-[1.15] text-slate-900 tracking-tight">
            Move from personal<br />work to{" "}
            <span className="text-blue-600">
              shared team<br />momentum.
            </span>
          </h1>

          <p className="text-base sm:text-lg text-slate-600 leading-7">
            Turn private notes, meeting takeaways, drafts, tasks, and follow-ups into organized team spaces &mdash; the moment work is ready to become collaborative.
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <Link href="/get-a-demo" className="ptt-btn px-6 py-3 rounded-full text-white text-base font-bold shadow-[0px_10px_24px_-8px_rgba(52,87,232,0.50)] flex items-center justify-center" style={{ background: '#2563EB' }}>
              Get a demo
            </Link>
            <Link href="/start-free" className="ptt-btn px-6 py-3 rounded-full bg-white border border-zinc-200 text-slate-900 text-base font-bold flex items-center justify-center">
              Start free
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 pt-2">
            {[
              "Private-by-default capture",
              "Reviewed sharing",
              "Team-ready follow-through"
            ].map((feature, i) => (
              <div key={i} className="flex items-center gap-2">
                <span className="text-emerald-600 font-bold text-sm">✓</span>
                <span className="text-slate-500 font-semibold text-sm">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right UI Mockup */}
        <div ref={uiRef} className={`ptt-hidden ${uiIn ? "ptt-visible" : ""} w-full flex justify-center lg:justify-end relative`}>
          <div className={`ptt-card ${uiIn ? "ptt-float" : ""} relative w-full max-w-[637px]`}>
            <img 
              src="/Personal/one.png" 
              alt="Personal to Team workflow" 
              className="w-full h-auto object-contain rounded-3xl shadow-[0px_40px_80px_-30px_rgba(20,22,60,0.25)]" 
            />
          </div>
        </div>

      </div>
    </section>
  );
}
