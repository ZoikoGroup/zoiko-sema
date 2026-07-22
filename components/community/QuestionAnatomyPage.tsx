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

export default function QuestionAnatomyPage() {
  const { ref, isVisible } = useScrollReveal();

  const details = [
    { title: "Environment", desc: "Product, plan, platform, version, and role — so answers actually fit." },
    { title: "Accepted solution", desc: "One primary answer, with a documented rule for moderator maintenance." },
    { title: "History", desc: "Material edits, merges, and supersession stay visible — never rewritten quietly." }
  ];

  return (
    <main className="w-full min-h-screen bg-gradient-to-br from-indigo-950 via-slate-900 to-gray-950 dark:from-gray-950 dark:to-gray-900 text-white py-16 sm:py-24 px-4 sm:px-8 lg:px-12">
      <section
        ref={ref}
        className={`max-w-7xl mx-auto space-y-12 transition-all duration-1000 ease-out transform ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
        }`}
      >
        <div className="text-center space-y-3">
          <div className="flex items-center justify-center gap-3 h-5">
            <div className="size-1.5 bg-indigo-400 rounded-full animate-pulse" />
            <span className="text-indigo-400 text-xs font-bold uppercase tracking-widest">
              QUESTION AND THREAD ANATOMY
            </span>
          </div>
          <h1 className="text-white text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight max-w-[700px] mx-auto leading-snug sm:leading-10">
            Structured context in, a maintained answer out.
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Graphic Side */}
          <div className="lg:col-span-6 w-full aspect-[599/399] rounded-[20px] overflow-hidden shadow-[0px_30px_80px_rgba(0,0,0,0.45)] border border-white/10">
            <img 
              className="w-full h-full object-cover" 
              src="/community/image 304.png" 
              alt="Structural breakdown diagram of thread parameters showing user roles and timeline states" 
            />
          </div>

          {/* Cards Stack Side */}
          <div className="lg:col-span-6 space-y-4">
            {details.map((item, idx) => (
              <div 
                key={idx}
                className="group p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:bg-white/10 hover:border-white/20 hover:shadow-xl"
              >
                <h2 className="text-white text-sm sm:text-base font-bold mb-2">
                  {item.title}
                </h2>
                <p className="text-white/70 text-xs sm:text-sm font-normal leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}