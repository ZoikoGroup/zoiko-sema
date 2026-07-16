"use client";

import React from "react";
import { X, Check } from "lucide-react";

const problems = [
  "Siloed LMS, Chat, and Video tools",
  "Unchecked AI usage across departments",
  "Inconsistent student privacy controls",
];

const solutions = [
  "One ecosystem for all learning activities",
  "Governed AI with human-in-the-loop review",
  "Institutional-grade security & guardian access",
];

export default function WhyChooseSection() {
  return (
    <section className="bg-white px-6 py-12">
      <style>{`
        @keyframes why-rise {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .why-card { animation: why-rise 0.6s cubic-bezier(0.16, 1, 0.3, 1) both; }
        .why-card-left { animation-delay: 0.05s; }
        .why-card-right { animation-delay: 0.18s; }
        .why-row { transition: transform 0.2s ease, background-color 0.2s ease; }
        .why-row:hover { transform: translateX(3px); }
        @media (prefers-reduced-motion: reduce) {
          .why-card, .why-row { animation: none !important; transition: none !important; }
        }
      `}</style>

      <h2 className="text-center text-[32px] font-extrabold tracking-tight text-slate-900 sm:text-[38px]">
        Why Education Teams Choose Zoiko Sema
      </h2>

      <div className="mx-auto mt-14 grid max-w-5xl gap-6 lg:grid-cols-2">
        {/* Problem card */}
        <div className="why-card why-card-left rounded-3xl border border-[#C6C6CE4D] bg-[#F5F3F6] p-8">
          <h3 className="text-[15px] font-medium text-[#46464D]">
            Fragmented Communication
          </h3>

          <div className="mt-6 flex flex-col gap-3">
            {problems.map((item) => (
              <div
                key={item}
                className="why-row flex items-center gap-3 rounded-xl bg-[#FFFFFF80] px-4 py-4"
              >
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border-2 border-[#BA1A1A] text-[#BA1A1A]">
                  <X size={13} strokeWidth={3} />
                </span>
                <span className="text-[15px] font-medium text-[#1B1B1E]">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Solution card */}
        <div className="why-card why-card-right rounded-3xl bg-[#141A32] p-8">
          <h3 className="text-[15px] font-medium text-white">
            Unified Education Workspace
          </h3>

          <div className="mt-6 flex flex-col gap-3">
            {solutions.map((item) => (
              <div
                key={item}
                className="why-row flex items-center gap-3 rounded-xl bg-[#FFFFFF1A] px-4 py-4"
              >
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border-2 border-[#C2C1FF] text-[#C2C1FF]">
                  <Check size={13} strokeWidth={3} />
                </span>
                <span className="text-[15px] font-medium text-white">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
