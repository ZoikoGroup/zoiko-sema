"use client";

import React, { useEffect, useRef, useState } from "react";
import { FileText, Check, Search } from "lucide-react";

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

const outcomes = [
  {
    icon: <FileText size={16} />,
    title: "Fewer recap gaps",
    desc: "Reviewed summaries after every meeting",
  },
  {
    icon: <Check size={16} />,
    title: "Clearer follow-through",
    desc: "Owned action items with due dates",
  },
  {
    icon: <Search size={16} />,
    title: "Searchable decisions",
    desc: "Decision log linked to source meetings",
  },
];

export default function MeetingSummaryOutcomesSection() {
  const { ref: leftRef, inView: leftIn } = useInView(0.2);
  const { ref: rightRef, inView: rightIn } = useInView(0.15);

  return (
    <>
      <style>{`
        @keyframes msoFadeUp {
          from { opacity:0; transform:translateY(28px); }
          to   { opacity:1; transform:translateY(0); }
        }
        .mso-hidden { opacity:0; transform:translateY(28px); }
        .mso-visible { animation: msoFadeUp .6s cubic-bezier(.22,1,.36,1) forwards; }

        .mso-card { opacity:0; transform:translateY(16px); }
        .mso-card.active {
          animation: msoFadeUp .5s cubic-bezier(.22,1,.36,1) forwards;
        }

        .mso-card {
          transition: transform .2s ease, background-color .2s ease;
        }
        .mso-card:hover {
          transform: translateX(-3px);
          background-color: rgba(255,255,255,0.14);
        }

        @media (prefers-reduced-motion: reduce) {
          .mso-hidden, .mso-card { opacity:1!important; transform:none!important; animation:none!important; }
        }
      `}</style>

      <section
        aria-label="Customer outcomes"
        className="w-full py-20 md:py-24"
        style={{ background: "#4F46E5" }}
      >
        <div className="mx-auto w-full max-w-7xl px-6 md:px-10 lg:px-16">
          <div className="grid grid-cols-1 md:grid-cols-[1.15fr_1fr] gap-12 md:gap-16 items-center">

            {/* LEFT — Quote */}
            <div
              ref={leftRef}
              className={`mso-hidden ${leftIn ? "mso-visible" : ""}`}
            >
              <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#C7C4F5] mb-5">
                Outcomes
              </p>

              <p className="text-[clamp(20px,2.4vw,26px)] font-semibold leading-[1.4] text-white mb-8 max-w-[520px]">
                <span className="text-[#C7C4F5] mr-1">&ldquo;</span>
                Our meetings used to end with good intentions and no record. Now every
                call produces a reviewed summary, owned action items, and a decision
                log the whole team can search.
              </p>

              <div className="flex items-center gap-3">
                <span
                  className="w-10 h-10 rounded-full flex-shrink-0"
                  style={{ background: "linear-gradient(135deg, #4FD1C5 0%, #4F7CFF 100%)" }}
                />
                <div>
                  <p className="text-[14px] font-semibold text-white leading-tight">
                    Head of Operations
                  </p>
                  <p className="text-[13px] text-[#C7C4F5] leading-tight mt-0.5">
                    Growth-stage software company
                  </p>
                </div>
              </div>
            </div>

            {/* RIGHT — Outcome cards */}
            <div
              ref={rightRef}
              className="flex flex-col gap-4"
            >
              {outcomes.map((o, i) => (
                <div
                  key={i}
                  className={`mso-card ${rightIn ? "active" : ""} flex items-center gap-4 rounded-2xl px-5 py-4`}
                  style={{
                    backgroundColor: "rgba(255,255,255,0.08)",
                    border: "1px solid rgba(255,255,255,0.14)",
                    animationDelay: `${i * 0.12}s`,
                  }}
                >
                  <span
                    className="flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center"
                    style={{ backgroundColor: "rgba(255,255,255,0.14)", color: "#fff" }}
                  >
                    {o.icon}
                  </span>
                  <div>
                    <h3 className="text-[14.5px] font-semibold text-white mb-0.5">
                      {o.title}
                    </h3>
                    <p className="text-[13px] text-[#D6D4F8] leading-snug">
                      {o.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>
    </>
  );
}