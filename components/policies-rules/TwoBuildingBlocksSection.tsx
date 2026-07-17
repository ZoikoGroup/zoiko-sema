"use client";

import React from "react";

const blocks = [
  {
    tag: "Policy",
    tagTone: "bg-indigo-100 text-indigo-700",
    title: "Purpose, ownership, scope",
    description:
      "Why it exists, who owns it, which population it covers, when it takes effect, and who approved it.",
  },
  {
    tag: "Rule",
    tagTone: "bg-emerald-100 text-emerald-700",
    title: "Trigger, condition, outcome",
    description:
      "What event starts it, what conditions apply, what threshold matters, and what happens as a result.",
  },
];

export default function TwoBuildingBlocksSection() {
  return (
    <section className="bg-gradient-to-b from-[#EFEBFC] to-[#F6F4FD] px-6 py-24">
      <style>{`
        @keyframes tbb-rise {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .tbb-rise { animation: tbb-rise 0.7s cubic-bezier(0.16, 1, 0.3, 1) both; }
        .tbb-rise-1 { animation-delay: 0s; }
        .tbb-rise-2 { animation-delay: 0.08s; }
        .tbb-rise-3 { animation-delay: 0.18s; }
        .tbb-rise-4 { animation-delay: 0.26s; }
        .tbb-rise-5 { animation-delay: 0.34s; }
        .tbb-card { transition: transform 0.25s ease, box-shadow 0.25s ease; }
        .tbb-card:hover { transform: translateY(-4px); box-shadow: 0 20px 40px -18px rgba(15, 23, 42, 0.16); }
        @media (prefers-reduced-motion: reduce) {
          .tbb-rise, .tbb-card { animation: none !important; transition: none !important; }
        }
      `}</style>

      <div className="mx-auto max-w-3xl text-center">
        <p className="tbb-rise tbb-rise-1 flex items-center justify-center gap-2 text-[13px] font-bold uppercase tracking-widest text-indigo-600">
          <span className="h-1.5 w-1.5 rounded-full bg-indigo-600" />
          Two Building Blocks
        </p>

        <h2 className="tbb-rise tbb-rise-2 mt-4 text-[32px] font-extrabold tracking-tight text-[#0F1B3D] sm:text-[38px]">
          A policy has intent. A rule has logic.
        </h2>
      </div>

      <div className="tbb-rise tbb-rise-3 mx-auto mt-12 max-w-5xl overflow-hidden rounded-3xl">
        <img
          src="/policies-rules/blocks.png"
          alt="image"
          className="block h-[340px] w-full object-cover"
        />
      </div>

      <div className="mx-auto mt-8 grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2">
        {blocks.map((b, i) => (
          <div
            key={b.tag}
            className={`tbb-card tbb-rise ${
              i === 0 ? "tbb-rise-4" : "tbb-rise-5"
            } rounded-2xl bg-white p-8 shadow-sm`}
          >
            <span
              className={`inline-flex rounded-full px-3.5 py-1 text-[12.5px] font-semibold ${b.tagTone}`}
            >
              {b.tag}
            </span>
            <h3 className="mt-4 text-[18px] font-bold text-[#0F1B3D]">
              {b.title}
            </h3>
            <p className="mt-2 text-[14.5px] leading-relaxed text-slate-500">
              {b.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
