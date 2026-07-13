"use client";

import React from "react";
import { useInView } from "@/components/Personal-to-team/useInView";

export function GovernanceControlsSection() {
  const { ref: headRef, inView: headIn } = useInView(0.2);
  const { ref: contentRef, inView: contentIn } = useInView(0.15);

  const roles = [
    "Owner", "Admin", "Team Lead", "Security Admin",
    "Compliance Admin", "AI Governance Admin", "Integration Admin", "Auditor"
  ];

  return (
    <section className="w-full bg-slate-50 py-24 lg:py-32 font-sans antialiased overflow-hidden">
      <div className="max-w-[1248px] mx-auto px-6 md:px-10 flex flex-col items-center">
        
        {/* Header */}
        <div ref={headRef} className={`flex flex-col items-center text-center gap-6 w-full max-w-[665px] transition-all duration-700 transform ${headIn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <span className="text-violet-600 text-xs font-bold uppercase tracking-widest font-['Inter']">
            GOVERNANCE & CONTROLS
          </span>
          <h2 className="text-slate-900 text-4xl font-bold font-['Inter']">
            Secure, auditable remote coordination &mdash;<br/>without surveillance.
          </h2>
        </div>

        {/* Two Column Layout */}
        <div ref={contentRef} className={`w-full mt-20 flex flex-col lg:flex-row gap-16 lg:gap-24 items-center lg:items-start transition-all duration-1000 delay-200 transform ${contentIn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}>
          
          {/* Left: Text & Badges */}
          <div className="flex-1 w-full flex flex-col max-w-[480px]">
            <p className="text-gray-500 text-base font-normal font-['Inter'] leading-6 mb-10">
              Admins decide exactly how coordination data is summarized, shared, retained, and audited &mdash; scoped by role and by workspace.
            </p>
            
            <span className="text-slate-400 text-xs font-bold tracking-widest uppercase font-['Inter'] mb-6">
              ROLE-BASED ACCESS
            </span>
            
            <div className="flex flex-wrap gap-3 mb-10">
              {roles.map((role, i) => (
                <div key={i} className="px-4 py-1.5 bg-violet-50 rounded-full">
                  <span className="text-indigo-800 text-xs font-semibold font-['Inter']">{role}</span>
                </div>
              ))}
            </div>

            <div className="flex items-center gap-8">
              <div className="flex items-center gap-2">
                <span className="text-emerald-600 text-xs font-semibold">✓</span>
                <span className="text-slate-500 text-xs font-semibold font-['Inter']">SSO · MFA · SCIM</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-emerald-600 text-xs font-semibold">✓</span>
                <span className="text-slate-500 text-xs font-semibold font-['Inter']">WCAG 2.2 AA</span>
              </div>
            </div>
          </div>

          {/* Right: Mockup Panel */}
          <div className="w-full lg:w-[647px] bg-white rounded-[20px] shadow-[0px_30px_64px_-34px_rgba(20,22,60,0.20)] outline outline-1 outline-slate-100 overflow-hidden shrink-0">
            {/* Panel Header */}
            <div className="w-full h-14 bg-gray-50 border-b border-gray-100 flex items-center justify-between px-6">
              <span className="text-slate-900 text-base font-bold font-['Inter']">Coordination controls</span>
              <div className="h-5 px-2.5 flex items-center justify-center bg-violet-100 rounded-[10px]">
                <span className="text-violet-600 text-xs font-bold font-['Inter'] leading-3">Admin console</span>
              </div>
            </div>
            
            {/* Panel Items */}
            <div className="px-6 py-4">
              
              <div className="py-4 border-b border-slate-100 flex items-center justify-between">
                <div>
                  <h4 className="text-slate-900 text-sm font-bold font-['Inter'] mb-1">AI coordination summaries</h4>
                  <p className="text-slate-400 text-xs font-normal font-['Inter']">Scoped by workspace, audience, meeting type, and sensitivity.</p>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-green-600 text-xs font-bold font-['Inter']">Enabled</span>
                  <div className="w-10 h-6 bg-violet-600 rounded-full relative">
                    <div className="size-5 bg-white rounded-full absolute right-0.5 top-0.5 shadow-sm"></div>
                  </div>
                </div>
              </div>

              <div className="py-4 border-b border-slate-100 flex items-center justify-between">
                <div>
                  <h4 className="text-slate-900 text-sm font-bold font-['Inter'] mb-1">External guest access</h4>
                  <p className="text-slate-400 text-xs font-normal font-['Inter']">Invite partners with scope, expiry, approval, and revocation.</p>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-green-600 text-xs font-bold font-['Inter']">Enabled</span>
                  <div className="w-10 h-6 bg-violet-600 rounded-full relative">
                    <div className="size-5 bg-white rounded-full absolute right-0.5 top-0.5 shadow-sm"></div>
                  </div>
                </div>
              </div>

              <div className="py-4 border-b border-slate-100 flex items-center justify-between">
                <div>
                  <h4 className="text-slate-900 text-sm font-bold font-['Inter'] mb-1">Retention rules</h4>
                  <p className="text-slate-400 text-xs font-normal font-['Inter']">Messages, summaries, files, handoff records, and audit events.</p>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-green-600 text-xs font-bold font-['Inter']">Enabled</span>
                  <div className="w-10 h-6 bg-violet-600 rounded-full relative">
                    <div className="size-5 bg-white rounded-full absolute right-0.5 top-0.5 shadow-sm"></div>
                  </div>
                </div>
              </div>

              <div className="py-4 border-b border-slate-100 flex items-center justify-between">
                <div>
                  <h4 className="text-slate-900 text-sm font-bold font-['Inter'] mb-1">Sensitive-space exclusions</h4>
                  <p className="text-slate-400 text-xs font-normal font-['Inter']">Exclude flagged spaces from AI summaries automatically.</p>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-green-600 text-xs font-bold font-['Inter']">Enabled</span>
                  <div className="w-10 h-6 bg-violet-600 rounded-full relative">
                    <div className="size-5 bg-white rounded-full absolute right-0.5 top-0.5 shadow-sm"></div>
                  </div>
                </div>
              </div>

              <div className="py-4 flex items-center justify-between">
                <div>
                  <h4 className="text-slate-900 text-sm font-bold font-['Inter'] mb-1">Audit exports</h4>
                  <p className="text-slate-400 text-xs font-normal font-['Inter']">Available to permitted roles and plan levels only.</p>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-slate-400 text-xs font-bold font-['Inter']">Admin only</span>
                  <div className="w-10 h-6 bg-slate-300 rounded-full relative">
                    <div className="size-5 bg-white rounded-full absolute left-0.5 top-0.5 shadow-sm"></div>
                  </div>
                </div>
              </div>

              <button className="w-full h-10 mt-2 bg-violet-600 rounded-xl text-white text-xs font-bold font-['Inter'] hover:bg-violet-700 transition-colors">
                Export coordination activity
              </button>
              <p className="text-slate-400 text-[11px] font-normal font-['Inter'] text-center mt-3 mb-1">
                Overlap windows & team coverage &mdash; never employee tracking.
              </p>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
