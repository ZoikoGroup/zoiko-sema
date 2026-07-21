"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";

function useInView(threshold = 0.2) {
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

export default function MeetingSummaryFinalCTASection() {
  const { ref, inView } = useInView(0.2);

  return (
    <>
      <style>{`
        @keyframes msfcFadeUp {
          from { opacity:0; transform:translateY(28px); }
          to   { opacity:1; transform:translateY(0); }
        }
        .msfc-hidden { opacity:0; transform:translateY(28px); }
        .msfc-visible { animation: msfcFadeUp .6s cubic-bezier(.22,1,.36,1) forwards; }

        .msfc-item { opacity:0; transform:translateY(16px); }
        .msfc-item.active {
          animation: msfcFadeUp .55s cubic-bezier(.22,1,.36,1) forwards;
        }

        .msfc-btn-primary {
          transition: transform .2s ease, box-shadow .2s ease, background-color .2s ease;
        }
        .msfc-btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 24px rgba(79,70,229,0.4);
          background-color: #4338CA;
        }
        .msfc-btn-primary:active { transform: translateY(0); }

        .msfc-btn-secondary {
          transition: transform .2s ease, box-shadow .2s ease, background-color .2s ease;
        }
        .msfc-btn-secondary:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 20px rgba(255,255,255,0.12);
          background-color: #F1F1F5;
        }
        .msfc-btn-secondary:active { transform: translateY(0); }

        @media (prefers-reduced-motion: reduce) {
          .msfc-hidden, .msfc-item { opacity:1!important; transform:none!important; animation:none!important; }
        }
      `}</style>

      <section
        aria-label="Get started with Zoiko Sema"
        className="w-full py-20 md:py-15"
        style={{ background: "#32325E" }}
      >
        <div className="mx-auto w-full max-w-3xl px-6 md:px-10 text-center">

          <h2
            ref={ref}
            className={`msfc-hidden ${inView ? "msfc-visible" : ""} text-[clamp(26px,3.6vw,42px)] font-bold leading-[1.15] tracking-tight text-white mb-5`}
          >
            Make every meeting easier to act on.
          </h2>

          <p
            className={`msfc-item ${inView ? "active" : ""} text-[15px] leading-[1.75] text-[#9B9FBF] max-w-[560px] mx-auto mb-9`}
            style={{ animationDelay: "0.1s" }}
          >
            See how Zoiko Sema turns meetings into reviewed summaries, owned action
            items, decision records, and searchable context — with AI governed by
            policy.
          </p>

          <div
            className={`msfc-item ${inView ? "active" : ""} flex flex-col sm:flex-row items-center justify-center gap-3`}
            style={{ animationDelay: "0.2s" }}
          >
            <Link
              href="/get-a-demo"
              className="msfc-btn-primary rounded-full px-7 py-3 text-[14px] font-semibold text-white inline-flex items-center justify-center"
              style={{ backgroundColor: "#4F46E5" }}
            >
              Get a demo
            </Link>
            <Link
              href="/contact-sales"
              className="msfc-btn-secondary rounded-full px-7 py-3 text-[14px] font-semibold text-gray-900 bg-white inline-flex items-center justify-center"
            >
              Talk to sales
            </Link>
          </div>

        </div>
      </section>
    </>
  );
}