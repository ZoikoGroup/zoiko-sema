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
    desc: "Deploy with controlled access, identity integration, and audit-ready infrastructure.",
    linkText: "Get a demo",
    linkHref: "/get-a-demo/",
  },
  {
    label: "For Legal & Compliance",
    desc: "Configure retention, exports, and admin-scoped visibility and controls.",
    linkText: "View security & compliance",
    linkHref: "#security",
  },
  {
    label: "For Operations",
    desc: "Keep teams aligned with structured communication across functions and locations.",
    linkText: "Get a demo",
    linkHref: "/get-a-demo/",
  },
  {
    label: "For Finance & Leadership",
    desc: "Improve meeting and collaboration accountability when connected with ZoikoTime.",
    linkText: "View security & compliance",
    linkHref: "#security",
  },
];

export default function ProductAdminSection({
  dashboardImageUrl = "/Images/Background+Shadow.webp",
}: ProductAdminSectionProps) {
  const { ref: headRef,  inView: headIn  } = useInView(0.2);
  const { ref: imgRef,   inView: imgIn   } = useInView(0.08);
  const { ref: cardsRef, inView: cardsIn } = useInView(0.08);

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
        .pa-img-wrap:hover img { transform:scale(1.02); }
        .pa-img-wrap img { transition:transform .6s cubic-bezier(.22,1,.36,1); }

        /* audience cards stagger */
        .pa-aud-card { opacity:0; transform:translateY(20px); transition:transform .3s ease, box-shadow .3s ease, border-color .3s ease; }
        .pa-cards-in .pa-aud-card:nth-child(1) { animation: paFadeUp .55s ease .04s forwards; }
        .pa-cards-in .pa-aud-card:nth-child(2) { animation: paFadeUp .55s ease .12s forwards; }
        .pa-cards-in .pa-aud-card:nth-child(3) { animation: paFadeUp .55s ease .20s forwards; }
        .pa-cards-in .pa-aud-card:nth-child(4) { animation: paFadeUp .55s ease .28s forwards; }
        .pa-aud-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 14px 32px rgba(71,71,135,0.12);
          border-color: rgba(71,71,135,0.2);
        }

        .pa-link {
          transition: gap .2s ease, opacity .2s ease;
        }
        .pa-link:hover { gap: 7px; opacity: .75; }
        .pa-link-arrow { display:inline-block; transition:transform .2s ease; }
        .pa-link:hover .pa-link-arrow { transform: translateX(2px); }

        @media (prefers-reduced-motion:reduce) {
          .pa-hidden,.pa-img-wrap,.pa-aud-card { opacity:1!important; transform:none!important; animation:none!important; }
          .pa-visible { animation:none!important; opacity:1!important; }
          .pa-aud-card:hover, .pa-img-wrap:hover img { transform:none!important; }
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
              className="font-extrabold leading-[1.12] tracking-tight text-gray-900 mb-4"
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
         
          >
            <img
              src={dashboardImageUrl}
              alt="Team on a video call — business-ready collaboration"
              className="w-full h-auto block"
              loading="lazy"
              draggable={false}
            />
          </div>

          {/* ── 4 audience cards, each with its own link ── */}
          <div
            ref={cardsRef}
            className={`grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 ${cardsIn ? "pa-cards-in" : ""}`}
          >
            {audienceCards.map((c, i) => (
              <div key={i} className="pa-aud-card rounded-2xl p-1">
                <p className="text-[13.5px] font-bold text-gray-900 mb-2">
                  {c.label}
                </p>
                <p className="text-[13px] leading-[1.65] text-gray-500 mb-4">
                  {c.desc}
                </p>
                <a
                  href={c.linkHref}
                  className="pa-link inline-flex items-center gap-1.5 text-[13px] font-semibold"
                  style={{ color: "#3457E8" }}
                >
                  {c.linkText}
                  <span className="pa-link-arrow" aria-hidden="true">→</span>
                </a>
              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
}