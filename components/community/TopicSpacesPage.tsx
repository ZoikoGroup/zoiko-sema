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

export default function TopicSpacesPage() {
  const { ref, isVisible } = useScrollReveal();

  const spaces = [
    { title: "Get started", desc: "Onboarding, quick-start guides, and solved first-week questions." },
    { title: "Admin & security", desc: "Roles, retention, Confidential Mode, and Trust Center links." },
    { title: "Developer", desc: "API, webhooks, and implementation patterns." },
    { title: "Sema + ZoikoTime", desc: "Boundary questions and governed integration patterns." }
  ];

  return (
    <main className="w-full min-h-screen bg-white dark:bg-gray-900 text-slate-900 dark:text-white py-16 sm:py-24 px-4 sm:px-8 lg:px-12">
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
              TOPIC SPACES
            </span>
          </div>
          <h1 className="text-slate-900 dark:text-slate-100 text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight">
            Organized around what you're trying to do.
          </h1>
        </div>

        <div className="w-full aspect-[1136/379] rounded-[20px] overflow-hidden border border-slate-200 dark:border-slate-800 shadow-sm bg-slate-50 dark:bg-gray-950">
          <img 
            className="w-full h-full object-cover" 
            src="/community/Topic spaces for onboarding, meetings, AI, admin, integrations, and security..png" 
            alt="Topic spaces structural category cluster organization graph mapping architecture overview" 
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {spaces.map((space, idx) => (
            <div 
              key={idx}
              className="group p-6 sm:p-7 min-h-[160px] flex flex-col justify-start bg-white dark:bg-gray-950 rounded-[20px] border border-slate-200 dark:border-slate-800 shadow-[0px_8px_24px_rgba(18,19,43,0.04)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:border-slate-300 dark:hover:border-slate-700"
            >
              <h2 className="text-indigo-600 dark:text-indigo-400 text-xs font-bold uppercase tracking-wide mb-3">
                {space.title}
              </h2>
              <p className="text-slate-900 dark:text-gray-300 text-sm sm:text-base font-normal leading-relaxed">
                {space.desc}
              </p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}