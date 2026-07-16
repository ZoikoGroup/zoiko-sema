"use client";

import React, { useEffect, useState, useRef } from 'react';

interface ModelCategory {
  title: string;
  items: string[];
}

const MODEL_DATA: ModelCategory[] = [
  {
    title: "Identity",
    items: ["Task ID", "Title", "Type", "Created by", "Timestamp"]
  },
  {
    title: "Ownership",
    items: ["Assignee", "Creator", "Watchers", "Reassignment history"]
  },
  {
    title: "Schedule",
    items: ["Due date/time", "Start date", "Time zone", "Reminders", "Recurrence"]
  },
  {
    title: "Status",
    items: ["Not started", "In progress", "Blocked", "Waiting", "Review", "Done", "Canceled"]
  },
  {
    title: "Source",
    items: ["Message / thread", "Meeting", "Decision", "Document / file", "AI suggestion"]
  },
  {
    title: "Governance",
    items: ["Visibility", "Guest scope", "Retention", "Audit state", "AI eligibility"]
  }
];

export default function TaskObjectModel() {
  const [revealed, setRevealed] = useState(false);
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setRevealed(true);
    }, { threshold: 0.05 });

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="w-full py-20 px-4 sm:px-6 lg:px-16 bg-white dark:bg-gray-900 text-slate-900 dark:text-white transition-colors duration-300 overflow-hidden font-sans"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* Left Side Content Tracks */}
        <div className="lg:col-span-8 space-y-8">
          
          {/* Header & Description */}
          <div className={`space-y-4 transition-all duration-1000 transform ${revealed ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
            <div className="inline-block px-3 py-1 bg-blue-600/10 dark:bg-blue-950/50 rounded-full">
              <span className="text-blue-600 dark:text-blue-400 text-xs font-bold uppercase tracking-wide">
                Task Object Model
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight font-sans text-slate-900 dark:text-white">
              Every task preserves what created it.
            </h2>
            <p className="text-gray-500 dark:text-slate-400 text-base sm:text-lg max-w-3xl leading-relaxed">
              A governed task record holds ownership, schedule, source context, governance, and outcome evidence — so the work remains traceable from creation to completion.
            </p>
          </div>

          {/* Dynamic Grid Layout for Model Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {MODEL_DATA.map((category, idx) => (
              <div
                key={category.title}
                className={`p-5 bg-slate-50 dark:bg-slate-950 rounded-2xl border border-violet-100 dark:border-slate-800 flex flex-col gap-3 hover:shadow-lg dark:hover:shadow-2xl/20 hover:-translate-y-1 transition-all duration-300 transform ${
                  revealed ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
                }`}
                style={{ transitionDelay: `${150 + idx * 50}ms` }}
              >
                <h3 className="text-blue-600 dark:text-blue-400 text-xs font-bold uppercase tracking-wide">
                  {category.title}
                </h3>
                
                <ul className="space-y-2">
                  {category.items.map((item, itemIdx) => (
                    <li key={itemIdx} className="flex items-center gap-2 text-gray-500 dark:text-slate-400 text-xs font-normal">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-600 dark:bg-blue-400 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side Sticky Visual Asset */}
        <div 
          className={`lg:col-span-4 w-full h-[400px] lg:h-[592px] bg-slate-900 rounded-2xl border border-slate-800 dark:border-slate-700/60 overflow-hidden shadow-xl transition-all duration-1000 delay-300 transform ${
            revealed ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
          }`}
        >
          <img 
            src="/tasks-todo/image 158.png" 
            alt="Data schema blueprint visualization panel" 
            className="w-full h-full object-cover opacity-90 transition-transform duration-700 hover:scale-105" 
          />
        </div>

      </div>
    </section>
  );
}