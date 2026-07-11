"use client";

import React from "react";
import { useInView } from "@/components/Personal-to-team/useInView";

export function IntegrationsEcosystemSection() {
  const { ref: headRef, inView: headIn } = useInView(0.2);
  const { ref: uiRef, inView: uiIn } = useInView(0.15);

  return (
    <section className="w-full bg-slate-50 pt-24 lg:pt-32 pb-24 lg:pb-32 font-sans antialiased overflow-hidden relative">
      <div className="max-w-[1248px] mx-auto px-6 md:px-10 flex flex-col items-center">

        {/* Header */}
        <div ref={headRef} className={`flex flex-col items-center text-center gap-4 transition-all duration-700 transform ${headIn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <span className="text-violet-600 text-[11px] font-bold uppercase tracking-widest font-['Inter']">
            INTEGRATIONS & ECOSYSTEM
          </span>
          <h2 className="text-slate-900 text-4xl font-bold font-['Inter'] w-[632.24px] max-w-full leading-[1.15]">
            Keep work continuous across the tools<br />you already use.
          </h2>
        </div>

        {/* Image Mockup */}
        <div ref={uiRef} className={`w-full max-w-[1100px] mt-16 flex justify-center transition-all duration-1000 transform ${uiIn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-24"}`}>
          <img src="/Project/two.png" alt="Integrations and Ecosystem" className="w-full h-auto object-contain rounded-3xl" />
        </div>

      </div>
    </section>
  );
}
