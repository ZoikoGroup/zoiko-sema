"use client";

import React, { useEffect, useRef, useState } from "react";

// Reusable scroll-in-view hook. Generic over the element type so the ref can be
// attached to any element (div, ul, section, ...) without a type mismatch.
function useInView<T extends HTMLElement = HTMLDivElement>(threshold = 0.15) {
  const ref = useRef<T>(null);
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

type Card = { title: string; description: string };

const CARDS: Card[] = [
  {
    title: "SSO / SAML / OIDC",
    description: "Identity federation for eligible plans, with role separation.",
  },
  {
    title: "SCIM",
    description: "User and group lifecycle synchronized from your identity provider.",
  },
  {
    title: "HRIS / HCM",
    description: "Field-level authority, effective dates, and manager/team mapping.",
  },
];

export function IdentityWorkforceSection() {
  const { ref: eyebrowRef, inView: eyebrowIn } = useInView(0.4);
  const { ref: headRef, inView: headIn } = useInView<HTMLHeadingElement>(0.3);
  const { ref: imgRef, inView: imgIn } = useInView(0.15);
  const { ref: cardsRef, inView: cardsIn } = useInView(0.15);

  return (
    <>
      <style>{`
        @keyframes iwFadeUp {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes iwFadeLeft {
          from { opacity: 0; transform: translateX(-36px) translateY(12px); }
          to   { opacity: 1; transform: translateX(0) translateY(0); }
        }
        @keyframes iwFadeRight {
          from { opacity: 0; transform: translateX(36px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        .iw-hidden   { opacity: 0; transform: translateY(28px); }
        .iw-visible  { animation: iwFadeUp .7s cubic-bezier(.22,1,.36,1) forwards; }
        .iw-hidden-l  { opacity: 0; transform: translateX(-36px) translateY(12px); }
        .iw-visible-l { animation: iwFadeLeft .8s cubic-bezier(.22,1,.36,1) forwards; }
        .iw-hidden-r  { opacity: 0; transform: translateX(36px); }
        .iw-visible-r { animation: iwFadeRight .7s cubic-bezier(.22,1,.36,1) forwards; }

        .iw-card { transition: transform .3s ease, border-color .3s ease, background-color .3s ease; }
        .iw-card:hover { transform: translateY(-3px); border-color: rgba(124,134,240,0.4); background-color: rgba(124,134,240,0.06); }

        .iw-image { transition: transform .5s cubic-bezier(.22,1,.36,1), box-shadow .5s ease; }
        .iw-image:hover { transform: translateY(-6px); box-shadow: 0 34px 70px rgba(0,0,0,0.55); }

        @media (prefers-reduced-motion: reduce) {
          .iw-hidden, .iw-visible, .iw-hidden-l, .iw-visible-l, .iw-hidden-r, .iw-visible-r {
            opacity: 1 !important; transform: none !important; animation: none !important;
          }
          .iw-card:hover, .iw-image:hover { transform: none !important; }
        }
      `}</style>

      <section
        aria-label="Identity and workforce — SSO, SCIM, and HRIS/HCM"
        className="relative w-full overflow-hidden bg-[#130F2E] py-10 sm:py-14"
      >
        {/* Ambient glows */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-0 h-[420px] w-[720px] -translate-x-1/2 rounded-full opacity-60 blur-3xl"
          style={{
            background:
              "radial-gradient(circle, rgba(124,92,240,0.28) 0%, rgba(124,92,240,0) 70%)",
          }}
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-24 bottom-0 h-[380px] w-[380px] rounded-full opacity-40 blur-3xl"
          style={{
            background:
              "radial-gradient(circle, rgba(47,107,235,0.22) 0%, rgba(47,107,235,0) 70%)",
          }}
        />

        <div className="relative mx-auto w-full max-w-6xl px-6 sm:px-8">
          {/* Header */}
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <p
              ref={eyebrowRef}
              className={`iw-hidden ${eyebrowIn ? "iw-visible" : ""} mb-4 inline-flex items-center gap-2 text-[12px] font-bold uppercase tracking-[0.22em] text-[#8C95F2]`}
            >
              <span className="h-1.5 w-1.5 rounded-full bg-[#8C95F2]" />
              Identity and Workforce
            </p>
            <h2
              ref={headRef}
              className={`iw-hidden ${headIn ? "iw-visible" : ""} text-[clamp(30px,4vw,44px)] font-bold leading-[1.15] tracking-tight text-white`}
              style={{ animationDelay: "0.08s" }}
            >
              SSO, SCIM, and HRIS/HCM — with clear source-of-truth boundaries.
            </h2>
          </div>

          {/* image | cards */}
          <div className="grid grid-cols-1 items-stretch gap-8 lg:grid-cols-2 lg:gap-10">
            {/* Image */}
            <div
              ref={imgRef}
              className={`iw-hidden-l ${imgIn ? "iw-visible-l" : ""} min-h-[260px] overflow-hidden rounded-2xl lg:min-h-0`}
              style={{ animationDelay: "0.1s" }}
            >
              {/* replace src with your exported artwork (PNG in /public/images/) */}
              <img
                src="/zoikotime-integrations/identity-workforce.png"
                alt="A workforce team collaborating at computer workstations in a dark office"
                loading="lazy"
                className="iw-image h-full w-full object-cover"
              />
            </div>

            {/* Cards */}
            <div ref={cardsRef} className="flex flex-col gap-4">
              {CARDS.map((card, i) => (
                <div
                  key={card.title}
                  className={`iw-card iw-hidden-r ${cardsIn ? "iw-visible-r" : ""} flex flex-1 flex-col justify-center rounded-xl border border-white/[0.07] bg-[#1A1836] p-5`}
                  style={{ animationDelay: `${0.15 + i * 0.12}s` }}
                >
                  <h3 className="mb-1.5 text-[15px] font-semibold text-white">
                    {card.title}
                  </h3>
                  <p className="text-[13px] leading-[1.6] text-gray-400">
                    {card.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default IdentityWorkforceSection;