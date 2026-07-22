"use client";

import React, { useEffect, useState, useRef } from 'react';
import { Download } from 'lucide-react';

interface UptimeComponent {
  name: string;
  percentage: string;
  history: ('operational' | 'degraded' | 'outage' | 'nodata')[];
}

// Generates 30 realistic status points mapping to your layout colors
const sampleHistory: UptimeComponent['history'] = [
  ...Array(5).fill('operational'),
  'degraded',
  ...Array(11).fill('operational'),
  'degraded',
  ...Array(4).fill('operational'),
  'outage',
  ...Array(7).fill('operational'),
];

const UPTIME_COMPONENTS: UptimeComponent[] = [
  { name: "Messaging", percentage: "90.00%", history: sampleHistory },
  { name: "Video Meetings", percentage: "90.00%", history: sampleHistory },
  { name: "AI Summaries", percentage: "90.00%", history: sampleHistory },
  { name: "Admin Console", percentage: "90.00%", history: sampleHistory },
  { name: "Auth", percentage: "90.00%", history: sampleHistory },
  { name: "APIs", percentage: "90.00%", history: sampleHistory }
];

const STATUS_LEGEND = [
  { label: "Operational", colorClass: "bg-emerald-600" },
  { label: "Degraded", colorClass: "bg-yellow-600" },
  { label: "Outage", colorClass: "bg-pink-700" },
  { label: "No data", colorClass: "bg-gray-200 dark:bg-slate-700" }
];

export default function UptimeHistory() {
  const [isRevealed, setIsRevealed] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsRevealed(true);
      },
      { threshold: 0.05 }
    );
    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  const getBarColor = (status: UptimeComponent['history'][number]) => {
    switch (status) {
      case 'operational': return 'bg-emerald-600 hover:bg-emerald-500';
      case 'degraded': return 'bg-yellow-600 hover:bg-yellow-500';
      case 'outage': return 'bg-pink-700 hover:bg-pink-600';
      case 'nodata': return 'bg-gray-200 dark:bg-slate-700 hover:bg-slate-600';
    }
  };

  return (
    <section
      id="uptime"
      ref={containerRef}
      className="w-full py-16 px-4 sm:px-6 lg:px-16 bg-slate-50 dark:bg-gray-900 transition-colors duration-300 font-sans"
    >
      <div className="max-w-7xl mx-auto">
        
        {/* Top Header Block */}
        <div className={`flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-8 transition-all duration-1000 transform ${isRevealed ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          <div className="space-y-2">
            <span className="text-violet-600 dark:text-violet-400 text-xs font-bold uppercase tracking-wider block">
              Uptime History
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white leading-tight">
              Reliability and transparency
            </h2>
            <p className="text-sm text-gray-500 dark:text-slate-400 max-w-2xl">
              Historical uptime by component. No unsupported claims — only what the record shows.
            </p>
          </div>

          {/* Controls */}
          <div className="flex items-center gap-2 self-start lg:self-auto text-sm font-bold">
            <button className="px-4 py-2 bg-blue-600 text-white rounded-2xl hover:bg-blue-700 shadow-sm transition-all hover:-translate-y-0.5">
              30-day
            </button>
            <button className="px-4 py-2 bg-white dark:bg-slate-800 text-gray-500 dark:text-slate-300 rounded-2xl border border-violet-100 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-700 transition-all">
              90-day
            </button>
            <button className="px-4 py-2 bg-white dark:bg-slate-800 text-gray-500 dark:text-slate-300 rounded-2xl border border-violet-100 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-700 flex items-center gap-1.5 transition-all">
              <Download className="w-3.5 h-3.5" />
              <span>Export</span>
            </button>
          </div>
        </div>

        {/* Legend Row */}
        <div className={`flex flex-wrap items-center gap-x-6 gap-y-2 mb-6 text-xs font-semibold text-gray-500 dark:text-slate-400 transition-all duration-1000 delay-100 transform ${isRevealed ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'}`}>
          {STATUS_LEGEND.map((status) => (
            <div key={status.label} className="flex items-center gap-1.5">
              <span className={`w-3 h-3 rounded ${status.colorClass}`} />
              <span>{status.label}</span>
            </div>
          ))}
        </div>

        {/* Content Container Frame */}
        <div className={`bg-white dark:bg-slate-950 rounded-2xl border border-violet-100 dark:border-slate-800/80 p-6 shadow-sm divide-y divide-violet-100 dark:divide-slate-800/60 transition-all duration-1000 delay-200 transform ${isRevealed ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
          {UPTIME_COMPONENTS.map((item, index) => (
            <div 
              key={index}
              className="group py-5 first:pt-0 last:pb-0 transition-all duration-300"
            >
              {/* Row Metric Meta */}
              <div className="flex justify-between items-center mb-3">
                <span className="text-slate-900 dark:text-white text-sm font-semibold group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {item.name}
                </span>
                <span className="text-green-600 dark:text-green-400 text-xs font-bold">
                  {item.percentage} uptime
                </span>
              </div>

              {/* Uptime Bar Track (Responsive Horizontal Scroll on small viewports) */}
              <div className="w-full overflow-x-auto no-scrollbar py-1">
                <div className="flex gap-[3px] min-w-[600px] sm:min-w-0">
                  {item.history.map((status, blockIndex) => (
                    <div
                      key={blockIndex}
                      title={`Day ${blockIndex + 1}: ${status}`}
                      className={`flex-1 h-8 min-w-[6px] rounded-[3px] cursor-pointer transition-all duration-150 hover:scale-y-110 origin-center ${getBarColor(status)}`}
                    />
                  ))}
                </div>
              </div>

              {/* Timestamp Labels */}
              <div className="flex justify-between items-center mt-2 text-[10px] text-slate-400 dark:text-slate-500 font-medium">
                <span>30 days ago</span>
                <span>Today</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}