"use client";

import React, { useEffect, useState, useRef } from 'react';

function useScrollReveal() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.02 }
    );
    const currentRef = ref.current;
    if (currentRef) observer.observe(currentRef);
    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, []);

  return { ref, isVisible };
}

export default function JoinCommunityPage() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <main className="w-full min-h-screen bg-gradient-to-br from-indigo-950 via-slate-900 to-gray-950 dark:from-gray-950 dark:to-gray-900 text-white py-20 sm:py-28 px-4 sm:px-8 lg:px-12 relative overflow-hidden flex items-center justify-center">
      <section
        ref={ref}
        className={`max-w-3xl mx-auto space-y-8 text-center relative z-10 transition-all duration-1000 ease-out transform ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
        }`}
      >
        <div className="flex items-center justify-center gap-3 h-5">
          <div className="size-1.5 bg-indigo-400 rounded-full animate-pulse" />
          <span className="text-indigo-400 text-xs font-bold uppercase tracking-widest">
            JOIN IN
          </span>
        </div>

        <h1 className="text-white text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight">
          Find your answer, or become the one who gives it.
        </h1>

        <p className="text-white/70 text-sm sm:text-base font-normal leading-relaxed max-w-[600px] mx-auto">
          Browse public answers, join the community, or start free and bring your own questions.
        </p>

        <div className="flex flex-wrap gap-4 items-center justify-center pt-4">
          <button className="px-7 py-3.5 bg-blue-600 text-white text-sm font-semibold rounded-full shadow-lg shadow-blue-600/20 transition-all duration-300 hover:-translate-y-1 hover:bg-blue-700 hover:shadow-xl hover:shadow-blue-700/30 active:translate-y-0">
            Join the community
          </button>
          <button className="px-7 py-3.5 bg-transparent text-white text-sm font-semibold rounded-full border border-white/30 transition-all duration-300 hover:-translate-y-1 hover:bg-white/10 hover:border-white/50 active:translate-y-0">
            Start free
          </button>
        </div>

        <div className="pt-2">
          <button className="inline-flex items-center gap-2 text-indigo-400 hover:text-indigo-300 text-sm font-semibold transition-all group duration-200">
            <span>Get a demo</span>
            <span className="transform transition-transform group-hover:translate-x-1">→</span>
          </button>
        </div>
      </section>

      {/* Decorative Canvas Background Glow Overlay */}
      <div className="absolute inset-0 bg-radial-[at_50%_50%] from-indigo-600/10 to-transparent pointer-events-none" />
    </main>
  );
}