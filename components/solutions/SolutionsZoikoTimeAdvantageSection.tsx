"use client";

import React, { useEffect, useState, useRef } from "react";

function useInView(threshold = 0.08) {
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

const layers = [
  {
    id: "L1",
    title: ["Sema ", "Communication Layer"],
    titleItalic: [false, true],
    desc: "Messages, calls, meetings, channels, shared files, participants, decisions and follow-ups.",
    bullets: [
      "Structured communication record",
      "Threaded discussion trails",
      "Searchable collaboration context",
      "File & decision provenance",
    ],
  },
  {
    id: "L2",
    title: ["Sema ", "Signal Layer"],
    titleItalic: [false, true],
    desc: "AI summaries, action items, owner detection, decision extraction, meeting duration and related-thread linking.",
    bullets: [
      "Operational signal from conversation",
      "Owner & due-date suggestions",
      "No manual note-taking required",
      "Cross-conversation memory",
    ],
  },
  {
    id: "L3",
    title: ["ZoikoTime ", "Workforce Context"],
    titleItalic: [false, true],
    desc: "Work sessions, activity states, attendance context, productivity signals, policy rules, time records and audit trail.",
    bullets: [
      "Verified work context",
      "Policy-bound activity records",
      "Workforce truth signals",
      "Audit-ready time evidence",
    ],
  },
];

const combinedBullets = [
  "Meeting-to-work continuity",
  "Billing & client confidence",
  "Operational accountability",
  "Manager review workflows",
  "Audit support & compliance evidence",
  "Reduced ambiguity",
];

const useCases = [
  { title: "Professional services",   desc: "Connect client calls, internal discussions, work sessions and deliverables." },
  { title: "Consulting & agencies",   desc: "Support billing confidence by linking meetings, follow-ups and verified work activity." },
  { title: "Remote teams",            desc: "Understand collaboration patterns without relying only on self-reporting." },
  { title: "Regulated operations",    desc: "Preserve auditable communication and workforce context under policy." },
  { title: "Field & distributed",     desc: "Connect calls, updates, instructions and confirmed work signals." },
];

export default function SolutionsZoikoTimeAdvantageSection() {
  const { ref: headRef,    inView: headIn    } = useInView(0.15);
  const { ref: layersRef,  inView: layersIn  } = useInView(0.06);
  const { ref: useCaseRef, inView: useCaseIn } = useInView(0.06);
  const { ref: noteRef,    inView: noteIn    } = useInView(0.1);
  const { ref: ctaRef,     inView: ctaIn     } = useInView(0.1);

  const [rowsIn, setRowsIn] = useState(false);
  useEffect(() => { if (layersIn) setTimeout(() => setRowsIn(true), 200); }, [layersIn]);

  return (
    <>
      <style>{`
        @keyframes sztFadeUp {
          from { opacity:0; transform:translateY(26px); }
          to   { opacity:1; transform:translateY(0); }
        }
        .szt-hidden  { opacity:0; transform:translateY(26px); }
        .szt-visible { animation: sztFadeUp .6s cubic-bezier(.22,1,.36,1) forwards; }

        /* layer row stagger */
        @keyframes sztRowIn {
          from { opacity:0; transform:translateX(-12px); }
          to   { opacity:1; transform:translateX(0); }
        }
        .szt-row { opacity:0; }
        .szt-rows-in .szt-row:nth-child(1) { animation: sztRowIn .4s ease .1s  forwards; }
        .szt-rows-in .szt-row:nth-child(2) { animation: sztRowIn .4s ease .22s forwards; }
        .szt-rows-in .szt-row:nth-child(3) { animation: sztRowIn .4s ease .34s forwards; }

        /* combined row */
        @keyframes sztCombinedIn {
          from { opacity:0; transform:translateY(10px); }
          to   { opacity:1; transform:translateY(0); }
        }
        .szt-combined { opacity:0; }
        .szt-rows-in .szt-combined { animation: sztCombinedIn .5s ease .5s forwards; }

        /* use case card stagger */
        .szt-uc { opacity:0; transform:translateY(18px); transition:background .2s,transform .25s; }
        .szt-uc-in .szt-uc:nth-child(1) { animation: sztFadeUp .5s ease .04s forwards; }
        .szt-uc-in .szt-uc:nth-child(2) { animation: sztFadeUp .5s ease .11s forwards; }
        .szt-uc-in .szt-uc:nth-child(3) { animation: sztFadeUp .5s ease .18s forwards; }
        .szt-uc-in .szt-uc:nth-child(4) { animation: sztFadeUp .5s ease .25s forwards; }
        .szt-uc-in .szt-uc:nth-child(5) { animation: sztFadeUp .5s ease .32s forwards; }
        .szt-uc:hover { background:rgba(255,255,255,0.14)!important; transform:translateY(-3px)!important; }

        /* shimmer btns */
        @keyframes sztShimmer {
          from { transform:translateX(-100%); }
          to   { transform:translateX(220%); }
        }
        .szt-btn { position:relative; overflow:hidden; transition:opacity .2s,transform .2s; }
        .szt-btn::after {
          content:""; position:absolute; inset:0;
          background:linear-gradient(120deg,transparent 30%,rgba(255,255,255,0.2) 50%,transparent 70%);
          transform:translateX(-100%);
        }
        .szt-btn:hover::after { animation: sztShimmer .6s ease forwards; }
        .szt-btn:hover { opacity:.88; transform:translateY(-2px); }
        .szt-btn:active { transform:translateY(0); }
        .szt-arrow { display:inline-block; transition:transform .2s; }
        .szt-btn:hover .szt-arrow { transform:translateX(3px); }

        .szt-btn-s { transition:background .2s,transform .2s; }
        .szt-btn-s:hover { background:rgba(255,255,255,0.1)!important; transform:translateY(-2px); }
        .szt-btn-s:active { transform:translateY(0); }

        /* bullet dot */
        .szt-dot { width:5px; height:5px; border-radius:50%; flex-shrink:0; margin-top:5px; }

        @media (prefers-reduced-motion:reduce) {
          .szt-hidden,.szt-row,.szt-combined,.szt-uc { opacity:1!important; transform:none!important; animation:none!important; }
          .szt-visible { animation:none!important; opacity:1!important; }
          .szt-uc:hover { transform:none!important; }
        }
      `}</style>

      <section
        aria-label="Connect communication to verified workforce truth"
        className="w-full py-20 md:py-28"
        style={{ background: "#474889" }}
      >
        <div className="mx-auto w-full max-w-7xl px-6 md:px-10 lg:px-16 flex flex-col items-center">

          {/* ── Badge ── */}
          <div ref={headRef} className={`szt-hidden ${headIn ? "szt-visible" : ""} flex flex-col items-center text-center mb-14 w-full`}>
            <span
              className="inline-flex items-center gap-2 mb-8 px-5 py-2 rounded-full text-[11px] font-semibold uppercase tracking-[0.14em]"
              style={{ border: "1px solid rgba(163,182,252,0.4)", color: "#a5b4fc", background: "rgba(255,255,255,0.07)" }}
            >
              <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: "#a5b4fc" }} aria-hidden="true" />
              The ZoikoTime Advantage
            </span>

            <h2 className="font-bold leading-[1.1] tracking-tight text-white mb-5" style={{ fontSize: "35px" }}>
              Connect communication to verified workforce truth
            </h2>
            <p className="text-[15px] leading-[1.8]" style={{ color: "#c7caed" }}>
              Sema is powerful as an intelligent communication platform. For organizations that need deeper
              accountability, auditability and workforce context, Sema connects with ZoikoTime to link
              conversations, meetings, work activity and verified operational signals into one governed layer.
            </p>
          </div>

          {/* ── Layers card ── */}
          <div
            ref={layersRef}
            className={`szt-hidden ${layersIn ? "szt-visible" : ""} w-full rounded-2xl overflow-hidden mb-5`}
            style={{ border: "1px solid rgba(255,255,255,0.12)", animationDelay: "0.05s" }}
          >
            <div className={rowsIn ? "szt-rows-in" : ""}>

              {/* L1, L2, L3 rows */}
              {layers.map((layer, i) => (
                <div
                  key={layer.id}
                  className={`szt-row grid grid-cols-[56px_1fr_1fr] gap-4 items-start px-6 py-5 ${i < layers.length - 1 ? "border-b" : ""}`}
                  style={{
                    background: "rgba(255,255,255,0.06)",
                    borderColor: "rgba(255,255,255,0.1)",
                  }}
                >
                  {/* Layer ID */}
                  <div className="flex items-start pt-1">
                    <span className="text-[11px] font-bold uppercase tracking-[0.13em]" style={{ color: "#a5b4fc" }}>
                      {layer.id}
                    </span>
                  </div>

                  {/* Title + desc */}
                  <div className="pr-4">
                    <p className="text-[14.5px] font-semibold mb-2 leading-snug">
                      {layer.title.map((part, ti) =>
                        layer.titleItalic[ti]
                          ? <em key={ti} className="not-italic italic font-semibold" style={{ fontFamily: "Georgia, serif", color: "#e0e7ff" }}>{part}</em>
                          : <span key={ti} className="text-white">{part}</span>
                      )}
                    </p>
                    <p className="text-[12.5px] leading-relaxed" style={{ color: "#9da0c8" }}>
                      {layer.desc}
                    </p>
                  </div>

                  {/* Bullet features 2-col */}
                  <div className="grid grid-cols-2 gap-x-4 gap-y-1.5">
                    {layer.bullets.map((b, bi) => (
                      <div key={bi} className="flex items-start gap-2">
                        <span className="szt-dot mt-[5px]" style={{ background: "#6366f1" }} />
                        <span className="text-[12px] leading-snug" style={{ color: "#c7caed" }}>{b}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}

              {/* Combined Intelligence row — white bg */}
              <div
                className="szt-combined grid grid-cols-[56px_1fr_1fr] gap-4 items-start px-6 py-5"
                style={{ background: "#fff" }}
              >
                <div />
                <div className="pr-4">
                  <p className="text-[15px] font-semibold text-gray-900 mb-2">Combined Intelligence</p>
                  <p className="text-[12.5px] leading-relaxed text-gray-500">
                    Communication signals plus workforce context — under permissions, role-based access and customer-defined policy.
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-x-4 gap-y-1.5">
                  {combinedBullets.map((b, bi) => (
                    <div key={bi} className="flex items-start gap-2">
                      <span className="szt-dot mt-[5px]" style={{ background: "#6366f1" }} />
                      <span className="text-[12px] leading-snug text-gray-600">{b}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>

          {/* ── Priority integration use cases ── */}
          <div
            ref={useCaseRef}
            className={`w-full rounded-2xl p-6 mb-5 ${useCaseIn ? "szt-uc-in" : ""}`}
            style={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.1)" }}
          >
            <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-center mb-5" style={{ color: "#a5b4fc" }}>
              Priority Integration Use Cases
            </p>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
              {useCases.map((uc, i) => (
                <div
                  key={i}
                  className="szt-uc rounded-xl p-4 cursor-default"
                  style={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.1)" }}
                >
                  <p className="text-[12px] font-semibold mb-1.5" style={{ color: "#a5b4fc" }}>{uc.title}</p>
                  <p className="text-[11.5px] leading-relaxed" style={{ color: "#9da0c8" }}>{uc.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* ── Trust note — left border ── */}
          <div
            ref={noteRef}
            className={`szt-hidden ${noteIn ? "szt-visible" : ""} w-full mb-10 rounded-xl px-6 py-4`}
            style={{
              background: "rgba(255,255,255,0.06)",
              border: "1px solid rgba(255,255,255,0.1)",
              borderLeft: "3px solid #6366f1",
              animationDelay: "0.08s",
            }}
          >
            <p className="text-[13px] leading-relaxed" style={{ color: "#c7caed" }}>
              <span className="font-bold text-white">Built for trust, not surveillance. </span>
              ZoikoTime integration is governed by permissions, customer configuration, role-based access,
              retention policies and applicable legal requirements. Sema does not enable surveillance.
            </p>
          </div>

          {/* ── CTAs ── */}
          <div
            ref={ctaRef}
            className={`szt-hidden ${ctaIn ? "szt-visible" : ""} flex flex-wrap items-center justify-center gap-4`}
            style={{ animationDelay: "0.1s" }}
          >
            <a
              href="#explore"
              className="szt-btn inline-flex items-center gap-2 rounded-full px-8 py-3.5 text-[15px] font-semibold bg-white"
              style={{ color: "#474787" }}
            >
              Explore Sema + ZoikoTime
              <span className="szt-arrow" aria-hidden="true">→</span>
            </a>
            <a
              href="#demo"
              className="szt-btn-s inline-flex items-center gap-2 rounded-full px-8 py-3.5 text-[15px] font-medium text-white border"
              style={{ borderColor: "rgba(255,255,255,0.35)", background: "transparent" }}
            >
              Request integration demo
            </a>
          </div>

        </div>
      </section>
    </>
  );
}