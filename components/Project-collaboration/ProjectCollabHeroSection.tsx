"use client";

import React from "react";
import Link from "next/link";
import { useInView } from "@/components/Personal-to-team/useInView";

export function ProjectCollabHeroSection() {
  const { ref: textRef, inView: textIn } = useInView(0.2);
  const { ref: uiRef, inView: uiIn } = useInView(0.15);

  return (
    <section className="relative w-full bg-slate-900 overflow-hidden pt-12 pb-16 lg:pt-16 lg:pb-24 font-sans antialiased flex items-center">
      <div className="absolute left-[50%] top-[50%] -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-900/20 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-[1248px] w-full mx-auto px-6 md:px-10 flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8">
        
        {/* Left Content */}
        <div ref={textRef} className={`transition-all duration-700 transform ${textIn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"} w-[500.64px] flex flex-col justify-start items-start gap-7`}>
          <div className="flex flex-col justify-start items-start gap-4 w-full">
            <div className="h-7 bg-slate-900 rounded-[20px] flex items-center justify-center">
              <span className="text-indigo-400 text-xs font-bold font-['Inter'] tracking-wide">
                USE CASE &middot; PROJECT COLLABORATION
              </span>
            </div>

            <h1 className="text-white text-5xl font-bold font-['Inter'] leading-[56.16px]">
              Keep project work<br/>aligned from{" "}
              <span className="text-blue-400">
                kickoff<br/>to delivery
              </span>
              <span className="text-white">.</span>
            </h1>
          </div>

          <p className="text-stone-300 text-lg font-normal font-['Inter'] leading-7">
            Bring messages, meetings, tasks, files, project rooms,<br/>decisions, AI summaries, and stakeholder updates into one<br/>governed workspace.
          </p>

          <div className="flex flex-col justify-start items-start gap-8 w-96">
            <div className="inline-flex justify-start items-center gap-3.5">
              <Link href="/get-a-demo" className="w-36 h-12 bg-blue-600 rounded-full shadow-[0px_10px_24px_-8px_rgba(52,87,232,0.50)] flex items-center justify-center text-white text-base font-bold font-['Inter'] transition-transform hover:scale-105">
                Get a demo
              </Link>
              <Link href="/start-free" className="w-32 h-12 bg-white rounded-full outline outline-1 outline-offset-[-1px] outline-zinc-200 flex items-center justify-center text-slate-900 text-base font-bold font-['Inter'] transition-transform hover:scale-105">
                Start free
              </Link>
            </div>

            <div className="self-stretch flex flex-col justify-start items-start gap-4">
              <div className="self-stretch inline-flex justify-start items-center gap-3.5">
                <div className="flex justify-start items-center gap-1.5">
                  <div className="w-3 h-4 flex justify-center items-center text-emerald-600 text-sm font-semibold font-['Inter']">✓</div>
                  <div className="w-40 h-4 flex items-center text-slate-400 text-sm font-semibold font-['Inter'] whitespace-nowrap">Cross-functional teams</div>
                </div>
                <div className="flex justify-start items-center gap-1.5">
                  <div className="w-3 h-4 flex justify-center items-center text-emerald-600 text-sm font-semibold font-['Inter']">✓</div>
                  <div className="w-40 h-4 flex items-center text-slate-400 text-sm font-semibold font-['Inter'] whitespace-nowrap">Client & partner projects</div>
                </div>
              </div>
              <div className="inline-flex justify-start items-center gap-1.5">
                <div className="w-3 h-4 flex justify-center items-center text-emerald-600 text-sm font-semibold font-['Inter']">✓</div>
                <div className="w-56 h-4 flex items-center text-slate-400 text-sm font-semibold font-['Inter'] whitespace-nowrap">Governed project communication</div>
              </div>
            </div>
          </div>
        </div>

        {/* Right UI Mockup */}
        <div ref={uiRef} className={`transition-all duration-1000 delay-100 transform ${uiIn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"} flex justify-center lg:justify-end shrink-0`}>
          <img 
            src="/Project/one.png" 
            alt="Project Collaboration workflow" 
            className="w-[608px] h-auto object-contain rounded-xl shadow-[0px_4px_71.80000305175781px_0px_rgba(243,242,253,0.26)]" 
          />
        </div>

      </div>
    </section>
  );
}
