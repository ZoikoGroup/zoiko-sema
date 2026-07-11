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

export default function TestimonialSection() {
  const { ref: sectionRef, inView: sectionIn } = useInView(0.2);

  return (
    <>
      <style>{`
        @keyframes tmFadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .tm-hidden  { opacity: 0; transform: translateY(24px); }
        .tm-visible { animation: tmFadeUp .7s cubic-bezier(.22,1,.36,1) forwards; }
      `}</style>

      <section className="w-full bg-white py-16 sm:py-20 md:py-24 overflow-hidden">
        <div
          ref={sectionRef}
          className={`mx-auto w-full max-w-4xl px-5 sm:px-8 md:px-10 text-center tm-hidden ${
            sectionIn ? "tm-visible" : ""
          }`}
        >
          {/* Quote Icon */}
          <div className="text-indigo-400 text-5xl sm:text-6xl font-normal font-sans opacity-50 leading-none mb-6 select-none">
            “
          </div>

          {/* Testimonial Quote Statement */}
          <blockquote className="text-xl sm:text-2xl md:text-[26px] font-bold text-slate-900 leading-normal sm:leading-relaxed md:leading-snug max-w-3xl mx-auto mb-8 sm:mb-10 tracking-tight">
            We stopped losing decisions between the call and the inbox. Every
            meeting now ends with an owner and a deadline attached.
          </blockquote>

          {/* User Bio Information Block */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            {/* Avatar Image */}
            <img
              className="size-11 rounded-full object-cover shadow-sm border border-slate-100 bg-slate-50"
              src="/video-meeting/Veer Grover.png"
              alt="Veer Grover avatar profile picture"
            />

            {/* Title / Name details */}
            <div className="text-center sm:text-left leading-tight">
              <span className="block text-slate-900 text-sm font-bold tracking-tight">
                Veer Grover
              </span>
              <span className="block text-gray-400 text-xs font-normal mt-0.5">
                VP of Operations &middot; Northwind Labs
              </span>
            </div>
          </div>
          
        </div>
      </section>
    </>
  );
}