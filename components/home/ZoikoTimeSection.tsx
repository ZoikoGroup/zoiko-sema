"use client";

import React, { useEffect, useState, useRef } from "react";

function useInView(threshold = 0.12) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) { setInView(true); obs.disconnect(); }
      },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, inView };
}

const col1Items = [
  "Messages",
  "Audio & video calls",
  "Meeting decisions",
  "Action items",
  "Participants",
  "Follow-ups",
];
const col2Items = [
  "Work sessions",
  "Activity states",
  "Time records",
  "Attendance context",
  "Productivity signals",
  "Audit trail",
];
const col3Items = [
  "Meeting-to-work continuity",
  "Verified collaboration",
  "Better manager review",
  "Stronger billing support",
  "Compliance evidence",
  "Reduced ambiguity",
];

const useCases = [
  {
    title: "Professional Services",
    desc: "Connect client calls, internal discussions, work sessions and deliverables.",
  },
  {
    title: "Consulting & Agencies",
    desc: "Support billing confidence by linking meetings, follow-ups and verified work activity.",
  },
  {
    title: "Remote Teams",
    desc: "Understand collaboration patterns without relying only on self-reporting.",
  },
  {
    title: "Regulated Operations",
    desc: "Preserve auditable communication and workforce context for compliance.",
  },
  {
    title: "Field & Distributed",
    desc: "Connect calls, updates, instructions and confirmed work signals.",
  },
];

export default function ZoikoTimeSection() {
  const { ref: headRef, inView: headIn } = useInView(0.15);
  const { ref: colsRef, inView: colsIn } = useInView(0.08);
  const { ref: usRef,   inView: usIn   } = useInView(0.08);
  const { ref: noteRef, inView: noteIn } = useInView(0.1);
  const { ref: ctaRef,  inView: ctaIn  } = useInView(0.1);

  const [col1Active, setCol1Active] = useState(-1);
  const [col2Active, setCol2Active] = useState(-1);
  const [col3Active, setCol3Active] = useState(-1);

  useEffect(() => {
    if (!colsIn) return;
    col1Items.forEach((_, i) => setTimeout(() => setCol1Active(i), i * 90));
    col2Items.forEach((_, i) => setTimeout(() => setCol2Active(i), 200 + i * 90));
    col3Items.forEach((_, i) => setTimeout(() => setCol3Active(i), 400 + i * 90));
  }, [colsIn]);

  return (
    <>
      <style>{`
        @keyframes ztFadeUp {
          from { opacity:0; transform:translateY(28px); }
          to   { opacity:1; transform:translateY(0); }
        }
        .zt-hidden  { opacity:0; transform:translateY(28px); }
        .zt-visible { animation: ztFadeUp .6s cubic-bezier(.22,1,.36,1) forwards; }

        @keyframes ztSlideIn {
          from { opacity:0; transform:translateX(-12px); }
          to   { opacity:1; transform:translateX(0); }
        }
        .zt-item { opacity:0; }
        .zt-item.on { animation: ztSlideIn .3s ease forwards; }

        /* number circle pulse */
        @keyframes ztNumPulse {
          0%,100% { box-shadow: 0 0 0 0 rgba(147,165,255,0.35); }
          50%      { box-shadow: 0 0 0 8px rgba(147,165,255,0); }
        }
        .zt-num-circle { animation: ztNumPulse 3s ease-in-out infinite; }

        /* use-case card hover */
        .zt-uc { transition: background .2s ease, transform .25s ease; }
        .zt-uc:hover {
          background: rgba(255,255,255,0.13) !important;
          transform: translateY(-3px);
        }

        /* shimmer on primary btn */
        @keyframes ztShimmer {
          from { transform:translateX(-100%); }
          to   { transform:translateX(220%); }
        }
        .zt-btn-p { position:relative; overflow:hidden; transition:opacity .2s,transform .2s; }
        .zt-btn-p::after {
          content:""; position:absolute; inset:0;
          background:linear-gradient(120deg,transparent 30%,rgba(255,255,255,0.22) 50%,transparent 70%);
          transform:translateX(-100%);
        }
        .zt-btn-p:hover::after { animation: ztShimmer .6s ease forwards; }
        .zt-btn-p:hover { opacity:.9; transform:translateY(-2px); }

        .zt-btn-s { transition:background .2s,transform .2s; }
        .zt-btn-s:hover { background:rgba(255,255,255,0.08)!important; transform:translateY(-2px); }

        @media (prefers-reduced-motion:reduce) {
          .zt-hidden,.zt-item { opacity:1!important; transform:none!important; animation:none!important; }
          .zt-visible { animation:none!important; opacity:1!important; }
          .zt-num-circle { animation:none!important; }
        }
      `}</style>

      <section
        aria-label="Connect Sema to ZoikoTime"
        className="w-full py-20 md:py-28"
        style={{ background: "#474787" }}
      >
        <div className="mx-auto w-full max-w-7xl px-6 md:px-10 lg:px-16 flex flex-col items-center">

          {/* ── Badge pill ── */}
          <div
            ref={headRef}
            className={`zt-hidden ${headIn ? "zt-visible" : ""} w-full flex flex-col items-center`}
          >
            <span
              className="inline-flex items-center gap-2 mb-10 px-5 py-2 rounded-full text-[11px] font-semibold uppercase tracking-[0.14em]"
              style={{
                border: "1px solid rgba(147,165,255,0.4)",
                color: "#a5b4fc",
                background: "rgba(255,255,255,0.05)",
              }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-300" aria-hidden="true" />
              Sema × ZoikoTime · Strategic Integration
            </span>

            <h2
              className="text-[clamp(26px,3.8vw,35px)] font-bold leading-[1.1] tracking-tight text-white text-center mb-6 max-w-[860px]"
            >
              Connect Sema to ZoikoTime when communication needs to become workforce truth
            </h2>

            <p
              className="text-center text-[15px] leading-[1.8] max-w-[880px] mb-20"
              style={{ color: "#c7caed" }}
            >
              Sema is powerful on its own. For organizations that need deeper accountability,
              auditability and verified work signals, Sema connects with ZoikoTime to link
              conversations, meetings, activity and workforce context into one governed operating layer.
            </p>
          </div>

          {/* ── 3 columns — number OUTSIDE card ── */}
          <div
            ref={colsRef}
            className={`zt-hidden ${colsIn ? "zt-visible" : ""} w-full grid grid-cols-1 md:grid-cols-3 gap-6 mb-6`}
            style={{ animationDelay: "0.05s" }}
          >
            {[
              { num: "01", title: "Sema captures communication signals", items: col1Items, active: col1Active },
              { num: "02", title: "ZoikoTime verifies workforce context",  items: col2Items, active: col2Active },
              { num: "03", title: "Together they create",                  items: col3Items, active: col3Active },
            ].map((col, ci) => (
              <div key={ci} className="flex flex-col items-center">

                {/* Number circle — OUTSIDE, above card */}
                <div className="flex flex-col items-center mb-4">
                  <div
                    className="zt-num-circle w-10 h-10 rounded-full flex items-center justify-center text-[12px] font-bold"
                    style={{
                      background: "rgba(147,165,255,0.15)",
                      border: "1px solid rgba(147,165,255,0.4)",
                      color: "#a5b4fc",
                    }}
                  >
                    {col.num}
                  </div>
                  {/* small dash below number */}
                  <div
                    className="w-px mt-2"
                    style={{ height: "18px", background: "rgba(147,165,255,0.4)" }}
                  />
                </div>

                {/* Column title — between number and card */}
                <h3 className="text-[15px] font-semibold text-white text-center mb-4 px-2">
                  {col.title}
                </h3>

                {/* Card */}
                <div
                  className="w-full rounded-2xl p-5"
                  style={{
                    background: "rgba(255,255,255,0.07)",
                    border: "1px solid rgba(255,255,255,0.13)",
                  }}
                >
                  <div className="flex flex-col">
                    {col.items.map((item, i) => (
                      <div
                        key={i}
                        className={`zt-item flex items-center gap-3 py-2.5 ${
                          i < col.items.length - 1 ? "border-b" : ""
                        } ${i <= col.active ? "on" : ""}`}
                        style={{
                          borderColor: "rgba(255,255,255,0.08)",
                          animationDelay: `${i * 0.04}s`,
                        }}
                      >
                        <span
                          className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                          style={{ background: "#6366f1" }}
                        />
                        <span className="text-[13.5px]" style={{ color: "#c7caed" }}>
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* ── Use-case cards ── */}
          <div
            ref={usRef}
            className={`zt-hidden ${usIn ? "zt-visible" : ""} w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 mb-8`}
            style={{ animationDelay: "0.1s" }}
          >
            {useCases.map((uc, i) => (
              <div
                key={i}
                className="zt-uc rounded-xl p-4 cursor-default"
                style={{
                  background: "rgba(255,255,255,0.07)",
                  border: "1px solid rgba(255,255,255,0.11)",
                }}
              >
                <p className="text-[12.5px] font-semibold mb-2" style={{ color: "#2A6BE3" }}>
                  {uc.title}
                </p>
                <p className="text-[12.5px] leading-relaxed" style={{ color: "#9da0c8" }}>
                  {uc.desc}
                </p>
              </div>
            ))}
          </div>

          {/* ── Trust note — left blue border ── */}
          <div
            ref={noteRef}
            className={`zt-hidden ${noteIn ? "zt-visible" : ""} w-full flex mb-12`}
            style={{ animationDelay: "0.12s" }}
          >
            <div
              className="w-full rounded-xl px-6 py-5 flex items-start gap-0"
              style={{
                background: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(255,255,255,0.1)",
                borderLeft: "3px solid #6366f1",  /* ← left accent border */
              }}
            >
              <p className="text-[13.5px] leading-relaxed" style={{ color: "#c7caed" }}>
                <span className="font-bold text-white">Built for trust, not surveillance. </span>
                Sema does not turn private communication into surveillance. ZoikoTime integration
                is governed by permissions, policy settings, role-based access, retention controls
                and customer-defined compliance rules.
              </p>
            </div>
          </div>

          {/* ── CTA buttons ── */}
          <div
            ref={ctaRef}
            className={`zt-hidden ${ctaIn ? "zt-visible" : ""} flex flex-wrap items-center justify-center gap-4`}
            style={{ animationDelay: "0.15s" }}
          >
            <a
              href="#explore"
              className="zt-btn-p inline-flex items-center gap-2 rounded-full px-8 py-3.5 text-[15px] font-semibold text-white"
              style={{ background: "#4f6ef7" }}
            >
              Explore Sema + ZoikoTime
              <span aria-hidden="true">→</span>
            </a>
            <a
              href="#demo"
              className="zt-btn-s inline-flex items-center gap-2 rounded-full px-8 py-3.5 text-[15px] font-medium text-white border"
              style={{ borderColor: "rgba(255,255,255,0.3)", background: "transparent" }}
            >
              Request an integration demo
            </a>
          </div>

        </div>
      </section>
    </>
  );
}