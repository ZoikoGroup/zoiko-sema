"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";

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

export default function ProductOverviewZoikoTimeBridgeSection() {
  const { ref: badgeRef, inView: badgeIn } = useInView(0.3);
  const { ref: headRef, inView: headIn } = useInView(0.2);
  const { ref: imgRef, inView: imgIn } = useInView(0.15);
  const { ref: noteRef, inView: noteIn } = useInView(0.3);
  const { ref: linkRef, inView: linkIn } = useInView(0.3);

  return (
    <>
      <style>{`
        @keyframes poztbFadeUp {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes poztbFadeScale {
          from { opacity: 0; transform: translateY(24px) scale(0.98); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }
        .poztb-hidden  { opacity: 0; transform: translateY(28px); }
        .poztb-visible { animation: poztbFadeUp .65s cubic-bezier(.22,1,.36,1) forwards; }

        .poztb-img-hidden  { opacity: 0; transform: translateY(24px) scale(0.98); }
        .poztb-img-visible { animation: poztbFadeScale .75s cubic-bezier(.22,1,.36,1) forwards; }

        .poztb-link {
          transition: gap .2s ease, color .2s ease;
        }
        .poztb-link:hover {
          gap: 8px;
          color: var(--brand-dark);
        }

        @media (prefers-reduced-motion: reduce) {
          .poztb-hidden, .poztb-visible, .poztb-img-hidden, .poztb-img-visible { opacity: 1 !important; transform: none !important; animation: none !important; }
        }
      `}</style>

      <section
        aria-label="ZoikoTime bridge"
        className="w-full py-16 sm:py-20 md:py-24"
        style={{ backgroundColor: "#EEF1FF" }}
      >
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 md:px-10 lg:px-16">
          {/* Badge */}
          <div
            ref={badgeRef}
            className={`poztb-hidden ${badgeIn ? "poztb-visible" : ""} flex justify-center mb-6`}
          >
            <div className="inline-flex items-center gap-2 rounded-full bg-white border border-gray-200 px-4 py-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-brand" />
              <span className="text-[11px] font-semibold tracking-[0.08em] uppercase text-brand">
                ZoikoTime Bridge
              </span>
            </div>
          </div>

          {/* Heading + subtext */}
          <div
            ref={headRef}
            className={`poztb-hidden ${headIn ? "poztb-visible" : ""} text-center mb-10 sm:mb-12`}
            style={{ animationDelay: "0.08s" }}
          >
            <h2 className="text-[clamp(24px,4.2vw,36px)] font-bold leading-[1.15] tracking-tight text-gray-900 mb-4">
              Connect communication to verified work context with
              ZoikoTime.
            </h2>
            <p className="text-[14px] sm:text-[15px] leading-[1.75] text-gray-500 max-w-[680px] mx-auto">
              For organizations that need deeper accountability, Sema can
              connect meetings, messages, calls, mail, and follow-ups to
              approved ZoikoTime work signals under workspace policy.
            </p>
          </div>

          {/* Image */}
          <div
            ref={imgRef}
            className={`poztb-img-hidden ${imgIn ? "poztb-img-visible" : ""} relative w-full aspect-[16/8] rounded-2xl overflow-hidden mb-6 sm:mb-8`}
            style={{ animationDelay: "0.15s" }}
          >
            <Image
              src="/Images/zoikotime-bridge.webp"
              alt="A network of team member profile photos connected to a cloud and a workforce analytics dashboard, representing the ZoikoTime bridge"
              fill
              className="object-cover"
            />
          </div>

          {/* Note */}
          <div
            ref={noteRef}
            className={`poztb-hidden ${noteIn ? "poztb-visible" : ""} rounded-2xl bg-white border border-gray-100 px-6 py-4 mb-8 sm:mb-10 text-center`}
            style={{ animationDelay: "0.2s" }}
          >
            <p className="text-[13px] sm:text-[13.5px] text-gray-500">
              ZoikoTime integration is permissioned, policy-governed, and
              configurable by authorized administrators.
            </p>
          </div>

          {/* Link */}
          <div
            ref={linkRef}
            className={`poztb-hidden ${linkIn ? "poztb-visible" : ""} flex justify-center`}
            style={{ animationDelay: "0.26s" }}
          >
            <a
              href="/sema-zoikotime"
              className="poztb-link inline-flex items-center gap-1.5 text-[14px] font-semibold text-brand"
            >
              Explore Sema + ZoikoTime
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
