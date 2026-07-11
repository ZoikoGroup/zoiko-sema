"use client";

import React from "react";
import { useInView } from "./useInView";

export function GovernanceControlsSection() {
  const { ref: textRef, inView: textIn } = useInView(0.2);
  const { ref: gridRef, inView: gridIn } = useInView(0.1);

  const controls = [
    {
      title: "Private-by-default capture",
      desc: <>Personal notes, drafts, saved messages, and AI<br/>suggestions remain private until intentionally<br/>shared.</>
    },
    {
      title: "Share review panel",
      desc: <>Review recipients, workspace, redactions,<br/>attachments, owners, and sensitivity before<br/>publishing.</>
    },
    {
      title: "Audience and role scope",
      desc: <>Choose team, client, project, or department<br/>visibility with role-based access and expiry rules.</>
    },
    {
      title: "AI handoff controls",
      desc: <>Control whether AI can summarize personal<br/>context, propose tasks, or draft team-ready<br/>updates.</>
    },
    {
      title: "Source context preservation",
      desc: <>Keep links back to meetings, messages, files,<br/>and decisions without exposing private notes.</>
    },
    {
      title: "Audit and rollback",
      desc: <>Record share events, ownership changes, and<br/>exports — and correct shared context when<br/>needed.</>
    }
  ];

  return (
    <section className="w-full bg-white py-20 md:py-24 font-sans antialiased">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 flex flex-col items-center gap-14">
        
        <div ref={textRef} className={`ptt-hidden ${textIn ? "ptt-visible" : ""} text-center flex flex-col items-center gap-5`}>
          <span className="text-violet-600 text-xs font-bold uppercase tracking-widest">
            GOVERNANCE &amp; CONTROLS
          </span>
          <h2 className="text-slate-900 text-3xl sm:text-4xl font-extrabold leading-tight">
            Controls that protect private work while<br className="hidden sm:block" />making handoff accountable.
          </h2>
        </div>

        <div ref={gridRef} className={`ptt-group ${gridIn ? "ptt-group-in" : ""} w-full flex flex-col xl:flex-row items-stretch justify-center gap-10 xl:gap-[60px]`}>
          
          {/* Left Side: Cards */}
          <div className="w-full max-w-[700px] grid grid-cols-1 md:grid-cols-2 gap-[24px]">
            {controls.map((c, i) => (
              <div key={i} className={`ptt-item ptt-card bg-white rounded-2xl outline outline-1 outline-offset-[-1px] outline-violet-100 p-[20.8px] flex flex-col items-start gap-[13.6px]`} style={{ animationDelay: `${i * 0.1}s` }}>
                <div className="flex items-center gap-[12px]">
                  <div className="size-7 bg-emerald-50 rounded-lg flex items-center justify-center shrink-0">
                    <span className="text-green-600 text-xs font-bold">✓</span>
                  </div>
                  <h3 className="text-slate-900 text-sm font-bold">{c.title}</h3>
                </div>
                <p className="text-gray-500 text-xs leading-5">{c.desc}</p>
              </div>
            ))}
          </div>

          {/* Right Side: Image */}
          <div className="w-full xl:w-[531px] shrink-0">
            <img src="/Personal/three.png" alt="Governance &amp; Controls" className="w-full h-full object-cover rounded-3xl" />
          </div>

        </div>

      </div>
    </section>
  );
}
