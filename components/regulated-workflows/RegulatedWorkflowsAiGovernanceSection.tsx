"use client";

import React, { useEffect, useRef, useState } from "react";

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

const exclusions = ["Legal", "Executive", "HR", "Healthcare", "Client-confidential", "Finance"];

const controls = [
  {
    title: "AI summaries",
    desc: "Who can generate and view summaries in sensitive spaces.",
    status: "Restricted",
    statusColor: "#D97706",
    on: false,
  },
  {
    title: "Action extraction",
    desc: "Capture follow-ups only where approved by policy.",
    status: "Approved",
    statusColor: "#059669",
    on: true,
  },
  {
    title: "Sensitive exclusions",
    desc: "Exclude flagged workspaces from AI assistance.",
    status: "Policy applied",
    statusColor: BRAND,
    on: true,
  },
  {
    title: "External participant controls",
    desc: "Require approval when guests are present.",
    status: "Requires review",
    statusColor: "#DC2626",
    on: false,
  },
  {
    title: "AI retention",
    desc: "Retain or remove AI-generated content by policy.",
    status: "Policy applied",
    statusColor: BRAND,
    on: true,
  },
  {
    title: "AI audit trail",
    desc: "Log every AI usage event for administrators.",
    status: "Audit recorded",
    statusColor: "#059669",
    on: true,
  },
];

export default function RegulatedWorkflowsAiGovernanceSection() {
  const { ref: textRef, inView: textIn } = useInView(0.2);
  const { ref: cardRef, inView: cardIn } = useInView(0.1);
  const [toggles, setToggles] = useState(controls.map((c) => c.on));

  return (
    <>
      <style>{`
        @keyframes ragFadeUp {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .rag-hidden  { opacity: 0; transform: translateY(28px); }
        .rag-visible { animation: ragFadeUp .65s cubic-bezier(.22,1,.36,1) forwards; }

        .rag-tag { opacity: 0; transform: translateY(8px) scale(0.94); }
        .rag-tags.rag-visible .rag-tag {
          animation: ragTagIn .4s cubic-bezier(.22,1,.36,1) forwards;
        }
        @keyframes ragTagIn {
          from { opacity: 0; transform: translateY(8px) scale(0.94); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }

        .rag-row { opacity: 0; transform: translateY(12px); }
        .rag-rows.rag-rows-visible .rag-row {
          animation: ragFadeUp .45s cubic-bezier(.22,1,.36,1) forwards;
        }

        .rag-row-inner {
          transition: background-color .25s ease;
        }
        .rag-row-inner:hover {
          background-color: #F7F8FD;
        }

        .rag-switch {
          position: relative;
          width: 38px;
          height: 21px;
          border-radius: 999px;
          transition: background-color .25s ease;
          cursor: pointer;
          border: none;
          flex-shrink: 0;
        }
        .rag-switch-knob {
          position: absolute;
          top: 2px;
          left: 2px;
          width: 17px;
          height: 17px;
          border-radius: 50%;
          background: #fff;
          transition: transform .25s cubic-bezier(.22,1,.36,1);
          box-shadow: 0 1px 3px rgba(0,0,0,0.25);
        }

        @media (prefers-reduced-motion: reduce) {
          .rag-hidden, .rag-visible, .rag-tag, .rag-row { opacity: 1 !important; transform: none !important; animation: none !important; }
        }
      `}</style>

      <section
        aria-label="AI governance"
        className="w-full bg-[#fff] py-16 sm:py-20 md:py-24"
      >
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
            {/* Left - text */}
            <div
              ref={textRef}
              className={`rag-hidden ${textIn ? "rag-visible" : ""}`}
            >
              <p
                className="text-[11px] font-semibold tracking-[0.1em] uppercase mb-4"
                style={{ color: BRAND }}
              >
                AI Governance
              </p>

              <h2 className="text-[clamp(24px,4vw,32px)] font-bold leading-[1.25] tracking-tight text-gray-900 mb-5 max-w-[420px]">
                AI that stays permissioned, restricted, and auditable.
              </h2>

              <p className="text-[13.5px] sm:text-[14px] leading-[1.75] text-gray-500 max-w-[440px] mb-8">
                Administrators define where AI summaries, action extraction, and generated outputs are allowed, restricted, retained, or audited — including sensitive-space exclusions and external-participant rules.
              </p>

              <p className="text-[11px] font-semibold tracking-[0.08em] uppercase text-gray-400 mb-3">
                Sensitive workspace exclusions
              </p>

              <div className={`rag-tags ${textIn ? "rag-visible" : ""} flex flex-wrap gap-2`}>
                {exclusions.map((tag, i) => (
                  <span
                    key={tag}
                    className="rag-tag rounded-full bg-red-50 text-red-500 text-[12.5px] font-semibold px-3.5 py-1.5"
                    style={{ animationDelay: `${0.1 + i * 0.06}s` }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Right - AI policy control panel */}
            <div
              ref={cardRef}
              className={`rag-hidden ${cardIn ? "rag-visible" : ""}`}
              style={{ animationDelay: "0.12s" }}
            >
              <div className="rounded-2xl bg-white shadow-[0_20px_50px_rgba(15,31,78,0.08)] overflow-hidden">
                {/* Header */}
                <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
                  <span className="text-[13.5px] font-bold text-gray-900">AI policy control panel</span>
                  <span className="rounded-full bg-emerald-50 text-emerald-600 text-[11px] font-semibold px-3 py-1">
                    Audit recorded
                  </span>
                </div>

                {/* Rows */}
                <div className={`rag-rows ${cardIn ? "rag-rows-visible" : ""} flex flex-col`}>
                  {controls.map((c, i) => (
                    <div
                      key={c.title}
                      className="rag-row rag-row-inner flex items-center justify-between gap-4 px-6 py-4 border-b border-gray-50 last:border-b-0"
                      style={{ animationDelay: `${0.05 + i * 0.07}s` }}
                    >
                      <div className="min-w-0">
                        <p className="text-[13.5px] font-bold text-gray-900">{c.title}</p>
                        <p className="text-[12px] text-gray-400 leading-[1.5]">{c.desc}</p>
                      </div>

                      <div className="flex items-center gap-3 shrink-0">
                        <span
                          className="text-[11.5px] font-semibold"
                          style={{ color: c.statusColor }}
                        >
                          {c.status}
                        </span>
                        <button
                          className="rag-switch"
                          onClick={() =>
                            setToggles((prev) =>
                              prev.map((v, idx) => (idx === i ? !v : v))
                            )
                          }
                          aria-pressed={toggles[i]}
                          aria-label={`Toggle ${c.title}`}
                          style={{ background: toggles[i] ? BRAND : "#E5E7EB" }}
                        >
                          <span
                            className="rag-switch-knob"
                            style={{
                              transform: toggles[i] ? "translateX(17px)" : "translateX(0)",
                            }}
                          />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}