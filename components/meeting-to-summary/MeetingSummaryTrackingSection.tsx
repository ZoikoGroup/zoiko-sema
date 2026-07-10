"use client";

import React, { useEffect, useRef, useState } from "react";

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

export default function MeetingSummaryTrackingSection() {
  const { ref: headRef, inView: headIn } = useInView(0.2);
  const { ref: imgRef, inView: imgIn } = useInView(0.1);

  return (
    <>
      <style>{`
        @keyframes mstFadeUp {
          from { opacity:0; transform:translateY(32px); }
          to   { opacity:1; transform:translateY(0); }
        }
        @keyframes mstFadeScale {
          from { opacity:0; transform:translateY(36px) scale(0.98); }
          to   { opacity:1; transform:translateY(0) scale(1); }
        }
        .mst-hidden { opacity:0; transform:translateY(32px); }
        .mst-visible { animation: mstFadeUp .6s cubic-bezier(.22,1,.36,1) forwards; }

        .mst-img-hidden { opacity:0; transform:translateY(36px) scale(0.98); }
        .mst-img-visible { animation: mstFadeScale .7s cubic-bezier(.22,1,.36,1) forwards; }

        @media (prefers-reduced-motion: reduce) {
          .mst-hidden, .mst-img-hidden { opacity:1!important; transform:none!important; animation:none!important; }
        }
      `}</style>

      <section
        aria-label="Action items and decision tracking"
        className="w-full bg-white py-20 md:py-24"
      >
        <div className="mx-auto w-full max-w-7xl px-6 md:px-10 lg:px-16">

          {/* ── Heading ── */}
          <div
            ref={headRef}
            className={`mb-12 text-center mst-hidden ${headIn ? "mst-visible" : ""}`}
          >
            <p className="text-[11px] font-semibold uppercase tracking-[0.16em] mb-4" style={{ color: "#4F46E5" }}>
              Action Items &amp; Decision Tracking
            </p>
            <h2 className="text-[clamp(24px,3.2vw,34px)] font-bold leading-[1.15] tracking-tight text-gray-900 mb-4 max-w-[640px] mx-auto">
              Follow-through you can see and search
            </h2>
            <p className="mx-auto max-w-[560px] text-[15px] leading-[1.75] text-gray-500">
              Every summary produces owned tasks and a decision log that stays linked
              to the source meeting.
            </p>
          </div>

          {/* ── Image ── */}
          <div
            ref={imgRef}
            className={`mst-img-hidden ${imgIn ? "mst-img-visible" : ""}`}
          >
            <div className="relative rounded-2xl overflow-hidden">
              {/* Replace src with the actual laptop/dashboard photo asset */}
              <img
                src="/Images/summary-tracking-laptop.webp"
                alt="Laptop displaying the Zoiko Sema meeting governance screen with summary, action items, decision log, and review and approve controls"
                className="w-full h-auto object-cover rounded-2xl"
              />
            </div>
          </div>

        </div>
      </section>
    </>
  );
}