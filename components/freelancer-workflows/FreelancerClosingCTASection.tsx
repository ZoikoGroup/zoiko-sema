"use client";

import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";

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

export default function FreelancerClosingCTASection() {
  const { ref, inView } = useInView(0.25);

  return (
    <>
      <style>{`
        @keyframes fwccFadeUp {
          from { opacity:0; transform:translateY(28px); }
          to   { opacity:1; transform:translateY(0); }
        }
        .fwcc-hidden  { opacity:0; transform:translateY(28px); }
        .fwcc-visible { animation: fwccFadeUp .6s cubic-bezier(.22,1,.36,1) forwards; }

        .fwcc-btn-primary {
          transition: transform .25s ease, box-shadow .25s ease, background-color .25s ease;
        }
        .fwcc-btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 24px rgba(79,70,229,0.4);
          background-color: #4038C9;
        }

        .fwcc-btn-secondary {
          transition: transform .25s ease, box-shadow .25s ease, background-color .25s ease;
        }
        .fwcc-btn-secondary:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 24px rgba(0,0,0,0.25);
          background-color: #F3F4F6;
        }

        @media (prefers-reduced-motion: reduce) {
          .fwcc-hidden { opacity:1!important; transform:none!important; animation:none!important; }
          .fwcc-visible { animation:none!important; opacity:1!important; }
          .fwcc-btn-primary:hover, .fwcc-btn-secondary:hover { transform:none!important; }
        }
      `}</style>

      <section
        aria-label="Ready to run client work with more confidence"
        className="w-full py-24 md:py-28"
        style={{ background: "#32325E" }}
      >
        <div className="mx-auto w-full max-w-4xl px-6 md:px-10 lg:px-16">
          <div
            ref={ref}
            className={`fwcc-hidden ${inView ? "fwcc-visible" : ""} text-center`}
          >
            <h2 className="text-[clamp(28px,4vw,42px)] font-extrabold leading-[1.15] tracking-tight text-white mb-6 max-w-[720px] mx-auto">
              Ready to run client work with more confidence?
            </h2>
            <p className="mx-auto max-w-[600px] text-[15px] leading-[1.75] mb-9" style={{ color: "#B7B6DD" }}>
              One freelancer, many clients, one organized workspace — fewer
              follow-up gaps, clearer delivery, and stronger client
              retention.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/get-a-demo"
                className="fwcc-btn-primary inline-flex items-center justify-center rounded-full px-7 py-3.5 text-[14.5px] font-semibold text-white"
                style={{ background: "#4F46E5" }}
              >
                Get a demo
              </Link>
              <Link href="/start-free" className="fwcc-btn-secondary inline-flex items-center justify-center rounded-full px-7 py-3.5 text-[14.5px] font-semibold text-gray-900 bg-white">
                Start free
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
