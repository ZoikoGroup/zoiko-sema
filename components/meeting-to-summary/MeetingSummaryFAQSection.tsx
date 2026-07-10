"use client";

import React, { useEffect, useRef, useState } from "react";
import { Plus, X } from "lucide-react";

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
    q: "What is Zoiko Sema Meeting to Summary?",
    a: "It's a Zoiko Sema use case that turns meetings into structured summaries, decisions, action items, follow-ups, and searchable workspace context.",
  },
  {
    q: "How does Zoiko Sema create meeting summaries?",
    a: "Zoiko Sema listens to enabled calls, drafts a recap with key points, decisions, and suggested action items, then routes it for human review before anything is shared.",
  },
  {
    q: "Can action items be assigned from meeting summaries?",
    a: "Yes. Each suggested action can be accepted, edited, reassigned, or rejected, with an owner and due date attached before it's confirmed.",
  },
  {
    q: "Can meeting summaries be governed by policy?",
    a: "Yes. Workspace admins can set visibility, retention, and sensitivity rules, and exclude specific topics or participants from summarization entirely.",
  },
  {
    q: "Can guests receive meeting summaries?",
    a: "Guest access follows workspace sharing rules, so hosts control whether external participants receive a summary and what it includes.",
  },
  {
    q: "Is Meeting to Summary only for large enterprises?",
    a: "No. It's built to scale from individual users to large, governed workspaces, with the same review and control steps at every size.",
  },
];

export default function MeetingSummaryFAQSection() {
  const { ref: headRef, inView: headIn } = useInView(0.2);
  const { ref: listRef, inView: listIn } = useInView(0.05);
  const [openIndex, setOpenIndex] = useState<number>(0);

  return (
    <>
      <style>{`
        @keyframes msfFadeUp {
          from { opacity:0; transform:translateY(28px); }
          to   { opacity:1; transform:translateY(0); }
        }
        .msf-hidden { opacity:0; transform:translateY(28px); }
        .msf-visible { animation: msfFadeUp .6s cubic-bezier(.22,1,.36,1) forwards; }

        .msf-item { opacity:0; transform:translateY(14px); }
        .msf-item.active {
          animation: msfFadeUp .5s cubic-bezier(.22,1,.36,1) forwards;
        }

        .msf-item {
          transition: border-color .2s ease, box-shadow .2s ease;
        }
        .msf-item:hover {
          border-color: #C7C4F5;
        }
        .msf-item.open {
          border-color: #C7C4F5;
          box-shadow: 0 6px 18px rgba(79,70,229,0.08);
        }

        .msf-answer-wrap {
          display: grid;
          grid-template-rows: 0fr;
          transition: grid-template-rows .35s cubic-bezier(.22,1,.36,1);
        }
        .msf-answer-wrap.open {
          grid-template-rows: 1fr;
        }
        .msf-answer-inner {
          overflow: hidden;
        }

        .msf-icon-btn {
          transition: transform .3s cubic-bezier(.22,1,.36,1), background-color .2s ease;
        }
        .msf-icon-btn.open {
          transform: rotate(180deg);
        }

        .msf-question {
          transition: color .2s ease;
        }
        .msf-item:hover .msf-question {
          color: #4F46E5;
        }

        @media (prefers-reduced-motion: reduce) {
          .msf-hidden, .msf-item { opacity:1!important; transform:none!important; animation:none!important; }
          .msf-answer-wrap, .msf-icon-btn { transition:none!important; }
        }
      `}</style>

      <section
        aria-label="Frequently asked questions"
        className="w-full bg-white py-20 md:py-24"
      >
        <div className="mx-auto w-full max-w-3xl px-6 md:px-10">

          {/* ── Heading ── */}
          <div
            ref={headRef}
            className={`mb-12 text-center msf-hidden ${headIn ? "msf-visible" : ""}`}
          >
            <p className="text-[11px] font-semibold uppercase tracking-[0.16em] mb-4" style={{ color: "#4F46E5" }}>
              FAQ
            </p>
            <h2 className="text-[clamp(24px,3.2vw,34px)] font-bold leading-[1.15] tracking-tight text-gray-900">
              Answers for teams and IT
            </h2>
          </div>

          {/* ── Accordion ── */}
          <div ref={listRef} className="flex flex-col gap-3">
            {faqs.map((item, i) => {
              const isOpen = openIndex === i;
              return (
                <div
                  key={i}
                  className={`msf-item ${listIn ? "active" : ""} ${isOpen ? "open" : ""} rounded-2xl border border-gray-200 bg-white px-6 py-5 cursor-pointer`}
                  style={{ animationDelay: `${i * 0.07}s` }}
                  onClick={() => setOpenIndex(isOpen ? -1 : i)}
                >
                  <div className="flex items-center justify-between gap-4">
                    <h3 className="msf-question text-[15px] font-semibold text-gray-900">
                      {item.q}
                    </h3>
                    <span
                      className={`msf-icon-btn ${isOpen ? "open" : ""} flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center`}
                      style={{ backgroundColor: "#EEECFB", color: "#4F46E5" }}
                    >
                      {isOpen ? <X size={14} /> : <Plus size={14} />}
                    </span>
                  </div>

                  <div className={`msf-answer-wrap ${isOpen ? "open" : ""}`}>
                    <div className="msf-answer-inner">
                      <p className="text-[14px] leading-[1.7] text-gray-500 pt-3 max-w-[560px]">
                        {item.a}
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