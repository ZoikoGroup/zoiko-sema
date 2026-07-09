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

const cards = [
  {
    title: "Summarize and share key moments with AI",
    desc: "Sema captures decisions, action items and follow-ups inside every meeting so context never gets lost between calls.",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M5.6 18.4l2.1-2.1M16.3 7.7l2.1-2.1" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    ),
  },
  {
    title: "Automatic recording",
    desc: "Start a meeting and Sema records audio and video in real-time, then automatically attaches it to the right project, channel or contact.",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="6" width="14" height="12" rx="2" />
        <path d="M17 10l4-2v8l-4-2" />
      </svg>
    ),
  },
  {
    title: "Transcription & search",
    desc: "Sema's AI engine transcribes spoken words into text, making it easy to search and reference specific sections of any meeting.",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
  },
];

export default function EveryConversationInContextSection() {
  const { ref: headRef, inView: headIn } = useInView(0.2);
  const { ref: chatRef, inView: chatIn } = useInView(0.15);
  const { ref: gridRef, inView: gridIn } = useInView(0.08);

  return (
    <>
      <style>{`
        @keyframes ecicFadeUp {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .ecic-hidden  { opacity: 0; transform: translateY(28px); }
        .ecic-visible { animation: ecicFadeUp .65s cubic-bezier(.22,1,.36,1) forwards; }

        .ecic-bubble { opacity: 0; transform: translateY(16px); }
        .ecic-chat.ecic-visible .ecic-bubble {
          animation: ecicFadeUp .55s cubic-bezier(.22,1,.36,1) forwards;
        }

        .ecic-card { opacity: 0; transform: translateY(24px); }
        .ecic-grid.ecic-visible .ecic-card {
          animation: ecicFadeUp .55s cubic-bezier(.22,1,.36,1) forwards;
        }

        .ecic-card-inner {
          transition: transform .3s ease, box-shadow .3s ease, border-color .3s ease;
        }
        .ecic-card-inner:hover {
          transform: translateY(-5px);
          box-shadow: 0 16px 32px rgba(15,31,78,0.08);
          border-color: rgba(71,71,222,0.22);
        }

        .ecic-link {
          transition: gap .2s ease, color .2s ease;
        }
        .ecic-link:hover {
          gap: 8px;
        }

        @media (prefers-reduced-motion: reduce) {
          .ecic-hidden, .ecic-visible, .ecic-bubble, .ecic-card { opacity: 1 !important; transform: none !important; animation: none !important; }
          .ecic-card-inner:hover { transform: none !important; }
        }
      `}</style>

      <section
        aria-label="Every conversation, in context"
        className="w-full bg-white py-16 sm:py-20 md:py-24"
      >
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 md:px-10">
          {/* Heading */}
          <div
            ref={headRef}
            className={`ecic-hidden ${headIn ? "ecic-visible" : ""} text-center mb-4`}
          >
            <h2 className="text-[clamp(24px,4.2vw,34px)] font-bold leading-[1.2] tracking-tight text-gray-900">
              Every conversation, <span className="italic font-serif font-normal">in context</span>
            </h2>
          </div>

          {/* Subheading */}
          <p
            className={`ecic-hidden ${headIn ? "ecic-visible" : ""} text-center text-[14px] sm:text-[15px] leading-[1.7] text-gray-500 max-w-[640px] mx-auto mb-12 sm:mb-16`}
            style={{ animationDelay: "0.08s" }}
          >
            Sema combines everyday communication tools with AI-powered understanding — giving individuals a simple way to connect, and businesses a stronger way to coordinate, govern and act.
          </p>

          {/* Chat mockup */}
          <div
            ref={chatRef}
            className={`ecic-chat ${chatIn ? "ecic-visible" : ""} rounded-2xl border max-w-5xl mx-auto border-gray-100 bg-white shadow-[0_20px_50px_rgba(15,31,78,0.08)] p-6 sm:p-8 mb-6 sm:mb-8`}
          >
            <div className="flex flex-col gap-4">
              {/* Incoming message */}
              <div
                className="ecic-bubble flex items-start gap-3"
                style={{ animationDelay: "0.05s" }}
              >
                <img
                  src="/Home/man.png"
                  alt="Jacob Jones"
                  className="w-9 h-9 rounded-full object-cover shrink-0"
                />
                <div className="rounded-2xl rounded-tl-sm bg-gray-100 px-5 py-3.5 max-w-[560px]">
                  <p className="text-[13.5px] sm:text-[14px] leading-[1.6] text-gray-800">
                    Let&apos;s review the Q3 roadmap. Can you give us a quick summary of where we landed and the open blockers?
                  </p>
                </div>
              </div>

              {/* Reply message */}
              <div
                className="ecic-bubble flex items-start justify-end gap-3"
                style={{ animationDelay: "0.15s" }}
              >
                <div
                  className="rounded-2xl rounded-tr-sm px-5 py-3.5 max-w-[560px]"
                  style={{ background: "#4B47E5" }}
                >
                  <p className="text-[13.5px] sm:text-[14px] leading-[1.6] text-white">
                    Three decisions confirmed: launch on Oct 14, hire two engineers, defer Phase 2 to Q4. One blocker on the design side.
                  </p>
                </div>
                <img
                  src="/Home/women.png"
                  alt="Arlene McCoy"
                  className="w-9 h-9 rounded-full object-cover shrink-0"
                />
              </div>
            </div>
          </div>

          {/* Feature cards */}
          <div
            ref={gridRef}
            className={`ecic-grid ${gridIn ? "ecic-visible" : ""} grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5`}
          >
            {cards.map((c, i) => (
              <div
                key={c.title}
                className="ecic-card"
                style={{ animationDelay: `${0.05 + i * 0.08}s` }}
              >
                <div className="ecic-card-inner h-full bg-white rounded-2xl border border-gray-100 p-6 sm:p-7 text-center flex flex-col items-center">
                  <span
                    className="inline-flex items-center justify-center w-10 h-10 rounded-xl text-white mb-4"
                    style={{ background: "#4B47E5" }}
                  >
                    {c.icon}
                  </span>
                  <h3 className="text-[15px] sm:text-[16px] font-bold text-gray-900 mb-2">
                    {c.title}
                  </h3>
                  <p className="text-[13px] sm:text-[13.5px] leading-[1.7] text-gray-500 mb-4">
                    {c.desc}
                  </p>
                  <a
                    href="#learn-more"
                    className="ecic-link inline-flex items-center gap-1.5 text-[13px] font-semibold mt-auto"
                    style={{ color: "#4B47E5" }}
                  >
                    Learn more <span aria-hidden="true">→</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}