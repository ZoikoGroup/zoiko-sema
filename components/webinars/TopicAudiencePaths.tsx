"use client";

import React, { useEffect, useState, useRef } from 'react';

// --- Intersection Observer Hook for Entry Reveals ---
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
      { threshold: 0.05 }
    );
    const currentRef = ref.current;
    if (currentRef) observer.observe(currentRef);
    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, []);

  return { ref, isVisible };
}

export default function TopicAudiencePaths() {
  const { ref, isVisible } = useScrollReveal();

  const paths = [
    {
      badge: "New evaluator",
      description: "Outcome-led product demonstrations and governance Q&A."
    },
    {
      badge: "Workspace admin / IT",
      description: "Rollout clinics, identity, integrations, and support paths."
    },
    {
      badge: "Security / compliance",
      description: "Responsible AI, retention, access, and evidence sessions."
    },
    {
      badge: "Developer / integrator",
      description: "API, webhook, and implementation-pattern deep dives."
    }
  ];

  return (
    <section
      ref={ref}
      className={`w-full py-16 sm:py-24 px-4 sm:px-8 lg:px-28 bg-white dark:bg-gray-900 text-slate-900 dark:text-white transition-all duration-1000 ease-out transform ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-0 sm:px-8 space-y-12">
        
        {/* Section Header Text Stack */}
        <div className="space-y-3 max-w-[700px]">
          <div className="flex items-center gap-3 h-5">
            <div className="size-1.5 bg-blue-600 dark:bg-blue-400 rounded-full animate-pulse" />
            <span className="text-blue-600 dark:text-blue-400 text-xs font-bold   uppercase tracking-widest">
              TOPIC AND AUDIENCE PATHS
            </span>
          </div>
          <h2 className="text-slate-900 dark:text-slate-100 text-2xl sm:text-3xl lg:text-4xl font-extrabold  leading-snug sm:leading-10 tracking-tight">
            Find the right session without learning our internal taxonomy.
          </h2>
        </div>

        {/* Dynamic Graphic Hero Container Display Frame */}
        <div className="w-full aspect-[1136/379] rounded-[20px] overflow-hidden border border-slate-200 dark:border-slate-800 shadow-sm bg-slate-50 dark:bg-gray-950 group">
          <img
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.01]"
            src="/webinars/Topic and audienc (1).png"
            alt="Interactive taxonomy topic routing preview interface visual layout maps"
          />
        </div>

        {/* Audience Target Grid Track */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {paths.map((item, index) => (
            <div
              key={index}
              className="group bg-white dark:bg-gray-950 p-7 rounded-[20px] border border-slate-200 dark:border-slate-800 shadow-[0px_8px_24px_rgba(18,19,43,0.03)] dark:shadow-none flex flex-col justify-start items-start gap-4 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:border-slate-300 dark:hover:border-slate-700"
            >
              {/* Audience Path Ident Label */}
              <span className="text-indigo-600 dark:text-indigo-400 text-xs font-bold   uppercase tracking-wide">
                {item.badge}
              </span>
              
              {/* Path Mission Focus Description */}
              <p className="text-slate-700 dark:text-gray-300 text-base font-normal   leading-relaxed group-hover:text-slate-900 dark:group-hover:text-white transition-colors duration-200">
                {item.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}