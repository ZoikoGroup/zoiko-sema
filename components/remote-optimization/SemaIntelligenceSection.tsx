"use client";

import React from "react";
import { useInView } from "@/components/Personal-to-team/useInView";

const features = [
  {
    text: "AI-curated \u2018Key Moments\u2019 video snippets",
    icon: "/Hybrid/icon-sparkle.svg",
  },
  {
    text: "One-click task creation from meeting decisions",
    icon: "/Hybrid/icon-check-white.svg",
  },
];

export function SemaIntelligenceSection() {
  const { ref, inView } = useInView(0.15);

  return (
    <section className="w-full bg-slate-900 relative z-10">
      <div
        ref={ref}
        className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-[192px] py-[72px] lg:py-[82px] flex flex-col lg:flex-row items-start gap-10 lg:gap-16 relative"
      >
        {/* Left Content */}
        <div
          className={`flex-1 max-w-[496px] pt-[3px] flex flex-col gap-6 transition-all duration-1000 transform ${inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
            }`}
        >
          <span className="text-indigo-300 text-sm font-semibold font-sans uppercase leading-5 tracking-wider">
            SEMA INTELLIGENCE
          </span>

          <div className="pt-px">
            <h2 className="text-white text-3xl font-semibold font-sans leading-10">
              Never miss a decision again
            </h2>
          </div>

          <p className="text-slate-500 text-lg font-normal font-['Inter'] leading-7">
            When you can&apos;t attend, Sema AI takes your seat.
            <br />
            Structured summaries, clear decisions, and assigned
            <br />
            owners are delivered to your workspace automatically.
          </p>

          <div className="pt-6 flex flex-col gap-4">
            {features.map((feature) => (
              <div key={feature.text} className="flex items-center gap-4">
                <div className="px-1 pt-1.5 pb-1 bg-white/10 rounded-full flex items-center justify-center shrink-0">
                  <img src={feature.icon} alt="" className="size-5" />
                </div>
                <span className="text-white text-base font-normal font-['Inter'] leading-6">
                  {feature.text}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Image - Slightly Rotated */}
        <div
          className={`flex-1 -mb-16 lg:-mb-[120px] transition-all duration-1000 delay-300 transform ${inView
              ? "opacity-100 translate-x-0 rotate-1"
              : "opacity-0 translate-x-16 rotate-0"
            }`}
        >
          <img
            src="/Hybrid/sema-intelligence.png"
            alt="Sema AI Meeting Intelligence"
            className="w-full max-w-[496px] h-auto rounded-xl border border-white/10 shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
}
