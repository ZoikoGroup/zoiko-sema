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

// TODO: replace with your actual icon image path, e.g. "/images/sema-ai/icon-check.svg"
const ICON_SRC = "/Images/Vector2.png";

// TODO: replace with your actual photo path, e.g. "/images/sema-ai/meetings-intelligence.jpg"
const PHOTO_SRC = "/Images/meetings-intelligence.webp";

const items = [
  {
    title: "Meeting summaries",
    description: "Turn meetings into concise recaps with decisions and next steps.",
  },
  {
    title: "Call follow-ups",
    description: "Capture call notes and suggested follow-ups after voice conversations.",
  },
  {
    title: "Preparation support",
    description: "Review related notes, mail, and prior discussions before a meeting.",
  },
  {
    title: "Decision capture",
    description: "Identify what was agreed and who owns the next step.",
  },
];

export default function SemaAiMeetingsIntelligenceSection() {
  const { ref: eyebrowRef, inView: eyebrowIn } = useInView(0.3);
  const { ref: headingRef, inView: headingIn } = useInView(0.3);
  const { ref: listRef, inView: listIn } = useInView(0.1);
  const { ref: imageRef, inView: imageIn } = useInView(0.1);

  return (
    <>
      <style>{`
        @keyframes samiFadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes samiFadeIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        .sami-hidden  { opacity: 0; transform: translateY(24px); }
        .sami-visible { animation: samiFadeUp .6s cubic-bezier(.22,1,.36,1) forwards; }

        .sami-image-hidden  { opacity: 0; }
        .sami-image-visible { animation: samiFadeIn .8s ease forwards; }

        .sami-item { opacity: 0; transform: translateY(18px); }
        .sami-item.sami-item-in {
          animation: samiFadeUp .5s cubic-bezier(.22,1,.36,1) forwards;
        }

        .sami-item {
          transition: transform .25s ease, border-color .25s ease, box-shadow .25s ease;
        }
        .sami-item:hover {
          transform: translateX(3px);
          border-color: #c7cff9;
          box-shadow: 0 10px 22px -16px rgba(52,87,232,0.3);
        }

        .sami-icon { transition: transform .25s ease; }
        .sami-item:hover .sami-icon { transform: scale(1.1); }

        .sami-image-frame img { transition: transform .5s ease; }
        .sami-image-frame:hover img { transform: scale(1.03); }

        @media (prefers-reduced-motion: reduce) {
          .sami-hidden, .sami-item, .sami-image-hidden { opacity: 1 !important; transform: none !important; }
          .sami-visible, .sami-item-in, .sami-image-visible { animation: none !important; }
        }
      `}</style>

      <section aria-label="Meetings and calls intelligence" className="w-full bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-2">

          {/* LEFT — content panel */}
          <div
            className="px-6 md:px-10 lg:pl-40 lg:pr-14 py-16 md:py-20 flex flex-col justify-center"
            style={{ background: "#F3F2FD" }}
          >
            <p
              ref={eyebrowRef}
              className={`sami-hidden ${eyebrowIn ? "sami-visible" : ""} text-[11px] font-semibold uppercase tracking-[0.14em] mb-3`}
              style={{ color: BRAND }}
            >
              Meetings and Calls Intelligence
            </p>
            <h2
              ref={headingRef}
              className={`sami-hidden ${headingIn ? "sami-visible" : ""} text-[clamp(24px,3.4vw,32px)] font-bold leading-[1.25] tracking-tight text-gray-900 mb-8 max-w-[450px]`}
              style={{ animationDelay: "0.05s" }}
            >
              Turn conversations into concise, actionable records.
            </h2>

            <div ref={listRef} className="flex flex-col gap-3 max-w-[440px]">
              {items.map((item, i) => (
                <div
                  key={item.title}
                  className={`sami-item ${listIn ? "sami-item-in" : ""} flex items-start gap-3 rounded-xl border border-gray-200 bg-white px-4 py-3.5`}
                  style={{ animationDelay: `${i * 0.1}s` }}
                >
                  <img
                    src={ICON_SRC}
                    alt=""
                    className="sami-icon w-6 h-6 flex-shrink-0 mt-0.5"
                  />
                  <div>
                    <p className="text-[13.5px] font-bold text-gray-900 mb-1">
                      {item.title}
                    </p>
                    <p className="text-[12.5px] leading-relaxed text-gray-500">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT — full-bleed image, no right padding */}
          <div
            ref={imageRef}
            className={`sami-image-hidden ${imageIn ? "sami-image-visible" : ""} sami-image-frame relative min-h-[360px] lg:min-h-full overflow-hidden`}
          >
            <img
              src={PHOTO_SRC}
              alt="Team reviewing AI meeting intelligence"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>

        </div>
      </section>
    </>
  );
}