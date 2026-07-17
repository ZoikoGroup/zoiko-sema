"use client";

import React from "react";

const steps = [
  { number: 1, label: "Mandatory jurisdictional requirement", bg: "bg-rose-100", fg: "text-rose-600" },
  { number: 2, label: "Collective or contractual term", bg: "bg-amber-100", fg: "text-amber-700" },
  { number: 3, label: "Organization baseline", bg: "bg-indigo-100", fg: "text-indigo-700" },
  { number: 4, label: "Local, stricter overlay", bg: "bg-emerald-100", fg: "text-emerald-700" },
  { number: 5, label: "Approved individual exception", bg: "bg-slate-200", fg: "text-slate-700" },
];

export default function HierarchyPrecedenceSection() {
  return (
    <section className="bg-white px-6 py-24">
      <style>{`
        @keyframes hp-rise {
          from { opacity: 0; transform: translateY(18px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .hp-rise { animation: hp-rise 0.6s cubic-bezier(0.16, 1, 0.3, 1) both; }
        .hp-row { transition: transform 0.2s ease; }
        .hp-row:hover { transform: translateX(4px); }
        @media (prefers-reduced-motion: reduce) {
          .hp-rise, .hp-row { animation: none !important; transition: none !important; }
        }
      `}</style>

      <div className="mx-auto max-w-3xl text-center">
        <p className="hp-rise flex items-center justify-center gap-2 text-[13px] font-bold uppercase tracking-widest text-indigo-600">
          <span className="h-1.5 w-1.5 rounded-full bg-indigo-600" />
          Hierarchy and Precedence
        </p>

        <h2 className="hp-rise mt-4 text-[32px] font-extrabold leading-tight tracking-tight text-[#0F1B3D] sm:text-[38px]">
          When rules compete, precedence decides
          <br className="hidden sm:block" /> — never a silent merge.
        </h2>
      </div>

      <div className="mx-auto mt-16 max-w-3xl">
        {steps.map((s, i) => (
          <div
            key={s.number}
            className={`hp-row hp-rise flex items-center gap-5 py-5 ${
              i < steps.length - 1 ? "border-b border-slate-100" : ""
            }`}
            style={{ animationDelay: `${i * 0.08}s` }}
          >
            <span
              className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-[14px] font-bold ${s.bg} ${s.fg}`}
            >
              {s.number}
            </span>
            <span className="text-[16px] font-bold text-[#0F1B3D]">{s.label}</span>
          </div>
        ))}
      </div>

      <p className="hp-rise mx-auto mt-10 max-w-3xl text-center text-[15px] italic leading-relaxed text-slate-400">
        If precedence can&apos;t be resolved automatically, the change is
        held for human decision — not resolved silently.
      </p>
    </section>
  );
}
