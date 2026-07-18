"use client";

import React from "react";

export default function GuidedDemoShell() {
  const metaCards = [
    {
      title: "Stage navigation",
      desc: "Configure, Capture, Verify, Review, Resolve, Prove — completed stages stay viewable.",
    },
    {
      title: "Main product forms",
      desc: "High-fidelity UI with real fields, status markers, and actions parameters.",
    },
    {
      title: "Guidance panel",
      desc: "What is happening, why it matters, who can see, and the privacy boundary context.",
    },
    {
      title: "Source and freshness",
      desc: "Source systems, coverages, last sanitized, and policy versions.",
    },
  ];

  return (
    <section className="w-full bg-[#F3F2FD] text-[#0f1124] px-6 py-12 md:px-12 md:py-18 flex flex-col items-center justify-center">
      <style
        dangerouslySetInnerHTML={{
          __html: `
            @keyframes fadeUpDemo {
              from {
                opacity: 0;
                transform: translateY(20px);
              }
              to {
                opacity: 1;
                transform: translateY(0);
              }
            }
            .animate-fade-up-demo {
              animation: fadeUpDemo 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
            }
          `,
        }}
      />

      <div className="w-full max-w-6xl mx-auto flex flex-col items-center text-center animate-fade-up-demo">
        <div className="flex items-center gap-1.5 mb-3 justify-center">
          <span className="text-[#2b56f5] text-[10px] font-black tracking-widest uppercase">
            ✦ INTERACTIVE GUIDED DEMO SHELL
          </span>
        </div>
        <h2 className="text-3xl md:text-[36px] font-bold tracking-tight text-[#0f1124] max-w-4xl leading-tight mb-12">
          Role-aware product proof with synthetic data — never a promotional
          video.
        </h2>

        {/* Dynamic Sandbox Platform Mock Viewport */}
        <div className="w-full aspect-[2.1] rounded-3xl overflow-hidden shadow-md bg-white border border-[#ebedf5] mb-10">
          <img
            src="/how-it-works/image 3.png"
            alt="Live interactive sandbox deployment dashboard"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Shell Parameter Explanations Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full text-left mb-6">
          {metaCards.map((card, idx) => (
            <div
              key={idx}
              className="bg-white border border-[#ebedf5] rounded-xl p-5 shadow-[0px_4px_20px_0px_#12132B0D]"
            >
              <h4 className="font-extrabold text-[#0f1124] text-[13px] mb-1.5">
                {card.title}
              </h4>
              <p className="text-[#6b719c] text-[12px] leading-relaxed font-medium">
                {card.desc}
              </p>
            </div>
          ))}
        </div>

        <p className="text-xs text-[#9497AB] italic font-semibold tracking-wide">
          The first three stages are free gates inside a form. Governance logic
          is unlocked after launch via product proof.
        </p>
      </div>
    </section>
  );
}
