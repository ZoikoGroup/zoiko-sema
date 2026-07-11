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

const col1 = ["Messages & conversations", "Meetings & recordings", "Action items", "Device & app use"];
const col2 = ["Work sessions", "Time & attendance", "Attendance context", "Audit trail"];
const col3 = ["Meeting & work continuity", "Verified attendance", "Manager review workflows", "Reduced ambiguity"];

const columns = [
  { num: "01", title: "Sema captures communication signals", items: col1, icon: "/Images/mynaui_signal-solid.png" },
  { num: "02", title: "ZoikoTime verifies workforce context",  items: col2, icon: "/Images/Vector.png" },
  { num: "03", title: "Together they support",                  items: col3, icon: "/Images/material-symbols_support.png" },
];

const TRUST_ICON_URL = "/Images/Vector (1).png";

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

        .azt-card {
          transition: transform .3s cubic-bezier(.22,1,.36,1), box-shadow .3s ease, background-color .3s ease;
        }
        .azt-card:hover {
          transform: translateY(-5px);
          background-color: rgba(255,255,255,0.11) !important;
          box-shadow: 0 20px 40px rgba(0,0,0,0.2);
        }

        .azt-card-icon {
          transition: transform .3s ease;
        }
        .azt-card:hover .azt-card-icon {
          transform: scale(1.1) rotate(-4deg);
        }

        /* item slide in */
        @keyframes aztItemIn {
          from { opacity:0; transform:translateX(-10px); }
          to   { opacity:1; transform:translateX(0); }
        }
        .azt-item { opacity:0; }
        .azt-item.on { animation: aztItemIn .28s ease forwards; }

        /* badge dot pulse */
        @keyframes aztDot {
          0%,100% { box-shadow: 0 0 0 0 rgba(99,102,241,0.5); }
          50%      { box-shadow: 0 0 0 5px rgba(99,102,241,0); }
        }
        .azt-dot { animation: aztDot 2.4s ease-in-out infinite; }

        /* trust note hover */
        .azt-note {
          transition: background-color .25s ease, border-color .25s ease;
        }
        .azt-note:hover {
          background-color: rgba(255,255,255,0.09) !important;
        }
        .azt-note-icon {
          transition: transform .25s ease;
        }
        .azt-note:hover .azt-note-icon {
          transform: scale(1.08);
        }

        /* shimmer on primary btn */
        @keyframes aztShimmer {
          from { transform:translateX(-100%); }
          to   { transform:translateX(220%); }
        }
        .azt-btn-p { position:relative; overflow:hidden; transition:opacity .2s,transform .2s,box-shadow .2s; }
        .azt-btn-p::after {
          content:""; position:absolute; inset:0;
          background:linear-gradient(120deg,transparent 30%,rgba(0,0,0,0.08) 50%,transparent 70%);
          transform:translateX(-100%);
        }
        .azt-btn-p:hover::after { animation: aztShimmer .6s ease forwards; }
        .azt-btn-p:hover { transform:translateY(-2px); box-shadow: 0 12px 26px rgba(0,0,0,0.25); }
        .azt-btn-p:active { transform:translateY(0); }

        .azt-btn-s { transition:background .2s,transform .2s,border-color .2s; }
        .azt-btn-s:hover { background:rgba(255,255,255,0.1)!important; border-color:rgba(255,255,255,0.5)!important; transform:translateY(-2px); }
        .azt-btn-s:active { transform:translateY(0); }

        @media (prefers-reduced-motion:reduce) {
          .azt-hidden,.azt-col-wrap,.azt-item { opacity:1!important; transform:none!important; animation:none!important; }
          .azt-visible { animation:none!important; opacity:1!important; }
          .azt-dot { animation:none!important; }
          .azt-card:hover, .azt-card:hover .azt-card-icon, .azt-note:hover .azt-note-icon,
          .azt-btn-p:hover, .azt-btn-s:hover { transform:none!important; }
        }
      `}</style>

      <section
        aria-label="Connect Sema to ZoikoTime when communication needs to become workforce truth"
        className="w-full py-16 md:py-20"
        style={{ background: "#4c4995" }}
      >
        <div className="mx-auto w-full max-w-6xl px-6 md:px-10 lg:px-16 flex flex-col items-center">

          {/* ── Badge + Heading ── */}
          <div
            ref={headRef}
            className={`azt-hidden ${headIn ? "azt-visible" : ""} w-full flex flex-col items-center text-center mb-10`}
          >
            {/* Badge pill */}
            <span
              className="inline-flex items-center gap-2 mb-6 text-[11px] font-semibold uppercase tracking-[0.14em]"
              style={{ color: "#9FB0FF" }}
            >
              <span className="azt-dot w-1.5 h-1.5 rounded-full bg-white flex-shrink-0" aria-hidden="true" />
              Sema + ZoikoTime Strategic Integration
            </span>

            <h2
              className="font-extrabold leading-[1.2] tracking-tight text-white mb-5 max-w-[820px]"
              style={{ fontSize: "clamp(24px,3.6vw,32px)" }}
            >
              Connect Sema to ZoikoTime when communication needs to become workforce truth.
            </h2>

            <p className="max-w-[640px] text-[13.5px] leading-[1.75]" style={{ color: "#c7caed" }}>
              Sema&apos;s power lies in its own. For organizations that need verified workforce context, Sema integrates with ZoikoTime to connect conversations, meetings, activity, time and collaboration signals into a governed reporting layer.
            </p>
          </div>

          {/* ── 3 columns ── */}
          <div
            ref={colsRef}
            className={`w-full grid grid-cols-1 md:grid-cols-3 gap-4 mb-4 ${colsIn ? "azt-cols-in" : ""}`}
          >
            {columns.map((col, ci) => (
              <div key={ci} className="azt-col-wrap">
                <div
                  className="azt-card h-full rounded-2xl p-6 flex flex-col"
                  style={{
                    background: "#FFFFFF14",
                    border: "1px solid #FFFFFF29",
                  }}
                >
                  <img
                    src={col.icon}
                    alt=""
                    aria-hidden="true"
                    className="azt-card-icon w-6 h-6 object-contain mb-4"
                  />

                  <h3 className="text-[13.5px] font-bold text-white mb-3 leading-snug">
                    {col.num} &middot; {col.title}
                  </h3>

                  <div className="flex flex-col">
                    {col.items.map((item, i) => (
                      <div
                        key={i}
                        className={`azt-item flex items-center gap-2.5 py-1.5 ${i <= actives[ci] ? "on" : ""}`}
                        style={{ animationDelay: `${i * 0.03}s` }}
                      >
                        <span
                          className="w-1 h-1 rounded-full flex-shrink-0"
                          style={{ background: "#c7caed" }}
                        />
                        <span className="text-[12.5px]" style={{ color: "#c7caed" }}>
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* ── Trust note ── */}
          <div
            ref={noteRef}
            className={`azt-hidden ${noteIn ? "azt-visible" : ""} w-full mb-8`}
            style={{ animationDelay: "0.08s" }}
          >
            <div
              className="azt-note w-full rounded-xl px-6 py-4 flex items-start gap-3"
              style={{
                background: "#FFFFFF14",
                border: "1px solid #FFFFFF29",
              }}
            >
              <img
                src={TRUST_ICON_URL}
                alt=""
                aria-hidden="true"
                className="azt-note-icon w-5 h-5 object-contain flex-shrink-0 mt-0.5"
              />
              <p className="text-[13px] leading-relaxed" style={{ color: "#c7caed" }}>
                <span className="font-bold text-white">Built for trust, not surveillance. </span>
                Sema does not turn conversation content into surveillance. ZoikoTime integration is governed by permissions, policy settings, role-based access controls, and administrative visibility.
              </p>
            </div>
          </div>

          {/* ── CTA buttons ── */}
          <div
            ref={ctaRef}
            className={`azt-hidden ${ctaIn ? "azt-visible" : ""} flex flex-wrap items-center justify-center gap-3`}
            style={{ animationDelay: "0.1s" }}
          >
            <a
              href="#explore"
              className="azt-btn-p inline-flex items-center justify-center rounded-full px-7 py-3.5 text-[14px] font-semibold"
              style={{ background: "#fff", color: "#1E1B4B" }}
            >
              Explore Sema + ZoikoTime
            </a>

            <a
              href="#demo"
              className="azt-btn-s inline-flex items-center justify-center rounded-full px-7 py-3.5 text-[14px] font-semibold text-white"
              style={{ border: "1px solid rgba(255,255,255,0.3)", background: "transparent" }}
            >
              Request integration demo
            </a>
          </div>

        </div>
      </section>
    </>
  );
}