"use client";

import React from "react";
import { useInView } from "@/components/Personal-to-team/useInView";

export function GovernanceControlsSection() {
  const { ref: sectionRef, inView: sectionIn } = useInView(0.2);

  const controls = [
    {
      title: "Role-based visibility",
      desc: "Owners and admins see full controls; team leads manage decisions in assigned spaces."
    },
    {
      title: "Decision approval rules",
      desc: "Require confirmation or sign-off before a decision becomes an official record."
    },
    {
      title: "Sensitive-space exclusions",
      desc: "Exclude legal, HR, executive, and regulated spaces from AI capture."
    },
    {
      title: "Retention policy",
      desc: "Apply retention to decision records, evidence, and audit events."
    },
    {
      title: "Audit log & exports",
      desc: "Track every create, confirm, update, and export \u2014 for permitted roles only."
    },
    {
      title: "Guest access rules",
      desc: "Guests see only the decisions explicitly shared with them."
    }
  ];

  const roles = [
    "Owner",
    "Admin",
    "Team Lead",
    "Security Admin",
    "Compliance Admin",
    "AI Governance Admin",
    "Auditor",
    "Guest (scoped)"
  ];

  return (
    <section className="w-full bg-white py-24 lg:py-32 font-sans antialiased overflow-hidden">
      <div 
        ref={sectionRef} 
        className={`max-w-[1248px] mx-auto px-6 md:px-8 flex flex-col items-center transition-all duration-1000 transform ${sectionIn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
      >
        <span className="text-violet-600 text-xs font-bold uppercase tracking-wide font-['Inter'] mb-6 text-center">
          GOVERNANCE, SECURITY & AUDIT
        </span>
        <h2 className="text-slate-900 text-4xl font-bold font-['Inter'] text-center leading-[1.15] mb-6 max-w-[560px]">
          Controlled, not restrictive.
        </h2>
        <p className="text-slate-400 text-base font-normal font-['Inter'] leading-6 text-center max-w-[660px] mb-20">
          Decision evidence, approval trails, and role-based access &mdash; governance that reads as<br className="hidden md:block"/>confidence, without surveillance.
        </p>

        {/* 3x2 Grid */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {controls.map((control, i) => (
            <div key={i} className="bg-white rounded-2xl p-6 outline outline-1 outline-violet-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="size-8 bg-emerald-50 rounded-[10px] flex items-center justify-center mb-6">
                <span className="text-green-600 text-sm font-bold font-['Inter']">&#10003;</span>
              </div>
              <h3 className="text-slate-900 text-base font-bold font-['Inter'] mb-2">
                {control.title}
              </h3>
              <p className="text-gray-500 text-xs font-normal font-['Inter'] leading-5">
                {control.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Role-based access bar */}
        <div className="w-full bg-[#131538] rounded-2xl p-6 md:p-8 flex flex-col lg:flex-row items-center lg:justify-between gap-8">
          <div className="shrink-0 text-center lg:text-left">
            <span className="text-violet-400 text-xs font-bold tracking-wide uppercase font-['Inter'] mb-2 block">
              ROLE-BASED ACCESS
            </span>
            <h3 className="text-white text-base md:text-lg font-bold font-['Inter'] leading-6 max-w-[200px] mx-auto lg:mx-0">
              Scoped visibility for every role.
            </h3>
          </div>
          
          <div className="flex flex-wrap items-center justify-center lg:justify-end gap-3 w-full">
            {roles.map((role, i) => (
              <div key={i} className="px-4 py-1.5 bg-white/10 rounded-full outline outline-1 outline-violet-400/30">
                <span className="text-violet-200 text-xs font-semibold font-['Inter']">
                  {role}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
