"use client";

import React from "react";
import { useInView } from "./useInView";

export function UsePatternsSection() {
  const { ref: textRef, inView: textIn } = useInView(0.2);
  const { ref: gridRef, inView: gridIn } = useInView(0.1);

  const patterns = [
    {
      from: "Notes", to: "Recap",
      title: "Notes to team recap",
      desc: <>Convert personal meeting notes into a clean, shareable<br/>team update.</>
    },
    {
      from: "Draft", to: "Space",
      title: "Draft to team space",
      desc: <>Turn a proposal, plan, or brief into a shared workspace<br/>with the right members.</>
    },
    {
      from: "Message", to: "Task",
      title: "Saved message to task",
      desc: <>Turn a personal reminder or saved message into an<br/>assigned task with a due date.</>
    },
    {
      from: "List", to: "Board",
      title: "Follow-up list to team board",
      desc: <>Move follow-ups from individual memory into<br/>accountable team action.</>
    },
    {
      from: "Takeaway", to: "Decision",
      title: "Takeaway to decision log",
      desc: <>Promote an important takeaway to a team decision<br/>record with source links.</>
    },
    {
      from: "Client prep", to: "Handoff",
      title: "Solo prep to internal handoff",
      desc: <>Share client-call prep or recap with your internal team<br/>after redaction review.</>
    }
  ];

  return (
    <section className="w-full bg-slate-100 py-20 md:py-24 font-sans antialiased overflow-hidden">
      <div className="max-w-[1248px] mx-auto px-6 md:px-10 flex flex-col items-center gap-14">
        
        <div ref={textRef} className={`ptt-hidden ${textIn ? "ptt-visible" : ""} text-center flex flex-col items-center gap-5`}>
          <span className="text-violet-600 text-xs font-bold uppercase tracking-widest">
            USE PATTERNS
          </span>
          <h2 className="text-slate-900 text-3xl sm:text-4xl font-extrabold leading-tight">
            Built for work that starts with one person<br className="hidden sm:block" />and becomes team.
          </h2>
        </div>

        <div ref={gridRef} className={`ptt-group ${gridIn ? "ptt-group-in" : ""} w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6`}>
          {patterns.map((p, i) => (
            <div key={i} className={`ptt-item ptt-card bg-white rounded-2xl outline outline-1 outline-offset-[-1px] outline-violet-100 p-[24.8px] flex flex-col items-start gap-[15.2px]`} style={{ animationDelay: `${i * 0.1}s` }}>
              <div className="flex items-center gap-[10px]">
                <div className="px-3 py-1 bg-violet-50 rounded-lg flex items-center justify-center">
                  <span className="text-slate-900 text-xs font-bold">{p.from}</span>
                </div>
                <span className="text-violet-600 text-sm font-normal">→</span>
                <div className="px-3 py-1 bg-violet-600 rounded-lg flex items-center justify-center">
                  <span className="text-white text-xs font-bold">{p.to}</span>
                </div>
              </div>
              <div className="flex flex-col gap-[8.6px]">
                <h3 className="text-slate-900 text-base font-bold">{p.title}</h3>
                <p className="text-gray-500 text-sm leading-5">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
