"use client";

import React from "react";

export default function SystemIntegrity() {
  const integrations = [
    {
      label: "HRIS / HCM",
      detail: "Identity, manager, employment type",
      color: "#4cc3be",
    },
    {
      label: "Identity / directory",
      detail: "SSO, MFA, SCIM, identity group",
      color: "#4cc3be",
    },
    {
      label: "Payroll",
      detail: "Pay group, cost center, locked period",
      color: "#cf7a29",
    },
    {
      label: "Scheduling",
      detail: "Shift teams, availability",
      color: "#4cc3be",
    },
    {
      label: "Zoiko Sema",
      detail: "Workspaces, notices, implementation groups",
      color: "#4cc3be",
    },
    {
      label: "APIs / webhooks",
      detail: "Structural change and audit events",
      color: "#9296b4",
    },
  ];

  const audits = [
    {
      label: "Method",
      detail:
        "Numerator, denominator, population, and exclusions shown for every figure.",
    },
    {
      label: "Coverage",
      detail:
        "Source completeness and any partial or delayed data are disclosed inline.",
    },
    {
      label: "Exports",
      detail:
        "Permission-gated exports with reviewer, timestamp, and integrity metadata.",
    },
    {
      label: "Audit trail",
      detail:
        "Policy version, decision rationale, and challenge outcomes retained for review.",
    },
  ];

  return (
    <section className="w-full bg-[#F8F9FC] text-[#0f1124] px-6 md:px-12 lg:px-16 py-16 md:py-24 flex flex-col items-center justify-center">
      <style
        dangerouslySetInnerHTML={{
          __html: `
            @keyframes fadeUpIntegrity {
              from {
                opacity: 0;
                transform: translateY(20px);
              }
              to {
                opacity: 1;
                transform: translateY(0);
              }
            }
            .animate-fade-up-integrity {
              animation: fadeUpIntegrity 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
            }
          `,
        }}
      />

      <div className="w-full max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 animate-fade-up-integrity">
        {/* Left Column: Integrations */}
        <div className="flex flex-col w-full">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-[10px] tracking-[0.25em] font-extrabold text-[#3b4fe4] uppercase">
              13 – INTEGRATIONS
            </span>
          </div>
          <h2 className="text-3xl md:text-[36px] font-bold tracking-tight text-[#0f1124] leading-tight mb-8">
            Systems of record stay authoritative.
          </h2>

          <div className="flex flex-col w-full border-t border-[#ebedf5]">
            {integrations.map((item, idx) => (
              <div
                key={idx}
                className="flex items-center justify-between py-4 border-b border-[#ebedf5] text-[13px]"
              >
                <div className="flex items-center gap-3 font-bold text-[#0f1124]">
                  <span
                    className="w-2 h-2 rounded-full inline-block shrink-0"
                    style={{ backgroundColor: item.color }}
                  />
                  {item.label}
                </div>
                <div className="text-[#6b719c] text-right font-medium pl-4">
                  {item.detail}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Reporting & Audit */}
        <div className="flex flex-col w-full">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-[10px] tracking-[0.25em] font-extrabold text-[#3b4fe4] uppercase">
              — REPORTING & AUDIT
            </span>
          </div>
          <h2 className="text-3xl md:text-[36px] font-bold tracking-tight text-[#0f1124] leading-tight mb-8">
            Every figure ships with its method.
          </h2>

          <div className="flex flex-col w-full border-t border-[#ebedf5]">
            {audits.map((item, idx) => (
              <div
                key={idx}
                className="py-4.5 border-b border-[#ebedf5] text-[13px] leading-relaxed"
              >
                <span className="font-bold text-[#0f1124]">{item.label}: </span>
                <span className="text-[#51567d] font-medium">
                  {item.detail}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
