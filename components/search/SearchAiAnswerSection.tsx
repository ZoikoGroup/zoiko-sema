"use client";

import React, { useEffect, useRef, useState } from "react";

/** Same scroll-reveal hook used across the other sections/pages. */
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

// TODO: replace with your actual illustration path, e.g. "/images/search/answer-illustration.png"
const ILLUSTRATION_SRC = "/Images/answer-illustration.png";

const tags = ["Meeting transcript", "Mail thread", "Project channel", "Risk file"];

const sources = [
  {
    title: "Client Escalation Meeting",
    meta: "Transcript · May 14",
    accent: BRAND,
  },
  {
    title: "Revised rollout email",
    meta: "Mail · May 15",
    accent: "#4F46E5",
  },
  {
    title: "Legal wording risk",
    meta: "File · Risk Register",
    accent: "#D97706",
  },
];

export default function SearchAiAnswerSection() {
  const { ref: headRef, inView: headIn } = useInView(0.3);
  const { ref: cardRef, inView: cardIn } = useInView(0.15);
  const { ref: sourcesRef, inView: sourcesIn } = useInView(0.15);

  return (
    <>
      <style>{`
        @keyframes saasFadeUp {
          from { opacity: 0; transform: translateY(26px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes saasFadeIn {
          from { opacity: 0; transform: translateY(30px) scale(.98); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }
        .saas-hidden  { opacity: 0; transform: translateY(26px); }
        .saas-visible { animation: saasFadeUp .6s cubic-bezier(.22,1,.36,1) forwards; }

        .saas-card-hidden  { opacity: 0; transform: translateY(30px) scale(.98); }
        .saas-card-visible { animation: saasFadeIn .7s cubic-bezier(.22,1,.36,1) forwards; }

        .saas-source { opacity: 0; transform: translateY(18px); }
        .saas-source.saas-source-in {
          animation: saasFadeUp .5s cubic-bezier(.22,1,.36,1) forwards;
        }

        .saas-source {
          transition: transform .2s ease, box-shadow .2s ease;
        }
        .saas-source:hover {
          transform: translateX(3px);
          box-shadow: 0 10px 22px -16px rgba(15,23,42,0.2);
        }

        .saas-btn-primary {
          background: ${BRAND};
          transition: transform .2s ease, box-shadow .2s ease, background .2s ease;
        }
        .saas-btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 22px -10px rgba(52,87,232,0.5);
          background: #2c48c9;
        }

        .saas-btn-secondary {
          transition: transform .2s ease, border-color .2s ease, background .2s ease;
        }
        .saas-btn-secondary:hover {
          transform: translateY(-2px);
          border-color: #c7cff9;
          background: #f8f9ff;
        }

        .saas-view-btn {
          transition: background .2s ease;
        }
        .saas-view-btn:hover { background: #dde2fb; }

        .saas-illustration {
          transition: transform .4s cubic-bezier(.22,1,.36,1);
        }
        .saas-illustration:hover { transform: translateY(-4px) rotate(-2deg); }

        @media (prefers-reduced-motion: reduce) {
          .saas-hidden, .saas-card-hidden, .saas-source { opacity: 1 !important; transform: none !important; }
          .saas-visible, .saas-card-visible, .saas-source-in { animation: none !important; }
        }
      `}</style>

      <section
        aria-label="Answers with sources"
        className="w-full py-20 md:py-24"
        style={{ background: "#EEF0FC" }}
      >
        <div className="mx-auto w-full max-w-6xl px-6 md:px-10">

          {/* Heading */}
          <div
            ref={headRef}
            className={`saas-hidden ${headIn ? "saas-visible" : ""} text-center mb-14`}
          >
            <h2 className="text-[clamp(24px,3.4vw,32px)] font-bold tracking-tight text-gray-900 mb-4">
              Answers with sources, not black-box guesses.
            </h2>
            <p className="mx-auto max-w-[560px] text-[14px] leading-relaxed text-gray-500">
              Sema Search can summarize relevant context while showing
              exactly where each answer came from.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-10 lg:gap-14 items-start">

            {/* LEFT — AI answer card */}
            <div
              ref={cardRef}
              className={`saas-card-hidden ${cardIn ? "saas-card-visible" : ""} rounded-2xl bg-white p-7 shadow-[0_2px_24px_-8px_rgba(15,23,42,0.12)]`}
            >
              <span
                className="inline-block rounded-full px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide mb-4"
                style={{ background: "#E6E9FB", color: BRAND }}
              >
                AI Answer
              </span>
              <h3 className="text-[17px] font-bold text-gray-900 mb-3">
                What happened after the client escalation?
              </h3>
              <p className="text-[13.5px] leading-relaxed text-gray-500 mb-5">
                The team agreed to pause rollout for one week, assign owner
                review to Maya, and send the client a revised timeline by
                Friday. Two blockers remain: data import validation and
                legal wording approval.
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-gray-100 px-3 py-1.5 text-[11.5px] font-medium text-gray-600"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <button className="saas-btn-primary text-white text-[13.5px] font-semibold rounded-full px-5 py-2.5">
                  Share answer
                </button>
                <button className="saas-btn-secondary bg-white text-gray-900 text-[13.5px] font-semibold rounded-full px-5 py-2.5 border border-gray-200">
                  Open sources
                </button>
              </div>
            </div>

            {/* RIGHT — illustration + source list */}
            <div className="relative">
              <img
                src={ILLUSTRATION_SRC}
                alt=""
                aria-hidden="true"
                className="saas-illustration absolute -top-8 right-38 w-32 md:w-36 z-10 select-none pointer-events-none"
              />

              <div ref={sourcesRef} className="flex flex-col gap-3 pt-8">
                {sources.map((source, i) => (
                  <div
                    key={source.title}
                    className={`saas-source ${sourcesIn ? "saas-source-in" : ""} flex items-center justify-between gap-3 rounded-xl bg-white pl-4 pr-3 py-3.5`}
                    style={{
                      borderLeft: `3px solid ${source.accent}`,
                      animationDelay: `${i * 0.1}s`,
                    }}
                  >
                    <div>
                      <p className="text-[13.5px] font-bold text-gray-900 leading-tight mb-0.5">
                        {source.title}
                      </p>
                      <p className="text-[11.5px] text-gray-400">{source.meta}</p>
                    </div>
                    <button
                      className="saas-view-btn flex-shrink-0 rounded-full px-3.5 py-1.5 text-[12px] font-semibold"
                      style={{ background: "#E6E9FB", color: BRAND }}
                    >
                      View
                    </button>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}