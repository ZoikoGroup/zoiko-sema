"use client";

import React from "react";
import { useInView } from "@/components/Personal-to-team/useInView";

export function RemoteWorkPatternsSection() {
  const { ref: headRef, inView: headIn } = useInView(0.2);
  const { ref: gridRef, inView: gridIn } = useInView(0.1);

  const patterns = [
    {
      title: "Async standups",
      badge: "Meetings \u2192 Async",
      icon: "⧗",
      desc: "Collect updates, blockers, owners, and follow-ups without forcing another meeting.",
      iconBg: "bg-violet-100",
      iconText: "text-violet-600",
      badgeBg: "bg-violet-100",
      badgeText: "text-violet-600"
    },
    {
      title: "Time-zone handoffs",
      badge: "Region \u2192 Region",
      icon: "⇄",
      desc: "Move work between regions and shifts with full context and attached evidence.",
      iconBg: "bg-sky-100",
      iconText: "text-sky-700",
      badgeBg: "bg-sky-100",
      badgeText: "text-sky-700"
    },
    {
      title: "Meeting-to-action",
      badge: "Meeting \u2192 Actions",
      icon: "✦",
      desc: "Turn remote meetings into summaries, decisions, and assigned tasks.",
      iconBg: "bg-emerald-50",
      iconText: "text-green-600",
      badgeBg: "bg-emerald-50",
      badgeText: "text-green-600"
    },
    {
      title: "Shared spaces",
      badge: "Scattered \u2192 Spaces",
      icon: "▤",
      desc: "Keep projects, clients, and functional teams organized in one place.",
      iconBg: "bg-yellow-50",
      iconText: "text-yellow-600",
      badgeBg: "bg-yellow-50",
      badgeText: "text-yellow-600"
    },
    {
      title: "Availability context",
      badge: "Unclear \u2192 Overlap",
      icon: "◷",
      desc: "Show overlap windows and response expectations respectfully \u2014 never activity tracking.",
      iconBg: "bg-violet-100",
      iconText: "text-indigo-800",
      badgeBg: "bg-violet-100",
      badgeText: "text-indigo-800"
    },
    {
      title: "External coordination",
      badge: "Guests \u2192 Scoped",
      icon: "⚿",
      desc: "Work with clients and partners under scoped guest access, expiry, and permissions.",
      iconBg: "bg-pink-100",
      iconText: "text-pink-500",
      badgeBg: "bg-pink-100",
      badgeText: "text-pink-500"
    }
  ];

  return (
    <section className="w-full bg-slate-100 py-24 lg:py-32 font-sans antialiased">
      <div className="max-w-[1248px] mx-auto px-6 md:px-10 flex flex-col items-center">
        
        {/* Header */}
        <div ref={headRef} className={`flex flex-col items-center text-center gap-6 max-w-[700px] transition-all duration-700 transform ${headIn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <span className="text-violet-600 text-xs font-bold uppercase tracking-widest font-['Inter']">
            REMOTE WORK PATTERNS
          </span>
          <h2 className="text-slate-900 text-4xl lg:text-[40px] font-bold font-['Inter'] leading-[1.15]">
            Built for the way distributed teams<br className="hidden md:block"/>actually work.
          </h2>
        </div>

        {/* 2x3 Grid */}
        <div ref={gridRef} className={`w-full max-w-[1140px] mt-16 grid grid-cols-1 md:grid-cols-2 gap-6 transition-all duration-1000 delay-200 transform ${gridIn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}>
          {patterns.map((pattern, i) => (
            <div key={i} className="w-full h-auto min-h-[112px] bg-white rounded-2xl outline outline-1 outline-violet-100 p-6 flex items-start gap-5 shadow-sm hover:shadow-md transition-shadow">
              
              {/* Icon */}
              <div className={`size-12 rounded-2xl flex items-center justify-center shrink-0 ${pattern.iconBg}`}>
                <span className={`${pattern.iconText} text-xl`}>{pattern.icon}</span>
              </div>
              
              {/* Content */}
              <div className="flex flex-col w-full">
                <div className="flex items-center gap-3 mb-2 flex-wrap">
                  <h4 className="text-slate-900 text-base font-bold font-['Inter']">
                    {pattern.title}
                  </h4>
                  <div className={`px-2 py-0.5 rounded-lg ${pattern.badgeBg}`}>
                    <span className={`${pattern.badgeText} text-[10px] font-bold font-['Inter']`}>
                      {pattern.badge}
                    </span>
                  </div>
                </div>
                <p className="text-gray-500 text-sm font-normal font-['Inter'] leading-5">
                  {pattern.desc}
                </p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
