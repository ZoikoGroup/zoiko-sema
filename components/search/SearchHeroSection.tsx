"use client";

import React, { useEffect, useRef, useState } from "react";

/** Same scroll-reveal hook used across the other pages. */
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

const BRAND = "#3457E8";

// TODO: replace with your actual background image path,
// e.g. "/images/search/hero-bg.png"
const BG_IMAGE_SRC = "/Images/Container.webp";

const checklist = [
  "Messages",
  "Meetings",
  "Mail",
  "Calendar",
  "Files",
  "Notes",
  "Decisions",
  "Permission-scoped results",
];

const results = [
  {
    tag: "MEETING",
    tagStyle: { bg: "#F1F2F6", color: "#4B5563" },
    title: "Q3 Campaign Review",
    meta: "Decision · owner · transcript",
  },
  {
    tag: "MAIL",
    tagStyle: { bg: BRAND, color: "#FFFFFF" },
    title: "Budget confirmation from Priya",
    meta: "Email thread · attachment",
  },
  {
    tag: "MESSAGE",
    tagStyle: { bg: "#DCFCE7", color: "#16A34A" },
    title: "Marketing channel thread",
    meta: "Follow-up · file shared",
  },
  {
    tag: "FILE",
    tagStyle: { bg: "#F1F2F6", color: "#4B5563" },
    title: "Q3 Budget Planning.xlsx",
    meta: "Workbook · updated May 7",
  },
  {
    tag: "CALENDAR",
    tagStyle: { bg: "#F1F2F6", color: "#4B5563" },
    title: "Q3 Planning Meeting",
    meta: "Event · 42 minutes",
  },
];

export default function SearchHeroSection() {
  const { ref: badgeRef, inView: badgeIn } = useInView(0.3);
  const { ref: headingRef, inView: headingIn } = useInView(0.3);
  const { ref: copyRef, inView: copyIn } = useInView(0.3);
  const { ref: ctaRef, inView: ctaIn } = useInView(0.3);
  const { ref: checklistRef, inView: checklistIn } = useInView(0.3);
  const { ref: mockupRef, inView: mockupIn } = useInView(0.1);

  return (
    <>
      <style>{`
        @keyframes shsFadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes shsFadeIn {
          from { opacity: 0; transform: translateY(36px) scale(.97); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }
        .shs-hidden  { opacity: 0; transform: translateY(24px); }
        .shs-visible { animation: shsFadeUp .55s cubic-bezier(.22,1,.36,1) forwards; }

        .shs-mockup-hidden  { opacity: 0; transform: translateY(36px) scale(.97); }
        .shs-mockup-visible { animation: shsFadeIn .7s cubic-bezier(.22,1,.36,1) forwards; }

        .shs-btn-primary {
          background: ${BRAND};
          transition: transform .2s ease, box-shadow .2s ease, background .2s ease;
        }
        .shs-btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 26px -10px rgba(52,87,232,0.6);
          background: #2c48c9;
        }

        .shs-btn-secondary {
          border: 1px solid rgba(255,255,255,0.25);
          transition: transform .2s ease, background .2s ease, border-color .2s ease;
        }
        .shs-btn-secondary:hover {
          transform: translateY(-2px);
          background: rgba(255,255,255,0.08);
          border-color: rgba(255,255,255,0.4);
        }

        .shs-result { transition: transform .2s ease, box-shadow .2s ease, border-color .2s ease; }
        .shs-result:hover {
          transform: translateY(-2px);
          border-color: #c7cff9;
          box-shadow: 0 10px 20px -14px rgba(52,87,232,0.3);
        }
        .shs-result .shs-result-arrow { transition: transform .2s ease; }
        .shs-result:hover .shs-result-arrow { transform: translateX(2px); }

        .shs-mockup-wrap { transition: transform .4s cubic-bezier(.22,1,.36,1); }
        .shs-mockup-wrap:hover { transform: translateY(-6px); }

        @media (prefers-reduced-motion: reduce) {
          .shs-hidden, .shs-mockup-hidden { opacity: 1 !important; transform: none !important; }
          .shs-visible, .shs-mockup-visible { animation: none !important; }
        }
      `}</style>

      <section
        aria-label="Search hero"
        className="w-full pt-20 pb-16 md:pt-24 md:pb-20"
        style={{
          backgroundImage: `url(${BG_IMAGE_SRC})`,
          backgroundSize: "cover",
          backgroundPosition: "center top",
          backgroundRepeat: "no-repeat",
          // fallback tint shown while the image loads / if it's missing
          backgroundColor: "#12132B",
        }}
      >
        <div className="mx-auto w-full max-w-5xl px-6 md:px-10 text-center">

          {/* Badge */}
          <div
            ref={badgeRef}
            className={`shs-hidden ${badgeIn ? "shs-visible" : ""} inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 mb-6`}
            style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.14)" }}
          >
            <span className="w-1.5 h-1.5 rounded-full" style={{ background: "#8FA3FF" }} />
            <span className="text-[11px] font-semibold uppercase tracking-[0.12em] text-white">
              Search
            </span>
          </div>

          {/* Heading */}
          <h1
            ref={headingRef}
            className={`shs-hidden ${headingIn ? "shs-visible" : ""} text-[clamp(26px,4.2vw,40px)] font-bold leading-[1.2] tracking-tight text-white mb-4`}
            style={{ animationDelay: "0.05s" }}
          >
            Search every conversation, decision, and follow-up in one workspace.
          </h1>

          {/* Copy */}
          <p
            ref={copyRef}
            className={`shs-hidden ${copyIn ? "shs-visible" : ""} text-[14.5px] leading-relaxed mb-8 max-w-[600px] mx-auto`}
            style={{ color: "#A6A9C8", animationDelay: "0.1s" }}
          >
            Find messages, meetings, calls, mail, calendar events, files,
            notes, decisions, and action items across Zoiko Sema — with
            results scoped by permissions and workspace policy.
          </p>

          {/* CTAs */}
          <div
            ref={ctaRef}
            className={`shs-hidden ${ctaIn ? "shs-visible" : ""} flex flex-wrap items-center justify-center gap-3 mb-6`}
            style={{ animationDelay: "0.15s" }}
          >
            <button className="shs-btn-primary text-white text-[14px] font-semibold rounded-full px-6 py-3">
              Start Free
            </button>
            <button className="shs-btn-secondary text-white text-[14px] font-semibold rounded-full px-6 py-3">
              Contact Sales
            </button>
          </div>

          {/* Checklist */}
          <div
            ref={checklistRef}
            className={`shs-hidden ${checklistIn ? "shs-visible" : ""} flex flex-wrap items-center justify-center gap-x-5 gap-y-2`}
            style={{ animationDelay: "0.2s" }}
          >
            {checklist.map((item) => (
              <span key={item} className="inline-flex items-center gap-1.5 text-[12px]" style={{ color: "#9CA0C4" }}>
                <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#6EE7B7" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* Search results mockup — built in code, not an image */}
        <div
          ref={mockupRef}
          className={`shs-mockup-hidden ${mockupIn ? "shs-mockup-visible" : ""} mt-12 px-6`}
          style={{ animationDelay: "0.1s" }}
        >
          <div className="shs-mockup-wrap mx-auto max-w-[950px]">
            <div className="rounded-2xl bg-white shadow-2xl overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-[1.6fr_1fr]">

                {/* LEFT — search + results */}
                <div className="p-6 border-b md:border-b-0 md:border-r border-gray-100">
                  <div className="flex items-center gap-2 rounded-xl border border-gray-200 px-4 py-3 mb-5">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#9CA3AF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="11" cy="11" r="7" />
                      <line x1="21" y1="21" x2="16.65" y2="16.65" />
                    </svg>
                    <span className="text-[13px] text-gray-600">
                      Search: &quot;Q3 campaign follow-up with budget decision&quot;
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {results.map((r) => (
                      <div
                        key={r.title}
                        className="shs-result flex items-start justify-between gap-2 rounded-xl border border-gray-200 px-4 py-3"
                      >
                        <div>
                          <span
                            className="inline-block rounded-full px-2 py-0.5 text-[9.5px] font-bold uppercase tracking-wide mb-1.5"
                            style={{ background: r.tagStyle.bg, color: r.tagStyle.color }}
                          >
                            {r.tag}
                          </span>
                          <p className="text-[13px] font-semibold text-gray-900 leading-snug">
                            {r.title}
                          </p>
                          <p className="text-[11px] text-gray-400 mt-0.5">{r.meta}</p>
                        </div>
                        <span className="shs-result-arrow flex-shrink-0" style={{ color: BRAND }}>→</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* RIGHT — AI answer panel */}
                <div className="p-6" style={{ background: "#F3F2FD" }}>
                  <span
                    className="inline-block rounded-full px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide mb-4"
                    style={{ background: "#E6E9FB", color: BRAND }}
                  >
                    AI Answer
                  </span>
                  <p className="text-[14px] font-bold text-gray-900 mb-2">
                    Found the budget decision.
                  </p>
                  <p className="text-[12.5px] leading-relaxed text-gray-500 mb-4">
                    The team approved a revised Q3 paid media budget after
                    Melissa confirmed final numbers in the May 7 meeting.
                  </p>

                  <div className="flex flex-wrap gap-2 mb-5">
                    <span className="rounded-full bg-white border border-gray-200 px-2.5 py-1 text-[10.5px] font-medium text-gray-600">
                      3 sources
                    </span>
                    <span className="rounded-full bg-white border border-gray-200 px-2.5 py-1 text-[10.5px] font-medium text-gray-600">
                      Policy OK
                    </span>
                  </div>

                  <div className="flex items-start gap-2 rounded-xl bg-white border border-gray-200 px-4 py-3">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#9CA3AF" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="mt-0.5 flex-shrink-0">
                      <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                    </svg>
                    <p className="text-[11.5px] leading-relaxed text-gray-500">
                      Results are permission-scoped. Users only see content
                      they are allowed to access.
                    </p>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}