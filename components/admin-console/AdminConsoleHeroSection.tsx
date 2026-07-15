"use client";

import { useRouter } from "next/navigation";
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

export default function AdminConsoleHeroSection() {
  const { ref: badgeRef, inView: badgeIn } = useInView(0.3);
  const { ref: headRef, inView: headIn } = useInView(0.2);
  const { ref: ctaRef, inView: ctaIn } = useInView(0.3);
  const router = useRouter();

  return (
    <>
      <style>{`
        @keyframes achFadeUp {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .ach-hidden  { opacity: 0; transform: translateY(28px); }
        .ach-visible { animation: achFadeUp .65s cubic-bezier(.22,1,.36,1) forwards; }

        .ach-btn-primary {
          transition: transform .25s ease, box-shadow .25s ease, background-color .25s ease;
        }
        .ach-btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 14px 28px rgba(59,71,222,0.28);
        }
        .ach-btn-outline {
          transition: background-color .25s ease, border-color .25s ease;
        }
        .ach-btn-outline:hover {
          background-color: #F7F8FC;
          border-color: rgba(15,31,78,0.2);
        }

        @media (prefers-reduced-motion: reduce) {
          .ach-hidden, .ach-visible { opacity: 1 !important; transform: none !important; animation: none !important; }
          .ach-btn-primary:hover, .ach-btn-outline:hover { transform: none !important; }
        }
      `}</style>

      <section
        aria-label="Admin console hero"
        className="w-full py-20 sm:py-24 md:py-28"
        style={{
          background: "linear-gradient(180deg, #EEF1FB 0%, #F7F8FD 100%)",
        }}
      >
        <div className="mx-auto w-full max-w-4xl px-5 sm:px-8 md:px-10 text-center">
          {/* Badge */}
          <div
            ref={badgeRef}
            className={`ach-hidden ${badgeIn ? "ach-visible" : ""} flex justify-center mb-6`}
          >
            <div className="inline-flex items-center gap-2 rounded-full bg-white border border-gray-200 px-4 py-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-brand" />
              <span className="text-[11px] font-semibold tracking-[0.08em] uppercase text-brand">
                Admin Console
              </span>
            </div>
          </div>

          {/* Heading + subheading */}
          <div
            ref={headRef}
            className={`ach-hidden ${headIn ? "ach-visible" : ""}`}
            style={{ animationDelay: "0.08s" }}
          >
            <h1 className="text-[clamp(28px,5vw,44px)] font-bold leading-[1.15] tracking-tight text-gray-900 mb-5">
              Manage every workspace with confidence.
            </h1>
            <p className="text-[14px] sm:text-[15.5px] leading-[1.7] text-gray-500 max-w-[560px] mx-auto">
              Zoiko Sema gives administrators one place to manage users, roles, workspaces, security policies, AI controls, integrations, reporting, and ZoikoTime workforce-context governance.
            </p>
          </div>

          {/* CTAs */}
          <div
            ref={ctaRef}
            className={`ach-hidden ${ctaIn ? "ach-visible" : ""} flex flex-wrap items-center justify-center gap-3 mt-9`}
            style={{ animationDelay: "0.14s" }}
          >
            <button onClick={()=>router.push('get-a-demo')}
            className="ach-btn-primary cursor-pointer rounded-full bg-[#3B47DE] text-white text-[14px] font-semibold px-7 py-3.5">
              Get a demo
            </button>
            <button className="ach-btn-outline cursor-pointer rounded-full bg-white border border-gray-200 text-gray-900 text-[14px] font-semibold px-7 py-3.5">
              Talk to sales
            </button>
          </div>
        </div>
      </section>
    </>
  );
}