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

const stages = [
  {
    number: 1,
    title: "Intake",
    desc: "A new case, matter, request, incident, or patient-operation workflow is created as a governed space.",
    action: "Create regulated space",
    event: "regulated_space_created",
    badgeBg: "#EDE9FE",
    badgeColor: "#7C3AED",
  },
  {
    number: 2,
    title: "Classify",
    desc: "Select workflow type, risk level, retention policy, external access rules, and AI policy up front.",
    action: "Apply policy template",
    event: "workflow_classified",
    badgeBg: "#DBEAFE",
    badgeColor: "#2563EB",
  },
  {
    number: 3,
    title: "Collaborate",
    desc: "Messages, files, meetings, notes, and decisions all stay inside the classified workspace.",
    action: "Start collaboration",
    event: "governed_message_sent",
    badgeBg: "#D1FAE5",
    badgeColor: "#059669",
  },
  {
    number: 4,
    title: "Review",
    desc: "Approval routing, reviewer assignment, exception capture, and attestations appear in a side panel.",
    action: "Request approval",
    event: "approval_requested",
    badgeBg: "#FEF3C7",
    badgeColor: "#D97706",
  },
  {
    number: 5,
    title: "Preserve",
    desc: "Evidence packs, retention, legal hold, export scope, and redaction rules are available on demand.",
    action: "Create evidence pack",
    event: "evidence_pack_created",
    badgeBg: "#EDE9FE",
    badgeColor: "#7C3AED",
  },
  {
    number: 6,
    title: "Audit",
    desc: "Auditors filter events, open details, and export records based on role and plan permissions.",
    action: "Export audit log",
    event: "audit_export_created",
    badgeBg: "#FCE7E7",
    badgeColor: "#DC2626",
  },
];

export default function RegulatedWorkflowsWorkflowMapSection() {
  const { ref: badgeRef, inView: badgeIn } = useInView(0.3);
  const { ref: headRef, inView: headIn } = useInView(0.2);
  const { ref: listRef, inView: listIn } = useInView(0.06);

  return (
    <>
      <style>{`
        @keyframes rwmFadeUp {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .rwm-hidden  { opacity: 0; transform: translateY(28px); }
        .rwm-visible { animation: rwmFadeUp .65s cubic-bezier(.22,1,.36,1) forwards; }

        .rwm-stage { opacity: 0; transform: translateY(22px); }
        .rwm-list.rwm-visible .rwm-stage {
          animation: rwmFadeUp .5s cubic-bezier(.22,1,.36,1) forwards;
        }

        .rwm-card {
          transition: transform .3s ease, box-shadow .3s ease, border-color .3s ease;
        }
        .rwm-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 16px 32px rgba(52,87,232,0.1);
          border-color: rgba(52,87,232,0.18);
        }

        .rwm-num {
          transition: transform .3s ease;
        }
        .rwm-card:hover .rwm-num {
          transform: scale(1.08);
        }

        .rwm-link {
          transition: gap .2s ease;
        }
        .rwm-link:hover {
          gap: 8px;
        }

        /* connecting line down the left of numbers */
        .rwm-line {
          position: absolute;
          left: 23px;
          top: 48px;
          bottom: -20px;
          width: 2px;
          background: linear-gradient(180deg, rgba(52,87,232,0.25), rgba(52,87,232,0.05));
        }

        @media (prefers-reduced-motion: reduce) {
          .rwm-hidden, .rwm-visible, .rwm-stage { opacity: 1 !important; transform: none !important; animation: none !important; }
          .rwm-card:hover, .rwm-card:hover .rwm-num { transform: none !important; }
        }
      `}</style>

      <section
        aria-label="Workflow map"
        className="w-full bg-[#F3F1FA] py-16 sm:py-20 md:py-24"
      >
        <div className="mx-auto w-full max-w-5xl px-5 sm:px-8 md:px-10">
          {/* Badge */}
          <div
            ref={badgeRef}
            className={`rwm-hidden ${badgeIn ? "rwm-visible" : ""} text-center mb-4`}
          >
            <span
              className="text-[11px] font-semibold tracking-[0.1em] uppercase"
              style={{ color: BRAND }}
            >
              Workflow Map
            </span>
          </div>

          {/* Heading */}
          <div
            ref={headRef}
            className={`rwm-hidden ${headIn ? "rwm-visible" : ""} text-center mb-3`}
            style={{ animationDelay: "0.08s" }}
          >
            <h2 className="text-[clamp(22px,3.8vw,30px)] font-bold leading-[1.25] tracking-tight text-gray-900">
              How a sensitive conversation becomes an auditable record.
            </h2>
          </div>

          {/* Subheading */}
          <p
            className={`rwm-hidden ${headIn ? "rwm-visible" : ""} text-center text-[13.5px] sm:text-[14px] text-gray-500 mb-12 sm:mb-16`}
            style={{ animationDelay: "0.14s" }}
          >
            Scroll through the six stages — each one leaves an audit event behind.
          </p>

          {/* Stage list */}
          <div
            ref={listRef}
            className={`rwm-list ${listIn ? "rwm-visible" : ""} flex flex-col gap-5`}
          >
            {stages.map((s, i) => (
              <div
                key={s.number}
                className="rwm-stage relative"
                style={{ animationDelay: `${0.04 + i * 0.08}s` }}
              >
                {i !== stages.length - 1 && <span className="rwm-line" aria-hidden="true" />}

                <div className="rwm-card relative rounded-2xl border border-gray-100 bg-white p-5 sm:p-6 flex items-start gap-4">
                  <span
                    className="rwm-num flex items-center justify-center w-9 h-9 rounded-full text-[14px] font-bold shrink-0"
                    style={{ background: s.badgeBg, color: s.badgeColor }}
                  >
                    {s.number}
                  </span>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-3 mb-1.5">
                      <h3 className="text-[15px] sm:text-[16px] font-bold text-gray-900">
                        {s.title}
                      </h3>
                      <span
                        className="shrink-0 rounded-full text-[10.5px] font-mono font-medium px-2.5 py-1"
                        style={{ background: "rgba(52,87,232,0.08)", color: BRAND }}
                      >
                        {s.event}
                      </span>
                    </div>

                    <p className="text-[13px] sm:text-[13.5px] leading-[1.65] text-gray-500 mb-3">
                      {s.desc}
                    </p>

                    <a
                      href={`#${s.event}`}
                      className="rwm-link inline-flex items-center gap-1.5 text-[12.5px] font-semibold"
                      style={{ color: BRAND }}
                    >
                      <span aria-hidden="true">—</span> {s.action}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}