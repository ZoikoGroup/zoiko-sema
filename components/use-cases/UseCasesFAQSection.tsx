"use client";

import React, { useState, useRef, useEffect } from "react";

interface FaqItem {
  q: string;
  a: React.ReactNode;
}

const faqs: FaqItem[] = [
  {
    q: "Can I use Sema without ZoikoTime?",
    a: (
      <>
        Yes. Sema is a complete intelligent communication platform on its own —
        messaging, audio calls, video meetings, AI summaries, action items and
        team workspaces.{" "}
        <strong className="font-bold text-[#15131F]">
          ZoikoTime integration is an optional route
        </strong>{" "}
        for organizations that need verified workforce truth, and is configured
        separately when an organization is ready.
      </>
    ),
  },
  {
    q: "Does Sema score or monitor employees?",
    a: (
      <>
        No. Sema is not a monitoring or scoring tool. AI summaries describe
        meeting content, not personal performance. Any workforce-level signal
        only routes to ZoikoTime when an admin explicitly enables it under
        policy — individuals are never scored inside Sema itself.
      </>
    ),
  },
  {
    q: "How does Sema's AI handle private team conversations?",
    a: (
      <>
        AI processing is workspace-scoped by default. Summaries are generated
        only within the channel or call they originate from, are explainable
        and traceable back to source, and admins can configure or disable AI
        scope per channel.
      </>
    ),
  },
  {
    q: "What happens to client call recordings?",
    a: (
      <>
        Recordings follow per-workspace retention rules set by the admin
        console. Customers control export, deletion windows and jurisdiction-
        aware retention — recordings are never used outside the workspace that
        created them without explicit consent.
      </>
    ),
  },
  {
    q: "What does it actually take to enable Sema → ZoikoTime routing?",
    a: (
      <>
        Five gates must pass: admin approval, role-based eligibility, retention
        policy alignment, jurisdiction compliance and explicit consent. If any
        gate fails, the routing does not activate.
      </>
    ),
  },
  {
    q: "Are these workflows based on real customer outcomes?",
    a: (
      <>
        Sema is in launch. These workflows describe how the platform is
        designed to operate. Benchmarked customer outcomes, certifications and
        proof modules will be published as pilots and live deployments produce
        them.
      </>
    ),
  },
  {
    q: "Can individuals use Sema, or is it only for businesses?",
    a: (
      <>
        Both. Sema for Individuals supports secure messaging, audio calls, video
        calls and personal AI memory with no business account required.
        Businesses layer on governance, admin controls and ZoikoTime routing
        when they&apos;re ready.
      </>
    ),
  },
  {
    q: "Does Sema have SOC 2 / ISO 27001 / HIPAA certifications?",
    a: (
      <>
        Not yet. Sema is in launch and these certifications are not yet
        completed. The trust posture described across this site reflects what
        is architecturally built into the platform today; formal certifications
        will be listed here once achieved.
      </>
    ),
  },
];

export default function UseCasesFAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <>
      <style>{`
        @keyframes faqFadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes faqHeadingFadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes faqRowFadeUp {
          from { opacity: 0; transform: translateY(14px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes faqAnswerSlideIn {
          from { opacity: 0; transform: translateY(-6px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes faqPlusSpin {
          from { transform: rotate(0deg); }
          to   { transform: rotate(45deg); }
        }
        @keyframes faqRipple {
          from { transform: scale(0.6); opacity: 0.35; }
          to   { transform: scale(1.6); opacity: 0; }
        }

        .faq-heading-enter { animation: faqHeadingFadeUp 0.55s cubic-bezier(.22,1,.36,1) both; }
        .faq-row-enter { animation: faqRowFadeUp 0.5s cubic-bezier(.22,1,.36,1) both; }

        /* row container */
        .faq-row {
          border-bottom: 1px solid #ECECF5;
          transition: background-color .25s ease;
          border-radius: 12px;
        }
        .faq-row:hover { background-color: #F8F8FE; }

        /* question button — hover / focus / active states */
        .faq-trigger {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          text-align: left;
          padding: 22px 18px;
          background: transparent;
          border: none;
          cursor: pointer;
          border-radius: 12px;
          position: relative;
          overflow: hidden;
          transition: padding-left .2s ease;
        }
        .faq-trigger:hover { padding-left: 22px; }
        .faq-trigger:focus-visible {
          outline: 2px solid #474787;
          outline-offset: 2px;
        }
        .faq-trigger:active .faq-toggle-circle {
          transform: scale(0.88);
        }

        /* ripple effect on click */
        .faq-trigger .faq-ripple {
          position: absolute;
          inset: 0;
          border-radius: 12px;
          background: radial-gradient(circle, rgba(71,71,135,0.12) 0%, transparent 70%);
          opacity: 0;
          pointer-events: none;
        }
        .faq-trigger:active .faq-ripple {
          animation: faqRipple 0.5s ease-out;
        }

        .faq-question {
          font-size: 15.5px;
          font-weight: 700;
          color: #15131F;
          transition: color .2s ease;
        }
        .faq-trigger:hover .faq-question { color: #474787; }

        /* toggle circle (the +/x button) */
        .faq-toggle-circle {
          flex-shrink: 0;
          width: 28px;
          height: 28px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #EEF0FB;
          color: #474787;
          transition: background-color .25s ease, color .25s ease, transform .2s ease;
        }
        .faq-trigger:hover .faq-toggle-circle {
          background: #474787;
          color: #fff;
          transform: scale(1.08);
        }
        .faq-toggle-circle.is-open {
          background: #474787;
          color: #fff;
        }
        .faq-toggle-icon {
          transition: transform .35s cubic-bezier(.22,1,.36,1);
          transform: rotate(0deg);
        }
        .faq-toggle-circle.is-open .faq-toggle-icon {
          transform: rotate(45deg);
        }

        /* answer panel */
        .faq-answer-wrap {
          overflow: hidden;
          transition: max-height .4s cubic-bezier(.22,1,.36,1);
        }
        .faq-answer-inner {
          animation: faqAnswerSlideIn 0.35s cubic-bezier(.22,1,.36,1) both;
        }

        @media (prefers-reduced-motion: reduce) {
          .faq-heading-enter, .faq-row-enter, .faq-answer-inner {
            animation: none !important; opacity: 1 !important; transform: none !important;
          }
          .faq-trigger:active .faq-ripple { animation: none !important; }
          .faq-toggle-circle, .faq-toggle-icon { transition: none !important; }
        }
      `}</style>

      <section
        aria-label="Adoption, privacy, AI, ZoikoTime — straight answers"
        className="w-full bg-white py-20 md:py-24"
      >
        <div className="mx-auto w-full max-w-5xl px-6 md:px-10">

          {/* ── Heading ── */}
          <div className="faq-heading-enter text-center mb-14">
            <h2
              className="font-bold leading-[1.18] tracking-tight text-[#15131F] mb-4"
              style={{ fontSize: "35px" }}
            >
              Adoption, privacy, AI, ZoikoTime — straight answers
            </h2>
            <p className="mx-auto max-w-[600px] text-[15px] leading-[1.75] text-[#5C5870]">
              The questions enterprise buyers, individual users and ZoikoTime
              admins ask first. Answered without the marketing cushion.
            </p>
          </div>

          {/* ── FAQ list ── */}
          <div>
            {faqs.map((item, i) => {
              const isOpen = openIndex === i;
              return (
                <FaqRow
                  key={item.q}
                  item={item}
                  isOpen={isOpen}
                  index={i}
                  onToggle={() => setOpenIndex(isOpen ? null : i)}
                />
              );
            })}
          </div>

        </div>
      </section>
    </>
  );
}

function FaqRow({
  item,
  isOpen,
  index,
  onToggle,
}: {
  item: FaqItem;
  isOpen: boolean;
  index: number;
  onToggle: () => void;
}) {
  const innerRef = useRef<HTMLDivElement>(null);
  const [maxHeight, setMaxHeight] = useState<string>("0px");

  useEffect(() => {
    if (isOpen && innerRef.current) {
      setMaxHeight(`${innerRef.current.scrollHeight}px`);
    } else {
      setMaxHeight("0px");
    }
  }, [isOpen]);

  return (
    <div
      className="faq-row-enter faq-row"
      style={{ animationDelay: `${index * 0.05}s` }}
    >
      <button
        type="button"
        className="faq-trigger"
        onClick={onToggle}
        aria-expanded={isOpen}
      >
        <span className="faq-ripple" aria-hidden="true" />
        <span className="faq-question">{item.q}</span>
        <span className={`faq-toggle-circle ${isOpen ? "is-open" : ""}`} aria-hidden="true">
          <svg width="13" height="13" viewBox="0 0 13 13" fill="none" className="faq-toggle-icon">
            <path d="M6.5 1v11M1 6.5h11" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
          </svg>
        </span>
      </button>

      <div
        className="faq-answer-wrap"
        style={{ maxHeight }}
      >
        {isOpen && (
          <div ref={innerRef} className="faq-answer-inner px-[18px] pb-6">
            <p className="text-[13.5px] leading-[1.75] text-[#5C5870]">
              {item.a}
            </p>
          </div>
        )}
        {/* hidden measuring node kept in DOM when closed, so scrollHeight is ready instantly on open */}
        {!isOpen && (
          <div ref={innerRef} className="px-[18px] pb-6" style={{ position: "absolute", visibility: "hidden", height: 0, overflow: "hidden" }}>
            <p className="text-[13.5px] leading-[1.75] text-[#5C5870]">{item.a}</p>
          </div>
        )}
      </div>
    </div>
  );
}