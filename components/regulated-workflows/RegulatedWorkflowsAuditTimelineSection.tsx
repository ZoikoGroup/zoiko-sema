"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
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

const events = [
  {
    time: "09:41",
    title: "Regulated space created",
    meta: "L. Ferrand · Legal Ops",
    status: "Recorded",
    statusBg: "#D1FAE5",
    statusColor: "#059669",
  },
  {
    time: "09:48",
    title: "Policy template applied",
    meta: "P. Osei · Compliance",
    status: "Recorded",
    statusBg: "#D1FAE5",
    statusColor: "#059669",
  },
  {
    time: "10:12",
    title: "Approval requested",
    meta: "System · Workflow",
    status: "Needs review",
    statusBg: "#FEF3C7",
    statusColor: "#D97706",
  },
  {
    time: "10:20",
    title: "External access granted",
    meta: "S. Admin · Security",
    status: "Restricted",
    statusBg: "rgba(52,87,232,0.1)",
    statusColor: BRAND,
  },
  {
    time: "10:37",
    title: "Evidence pack created",
    meta: "P. Osei · Compliance",
    status: "Ready",
    statusBg: "#111827",
    statusColor: "#fff",
  },
];

export default function RegulatedWorkflowsAuditTimelineSection() {
  const { ref: textRef, inView: textIn } = useInView(0.2);
  const { ref: cardRef, inView: cardIn } = useInView(0.1);

  return (
    <>
      <style>{`
        @keyframes ratsFadeUp {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .rats-hidden  { opacity: 0; transform: translateY(28px); }
        .rats-visible { animation: ratsFadeUp .65s cubic-bezier(.22,1,.36,1) forwards; }

        /* Timeline rows: trigger class now applied directly on .rats-timeline
           itself, so this selector reliably matches once in view. */
        .rats-event { opacity: 0; transform: translateY(14px); }
        .rats-timeline.rats-timeline-visible .rats-event {
          animation: ratsFadeUp .45s cubic-bezier(.22,1,.36,1) forwards;
        }

        .rats-event-row {
          transition: background-color .25s ease;
        }
        .rats-event-row:hover {
          background-color: #F7F8FD;
        }

        .rats-btn-primary {
          transition: transform .25s ease, box-shadow .25s ease;
        }
        .rats-btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 24px rgba(52,87,232,0.35);
        }

        .rats-btn-text {
          transition: opacity .2s ease;
        }
        .rats-btn-text:hover { opacity: 0.75; }

        .rats-export-btn {
          transition: transform .25s ease, box-shadow .25s ease;
        }
        .rats-export-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 20px rgba(0,0,0,0.25);
        }

        .rats-filter {
          transition: background-color .2s ease;
        }
        .rats-filter:hover {
          background-color: #EEF1FB;
        }

        @media (prefers-reduced-motion: reduce) {
          .rats-hidden, .rats-visible, .rats-event { opacity: 1 !important; transform: none !important; animation: none !important; }
          .rats-btn-primary:hover, .rats-export-btn:hover { transform: none !important; }
        }
      `}</style>

      <section
        aria-label="Audit timeline"
        className="w-full py-16 sm:py-20 md:py-24"
        style={{ background: "#12163A" }}
      >
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
            {/* Left - text */}
            <div
              ref={textRef}
              className={`rats-hidden ${textIn ? "rats-visible" : ""}`}
            >
              <p
                className="text-[11px] font-semibold tracking-[0.1em] uppercase mb-4"
                style={{ color: "#8B9CFF" }}
              >
                Evidence &middot; Audit &middot; Export
              </p>

              <h2 className="text-[clamp(24px,4vw,32px)] font-bold leading-[1.25] tracking-tight text-white mb-5 max-w-[420px]">
                Prove what happened, who approved it, and what was preserved.
              </h2>

              <p className="text-[13.5px] sm:text-[14px] leading-[1.75] text-white/55 max-w-[420px] mb-8">
                Filter the audit timeline by actor, role, action, and workspace, then export the evidence chain with the right scope, redaction, and reviewer approval.
              </p>

              <div className="flex flex-wrap items-center gap-6">
                <Link
                  href="/get-a-demo"
                  className="rats-btn-primary inline-flex items-center justify-center rounded-full text-white text-[14px] font-semibold px-7 py-3.5"
                  style={{ background: BRAND }}
                >
                  Get a demo
                </Link>
                <Link
                  href="/security-compliance"
                  className="rats-btn-text text-white text-[14px] font-semibold underline underline-offset-4 decoration-white/40"
                >
                  Explore security &amp; compliance
                </Link>
              </div>
            </div>

            {/* Right - audit timeline card */}
            <div
              ref={cardRef}
              className={`rats-hidden ${cardIn ? "rats-visible" : ""}`}
              style={{ animationDelay: "0.12s" }}
            >
              <div className="rounded-2xl bg-white shadow-[0_30px_60px_rgba(0,0,0,0.35)] overflow-hidden">
                {/* Header */}
                <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
                  <span className="text-[13.5px] font-bold text-gray-900">Audit timeline</span>
                  <div className="flex items-center gap-2">
                    <span className="rats-filter rounded-full bg-gray-100 text-gray-600 text-[11.5px] font-semibold px-3 py-1.5">
                      All roles
                    </span>
                    <span
                      className="rats-filter rounded-full text-[11.5px] font-semibold px-3 py-1.5"
                      style={{ background: "rgba(52,87,232,0.1)", color: BRAND }}
                    >
                      Legal hold
                    </span>
                  </div>
                </div>

                {/* Event rows */}
                <div
                  className={`rats-timeline ${cardIn ? "rats-timeline-visible" : ""} flex flex-col`}
                >
                  {events.map((e, i) => (
                    <div
                      key={i}
                      className="rats-event rats-event-row flex items-start justify-between gap-4 px-6 py-4 border-b border-gray-50 last:border-b-0"
                      style={{ animationDelay: `${0.05 + i * 0.07}s` }}
                    >
                      <div className="flex items-start gap-4">
                        <span className="text-[12px] text-gray-400 mt-0.5 w-9 shrink-0">
                          {e.time}
                        </span>
                        <div>
                          <p className="text-[13.5px] font-bold text-gray-900">{e.title}</p>
                          <p className="text-[12px] text-gray-400">{e.meta}</p>
                        </div>
                      </div>
                      <span
                        className="shrink-0 rounded-full text-[11px] font-semibold px-3 py-1 mt-0.5"
                        style={{ background: e.statusBg, color: e.statusColor }}
                      >
                        {e.status}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between gap-3 px-6 py-4">
                  <span className="text-[12px] text-gray-400">
                    Export scope: Matter #4821 &middot; redaction on
                  </span>
                  <button
                    className="rats-export-btn rounded-full text-white text-[12.5px] font-semibold px-5 py-2.5 shrink-0"
                    style={{ background: "#12122E" }}
                  >
                    Export audit log
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}