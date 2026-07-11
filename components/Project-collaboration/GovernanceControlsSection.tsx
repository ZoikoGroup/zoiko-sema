"use client";

import React from "react";
import { useInView } from "@/components/Personal-to-team/useInView";

export function GovernanceControlsSection() {
  const { ref: headRef, inView: headIn } = useInView(0.2);
  const { ref: contentRef, inView: contentIn } = useInView(0.15);

  const features = [
    { title: "RBAC and roles", desc: "Owner, Admin, Project Lead, Security, Compliance, AI Governance, Integration, and Auditor roles with scoped access." },
    { title: "External access", desc: "Invite clients, contractors, agencies, and partners with project scope, expiry, approval, and revocation." },
    { title: "AI controls", desc: "Enable or disable project summaries by workspace, project type, audience, meeting type, sensitivity, and plan." },
    { title: "Retention", desc: "Apply retention rules for project messages, summaries, files, decision logs, tasks, and audit events." },
    { title: "Audit exports", desc: "Export project activity, decision logs, and evidence packages for permitted roles and plan levels." },
    { title: "Privacy-respecting visibility", desc: "Project visibility, delivery context, and stakeholder alignment \u2014 never employee tracking or activity monitoring." }
  ];

  return (
    <section className="w-full bg-white py-24 lg:py-32 font-sans antialiased overflow-hidden">
      <div className="max-w-[1248px] mx-auto px-6 md:px-10 flex flex-col items-center">

        {/* Header */}
        <div ref={headRef} className={`flex flex-col items-center text-center gap-4 transition-all duration-700 transform ${headIn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <span className="text-violet-600 text-xs font-bold uppercase tracking-widest font-['Inter']">
            GOVERNANCE & CONTROLS
          </span>
          <h2 className="text-slate-900 text-4xl font-bold font-['Inter'] w-[671.33px] max-w-full leading-[1.15]">
            Secure, auditable project collaboration &mdash;<br />without surveillance.
          </h2>
        </div>

        {/* Two Column Layout */}
        <div ref={contentRef} className={`w-full max-w-[1200px] mt-20 flex flex-col xl:flex-row gap-6 items-stretch transition-all duration-1000 transform ${contentIn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}>

          {/* Left Visual */}
          <div className="w-full xl:w-[480px] shrink-0 flex items-center justify-center">
            <img src="/Project/four.png" alt="Security controls" className="w-full max-h-full object-contain" />
          </div>

          {/* Right Features */}
          <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-[24px] w-full">
            {features.map((f, i) => (
              <div key={i} className="w-full h-auto md:h-[144px] bg-white rounded-2xl outline outline-1 outline-offset-[-1px] outline-violet-100 p-[20.8px] flex flex-col justify-start">
                <div className="flex items-center gap-[12px]">
                  <div className="size-7 bg-emerald-50 rounded-lg flex items-center justify-center shrink-0">
                    <span className="text-emerald-600 text-xs font-bold font-['Inter']">✓</span>
                  </div>
                  <h4 className="text-slate-900 text-sm font-bold font-['Inter'] whitespace-nowrap">{f.title}</h4>
                </div>
                <div className="mt-[13.6px]">
                  <p className="text-gray-500 text-xs font-normal font-['Inter'] leading-5">
                    {f.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
