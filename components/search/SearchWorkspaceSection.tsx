"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";

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

type Category = {
  key: string;
  label: string;
  color: string;
  items: string[];
};

// Larger dataset than the default 3-per-card view — typing 2+ letters
// searches across all of these, not just the ones shown by default.
const categories: Category[] = [
  {
    key: "messages",
    label: "Messages",
    color: "#16A34A",
    items: [
      "Risk raised in #client-onboarding",
      "@Nadine assigned follow-up",
      "Thread has 6 replies",
      "Client onboarding blocked on legal review",
      "Bot flagged risk keyword in #support",
      "Weekly sync thread mentions blocker",
      "Priya asked about onboarding timeline",
      "Follow-up reminder sent in #sales",
    ],
  },
  {
    key: "meetings",
    label: "Meetings",
    color: BRAND,
    items: [
      "Client onboarding sync",
      "Transcript mentions blocker",
      "Summary available",
      "Kickoff call notes shared",
      "Risk review meeting scheduled",
      "Follow-up meeting requested",
      "Weekly onboarding standup",
      "Client escalation call recap",
    ],
  },
  {
    key: "mail",
    label: "Mail",
    color: "#4F46E5",
    items: [
      "Subject: onboarding status",
      "2 attachments found",
      "Reply due tomorrow",
      "Client raised risk concern via email",
      "Legal team CC'd on thread",
      "Contract attachment pending review",
      "Follow-up email drafted, needs approval",
      "Onboarding welcome sequence sent",
    ],
  },
  {
    key: "files",
    label: "Files",
    color: "#D97706",
    items: [
      "Implementation checklist",
      "Risk register v2",
      "Updated by Operations",
      "Onboarding runbook.pdf",
      "Client contract - signed.pdf",
      "Risk assessment spreadsheet",
      "Kickoff deck.pptx",
      "Follow-up action items.xlsx",
    ],
  },
];

const DEFAULT_COUNT = 3;
const SEARCH_MIN_CHARS = 2;
const SEARCH_MAX_RESULTS = 4;

export default function SearchWorkspaceSection() {
  const { ref: headRef, inView: headIn } = useInView(0.3);
  const { ref: searchRef, inView: searchIn } = useInView(0.3);
  const { ref: gridRef, inView: gridIn } = useInView(0.1);
  const { ref: linkRef, inView: linkIn } = useInView(0.3);

  const [query, setQuery] = useState("");
  const isSearching = query.trim().length >= SEARCH_MIN_CHARS;

  const results = useMemo(() => {
    if (!isSearching) {
      return categories.map((cat) => ({
        ...cat,
        matches: cat.items.slice(0, DEFAULT_COUNT),
      }));
    }
    const q = query.trim().toLowerCase();
    return categories.map((cat) => ({
      ...cat,
      matches: cat.items
        .filter((item) => item.toLowerCase().includes(q))
        .slice(0, SEARCH_MAX_RESULTS),
    }));
  }, [query, isSearching]);

  return (
    <>
      <style>{`
        @keyframes swsFadeUp {
          from { opacity: 0; transform: translateY(26px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .sws-hidden  { opacity: 0; transform: translateY(26px); }
        .sws-visible { animation: swsFadeUp .6s cubic-bezier(.22,1,.36,1) forwards; }

        .sws-card { opacity: 0; transform: translateY(20px); }
        .sws-card.sws-card-in {
          animation: swsFadeUp .5s cubic-bezier(.22,1,.36,1) forwards;
        }

        .sws-card {
          transition: transform .25s ease, box-shadow .25s ease, border-color .25s ease;
        }
        .sws-card:hover {
          transform: translateY(-3px);
          border-color: #dbe1fb;
          box-shadow: 0 14px 28px -20px rgba(15,23,42,0.2);
        }

        @keyframes swsListFadeIn {
          from { opacity: 0; transform: translateY(4px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .sws-list-anim { animation: swsListFadeIn .28s ease forwards; }

        .sws-search-input {
          transition: border-color .2s ease, box-shadow .2s ease;
        }
        .sws-search-input:focus-within {
          border-color: ${BRAND};
          box-shadow: 0 0 0 3px rgba(52,87,232,0.12);
        }

        .sws-link { transition: gap .2s ease; }
        .sws-link .sws-arrow { transition: transform .2s ease; display: inline-block; }
        .sws-link:hover .sws-arrow { transform: translateX(3px); }

        @media (prefers-reduced-motion: reduce) {
          .sws-hidden, .sws-card { opacity: 1 !important; transform: none !important; }
          .sws-visible, .sws-card-in { animation: none !important; }
          .sws-list-anim { animation: none !important; }
        }
      `}</style>

      <section aria-label="Search every work surface" className="w-full bg-white py-20 md:py-24">
        <div className="mx-auto w-full max-w-6xl px-6 md:px-10">

          {/* Heading */}
          <div
            ref={headRef}
            className={`sws-hidden ${headIn ? "sws-visible" : ""} text-center mb-10`}
          >
            <h2 className="text-[clamp(24px,3.4vw,32px)] font-bold tracking-tight text-gray-900 mb-4">
              Search every work surface, not just chat.
            </h2>
            <p className="mx-auto max-w-[600px] text-[14px] leading-relaxed text-gray-500">
              Messages, meetings, mail, files, calendar events, notes, and
              decisions appear in one permission-scoped result set.
            </p>
          </div>

          {/* Search box */}
          <div
            ref={searchRef}
            className={`sws-hidden ${searchIn ? "sws-visible" : ""} max-w-[560px] mx-auto mb-10`}
            style={{ animationDelay: "0.05s" }}
          >
            <div className="sws-search-input flex items-center gap-3 rounded-xl border border-gray-200 px-5 py-3.5">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#9CA3AF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0">
                <circle cx="11" cy="11" r="7" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder='Search "client onboarding risk"'
                className="w-full text-[13.5px] text-gray-800 placeholder:text-gray-400 outline-none bg-transparent"
              />
            </div>
          </div>

          {/* Category cards */}
          <div ref={gridRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
            {results.map((cat, i) => (
              <div
                key={cat.key}
                className={`sws-card ${gridIn ? "sws-card-in" : ""} rounded-2xl border border-gray-200 px-5 py-5`}
                style={{ animationDelay: `${i * 0.08}s` }}
              >
                <p
                  className="text-[11px] font-bold uppercase tracking-[0.1em] mb-3"
                  style={{ color: cat.color }}
                >
                  {cat.label}
                </p>

                <ul key={query} className="sws-list-anim flex flex-col gap-2 min-h-[64px]">
                  {cat.matches.length > 0 ? (
                    cat.matches.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-[12.5px] text-gray-600 leading-snug">
                        <span
                          className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0"
                          style={{ background: cat.color }}
                        />
                        <span>{item}</span>
                      </li>
                    ))
                  ) : (
                    <li className="text-[12px] text-gray-400 italic">No matches</li>
                  )}
                </ul>
              </div>
            ))}
          </div>

          {/* Explore link */}
          <div
            ref={linkRef}
            className={`sws-hidden ${linkIn ? "sws-visible" : ""} text-center`}
          >
            <a
              href="#"
              className="sws-link inline-flex items-center gap-1.5 text-[13.5px] font-semibold"
              style={{ color: BRAND }}
            >
              Explore workspace search
              <span className="sws-arrow">→</span>
            </a>
          </div>

        </div>
      </section>
    </>
  );
}