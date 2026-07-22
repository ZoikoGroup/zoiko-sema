"use client";
import React, { useEffect, useState, useRef } from 'react';
import { Bell, Calendar, Plus } from 'lucide-react';
import Link from 'next/link';

interface MaintenanceEvent {
  id: string;
  title: string;
  status: 'Scheduled' | 'In Progress';
  date: string;
  window: string;
  component: string;
  details: string;
}

const MAINTENANCE_DATA: MaintenanceEvent[] = [
  {
    id: "MNT-124",
    title: "API infrastructure upgrade — zero-downtime migration",
    status: "Scheduled",
    date: "Sun, Jul 20",
    window: "2:00 AM – 3:30 AM UTC",
    component: "Integrations & APIs",
    details: "API response times may briefly increase. No expected downtime."
  },
  {
    id: "MNT-125",
    title: "Admin Console database maintenance",
    status: "Scheduled",
    date: "Tue, Jul 22",
    window: "11:00 PM – 12:00 AM UTC",
    component: "Admin Console",
    details: "Admin Console may be unavailable for up to 5 minutes during migration."
  }
];

// Reusable scroll reveal animation hook
function useIntersectionReveal() {
  const [revealed, setRevealed] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setRevealed(true);
      },
      { threshold: 0.05, rootMargin: "0px 0px -50px 0px" }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return [ref, revealed] as const;
}

export default function PlannedMaintenance() {
  const [ref, isVisible] = useIntersectionReveal();

  return (
    <section
      ref={ref}
      className="w-full py-20 bg-white dark:bg-gray-900 text-slate-900 dark:text-white transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        
        {/* Header Block */}
        <div
          className={`flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12 transition-all duration-1000 transform ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <div className="flex flex-col gap-2">
            <span className="text-violet-600 dark:text-violet-400 text-xs font-bold tracking-wider uppercase">
              Planned Maintenance
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-sans">
              Upcoming maintenance windows
            </h2>
          </div>

          <Link href="#subscribe" className="group px-5 py-2.5 self-start md:self-auto rounded-full border border-violet-100 dark:border-slate-800 hover:border-violet-300 dark:hover:border-slate-700 bg-white dark:bg-slate-950 text-violet-600 dark:text-violet-400 text-sm font-bold flex items-center gap-2 hover:-translate-y-0.5 transition-all duration-200">
            <Bell className="w-4 h-4" />
            <span>Subscribe to maintenance updates</span>
          </Link>
        </div>

        {/* Maintenance Cards Layout */}
        <div
          className={`grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12 transition-all duration-1000 delay-150 transform ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
          }`}
        >
          {MAINTENANCE_DATA.map((item) => (
            <div
              key={item.id}
              className="group p-6 sm:p-8 bg-slate-100 dark:bg-slate-950 rounded-2xl border border-violet-100 dark:border-slate-800/80 hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Meta Row */}
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-slate-400 dark:text-slate-500 text-xs font-bold">
                    {item.id}
                  </span>
                  <span className="px-2.5 py-1 bg-yellow-50 dark:bg-yellow-950/40 text-yellow-600 dark:text-yellow-400 text-xs font-bold rounded-full">
                    {item.status}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-slate-900 dark:text-white text-lg font-bold mb-6 group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">
                  {item.title}
                </h3>

                {/* Info Blocks (Date & Window) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                  <div className="p-4 bg-white dark:bg-slate-900 rounded-2xl border border-violet-100 dark:border-slate-800/60">
                    <span className="text-slate-400 text-[10px] font-extrabold uppercase tracking-widest">
                      Date
                    </span>
                    <p className="text-slate-900 dark:text-white text-sm font-bold mt-1">
                      {item.date}
                    </p>
                  </div>
                  <div className="p-4 bg-white dark:bg-slate-900 rounded-2xl border border-violet-100 dark:border-slate-800/60">
                    <span className="text-slate-400 text-[10px] font-extrabold uppercase tracking-widest">
                      Window (UTC)
                    </span>
                    <p className="text-slate-900 dark:text-white text-sm font-bold mt-1">
                      {item.window}
                    </p>
                  </div>
                </div>

                {/* Component Badge */}
                <div className="flex mb-4">
                  <span className="px-3 py-1 bg-white dark:bg-slate-900 text-slate-500 dark:text-slate-400 text-xs font-semibold rounded-full border border-violet-100 dark:border-slate-800">
                    {item.component}
                  </span>
                </div>

                {/* Extra details description */}
                <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-8">
                  {item.details}
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-200/50 dark:border-slate-800/50">
                <button className="px-4 py-2 bg-white hover:bg-slate-50 dark:bg-slate-900 dark:hover:bg-slate-800 text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-white text-xs font-bold rounded-xl border border-violet-100 dark:border-slate-800 flex items-center gap-1.5 transition-colors">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Add to calendar</span>
                </button>
                <Link href="#subscribe" className="px-4 py-2 bg-white hover:bg-slate-50 dark:bg-slate-900 dark:hover:bg-slate-800 text-violet-600 dark:text-violet-400 hover:text-violet-700 dark:hover:text-violet-300 text-xs font-bold rounded-xl border border-violet-100 dark:border-slate-800 flex items-center gap-1.5 transition-colors">
                  <Plus className="w-3.5 h-3.5" />
                  <span>Subscribe</span>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Dynamic Image Banner */}
        <div
          className={`relative w-full h-72 rounded-3xl overflow-hidden shadow-lg border border-violet-100 dark:border-slate-800 transition-all duration-1000 delay-300 transform ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
          }`}
        >
          <img
            className="w-full h-full object-cover transition-transform duration-700 hover:scale-[1.02]"
            src="/status/image 145.png"
            alt="Hardware and Network Infrastructure status visuals"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent pointer-events-none" />
        </div>

      </div>
    </section>
  );
}