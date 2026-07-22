"use client";

import React, { useEffect, useState, useRef } from 'react';
import { ArrowRight } from 'lucide-react';

// --- Reusable Viewport Reveal Hook ---
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

export default function PastEventsReplays() {
  const { ref, isVisible } = useScrollReveal();

  const replaysData = [
    {
      status: "Replay available",
      statusClass: "bg-green-100 text-green-700 dark:bg-green-950/60 dark:text-green-300",
      title: "Governance and trust deep dive",
      metaText: "42 min · Captions & transcript · Current version",
      dateText: "Recorded June 18, 2026",
      imgUrl: "/webinars/Topic and audienc (21).png"
    },
    {
      status: "Replay available",
      statusClass: "bg-green-100 text-green-700 dark:bg-green-950/60 dark:text-green-300",
      title: "Getting started: your first week with Sema",
      metaText: "28 min · Captions & transcript · Current version",
      dateText: "Recorded June 5, 2026",
      imgUrl: "/webinars/Topic and audienc (2).png"
    },
    {
      status: "Processing",
      statusClass: "bg-orange-100 text-amber-700 dark:bg-amber-950/60 dark:text-amber-300",
      title: "Admin clinic: roles, retention, and AI policy",
      metaText: "Recorded live · Replay publishing soon",
      dateText: "Recorded July 15, 2026",
      imgUrl: "/webinars/Topic and audienc (17).png"
    },
    {
      status: "Replay available",
      statusClass: "bg-green-100 text-green-700 dark:bg-green-950/60 dark:text-green-300",
      title: "Developer session: building on the Sema API",
      metaText: "51 min · Captions & transcript · Current version",
      dateText: "Recorded May 22, 2026",
      imgUrl: "/webinars/Topic and audienc (18).png"
    },
    {
      status: "Replaced",
      statusClass: "bg-purple-100 text-purple-700 dark:bg-purple-950/60 dark:text-purple-300",
      title: "Confidential Mode overview (prior release)",
      metaText: "Superseded by a current-version session",
      dateText: "Recorded March 3, 2026",
      imgUrl: "/webinars/Topic and audienc (19).png"
    },
    {
      status: "Replay available",
      statusClass: "bg-green-100 text-green-700 dark:bg-green-950/60 dark:text-green-300",
      title: "Meeting-to-action workflow workshop",
      metaText: "36 min · Captions & transcript · Current version",
      dateText: "Recorded Feb 19, 2026",
      imgUrl: "/webinars/Topic and audienc (8).png"
    }
  ];

  return (
    <section
      ref={ref}
      className={`w-full py-16 sm:py-24 px-4 sm:px-8 lg:px-28 bg-violet-50/50 dark:bg-gray-900 text-slate-900 dark:text-white transition-all duration-1000 ease-out transform ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-0 sm:px-8 space-y-12">
        
        {/* Header Informational Block */}
        <div className="max-w-[700px] space-y-3.5">
          <div className="flex items-center gap-3 h-5">
            <div className="size-1.5 bg-blue-600 dark:bg-blue-400 rounded-full animate-pulse" />
            <span className="text-blue-600 dark:text-blue-400 text-xs font-bold   uppercase tracking-widest">
              PAST EVENTS AND ON-DEMAND REPLAYS
            </span>
          </div>
          <div className="space-y-2">
            <h2 className="text-slate-900 dark:text-slate-100 text-2xl sm:text-3xl font-extrabold   leading-snug sm:leading-10 tracking-tight">
              Every past session becomes a durable, searchable resource.
            </h2>
            <p className="text-slate-600 dark:text-gray-400 text-sm sm:text-base font-normal   leading-relaxed">
              Newest first — with chapters, transcript, and a product-version freshness note on every replay.
            </p>
          </div>
        </div>

        {/* Video On-Demand Resource Layout Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {replaysData.map((item, idx) => (
            <div
              key={idx}
              className="group bg-white dark:bg-gray-950 p-6 rounded-[20px] shadow-[0px_8px_24px_rgba(18,19,43,0.03)] border border-slate-200 dark:border-slate-800 flex flex-col justify-between items-start gap-5 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:border-slate-300 dark:hover:border-slate-700"
            >
              <div className="w-full space-y-4">
                {/* Embedded Video Thumbnail Placeholder Frame */}
                <div className="w-full aspect-[311/195] rounded-xl overflow-hidden bg-slate-100 dark:bg-slate-900 border border-slate-100 dark:border-slate-800/60">
                  <img
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                    src={item.imgUrl}
                    alt={item.title}
                  />
                </div>

                {/* State Pill Configuration Badge */}
                <div className={`px-3 py-1 rounded-full text-[11px] font-bold   leading-tight w-fit uppercase tracking-wide ${item.statusClass}`}>
                  {item.status}
                </div>

                {/* Text Title Content Stack */}
                <div className="space-y-1.5">
                  <h3 className="text-slate-900 dark:text-slate-100 text-sm sm:text-base font-bold   leading-snug min-h-[44px] line-clamp-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">
                    {item.title}
                  </h3>
                  <p className="text-slate-500 dark:text-gray-400 text-xs font-normal   leading-relaxed line-clamp-2">
                    {item.metaText}
                  </p>
                </div>
              </div>

              {/* Immutable Recorded Historical Footnote */}
              <div className="w-full pt-3 border-t border-slate-100 dark:border-slate-900 text-xs text-gray-400 dark:text-gray-500 font-medium   leading-none">
                {item.dateText}
              </div>
            </div>
          ))}
        </div>

        {/* Global Hub Navigation Link Redirect Button Footer */}
        {/* <div className="w-full pt-4 flex justify-center items-center">
          <button className="flex items-center gap-1.5 group text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors duration-200 text-sm font-semibold   py-2.5 px-5 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/20">
            <span>Browse all on-demand sessions</span>
            <ArrowRight className="size-4 stroke-[2.5px] transition-transform duration-300 group-hover:translate-x-1" />
          </button>
        </div> */}

      </div>
    </section>
  );
}