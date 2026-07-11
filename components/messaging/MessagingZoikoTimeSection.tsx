"use client";

import React, { useEffect, useRef, useState } from "react";

function useInView(threshold = 0.1) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          obs.disconnect();
        }
      },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);

  return { ref, inView };
}

export default function ZoikoTimeIntegrationSection() {
  const { ref: sectionRef, inView: sectionIn } = useInView(0.12);

  return (
    <>
      <style>{`
        @keyframes ztFadeUp {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .zt-hidden  { opacity: 0; transform: translateY(28px); }
        .zt-visible { animation: ztFadeUp 0.8s cubic-bezier(0.22, 1, 0.36, 1) forwards; }
      `}</style>

      {/* Dark Slate background mimicking original Figma block structure colors */}
      <section className="w-full bg-[#4B4880] py-12 sm:py-12 md:py-14 overflow-hidden text-white">
        {/* Increased max-w-6xl to max-w-7xl to unlock a broader view container */}
        <div
          ref={sectionRef}
          className={`mx-auto w-full max-w-6xl px-6 sm:px-8 md:px-10 zt-hidden ${
            sectionIn ? "zt-visible" : ""
          }`}
        >
          
          {/* Header Block Info */}
          <div className="text-center max-w-3xl mx-auto mb-14 lg:mb-16">
            <span className="block text-indigo-300 text-xs font-bold tracking-widest uppercase mb-3">
              ZOIKOTIME INTEGRATION
            </span>
            <h2 className="text-[clamp(24px,4.5vw,34px)] font-extrabold text-white leading-[1.25] tracking-tight mb-4">
              Connect messaging to workforce context when it matters.
            </h2>
            <p className="text-slate-200/80 text-sm sm:text-base font-normal leading-relaxed max-w-2xl mx-auto">
              Business plans can be ZoikoTime ready while Enterprise supports full integration — 
              mapping spaces, teams, or departments to ZoikoTime organizational structures.
            </p>
          </div>

          {/* Interactive Layout Content Grid */}
          {/* Main adjustment: Shifted to a 12-column grid configuration favoring center-mass scaling */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-6 items-center w-full">
            
            {/* Left Side Feature Badges Stack (Shrunk column span from 4 to 3) */}
            <div className="lg:col-span-3 flex flex-col gap-6 order-2 lg:order-1">
              
              {/* Card 1: Workspace mapping */}
              <div className="w-full p-5 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-[4px] lg:-rotate-2 hover:rotate-0 transition-transform duration-300 flex gap-4 items-start">
                <div className="w-11 h-11 shrink-0 bg-white/10 rounded-xl flex items-center justify-center select-none text-lg">
                  🗺️
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white mb-1">Workspace mapping</h3>
                  <p className="text-white/70 text-xs font-normal leading-relaxed">
                    Map spaces, teams, or departments to ZoikoTime organizational structures.
                  </p>
                </div>
              </div>

              {/* Card 2: Sync status */}
              <div className="w-full p-5 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-[4px] lg:rotate-2 hover:rotate-0 transition-transform duration-300 flex gap-4 items-start">
                <div className="w-11 h-11 shrink-0 bg-white/10 rounded-xl flex items-center justify-center select-none text-lg">
                  🔄
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white mb-1">Sync status</h3>
                  <p className="text-white/70 text-xs font-normal leading-relaxed">
                    Review sync status and policy alignment for connected workspaces.
                  </p>
                </div>
              </div>

            </div>

            {/* Center Graphic Showcase Display Frame (Expanded column span from 4 to 6) */}
            <div className="lg:col-span-6 flex justify-center items-center order-1 lg:order-2 w-full">
              {/* Removed restrictive max-w-[400px] and bumped to max-w-[580px] */}
              <div className="relative w-full max-w-[580px] lg:max-w-none aspect-[4/3] rounded-2xl p-2 overflow-hidden">
                <img
                  className="w-full h-full object-contain object-center rounded-xl transform scale-105 transition-transform duration-300"
                  src="/messaging/mobile message and email-01 1.png"
                  alt="ZoikoTime organizational ecosystem matrix mapping context preview"
                />
              </div>
            </div>

            {/* Right Side Feature Badges Stack (Shrunk column span from 4 to 3) */}
            <div className="lg:col-span-3 flex flex-col gap-6 order-3">
              
              {/* Card 3: Privacy mode */}
              <div className="w-full p-5 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-[4px] lg:rotate-3 hover:rotate-0 transition-transform duration-300 flex gap-4 items-start">
                <div className="w-11 h-11 shrink-0 bg-white/10 rounded-xl flex items-center justify-center select-none text-lg">
                  🕵️
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white mb-1">Privacy mode</h3>
                  <p className="text-white/70 text-xs font-normal leading-relaxed">
                    Apply jurisdiction-aware privacy settings to workforce-context visibility.
                  </p>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>
    </>
  );
}