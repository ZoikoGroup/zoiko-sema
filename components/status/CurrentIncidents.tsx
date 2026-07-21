"use client";

import React, { useEffect, useState, useRef } from 'react';
import { Clock, ArrowRight } from 'lucide-react';

interface Incident {
  id: string;
  status: 'Monitoring' | 'Resolved';
  severity: 'Minor' | 'Informational' | 'Operational';
  title: string;
  nextUpdate?: string;
  components: string[];
  metaTimeline: string;
}

const ACTIVE_INCIDENTS: Incident[] = [
  {
    id: "INC-2847",
    status: "Monitoring",
    severity: "Minor",
    title: "Video Meetings: Caption delays for some users",
    nextUpdate: "Today at 3:30 PM UTC",
    components: ["Video Meetings", "AI Meeting Summaries"],
    metaTimeline: "Started: Today at 1:15 PM UTC · Updated: Today at 2:45 PM UTC"
  },
  {
    id: "INC-2846",
    status: "Monitoring",
    severity: "Informational",
    title: "AI Summary generation: Increased processing time",
    nextUpdate: "Today at 4:00 PM UTC",
    components: ["AI Meeting Summaries"],
    metaTimeline: "Started: Today at 11:30 AM UTC · Updated: Today at 2:00 PM UTC"
  }
];

const RESOLVED_INCIDENTS = [
  {
    id: "INC-2844",
    title: "Authentication: SSO login delays — Resolved",
    duration: "1h 14m",
    resolvedAt: "Yesterday at 6:22 PM UTC"
  }
];

export default function CurrentIncidents() {
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
      id="incidents"
      ref={sectionRef}
      className="w-full py-20 px-4 sm:px-6 lg:px-16 bg-slate-100 dark:bg-gray-900 text-slate-900 dark:text-white transition-colors duration-305 font-sans overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        
        {/* Header Block */}
        <div className={`space-y-3 mb-12 transition-all duration-1000 transform ${revealed ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          <span className="text-violet-600 dark:text-violet-400 text-xs font-bold uppercase tracking-wider block">
            Active Incidents & Feed
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Current incidents
          </h2>
          <p className="text-gray-500 dark:text-slate-400 text-base max-w-2xl">
            Showing active incidents first, then resolved. Subscribe to follow components you care about.
          </p>
        </div>

        {/* Main Feed Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          
          {/* Left Sticky Hero Graphic Spot */}
          <div className={`lg:col-span-5 w-full h-80 lg:h-[370px] bg-white dark:bg-slate-950 rounded-2xl overflow-hidden border border-violet-100 dark:border-slate-800 shadow-sm transition-all duration-1000 delay-100 transform ${revealed ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
            <img 
              src="/status/image 144.png" 
              alt="System operations room baseline monitoring dashboard" 
              className="w-full h-full object-cover opacity-95 dark:opacity-85 hover:scale-105 transition-transform duration-500"
            />
          </div>

          {/* Right Active Incident Stack */}
          <div className="lg:col-span-7 space-y-4">
            {ACTIVE_INCIDENTS.map((inc, index) => (
              <div 
                key={inc.id}
                className={`p-5 sm:p-6 bg-white dark:bg-slate-950 rounded-2xl border border-violet-100 dark:border-slate-800/80 shadow-sm flex flex-col gap-4 hover:shadow-md hover:-translate-y-1 transition-all duration-300 transform ${
                  revealed ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
                }`}
                style={{ transitionDelay: `${200 + index * 100}ms` }}
              >
                {/* Upper Indicator Bar */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-slate-400 dark:text-slate-500 font-bold">{inc.id}</span>
                    
                    {/* Status Badge */}
                    <div className="px-2.5 py-0.5 bg-sky-100 dark:bg-sky-950/60 text-sky-700 dark:text-sky-400 rounded-full font-bold inline-flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-sky-700 dark:bg-sky-400 animate-pulse" />
                      {inc.status}
                    </div>

                    {/* Severity Badge */}
                    <div className={`px-2.5 py-0.5 rounded-full font-bold ${
                      inc.severity === 'Minor' 
                        ? 'bg-yellow-50 dark:bg-yellow-950/40 text-yellow-600 dark:text-yellow-400' 
                        : 'bg-sky-50 dark:bg-sky-950/40 text-sky-600 dark:text-sky-400'
                    }`}>
                      {inc.severity}
                    </div>
                  </div>

                  {/* Next Update Tracker */}
                  {inc.nextUpdate && (
                    <div className="flex items-center gap-1.5 text-slate-400 dark:text-slate-500 font-medium">
                      <Clock className="w-3.5 h-3.5 text-slate-400" />
                      <span>
                        Next update: <span className="text-yellow-600 dark:text-yellow-400 font-bold">{inc.nextUpdate}</span>
                      </span>
                    </div>
                  )}
                </div>

                {/* Title and Affected System Badges */}
                <div className="space-y-2">
                  <h3 className="text-slate-900 dark:text-white font-bold text-base sm:text-lg leading-snug">
                    {inc.title}
                  </h3>
                  <div className="flex flex-wrap gap-1.5">
                    {inc.components.map((c, i) => (
                      <span key={i} className="px-2.5 py-0.5 bg-slate-100 dark:bg-slate-900 text-gray-500 dark:text-slate-400 text-[11px] font-semibold rounded-full">
                        {c}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom Metadata & Link */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-2 border-t border-slate-50 dark:border-slate-900/60 text-[11px] font-medium text-slate-400 dark:text-slate-500">
                  <span>{inc.metaTimeline}</span>
                  <button className="flex items-center gap-1 text-violet-600 dark:text-violet-400 font-bold hover:underline self-end sm:self-auto text-xs group">
                    <span>View details</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* Recently Resolved Panel Area */}
        <div className="space-y-4">
          <div className={`transition-all duration-1000 delay-400 transform ${revealed ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'}`}>
            <h3 className="text-slate-400 dark:text-slate-500 text-xs font-bold uppercase tracking-wider">
              Recently Resolved
            </h3>
          </div>

          {RESOLVED_INCIDENTS.map((item, index) => (
            <div 
              key={item.id}
              className={`w-full p-4 sm:p-5 bg-white dark:bg-slate-950 rounded-2xl border border-violet-100 dark:border-slate-800/80 shadow-sm flex flex-col md:flex-row md:items-center md:justify-between gap-4 hover:shadow-md transition-all duration-300 transform ${
                revealed ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
              }`}
              style={{ transitionDelay: `${450 + index * 50}ms` }}
            >
              {/* Left Identity Context */}
              <div className="flex flex-wrap items-center gap-3">
                <span className="text-slate-400 dark:text-slate-500 text-xs font-bold">{item.id}</span>
                <div className="px-2.5 py-0.5 bg-emerald-50 dark:bg-emerald-950/40 text-green-600 dark:text-green-400 rounded-full text-xs font-bold flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 dark:bg-green-400" />
                  Operational
                </div>
                <h4 className="text-slate-900 dark:text-slate-200 text-sm font-semibold">
                  {item.title}
                </h4>
              </div>

              {/* Right Metrics & Quick View Link */}
              <div className="flex items-center justify-between md:justify-end gap-6 text-xs text-slate-400 dark:text-slate-500 font-medium">
                <div>
                  Duration: <span className="font-bold text-slate-500 dark:text-slate-400">{item.duration}</span>
                </div>
                <div className="hidden sm:block">
                  Resolved: {item.resolvedAt}
                </div>
                <button className="text-violet-600 dark:text-violet-400 font-bold hover:underline flex items-center gap-0.5 group">
                  <span>View</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}