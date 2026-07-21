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

const pills = ["Meetings", "Messaging", "Calls", "Channels & Spaces"];

export default function ProductOverviewCommunicationCoreSection() {
  const { ref: badgeRef, inView: badgeIn } = useInView(0.3);
  const { ref: headRef, inView: headIn } = useInView(0.2);
  const { ref: imgRef, inView: imgIn } = useInView(0.15);
  const { ref: pillsRef, inView: pillsIn } = useInView(0.2);
  const { ref: linkRef, inView: linkIn } = useInView(0.3);

  return (
    <>
      <style>{`
        @keyframes poccFadeUp {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes poccFadeScale {
          from { opacity: 0; transform: translateY(24px) scale(0.98); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }
        .pocc-hidden  { opacity: 0; transform: translateY(28px); }
        .pocc-visible { animation: poccFadeUp .65s cubic-bezier(.22,1,.36,1) forwards; }

        .pocc-img-hidden  { opacity: 0; transform: translateY(24px) scale(0.98); }
        .pocc-img-visible { animation: poccFadeScale .75s cubic-bezier(.22,1,.36,1) forwards; }

        .pocc-pill { opacity: 0; transform: translateY(16px); }
        .pocc-pills.pocc-visible .pocc-pill {
          animation: poccFadeUp .5s cubic-bezier(.22,1,.36,1) forwards;
        }
        .pocc-pill-inner {
          transition: border-color .2s ease, box-shadow .2s ease;
        }
        .pocc-pill-inner:hover {
          border-color: color-mix(in srgb, var(--brand) 30%, transparent);
          box-shadow: 0 10px 22px color-mix(in srgb, var(--brand) 12%, transparent);
        }

        .pocc-link {
          transition: gap .2s ease, color .2s ease;
        }
        .pocc-link:hover {
          gap: 8px;
          color: var(--brand-dark);
        }

        @media (prefers-reduced-motion: reduce) {
          .pocc-hidden, .pocc-visible, .pocc-img-hidden, .pocc-img-visible, .pocc-pill { opacity: 1 !important; transform: none !important; animation: none !important; }
          .pocc-pill-inner:hover { transform: none !important; }
        }
      `}</style>

      <section
        aria-label="Communication core"
        className="w-full bg-white py-16 sm:py-20 md:py-24"
      >
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 md:px-10 lg:px-16">
          {/* Badge */}
          <div
            ref={badgeRef}
            className={`pocc-hidden ${badgeIn ? "pocc-visible" : ""} flex justify-center mb-6`}
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-gray-200 px-4 py-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-brand" />
              <span className="text-[11px] font-semibold tracking-[0.08em] uppercase text-brand">
                Communication Core
              </span>
            </div>
          </div>

          {/* Heading */}
          <div
            ref={headRef}
            className={`pocc-hidden ${headIn ? "pocc-visible" : ""} text-center mb-10 sm:mb-14`}
            style={{ animationDelay: "0.08s" }}
          >
            <h2 className="text-[clamp(24px,4.2vw,36px)] font-bold leading-[1.15] tracking-tight text-gray-900">
              Meet, message, call, and collaborate in one place.
            </h2>
          </div>

          {/* Image */}
          <div
            ref={imgRef}
            className={`pocc-img-hidden ${imgIn ? "pocc-img-visible" : ""} relative w-full aspect-[16/7] rounded-2xl overflow-hidden mb-4 sm:mb-5`}
            style={{ animationDelay: "0.15s" }}
          >
            <Image
              src="/Images/communication-core.webp"
              alt="Team collaborating in a meeting, representing Zoiko Sema's communication core"
              fill
              className="object-cover"
            />
          </div>

          {/* Pills */}
          <div
            ref={pillsRef}
            className={`pocc-pills ${pillsIn ? "pocc-visible" : ""} grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mb-10 sm:mb-12`}
          >
            {pills.map((label, i) => (
              <div
                key={label}
                className="pocc-pill"
                style={{ animationDelay: `${0.05 + i * 0.06}s` }}
              >
                <div className="pocc-pill-inner h-full flex items-center justify-center rounded-2xl border border-gray-200 px-4 py-5 text-center">
                  <span className="text-[13.5px] sm:text-[14px] font-semibold text-gray-900">
                    {label}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Link */}
          <div
            ref={linkRef}
            className={`pocc-hidden ${linkIn ? "pocc-visible" : ""} flex justify-center`}
            style={{ animationDelay: "0.22s" }}
          >
            <a
              href="/products"
              className="pocc-link inline-flex items-center gap-1.5 text-[14px] font-semibold text-brand"
            >
              Explore communication products
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
