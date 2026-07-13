"use client";

import React from "react";
import { useInView } from "@/components/Personal-to-team/useInView";

export function TeamDecisionTrackingHeroSection() {
  const { ref: headRef, inView: headIn } = useInView(0.2);
  const { ref: imgRef, inView: imgIn } = useInView(0.2);

  return (
    <section className="w-full bg-[#131538] pt-8 lg:pt-12 pb-32 font-sans antialiased overflow-hidden relative">
      {/* Background Gradient overlay similar to image */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1C1F4A]/80 to-[#131538] z-0"></div>

      <div className="max-w-[1248px] mx-auto px-6 md:px-10 flex flex-col items-center relative z-10 text-center">
        
        <div ref={headRef} className={`flex flex-col items-center transition-all duration-1000 transform ${headIn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}>
          <div className="bg-violet-50 rounded-full px-4 py-1.5 mb-8">
            <span className="text-violet-600 text-xs font-bold tracking-widest uppercase font-['Inter']">
              USE CASE &middot; TEAM DECISION TRACKING
            </span>
          </div>
          
          <h1 className="text-white text-4xl sm:text-5xl lg:text-[56px] font-bold leading-[1.1] mb-6 font-['Inter'] max-w-[800px] tracking-tight">
            Make every team decision<br className="hidden md:block" />clear, owned, and easy to find.
          </h1>
          
          <p className="text-slate-300 text-base lg:text-lg leading-7 mb-10 max-w-[700px] font-['Inter']">
            Capture decisions from meetings, chats, shared spaces, and files &mdash;<br className="hidden md:block"/>then keep owners, evidence, due dates, approvals, and follow-ups<br className="hidden md:block"/>connected in one governed workspace.
          </p>
          
          <div className="flex flex-wrap items-center justify-center gap-4 mb-16">
            <button className="px-8 py-3.5 bg-blue-600 text-white rounded-full font-bold text-base hover:bg-blue-700 hover:scale-105 transition-all shadow-sm">
              Get a demo
            </button>
            <button className="px-8 py-3.5 bg-white text-slate-900 rounded-full font-bold text-base hover:bg-slate-50 hover:scale-105 transition-all shadow-sm">
              Start free
            </button>
          </div>
        </div>

        <div ref={imgRef} className={`w-full max-w-[1080px] mt-4 transition-all duration-1000 delay-300 transform ${imgIn ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-16 scale-[0.98]"}`}>
          <div className="rounded-[24px] overflow-hidden shadow-[0px_40px_80px_-20px_rgba(0,0,0,0.5)] border border-white/10 bg-slate-900 relative">
            <img 
              src="/Team/one.png" 
              alt="Team Decision Tracking Dashboard" 
              className="w-full h-auto object-cover"
              onError={(e) => {
                e.currentTarget.src = "https://placehold.co/1047x510";
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
