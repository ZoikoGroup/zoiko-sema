"use client";

import React, { useState, useRef, useEffect } from "react";

interface FaqItem {
  q: string;
  a: React.ReactNode;
}

const faqs: FaqItem[] = [
  {
    q: "Do I need to be an enterprise customer to request a demo?",
    a: (
      <>
        No. Zoiko Sema can support individuals, freelancers, teams, SMEs, and
        larger organizations. Your team size and reason for requesting a demo
        help us tailor the conversation.
      </>
    ),
  },
  {
    q: "Will pricing be discussed during the demo?",
    a: (
      <>
        Yes, if you'd like. We'll walk through the plan that best fits your team
        size and use case, including Business and Enterprise pricing and any
        ZoikoTime integration costs where relevant.
      </>
    ),
  },
  {
    q: "How long does a typical demo take?",
    a: (
      <>
        Most demos run 20–30 minutes, depending on how many use cases you want
        to cover. We focus on your actual workflows rather than a generic
        product walkthrough.
      </>
    ),
  },
  {
    q: "Who from Sema will I be speaking with?",
    a: (
      <>
        A member of our solutions team will follow up directly. For larger
        organizations or ZoikoTime integration requests, a specialist with the
        relevant technical background joins the call.
      </>
    ),
  },
  {
    q: "Is my information kept confidential?",
    a: (
      <>
        Yes. Information submitted through this form is used only to route and
        prepare your demo request, and is handled in line with Sema's privacy
        and data policies.
      </>
    ),
  },
];

export default function GetDemoFAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <>
      <style>{`
        @keyframes gdfFadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes gdfRowFadeUp {
          from { opacity: 0; transform: translateY(14px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes gdfAnswerSlideIn {
          from { opacity: 0; transform: translateY(-6px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes gdfRipple {
          from { transform: scale(0.6); opacity: 0.35; }
          to   { transform: scale(1.6); opacity: 0; }
        }

        .gdf-heading-enter { animation: gdfFadeUp 0.55s cubic-bezier(.22,1,.36,1) both; }
        .gdf-row-enter { animation: gdfRowFadeUp 0.5s cubic-bezier(.22,1,.36,1) both; }

        /* row container */
        .gdf-row {
          background: #fff;
          border-radius: 16px;
          box-shadow: 0 1px 2px rgba(15,15,40,0.04);
          transition: background-color .25s ease, box-shadow .25s ease;
        }
        .gdf-row:hover {
          box-shadow: 0 8px 20px rgba(71,71,135,0.10);
        }

        /* question button — hover / focus / active states */
        .gdf-trigger {
          width: 100%;
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 16px;
          text-align: left;
          padding: 22px 22px;
          background: transparent;
          border: none;
          cursor: pointer;
          border-radius: 16px;
          position: relative;
          overflow: hidden;
          transition: padding-left .2s ease;
        }
        .gdf-trigger:hover { padding-left: 26px; }
        .gdf-trigger:focus-visible {
          outline: 2px solid #474787;
          outline-offset: 2px;
        }
        .gdf-trigger:active .gdf-toggle-circle {
          transform: scale(0.88);
        }

        /* ripple effect on click */
        .gdf-trigger .gdf-ripple {
          position: absolute;
          inset: 0;
          border-radius: 16px;
          background: radial-gradient(circle, rgba(71,71,135,0.12) 0%, transparent 70%);
          opacity: 0;
          pointer-events: none;
        }
        .gdf-trigger:active .gdf-ripple {
          animation: gdfRipple 0.5s ease-out;
        }

        .gdf-question {
          font-size: 15.5px;
          font-weight: 700;
          color: #15131F;
          transition: color .2s ease;
        }
        .gdf-trigger:hover .gdf-question { color: #474787; }

        /* toggle circle (the +/x button) */
        .gdf-toggle-circle {
          flex-shrink: 0;
          width: 30px;
          height: 30px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #EAF6F2;
          color: #474787;
          margin-top: 1px;
          transition: background-color .25s ease, color .25s ease, transform .2s ease, box-shadow .25s ease;
        }
        .gdf-trigger:hover .gdf-toggle-circle {
          background: #474787;
          color: #fff;
          transform: scale(1.08);
          box-shadow: 0 6px 14px rgba(71,71,135,0.3);
        }
        .gdf-toggle-circle.is-open {
          background: #474787;
          color: #fff;
        }
        .gdf-toggle-icon {
          transition: transform .35s cubic-bezier(.22,1,.36,1);
          transform: rotate(0deg);
        }
        .gdf-toggle-circle.is-open .gdf-toggle-icon {
          transform: rotate(45deg);
        }

        /* answer panel */
        .gdf-answer-wrap {
          overflow: hidden;
          transition: max-height .4s cubic-bezier(.22,1,.36,1);
        }
        .gdf-answer-inner {
          animation: gdfAnswerSlideIn 0.35s cubic-bezier(.22,1,.36,1) both;
        }

        @media (prefers-reduced-motion: reduce) {
          .gdf-heading-enter, .gdf-row-enter, .gdf-answer-inner {
            animation: none !important; opacity: 1 !important; transform: none !important;
          }
          .gdf-trigger:active .gdf-ripple { animation: none !important; }
          .gdf-toggle-circle, .gdf-toggle-icon { transition: none !important; }
        }
      `}</style>

      <section
        aria-label="Designed for secure, responsible communication"
        style={{ backgroundColor: "#EAEEFC" }}
        className="w-full py-16 md:py-20"
      >
        <div className="mx-auto w-full max-w-3xl px-6 md:px-10">

          {/* ── Heading ── */}
          <div className="gdf-heading-enter text-center mb-10">
            <h2
              className="font-bold leading-[1.2] tracking-tight text-[#15131F]"
              style={{ fontSize: "24px" }}
            >
              Designed for secure, responsible communication.
            </h2>
          </div>

          {/* ── FAQ list ── */}
          <div className="space-y-4">
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
      className="gdf-row-enter gdf-row"
      style={{ animationDelay: `${index * 0.06}s` }}
    >
      <button
        type="button"
        className="gdf-trigger"
        onClick={onToggle}
        aria-expanded={isOpen}
      >
        <span className="gdf-ripple" aria-hidden="true" />
        <span className="gdf-question">{item.q}</span>
        <span className={`gdf-toggle-circle ${isOpen ? "is-open" : ""}`} aria-hidden="true">
          <svg width="13" height="13" viewBox="0 0 13 13" fill="none" className="gdf-toggle-icon">
            <path d="M6.5 1v11M1 6.5h11" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
          </svg>
        </span>
      </button>

      <div className="gdf-answer-wrap" style={{ maxHeight }}>
        {isOpen && (
          <div ref={innerRef} className="gdf-answer-inner px-[22px] pb-6">
            <p className="text-[13.5px] leading-[1.75] text-[#5C5870]">
              {item.a}
            </p>
          </div>
        )}
        {!isOpen && (
          <div
            ref={innerRef}
            className="px-[22px] pb-6"
            style={{ position: "absolute", visibility: "hidden", height: 0, overflow: "hidden" }}
          >
            <p className="text-[13.5px] leading-[1.75] text-[#5C5870]">{item.a}</p>
          </div>
        )}
      </div>
    </div>
  );
}