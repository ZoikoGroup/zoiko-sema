"use client";

import React, { useEffect, useRef, useState } from "react";

/** Same scroll-reveal hook used across the other sections/pages. */
function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          obs.disconnect();
        }
      },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, inView };
}

const BRAND = "#3457E8";

export default function SemaAiActionReviewSection() {
  const { ref: headRef, inView: headIn } = useInView(0.3);
  const { ref: cardRef, inView: cardIn } = useInView(0.15);

  return (
    <>
      <style>{`
        @keyframes saarFadeUp {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes saarFadeIn {
          from { opacity: 0; transform: translateY(32px) scale(.98); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }
        .saar-hidden  { opacity: 0; transform: translateY(28px); }
        .saar-visible { animation: saarFadeUp .6s cubic-bezier(.22,1,.36,1) forwards; }

        .saar-card-hidden  { opacity: 0; transform: translateY(32px) scale(.98); }
        .saar-card-visible { animation: saarFadeIn .7s cubic-bezier(.22,1,.36,1) forwards; }

        .saar-btn-primary {
          background: ${BRAND};
          transition: transform .2s ease, box-shadow .2s ease, background .2s ease;
        }
        .saar-btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 22px -10px rgba(52,87,232,0.5);
          background: #2c48c9;
        }

        .saar-btn-secondary {
          transition: transform .2s ease, border-color .2s ease, background .2s ease;
        }
        .saar-btn-secondary:hover {
          transform: translateY(-2px);
          border-color: #c7cff9;
          background: #f8f9ff;
        }

        .saar-card { transition: transform .3s ease, box-shadow .3s ease; }
        .saar-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 24px 48px -24px rgba(15,23,42,0.18);
        }

        @media (prefers-reduced-motion: reduce) {
          .saar-hidden, .saar-card-hidden { opacity: 1 !important; transform: none !important; }
          .saar-visible, .saar-card-visible { animation: none !important; }
        }
      `}</style>

      <section
        aria-label="Conversation-to-action workflow"
        className="w-full bg-white py-20 md:py-24"
      >
        <div className="mx-auto w-full max-w-4xl px-6 md:px-10">

          {/* Heading */}
          <div
            ref={headRef}
            className={`saar-hidden ${headIn ? "saar-visible" : ""} text-center mb-12`}
          >
            <p
              className="text-[11px] font-semibold uppercase tracking-[0.14em] mb-3"
              style={{ color: BRAND }}
            >
              Conversation-to-Action Workflow
            </p>
            <h2 className="text-[clamp(22px,3.2vw,30px)] font-bold leading-[1.3] tracking-tight text-gray-900 mb-4">
              Every AI action passes through review before it becomes real work.
            </h2>
            <p className="mx-auto max-w-[600px] text-[14px] leading-relaxed text-gray-500">
              Conversation happens, Sema AI summarizes and drafts, a human
              reviews, and policy records the outcome — nothing skips the
              approval step by default.
            </p>
          </div>

          {/* Action review card */}
          <div
            ref={cardRef}
            className={`saar-card-hidden ${cardIn ? "saar-card-visible" : ""} saar-card rounded-2xl bg-white shadow-[0_2px_24px_-8px_rgba(15,23,42,0.12)] overflow-hidden`}
          >
            {/* header */}
            <div
              className="flex items-center justify-between px-6 py-4"
              style={{ background: "#EEF0FC" }}
            >
              <span className="text-[14px] font-semibold text-gray-900">
                Action Review Queue
              </span>
              <span
                className="inline-flex items-center rounded-full px-3 py-1 text-[11px] font-semibold"
                style={{ background: "#FEF3C7", color: "#D97706" }}
              >
                Needs approval
              </span>
            </div>

            <div className="p-6">
              {/* drafted email */}
              <div className="rounded-xl border border-gray-200 px-5 py-4 mb-4">
                <p className="text-[10.5px] font-semibold uppercase tracking-[0.1em] text-gray-400 mb-2">
                  Drafted Follow-up Email
                </p>
                <p className="text-[13.5px] font-bold text-gray-900 mb-2">
                  Subject: Next steps from today&apos;s client call
                </p>
                <p className="text-[13px] leading-relaxed text-gray-500">
                  Hi Sarah — following up on our call. We agreed to move the
                  onboarding start date to Oct 14 and I&apos;ll send the revised
                  contract by Friday. Let me know if that works on your end.
                </p>
              </div>

              {/* reasoning trace */}
              <div
                className="rounded-xl px-5 py-3.5 mb-5 text-[12.5px] leading-relaxed"
                style={{ background: "#F4F5FC", color: "#4B5563" }}
              >
                <span className="font-bold text-gray-800">Reasoning trace: </span>
                Generated from call transcript (permitted) and prior mail
                thread context. Decision and date confirmed by two
                participants.
              </div>

              {/* actions */}
              <div className="flex flex-wrap items-center gap-3 mb-5">
                <button className="saar-btn-primary text-white text-[13.5px] font-semibold rounded-full px-5 py-2.5">
                  Approve &amp; send
                </button>
                <button className="saar-btn-secondary bg-white text-gray-900 text-[13.5px] font-semibold rounded-full px-5 py-2.5 border border-gray-200">
                  Edit draft
                </button>
                <button className="saar-btn-secondary bg-white text-gray-900 text-[13.5px] font-semibold rounded-full px-5 py-2.5 border border-gray-200">
                  Reject
                </button>
              </div>

              <div className="border-t border-gray-100 pt-4">
                <p className="flex items-center gap-2 text-[12px] text-gray-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500 flex-shrink-0" />
                  Logged to audit trail · Workspace policy: human approval required before send
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}