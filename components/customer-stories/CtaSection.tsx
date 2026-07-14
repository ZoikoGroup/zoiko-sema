"use client";
import React, { useEffect, useRef, useState } from "react";

// --- CUSTOM SCROLL-REVEAL REUSABLE HOOK ---
function useScrollReveal() {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const elementRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsIntersecting(true);
        }
      },
      {
        threshold: 0.02,
        rootMargin: "0px 0px -40px 0px",
      },
    );

    if (elementRef.current) observer.observe(elementRef.current);
    return () => {
      if (elementRef.current) observer.unobserve(elementRef.current);
    };
  }, []);

  return [elementRef, isIntersecting] as const;
}

export default function CtaSection() {
  const [ctaRef, ctaVisible] = useScrollReveal();

  return (
    <div className="w-full bg-slate-50 dark:bg-gray-950 transition-colors duration-300">
      <section
        ref={ctaRef}
        className="w-full py-20 bg-gradient-to-r from-violet-600 to-indigo-800 dark:from-violet-950 dark:to-indigo-950 text-white overflow-hidden relative"
      >
        <div className="absolute inset-0 bg-grid-white/[0.03] bg-[size:20px_20px]" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col items-center text-center">
          <h2
            className={`text-2xl sm:text-4xl font-extrabold tracking-tight font-sans max-w-2xl leading-tight transition-all duration-1000 transform ${ctaVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"}`}
          >
            Ready to write your success story?
          </h2>

          <p
            className={`mt-4 text-sm sm:text-base max-w-xl text-purple-100 dark:text-purple-200/80 max-w-3xl font-sans leading-relaxed transition-all duration-1000 delay-200 transform ${ctaVisible ? "translate-y-0 opacity-100" : "translate-y-14 opacity-0"}`}
          >
            Join 12,000+ organizations that have upgraded their communication
            architecture.
          </p>

          {/* Fully Responsive CTA Actions Block */}
          <div
            className={`mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 w-full sm:w-auto transition-all duration-1000 delay-400 transform ${ctaVisible ? "translate-y-0 opacity-100" : "translate-y-16 opacity-0"}`}
          >
            <button className="w-full sm:w-auto px-16 py-6 rounded-xl bg-white hover:bg-slate-50 text-[#0058BE] font-sans text-sm font-bold shadow-lg hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200">
              Get a Demo
            </button>

            <button className="w-full sm:w-auto px-16 py-6 rounded-xl border border-[#FFFFFF66] text-white font-sans text-sm font-bold hover:border-white/50 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200">
              Read AI Use Policy
            </button>

          </div>
        </div>
      </section>
    </div>
  );
}
