"use client";

import React from "react";
import { useInView } from "./useInView";

export function IntegrationsEcosystemSection() {
  const { ref: textRef, inView: textIn } = useInView(0.2);
  const { ref: gridRef, inView: gridIn } = useInView(0.1);

  const integrations = [
    {
      badge: "CAL", badgeBg: "bg-sky-100", badgeText: "text-sky-700",
      title: "Calendar",
      tools: "Google Calendar · Outlook · Zoiko Calendar",
      desc: <>Turn meeting prep, notes, and recaps into team-ready<br/>context.</>
    },
    {
      badge: "STO", badgeBg: "bg-emerald-50", badgeText: "text-green-600",
      title: "Storage",
      tools: "Google Drive · OneDrive · SharePoint · Box",
      desc: <>Attach files safely during share review and preserve file<br/>context.</>
    },
    {
      badge: "TSK", badgeBg: "bg-violet-100", badgeText: "text-violet-600",
      title: "Tasks & project tools",
      tools: "Asana · Jira · Trello · Linear · Zoiko Tasks",
      desc: "Move approved follow-ups into the right execution system."
    },
    {
      badge: "CRM", badgeBg: "bg-yellow-50", badgeText: "text-yellow-600",
      title: "CRM & client systems",
      tools: "Salesforce · HubSpot · Zoiko CRM",
      desc: <>Share client context with internal teams while protecting<br/>sensitive details.</>
    },
    {
      badge: "IDP", badgeBg: "bg-violet-100", badgeText: "text-indigo-800",
      title: "Identity & access",
      tools: "SSO · SCIM · Okta · Entra ID · Google",
      desc: "Govern team expansion, user lifecycle, roles, and permissions."
    },
    {
      badge: "ZK", badgeBg: "bg-violet-100", badgeText: "text-violet-600",
      title: "Zoiko ecosystem",
      tools: "ZoikoTime · ZoikoID · Zoiko Cloud · ZoikoVertex",
      desc: <>Support governed context, identity, storage, and enterprise<br/>expansion.</>
    }
  ];

  return (
    <section className="w-full bg-slate-100 py-20 md:py-24 font-sans antialiased overflow-hidden">
      <div className="max-w-[1248px] mx-auto px-6 md:px-10 flex flex-col items-center gap-14">
        
        <div ref={textRef} className={`ptt-hidden ${textIn ? "ptt-visible" : ""} text-center flex flex-col items-center gap-5`}>
          <span className="text-violet-600 text-xs font-bold uppercase tracking-widest">
            INTEGRATIONS &amp; ECOSYSTEM
          </span>
          <h2 className="text-slate-900 text-3xl sm:text-4xl font-extrabold leading-tight">
            Keep work continuous across the tools<br className="hidden sm:block" />you already use.
          </h2>
        </div>

        <div ref={gridRef} className={`ptt-group ${gridIn ? "ptt-group-in" : ""} w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6`}>
          {integrations.map((item, i) => (
            <div key={i} className={`ptt-item ptt-card bg-white rounded-2xl outline outline-1 outline-offset-[-1px] outline-violet-100 p-[22.8px] flex flex-col items-start`} style={{ animationDelay: `${i * 0.1}s` }}>
              <div className="flex items-center gap-3 mb-3">
                <div className={`size-9 ${item.badgeBg} rounded-xl flex items-center justify-center shrink-0`}>
                  <span className={`${item.badgeText} text-xs font-bold`}>{item.badge}</span>
                </div>
                <h3 className="text-slate-900 text-base font-bold">{item.title}</h3>
              </div>
              <p className="text-slate-400 text-xs font-semibold mb-2">{item.tools}</p>
              <p className="text-gray-500 text-xs leading-5">{item.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
