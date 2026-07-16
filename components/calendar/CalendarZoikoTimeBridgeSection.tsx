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

const steps = [
  { title: "Sema Calendar", subtitle: "Scheduling context" },
  { title: "Policy layer", subtitle: "Admin controlled" },
  { title: "ZoikoTime", subtitle: "Approved work context" },
];

const cards = [
  {
    label: "Team Meetings",
    desc: "Schedule recurring team rituals with summaries and follow-up.",
    linkLabel: "Explore Meetings",
    href: "/meeting-to-summary",
  },
  {
    label: "Client Consultations",
    desc: "Create events from mail threads and keep client context attached.",
    linkLabel: "Explore Mail",
    href: "/sema-mail",
  },
  {
    label: "Remote Coordination",
    desc: "Find usable times across time zones and distributed teams.",
    linkLabel: "Explore Solutions",
    href: "/solutions",
  },
  {
    label: "Executive Reviews",
    desc: "Prepare agendas, documents, attendees, and decisions in one event page.",
    linkLabel: "Contact Sales",
    href: "/contact",
  },
  {
    label: "Regulated Meetings",
    desc: "Apply Confidential Mode, guest rules, retention, and audit controls.",
    linkLabel: "Visit Trust Center",
    href: "/trust-center",
  },
  {
    label: "ZoikoTime Customers",
    desc: "Connect approved meeting context to verified work signals.",
    linkLabel: "Request Integration Demo",
    href: "/get-a-demo",
  },
];

export default function CalendarZoikoTimeBridgeSection() {
  const { ref: badgeRef, inView: badgeIn } = useInView(0.3);
  const { ref: headRef, inView: headIn } = useInView(0.2);
  const { ref: stepsRef, inView: stepsIn } = useInView(0.2);
  const { ref: imgRef, inView: imgIn } = useInView(0.15);
  const { ref: calloutRef, inView: calloutIn } = useInView(0.3);
  const { ref: gridRef, inView: gridIn } = useInView(0.08);

  return (
    <>
      <style>{`
        @keyframes ztbFadeUp {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .ztb-hidden  { opacity: 0; transform: translateY(28px); }
        .ztb-visible { animation: ztbFadeUp .65s cubic-bezier(.22,1,.36,1) forwards; }

        .ztb-step { opacity: 0; transform: translateY(20px); }
        .ztb-steps.ztb-visible .ztb-step {
          animation: ztbFadeUp .5s cubic-bezier(.22,1,.36,1) forwards;
        }
        .ztb-arrow { opacity: 0; }
        .ztb-steps.ztb-visible .ztb-arrow {
          animation: ztbFadeUp .5s ease forwards;
        }

        .ztb-card { opacity: 0; transform: translateY(24px); }
        .ztb-grid.ztb-visible .ztb-card {
          animation: ztbFadeUp .55s cubic-bezier(.22,1,.36,1) forwards;
        }

        .ztb-step-inner {
          transition: transform .3s ease, box-shadow .3s ease, border-color .3s ease;
        }
        .ztb-step-inner:hover {
          transform: translateY(-3px);
          box-shadow: 0 12px 26px rgba(15, 15, 42, 0.08);
        }

        .ztb-card-inner {
          transition: transform .3s ease, box-shadow .3s ease, border-color .3s ease;
        }
        .ztb-card-inner:hover {
          transform: translateY(-4px);
          box-shadow: 0 16px 32px rgba(15, 15, 42, 0.08);
          border-color: rgba(75, 71, 229, 0.24);
        }

        .ztb-link {
          transition: gap .2s ease;
        }
        .ztb-link:hover {
          gap: 7px;
        }

        @media (prefers-reduced-motion: reduce) {
          .ztb-hidden, .ztb-visible, .ztb-step, .ztb-arrow, .ztb-card { opacity: 1 !important; transform: none !important; animation: none !important; }
          .ztb-step-inner:hover, .ztb-card-inner:hover { transform: none !important; }
        }
      `}</style>

      <section aria-label="ZoikoTime bridge" className="w-full">
        {/* White zone: badge, heading, steps, image */}
        <div className="w-full bg-white pt-16 sm:pt-20 md:pt-24 pb-10 sm:pb-12">
          <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 md:px-10 lg:px-16">
            {/* Badge */}
            <div
              ref={badgeRef}
              className={`ztb-hidden ${badgeIn ? "ztb-visible" : ""} flex items-center justify-center gap-2 mb-4`}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-brand" />
              <span className="text-[11px] font-bold tracking-[0.1em] uppercase text-brand">
                ZoikoTime Bridge
              </span>
            </div>

            {/* Heading */}
            <div
              ref={headRef}
              className={`ztb-hidden ${headIn ? "ztb-visible" : ""} text-center mb-8 sm:mb-10`}
              style={{ animationDelay: "0.06s" }}
            >
              <h2 className="text-[clamp(22px,4vw,32px)] font-bold leading-[1.25] tracking-tight text-gray-900 max-w-[680px] mx-auto mb-3">
                An optional, governed enterprise bridge — never workforce surveillance.
              </h2>
              <p className="text-[13px] sm:text-[14px] leading-[1.7] text-gray-500 max-w-[600px] mx-auto">
                Sema Calendar can align meeting schedules with approved work context where the organization enables ZoikoTime.
              </p>
            </div>

            {/* Steps */}
            <div
              ref={stepsRef}
              className={`ztb-steps ${stepsIn ? "ztb-visible" : ""} flex flex-col sm:flex-row items-stretch justify-center gap-3 sm:gap-2 mb-10 sm:mb-12`}
            >
              {steps.map((step, i) => (
                <React.Fragment key={step.title}>
                  <div
                    className="ztb-step w-full sm:w-[200px]"
                    style={{ animationDelay: `${0.05 + i * 0.1}s` }}
                  >
                    <div className="ztb-step-inner h-full bg-white border border-gray-200 rounded-2xl px-5 py-4 text-center">
                      <h3 className="text-[13.5px] font-bold text-gray-900 mb-1">
                        {step.title}
                      </h3>
                      <p className="text-[11.5px] text-gray-400">
                        {step.subtitle}
                      </p>
                    </div>
                  </div>
                  {i < steps.length - 1 && (
                    <div
                      className="ztb-arrow hidden sm:flex items-center justify-center px-1"
                      style={{ animationDelay: `${0.1 + i * 0.1}s` }}
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgba(15,15,42,0.25)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="5" y1="12" x2="19" y2="12" />
                        <polyline points="12 5 19 12 12 19" />
                      </svg>
                    </div>
                  )}
                </React.Fragment>
              ))}
            </div>

            {/* Image */}
            <div
              ref={imgRef}
              className={`ztb-hidden ${imgIn ? "ztb-visible" : ""}`}
              style={{ animationDelay: "0.1s" }}
            >
              <div className="rounded-3xl overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/Images/CalendarZoikoTimeBridgeSection.webp"
                  alt="Desktop calendar display with a bouquet of flowers on a wooden desk"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Lavender zone: callout + 6-card grid */}
        <div className="w-full bg-[#F3F2FD] pt-8 sm:pt-10 pb-16 sm:pb-20 md:pb-24">
          <div className="mx-auto w-full max-w-6xl px-5 sm:px-8 md:px-10 lg:px-16">
            {/* Callout */}
            <div
              ref={calloutRef}
              className={`ztb-hidden ${calloutIn ? "ztb-visible" : ""} mb-8 sm:mb-10`}
            >
              <div className="bg-indigo-50 border border-indigo-100 rounded-2xl px-6 py-4 text-center">
                <p className="text-[12.5px] sm:text-[13px] leading-[1.7] text-gray-700">
                  Private calendar details and workforce context must not be exposed to ordinary users. Records and audit trails support business accountability where configured.
                </p>
              </div>
            </div>

            {/* Cards */}
            <div
              ref={gridRef}
              className={`ztb-grid ${gridIn ? "ztb-visible" : ""} grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4`}
            >
              {cards.map((card, i) => (
                <div
                  key={card.label}
                  className="ztb-card"
                  style={{ animationDelay: `${0.04 + i * 0.06}s` }}
                >
                  <div className="ztb-card-inner h-full bg-white rounded-2xl border border-gray-200 p-5 sm:p-6 flex flex-col">
                    <span className="text-[10.5px] font-bold tracking-[0.08em] uppercase text-brand mb-2">
                      {card.label}
                    </span>
                    <p className="text-[13px] leading-[1.7] text-gray-600 mb-4">
                      {card.desc}
                    </p>
                    <a
                      href={card.href}
                      className="ztb-link mt-auto inline-flex items-center gap-1.5 text-[13px] font-semibold text-brand"
                    >
                      {card.linkLabel}
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="5" y1="12" x2="19" y2="12" />
                        <polyline points="12 5 19 12 12 19" />
                      </svg>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}