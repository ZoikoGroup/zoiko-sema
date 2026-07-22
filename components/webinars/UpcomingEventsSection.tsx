"use client";

import React, { useEffect, useState, useRef } from 'react';
import { ArrowRight } from 'lucide-react';

// --- Reusable Intersection Observer Scroll-Reveal Hook ---
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

export default function UpcomingEventsSection() {
  const { ref, isVisible } = useScrollReveal();
  const [activeFormat, setActiveFormat] = useState("All formats");

  const formatFilters = [
    "All formats",
    "Webinar",
    "Workshop",
    "Product demo",
    "Office hours",
    "Customer clinic"
  ];

  const eventsData = [
    {
      type: "Workshop",
      badgeText: "Registration open",
      badgeClass: "bg-green-100 text-green-700 dark:bg-green-950/60 dark:text-green-300",
      title: "AI Meeting Summaries in practice",
      metaDesc: "Live workshop · 45 min + Q&A",
      timeText: "Thu, Jul 24 · 10:00 AM your time (5:00 PM CET)",
      imgUrl: "/webinars/Topic and audienc (6).png"
    },
    {
      type: "Workshop",
      badgeText: "Waitlist",
      badgeClass: "bg-orange-100 text-yellow-800 dark:bg-amber-950/60 dark:text-amber-300",
      title: "Admin Console deployment clinic",
      metaDesc: "Workshop · Capacity reached",
      timeText: "Tue, Jul 29 · 1:00 PM your time (6:00 PM UTC)",
      imgUrl: "/webinars/Topic and audienc (10).png"
    },
    {
      type: "Webinar",
      badgeText: "Customer event",
      badgeClass: "bg-violet-200 text-indigo-700 dark:bg-indigo-950/60 dark:text-indigo-300",
      title: "Q3 release readiness briefing",
      metaDesc: "Release briefing · Customers only",
      timeText: "Wed, Aug 6 · 9:00 AM your time (2:00 PM UTC)",
      imgUrl: "/webinars/Topic and audienc (7).png"
    },
    {
      type: "Workshop",
      badgeText: "Registration open",
      badgeClass: "bg-green-100 text-green-700 dark:bg-green-950/60 dark:text-green-300",
      title: "Meeting-to-action: from decision to owner",
      metaDesc: "Workflow workshop · 30 min",
      timeText: "Mon, Aug 11 · 11:00 AM your time (4:00 PM UTC)",
      imgUrl: "/webinars/Topic and audienc (8).png"
    },
    {
      type: "Office hours",
      badgeText: "Registration open",
      badgeClass: "bg-green-100 text-green-700 dark:bg-green-950/60 dark:text-green-300",
      title: "Developer office hours: webhooks & events",
      metaDesc: "Office hours · Open Q&A",
      timeText: "Wed, Aug 13 · 8:00 AM your time (3:00 PM UTC)",
      imgUrl: "/webinars/Topic and audienc (9).png"
    },
    {
      type: "Customer clinic",
      badgeText: "Deadline soon",
      badgeClass: "bg-orange-100 text-yellow-800 dark:bg-amber-950/60 dark:text-amber-300",
      title: "Sema + ZoikoTime: governed integration boundaries",
      metaDesc: "Governance session · Registration closes Aug 15",
      timeText: "Tue, Aug 19 · 10:00 AM your time (3:00 PM UTC)",
      imgUrl: "/webinars/Topic and audienc (21).png"
    },
    {
      type: "Webinar",
      badgeText: "Registration open",
      badgeClass: "bg-green-100 text-green-700 dark:bg-green-950/60 dark:text-green-300",
      title: "Confidential Mode: what changes, what doesn't",
      metaDesc: "Security & compliance session",
      timeText: "Thu, Aug 21 · 9:00 AM your time (2:00 PM UTC)",
      imgUrl: "/webinars/Topic and audienc (11).png"
    },
    {
      type: "Product demo",
      badgeText: "Registration open",
      badgeClass: "bg-green-100 text-green-700 dark:bg-green-950/60 dark:text-green-300",
      title: "Product demo: Channels & Spaces for client work",
      metaDesc: "Product demonstration · 30 min",
      timeText: "Mon, Aug 25 · 10:00 AM your time (3:00 PM UTC)",
      imgUrl: "/webinars/Event thumbnail (4).png"
    }
  ];

  // Client-side quick category filter parsing
  const filteredEvents = activeFormat === "All formats"
    ? eventsData
    : eventsData.filter(evt => evt.type.toLowerCase() === activeFormat.toLowerCase());

  return (
    <section
      ref={ref}
      className={`w-full py-16 sm:py-24 px-4 sm:px-8 lg:px-28 bg-violet-50 dark:bg-gray-900 text-slate-900 dark:text-white transition-all duration-1000 ease-out transform ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-0 sm:px-8 space-y-10">
        
        {/* Header Block Information Row */}
        <div className="max-w-[720px] space-y-3.5">
          <div className="flex items-center gap-3 h-5">
            <div className="size-1.5 bg-blue-600 dark:bg-blue-400 rounded-full animate-pulse" />
            <span className="text-blue-600 dark:text-blue-400 text-xs font-bold   uppercase tracking-widest">
              ALL UPCOMING EVENTS
            </span>
          </div>
          <div className="space-y-2">
            <h2 className="text-slate-900 dark:text-slate-100 text-2xl sm:text-3xl font-extrabold  leading-snug sm:leading-10 tracking-tight">
              Every scheduled session, with registration state, time zone, and capacity always visible.
            </h2>
            <p className="text-slate-600 dark:text-gray-400 text-sm sm:text-base font-normal   leading-relaxed">
              Filter by format, topic, or audience — soonest first.
            </p>
          </div>
        </div>

        {/* Action Format Horizontal Filter Row Rack */}
        <div className="w-full flex flex-wrap items-center gap-2 pb-2 border-b border-slate-200 dark:border-slate-800">
          {formatFilters.map((pill, idx) => {
            const isSelected = activeFormat === pill;
            return (
              <button
                key={idx}
                onClick={() => setActiveFormat(pill)}
                className={`px-4 py-2 rounded-full border text-xs font-semibold   leading-tight backdrop-blur-md transition-all duration-200 uppercase ${
                  isSelected
                    ? "bg-blue-600 border-blue-600 text-white shadow-sm scale-102"
                    : "bg-white dark:bg-gray-950 text-gray-700 dark:text-gray-300 border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800"
                }`}
              >
                {pill}
              </button>
            );
          })}
        </div>

        {/* Featured Large Frame Preview Asset Grid */}
        <div className="w-full aspect-[1136/325] rounded-[20px] overflow-hidden border border-slate-200 dark:border-slate-800 shadow-sm bg-white dark:bg-gray-950 group">
          <img
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.01]"
            src="/webinars/Topic and audienc (2).png"
            alt="All upcoming workspace interactive events panel diagram asset preview"
          />
        </div>

        {/* Flexible Event Display Deck Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredEvents.map((event, idx) => (
            <div
              key={idx}
              className="group bg-white dark:bg-gray-950 p-5 rounded-[20px] shadow-[0px_8px_24px_rgba(18,19,43,0.03)] border border-slate-200 dark:border-slate-800/80 flex flex-col justify-start items-start gap-4 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:border-slate-300 dark:hover:border-slate-700"
            >
              {/* Event Graphic Block Header */}
              <div className="w-full aspect-[215/134] rounded-xl overflow-hidden bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800">
                <img
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                  src={event.imgUrl}
                  alt={event.title}
                />
              </div>

              {/* Dynamic Action State Badge */}
              <div className={`px-3 py-1.5 rounded-full text-[10px] font-bold   leading-none tracking-wide uppercase ${event.badgeClass}`}>
                {event.badgeText}
              </div>

              {/* Text Meta Framework Pack */}
              <div className="flex-1 space-y-2">
                <h3 className="text-slate-900 dark:text-slate-100 text-sm sm:text-base font-bold  leading-snug line-clamp-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">
                  {event.title}
                </h3>
                <p className="text-slate-600 dark:text-gray-400 text-xs font-normal   leading-relaxed">
                  {event.metaDesc}
                </p>
              </div>

              {/* Meta Timing Footer Row */}
              <div className="w-full pt-2.5 border-t border-slate-100 dark:border-slate-800/60 text-[11px] text-slate-400 dark:text-gray-500 font-medium   leading-relaxed">
                {event.timeText}
              </div>
            </div>
          ))}
        </div>

        {/* Empty State Guard */}
        {filteredEvents.length === 0 && (
          <div className="w-full py-12 text-center text-sm text-slate-400 dark:text-gray-500  ">
            No upcoming events match this selected layout criteria.
          </div>
        )}

        {/* Center Anchored Redirection Trigger Button Footer */}
        {/* <div className="w-full pt-6 flex justify-center items-center">
          <button className="flex items-center gap-1.5 group text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors duration-200 text-sm font-semibold   py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/20">
            <span>View full calendar</span>
            <ArrowRight className="size-4 stroke-[2.5px] transition-transform duration-300 group-hover:translate-x-1" />
          </button>
        </div> */}

      </div>
    </section>
  );
}