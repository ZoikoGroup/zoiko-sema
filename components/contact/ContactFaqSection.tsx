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

const faqs = [
  {
    q: "How do I contact Zoiko Sema sales?",
    a: "Use the Contact Sales route and provide your company, use case, and timeline details so we can route and prioritize accurately.",
  },
  {
    q: "Where do existing customers get help?",
    a: "Start with the Help Center for guides and troubleshooting. If you still need a person, use the Support route and include your account and workspace details.",
  },
  {
    q: "How do I report a security issue?",
    a: "Use the Security concern route and include a severity level, affected system, and reproduction steps if available. Sensitive reports are handled confidentially.",
  },
  {
    q: "How do I request a DPA or legal review?",
    a: "Use the Legal request route and specify whether you need a DPA, contract review, or policy clarification, along with your company name.",
  },
  {
    q: "How do I contact press or request brand assets?",
    a: "Use the Press inquiry route and include your publication, deadline, and the specific assets or interview you're requesting.",
  },
  {
    q: "How do I become a partner?",
    a: "Use the Partnership inquiry route and share your partner type, region, and a short proposal so the partnerships team can follow up.",
  },
  {
    q: "What if I don't know the correct route?",
    a: "Choose General inquiry — we'll ask a few follow-up questions and route your request to the right team.",
  },
];

export default function ContactFaqSection() {
  const { ref: headRef, inView: headIn } = useInView(0.3);
  const { ref: listRef, inView: listIn } = useInView(0.08);
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <>
      <style>{`
        @keyframes faqFadeUp {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .faq-hidden  { opacity: 0; transform: translateY(28px); }
        .faq-visible { animation: faqFadeUp .65s cubic-bezier(.22,1,.36,1) forwards; }

        .faq-item { opacity: 0; transform: translateY(20px); }
        .faq-list.faq-visible .faq-item {
          animation: faqFadeUp .5s cubic-bezier(.22,1,.36,1) forwards;
        }

        .faq-panel {
          display: grid;
          grid-template-rows: 0fr;
          transition: grid-template-rows .35s cubic-bezier(.22,1,.36,1);
        }
        .faq-panel.faq-open {
          grid-template-rows: 1fr;
        }
        .faq-panel-inner {
          overflow: hidden;
        }

        .faq-icon {
          transition: transform .25s ease, background-color .25s ease;
        }
        .faq-icon.faq-open {
          transform: rotate(45deg);
        }

        .faq-row {
          transition: border-color .2s ease;
        }

        @media (prefers-reduced-motion: reduce) {
          .faq-hidden, .faq-visible, .faq-item { opacity: 1 !important; transform: none !important; animation: none !important; }
          .faq-panel, .faq-icon { transition: none !important; }
        }
      `}</style>

      <section
        aria-label="Contact FAQ"
        className="w-full bg-white py-16 sm:py-20 md:py-24"
      >
        <div className="mx-auto w-full max-w-3xl px-5 sm:px-8">
          {/* Heading */}
          <div
            ref={headRef}
            className={`faq-hidden ${headIn ? "faq-visible" : ""} text-center mb-10 sm:mb-12`}
          >
            <span className="block text-[11px] font-bold tracking-[0.14em] uppercase text-brand mb-2">
              Contact FAQ
            </span>
            <h2 className="text-[clamp(22px,3.6vw,30px)] font-bold leading-[1.15] tracking-tight text-gray-900">
              Questions about reaching us
            </h2>
          </div>

          {/* List */}
          <div
            ref={listRef}
            className={`faq-list ${listIn ? "faq-visible" : ""} flex flex-col gap-3`}
          >
            {faqs.map((item, i) => {
              const isOpen = openIndex === i;
              return (
                <div
                  key={item.q}
                  className="faq-item"
                  style={{ animationDelay: `${0.04 + i * 0.06}s` }}
                >
                  <div className="faq-row bg-white border border-gray-200 rounded-2xl overflow-hidden">
                    <button
                      type="button"
                      onClick={() => setOpenIndex(isOpen ? null : i)}
                      aria-expanded={isOpen}
                      className="w-full flex items-center justify-between gap-4 text-left px-5 sm:px-6 py-4 sm:py-5"
                    >
                      <span className="text-[14px] sm:text-[15px] font-bold text-gray-900">
                        {item.q}
                      </span>
                      <span
                        className={`faq-icon ${isOpen ? "faq-open" : ""} shrink-0 inline-flex items-center justify-center w-6 h-6 rounded-full bg-brand/10 text-brand`}
                      >
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round">
                          <line x1="12" y1="5" x2="12" y2="19" />
                          <line x1="5" y1="12" x2="19" y2="12" />
                        </svg>
                      </span>
                    </button>

                    <div className={`faq-panel ${isOpen ? "faq-open" : ""}`}>
                      <div className="faq-panel-inner">
                        <p className="px-5 sm:px-6 pb-4 sm:pb-5 text-[13px] sm:text-[13.5px] leading-[1.7] text-gray-500">
                          {item.a}
                        </p>
                      </div>
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