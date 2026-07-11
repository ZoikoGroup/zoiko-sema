"use client";

import React, { useEffect, useRef, useState } from "react";

interface TrustCard {
  icon: React.ReactNode;
  title: string;
  desc: string;
}

const ShieldIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#474787" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <path d="M9 12l2 2 4-4" />
  </svg>
);

const SparkleIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#474787" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 3v4M12 17v4M3 12h4M17 12h4M5.6 5.6l2.8 2.8M15.6 15.6l2.8 2.8M5.6 18.4l2.8-2.8M15.6 8.4l2.8-2.8" />
  </svg>
);

const PeopleIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#474787" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="9" cy="8" r="3.2" />
    <path d="M3.5 19c0-3 2.5-5 5.5-5s5.5 2 5.5 5" />
    <path d="M18 8v4M16 10h4" />
  </svg>
);

const cards: TrustCard[] = [
  {
    icon: <ShieldIcon />,
    title: "Secure by architecture",
    desc:
      "Encryption in transit, workspace isolation, role-based permissions, session and device controls. Trust isn't a marketing layer — it's how Sema manages identity, access and data boundaries.",
  },
  {
    icon: <SparkleIcon />,
    title: "Responsible AI",
    desc:
      "AI summaries are explainable, traceable to source, and configurable per user and workspace. Sema's AI assists communication — it never replaces human judgment or creates hidden decisioning.",
  },
  {
    icon: <PeopleIcon />,
    title: "Governance + individual control",
    desc:
      "Business admins govern workspaces, retention, compliance and integrations. Individuals retain a simple, personal communication experience without enterprise-record treatment.",
  },
];

// ── Intersection-observer hook (matches HeroSection style) ─────────────────
function useInView(threshold = 0.12) {
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

export default function ProductTrustSection() {
  const { ref: headRef, inView: headIn } = useInView(0.25);
  const { ref: gridRef, inView: gridIn } = useInView(0.1);
  const { ref: ctaRef, inView: ctaIn } = useInView(0.4);

  return (
    <>
      <style>{`
        @keyframes atFadeUp {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        .at-hidden  { opacity: 0; transform: translateY(28px); }
        .at-visible { animation: atFadeUp .55s cubic-bezier(.22,1,.36,1) forwards; }

        /* staggered card entrance */
        .at-card-wrap { opacity: 0; transform: translateY(24px); }
        .at-grid-in .at-card-wrap {
          animation: atFadeUp .55s cubic-bezier(.22,1,.36,1) forwards;
        }
        .at-grid-in .at-card-wrap:nth-child(1) { animation-delay: .05s; }
        .at-grid-in .at-card-wrap:nth-child(2) { animation-delay: .15s; }
        .at-grid-in .at-card-wrap:nth-child(3) { animation-delay: .25s; }

        /* card hover */
        .at-card {
          transition: transform .28s cubic-bezier(.22,1,.36,1),
                      box-shadow .28s cubic-bezier(.22,1,.36,1);
          will-change: transform;
        }
        .at-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 18px 36px rgba(71,71,135,0.16);
        }

        /* icon box hover */
        .at-icon-box {
          transition: transform .3s cubic-bezier(.22,1,.36,1), box-shadow .3s ease;
        }
        .at-card:hover .at-icon-box {
          transform: scale(1.1) rotate(-4deg);
          box-shadow: 0 8px 18px rgba(71,71,135,0.18);
        }

        /* CTA pill hover */
        .at-cta {
          transition: transform .25s cubic-bezier(.22,1,.36,1), box-shadow .25s ease, background-color .25s ease;
        }
        .at-cta:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 28px rgba(71,71,135,0.18);
          background-color: #f8f8ff;
        }
        .at-cta-arrow { display: inline-block; transition: transform .2s ease; }
        .at-cta:hover .at-cta-arrow { transform: translateX(4px); }

        @media (prefers-reduced-motion: reduce) {
          .at-hidden, .at-card-wrap { opacity: 1 !important; transform: none !important; animation: none !important; }
          .at-visible { animation: none !important; opacity: 1 !important; }
          .at-card:hover, .at-cta:hover { transform: none; }
          .at-card:hover .at-icon-box { transform: none; }
        }
      `}</style>

      <section
        aria-label="Built for trust before scale"
        className="w-full bg-white py-20 md:py-24"
      >
        <div className="mx-auto w-full max-w-7xl px-6 md:px-10 lg:px-16">

          {/* ── Heading ── */}
          <div
            ref={headRef}
            className={`at-hidden ${headIn ? "at-visible" : ""} text-center mb-14`}
          >
            <h2
              className="font-bold leading-[1.15] tracking-tight text-[#15131F] mb-4"
              style={{ fontSize: "clamp(24px,3.2vw,35px)" }}
            >
              Built for trust before scale
            </h2>
            <p className="mx-auto max-w-[680px] text-[15px] leading-[1.75] text-[#5C5870]">
              Sema is designed around secure access, workspace boundaries,
              role-based permissions and responsible AI. Businesses can govern;
              individuals retain a simple experience.
            </p>
          </div>

          {/* ── 3-card grid ── */}
          <div
            ref={gridRef}
            className={`grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 ${
              gridIn ? "at-grid-in" : ""
            }`}
          >
            {cards.map((card) => (
              <div key={card.title} className="at-card-wrap">
                <div
                  className="at-card h-full rounded-[20px] p-7"
                  style={{ background: "#ECF3FF" }}
                >
                  {/* Icon box */}
                  <div className="at-icon-box w-11 h-11 rounded-xl bg-white flex items-center justify-center mb-6 shadow-sm">
                    {card.icon}
                  </div>

                  {/* Title */}
                  <h3 className="text-[16.5px] font-bold leading-snug text-[#15131F] mb-3">
                    {card.title}
                  </h3>

                  {/* Description */}
                  <p className="text-[13.5px] leading-[1.7] text-[#5C5870]">
                    {card.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* ── CTA pill ── */}
          <div
            ref={ctaRef}
            className={`at-hidden ${ctaIn ? "at-visible" : ""} flex justify-center`}
          >
            <a
              href="#trust-centre"
              className="at-cta inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-7 py-3.5 text-[14.5px] font-semibold text-[#15131F]"
            >
              Visit the Trust Centre
              <span className="at-cta-arrow" aria-hidden="true">→</span>
            </a>
          </div>

        </div>
      </section>
    </>
  );
}