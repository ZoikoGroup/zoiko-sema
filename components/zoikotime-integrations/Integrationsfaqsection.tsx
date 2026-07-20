"use client";

import React, { useEffect, useRef, useState } from "react";
import { FiPlus } from "react-icons/fi";

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

type Faq = { question: string; answer: string };

const FAQS: Faq[] = [
  {
    question: "What systems can ZoikoTime integrate with?",
    answer:
      "ZoikoTime connects with identity providers, HRIS/HCM and payroll platforms, project and CRM tools, communication apps, and the wider Zoiko ecosystem. Each connector is categorized by availability, direction, and setup level — nothing fabricated.",
  },
  {
    question: "Does ZoikoTime support HRIS and payroll integrations?",
    answer:
      "Yes. HRIS/HCM and payroll/finance connectors sync field-level authority, effective dates, and manager/team mapping so your source of truth stays authoritative.",
  },
  {
    question: "Does ZoikoTime support SSO and SCIM?",
    answer:
      "Yes. SSO via SAML/OIDC is available for eligible plans with role separation, and SCIM keeps user and group lifecycle synchronized from your identity provider.",
  },
  {
    question: "Does ZoikoTime have an API?",
    answer:
      "Yes. A documented API with a sandbox, scoped access and rate limits, signed webhooks, retries with dead-letter handling, and clear versioning.",
  },
  {
    question: "What happens when an integration fails?",
    answer:
      "Failures surface through status, alerts, and retries with dead-letter handling rather than silent data loss — with support and a public system status page for visibility.",
  },
  {
    question: "Can an integration expand employee monitoring?",
    answer:
      "No. Integrations follow minimum-necessary access and governance boundaries; they don't create new surveillance capabilities or surface data beyond authorized scope.",
  },
];

export function IntegrationsFaqSection() {
  const { ref: eyebrowRef, inView: eyebrowIn } = useInView(0.4);
  const { ref: headRef, inView: headIn } = useInView<HTMLHeadingElement>(0.3);
  const { ref: listRef, inView: listIn } = useInView(0.08);

  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const toggle = (i: number) =>
    setOpenIndex((current) => (current === i ? null : i));

  return (
    <>
      <style>{`
        @keyframes ifqFadeUp {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .ifq-hidden  { opacity: 0; transform: translateY(28px); }
        .ifq-visible { animation: ifqFadeUp .7s cubic-bezier(.22,1,.36,1) forwards; }

        .ifq-panel {
          display: grid;
          grid-template-rows: 0fr;
          transition: grid-template-rows .35s cubic-bezier(.22,1,.36,1);
        }
        .ifq-panel.ifq-open { grid-template-rows: 1fr; }
        .ifq-panel > .ifq-inner { overflow: hidden; }

        .ifq-plus { transition: transform .3s ease; }
        .ifq-plus.ifq-rot { transform: rotate(45deg); }

        @media (prefers-reduced-motion: reduce) {
          .ifq-hidden, .ifq-visible { opacity: 1 !important; transform: none !important; animation: none !important; }
          .ifq-panel { transition: none !important; }
          .ifq-plus { transition: none !important; }
        }
      `}</style>

      <section
        aria-label="Questions about integrations"
        className="w-full bg-[#FAFBFF] py-10 dark:bg-[#0D0B24] sm:py-14"
      >
        <div className="mx-auto w-full max-w-2xl px-6 sm:px-8">
          {/* Header */}
          <div className="mb-10 text-center">
            <p
              ref={eyebrowRef}
              className={`ifq-hidden ${eyebrowIn ? "ifq-visible" : ""} mb-4 inline-flex items-center gap-2 text-[12px] font-bold uppercase tracking-[0.22em] text-[#2F6BEB] dark:text-[#6B8AF5]`}
            >
              <span className="h-1.5 w-1.5 rounded-full bg-[#2F6BEB] dark:bg-[#6B8AF5]" />
              FAQ
            </p>
            <h2
              ref={headRef}
              className={`ifq-hidden ${headIn ? "ifq-visible" : ""} text-[clamp(26px,4.4vw,36px)] font-bold tracking-tight text-gray-900 dark:text-white`}
              style={{ animationDelay: "0.08s" }}
            >
              Questions about Integrations
            </h2>
          </div>

          {/* Accordion */}
          <div ref={listRef} className="flex flex-col gap-3">
            {FAQS.map((faq, i) => {
              const isOpen = openIndex === i;
              const panelId = `ifaq-panel-${i}`;
              const buttonId = `ifaq-button-${i}`;
              return (
                <div
                  key={faq.question}
                  className={`ifq-hidden ${listIn ? "ifq-visible" : ""} overflow-hidden rounded-xl border bg-white shadow-[0_1px_3px_rgba(16,24,40,0.05)] transition-colors dark:bg-[#151233] dark:shadow-none ${
                    isOpen
                      ? "border-[#2F6BEB]/30 dark:border-[#2F6BEB]/40"
                      : "border-gray-100 dark:border-white/10"
                  }`}
                  style={{ animationDelay: `${0.08 + i * 0.06}s` }}
                >
                  <button
                    id={buttonId}
                    type="button"
                    onClick={() => toggle(i)}
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left sm:px-6"
                  >
                    <span className="text-[14px] font-semibold text-gray-800 dark:text-gray-100">
                      {faq.question}
                    </span>
                    <FiPlus
                      className={`ifq-plus h-5 w-5 flex-shrink-0 text-[#2F6BEB] dark:text-[#6B8AF5] ${isOpen ? "ifq-rot" : ""}`}
                      aria-hidden="true"
                    />
                  </button>

                  <div
                    id={panelId}
                    role="region"
                    aria-labelledby={buttonId}
                    className={`ifq-panel ${isOpen ? "ifq-open" : ""}`}
                  >
                    <div className="ifq-inner">
                      <p className="px-5 pb-4 text-[13px] leading-[1.7] text-gray-500 dark:text-gray-400 sm:px-6">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}

export default IntegrationsFaqSection;