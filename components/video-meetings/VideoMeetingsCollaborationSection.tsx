"use client";

import React, { useEffect, useRef, useState } from "react";

function useInView(threshold = 0.15) {
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

export default function VideoMeetingsCollaborationSection  () {
  const { ref: sectionRef, inView: sectionIn } = useInView(0.2);

  return (
    <>
      <style>{`
        @keyframes neFadeUp {
          from { opacity: 0; transform: translateY(32px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .ne-hidden  { opacity: 0; transform: translateY(32px); }
        .ne-visible { animation: neFadeUp .65s cubic-bezier(.22,1,.36,1) forwards; }

        .ne-video-card {
          transition: transform .4s cubic-bezier(.25, 1, .5, 1), box-shadow .4s ease;
        }
        .ne-video-card:hover {
          transform: translateY(-4px) scale(1.005);
          box-shadow: 0 25px 50px -12px rgba(18,19,43,0.25);
        }
        .ne-video-card:hover .ne-play-btn {
          transform: translate(-50%, -50%) scale(1.08);
          background-color: rgba(255, 255, 255, 1);
        }

        @media (prefers-reduced-motion: reduce) {
          .ne-hidden, .ne-visible { opacity: 1 !important; transform: none !important; animation: none !important; }
          .ne-video-card:hover { transform: none !important; }
          .ne-video-card:hover .ne-play-btn { transform: translate(-50%, -50%) none !important; }
        }
      `}</style>

      <section className="w-full bg-white py-16 sm:py-20 md:py-24 overflow-hidden">
        <div 
          ref={sectionRef}
          className={`mx-auto w-full max-w-6xl px-5 sm:px-8 md:px-10 lg:px-16 ne-hidden ${sectionIn ? "ne-visible" : ""}`}
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-6 flex flex-col items-start text-left order-2 lg:order-1">
              <span className="block text-blue-600 text-xs font-bold tracking-widest uppercase mb-3">
                NEW ENHANCEMENTS
              </span>
              <h2 className="text-[clamp(24px,4.5vw,32px)] font-extrabold leading-[1.2] text-slate-900 tracking-tight mb-4 max-w-[520px]">
                A layout that keeps every speaker in view.
              </h2>
              <p className="text-[15px] sm:text-base leading-relaxed text-slate-600 font-normal mb-8 max-w-[480px]">
                Active-speaker highlighting, adaptive layouts, and low-bandwidth
                resilience keep meetings clear before, during, and after the call.
              </p>
              <button className="px-7 py-3 bg-slate-900 text-white rounded-full text-base font-semibold hover:bg-slate-800 transition-colors shadow-sm duration-200">
                See how
              </button>
            </div>

            {/* Right Video Placeholder Column */}
            <div className="lg:col-span-6 order-1 lg:order-2">
              <div className="ne-video-card relative w-full aspect-[530/288] bg-slate-100 rounded-[20px] shadow-[0px_20px_45px_-15px_rgba(18,19,43,0.18)] overflow-hidden cursor-pointer group">
                {/* Placeholder Thumbnail */}
                <img 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]" 
                  src="https://placehold.co/530x300" 
                  alt="Video presentation layout preview" 
                />
                
                {/* Dimming Video Overlay */}
                <div className="absolute inset-0 bg-slate-900/30 transition-colors duration-300 group-hover:bg-slate-900/25" />
                
                {/* Centered Play Button Action Frame */}
                <div className="ne-play-btn absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex size-16 items-center justify-center bg-white/90 rounded-full transition-all duration-300 shadow-md">
                  <span className="text-slate-900 text-xl pl-1 select-none">▶</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}