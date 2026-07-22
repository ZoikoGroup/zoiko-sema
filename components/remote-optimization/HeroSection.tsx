"use client";

import React from "react";
import { useInView } from "@/components/Personal-to-team/useInView";

export function HeroSection() {
  const { ref, inView } = useInView(0.1);

  return (
    <section className="w-full bg-slate-900 relative z-10 overflow-hidden -mt-24 pt-24">
      <div
        ref={ref}
        className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-[120px] pt-[72px] pb-10 flex flex-col lg:flex-row items-start gap-12 lg:gap-0 relative"
      >
        {/* Left Content */}
        <div
          className={`flex flex-col items-start max-w-[457px] gap-3.5 transition-all duration-1000 transform ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
            }`}
        >
          {/* Tag */}
          <div className="pb-[0.59px]">
            <span className="text-sky-400 text-xs font-semibold font-['Plus_Jakarta_Sans'] uppercase leading-5 tracking-widest">
              Remote Optimization
            </span>
          </div>

          {/* Headline */}
          <div className="pt-px">
            <h1 className="text-white text-5xl font-bold font-sans leading-[60px]">
              Coordinate hybrid and remote teams without losing momentum.
            </h1>
          </div>

          {/* Description */}
          <div className="w-full max-w-[520px] pt-1">
            <p className="text-white text-lg font-normal font-['Inter'] leading-7">
              One governed workspace where async updates, meetings, AI
              summaries, handoffs, and follow-ups remain connected across every
              time zone.
            </p>
          </div>

          {/* CTAs */}
          <div className="self-stretch pt-3 inline-flex justify-start items-start gap-3 flex-wrap">
            <button className="px-6 pt-3 pb-3.5 bg-blue-600 rounded-full border border-transparent text-white text-sm font-bold font-['Plus_Jakarta_Sans'] leading-5 hover:bg-blue-700 hover:scale-105 transition-all shadow-[0px_10px_24px_-8px_rgba(37,99,235,0.45)]">
              Start free
            </button>
            <button className="px-6 pt-3 pb-3.5 bg-white rounded-full border border-transparent text-slate-900 text-sm font-bold font-['Plus_Jakarta_Sans'] leading-5 hover:bg-gray-100 hover:scale-105 transition-all">
              Get a demo
            </button>
          </div>
        </div>

        {/* Right Visual */}
        <div
          className={`w-full lg:w-[742px] lg:absolute lg:left-[578px] lg:top-[90px] transition-all duration-1000 delay-300 transform ${inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-16"
            }`}
        >
          {/* Glow Effect */}
          <div className="w-[788px] h-[462px] absolute -left-[23px] -top-[23px] opacity-50 bg-gradient-to-br from-sky-700/10 to-sky-700/0 blur-2xl pointer-events-none"></div>

          <img
            src="/Hybrid/hero-dashboard.jpg"
            alt="Remote Optimization Dashboard"
            className="w-[742px] h-auto relative rounded-2xl shadow-[0px_36px_72px_-17px_rgba(0,0,0,0.25)] border-[1.44px] border-neutral-300/30"
          />
        </div>
      </div>
    </section>
  );
}
