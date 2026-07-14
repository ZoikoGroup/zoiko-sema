"use client";

import React, { useState, useRef, useEffect } from "react";

// TODO: replace with the final FAQ banner photo URL.
const FAQ_BANNER_IMAGE_URL = "/Images/GetDemoFAQSection.tsx.png";

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
    q: "How long is a typical demo?",
    a: (
      <>
        Most demos run 20–30 minutes, depending on how many use cases you want
        to cover. We focus on your actual workflows rather than a generic
        product walkthrough.
      </>
    ),
  },
  {
    q: "Can the demo include a security or compliance review?",
    a: (
      <>
        Yes. For teams with security, compliance, or procurement requirements,
        we can bring in a specialist to walk through data handling, access
        controls, and the ZoikoTime integration model.
      </>
    ),
  },
  {
    q: "Is a demo confidential?",
    a: (
      <>
        Yes. Information submitted through this form is used only to route and
        prepare your demo request, and is handled in line with Sema&apos;s privacy
        and data policies.
      </>
    ),
  },
];

export default function GetDemoFAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

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

        .gdf-heading-enter { animation: gdfFadeUp 0.55s cubic-bezier(.22,1,.36,1) both; }
        .gdf-row-enter { animation: gdfRowFadeUp 0.5s cubic-bezier(.22,1,.36,1) both; }

        /* row container */
        .gdf-row {
          background: #fff;
          border: 1px solid #e5e7eb;
          border-radius: 12px;
          transition: border-color .22s ease, box-shadow .22s ease;
        }
        .gdf-row:hover {
          border-color: #c7cbe8;
          box-shadow: 0 6px 18px rgba(71,71,135,0.08);
        }

        /* question button */
        .gdf-trigger {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          text-align: left;
          padding: 18px 22px;
          background: transparent;
          border: none;
          cursor: pointer;
          border-radius: 12px;
        }
        .gdf-trigger:focus-visible {
          outline: 2px solid #6366f1;
          outline-offset: 2px;
        }

        .gdf-question {
          font-size: 14.5px;
          font-weight: 700;
          color: #111827;
        }

        /* toggle +/x */
        .gdf-toggle {
          flex-shrink: 0;
          width: 18px;
          height: 18px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #4b5563;
        }
        .gdf-toggle-icon {
          transition: transform .3s cubic-bezier(.22,1,.36,1);
          transform: rotate(0deg);
        }
        .gdf-toggle.is-open .gdf-toggle-icon {
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
          .gdf-toggle-icon { transition: none !important; }
        }
      `}</style>

      <section
        aria-label="Questions about the demo"
        style={{ backgroundColor: "#F8FAFC" }}
        className="w-full py-16 md:py-20"
      >
        <div className="mx-auto w-full max-w-3xl px-6 md:px-10">

          {/* ── Heading ── */}
          <div className="gdf-heading-enter text-center mb-8">
            <p className="text-[11px] font-bold uppercase tracking-[0.18em] mb-3" style={{ color: "#6366f1" }}>
              FAQ
            </p>
            <h2
              className="font-bold leading-[1.2] tracking-tight text-gray-900"
              style={{ fontSize: "26px" }}
            >
              Questions about the demo
            </h2>
          </div>

          {/* ── Banner image ── */}
          <div className="gdf-heading-enter rounded-2xl overflow-hidden mb-10" style={{ animationDelay: "0.1s" }}>
            {FAQ_BANNER_IMAGE_URL ? (
              <img src={FAQ_BANNER_IMAGE_URL} alt="" className="w-full h-auto block" style={{ maxHeight: 200, objectFit: "cover" }} />
            ) : (
              <div
                className="w-full flex items-center justify-center text-[13px] text-gray-400"
                style={{ height: 160, background: "linear-gradient(135deg, #e5e7eb, #f3f4f6)" }}
              >
                Add FAQ_BANNER_IMAGE_URL to display the banner image
              </div>
            )}
          </div>

          {/* ── FAQ list ── */}
          <div className="space-y-3">
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
        <span className="gdf-question">{item.q}</span>
        <span className={`gdf-toggle ${isOpen ? "is-open" : ""}`} aria-hidden="true">
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="gdf-toggle-icon">
            <path d="M7 1v12M1 7h12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
          </svg>
        </span>
      </button>

      <div className="gdf-answer-wrap" style={{ maxHeight }}>
        {isOpen && (
          <div ref={innerRef} className="gdf-answer-inner px-[22px] pb-5">
            <p className="text-[13.5px] leading-[1.75] text-gray-500">
              {item.a}
            </p>
          </div>
        )}
        {!isOpen && (
          <div
            ref={innerRef}
            className="px-[22px] pb-5"
            style={{ position: "absolute", visibility: "hidden", height: 0, overflow: "hidden" }}
          >
            <p className="text-[13.5px] leading-[1.75] text-gray-500">{item.a}</p>
          </div>
        )}
      </div>
    </div>
  );
}
