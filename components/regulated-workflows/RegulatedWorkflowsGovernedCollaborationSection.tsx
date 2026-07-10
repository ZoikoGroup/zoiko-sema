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

const tabs = [
  {
    key: "messaging",
    label: "Governed messaging",
    channel: "#matter-4821-disclosure",
    tag: "Restricted forwarding",
    rows: [
      { type: "message", author: "L. Ferrand", text: "sharing the revised disclosure scope for reviewer sign-off" },
      { type: "file", name: "Disclosure_pack_v2.pdf", meta: "classified · legal · record-ready" },
      { type: "decision", text: "Decision logged — proceed to reviewer approval" },
    ],
  },
  {
    key: "meetings",
    label: "Secure meetings",
    channel: "#matter-4821-review-call",
    tag: "Encrypted · recorded",
    rows: [
      { type: "message", author: "R. Osei", text: "starting the reviewer sign-off call now" },
      { type: "file", name: "Meeting_transcript.txt", meta: "auto-generated · attached to case" },
      { type: "decision", text: "Recording sealed — evidence pack updated" },
    ],
  },
  {
    key: "approvals",
    label: "Approval workflows",
    channel: "#matter-4821-approval",
    tag: "2 approvers required",
    rows: [
      { type: "message", author: "System", text: "approval request routed to Legal and Compliance" },
      { type: "file", name: "Approval_form.pdf", meta: "pending · 1 of 2 signed" },
      { type: "decision", text: "Escalation timer started — 24h SLA" },
    ],
  },
  {
    key: "evidence",
    label: "Evidence capture",
    channel: "#matter-4821-evidence",
    tag: "Legal hold active",
    rows: [
      { type: "message", author: "A. Duarte", text: "compiled the final evidence pack for export" },
      { type: "file", name: "Evidence_pack_final.zip", meta: "redacted · export-ready" },
      { type: "decision", text: "Export completed — audit log updated" },
    ],
  },
];

export default function RegulatedWorkflowsGovernedCollaborationSection() {
  const [activeTab, setActiveTab] = useState(0);
  const { ref: sectionRef, inView } = useInView(0.1);

  const current = tabs[activeTab];

  return (
    <>
      <style>{`
        @keyframes rgcFadeUp {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .rgc-hidden  { opacity: 0; transform: translateY(28px); }
        .rgc-visible { animation: rgcFadeUp .65s cubic-bezier(.22,1,.36,1) forwards; }

        .rgc-tab {
          transition: background-color .25s ease, color .25s ease;
        }

        .rgc-row { opacity: 0; transform: translateY(10px); }
        .rgc-panel-in .rgc-row {
          animation: rgcRowIn .4s cubic-bezier(.22,1,.36,1) forwards;
        }
        @keyframes rgcRowIn {
          from { opacity: 0; transform: translateY(10px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        @keyframes rgcPanelFade {
          from { opacity: 0; transform: translateY(8px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .rgc-panel-fade { animation: rgcPanelFade .35s ease forwards; }

        .rgc-btn-primary {
          transition: transform .25s ease, box-shadow .25s ease;
        }
        .rgc-btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 24px rgba(0,0,0,0.25);
        }
        .rgc-btn-text {
          transition: opacity .2s ease;
        }
        .rgc-btn-text:hover { opacity: 0.75; }

        @media (prefers-reduced-motion: reduce) {
          .rgc-hidden, .rgc-visible, .rgc-row, .rgc-panel-fade { opacity: 1 !important; transform: none !important; animation: none !important; }
          .rgc-btn-primary:hover { transform: none !important; }
        }
      `}</style>

      <section
        ref={sectionRef}
        aria-label="Governed collaboration"
        className="w-full py-16 sm:py-20 md:py-24"
        style={{ background: "#12163A" }}
      >
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 md:px-10">
          {/* Badge */}
          <div
            className={`rgc-hidden ${inView ? "rgc-visible" : ""} text-center mb-4`}
          >
            <span
              className="text-[11px] font-semibold tracking-[0.1em] uppercase"
              style={{ color: "#8B9CFF" }}
            >
              Governed Collaboration
            </span>
          </div>

          {/* Heading */}
          <div
            className={`rgc-hidden ${inView ? "rgc-visible" : ""} text-center mb-4`}
            style={{ animationDelay: "0.08s" }}
          >
            <h2 className="text-[clamp(22px,3.8vw,32px)] font-bold leading-[1.25] tracking-tight text-white max-w-[560px] mx-auto">
              Keep sensitive work in one governed collaboration space.
            </h2>
          </div>

          {/* Subheading */}
          <p
            className={`rgc-hidden ${inView ? "rgc-visible" : ""} text-center text-[13.5px] sm:text-[14px] leading-[1.7] text-white/50 max-w-[540px] mx-auto mb-8 sm:mb-10`}
            style={{ animationDelay: "0.14s" }}
          >
            Communicate, meet, share files, capture decisions, route approvals, and preserve evidence without spreading regulated work across disconnected tools.
          </p>

          {/* Tabs */}
          <div
            className={`rgc-hidden ${inView ? "rgc-visible" : ""} flex flex-wrap items-center justify-center gap-2 mb-8 sm:mb-10`}
            style={{ animationDelay: "0.18s" }}
          >
            {tabs.map((t, i) => (
              <button
                key={t.key}
                onClick={() => setActiveTab(i)}
                className="rgc-tab rounded-full text-[13px] font-semibold px-5 py-2.5"
                style={
                  activeTab === i
                    ? { background: "#fff", color: "#12122E" }
                    : { background: "rgba(255,255,255,0.08)", color: "rgba(255,255,255,0.6)" }
                }
              >
                {t.label}
              </button>
            ))}
          </div>

          {/* Panel */}
          <div
            key={activeTab}
            className={`rgc-hidden ${inView ? "rgc-visible" : ""} rgc-panel-fade rounded-2xl bg-white p-6 sm:p-8`}
            style={{ animationDelay: "0.22s" }}
          >
            <div className="flex items-center gap-3 mb-5">
              <span className="text-[13.5px] font-bold text-gray-900">{current.channel}</span>
              <span
                className="text-[11px] font-semibold rounded-full px-3 py-1"
                style={{ background: "rgba(52,87,232,0.1)", color: BRAND }}
              >
                {current.tag}
              </span>
            </div>

            <div className="rgc-panel-in flex flex-col gap-3">
              {current.rows.map((row, i) => (
                <div
                  key={i}
                  className="rgc-row rounded-xl px-5 py-4"
                  style={{
                    animationDelay: `${0.05 + i * 0.1}s`,
                    background: row.type === "decision" ? "rgba(52,87,232,0.08)" : "#F3F4F8",
                  }}
                >
                  {row.type === "message" && (
                    <p className="text-[13px] sm:text-[13.5px] text-gray-700">
                      <span className="font-bold text-gray-900">{row.author}</span>
                      {" — "}
                      {row.text}
                    </p>
                  )}
                  {row.type === "file" && (
                    <p className="text-[13px] sm:text-[13.5px] text-gray-500 flex items-center gap-2">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="shrink-0">
                        <path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48" />
                      </svg>
                      <span className="text-gray-800">{row.name}</span>
                      <span className="text-gray-400">{row.meta}</span>
                    </p>
                  )}
                  {row.type === "decision" && (
                    <p
                      className="text-[13px] sm:text-[13.5px] font-medium flex items-center gap-2"
                      style={{ color: BRAND }}
                    >
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      {row.text}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* CTAs */}
          <div
            className={`rgc-hidden ${inView ? "rgc-visible" : ""} flex flex-wrap items-center justify-center gap-6 mt-10 sm:mt-12`}
            style={{ animationDelay: "0.28s" }}
          >
            <a
              href="#governed-workspace-demo"
              className="rgc-btn-primary rounded-full bg-white text-[#12122E] text-[14px] font-semibold px-7 py-3.5"
            >
              See governed workspace demo
            </a>
            
            <a
              href="#talk-sales"
              className="rgc-btn-text text-white text-[14px] font-semibold underline underline-offset-4 decoration-white/40"
            >
              Talk to sales
            </a>
          </div>
        </div>
      </section>
    </>
  );
}