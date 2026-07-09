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

const tags = ["Virtual Meetings", "Live Chat", "AI Companion", "AI Summarise", "Meeting Clip"];

const points = [
  {
    label: "Support hybrid and remote work:",
    text: "Keep global teams engaged with reliable video, chat, documents, and more.",
  },
  {
    label: "Seamless communication:",
    text: "Save time and cut costs with Meetings, Phone, Chat, and more, in one platform.",
  },
  {
    label: "Keep workflows moving:",
    text: "From brainstorms to documents, Sema helps teams cut friction and avoid deadends.",
  },
  {
    label: "Do more with AI:",
    text: "Built-in AI summarizes meetings and automates next steps, while SemaMate goes further and generates quality assets like decks and docs.",
  },
];

export default function FlexibleSolutionsSection() {
  const { ref: textRef, inView: textIn } = useInView(0.2);
  const { ref: imageRef, inView: imageIn } = useInView(0.15);

  return (
    <>
      <style>{`
        @keyframes fssFadeUp {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes fssFadeIn {
          from { opacity: 0; transform: translateY(20px) scale(0.98); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }
        .fss-hidden  { opacity: 0; transform: translateY(28px); }
        .fss-visible { animation: fssFadeUp .65s cubic-bezier(.22,1,.36,1) forwards; }

        .fss-image-hidden { opacity: 0; transform: translateY(20px) scale(0.98); }
        .fss-image-visible { animation: fssFadeIn .7s cubic-bezier(.22,1,.36,1) forwards; }

        /* Bullet points: opacity/transform is set directly here, and the
           parent wrapper toggles .fss-visible on itself (not a descendant
           selector) so the animation reliably fires once in view. */
        .fss-point { opacity: 0; transform: translateY(16px); }
        .fss-points.fss-visible .fss-point {
          animation: fssFadeUp .5s cubic-bezier(.22,1,.36,1) forwards;
        }

        .fss-btn {
          transition: transform .25s ease, box-shadow .25s ease;
        }
        .fss-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 14px 28px rgba(71,71,222,0.3);
        }

        .fss-img {
          transition: transform .4s cubic-bezier(.22,1,.36,1);
        }
        .fss-img-wrap:hover .fss-img {
          transform: scale(1.02);
        }

        @media (prefers-reduced-motion: reduce) {
          .fss-hidden, .fss-visible, .fss-point,
          .fss-image-hidden, .fss-image-visible { opacity: 1 !important; transform: none !important; animation: none !important; }
          .fss-btn:hover, .fss-img-wrap:hover .fss-img { transform: none !important; }
        }
      `}</style>

      <section
        aria-label="Flexible solutions for all your needs"
        className="w-full bg-[#F5F4FF] py-16 sm:py-20 md:py-24"
      >
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* Left column - text (full width on its own, stacks above image on mobile) */}
            <div
              ref={textRef}
              className={`fss-hidden ${textIn ? "fss-visible" : ""} w-full`}
            >
              <h2 className="text-[clamp(24px,4vw,32px)] font-bold leading-[1.2] tracking-tight text-gray-900 mb-4">
                Flexible solutions for all your needs
              </h2>

              <p className="text-[13.5px] sm:text-[14px] text-gray-500 mb-7">
                {tags.map((t, i) => (
                  <React.Fragment key={t}>
                    {t}
                    {i !== tags.length - 1 && <span className="mx-2 text-gray-300">|</span>}
                  </React.Fragment>
                ))}
              </p>

              <div className={`fss-points ${textIn ? "fss-visible" : ""} flex flex-col gap-4 mb-8`}>
                {points.map((p, i) => (
                  <p
                    key={p.label}
                    className="fss-point text-[13.5px] sm:text-[14px] leading-[1.7] text-gray-600"
                    style={{ animationDelay: `${0.1 + i * 0.08}s` }}
                  >
                    <span className="font-bold text-gray-900">{p.label}</span>{" "}
                    {p.text}
                  </p>
                ))}
              </div>

              <a
                href="#explore-products"
                className="fss-btn inline-flex items-center justify-center rounded-lg bg-[#4B47E5] text-white text-[14px] font-semibold px-8 py-3.5 w-full sm:w-full"
              >
                Explore Products
              </a>
            </div>

            {/* Right column - image only */}
            <div
              ref={imageRef}
              className={`fss-image-hidden ${imageIn ? "fss-image-visible" : ""} fss-img-wrap`}
            >
              <img
                src="/Home/Flexible.png"
                alt="Live chat and meeting collaboration preview"
                className="fss-img w-full h-auto rounded-2xl"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}