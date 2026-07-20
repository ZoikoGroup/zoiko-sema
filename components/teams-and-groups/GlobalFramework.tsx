"use client";

import React from "react";

export default function GlobalFramework() {
  const steps = [
    {
      num: "01",
      title: "My organization",
      desc: "Primary team, department/business unit, manager(s), approved groups, and effective dates.",
    },
    {
      num: "02",
      title: "Why I am included",
      desc: "Direct, inherited, imported, dynamic-rule, project, or approved-exception membership.",
    },
    {
      num: "03",
      title: "Access purpose",
      desc: "What role/access is assigned for and who can review or change it.",
    },
    {
      num: "04",
      title: "Correction & challenge",
      desc: "Clear request route, acknowledgment, status, and independent escalation.",
    },
  ];

  return (
    <section className="w-full bg-white text-[#0f1124] px-6 md:px-12 lg:px-16 py-16 md:py-24 flex flex-col items-center justify-center">
      <style
        dangerouslySetInnerHTML={{
          __html: `
            @keyframes fadeUpFramework {
              from {
                opacity: 0;
                transform: translateY(20px);
              }
              to {
                opacity: 1;
                transform: translateY(0);
              }
            }
            .animate-fade-up-framework {
              animation: fadeUpFramework 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
            }
          `,
        }}
      />

      <div className="w-full max-w-6xl mx-auto flex flex-col animate-fade-up-framework">
        {/* Top Header Section */}
        <div className="w-full mb-14 md:mb-20">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-[10px] tracking-[0.25em] font-extrabold text-[#008f76] uppercase">
              11 – WORKER TRANSPARENCY
            </span>
          </div>
          <h2 className="text-3xl md:text-[38px] font-bold tracking-tight text-[#0f1124] leading-tight max-w-4xl">
            Every worker sees their own record, notice, and challenge route.
          </h2>
        </div>

        {/* 4-Column Layout Grid with Custom Borders */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-start w-full gap-y-10">
          {steps.map((item, idx) => (
            <div
              key={idx}
              className={`flex flex-col text-start h-full lg:px-6 md:px-4 first:pl-0 last:pr-0 ${
                idx !== 0 ? "lg:border-l border-[#ebedf5]" : ""
              }`}
            >
              {/* Step Index Number */}
              <span className="text-[11px] font-bold text-[#b4b8d7] block mb-3 tracking-wide">
                {item.num}
              </span>

              {/* Feature Title */}
              <h3 className="font-bold text-[#0f1124] text-[15px] block mb-2.5">
                {item.title}
              </h3>

              {/* Descriptive Body Text */}
              <p className="text-[#51567d] text-[13px] leading-relaxed font-medium">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
