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
    image: "/Images/AudioCallsWhyCall1.png", // 👈 add image URL here
    alt: "Man on a phone call outdoors holding a laptop",
    text: "Resolve questions faster than long message threads.",
  },
  {
    image: "/Images/AudioCallsWhyCall2.png", // 👈 add image URL here
    alt: "Two colleagues talking, one on a phone call",
    text: "Create human connection without requiring cameras.",
  },
  {
    image: "/Images/AudioCallsWhyCall3.png", // 👈 add image URL here
    alt: "Two people outdoors, one on a phone call",
    text: "Move from chat to voice without losing conversation context.",
  },
];

export default function AudioCallsWhyCallSection() {
  const { ref: headRef, inView: headIn } = useInView(0.2);
  const { ref: cardsRef, inView: cardsIn } = useInView(0.1);

  return (
    <>
      <style>{`
        @keyframes wcFadeUp {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .wc-hidden  { opacity: 0; transform: translateY(28px); }
        .wc-visible { animation: wcFadeUp .65s cubic-bezier(.22,1,.36,1) forwards; }

        .wc-card {
          transition: transform .3s ease, box-shadow .3s ease;
        }
        .wc-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 18px 36px rgba(20,18,43,0.18);
        }

        /* Image gets a subtle zoom on hover */
        .wc-card-img {
          transition: transform .5s cubic-bezier(.22,1,.36,1);
        }
        .wc-card:hover .wc-card-img {
          transform: scale(1.04);
        }

        /* Caption — light by default, flips to dark gradient + white bold text on hover */
        .wc-caption {
          background-color: #EEF0FE;
          transition: background .4s ease;
        }
        .wc-caption-text {
          color: #14122B;
          font-weight: 600;
          transition: color .4s ease, font-weight .4s ease;
        }
        .wc-card:hover .wc-caption {
          background: linear-gradient(135deg, #2D2A7A 0%, #14122B 100%);
        }
        .wc-card:hover .wc-caption-text {
          color: #ffffff;
          font-weight: 700;
        }

        @media (prefers-reduced-motion: reduce) {
          .wc-hidden, .wc-visible { opacity: 1 !important; transform: none !important; animation: none !important; }
          .wc-card:hover, .wc-card:hover .wc-card-img { transform: none !important; }
        }
      `}</style>

      <section
        aria-label="Why start a call"
        className="w-full py-16 sm:py-20 md:py-24 bg-white"
      >
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 md:px-10 lg:px-16">
          {/* Heading */}
          <div
            ref={headRef}
            className={`wc-hidden ${headIn ? "wc-visible" : ""} text-center mb-10 sm:mb-12`}
          >
            <h2 className="text-[clamp(22px,4.2vw,34px)] font-extrabold leading-[1.2] tracking-tight text-gray-900 max-w-[720px] mx-auto">
              When text slows down and video is too much, start a call.
            </h2>
          </div>

          {/* Cards */}
          <div
            ref={cardsRef}
            className={`wc-hidden ${cardsIn ? "wc-visible" : ""} grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5`}
          >
            {cards.map((card, i) => (
              <div
                key={i}
                className="wc-card rounded-2xl overflow-hidden cursor-pointer"
                style={{ animationDelay: `${0.1 + i * 0.1}s` }}
              >
                {/* Top image */}
                <div className="w-full h-[260px] overflow-hidden">
                  <img
                    src={card.image}
                    alt={card.alt}
                    className="wc-card-img w-full h-full object-cover"
                  />
                </div>

                {/* Bottom caption — light normally, dark gradient on card hover */}
                <div className="wc-caption px-5 py-6 sm:px-6 sm:py-7">
                  <p className="wc-caption-text text-[14px] sm:text-[15px] leading-[1.6] text-center">
                    {card.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}