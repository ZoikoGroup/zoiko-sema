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

export default function ProductShowcaseSection() {
  const { ref: sectionRef, inView: sectionIn } = useInView(0.12);

  return (
    <>
      <style>{`
        @keyframes showFadeUp {
          from { opacity: 0; transform: translateY(32px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .show-hidden  { opacity: 0; transform: translateY(32px); }
        .show-visible { animation: showFadeUp 0.8s cubic-bezier(0.22, 1, 0.36, 1) forwards; }

        /* Smooth floating image accent card effect */
        .show-card {
          transition: transform 0.4s cubic-bezier(0.25, 1, 0.5, 1), box-shadow 0.4s ease;
        }
        .show-card:hover {
          transform: translateY(-4px);
          box-shadow: 0px 30px 60px -10px rgba(18, 19, 43, 0.22);
        }
      `}</style>

      <section className="w-full bg-violet-50 py-16 sm:py-20 md:py-24 overflow-hidden">
        <div 
          ref={sectionRef}
          className={`mx-auto w-full max-w-5xl px-5 sm:px-8 md:px-10 text-center show-hidden ${
            sectionIn ? "show-visible" : ""
          }`}
        >
          
          {/* Tag Category Label */}
          <span className="block text-blue-600 text-xs font-bold tracking-widest uppercase mb-3.5">
            PRODUCT SHOWCASE
          </span>

          {/* Heading Pitch */}
          <h2 className="text-[clamp(24px,4.5vw,36px)] font-extrabold text-slate-900 leading-[1.25] tracking-tight max-w-2xl mx-auto mb-12 sm:mb-16">
            Fast messaging for people. Structured communication for work.
          </h2>

          {/* Mockup Frame Screen Component Wrapper */}
          <div className="w-full max-w-4xl mx-auto  overflow-hidden p-1 sm:p-2">
            <div className="relative aspect-[16/10] sm:aspect-[920/500] w-full rounded-[14px] overflow-hidden ">
              <img 
                className="absolute inset-0 w-full h-full object-cover object-top transform scale-100 hover:scale-[1.01] transition-transform duration-700 ease-out" 
                src="/messaging/image 15.png" 
                alt="Zoiko Sema workspace screen presentation preview" 
              />
            </div>
          </div>

        </div>
      </section>
    </>
  );
}