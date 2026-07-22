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

export default function ExpertSessionsPage() {
  const { ref, isVisible } = useScrollReveal();

  const sessions = [
    { title: "Admin clinics", desc: "Roles, retention, AI policy, and integrations, live with the team." },
    { title: "Developer Q&A", desc: "Direct access to implementation guidance." },
    { title: "Community showcases", desc: "Champions share real workflows — education first, never a hidden sales call." }
  ];

  return (
    <main className="w-full min-h-screen bg-violet-50/50 dark:bg-gray-950/40 text-slate-900 dark:text-white py-16 sm:py-24 px-4 sm:px-8 lg:px-12">
      <section
        ref={ref}
        className={`max-w-7xl mx-auto space-y-12 transition-all duration-1000 ease-out transform ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
        }`}
      >
        <div className="text-center space-y-3">
          <div className="flex items-center justify-center gap-3 h-5">
            <div className="size-1.5 bg-blue-600 dark:bg-blue-400 rounded-full animate-pulse" />
            <span className="text-blue-600 dark:text-blue-400 text-xs font-bold uppercase tracking-widest">
              EXPERT SESSIONS AND OFFICE HOURS
            </span>
          </div>
          <h1 className="text-slate-900 dark:text-slate-100 text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight max-w-[700px] mx-auto leading-snug sm:leading-10">
            Live time with the people who know the product best.
          </h1>
        </div>

        <div className="w-full aspect-[1136/384] rounded-[20px] overflow-hidden border border-slate-200 dark:border-slate-800 shadow-md">
          <img 
            className="w-full h-full object-cover" 
            src="/community/image 305.png" 
            alt="Corporate streaming office hours scheduler session console layout environment" 
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {sessions.map((session, idx) => (
            <div 
              key={idx}
              className="group p-6 bg-white dark:bg-gray-950 rounded-[20px] border border-slate-200 dark:border-slate-800 shadow-[0px_8px_24px_rgba(18,19,43,0.03)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:border-slate-300 dark:hover:border-slate-700"
            >
              <h2 className="text-slate-900 dark:text-slate-100 text-sm sm:text-base font-bold mb-3 transition-colors group-hover:text-blue-600 dark:group-hover:text-blue-400">
                {session.title}
              </h2>
              <p className="text-slate-600 dark:text-gray-400 text-xs sm:text-sm font-normal leading-relaxed">
                {session.desc}
              </p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}