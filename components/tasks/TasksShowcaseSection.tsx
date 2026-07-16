"use client";

import React, { useEffect, useState, useRef } from 'react';
import { Briefcase, List, LayoutGrid, CalendarDays, Kanban, Layers } from 'lucide-react';

const TABS = [
  { id: 'my-work', label: 'My Work', icon: Briefcase },
  { id: 'list', label: 'List', icon: List },
  { id: 'board', label: 'Board', icon: LayoutGrid },
  { id: 'timeline', label: 'Timeline', icon: Kanban },
  { id: 'calendar', label: 'Calendar', icon: CalendarDays },
  { id: 'project', label: 'Project', icon: Layers },
];

export default function ViewsSection() {
  const [revealed, setRevealed] = useState(false);
  const [activeTab, setActiveTab] = useState('my-work');
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
      className="w-full py-20 px-4 sm:px-6 lg:px-16 bg-slate-50 dark:bg-gray-900 text-slate-900 dark:text-white transition-colors duration-300 overflow-hidden font-sans"
    >
      <div className="max-w-6xl mx-auto flex flex-col items-center gap-10">
        
        {/* Header Content */}
        <div className={`text-center space-y-4 max-w-2xl transition-all duration-1000 transform ${revealed ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          <div className="inline-block px-3 py-1 bg-blue-600/10 dark:bg-blue-950/50 rounded-full">
            <span className="text-blue-600 dark:text-blue-400 text-xs font-bold uppercase tracking-wide">
              Views
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
            One task record. Every view you need.
          </h2>
          <p className="text-gray-500 dark:text-slate-400 text-base leading-relaxed">
            Switch between personal, list, board, timeline, calendar, and project views. Permissions, source context, and audit history are identical across all of them.
          </p>
        </div>

        {/* Interactive Responsive Pill Navigation */}
        <div 
          className={`w-full flex flex-wrap justify-center gap-2.5 transition-all duration-1000 delay-150 transform ${
            revealed ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
          }`}
        >
          {TABS.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`h-10 px-4 py-2 rounded-full border text-xs font-semibold inline-flex items-center gap-2 transition-all duration-300 hover:scale-105 active:scale-95 ${
                  isActive
                    ? 'bg-blue-600 border-blue-600 text-white shadow-md shadow-blue-600/10'
                    : 'bg-white dark:bg-slate-950 border-violet-100 dark:border-slate-800 text-gray-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-900'
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-white' : 'text-gray-400 dark:text-slate-500'}`} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Dynamic Showcase Preview Frame */}
        <div 
          className={`w-full h-64 sm:h-96 md:h-[450px] bg-white dark:bg-slate-950 rounded-2xl border border-violet-100 dark:border-slate-800 overflow-hidden shadow-xl shadow-slate-200/50 dark:shadow-none transition-all duration-1000 delay-300 transform group ${
            revealed ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
          }`}
        >
          <img 
            src="/tasks-todo/image 159.png" 
            alt={`${activeTab} dashboard workflow visualization interface`}
            className="w-full h-full object-contain opacity-95 dark:opacity-85 transition-transform duration-700 group-hover:scale-[1.015]" 
          />
        </div>

      </div>
    </section>
  );
}