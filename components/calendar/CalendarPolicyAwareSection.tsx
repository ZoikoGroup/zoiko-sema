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

const policies = [
  "External guest rules",
  "Waiting room & recording defaults",
  "AI summary permissions",
  "Confidential Mode availability",
];

export default function CalendarPolicyAwareSection() {
  const { ref: badgeRef, inView: badgeIn } = useInView(0.3);
  const { ref: headRef, inView: headIn } = useInView(0.2);
  const { ref: imgRef, inView: imgIn } = useInView(0.15);
  const { ref: listRef, inView: listIn } = useInView(0.08);

  return (
    <>
      <style>{`
        @keyframes pasFadeUp {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .pas-hidden  { opacity: 0; transform: translateY(28px); }
        .pas-visible { animation: pasFadeUp .7s cubic-bezier(.22,1,.36,1) forwards; }

        .pas-row { opacity: 0; transform: translateY(20px); }
        .pas-list.pas-visible .pas-row {
          animation: pasFadeUp .55s cubic-bezier(.22,1,.36,1) forwards;
        }

        .pas-row-inner {
          transition: transform .25s ease, background-color .25s ease, border-color .25s ease;
        }
        .pas-row-inner:hover {
          transform: translateX(4px);
          background-color: rgba(255, 255, 255, 0.06);
          border-color: rgba(255, 255, 255, 0.18);
        }

        @media (prefers-reduced-motion: reduce) {
          .pas-hidden, .pas-visible, .pas-row { opacity: 1 !important; transform: none !important; animation: none !important; }
          .pas-row-inner:hover { transform: none !important; }
        }
      `}</style>

      <section
        aria-label="Policy-aware scheduling"
        className="w-full py-16 sm:py-20 md:py-24 overflow-hidden"
        style={{
          background:
            "radial-gradient(120% 140% at 50% 0%, rgba(75,71,229,0.4) 0%, rgba(15,15,42,0) 55%), linear-gradient(135deg, #0D0B22 0%, #12122E 55%, #0F0F2A 100%)",
        }}
      >
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 md:px-10 lg:px-16">
          {/* Badge */}
          <div
            ref={badgeRef}
            className={`pas-hidden ${badgeIn ? "pas-visible" : ""} flex items-center justify-center gap-2 mb-4`}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#8B8FE0]" />
            <span className="text-[11px] font-bold tracking-[0.1em] uppercase text-[#8B8FE0]">
              Policy-Aware Scheduling
            </span>
          </div>

          {/* Heading */}
          <div
            ref={headRef}
            className={`pas-hidden ${headIn ? "pas-visible" : ""} text-center mb-14 sm:mb-16`}
            style={{ animationDelay: "0.06s" }}
          >
            <h2 className="text-[clamp(22px,4vw,32px)] font-bold leading-[1.25] tracking-tight text-white max-w-[680px] mx-auto mb-3">
              Policies apply at scheduling time, not only during the meeting.
            </h2>
            <p className="text-[13px] sm:text-[14px] leading-[1.7] text-white/55 max-w-[600px] mx-auto">
              Workspace policies apply to meetings you start or schedule. Policy configuration is controlled by authorized administrators and enforced server-side.
            </p>
          </div>

          {/* Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-stretch">
            {/* Image */}
            <div
              ref={imgRef}
              className={`pas-hidden ${imgIn ? "pas-visible" : ""}`}
            >
              <div className="rounded-3xl overflow-hidden h-full min-h-[260px] shadow-[0_20px_50px_rgba(0,0,0,0.35)]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/Images/CalendarPolicyAwareSection.webp"
                  alt="Robotic arm interacting with an AI interface projected above a laptop"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Policy list */}
            <div
              ref={listRef}
              className={`pas-list ${listIn ? "pas-visible" : ""} flex flex-col gap-4`}
            >
              {policies.map((policy, i) => (
                <div
                  key={policy}
                  className="pas-row flex-1"
                  style={{ animationDelay: `${0.05 + i * 0.08}s` }}
                >
                  <div className="pas-row-inner h-full flex items-center bg-white/[0.04] border border-white/10 rounded-2xl px-6 py-6">
                    <span className="text-[14px] font-semibold text-white">
                      {policy}
                    </span>
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