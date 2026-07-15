"use client";

import { useEffect, useRef, useState } from "react";
import {
  FiUsers,
  FiGlobe,
  FiShield,
  FiLock,
  FiChevronDown,
  FiBox,
  FiArrowRight,
} from "react-icons/fi";
import type { IconType } from "react-icons";

// Reusable scroll-in-view hook (same pattern as the other sections)
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

type Stat = { icon: IconType; value: string; label: string };

const STATS: Stat[] = [
  { icon: FiUsers, value: "25K+", label: "Teams trust Zoiko Sema" },
  { icon: FiGlobe, value: "180+", label: "Countries connected" },
  { icon: FiShield, value: "99.99%", label: "Uptime you can rely on" },
  { icon: FiLock, value: "Enterprise", label: "Security built in" },
];

type Faq = { question: string; answer: string };

// Row-major order: top-left, top-right, bottom-left, bottom-right.
const FAQS: Faq[] = [
  {
    question: "Is Zoiko Sema really free?",
    answer:
      "Yes. The Free plan is free forever for individuals and small teams, with no credit card required to get started.",
  },
  {
    question: "Do I need a credit card?",
    answer:
      "No. You can create an account and use the Free plan without entering any payment details.",
  },
  {
    question: "Can I upgrade later?",
    answer:
      "Absolutely. You can upgrade to a paid plan anytime as your team grows, and changes take effect immediately.",
  },
  {
    question: "What happens to my data?",
    answer:
      "Your data is encrypted, private, and never sold. You stay in control and can export or delete it whenever you need.",
  },
];

export function SignupSupportSection() {
  const { ref: statsRef, inView: statsIn } = useInView(0.2);
  const { ref: faqRef, inView: faqIn } = useInView(0.15);
  const { ref: ctaRef, inView: ctaIn } = useInView(0.2);

  const [open, setOpen] = useState<number[]>([]);
  const toggle = (i: number) =>
    setOpen((prev) => (prev.includes(i) ? prev.filter((x) => x !== i) : [...prev, i]));

  return (
    <>
      <style>{`
        @keyframes sfFadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .sf-hidden  { opacity: 0; transform: translateY(24px); }
        .sf-visible { animation: sfFadeUp .7s cubic-bezier(.22,1,.36,1) forwards; }

        .sf-panel {
          display: grid;
          grid-template-rows: 0fr;
          transition: grid-template-rows .35s cubic-bezier(.22,1,.36,1);
        }
        .sf-panel.sf-open { grid-template-rows: 1fr; }
        .sf-panel > .sf-inner { overflow: hidden; }

        .sf-chev { transition: transform .3s ease; }
        .sf-chev.sf-rot { transform: rotate(180deg); }

        @media (prefers-reduced-motion: reduce) {
          .sf-hidden, .sf-visible { opacity: 1 !important; transform: none !important; animation: none !important; }
          .sf-panel { transition: none !important; }
          .sf-chev { transition: none !important; }
        }
      `}</style>

      <section
        aria-label="Trust, FAQ, and invite your team"
        className="w-full bg-white py-16 dark:bg-[#0D0B24] sm:py-20"
      >
        <div className="mx-auto w-full max-w-7xl px-6 sm:px-8">
          {/* Stats */}
          <div
            ref={statsRef}
            className="grid grid-cols-2 gap-x-6 gap-y-8 border-b border-gray-100 pb-14 dark:border-white/10 lg:grid-cols-4"
          >
            {STATS.map((stat, i) => {
              const Icon = stat.icon;
              return (
                <div
                  key={stat.label}
                  className={`sf-hidden ${statsIn ? "sf-visible" : ""} flex items-center gap-3`}
                  style={{ animationDelay: `${i * 0.08}s` }}
                >
                  <span className="inline-flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-[#EEF0FB] text-[#4F5BD5] dark:bg-[#4F5BD5]/20 dark:text-[#8C95F2]">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div>
                    <p className="text-[18px] font-bold leading-tight text-gray-900 dark:text-white">
                      {stat.value}
                    </p>
                    <p className="text-[12px] leading-tight text-gray-500 dark:text-gray-400">
                      {stat.label}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* FAQ */}
          <div ref={faqRef} className="pt-14">
            <h2
              className={`sf-hidden ${faqIn ? "sf-visible" : ""} mb-10 text-center text-[clamp(24px,3.4vw,32px)] font-bold tracking-tight text-gray-900 dark:text-white`}
            >
              Frequently asked questions
            </h2>

            <div className="mx-auto grid max-w-4xl grid-cols-1 gap-x-12 md:grid-cols-2">
              {FAQS.map((faq, i) => {
                const isOpen = open.includes(i);
                const panelId = `sfaq-panel-${i}`;
                const buttonId = `sfaq-button-${i}`;
                return (
                  <div
                    key={faq.question}
                    className={`sf-hidden ${faqIn ? "sf-visible" : ""} border-b border-gray-200 dark:border-white/10`}
                    style={{ animationDelay: `${0.1 + i * 0.07}s` }}
                  >
                    <button
                      id={buttonId}
                      type="button"
                      onClick={() => toggle(i)}
                      aria-expanded={isOpen}
                      aria-controls={panelId}
                      className="flex w-full items-center justify-between gap-4 py-4 text-left"
                    >
                      <span className="text-[14px] font-medium text-gray-800 dark:text-gray-100">
                        {faq.question}
                      </span>
                      <FiChevronDown
                        className={`sf-chev h-4 w-4 flex-shrink-0 text-gray-400 ${isOpen ? "sf-rot" : ""}`}
                        aria-hidden="true"
                      />
                    </button>
                    <div
                      id={panelId}
                      role="region"
                      aria-labelledby={buttonId}
                      className={`sf-panel ${isOpen ? "sf-open" : ""}`}
                    >
                      <div className="sf-inner">
                        <p className="pb-4 text-[13px] leading-6 text-gray-500 dark:text-gray-400">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <p
              className={`sf-hidden ${faqIn ? "sf-visible" : ""} mt-10 text-center text-[13px] text-gray-500 dark:text-gray-400`}
              style={{ animationDelay: "0.4s" }}
            >
              Still have questions? Visit our{" "}
              <a
                href="#"
                className="inline-flex items-center gap-1 font-semibold text-[#4F5BD5] hover:underline dark:text-[#8C95F2]"
              >
                Help Center
                <FiArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
              </a>
            </p>
          </div>

          {/* Invite CTA */}
          <div
            ref={ctaRef}
            className={`sf-hidden ${ctaIn ? "sf-visible" : ""} mt-14 flex flex-col gap-5 rounded-2xl bg-[#F5F4FF] px-6 py-6 dark:bg-[#151233] sm:flex-row sm:items-center sm:justify-between sm:px-8`}
          >
            <div className="flex items-center gap-4">
              <span className="inline-flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-white text-[#4F5BD5] shadow-sm dark:bg-white/10 dark:text-[#8C95F2]">
                <FiBox className="h-6 w-6" aria-hidden="true" />
              </span>
              <div>
                <h3 className="text-[16px] font-bold text-gray-900 dark:text-white">
                  Invite your team and get more done together
                </h3>
                <p className="mt-0.5 text-[13px] text-gray-500 dark:text-gray-400">
                  After you sign up, invite your team and start collaborating
                  instantly.
                </p>
              </div>
            </div>

            <button
              type="button"
              className="flex-shrink-0 rounded-lg border border-[#4F5BD5] bg-transparent px-5 py-2.5 text-[14px] font-semibold text-[#4F5BD5] transition hover:bg-[#4F5BD5] hover:text-white dark:text-[#8C95F2] dark:hover:text-white"
            >
              Invite your team
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default SignupSupportSection;