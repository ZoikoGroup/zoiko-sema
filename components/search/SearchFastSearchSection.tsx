"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";

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

type ResultType = "Meeting" | "Mail" | "Message" | "File";

interface SearchResult {
  id: string;
  title: string;
  type: ResultType;
}

const RESULTS: SearchResult[] = [
  { id: "r1", title: "Invoice approval meeting", type: "Meeting" },
  { id: "r2", title: "Approval follow-up email", type: "Mail" },
  { id: "r3", title: "Finance channel decision", type: "Message" },
  { id: "r4", title: "Invoice file attachment", type: "File" },
];

const TYPE_STYLES: Record<ResultType, { pill: string; dot: string }> = {
  Meeting: { pill: "bg-blue-50 text-blue-700", dot: "bg-blue-500" },
  Mail: { pill: "bg-indigo-50 text-indigo-700", dot: "bg-indigo-500" },
  Message: { pill: "bg-purple-50 text-purple-700", dot: "bg-purple-500" },
  File: { pill: "bg-orange-50 text-orange-700", dot: "bg-orange-500" },
};

const LEGEND: { label: string; dot: string }[] = [
  { label: "Meeting", dot: "bg-blue-500" },
  { label: "Mail thread", dot: "bg-indigo-500" },
  { label: "Decision", dot: "bg-emerald-500" },
  { label: "File", dot: "bg-orange-500" },
];

export default function SearchFastSearchSection() {
  const { ref: headRef, inView: headIn } = useInView(0.2);
  const { ref: panelsRef, inView: panelsIn } = useInView(0.1);

  const [query, setQuery] = useState("invoice approval");
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [openedTitle, setOpenedTitle] = useState<string | null>(null);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return RESULTS;
    return RESULTS.filter((r) => r.title.toLowerCase().includes(q));
  }, [query]);

  useEffect(() => {
    setOpenedTitle(null);
    if (filtered.length && !filtered.some((r) => r.id === selectedId)) {
      setSelectedId(filtered[0].id);
    }
    if (!filtered.length) {
      setSelectedId(null);
    }
  }, [filtered, selectedId]);

  const topResult = filtered[0] ?? null;

  return (
    <>
      <style>{`
        @keyframes fssFadeUp {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .fss-hidden  { opacity: 0; transform: translateY(28px); }
        .fss-visible { animation: fssFadeUp .65s cubic-bezier(.22,1,.36,1) forwards; }

        .fss-panel { opacity: 0; transform: translateY(24px); }
        .fss-panels.fss-visible .fss-panel {
          animation: fssFadeUp .6s cubic-bezier(.22,1,.36,1) forwards;
        }

        .fss-row {
          transition: background-color .2s ease, border-color .2s ease, transform .2s ease;
        }
        .fss-row:hover {
          transform: translateX(2px);
        }
        .fss-legend-btn {
          transition: background-color .2s ease, opacity .2s ease, transform .2s ease;
        }
        .fss-legend-btn:hover {
          transform: translateX(2px);
        }
        .fss-open-btn {
          transition: transform .2s ease, box-shadow .2s ease, opacity .2s ease;
        }
        .fss-open-btn:hover:not(:disabled) {
          transform: translateY(-2px);
          box-shadow: 0 12px 24px rgba(75, 95, 255, 0.35);
        }
        .fss-open-btn:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }

        @media (prefers-reduced-motion: reduce) {
          .fss-hidden, .fss-visible, .fss-panel { opacity: 1 !important; transform: none !important; animation: none !important; }
          .fss-row:hover, .fss-legend-btn:hover, .fss-open-btn:hover { transform: none !important; }
        }
      `}</style>

      <section
        aria-label="Fast search on desktop and mobile"
        className="w-full bg-[#F4F6FA] py-16 sm:py-20 md:py-24"
      >
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 md:px-10 lg:px-16">
          {/* Heading */}
          <div
            ref={headRef}
            className={`fss-hidden ${headIn ? "fss-visible" : ""} text-center mb-10 sm:mb-14`}
          >
            <h2 className="text-[clamp(24px,4.2vw,36px)] font-bold leading-[1.15] tracking-tight text-gray-900 mb-3">
              Fast search on desktop and mobile.
            </h2>
            <p className="text-[14px] sm:text-[15px] text-gray-500 max-w-[560px] mx-auto">
              The search experience must feel instant, readable, and action-ready across devices.
            </p>
          </div>

          {/* Panels */}
          <div
            ref={panelsRef}
            className={`fss-panels ${panelsIn ? "fss-visible" : ""} flex flex-col lg:flex-row items-stretch justify-center gap-6`}
          >
            {/* Desktop-style panel */}
            <div className="fss-panel w-full lg:w-[58%]" style={{ animationDelay: "0.05s" }}>
              <div className="h-full bg-white rounded-3xl shadow-[0_20px_50px_rgba(15,15,42,0.08)] p-5 sm:p-6">
                <label className="flex items-center gap-2 bg-[#F1F1FA] rounded-xl px-4 py-3 mb-4">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400 shrink-0">
                    <circle cx="11" cy="11" r="8" />
                    <line x1="21" y1="21" x2="16.65" y2="16.65" />
                  </svg>
                  <input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder='Search "invoice approval"'
                    aria-label="Search results"
                    className="w-full bg-transparent text-[14px] text-gray-800 placeholder:text-gray-500 outline-none"
                  />
                </label>

                <div className="flex flex-col gap-2.5">
                  {filtered.length === 0 && (
                    <div className="text-[13px] text-gray-400 px-4 py-6 text-center">
                      No results match &quot;{query}&quot;.
                    </div>
                  )}
                  {filtered.map((r) => {
                    const style = TYPE_STYLES[r.type];
                    const isSelected = r.id === selectedId;
                    return (
                      <button
                        key={r.id}
                        type="button"
                        onClick={() => {
                          setSelectedId(r.id);
                          setOpenedTitle(null);
                        }}
                        className={`fss-row flex items-center justify-between gap-3 rounded-xl border px-4 py-3.5 text-left ${
                          isSelected
                            ? "border-brand bg-[#F6F7FF]"
                            : "border-gray-100 bg-white hover:bg-gray-50"
                        }`}
                      >
                        <span className="text-[13.5px] font-semibold text-gray-900">
                          {r.title}
                        </span>
                        <span
                          className={`shrink-0 text-[11px] font-semibold px-2.5 py-1 rounded-full ${style.pill}`}
                        >
                          {r.type}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Mobile-style dark panel */}
            <div className="fss-panel w-full lg:w-[32%]" style={{ animationDelay: "0.15s" }}>
              <div className="h-full bg-[#0F0F2A] rounded-[2rem] shadow-[0_20px_50px_rgba(15,15,42,0.25)] p-5 sm:p-6 flex flex-col">
                <div className="flex items-center gap-2 bg-white/10 rounded-xl px-4 py-3 mb-5">
                  <span className="w-2 h-2 rounded-full bg-white/80 shrink-0" />
                  <span className="text-[13px] text-white/90 truncate">
                    {query || "Search"}
                  </span>
                </div>

                <div className="flex flex-col gap-1 mb-5">
                  {LEGEND.map((item) => {
                    const isActiveType = filtered.some(
                      (r) =>
                        (item.label === "Meeting" && r.type === "Meeting") ||
                        (item.label === "Mail thread" && r.type === "Mail") ||
                        (item.label === "Decision" && r.type === "Message") ||
                        (item.label === "File" && r.type === "File")
                    );
                    return (
                      <div
                        key={item.label}
                        className={`fss-legend-btn flex items-center justify-between px-3 py-2.5 rounded-lg ${
                          isActiveType ? "bg-white/5" : ""
                        }`}
                      >
                        <span
                          className={`text-[13.5px] font-semibold ${
                            isActiveType ? "text-white" : "text-white/40"
                          }`}
                        >
                          {item.label}
                        </span>
                        <span
                          className={`w-2 h-2 rounded-full ${item.dot} ${
                            isActiveType ? "opacity-100" : "opacity-30"
                          }`}
                        />
                      </div>
                    );
                  })}
                </div>

                <button
                  type="button"
                  disabled={!topResult}
                  onClick={() => topResult && setOpenedTitle(topResult.title)}
                  className="fss-open-btn mt-auto w-full inline-flex items-center justify-center rounded-full bg-brand text-white text-[14px] font-semibold py-3"
                >
                  Open result
                </button>
                {openedTitle && (
                  <p className="text-[11.5px] text-white/50 text-center mt-3">
                    Opening &quot;{openedTitle}&quot;&hellip;
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}