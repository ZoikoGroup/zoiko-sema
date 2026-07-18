"use client";

import React from "react";

export default function PlatformLifecycle() {
  const steps = [
    {
      num: 1,
      numColor: "#2b56f5",
      title: "Configure",
      desc: "Structures, rules, policies, and notices are defined.",
    },
    {
      num: 2,
      numColor: "#784ce6",
      title: "Capture",
      desc: "Approved signals enter the record with minimum necessary flags.",
    },
    {
      num: 3,
      numColor: "#00e1c6",
      title: "Verify",
      desc: "Completeness, policy mismatches, and freshness are checked.",
    },
    {
      num: 4,
      numColor: "#d97706",
      title: "Review",
      desc: "Authorized people context exceptions and clear validation loops.",
    },
    {
      num: 5,
      numColor: "#ef4444",
      title: "Resolve",
      desc: "Approve, correct, export, clear status, or signoff.",
    },
    {
      num: 6,
      numColor: "#0f1124",
      title: "Prove",
      desc: "Reviews, versions, and audit history/evidence are structured.",
    },
  ];

  return (
    <section className="w-full bg-white text-[#0f1124] px-6 py-12 md:px-12 md:py-18 flex flex-col items-center justify-center">
      <style
        dangerouslySetInnerHTML={{
          __html: `
            @keyframes fadeUpLifecycle {
              from {
                opacity: 0;
                transform: translateY(20px);
              }
              to {
                opacity: 1;
                transform: translateY(0);
              }
            }
            .animate-fade-up-lifecycle {
              animation: fadeUpLifecycle 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
            }
          `,
        }}
      />

      <div className="w-full max-w-6xl mx-auto flex flex-col items-center text-center animate-fade-up-lifecycle">
        <span className="text-[10px] tracking-[0.25em] font-extrabold text-[#784ce6] uppercase mb-3">
          SIX-STAGE PLATFORM LIFECYCLE
        </span>
        <h2 className="text-3xl md:text-[36px] font-bold tracking-tight text-[#0f1124] max-w-4xl leading-tight mb-12">
          Configure, capture, verify, review, resolve, and prove.
        </h2>

        {/* Large Platform Overview Hero Graphic */}
        <div className="w-full aspect-[2.3] rounded-3xl overflow-hidden shadow-sm bg-[#f8f9fd] mb-10 border border-[#ebedf5]">
          <img
            src="/how-it-works/image 2.png"
            alt="Product operation verification collaborative space"
            className="w-full h-full object-cover"
          />
        </div>

        {/* 6-Column Card Matrix */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 w-full text-left">
          {steps.map((step) => (
            <div
              key={step.num}
              className="bg-[#f8f9fd] border-2 border-[#E7E7F2] rounded-[20px] p-5 flex flex-col min-h-[160px]"
            >
              {/* Step indicator tag layout */}
              <div
                className="w-6 h-6 rounded-full flex items-center justify-center text-white font-black text-[11px] mb-4 shadow-sm"
                style={{ backgroundColor: step.numColor }}
              >
                {step.num}
              </div>
              <h4 className="font-extrabold text-[#0f1124] text-[14px] mb-2">
                {step.title}
              </h4>
              <p className="text-[#51567d] text-[12px] leading-relaxed font-medium">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
