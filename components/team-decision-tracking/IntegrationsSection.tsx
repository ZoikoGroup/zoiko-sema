"use client";

import React from "react";
import { useInView } from "@/components/Personal-to-team/useInView";

export function IntegrationsSection() {
  const { ref: sectionRef, inView: sectionIn } = useInView(0.2);

  const integrations = [
    {
      pill: "CAL",
      pillBg: "bg-sky-50",
      pillText: "text-sky-600",
      title: "Calendar & Meetings",
      desc: "Link decisions to meetings, agendas, summaries, and follow-up reminders."
    },
    {
      pill: "CHT",
      pillBg: "bg-violet-50",
      pillText: "text-violet-600",
      title: "Chat & Channels",
      desc: "Capture decisions from threads, reactions, mentions, and workspace discussions."
    },
    {
      pill: "DOC",
      pillBg: "bg-emerald-50",
      pillText: "text-green-600",
      title: "Files & Docs",
      desc: "Connect decisions to source documents, briefs, approvals, and versions."
    },
    {
      pill: "PM",
      pillBg: "bg-yellow-50",
      pillText: "text-yellow-600",
      title: "Tasks & Project tools",
      desc: "Create or sync follow-up tasks for assigned owners."
    },
    {
      pill: "IDP",
      pillBg: "bg-indigo-50",
      pillText: "text-indigo-600",
      title: "CRM, Identity & Admin",
      desc: "Link client decisions to account context; use SSO, groups, and audit on higher plans."
    }
  ];

  return (
    <section className="w-full bg-white pt-16 pb-24 lg:pt-20 lg:pb-32 font-sans antialiased overflow-hidden">
      <div 
        ref={sectionRef} 
        className={`max-w-[1248px] mx-auto px-6 md:px-8 flex flex-col items-center transition-all duration-1000 transform ${sectionIn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
      >
        <span className="text-violet-600 text-xs font-bold uppercase tracking-wide font-['Inter'] mb-6 text-center">
          INTEGRATIONS & CONNECTED CONTEXT
        </span>
        <h2 className="text-slate-900 text-4xl font-bold font-['Inter'] text-center leading-[1.15] mb-20 max-w-[680px]">
          Decisions stay connected to their<br className="hidden md:block"/>source.
        </h2>

        {/* 3-Column Grid */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {integrations.map((item, i) => (
            <div key={i} className="bg-white rounded-2xl p-[25px] outline outline-1 outline-offset-[-1px] outline-violet-100 shadow-sm flex flex-col">
              <div className={`size-11 rounded-xl flex items-center justify-center ${item.pillBg} mb-[14px]`}>
                <span className={`${item.pillText} text-xs font-bold font-['Inter'] uppercase tracking-tight`}>
                  {item.pill}
                </span>
              </div>
              
              <h3 className="text-slate-900 text-base font-bold font-['Inter'] mb-2">
                {item.title}
              </h3>
              
              <p className="text-gray-500 text-xs font-normal font-['Inter'] leading-5">
                {item.desc}
              </p>
            </div>
          ))}

          {/* Purple Card */}
          <div className="bg-gradient-to-br from-violet-600 to-indigo-800 rounded-2xl p-[25px] shadow-sm flex flex-col justify-center">
            <div>
              <h3 className="text-white text-base font-bold font-['Inter'] mb-2">
                Permission-aware by design.
              </h3>
              <p className="text-violet-200 text-xs font-normal font-['Inter'] leading-5 mb-6">
                Every linked source respects role, workspace, and retention rules.
              </p>
            </div>
            <div className="text-white text-xs font-bold font-['Inter'] hover:text-violet-200 transition-colors cursor-pointer w-fit">
              View integrations &rarr;
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
