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

export default function ProductOverviewWorkflowSection() {
  const { ref: badgeRef, inView: badgeIn } = useInView(0.3);
  const { ref: headRef, inView: headIn } = useInView(0.2);
  const { ref: imgRef, inView: imgIn } = useInView(0.15);
  const { ref: linkRef, inView: linkIn } = useInView(0.3);

  return (
    <>
      <style>{`
        @keyframes powFadeUp {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes powFadeScale {
          from { opacity: 0; transform: translateY(24px) scale(0.98); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }
        .pow-hidden  { opacity: 0; transform: translateY(28px); }
        .pow-visible { animation: powFadeUp .65s cubic-bezier(.22,1,.36,1) forwards; }

        .pow-img-hidden  { opacity: 0; transform: translateY(24px) scale(0.98); }
        .pow-img-visible { animation: powFadeScale .75s cubic-bezier(.22,1,.36,1) forwards; }

        .pow-link {
          transition: gap .2s ease, color .2s ease;
        }
        .pow-link:hover {
          gap: 8px;
          color: var(--brand-dark);
        }

        @media (prefers-reduced-motion: reduce) {
          .pow-hidden, .pow-visible, .pow-img-hidden, .pow-img-visible { opacity: 1 !important; transform: none !important; animation: none !important; }
        }
      `}</style>

      <section
        aria-label="Conversation to action workflow"
        className="w-full py-16 sm:py-20 md:py-24"
        style={{ backgroundColor: "#EEF1FF" }}
      >
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 md:px-10 lg:px-16">
          {/* Badge */}
          <div
            ref={badgeRef}
            className={`pow-hidden ${badgeIn ? "pow-visible" : ""} flex justify-center mb-6`}
          >
            <div className="inline-flex items-center gap-2 rounded-full bg-white border border-gray-200 px-4 py-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-brand" />
              <span className="text-[11px] font-semibold tracking-[0.08em] uppercase text-brand">
                Conversation-to-Action Workflow
              </span>
            </div>
          </div>

          {/* Heading + subtext */}
          <div
            ref={headRef}
            className={`pow-hidden ${headIn ? "pow-visible" : ""} text-center mb-10 sm:mb-12`}
            style={{ animationDelay: "0.08s" }}
          >
            <h2 className="text-[clamp(24px,4.2vw,36px)] font-bold leading-[1.15] tracking-tight text-gray-900 mb-4">
              From conversation to action, without losing context.
            </h2>
            <p className="text-[14px] sm:text-[15px] leading-[1.75] text-gray-500 max-w-[620px] mx-auto">
              Sema helps teams move from discussion to decision, from
              meeting to follow-up, and from scattered communication to
              structured work.
            </p>
          </div>

          {/* Image */}
          <div
            ref={imgRef}
            className={`pow-img-hidden ${imgIn ? "pow-img-visible" : ""} relative w-full aspect-[16/7] rounded-2xl overflow-hidden mb-8 sm:mb-10`}
            style={{ animationDelay: "0.15s" }}
          >
            <Image
              src="/Images/conversation-to-action.webp"
              alt="Team celebrating a successful outcome, representing Zoiko Sema's conversation-to-action workflow"
              fill
              className="object-cover"
            />
          </div>

          {/* Link */}
          <div
            ref={linkRef}
            className={`pow-hidden ${linkIn ? "pow-visible" : ""} flex justify-center`}
            style={{ animationDelay: "0.22s" }}
          >
            <a
              href="/how-it-works"
              className="pow-link inline-flex items-center gap-1.5 text-[14px] font-semibold text-brand"
            >
              See how Sema works
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
