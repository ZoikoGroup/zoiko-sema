"use client";

import React from "react";

const points = [
  {
    title: "Consistency",
    description:
      "One rule set applies the same way across every team and location it covers.",
  },
  {
    title: "Tested before it's live",
    description:
      "Every change is simulated against real scenarios before it reaches production.",
  },
  {
    title: "Transparent by default",
    description:
      "People affected by a policy can see it, understand it, and challenge it.",
  },
];

export default function WhyItMatters() {
  return (
    <section className="bg-white px-6 py-24">
      <style>{`
        @keyframes wim-rise {
          from { opacity: 0; transform: translateY(18px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .wim-rise { animation: wim-rise 0.6s cubic-bezier(0.16, 1, 0.3, 1) both; }
        .wim-col-1 { animation-delay: 0.05s; }
        .wim-col-2 { animation-delay: 0.15s; }
        .wim-col-3 { animation-delay: 0.25s; }
        @media (prefers-reduced-motion: reduce) {
          .wim-rise { animation: none !important; }
        }
      `}</style>

      <div className="mx-auto max-w-3xl text-center">
        <p className="wim-rise flex items-center justify-center gap-2 text-[13px] font-bold uppercase tracking-widest text-indigo-600">
          <span className="h-1.5 w-1.5 rounded-full bg-indigo-600" />
          Why It Matters
        </p>

        <h2 className="wim-rise mt-4 text-[32px] font-extrabold leading-tight tracking-tight text-[#0F1B3D] sm:text-[38px]">
          Consistent rules. Fewer errors. Nothing
          <br className="hidden sm:block" /> published in the dark.
        </h2>
      </div>

      <div className="mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-12 sm:grid-cols-3">
        {points.map((p, i) => (
          <div
            key={p.title}
            className={`wim-rise wim-col-${i + 1} text-center`}
          >
            <h3 className="text-[17px] font-bold text-[#0F1B3D]">{p.title}</h3>
            <p className="mx-auto mt-3 max-w-[260px] text-[15px] leading-relaxed text-slate-500">
              {p.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
