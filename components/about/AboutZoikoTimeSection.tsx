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

const col1 = ["Messages", "Audio & video calls", "Meeting decisions", "Action items", "Participants", "Files & follow-ups"];
const col2 = ["Work sessions", "Time records", "Activity states", "Attendance context", "Productivity signals", "Audit trail"];
const col3 = ["Meeting-to-work continuity", "Verified collaboration", "Better manager review", "Stronger billing support", "Compliance evidence", "Reduced ambiguity"];

const columns = [
  { num: "01", title: "Sema captures communication signals", items: col1 },
  { num: "02", title: "ZoikoTime verifies workforce context",  items: col2 },
  { num: "03", title: "Together they create",                  items: col3 },
];

export default function AboutZoikoTimeSection() {
  const { ref: headRef,  inView: headIn  } = useInView(0.15);
  const { ref: colsRef,  inView: colsIn  } = useInView(0.08);
  const { ref: noteRef,  inView: noteIn  } = useInView(0.1);
  const { ref: ctaRef,   inView: ctaIn   } = useInView(0.1);

  // stagger items per column once in view
  const [c1, setC1] = useState(-1);
  const [c2, setC2] = useState(-1);
  const [c3, setC3] = useState(-1);

  useEffect(() => {
    if (!colsIn) return;
    col1.forEach((_, i) => setTimeout(() => setC1(i), i * 80));
    col2.forEach((_, i) => setTimeout(() => setC2(i), 180 + i * 80));
    col3.forEach((_, i) => setTimeout(() => setC3(i), 360 + i * 80));
  }, [colsIn]);

  const actives = [c1, c2, c3];

  return (
    <>
      <style>{`
        @keyframes aztFadeUp {
          from { opacity:0; transform:translateY(26px); }
          to   { opacity:1; transform:translateY(0); }
        }
        .azt-hidden  { opacity:0; transform:translateY(26px); }
        .azt-visible { animation: aztFadeUp .6s cubic-bezier(.22,1,.36,1) forwards; }

        /* card stagger */
        .azt-col-wrap { opacity:0; transform:translateY(22px); }
        .azt-cols-in .azt-col-wrap:nth-child(1) { animation: aztFadeUp .55s ease .04s forwards; }
        .azt-cols-in .azt-col-wrap:nth-child(2) { animation: aztFadeUp .55s ease .12s forwards; }
        .azt-cols-in .azt-col-wrap:nth-child(3) { animation: aztFadeUp .55s ease .20s forwards; }

        /* item slide in */
        @keyframes aztItemIn {
          from { opacity:0; transform:translateX(-10px); }
          to   { opacity:1; transform:translateX(0); }
        }
        .azt-item { opacity:0; }
        .azt-item.on { animation: aztItemIn .28s ease forwards; }

        /* number circle pulse */
        @keyframes aztNumPulse {
          0%,100% { box-shadow: 0 0 0 0 rgba(163,182,252,0.4); }
          50%      { box-shadow: 0 0 0 7px rgba(163,182,252,0); }
        }
        .azt-num { animation: aztNumPulse 3s ease-in-out infinite; }

        /* badge dot pulse */
        @keyframes aztDot {
          0%,100% { box-shadow: 0 0 0 0 rgba(99,102,241,0.5); }
          50%      { box-shadow: 0 0 0 5px rgba(99,102,241,0); }
        }
        .azt-dot { animation: aztDot 2.4s ease-in-out infinite; }

        /* shimmer on primary btn */
        @keyframes aztShimmer {
          from { transform:translateX(-100%); }
          to   { transform:translateX(220%); }
        }
        .azt-btn-p { position:relative; overflow:hidden; transition:opacity .2s,transform .2s; }
        .azt-btn-p::after {
          content:""; position:absolute; inset:0;
          background:linear-gradient(120deg,transparent 30%,rgba(255,255,255,0.2) 50%,transparent 70%);
          transform:translateX(-100%);
        }
        .azt-btn-p:hover::after { animation: aztShimmer .6s ease forwards; }
        .azt-btn-p:hover { opacity:.88; transform:translateY(-2px); }
        .azt-btn-p:active { transform:translateY(0); }

        .azt-btn-s { transition:background .2s,transform .2s; }
        .azt-btn-s:hover { background:rgba(255,255,255,0.1)!important; transform:translateY(-2px); }
        .azt-btn-s:active { transform:translateY(0); }

        /* arrow */
        .azt-arrow { display:inline-block; transition:transform .2s; }
        .azt-btn-p:hover .azt-arrow,
        .azt-btn-s:hover .azt-arrow { transform:translateX(3px); }

        @media (prefers-reduced-motion:reduce) {
          .azt-hidden,.azt-col-wrap,.azt-item { opacity:1!important; transform:none!important; animation:none!important; }
          .azt-visible { animation:none!important; opacity:1!important; }
          .azt-num,.azt-dot { animation:none!important; }
        }
      `}</style>

      <section
        aria-label="The route from conversation intelligence to workforce truth"
        className="w-full py-20 md:py-28"
        style={{ background: "#474889" }}
      >
        <div className="mx-auto w-full max-w-7xl px-6 md:px-10 lg:px-16 flex flex-col items-center">

          {/* ── Badge + Heading ── */}
          <div
            ref={headRef}
            className={`azt-hidden ${headIn ? "azt-visible" : ""} w-full flex flex-col items-center text-center mb-16`}
          >
            {/* Badge pill */}
            <span
              className="inline-flex items-center gap-2 mb-10 px-5 py-2 rounded-full text-[11px] font-semibold uppercase tracking-[0.14em]"
              style={{ border: "1px solid rgba(163,182,252,0.4)", color: "#a5b4fc", background: "rgba(255,255,255,0.06)" }}
            >
              <span className="azt-dot w-1.5 h-1.5 rounded-full bg-indigo-400 flex-shrink-0" aria-hidden="true" />
              Sema × ZoikoTime · Strategic Integration
            </span>

            <h2
              className="font-bold leading-[1.1] tracking-tight text-white mb-6 max-w-[680px]"
              style={{ fontSize: "clamp(26px,4vw,35px)" }}
            >
              The route from conversation intelligence to workforce truth
            </h2>

            <p className="max-w-[660px] text-[15px] leading-[1.8]" style={{ color: "#c7caed" }}>
              Sema is powerful on its own. For organizations that need deeper accountability,
              auditability and verified work signals, Sema connects with ZoikoTime to link
              conversations, meetings, activity and workforce context into one governed operating layer.
            </p>
          </div>

          {/* ── 3 columns — numbers OUTSIDE & ABOVE cards ── */}
          <div
            ref={colsRef}
            className={`w-full grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 ${colsIn ? "azt-cols-in" : ""}`}
          >
            {columns.map((col, ci) => (
              <div key={ci} className="azt-col-wrap flex flex-col items-center">

                {/* ── Number circle — OUTSIDE card, above ── */}
                <div className="flex flex-col items-center mb-0">
                  <div
                    className="azt-num w-10 h-10 rounded-full flex items-center justify-center text-[12px] font-bold flex-shrink-0"
                    style={{
                      background: "rgba(163,182,252,0.15)",
                      border: "1px solid rgba(163,182,252,0.4)",
                      color: "#a5b4fc",
                    }}
                  >
                    {col.num}
                  </div>
                  {/* vertical dash connector */}
                  <div
                    style={{
                      width: "1px",
                      height: "20px",
                      background: "rgba(163,182,252,0.35)",
                      marginTop: "4px",
                    }}
                  />
                </div>

                {/* ── Column title — between number and card ── */}
                <h3
                  className="text-[14.5px] font-semibold text-white text-center mb-4 px-2 leading-snug"
                >
                  {col.title}
                </h3>

                {/* ── Card — items only ── */}
                <div
                  className="w-full rounded-2xl p-5 flex flex-col"
                  style={{
                    background: "rgba(255,255,255,0.08)",
                    border: "1px solid rgba(255,255,255,0.12)",
                  }}
                >
                  {col.items.map((item, i) => (
                    <div
                      key={i}
                      className={`azt-item flex items-center gap-3 py-2.5 ${i < col.items.length - 1 ? "border-b" : ""} ${i <= actives[ci] ? "on" : ""}`}
                      style={{
                        borderColor: "rgba(255,255,255,0.08)",
                        animationDelay: `${i * 0.03}s`,
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
            ))}
          </div>

          {/* ── Trust note — left blue border accent ── */}
          <div
            ref={noteRef}
            className={`azt-hidden ${noteIn ? "azt-visible" : ""} w-full mb-12`}
            style={{ animationDelay: "0.08s" }}
          >
            <div
              className="w-full rounded-xl px-6 py-5"
              style={{
                background: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(255,255,255,0.1)",
                borderLeft: "3px solid #6366f1",
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
            className={`azt-hidden ${ctaIn ? "azt-visible" : ""} flex flex-wrap items-center justify-center gap-4`}
            style={{ animationDelay: "0.1s" }}
          >
            {/* Primary — light filled */}
            <a
              href="#explore"
              className="azt-btn-p inline-flex items-center gap-2 rounded-full px-8 py-3.5 text-[15px] font-semibold"
              style={{ background: "#fff", color: "#000", border: "1px solid rgba(255,255,255,0.3)" }}
            >
              Explore Sema + ZoikoTime
              <span className="azt-arrow" aria-hidden="true">→</span>
            </a>

            {/* Secondary — outline */}
            <a
              href="#demo"
              className="azt-btn-s inline-flex items-center gap-2 rounded-full px-8 py-3.5 text-[15px] font-medium text-white"
              style={{ border: "1px solid rgba(255,255,255,0.3)", background: "transparent" }}
            >
              Request an integration demo
              <span className="azt-arrow" aria-hidden="true">→</span>
            </a>
          </div>

        </div>
      </section>
    </>
  );
}