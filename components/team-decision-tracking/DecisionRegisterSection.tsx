"use client";

import React from "react";
import { useInView } from "@/components/Personal-to-team/useInView";

export function DecisionRegisterSection() {
  const { ref: headRef, inView: headIn } = useInView(0.2);
  const { ref: imgRef, inView: imgIn } = useInView(0.1);

  return (
    <section className="w-full bg-[#0F1123] py-24 lg:py-32 font-sans antialiased overflow-hidden">
      <div className="max-w-[1248px] mx-auto px-6 md:px-10 flex flex-col items-center">
        
        <div ref={headRef} className={`flex flex-col items-center text-center transition-all duration-700 transform ${headIn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <span className="text-violet-400 text-xs font-bold uppercase tracking-wide font-['Inter'] mb-6">
            PRODUCT &middot; DECISION REGISTER
          </span>
          <h2 className="text-white text-4xl font-bold font-['Inter'] max-w-[688px] leading-tight mb-4">
            A real operational surface for decisions.
          </h2>
          <p className="text-slate-300 text-base font-normal font-['Inter'] leading-6 max-w-[686px]">
            Not just AI summaries &mdash; a searchable register where every decision has an owner, source,<br className="hidden md:block"/>status, and evidence.
          </p>
        </div>

        <div ref={imgRef} className={`w-full max-w-[1180px] mt-20 transition-all duration-1000 delay-200 transform ${imgIn ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-16 scale-[0.98]"}`}>
          <div className="w-full h-auto bg-slate-900 rounded-[20px] shadow-[0px_50px_100px_-40px_rgba(0,0,0,0.65)] outline outline-1 outline-white/10 overflow-hidden relative">
            <img 
              src="/Team/two.png" 
              alt="Decision Register UI Dashboard" 
              className="w-full h-auto object-cover"
              onError={(e) => {
                e.currentTarget.src = "https://placehold.co/1180x515";
              }}
            />
          </div>
        </div>

      </div>
    </section>
  );
}
