"use client";

import React, { useEffect, useRef, useState } from "react";

// TODO: replace with the final "after submission" banner photo URL.
const AFTER_SUBMIT_IMAGE_URL = "/Images/AFTER-SUBMISSION.png";

interface Step {
  tag: string;
  tagColor: string;
  tagBg: string;
  desc: string;
}

const steps: Step[] = [
  {
    tag: "Review request",
    tagColor: "#15803d",
    tagBg: "#dcfce7",
    desc: "We'll review your workflow and team context.",
  },
  {
    tag: "Follow up",
    tagColor: "#1d4ed8",
    tagBg: "#dbeafe",
    desc: "A specialist will reach out to confirm a time.",
  },
  {
    tag: "Tailored demo",
    tagColor: "#c2410c",
    tagBg: "#ffedd5",
    desc: "Your session will focus on what matters to your team.",
  },
];

function useInView(threshold = 0.15) {
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

export default function GetDemoWhatHappensSection() {
  const { ref: headRef, inView: headIn } = useInView(0.2);
  const { ref: gridRef, inView: gridIn } = useInView(0.1);

  return (
    <>
      <style>{`
        @keyframes gdwFadeUp {
          from { opacity: 0; transform: translateY(22px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .gdw-hidden  { opacity:0; transform:translateY(22px); }
        .gdw-visible { animation: gdwFadeUp .6s cubic-bezier(.22,1,.36,1) forwards; }

        .gdw-card { opacity:0; transform:translateY(18px); transition:transform .25s ease, box-shadow .25s ease; }
        .gdw-grid-in .gdw-card:nth-child(1) { animation: gdwFadeUp .55s ease .04s forwards; }
        .gdw-grid-in .gdw-card:nth-child(2) { animation: gdwFadeUp .55s ease .13s forwards; }
        .gdw-grid-in .gdw-card:nth-child(3) { animation: gdwFadeUp .55s ease .22s forwards; }
        .gdw-card:hover { transform: translateY(-3px)!important; box-shadow: 0 12px 28px rgba(15,15,40,0.08)!important; }

        @media (prefers-reduced-motion: reduce) {
          .gdw-hidden, .gdw-card { opacity:1!important; transform:none!important; animation:none!important; }
          .gdw-visible { animation:none!important; opacity:1!important; }
          .gdw-card:hover { transform:none!important; }
        }
      `}</style>

      <section
        aria-label="What happens after submission"
        className="w-full bg-white py-16 md:py-20"
      >
        <div className="mx-auto w-full max-w-7xl px-6 md:px-10 lg:px-16">

          {/* ── Heading ── */}
          <div ref={headRef} className={`gdw-hidden ${headIn ? "gdw-visible" : ""} mb-8`}>
            <p className="text-[11px] font-bold uppercase tracking-[0.18em] mb-3" style={{ color: "#4f46e5" }}>
              After Submission
            </p>
            <h2 className="font-bold leading-[1.15] tracking-tight text-gray-900" style={{ fontSize: "clamp(24px,3vw,32px)" }}>
              We&apos;ll review your request and follow up.
            </h2>
          </div>

          {/* ── Banner image ── */}
          <div className={`gdw-hidden ${headIn ? "gdw-visible" : ""} rounded-2xl overflow-hidden mb-10`}>
            {AFTER_SUBMIT_IMAGE_URL ? (
              <img src={AFTER_SUBMIT_IMAGE_URL} alt="" className="w-full h-auto block" style={{ maxHeight: 320, objectFit: "cover" }} />
            ) : (
              <div
                className="w-full flex items-center justify-center text-[13px] text-gray-400"
                style={{ height: 260, background: "#1f2937" }}
              >
                Add AFTER_SUBMIT_IMAGE_URL to display the banner image
              </div>
            )}
          </div>

          {/* ── 3 cards ── */}
          <div ref={gridRef} className={`grid grid-cols-1 md:grid-cols-3 gap-5 ${gridIn ? "gdw-grid-in" : ""}`}>
            {steps.map((step) => (
              <div
                key={step.tag}
                className="gdw-card rounded-2xl p-6"
                style={{ border: "1px solid #e5e7eb" }}
              >
                <span
                  className="inline-block rounded-md px-2.5 py-1 text-[11px] font-bold uppercase tracking-[0.08em] mb-4"
                  style={{ color: step.tagColor, background: step.tagBg }}
                >
                  {step.tag}
                </span>
                <p className="text-[14px] leading-[1.7] text-gray-600">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
}
