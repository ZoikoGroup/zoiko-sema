"use client";

import React from "react";
import { useInView } from "./useInView";

export function WhyPersonalToTeamSection() {
  const { ref: headRef, inView: headIn } = useInView(0.2);
  const { ref: gridRef, inView: gridIn } = useInView(0.1);

  const features = [
    {
      title: "Start privately",
      desc: "Capture thoughts, meeting notes, saved messages, and drafts before they are ready for team visibility.",
      icon: "✎",
      bg: "bg-violet-50",
      iconBg: "bg-violet-100",
      iconColor: "text-violet-600",
      iconFont: "font-['Segoe_UI_Symbol']"
    },
    {
      title: "Share intentionally",
      desc: "Review recipients, workspace, redactions, files, owners, and AI suggestions before publishing.",
      icon: "⇄",
      bg: "bg-violet-50",
      iconBg: "bg-sky-100",
      iconColor: "text-sky-700",
      iconFont: "font-['Cambria_Math']"
    },
    {
      title: "Scale context",
      desc: "Convert individual knowledge into team action while preserving decisions, source context, and accountability.",
      icon: "↗",
      bg: "bg-violet-50",
      iconBg: "bg-emerald-50",
      iconColor: "text-green-600",
      iconFont: "font-bold"
    }
  ];

  return (
    <section className="w-full bg-white py-20 md:py-24 font-sans antialiased">
      <div className="max-w-[1248px] mx-auto px-6 md:px-10 flex flex-col items-center gap-14">
        
        <div ref={headRef} className={`ptt-hidden ${headIn ? "ptt-visible" : ""} flex flex-col items-center text-center gap-4`}>
          <span className="text-blue-600 text-xs font-bold uppercase tracking-widest">
            WHY PERSONAL-TO-TEAM
          </span>
          <h2 className="text-slate-900 text-3xl sm:text-4xl font-extrabold leading-tight">
            Private thinking becomes team<br className="hidden sm:block" />execution &mdash; on purpose.
          </h2>
        </div>

        <div ref={gridRef} className={`ptt-group ${gridIn ? "ptt-group-in" : ""} w-full grid grid-cols-1 md:grid-cols-3 gap-6`}>
          {features.map((f, i) => (
            <div key={i} className={`ptt-item ptt-card ${f.bg} rounded-2xl border border-violet-100 p-8 flex flex-col items-start gap-8`} style={{ animationDelay: `${i * 0.15}s` }}>
              <div className={`size-11 ${f.iconBg} rounded-xl flex items-center justify-center`}>
                <span className={`${f.iconColor} text-lg ${f.iconFont}`}>{f.icon}</span>
              </div>
              <div className="flex flex-col gap-3">
                <h3 className="text-slate-900 text-lg font-bold">{f.title}</h3>
                <p className="text-gray-500 text-sm leading-6">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
