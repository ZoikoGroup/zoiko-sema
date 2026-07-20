"use client";

import React from "react";

export default function ViolationReview() {
  const steps = [
    {
      title: "Completeness check",
      desc: "Conflicts, freshness, and supporting evidence are surfaced neutrally.",
    },
    {
      title: "Role scope",
      desc: "Reviewers see only what their role and team scope allow.",
    },
    {
      title: "Separation of duties",
      desc: "Reason, evidence, and audit accompany every review decision.",
    },
  ];

  return (
    <section className="w-full bg-[#F3F2FD] text-[#0f1124] px-6 py-12 md:px-12 md:py-18 flex flex-col items-center justify-center">
      <style
        dangerouslySetInnerHTML={{
          __html: `
            @keyframes fadeUpReview {
              from { opacity: 0; transform: translateY(20px); }
              to { opacity: 1; transform: translateY(0); }
            }
            .animate-fade-up-review {
              animation: fadeUpReview 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
            }
          `,
        }}
      />

      <div className="w-full max-w-6xl mx-auto flex flex-col items-center text-center animate-fade-up-review">
        <span className="text-[10px] tracking-[0.25em] font-extrabold text-[#2b56f5] uppercase mb-3">
          ✦ VERIFY AND REVIEW
        </span>
        <h2 className="text-3xl md:text-[36px] font-bold tracking-tight text-[#0f1124] max-w-4xl leading-tight mb-12">
          No violation label before a human looks at it.
        </h2>

        {/* Split Verification Layout Workspace Terminal */}
        <div className="w-full aspect-[2.3] rounded-3xl overflow-hidden shadow-sm bg-white mb-10 border border-[#ebedf5]">
          <img
            src="/how-it-works/image 5.png"
            alt="Collaborative exception management infrastructure grid"
            className="w-full h-full object-cover"
          />
        </div>

        {/* 3-Column Architecture Matrix */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full text-left">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="bg-white border border-[#ebedf5] rounded-2xl p-6 shadow-[0px_4px_20px_0px_#12132B0D] min-h-[130px]"
            >
              <h4 className="font-extrabold text-[#0f1124] text-[14px] mb-2">
                {step.title}
              </h4>
              <p className="text-[#6b719c] text-[12.5px] leading-relaxed font-medium">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
