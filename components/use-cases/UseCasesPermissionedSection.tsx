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

const isItems = [
  "Permissioned by admin, role and consent flag",
  "Policy-bound to workspace and jurisdiction rules",
  "Auditable — every routed signal has a trail",
  "Configurable — disable per channel, per user, per workflow",
  "Human-reviewable — managers see context, not scores",
  "Customer-controlled retention",
];

const isntItems = [
  "Sema does not score employees",
  "Not every message, call or meeting becomes workforce evidence",
  "No covert monitoring or automatic disciplinary action",
  "No claim of legal defensibility without policy and human review",
  "ZoikoTime is not a surveillance layer attached to Sema",
];

export default function UseCasesPermissionedSection() {
  const { ref: headRef,  inView: headIn  } = useInView(0.2);
  const { ref: cardsRef, inView: cardsIn } = useInView(0.08);
  const { ref: princRef, inView: princIn } = useInView(0.1);

  const [isActive,   setIsActive]   = useState(false);
  const [isntActive, setIsntActive] = useState(false);

  useEffect(() => {
    if (!cardsIn) return;
    setTimeout(() => setIsActive(true),   200);
    setTimeout(() => setIsntActive(true), 350);
  }, [cardsIn]);

  return (
    <>
      <style>{`
        @keyframes ucpFadeUp {
          from { opacity:0; transform:translateY(26px); }
          to   { opacity:1; transform:translateY(0); }
        }
        .ucp-hidden  { opacity:0; transform:translateY(26px); }
        .ucp-visible { animation: ucpFadeUp .6s cubic-bezier(.22,1,.36,1) forwards; }

        /* card entrance */
        @keyframes ucpCardIn {
          from { opacity:0; transform:translateY(22px) scale(.98); }
          to   { opacity:1; transform:translateY(0) scale(1); }
        }
        .ucp-card { opacity:0; }
        .ucp-card.on { animation: ucpCardIn .65s cubic-bezier(.22,1,.36,1) forwards; }
        .ucp-card-right.on { animation: ucpCardIn .65s cubic-bezier(.22,1,.36,1) .1s forwards; }

        /* list item stagger */
        @keyframes ucpItemIn {
          from { opacity:0; transform:translateX(-10px); }
          to   { opacity:1; transform:translateX(0); }
        }
        @keyframes ucpItemInR {
          from { opacity:0; transform:translateX(10px); }
          to   { opacity:1; transform:translateX(0); }
        }
        .ucp-is-item   { opacity:0; }
        .ucp-isnt-item { opacity:0; }
        .ucp-is-in   .ucp-is-item:nth-child(1)   { animation: ucpItemIn  .3s ease .3s  forwards; }
        .ucp-is-in   .ucp-is-item:nth-child(2)   { animation: ucpItemIn  .3s ease .4s  forwards; }
        .ucp-is-in   .ucp-is-item:nth-child(3)   { animation: ucpItemIn  .3s ease .5s  forwards; }
        .ucp-is-in   .ucp-is-item:nth-child(4)   { animation: ucpItemIn  .3s ease .6s  forwards; }
        .ucp-is-in   .ucp-is-item:nth-child(5)   { animation: ucpItemIn  .3s ease .7s  forwards; }
        .ucp-is-in   .ucp-is-item:nth-child(6)   { animation: ucpItemIn  .3s ease .8s  forwards; }
        .ucp-isnt-in .ucp-isnt-item:nth-child(1) { animation: ucpItemInR .3s ease .4s  forwards; }
        .ucp-isnt-in .ucp-isnt-item:nth-child(2) { animation: ucpItemInR .3s ease .52s forwards; }
        .ucp-isnt-in .ucp-isnt-item:nth-child(3) { animation: ucpItemInR .3s ease .64s forwards; }
        .ucp-isnt-in .ucp-isnt-item:nth-child(4) { animation: ucpItemInR .3s ease .76s forwards; }
        .ucp-isnt-in .ucp-isnt-item:nth-child(5) { animation: ucpItemInR .3s ease .88s forwards; }

        /* principle card */
        @keyframes ucpPrincIn {
          from { opacity:0; transform:translateY(20px) scale(.98); }
          to   { opacity:1; transform:translateY(0) scale(1); }
        }
        .ucp-princ { opacity:0; }
        .ucp-princ.on { animation: ucpPrincIn .7s cubic-bezier(.22,1,.36,1) forwards; }

        /* item hover */
        .ucp-is-item   { transition:background .18s; border-radius:8px; padding:2px 6px 2px 2px; margin:0 -6px; }
        .ucp-is-item:hover   { background:rgba(255,255,255,0.07); }
        .ucp-isnt-item { transition:background .18s; border-radius:8px; padding:2px 6px 2px 2px; margin:0 -6px; }
        .ucp-isnt-item:hover { background:rgba(239,68,68,0.05); }

        @media (prefers-reduced-motion:reduce) {
          .ucp-hidden,.ucp-card,.ucp-is-item,.ucp-isnt-item,.ucp-princ {
            opacity:1!important; transform:none!important; animation:none!important;
          }
          .ucp-visible { animation:none!important; opacity:1!important; }
        }
      `}</style>

      <section
        aria-label="Permissioned workforce context not surveillance"
        className="w-full bg-white py-20 md:py-24"
      >
        <div className="mx-auto w-full max-w-7xl px-6 md:px-10 lg:px-16">

          {/* ── Heading ── */}
          <div ref={headRef} className={`ucp-hidden ${headIn ? "ucp-visible" : ""} text-center mb-12`}>
            <h2 className="font-bold leading-[1.1] tracking-tight text-gray-900 mb-4" style={{ fontSize: "35px" }}>
              Permissioned workforce context not surveillance
            </h2>
            <p className="mx-auto max-w-[760px] text-[15px] leading-[1.8] text-gray-500">
              The ZoikoTime integration is the enterprise moat, but it requires precise language.
              Here is what Sema Signal is, what it isn&apos;t, and the principle that governs the boundary.
            </p>
          </div>

          {/* ── Two cards ── */}
          <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">

            {/* LEFT — dark, WHAT IT IS */}
            <div
              className={`ucp-card ${cardsIn ? "on" : ""} rounded-2xl p-8 flex flex-col gap-6`}
              style={{ background: "#1a1a2e" }}
            >
              {/* Badge */}
              <span className="inline-flex items-center gap-2 w-fit text-[10.5px] font-semibold uppercase tracking-[0.14em] px-3 py-1.5 rounded-full"
                style={{ background: "rgba(99,102,241,0.18)", color: "#a5b4fc", border: "1px solid rgba(99,102,241,0.25)" }}>
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 flex-shrink-0" />
                What it is
              </span>

              {/* Title */}
              <h3 className="text-[clamp(18px,2vw,24px)] font-bold leading-[1.2] text-white">
                A governed route for relevant communication context to support{" "}
                <em className="font-bold italic" style={{ fontFamily: "Georgia, serif", color: "#a5b4fc" }}>
                  ZoikoTime workflows
                </em>
                .
              </h3>

              {/* Desc */}
              <p className="text-[13.5px] leading-[1.75]" style={{ color: "#9da0c8" }}>
                Sema Signal creates a permissioned, policy-bound channel for communication context — call participants, decisions, durations, linked projects — to support workforce assurance where the customer has enabled it.
              </p>

              {/* Green check items */}
              <div className={`flex flex-col gap-2.5 ${isActive ? "ucp-is-in" : ""}`}>
                {isItems.map((item, i) => (
                  <div key={i} className="ucp-is-item flex items-start gap-3">
                    <span className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5"
                      style={{ background: "rgba(52,211,153,0.15)", border: "1.5px solid rgba(52,211,153,0.4)" }}>
                      <svg width="9" height="9" viewBox="0 0 10 10" fill="none">
                        <polyline points="2,5 4,7 8,3" stroke="#34d399" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </span>
                    <span className="text-[13.5px] leading-snug" style={{ color: "#c7caed" }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT — white, WHAT IT ISN'T */}
            <div
              className={`ucp-card ucp-card-right ${cardsIn ? "on" : ""} rounded-2xl p-8 flex flex-col gap-6`}
              style={{ background: "#fff", border: "1px solid #e8ecf5", boxShadow: "0 2px 20px rgba(71,71,135,0.06)" }}
            >
              {/* Badge */}
              <span className="inline-flex items-center gap-2 w-fit text-[10.5px] font-semibold uppercase tracking-[0.14em] px-3 py-1.5 rounded-full"
                style={{ background: "#fff1f2", color: "#e11d48", border: "1px solid #fecdd3" }}>
                <span className="w-1.5 h-1.5 rounded-full bg-rose-400 flex-shrink-0" />
                What it isn&apos;t
              </span>

              {/* Title */}
              <h3 className="text-[clamp(18px,2vw,24px)] font-bold leading-[1.2] text-gray-900">
                Sema does not score employees and not every conversation becomes evidence.
              </h3>

              {/* Desc */}
              <p className="text-[13.5px] leading-[1.75] text-gray-500">
                The wireframe locks five claims that this page must never make. Sema&apos;s positioning depends on saying these out loud, not burying them in a privacy policy footnote.
              </p>

              {/* Red X items */}
              <div className={`flex flex-col gap-2.5 ${isntActive ? "ucp-isnt-in" : ""}`}>
                {isntItems.map((item, i) => (
                  <div key={i} className="ucp-isnt-item flex items-start gap-3">
                    <span className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5"
                      style={{ background: "#fff1f2", border: "1.5px solid #fecdd3" }}>
                      <svg width="9" height="9" viewBox="0 0 10 10" fill="none">
                        <line x1="3" y1="3" x2="7" y2="7" stroke="#e11d48" strokeWidth="1.8" strokeLinecap="round"/>
                        <line x1="7" y1="3" x2="3" y2="7" stroke="#e11d48" strokeWidth="1.8" strokeLinecap="round"/>
                      </svg>
                    </span>
                    <span className="text-[13.5px] leading-snug text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ── Locked Principle card ── */}
          <div
            ref={princRef}
            className={`ucp-princ ${princIn ? "on" : ""} w-full rounded-2xl px-10 py-10 text-center`}
            style={{ background: "#474787" }}
          >
            <p className="text-[10.5px] font-semibold uppercase tracking-[0.18em] mb-5" style={{ color: "#a5b4fc" }}>
              The Locked Principle
            </p>
            <p className="mx-auto max-w-[700px] leading-[1.45]" style={{ fontSize: "clamp(17px,2vw,24px)" }}>
              <span className="font-bold text-white">
                Sema Signal does not turn every conversation into workforce evidence.
              </span>{" "}
              <em
                className="font-medium  italic"
                style={{ color: "#c7caed", fontFamily: "Georgia, serif", fontSize: "inherit" }}
              >
                It creates a governed, permissioned route for relevant communication context to support ZoikoTime workflows where enterprise policy allows it.
              </em>
            </p>
          </div>

        </div>
      </section>
    </>
  );
}