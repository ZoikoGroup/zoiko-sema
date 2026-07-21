"use client";
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
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
            Need responsible AI review materials for your organization?
          </h2>

          <p
            className={`mt-4 text-sm sm:text-base text-purple-100 dark:text-purple-200/80 max-w-3xl font-sans leading-relaxed transition-all duration-1000 delay-200 transform ${ctaVisible ? "translate-y-0 opacity-100" : "translate-y-14 opacity-0"}`}
          >
            Visit the Trust Center, read the AI Use Policy, review Privacy &
            Data, request a DPA, or contact the right team for enterprise AI
            governance questions.
          </p>

          {/* Fully Responsive CTA Actions Block */}
          <div
            className={`mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 w-full sm:w-auto transition-all duration-1000 delay-400 transform ${ctaVisible ? "translate-y-0 opacity-100" : "translate-y-16 opacity-0"}`}
          >
            <Link href="/trust-center" className="inline-flex justify-center items-center w-full sm:w-auto px-6 py-3 bg-white hover:bg-slate-50 text-indigo-800 font-sans text-sm font-bold rounded-full shadow-lg hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200">
              Visit Trust Center
            </Link>

            <Link href="/ai-use-policy" className="inline-flex justify-center items-center w-full sm:w-auto px-6 py-3 bg-white/10 hover:bg-white/20 text-white font-sans text-sm font-bold rounded-full border border-white/30 hover:border-white/50 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200">
              Read AI Use Policy
            </Link>

            <Link href="/contact-sales" className="inline-flex justify-center items-center w-full sm:w-auto px-4 py-2 text-white hover:text-purple-200 font-sans text-sm font-bold border-b border-white/40 hover:border-white transition-all duration-200">
              Contact sales
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
