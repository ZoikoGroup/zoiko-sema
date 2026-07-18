"use client";

import React from "react";

export default function DeepDiveSection() {
  const stepsData = [
    {
      num: "1",
      title: "Invite / import",
      desc: "Create through approved invite, HRIS import, SCIM, CSV, API, or manual path; validate authority, identity, duplicates, and source.",
    },
    {
      num: "2",
      title: "Map",
      desc: "Assign primary team, optional groups, manager, role, policy, schedule, cost center, location, approval route, and start date.",
    },
    {
      num: "3",
      title: "Validate",
      desc: "Check missing owner, manager conflict, policy conflict, duplicate membership, inactive object, and prohibited access.",
    },
    {
      num: "4",
      title: "Activate",
      desc: "Show worker notice, manager scope, access, effective date, source, and audit event; no early access before approved start.",
    },
    {
      num: "5",
      title: "Change",
      desc: "Transfer, secondary assignment, temporary group, promotion, manager change, leave, or delegation with impact preview.",
    },
    {
      num: "6",
      title: "Suspend",
      desc: "Temporarily disable access or membership while retaining approved records and explaining effect.",
    },
    {
      num: "7",
      title: "Offboard",
      desc: "Revoke access, end memberships, transfer ownership/approvals, close delegation, retain evidence, and notify owners.",
    },
    {
      num: "8",
      title: "Audit",
      desc: "Every lifecycle transition records actor, source, object, before/after, reason, time, and linked workflow.",
    },
  ];

  return (
    <section className="w-full bg-[#0f132a] text-white px-6 md:px-12 lg:px-16 py-16 md:py-24 flex flex-col items-center justify-center">
      <style
        dangerouslySetInnerHTML={{
          __html: `
            @keyframes fadeUpDeepDive {
              from {
                opacity: 0;
                transform: translateY(20px);
              }
              to {
                opacity: 1;
                transform: translateY(0);
              }
            }
            .animate-fade-up-deepdive {
              animation: fadeUpDeepDive 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
            }
          `,
        }}
      />

      <div className="w-full max-w-6xl mx-auto flex flex-col animate-fade-up-deepdive">
        {/* Header Section */}
        <div className="w-full mb-12 lg:mb-16">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-[10px] tracking-[0.25em] font-extrabold text-[#00e1c6] uppercase">
              05 – MEMBERSHIP LIFECYCLE
            </span>
          </div>
          <h2 className="text-3xl md:text-[38px] font-bold tracking-tight text-white leading-tight max-w-2xl">
            From invite to offboard, every transition is audited.
          </h2>
        </div>

        {/* Content Columns split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start w-full">
          {/* Left Column Timeline Flow */}
          <div className="lg:col-span-7 w-full relative pl-8 space-y-6">
            {/* Visual connecting indicator line */}
            <div className="absolute left-[13px] top-4 bottom-4 w-[1px] bg-white/10" />

            {stepsData.map((step, index) => (
              <div key={index} className="relative group flex flex-col">
                {/* Number Bubble Marker */}
                <div className="absolute -left-[31px] top-0 w-6 h-6 rounded-full border border-white/20 bg-[#0f132a] flex items-center justify-center text-[10px] font-bold text-white/70 group-hover:border-[#00e1c6] transition-colors">
                  {step.num}
                </div>

                {/* Text Context */}
                <div className="pt-0.5">
                  <h3 className="text-[13px] font-bold text-white mb-1 tracking-wide">
                    {step.title}
                  </h3>
                  <p className="text-[11px] text-[#a5a9cc] leading-relaxed max-w-xl">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column Showcase Image */}
          <div className="lg:col-span-5 w-full flex justify-center lg:justify-end lg:sticky lg:top-8">
            <div className="w-full max-w-[420px] rounded-2xl overflow-hidden shadow-2xl border border-white/5">
              <img
                src="/teams-and-groups/membership.png"
                alt="image"
                className="w-full h-auto object-cover rounded-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
