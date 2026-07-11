"use client";

import React from "react";
import { useInView } from "@/components/Personal-to-team/useInView";

export function TestimonialStatsSection() {
  const { ref: containerRef, inView: containerIn } = useInView(0.2);

  return (
    <section className="w-full bg-slate-50 py-24 lg:py-32 font-sans antialiased overflow-hidden">
      <div className="max-w-[1248px] mx-auto px-6 md:px-10 flex flex-col items-center">
        
        <div ref={containerRef} className={`w-full max-w-[1140px] flex flex-col lg:flex-row items-start gap-8 lg:gap-10 transition-all duration-700 transform ${containerIn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}>
          
          {/* Left Testimonial Card */}
          <div className="flex-1 w-full bg-gradient-to-br from-violet-600 to-indigo-800 rounded-3xl p-10 relative flex flex-col justify-start min-h-[288px] shadow-[0px_20px_40px_-20px_rgba(108,79,224,0.4)]">
            <div>
              <span className="text-white opacity-50 text-6xl font-serif absolute top-6 left-6 leading-none">"</span>
              <p className="text-white text-xl sm:text-2xl font-semibold leading-relaxed relative z-10 mt-6 max-w-[500px]">
                Zoiko Sema gave every project one place for messages, tasks, and files. We stopped chasing status and started delivering.
              </p>
            </div>
            <div className="flex items-center gap-4 mt-8">
              <div className="size-12 rounded-full border-2 border-white/40 overflow-hidden bg-white/20 shrink-0">
                <img 
                  src="/Project/four.png" 
                  alt="Daniel Okafor" 
                  className="w-full h-full object-cover"
                  onError={(e) => { e.currentTarget.style.display = 'none'; }}
                />
              </div>
              <div className="flex flex-col">
                <span className="text-white text-sm font-bold">Daniel Okafor</span>
                <span className="text-violet-200 text-xs">Product Lead &middot; BrightPath</span>
              </div>
            </div>
          </div>

          {/* Right Stats Column */}
          <div className="w-full lg:w-[500px] flex flex-col gap-4 shrink-0">
            {[
              { stat: "52%", desc: "faster project kickoff with standardized templates." },
              { stat: "2.3×", desc: "increase in cross-functional milestone achievement." },
              { stat: "3×", desc: "faster stakeholder reporting using AI recaps." }
            ].map((item, i) => (
              <div key={i} className="w-full bg-white rounded-2xl p-6 border border-violet-100 shadow-sm flex items-center gap-6">
                <span className="text-violet-600 text-3xl sm:text-4xl font-extrabold w-20 shrink-0">{item.stat}</span>
                <p className="text-slate-500 text-sm leading-6">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
        
      </div>
    </section>
  );
}
