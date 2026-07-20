"use client";

import React from "react";

const cards = [
  {
    title: "Policy inventory",
    description: "Scope, version, status, owner, and affected population.",
  },
  {
    title: "Conflict queue",
    description: "Overlapping dates, unmapped worker types, unresolved precedence.",
  },
  {
    title: "Upcoming changes",
    description: "Effective date, impacted groups, notice status, and rollback window.",
  },
];

export default function CommandCenterSection() {
  return (
    <section className="bg-gradient-to-b from-[#EFEBFC] to-[#F6F4FD] px-6 py-24">
      <style>{`
        @keyframes cc-rise {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .cc-rise { animation: cc-rise 0.7s cubic-bezier(0.16, 1, 0.3, 1) both; }
        .cc-rise-1 { animation-delay: 0s; }
        .cc-rise-2 { animation-delay: 0.08s; }
        .cc-rise-3 { animation-delay: 0.18s; }
        .cc-card { transition: transform 0.25s ease, box-shadow 0.25s ease; }
        .cc-card:hover { transform: translateY(-4px); box-shadow: 0 20px 40px -18px rgba(15, 23, 42, 0.16); }
        @media (prefers-reduced-motion: reduce) {
          .cc-rise, .cc-card { animation: none !important; transition: none !important; }
        }
      `}</style>

      <div className="mx-auto max-w-3xl text-center">
        <p className="cc-rise cc-rise-1 flex items-center justify-center gap-2 text-[13px] font-bold uppercase tracking-widest text-indigo-600">
          <span className="h-1.5 w-1.5 rounded-full bg-indigo-600" />
          Policies &amp; Rules Command Center
        </p>

        <h2 className="cc-rise cc-rise-2 mt-4 text-[32px] font-extrabold tracking-tight text-[#0F1B3D] sm:text-[38px]">
          Everything in review, at a glance.
        </h2>
      </div>

      <div className="cc-rise cc-rise-3 mx-auto mt-12 max-w-5xl overflow-hidden rounded-3xl">
        <img
          src="/policies-rules/glance.png"
          alt="image"
          className="block h-[380px] w-full object-cover"
        />
      </div>

      <div className="mx-auto mt-8 grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-3">
        {cards.map((c, i) => (
          <div
            key={c.title}
            className="cc-card cc-rise rounded-2xl bg-white p-7 shadow-sm"
            style={{ animationDelay: `${0.26 + i * 0.08}s` }}
          >
            <h3 className="text-[16px] font-bold text-[#0F1B3D]">{c.title}</h3>
            <p className="mt-2 text-[14.5px] leading-relaxed text-slate-500">
              {c.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
