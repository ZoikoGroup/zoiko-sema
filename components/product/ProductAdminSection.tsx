"use client";

import React, { useEffect, useState, useRef } from "react";

function useInView(threshold = 0.1) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setInView(true); obs.disconnect(); } },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, inView };
}

interface ProductAdminSectionProps {
  dashboardImageUrl?: string;
}

const audienceCards = [
  {
    label: "For IT",
    desc: "Deploy with controlled access, identity integration and audit-ready integration activity.",
  },
  {
    label: "For Legal & Compliance",
    desc: "Configure retention, exports, AI usage and per-jurisdiction compliance settings.",
  },
  {
    label: "For Operations",
    desc: "Keep teams aligned and reduce communication ambiguity across functions and locations.",
  },
  {
    label: "For Finance & Leadership",
    desc: "Improve meeting and collaboration accountability when combined with ZoikoTime.",
  },
];

export default function ProductAdminSection({
  dashboardImageUrl = "/Product/admin-dashboard.webp",
}: ProductAdminSectionProps) {
  const { ref: headRef,  inView: headIn  } = useInView(0.2);
  const { ref: imgRef,   inView: imgIn   } = useInView(0.08);
  const { ref: cardsRef, inView: cardsIn } = useInView(0.08);
  const { ref: ctaRef,   inView: ctaIn   } = useInView(0.1);

  return (
    <>
      <style>{`
        @keyframes paFadeUp {
          from { opacity:0; transform:translateY(28px); }
          to   { opacity:1; transform:translateY(0); }
        }
        .pa-hidden  { opacity:0; transform:translateY(28px); }
        .pa-visible { animation: paFadeUp .6s cubic-bezier(.22,1,.36,1) forwards; }

        /* dashboard image */
        @keyframes paImgIn {
          from { opacity:0; transform:translateY(20px) scale(.98); }
          to   { opacity:1; transform:translateY(0) scale(1); }
        }
        .pa-img-wrap { opacity:0; }
        .pa-img-wrap.on { animation: paImgIn .7s cubic-bezier(.22,1,.36,1) forwards; }
        .pa-img-wrap:hover img { transform:scale(1.015); }
        .pa-img-wrap img { transition:transform .5s ease; }

        /* audience cards stagger */
        .pa-aud-card { opacity:0; transform:translateY(20px); transition:background .2s,transform .28s,box-shadow .28s; }
        .pa-cards-in .pa-aud-card:nth-child(1) { animation: paFadeUp .55s ease .04s forwards; }
        .pa-cards-in .pa-aud-card:nth-child(2) { animation: paFadeUp .55s ease .11s forwards; }
        .pa-cards-in .pa-aud-card:nth-child(3) { animation: paFadeUp .55s ease .18s forwards; }
        .pa-cards-in .pa-aud-card:nth-child(4) { animation: paFadeUp .55s ease .25s forwards; }
        .pa-aud-card:hover { background:#e8edff!important; transform:translateY(-3px)!important; box-shadow:0 8px 24px rgba(71,71,135,0.1)!important; }

        /* shimmer on primary btn */
        @keyframes paShimmer {
          from { transform:translateX(-100%); }
          to   { transform:translateX(220%); }
        }
        .pa-btn-p { position:relative; overflow:hidden; transition:opacity .2s,transform .2s,box-shadow .2s; }
        .pa-btn-p::after {
          content:""; position:absolute; inset:0;
          background:linear-gradient(120deg,transparent 30%,rgba(255,255,255,0.22) 50%,transparent 70%);
          transform:translateX(-100%);
        }
        .pa-btn-p:hover::after { animation: paShimmer .65s ease forwards; }
        .pa-btn-p:hover { opacity:.9; transform:translateY(-2px); box-shadow:0 8px 24px rgba(71,71,135,0.3); }
        .pa-btn-p:active { transform:translateY(0); }

        .pa-arrow { display:inline-block; transition:transform .2s; }
        .pa-btn-p:hover .pa-arrow { transform:translateX(3px); }

        .pa-btn-s { transition:background .2s,border-color .2s,transform .2s,box-shadow .2s; }
        .pa-btn-s:hover { background:#fff; border-color:#a5b4fc; transform:translateY(-2px); box-shadow:0 6px 18px rgba(0,0,0,0.08); }
        .pa-btn-s:active { transform:translateY(0); }

        @media (prefers-reduced-motion:reduce) {
          .pa-hidden,.pa-img-wrap,.pa-aud-card { opacity:1!important; transform:none!important; animation:none!important; }
          .pa-visible { animation:none!important; opacity:1!important; }
          .pa-btn-p:hover,.pa-btn-s:hover { transform:none; }
        }
      `}</style>

      <section
        aria-label="Business-ready control"
        className="w-full bg-white py-20 md:py-24"
      >
        <div className="mx-auto w-full max-w-7xl px-6 md:px-10 lg:px-16">

          {/* ── Heading ── */}
          <div
            ref={headRef}
            className={`pa-hidden ${headIn ? "pa-visible" : ""} text-center mb-10`}
          >
            <h2
              className="font-bold leading-[1.12] tracking-tight text-gray-900 mb-4"
              style={{ fontSize: "35px" }}
            >
              Business-ready control without making<br />communication feel heavy
            </h2>
            <p className="mx-auto max-w-[680px] text-[15px] leading-[1.8] text-gray-500">
              Admin, security, compliance, governance and deployment readiness — visible early
              so IT, Legal and Operations know Sema can serve serious organizations from day one.
            </p>
          </div>

          {/* ── Dashboard image ── */}
          <div
            ref={imgRef}
            className={`pa-img-wrap ${imgIn ? "on" : ""} w-full rounded-2xl overflow-hidden mb-10`}
            style={{
              boxShadow: "0 4px 40px rgba(71,71,135,0.12), 0 1px 8px rgba(0,0,0,0.06)",
              border: "1px solid #e5e7eb",
            }}
          >
            <img
              src={dashboardImageUrl}
              alt="Sema Admin Console — users, roles, policies, AI governance and ZoikoTime integration"
              className="w-full h-auto block"
              loading="lazy"
              draggable={false}
            />
          </div>

          {/* ── 4 audience cards ── */}
          <div
            ref={cardsRef}
            className={`grid grid-cols-2 md:grid-cols-4 gap-4 mb-10 ${cardsIn ? "pa-cards-in" : ""}`}
          >
            {audienceCards.map((c, i) => (
              <div
                key={i}
                className="pa-aud-card rounded-2xl p-5 cursor-default"
                style={{ background: "#EEF2FF" }}
              >
                <p
                  className="text-[10.5px] font-semibold uppercase tracking-[0.14em] mb-3"
                  style={{ color: "#474787" }}
                >
                  {c.label}
                </p>
                <p className="text-[13.5px] leading-[1.7] text-gray-600">
                  {c.desc}
                </p>
              </div>
            ))}
          </div>

          {/* ── CTA buttons ── */}
          <div
            ref={ctaRef}
            className={`pa-hidden ${ctaIn ? "pa-visible" : ""} flex flex-wrap items-center justify-center gap-4`}
            style={{ animationDelay: "0.08s" }}
          >
            <a
              href="/get-a-demo/"
              className="pa-btn-p inline-flex items-center gap-2 rounded-full px-8 py-3.5 text-[15px] font-semibold text-white"
              style={{ background: "#474787" }}
            >
              Get a demo
              <span className="pa-arrow" aria-hidden="true">→</span>
            </a>
            <a
              href="#security"
              className="pa-btn-s inline-flex items-center gap-2 rounded-full border border-gray-300 bg-white/90 px-8 py-3.5 text-[15px] font-medium text-gray-700"
            >
              View security &amp; compliance
            </a>
          </div>

        </div>
      </section>
    </>
  );
}