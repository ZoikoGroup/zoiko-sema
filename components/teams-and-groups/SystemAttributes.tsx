"use client";

import React from "react";

export default function SystemAttributes() {
  const attributes = [
    {
      label: "Primary manager",
      text: "Exactly one active primary reporting manager unless an approved matrix model is enabled.",
    },
    {
      label: "Secondary manager",
      text: "Separate functional or project authority; does not automatically inherit all worker records.",
    },
    {
      label: "Delegation",
      text: "Named delegate, explicit actions, team scope, start/end, reason, approver, and audit.",
    },
    {
      label: "Conflict of interest",
      text: "Flag self-approval, related-person restrictions, and overlapping reviewer/approver conflicts.",
    },
    {
      label: "Manager change",
      text: "Preview access, approval queues, reports, escalations, delegated actions, and worker notices before effective change.",
    },
    {
      label: "Worker view",
      text: "Worker can see current reporting manager, functional manager, delegated approver, and correction route.",
    },
  ];

  return (
    <section className="w-full bg-white text-[#0f1124] px-6 md:px-12 lg:px-16 py-16 md:py-24 flex flex-col items-center justify-center">
      <style
        dangerouslySetInnerHTML={{
          __html: `
            @keyframes fadeUpAttributes {
              from {
                opacity: 0;
                transform: translateY(20px);
              }
              to {
                opacity: 1;
                transform: translateY(0);
              }
            }
            .animate-fade-up-attributes {
              animation: fadeUpAttributes 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
            }
          `,
        }}
      />

      <div className="w-full max-w-6xl mx-auto flex flex-col animate-fade-up-attributes">
        {/* Top Header Section */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-6 items-baseline mb-12">
          <div className="lg:col-span-8">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-[10px] tracking-[0.25em] font-extrabold text-[#3b4fe4] uppercase">
                06 – MANAGER SCOPE
              </span>
            </div>
            <h2 className="text-3xl md:text-[32px] font-bold tracking-tight text-[#0f1124] leading-tight">
              Who can act, on whose behalf, and until when.
            </h2>
          </div>
          <div className="lg:col-span-4 flex lg:justify-end">
            <p className="text-[12px] md:text-[13px] text-[#51567d] font-medium leading-relaxed max-w-xs lg:text-right">
              Manager access is purpose-limited — not an unrestricted view of
              every worker record.
            </p>
          </div>
        </div>

        {/* Structured Table Rows */}
        <div className="w-full flex flex-col border-t border-[#ebedf5] mb-14">
          {attributes.map((item, index) => (
            <div
              key={index}
              className="grid grid-cols-1 md:grid-cols-12 gap-2 md:gap-6 py-[18px] border-b border-[#ebedf5] items-start"
            >
              {/* Attribute Label */}
              <div className="md:col-span-3 font-bold text-[#3b4fe4] text-[13px]">
                {item.label}
              </div>

              {/* Attribute Description */}
              <div className="md:col-span-9 text-[#51567d] leading-relaxed text-[13px]">
                {item.text}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Dark Block Visual Asset Replacement */}
        <div className="w-full bg-[#0e1126] h-[280px] md:h-[360px] rounded-2xl shadow-inner overflow-hidden flex items-center justify-center">
          {/* Internal asset placeholder mapped frame from original schema */}
          <div className="w-full h-full opacity-40 mix-blend-overlay bg-gradient-to-tr from-[#161b3d] to-[#0e1126]" />
        </div>
      </div>
    </section>
  );
}
