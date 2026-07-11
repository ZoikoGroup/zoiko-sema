"use client";

import React, { useEffect, useRef, useState } from "react";
import { ArrowRight, ShieldCheck } from "lucide-react";

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

export default function MeetingSummaryGovernanceSection() {
  const { ref: leftRef, inView: leftIn } = useInView(0.2);
  const { ref: rightRef, inView: rightIn } = useInView(0.15);

  return (
    <>
      <style>{`
        @keyframes msgFadeUp {
          from { opacity:0; transform:translateY(32px); }
          to   { opacity:1; transform:translateY(0); }
        }
        @keyframes msgFadeRight {
          from { opacity:0; transform:translateX(28px) scale(0.98); }
          to   { opacity:1; transform:translateX(0) scale(1); }
        }
        .msg-hidden { opacity:0; transform:translateY(32px); }
        .msg-visible { animation: msgFadeUp .6s cubic-bezier(.22,1,.36,1) forwards; }

        .msg-img-hidden { opacity:0; transform:translateX(28px) scale(0.98); }
        .msg-img-visible { animation: msgFadeRight .7s cubic-bezier(.22,1,.36,1) forwards; }

        .msg-cta {
          transition: transform .2s ease, box-shadow .2s ease, background-color .2s ease;
        }
        .msg-cta:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 24px rgba(79,70,229,0.35);
          background-color: #4338CA;
        }
        .msg-cta:active { transform: translateY(0); }

        .msg-cta svg { transition: transform .2s ease; }
        .msg-cta:hover svg { transform: translateX(3px); }

        @media (prefers-reduced-motion: reduce) {
          .msg-hidden, .msg-img-hidden { opacity:1!important; transform:none!important; animation:none!important; }
        }
      `}</style>

      <section
        aria-label="AI governance controls for meeting summaries"
        className="w-full py-20 md:py-28"
        style={{ background: "#0F1F4E" }}
      >
        <div className="mx-auto w-full max-w-7xl px-6 md:px-10 lg:px-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-10 items-center">

            {/* LEFT — Copy */}
            <div
              ref={leftRef}
              className={`msg-hidden ${leftIn ? "msg-visible" : ""}`}
            >
              <div className="inline-flex items-center gap-2 mb-5">
                <ShieldCheck size={14} className="text-[#8B93E0]" />
                <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#8B93E0]">
                  AI Governance Controls
                </span>
              </div>

              <h2 className="text-[clamp(28px,3.4vw,40px)] font-bold leading-[1.15] tracking-tight text-white mb-5 max-w-[480px]">
                Summaries that are enabled, visible, and auditable
              </h2>

              <p className="text-[15px] leading-[1.75] text-[#AEB4D6] max-w-[440px] mb-8">
                AI summaries never happen silently. Hosts enable them, visibility
                follows workspace rules, sensitive areas can be excluded, and every
                action is recorded.
              </p>

              <button
                type="button"
                className="msg-cta inline-flex items-center gap-2 rounded-xl px-6 py-3.5 text-[14px] font-semibold text-white"
                style={{ backgroundColor: "#4F46E5" }}
              >
                See how summary controls work
                <ArrowRight size={16} />
              </button>
            </div>

            {/* RIGHT — Image */}
            <div
              ref={rightRef}
              className={`msg-img-hidden ${rightIn ? "msg-img-visible" : ""}`}
            >
              <div className="relative rounded-2xl overflow-hidden">
                {/* Replace src with the actual laptop/dashboard photo asset */}
                <img
                  src="/Images/MeetingSummaryGovernanceSection.webp"
                  alt="Laptop displaying an AI meeting summary with audit trail, key facts, action items, and governance compliance details"
                  className="w-full h-auto object-cover rounded-2xl"
                />
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}