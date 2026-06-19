"use client";

import React, { useEffect, useState, useRef } from "react";

function useInView(threshold = 0.1) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setInView(true); obs.disconnect(); } },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, inView };
}

export default function ResourcesFeaturedSection() {
  const { ref: secRef, inView: secIn } = useInView(0.08);

  return (
    <>
      <style>{`
        @keyframes rfFadeUp {
          from { opacity:0; transform:translateY(24px); }
          to   { opacity:1; transform:translateY(0); }
        }

        /* card entrances */
        .rf-left  { opacity:0; transform:translateY(24px); }
        .rf-right1 { opacity:0; transform:translateY(24px); }
        .rf-right2 { opacity:0; transform:translateY(24px); }

        .rf-in .rf-left  { animation: rfFadeUp .58s cubic-bezier(.22,1,.36,1) .04s forwards; }
        .rf-in .rf-right1 { animation: rfFadeUp .58s cubic-bezier(.22,1,.36,1) .14s forwards; }
        .rf-in .rf-right2 { animation: rfFadeUp .58s cubic-bezier(.22,1,.36,1) .24s forwards; }

        /* card hover */
        .rf-card { transition: transform .28s ease, box-shadow .28s ease; }
        .rf-card:hover { transform: translateY(-4px); box-shadow: 0 16px 40px rgba(71,71,135,0.10) !important; }

        /* CTA link */
        .rf-cta { transition: gap .2s ease; display:inline-flex; align-items:center; gap:6px; }
        .rf-cta:hover { gap:10px; }
        .rf-arrow { display:inline-block; transition:transform .2s ease; }
        .rf-cta:hover .rf-arrow { transform:translateX(3px); }

        @media (prefers-reduced-motion:reduce) {
          .rf-left,.rf-right1,.rf-right2 { opacity:1!important; transform:none!important; animation:none!important; }
          .rf-card:hover { transform:none; }
        }
      `}</style>

      <section
        aria-label="Featured resources"
        className="w-full bg-white py-16 md:py-20"
      >
        <div
          ref={secRef}
          className={`mx-auto w-full max-w-7xl px-6 md:px-10 lg:px-16 grid grid-cols-1 lg:grid-cols-2 gap-5 items-stretch ${secIn ? "rf-in" : ""}`}
        >

          {/* ── LEFT — large featured card ── */}
          <div
            className="rf-left rf-card flex flex-col rounded-2xl p-8 md:p-10 h-full"
            style={{
              background: "#EEF2FF",
              border: "1px solid #e0e7ff",
              boxShadow: "0 2px 16px rgba(71,71,135,0.06)",
              minHeight: 360,
            }}
          >
            {/* Badge */}
            <span
              className="inline-flex w-fit mb-6 px-3 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-[0.14em] text-white"
              style={{ background: "#474787" }}
            >
              Guide
            </span>

            {/* Title */}
            <h2
              className="font-bold leading-[1.18] tracking-tight text-gray-900 mb-5"
              style={{ fontSize: "clamp(22px,2.8vw,32px)" }}
            >
              The Sema Guide to Turning<br />
              Conversations into{" "}
              <em
                className="not-italic italic font-bold"
                style={{ fontFamily: "Georgia, serif", color: "#474787" }}
              >
                Action
              </em>
            </h2>

            {/* Desc */}
            <p className="text-[14.5px] leading-[1.8] text-gray-500 mb-auto">
              Learn how meetings, client calls, team discussions, and follow-ups become clearer
              when communication is structured around decisions, summaries, and next steps.
              A practical playbook for teams that want fewer rerun meetings and more
              accountable execution.
            </p>

            {/* CTA */}
            <a
              href="#guide"
              className="rf-cta mt-10 text-[14px] font-semibold"
              style={{ color: "#474787" }}
            >
              Read the guide
              <span className="rf-arrow" aria-hidden="true">→</span>
            </a>
          </div>

          {/* ── RIGHT — 2 stacked cards ── */}
          <div className="flex flex-col gap-5">

            {/* Card 1 — Product Guide */}
            <div
              className="rf-right1 rf-card flex flex-col rounded-2xl p-7 flex-1"
              style={{
                background: "#fff",
                border: "1px solid #e5e7eb",
                boxShadow: "0 2px 16px rgba(71,71,135,0.06)",
              }}
            >
              {/* Badge */}
              <span
                className="inline-flex w-fit mb-4 px-3 py-1.5 rounded-full text-[11px] font-semibold uppercase tracking-[0.13em] border"
                style={{ borderColor: "#d1d5db", color: "#374151", background: "#fff" }}
              >
                Product Guide
              </span>

              <h3 className="text-[18px] font-bold leading-snug text-gray-900 mb-3">
                How Sema AI Summaries Work
              </h3>

              <p className="text-[14px] leading-[1.75] text-gray-500 mb-6 flex-1">
                Understand how Sema captures context, summarizes discussions, highlights
                decisions, and helps teams follow through.
              </p>

              <a
                href="#ai-summaries"
                className="rf-cta text-[14px] font-semibold"
                style={{ color: "#474787" }}
              >
                Read more
                <span className="rf-arrow" aria-hidden="true">→</span>
              </a>
            </div>

            {/* Card 2 — Integration Guide */}
            <div
              className="rf-right2 rf-card flex flex-col rounded-2xl p-7 flex-1"
              style={{
                background: "#fff",
                border: "1px solid #e5e7eb",
                boxShadow: "0 2px 16px rgba(71,71,135,0.06)",
              }}
            >
              {/* Badge */}
              <span
                className="inline-flex w-fit mb-4 px-3 py-1.5 rounded-full text-[11px] font-semibold uppercase tracking-[0.13em] border"
                style={{ borderColor: "#d1d5db", color: "#374151", background: "#fff" }}
              >
                Integration Guide
              </span>

              <h3 className="text-[18px] font-bold leading-snug text-gray-900 mb-3">
                How Sema Connects with ZoikoTime
              </h3>

              <p className="text-[14px] leading-[1.75] text-gray-500 mb-6 flex-1">
                See how governed communication context can connect with workforce truth,
                billing integrity, and verified work activity.
              </p>

              <a
                href="#zoikotime-integration"
                className="rf-cta text-[14px] font-semibold"
                style={{ color: "#474787" }}
              >
                Read more
                <span className="rf-arrow" aria-hidden="true">→</span>
              </a>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}