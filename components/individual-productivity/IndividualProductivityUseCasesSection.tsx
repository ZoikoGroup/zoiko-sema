"use client";

import React, { useEffect, useRef, useState } from "react";

/** Same scroll-reveal hook used across every section on this page. */
function useInView(threshold = 0.1) {
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

const BRAND = "#3457E8";

/* ---- small preview panels, one per card, mirroring the screenshot ---- */

function BriefPreview() {
  return (
    <div className="w-full h-full rounded-xl p-3 flex flex-col justify-center gap-2" style={{ background: "#E9ECFB" }}>
      <div className="flex items-center gap-2">
        <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: "#6C63E0" }} />
        <span className="h-1.5 rounded-full w-[70%]" style={{ background: "#C9CDEE" }} />
      </div>
      <span className="h-1.5 rounded-full w-[85%]" style={{ background: "#C9CDEE" }} />
      <span className="h-1.5 rounded-full w-[55%]" style={{ background: "#C9CDEE" }} />
    </div>
  );
}

function MeetingPreview() {
  return (
    <div className="w-full h-full rounded-xl p-3 flex flex-col justify-center gap-2.5" style={{ background: "#E9ECFB" }}>
      <div className="flex items-center gap-2">
        <span className="w-2.5 h-2.5 rounded-[3px] border-2 flex-shrink-0" style={{ borderColor: "#9FA6DE" }} />
        <span className="h-1.5 rounded-full w-[75%]" style={{ background: "#C9CDEE" }} />
      </div>
      <div className="flex items-center gap-2">
        <span className="w-2.5 h-2.5 rounded-[3px] border-2 flex-shrink-0" style={{ borderColor: "#9FA6DE" }} />
        <span className="h-1.5 rounded-full w-[60%]" style={{ background: "#C9CDEE" }} />
      </div>
    </div>
  );
}

function ClientPreview() {
  return (
    <div className="w-full h-full rounded-xl p-3 flex flex-col justify-center gap-2.5" style={{ background: "#E9ECFB" }}>
      <div className="flex items-center gap-2">
        <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: "#F59E0B" }} />
        <span className="h-1.5 rounded-full w-[70%]" style={{ background: "#C9CDEE" }} />
      </div>
      <div className="flex items-center gap-2">
        <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: "#6C63E0" }} />
        <span className="h-1.5 rounded-full w-[55%]" style={{ background: "#C9CDEE" }} />
      </div>
    </div>
  );
}

function FocusPreview() {
  return (
    <div className="w-full h-full rounded-xl p-3 flex flex-col justify-center gap-2.5" style={{ background: "#E9ECFB" }}>
      <div className="inline-flex items-center gap-1.5 bg-white rounded-lg px-2.5 py-1.5 self-start shadow-sm">
        <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: "#22C55E" }} />
        <span className="text-[11px] font-medium text-gray-700 leading-tight">Focus<br/>mode</span>
      </div>
      <div className="flex items-center gap-2">
        <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: "#22C55E" }} />
        <span className="h-1.5 rounded-full w-[60%]" style={{ background: "#C9CDEE" }} />
      </div>
    </div>
  );
}

const useCases = [
  {
    tag: "Founder / Executive",
    title: "Executive daily brief",
    description:
      "Keep decisions, priorities, follow-ups, and critical updates visible without tool overload. The daily brief becomes routine.",
    preview: <BriefPreview />,
  },
  {
    tag: "Manager / Team lead",
    title: "Meeting follow-through",
    description:
      "Prepare for meetings, capture actions, and follow up with owners after discussions. Meetings become actionable work history.",
    preview: <MeetingPreview />,
  },
  {
    tag: "Sales / Client work",
    title: "Client context, organized",
    description:
      "Track client notes, files, replies, next steps, and scheduled follow-ups in context. Client context stays organized.",
    preview: <ClientPreview />,
  },
  {
    tag: "Remote / Hybrid focus",
    title: "Protected focus blocks",
    description:
      "Protect focus blocks while staying aware of important messages and meetings. The daily focus view drives repeat use.",
    preview: <FocusPreview />,
  },
];

export default function IndividualProductivityUseCasesSection() {
  const { ref: headRef, inView: headIn } = useInView(0.3);
  const { ref: gridRef, inView: gridIn } = useInView(0.08);

  return (
    <>
      <style>{`
        @keyframes ipuFadeUp {
          from { opacity: 0; transform: translateY(32px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .ipu-hidden  { opacity: 0; transform: translateY(32px); }
        .ipu-visible { animation: ipuFadeUp .6s cubic-bezier(.22,1,.36,1) forwards; }

        .ipu-card { opacity: 0; transform: translateY(28px); }
        .ipu-card.ipu-card-in {
          animation: ipuFadeUp .55s cubic-bezier(.22,1,.36,1) forwards;
        }

        .ipu-card {
          transition: transform .3s ease, box-shadow .3s ease, border-color .3s ease;
        }
        .ipu-card:hover {
          transform: translateY(-4px);
          border-color: #c7cff9;
          box-shadow: 0 16px 32px -20px rgba(52,87,232,0.28);
        }

        .ipu-preview { transition: transform .3s ease; }
        .ipu-card:hover .ipu-preview { transform: scale(1.03); }

        @media (prefers-reduced-motion: reduce) {
          .ipu-hidden, .ipu-card { opacity: 1 !important; transform: none !important; }
          .ipu-visible, .ipu-card-in { animation: none !important; }
        }
      `}</style>

      <section
        aria-label="Productivity that fits your role"
        className="w-full bg-white py-20 md:py-24"
      >
        <div className="mx-auto w-full max-w-7xl px-6 md:px-10 lg:px-16">

          {/* Heading */}
          <div
            ref={headRef}
            className={`ipu-hidden ${headIn ? "ipu-visible" : ""} text-center mb-12`}
          >
            <p
              className="text-[11px] font-semibold uppercase tracking-[0.14em] mb-3"
              style={{ color: BRAND }}
            >
              Use Cases
            </p>
            <h2 className="text-[clamp(24px,3.2vw,32px)] font-bold tracking-tight text-gray-900">
              Productivity that fits your role
            </h2>
          </div>

          {/* Cards */}
          <div
            ref={gridRef}
            className="grid grid-cols-1 md:grid-cols-2 gap-5"
          >
            {useCases.map((uc, i) => (
              <div
                key={uc.title}
                className={`ipu-card ${gridIn ? "ipu-card-in" : ""} rounded-2xl border border-gray-200 bg-white p-6`}
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className="grid grid-cols-[1fr_auto] gap-5 items-center">
                  <div>
                    <p
                      className="text-[11px] font-semibold uppercase tracking-[0.1em] mb-2"
                      style={{ color: BRAND }}
                    >
                      {uc.tag}
                    </p>
                    <h3 className="text-[16.5px] font-bold text-gray-900 mb-2">
                      {uc.title}
                    </h3>
                    <p className="text-[13px] leading-relaxed text-gray-500">
                      {uc.description}
                    </p>
                  </div>

                  <div className="ipu-preview w-[132px] h-[110px] flex-shrink-0">
                    {uc.preview}
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
}