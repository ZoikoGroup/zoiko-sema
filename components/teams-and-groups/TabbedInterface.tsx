"use client";

import React from "react";

export default function TabbedInterface() {
  const steps = [
    "Organization",
    "Department / jurisdiction",
    "Team",
    "Approved exception",
    "Effective setting",
  ];

  const badgesRow1 = [
    { label: "Policies", detail: "Org baseline · department override" },
    { label: "Schedules", detail: "Team schedule · role variance" },
    { label: "Approvals", detail: "Team manager · delegate" },
  ];

  const badgesRow2 = [
    { label: "Cost center", detail: "Finance source · project alloc." },
    { label: "Access", detail: "Role + group · expiry" },
    { label: "Retention", detail: "Org rule · legal hold" },
  ];

  return (
    <section className="w-full bg-[#F8F9FC] text-[#0f1124] px-6 md:px-12 lg:px-16 py-16 md:py-24 flex flex-col items-center justify-center">
      <style
        dangerouslySetInnerHTML={{
          __html: `
            @keyframes fadeUpInheritance {
              from {
                opacity: 0;
                transform: translateY(20px);
              }
              to {
                opacity: 1;
                transform: translateY(0);
              }
            }
            .animate-fade-up-inheritance {
              animation: fadeUpInheritance 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
            }
          `,
        }}
      />

      <div className="w-full max-w-6xl mx-auto flex flex-col animate-fade-up-inheritance">
        {/* Header Block */}
        <div className="w-full mb-12">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-[10px] tracking-[0.25em] font-extrabold text-[#3b4fe4] uppercase">
              08 – POLICY & ACCESS INHERITANCE
            </span>
          </div>
          <h2 className="text-3xl md:text-[36px] font-bold tracking-tight text-[#0f1124] leading-tight">
            Every setting resolves to one clearly labeled outcome.
          </h2>
        </div>

        {/* Horizontal Flow Arrow Steps */}
        <div className="w-full flex flex-wrap items-center gap-3 mb-10 bg-transparent">
          {steps.map((step, idx) => (
            <React.Fragment key={idx}>
              <div className="flex-1 min-w-[170px] bg-white border border-[#eef1f8] rounded-xl py-5 px-6 text-center shadow-sm">
                <span className="text-[13px] font-bold text-[#0f1124]">
                  {step}
                </span>
              </div>
              {idx < steps.length - 1 && (
                <div className="text-[#a2a7cb] font-normal text-md px-1 flex items-center justify-center">
                  →
                </div>
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Dynamic Badges Showcase Rows */}
        <div className="w-full flex flex-col gap-4 items-start">
          {/* Row 1 */}
          <div className="flex flex-wrap gap-4 items-center">
            {badgesRow1.map((badge, idx) => (
              <div
                key={idx}
                className="bg-white border border-[#eef1f8] rounded-xl px-5 py-3.5 shadow-sm text-[12px]"
              >
                <span className="text-[#6b719c]">{badge.label}: </span>
                <span className="font-bold text-[#0f1124]">{badge.detail}</span>
              </div>
            ))}
          </div>

          {/* Row 2 */}
          <div className="flex flex-wrap gap-4 items-center">
            {badgesRow2.map((badge, idx) => (
              <div
                key={idx}
                className="bg-white border border-[#eef1f8] rounded-xl px-5 py-3.5 shadow-sm text-[12px]"
              >
                <span className="text-[#6b719c]">{badge.label}: </span>
                <span className="font-bold text-[#0f1124]">{badge.detail}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
