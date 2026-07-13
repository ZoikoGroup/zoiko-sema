"use client";

import React from "react";
import { useInView } from "@/components/Personal-to-team/useInView";

export function IntegrationsEcosystemSection() {
  const { ref: headRef, inView: headIn } = useInView(0.2);
  const { ref: imgRef, inView: imgIn } = useInView(0.15);

  return (
    <section className="w-full bg-slate-900 py-24 lg:py-32 font-sans antialiased overflow-hidden">
      <div className="max-w-[1248px] mx-auto px-6 md:px-10 flex flex-col items-center">
        
        {/* Header */}
        <div ref={headRef} className={`flex flex-col items-center text-center gap-6 max-w-[700px] transition-all duration-700 transform ${headIn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <span className="text-violet-600 text-xs font-bold uppercase tracking-widest font-['Inter']">
            INTEGRATIONS & ECOSYSTEM
          </span>
          <h2 className="text-white text-4xl lg:text-[40px] font-bold font-['Inter'] leading-[1.15]">
            Keep remote work continuous across<br className="hidden md:block"/>the tools you already use.
          </h2>
        </div>

        {/* Main Graphic */}
        <div 
          ref={imgRef}
          className={`w-full max-w-[1080px] h-auto lg:h-[494px] mt-16 bg-white rounded-[20px] shadow-[0px_30px_64px_-36px_rgba(20,22,60,0.18)] outline outline-1 outline-violet-100 overflow-hidden relative flex items-center justify-center transition-all duration-1000 transform ${imgIn ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-12 scale-[0.98]"}`}
        >
          <img 
            src="/Remote/one.png" 
            alt="Remote Work Integrations" 
            className="w-full h-full object-cover"
            onError={(e) => {
              e.currentTarget.src = "https://placehold.co/1080x494";
            }}
          />
        </div>

      </div>
    </section>
  );
}
