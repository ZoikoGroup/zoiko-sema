"use client";

import React from "react";
import { useInView } from "@/components/Personal-to-team/useInView";

export function ProductShowcaseSection() {
  const { ref: headRef, inView: headIn } = useInView(0.2);
  const { ref: imgRef, inView: imgIn } = useInView(0.15);

  const features = [
    {
      title: "Async by default",
      desc: "Collect updates, blockers, and owners without another meeting."
    },
    {
      title: "Time-zone aware",
      desc: "Overlap windows and quiet hours shown respectfully \u2014 never tracking."
    },
    {
      title: "Reviewed AI",
      desc: "Coordination summaries are drafted by AI and confirmed by a person."
    }
  ];

  return (
    <section className="w-full bg-slate-900 py-24 lg:py-32 font-sans antialiased overflow-hidden">
      <div className="max-w-[1248px] mx-auto px-6 md:px-10 flex flex-col items-center">
        
        {/* Header */}
        <div ref={headRef} className={`flex flex-col items-center text-center gap-6 max-w-[700px] transition-all duration-700 transform ${headIn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <span className="text-violet-400 text-xs font-bold uppercase tracking-widest font-['Inter']">
            PRODUCT SHOWCASE
          </span>
          <h2 className="text-white text-4xl lg:text-[40px] font-bold font-['Inter'] leading-[1.15]">
            The remote coordination hub, in one<br className="hidden sm:block"/>view.
          </h2>
          <p className="text-slate-300 text-base font-normal font-['Inter'] leading-6">
            Async updates, time-zone overlap, AI coordination summaries, and handoffs &mdash; connected<br className="hidden md:block"/>in a single governed workspace.
          </p>
        </div>

        {/* Main UI Image */}
        <div 
          ref={imgRef}
          className={`w-full max-w-[1160px] h-auto lg:h-[480px] mt-16 bg-slate-100 rounded-[20px] shadow-[0px_50px_100px_-40px_rgba(0,0,0,0.65)] outline outline-1 outline-white/10 overflow-hidden relative flex items-center justify-center transition-all duration-1000 transform ${imgIn ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-12 scale-[0.98]"}`}
        >
          <img 
            src="/Remote/three.png" 
            alt="Remote Coordination Hub Dashboard" 
            className="w-full h-full object-cover"
            onError={(e) => {
              e.currentTarget.src = "https://placehold.co/1160x480";
            }}
          />
        </div>

        {/* 3 Feature Cards */}
        <div className={`w-full max-w-[1160px] mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 transition-all duration-1000 delay-300 transform ${imgIn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          {features.map((feature, i) => (
            <div 
              key={i} 
              className="w-full h-auto min-h-[96px] bg-white/5 rounded-2xl outline outline-1 outline-white/10 p-5 flex flex-col justify-center"
            >
              <h4 className="text-white text-sm font-bold font-['Inter'] mb-1.5">{feature.title}</h4>
              <p className="text-slate-300 text-xs font-normal font-['Inter'] leading-5">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
