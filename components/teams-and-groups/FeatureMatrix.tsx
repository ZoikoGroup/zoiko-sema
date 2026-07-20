"use client";

import React from "react";

export default function FeatureMatrix() {
  const tableRows = [
    {
      allowed: "Department, team, location category, worker type",
      prohibited: "Protected traits, health/disability status",
    },
    {
      allowed: "Role, contract status, project, cost center",
      prohibited: "Private communications, screenshots",
    },
    {
      allowed: "Schedule, start/end date",
      prohibited: "Activity score, productivity score",
    },
    {
      allowed: "Approved business attributes, versioned rules",
      prohibited: "Inferred intent, precise continuous location",
    },
    {
      allowed: "Explicit include/exclude exceptions with reason",
      prohibited: "Undisclosed AI inference on membership",
    },
  ];

  return (
    <section className="w-full bg-[#0f1225] text-white px-6 md:px-12 lg:px-16 py-16 md:py-24 flex flex-col items-center justify-center">
      <style
        dangerouslySetInnerHTML={{
          __html: `
            @keyframes fadeUpMatrix {
              from {
                opacity: 0;
                transform: translateY(20px);
              }
              to {
                opacity: 1;
                transform: translateY(0);
              }
            }
            .animate-fade-up-matrix {
              animation: fadeUpMatrix 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
            }
          `,
        }}
      />

      <div className="w-full max-w-6xl mx-auto flex flex-col animate-fade-up-matrix">
        {/* Top Header Section */}
        <div className="w-full mb-10 md:mb-14">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-[10px] tracking-[0.25em] font-extrabold text-[#00e1c6] uppercase">
              07 – DYNAMIC GROUPS
            </span>
          </div>
          <h2 className="text-3xl md:text-[38px] font-bold tracking-tight text-white leading-tight max-w-3xl">
            Rule-based membership — on approved attributes only.
          </h2>
        </div>

        {/* Comparison Matrix Table */}
        <div className="w-full rounded-xl border border-white/10 overflow-hidden bg-[#131730] mb-6">
          {/* Table Headers */}
          <div className="grid grid-cols-1 md:grid-cols-2 border-b border-white/10">
            <div className="px-6 py-4 bg-[#161c3a] md:border-r border-white/10">
              <span className="text-[10px] tracking-[0.15em] font-extrabold text-[#00e1c6] uppercase">
                ALLOWED ATTRIBUTES
              </span>
            </div>
            <div className="px-6 py-4 bg-[#1c1833]">
              <span className="text-[10px] tracking-[0.15em] font-extrabold text-[#ff6b6b] uppercase">
                PROHIBITED ATTRIBUTES
              </span>
            </div>
          </div>

          {/* Table Body Content Rows */}
          <div className="flex flex-col">
            {tableRows.map((row, index) => (
              <div
                key={index}
                className={`grid grid-cols-1 md:grid-cols-2 items-center ${
                  index !== tableRows.length - 1
                    ? "border-b border-white/5"
                    : ""
                }`}
              >
                {/* Allowed Column Cell */}
                <div className="px-6 py-[18px] text-[13px] text-white/90 md:border-r border-white/5 font-medium min-h-[58px] flex items-center">
                  {row.allowed}
                </div>
                {/* Prohibited Column Cell */}
                <div className="px-6 py-[18px] text-[13px] text-white/70 font-medium min-h-[58px] flex items-center">
                  {row.prohibited}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Supporting Description Caption */}
        <p className="text-[12px] text-[#a5a9cc] leading-relaxed max-w-3xl pl-1">
          Every rule shows a live preview — current members, proposed
          additions/removals, unresolved values, and downstream policy impact —
          before activation.
        </p>
      </div>
    </section>
  );
}
