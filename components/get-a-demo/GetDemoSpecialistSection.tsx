"use client";

import React, { useEffect, useState, useRef } from "react";

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

export default function GetDemoSpecialistSection() {
  const { ref: headRef, inView: headIn } = useInView(0.2);
  const { ref: cardRef, inView: cardIn } = useInView(0.1);

  return (
    <>
      <style>{`
        @keyframes gdsFadeUp {
          from { opacity:0; transform:translateY(22px); }
          to   { opacity:1; transform:translateY(0); }
        }
        .gds-hidden  { opacity:0; transform:translateY(22px); }
        .gds-visible { animation: gdsFadeUp .6s cubic-bezier(.22,1,.36,1) forwards; }

        .gds-card { opacity:0; transform:translateY(18px); transition:transform .28s ease, box-shadow .28s ease; }
        .gds-card.on { animation: gdsFadeUp .6s cubic-bezier(.22,1,.36,1) .08s forwards; }
        .gds-card:hover { transform:translateY(-3px)!important; box-shadow:0 14px 36px rgba(71,71,135,0.10)!important; }

        .gds-icon { transition:background .2s,transform .2s; }
        .gds-card:hover .gds-icon { transform:scale(1.07); }

        @media (prefers-reduced-motion:reduce) {
          .gds-hidden,.gds-card { opacity:1!important; transform:none!important; animation:none!important; }
          .gds-visible { animation:none!important; opacity:1!important; }
          .gds-card:hover { transform:none!important; }
        }
      `}</style>

      <section
        aria-label="Who you will speak with"
        className="w-full py-16 md:py-20"
        style={{ background: "#ECF3FF" }}
      >
        <div className="mx-auto w-full max-w-7xl px-6 md:px-10 lg:px-16">

          {/* ── Heading ── */}
          <div ref={headRef} className={`gds-hidden ${headIn ? "gds-visible" : ""} text-center mb-9`}>
            <p className="text-[11px] font-bold uppercase tracking-[0.18em] mb-4" style={{ color: "#4f46e5" }}>
              Who You Will Speak With
            </p>
            <h2 className="font-bold leading-[1.1] tracking-tight text-gray-900" style={{ fontSize: "35px" }}>
              A product-trained Sema specialist
            </h2>
          </div>

          {/* ── Card ── */}
          <div
            ref={cardRef}
            className={`gds-card ${cardIn ? "on" : ""} flex items-start gap-6 rounded-2xl bg-white px-8 py-7`}
            style={{
              border: "1px solid #e5e7eb",
              boxShadow: "0 2px 16px rgba(71,71,135,0.07)",
            }}
          >
            {/* Icon */}
            <div
              className="gds-icon flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center"
              style={{ background: "#474787" }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
              </svg>
            </div>

            {/* Text */}
            <div>
              <p className="text-[15.5px] font-bold text-gray-900 mb-2.5 leading-snug">
                Trained on the product, the use cases, and the integration pathway.
              </p>
              <p className="text-[13.5px] leading-[1.8] text-gray-500">
                Your demo will be led by someone trained on the product, the use cases, and the
                Sema + ZoikoTime integration pathway. They will answer practical questions about
                fit, rollout, pricing, security, and next steps. If a deeper technical, legal, or
                enterprise deployment discussion is needed, we will route the right specialist into
                the conversation.
              </p>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}