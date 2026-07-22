"use client";

import React from "react";

export default function Hero() {
  return (
    <section
      style={{
        background: `
      radial-gradient(circle at top left, #6B4FF04D 0%, #6B4FF000 60%),
      radial-gradient(circle at bottom right, #503AD78C 0%, #503AD700 60%),
      linear-gradient(180deg, #07091F 0%, #0B0F2D 50%, #0E1238 100%)
    `,
      }}
      className="relative overflow-hidden px-6 py-24 sm:py-28"
    >
      <style>{`
        @keyframes prh-rise {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .prh-rise { animation: prh-rise 0.7s cubic-bezier(0.16, 1, 0.3, 1) both; }
        .prh-rise-1 { animation-delay: 0s; }
        .prh-rise-2 { animation-delay: 0.08s; }
        .prh-rise-3 { animation-delay: 0.16s; }
        .prh-rise-4 { animation-delay: 0.24s; }
        .prh-rise-5 { animation-delay: 0.2s; }
        .prh-btn-primary { transition: transform 0.2s ease, box-shadow 0.2s ease; }
        .prh-btn-primary:hover { transform: translateY(-2px); box-shadow: 0 14px 28px -10px rgba(79, 70, 229, 0.6); }
        .prh-btn-secondary { transition: transform 0.2s ease, background-color 0.2s ease; }
        .prh-btn-secondary:hover { transform: translateY(-2px); background-color: rgba(255,255,255,0.06); }
        @media (prefers-reduced-motion: reduce) {
          .prh-rise, .prh-btn-primary, .prh-btn-secondary { animation: none !important; transition: none !important; }
        }
      `}</style>

      {/* Ambient glow */}
      <div
        className="pointer-events-none absolute -left-40 -top-40 h-[600px] w-[600px] rounded-full opacity-40 blur-[120px]"
        style={{
          background: "radial-gradient(circle, #4338CA 0%, transparent 70%)",
        }}
      />
      <div
        className="pointer-events-none absolute -right-20 top-10 h-[400px] w-[400px] rounded-full opacity-20 blur-[100px]"
        style={{
          background: "radial-gradient(circle, #6366F1 0%, transparent 70%)",
        }}
      />

      <div className="relative mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-2">
        {/* Left: copy */}
        <div>
          <p className="prh-rise prh-rise-1 flex items-center gap-2 text-[13px] font-bold uppercase tracking-widest text-indigo-400">
            <span className="h-1.5 w-1.5 rounded-full bg-indigo-400" />
            Policies &amp; Rules
          </p>

          <h1 className="prh-rise prh-rise-2 mt-5 text-[42px] font-extrabold leading-[1.1] tracking-tight text-white sm:text-[50px]">
            Turn workforce policy
            <br />
            into clear, governed
            <br />
            rules.
          </h1>

          <p className="prh-rise prh-rise-3 mt-6 max-w-lg text-[16px] leading-relaxed text-slate-300">
            Define scope, schedules, thresholds, approvals, exceptions, and
            effective dates in one policy engine — then test impact, publish
            with control, explain outcomes, and retain the evidence.
          </p>

          <div className="prh-rise prh-rise-4 mt-9 flex flex-wrap items-center gap-4">
            <a
              href="/get-a-demo"
              className="prh-btn-primary rounded-full bg-indigo-600 px-8 py-4 text-[15px] font-semibold text-white"
            >
              Request a demo
            </a>
            <a
              href="/privacy"
              className="prh-btn-secondary rounded-full border border-white/20 px-8 py-4 text-[15px] font-semibold text-white"
            >
              Read Privacy Policy
            </a>
          </div>

          <p className="prh-rise prh-rise-5 mt-8 max-w-md text-[13.5px] italic leading-relaxed text-slate-500">
            ZoikoTime executes customer-defined policy logic. Legal,
            contractual, collective, and jurisdictional requirements remain the
            customer&apos;s responsibility to validate.
          </p>
        </div>

        {/* Right: image */}
        <div className="prh-rise prh-rise-2 overflow-hidden rounded-3xl">
          <img
            src="/policies-rules/hero.png"
            alt="image"
            className="block h-[420px] w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
