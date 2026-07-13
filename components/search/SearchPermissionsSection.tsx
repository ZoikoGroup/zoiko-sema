"use client";

import React, { useEffect, useRef, useState } from "react";

/** Same scroll-reveal hook used across the other sections/pages. */
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

const BRAND = "#3457E8";

const initialFilters = [
  { label: "Messages", checked: true },
  { label: "Meetings", checked: true },
  { label: "Mail", checked: true },
  { label: "Files", checked: false },
  { label: "Calendar", checked: false },
  { label: "Notes", checked: false },
  { label: "Decisions", checked: true },
  { label: "Action items", checked: false },
];

const STATUS_STYLES: Record<"visible" | "hidden" | "role", { bg: string; color: string }> = {
  visible: { bg: "#DCFCE7", color: "#16A34A" },
  hidden: { bg: "#FEE2E2", color: "#DC2626" },
  role: { bg: "#FEF3C7", color: "#D97706" },
};

const results = [
  { title: "Board prep summary", status: "Visible to Executive Space", type: "visible" as const },
  { title: "Client call transcript", status: "Visible to Project Delta", type: "visible" as const },
  { title: "HR confidential note", status: "Hidden by policy", type: "hidden" as const },
  { title: "ZoikoTime activity context", status: "Manager role required", type: "role" as const },
];

export default function SearchPermissionsSection() {
  const { ref: headRef, inView: headIn } = useInView(0.3);
  const { ref: filtersRef, inView: filtersIn } = useInView(0.15);
  const { ref: resultsRef, inView: resultsIn } = useInView(0.1);

  const [filters, setFilters] = useState(initialFilters);

  const toggleFilter = (index: number) => {
    setFilters((prev) =>
      prev.map((f, i) => (i === index ? { ...f, checked: !f.checked } : f))
    );
  };

  return (
    <>
      <style>{`
        @keyframes spmFadeUp {
          from { opacity: 0; transform: translateY(26px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .spm-hidden  { opacity: 0; transform: translateY(26px); }
        .spm-visible { animation: spmFadeUp .6s cubic-bezier(.22,1,.36,1) forwards; }

        .spm-panel-hidden  { opacity: 0; transform: translateY(24px); }
        .spm-panel-visible { animation: spmFadeUp .6s cubic-bezier(.22,1,.36,1) forwards; }

        .spm-row { opacity: 0; transform: translateY(16px); }
        .spm-row.spm-row-in {
          animation: spmFadeUp .5s cubic-bezier(.22,1,.36,1) forwards;
        }

        .spm-row {
          transition: transform .2s ease, box-shadow .2s ease;
        }
        .spm-row:hover {
          transform: translateX(3px);
          box-shadow: 0 10px 22px -16px rgba(15,23,42,0.18);
        }

        .spm-checkbox {
          transition: background .2s ease, border-color .2s ease, transform .15s ease;
          cursor: pointer;
        }
        .spm-checkbox:active { transform: scale(0.9); }
        .spm-filter-label:hover { color: #374151; }

        @media (prefers-reduced-motion: reduce) {
          .spm-hidden, .spm-panel-hidden, .spm-row { opacity: 1 !important; transform: none !important; }
          .spm-visible, .spm-panel-visible, .spm-row-in { animation: none !important; }
        }
      `}</style>

      <section
        aria-label="Search that respects permissions and policy"
        className="w-full py-20 md:py-24"
        style={{ background: "#F3F2FD" }}
      >
        <div className="mx-auto w-full max-w-6xl px-6 md:px-10">

          {/* Heading */}
          <div
            ref={headRef}
            className={`spm-hidden ${headIn ? "spm-visible" : ""} text-center mb-12`}
          >
            <h2 className="text-[clamp(24px,3.4vw,32px)] font-bold tracking-tight text-gray-900 mb-4">
              Search that respects permissions and policy.
            </h2>
            <p className="mx-auto max-w-[640px] text-[14px] leading-relaxed text-gray-500">
              Filters help users narrow results; governance ensures they
              only see what they are allowed to see.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[220px_1fr] gap-6">

            {/* LEFT — filters panel */}
            <div
              ref={filtersRef}
              className={`spm-panel-hidden ${filtersIn ? "spm-panel-visible" : ""} rounded-2xl bg-white p-5 h-fit`}
            >
              <p className="text-[13.5px] font-bold text-gray-900 mb-4">Filters</p>
              <div className="flex flex-col gap-3">
                {filters.map((filter, i) => (
                  <label
                    key={filter.label}
                    className="flex items-center gap-2.5 cursor-pointer"
                    onClick={() => toggleFilter(i)}
                  >
                    <span
                      className="spm-checkbox w-4 h-4 rounded flex items-center justify-center border-2 flex-shrink-0"
                      style={{
                        background: filter.checked ? BRAND : "transparent",
                        borderColor: filter.checked ? BRAND : "#D1D5DB",
                      }}
                    >
                      {filter.checked && (
                        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      )}
                    </span>
                    <span className="spm-filter-label text-[13px] text-gray-600 select-none">
                      {filter.label}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            {/* RIGHT — result rows */}
            <div>
              <div ref={resultsRef} className="flex flex-col gap-3 mb-4">
                {results.map((r, i) => {
                  const style = STATUS_STYLES[r.type];
                  return (
                    <div
                      key={r.title}
                      className={`spm-row ${resultsIn ? "spm-row-in" : ""} flex items-center justify-between gap-4 rounded-xl bg-white px-5 py-4`}
                      style={{ animationDelay: `${i * 0.1}s` }}
                    >
                      <p className="text-[13.5px] font-bold text-gray-900">{r.title}</p>
                      <span
                        className="flex-shrink-0 rounded-full px-3 py-1.5 text-[11.5px] font-semibold"
                        style={{ background: style.bg, color: style.color }}
                      >
                        {r.status}
                      </span>
                    </div>
                  );
                })}
              </div>

              <p className="flex items-center gap-2 text-[12.5px] text-gray-500">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#9CA3AF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0">
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                  <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                </svg>
                Permission checks happen server-side before any result or preview is returned.
              </p>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}