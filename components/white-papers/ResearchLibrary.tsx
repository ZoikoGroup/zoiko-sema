"use client";

import { useEffect, useMemo, useRef, useState } from "react";

type Paper = {
  id: string;
  type: string;
  title: string;
  description: string;
  tags: string[];
  status: string;
  badge?: string;
  badgeColor?: "blue" | "teal" | "gold";
  accent: string;
  sortDate: number;
};

const papers: Paper[] = [
  {
    id: "ai-meeting-summaries",
    type: "EXECUTIVE BRIEF",
    title: "Governing AI meeting summaries in the enterprise",
    description:
      "A decision framework for accuracy, human review, disclosure, and retention when AI drafts the record of a conversation.",
    tags: ["AI governance", "Executive", "v2.1", "14 min"],
    status: "Research-backed",
    badge: "UPDATED",
    badgeColor: "blue",
    accent: "#6C4FE0",
    sortDate: 7,
  },
  {
    id: "accountable-communication",
    type: "BUYER GUIDE",
    title: "A buyer's framework for accountable communication platforms",
    description:
      "What enterprise buyers should evaluate: governance, evidence, security, deployment, and operational follow-through.",
    tags: ["Accountable communication", "Procurement", "v1.0", "18 min"],
    status: "Expert perspective",
    badge: "NEW",
    badgeColor: "teal",
    accent: "#3457E8",
    sortDate: 6,
  },
  {
    id: "security-architecture",
    type: "TECHNICAL REPORT",
    title: "Security architecture for governed collaboration",
    description:
      "Identity, controls, reliability, and integration boundaries for IT and security teams evaluating deployment.",
    tags: ["Security", "IT / Security", "v1.3", "22 min"],
    status: "Product analysis",
    accent: "#B7791F",
    sortDate: 5,
  },
  {
    id: "deployment-patterns",
    type: "RESEARCH PAPER",
    title: "Enterprise deployment patterns for workforce structure",
    description:
      "Adoption, meeting-to-work accountability, and change-management patterns observed across enterprise rollouts.",
    tags: ["Deployment", "Operations", "v1.2", "20 min"],
    status: "Research-backed",
    accent: "#2DD4BF",
    sortDate: 4,
  },
  {
    id: "operations-model",
    type: "EXECUTIVE BRIEF",
    title: "From meeting to accountable work: an operations model",
    description:
      "How operations leaders convert conversation into tracked, owned, and reviewable follow-through without fabricated ROI.",
    tags: ["Operations", "v2.0", "12 min"],
    status: "Expert perspective",
    badge: "UPDATED",
    badgeColor: "blue",
    accent: "#6C4FE0",
    sortDate: 3,
  },
  {
    id: "messaging-governance",
    type: "BUYER GUIDE",
    title: "Evaluating messaging governance and retention",
    description:
      "Jurisdiction, retention, and audit considerations for compliance and legal stakeholders. Superseded by the 2026 edition.",
    tags: ["Accountable communication", "Compliance", "v1.0", "16 min"],
    status: "Product analysis",
    badge: "SUPERSEDED",
    badgeColor: "gold",
    accent: "#3457E8",
    sortDate: 2,
  },
  {
    id: "accessibility-practices",
    type: "BENCHMARK",
    title: "Benchmarking communication accessibility practices",
    description:
      "A demonstration-only comparison of accessibility patterns — clearly labeled, not presented as customer or market evidence.",
    tags: ["Accessibility", "IT / Design", "v1.0", "10 min"],
    status: "Demonstration-only",
    accent: "#A98CF0",
    sortDate: 1,
  },
];

const filters = [
  "All",
  "Accountable communication",
  "AI governance",
  "Security",
  "Deployment",
  "Operations",
  "Accessibility",
];

const sortOptions = [
  "Recommended",
  "Newest",
  "Recently updated",
  "Alphabetical",
];

export default function ResearchLibrary() {
  const [search, setSearch] = useState("");
  const [activeFilter, setActiveFilter] = useState("All");
  const [activeSort, setActiveSort] = useState("Recommended");

  const filteredPapers = useMemo(() => {
    let result = papers.filter((paper) => {
      const searchText = search.toLowerCase();

      const matchesSearch =
        paper.title.toLowerCase().includes(searchText) ||
        paper.description.toLowerCase().includes(searchText) ||
        paper.type.toLowerCase().includes(searchText) ||
        paper.tags.some((tag) =>
          tag.toLowerCase().includes(searchText)
        );

      const matchesFilter =
        activeFilter === "All" ||
        paper.tags.includes(activeFilter);

      return matchesSearch && matchesFilter;
    });

    if (
      activeSort === "Newest" ||
      activeSort === "Recently updated"
    ) {
      result = [...result].sort(
        (a, b) => b.sortDate - a.sortDate
      );
    }

    if (activeSort === "Alphabetical") {
      result = [...result].sort((a, b) =>
        a.title.localeCompare(b.title)
      );
    }

    return result;
  }, [search, activeFilter, activeSort]);

  return (
    <section id="library" className="relative overflow-hidden bg-white px-5 py-20 sm:px-8 lg:px-12 xl:px-32 scroll-mt-24">

      {/* Background glow */}
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-blue-100/30 blur-3xl" />

      <div className="relative mx-auto max-w-[1280px]">

        {/* Header */}
        <Reveal delay={0}>
          <div className="flex items-end justify-between gap-8">

            <div>
              <p className="mb-5 font-mono text-xs font-bold tracking-wide text-[#3457E8]">
                RESEARCH LIBRARY
              </p>

              <h1 className="text-4xl font-extrabold tracking-tight text-[#14162B] sm:text-5xl">
                Browse the research.
              </h1>
            </div>

            <p className="hidden text-sm font-semibold text-[#9A9BB8] sm:block">
              {filteredPapers.length} papers
            </p>

          </div>
        </Reveal>

        {/* Search and sort */}
        <Reveal delay={100}>
          <div className="mt-12 flex flex-col gap-4 lg:flex-row">

            {/* Search */}
            <div className="relative flex-1">

              <svg
                className="absolute left-5 top-1/2 h-5 w-5 -translate-y-1/2 text-[#9A9BB8]"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <circle cx="11" cy="11" r="7" />
                <path d="m20 20-4-4" />
              </svg>

              <input
                type="text"
                value={search}
                onChange={(event) =>
                  setSearch(event.target.value)
                }
                placeholder="Search titles, summaries, topics, authors…"
                className="h-12 w-full rounded-xl border border-[#E2DCF2] bg-[#FAFAFD] pl-12 pr-5 text-sm text-[#14162B] outline-none transition-all placeholder:text-[#9A9BB8] focus:border-[#3457E8] focus:ring-4 focus:ring-[#3457E8]/10"
              />

            </div>

            {/* Sort */}
            <div className="flex min-h-12 flex-wrap items-center gap-1 rounded-xl border border-[#E2DCF2] bg-white p-1.5">

              <span className="px-3 text-xs font-semibold text-[#9A9BB8]">
                Sort
              </span>

              {sortOptions.map((option) => (
                <button
                  key={option}
                  type="button"
                  onClick={() =>
                    setActiveSort(option)
                  }
                  className={`rounded-lg px-3 py-2 text-xs font-semibold transition-all duration-300 ${
                    activeSort === option
                      ? "bg-[#3457E8] text-white shadow-md shadow-[#3457E8]/20"
                      : "text-[#4A5D75] hover:bg-[#F6F5FB] hover:text-[#3457E8]"
                  }`}
                >
                  {option}
                </button>
              ))}

            </div>

          </div>
        </Reveal>

        {/* Category filters */}
        <Reveal delay={200}>
          <div className="mt-5 flex gap-3 overflow-x-auto pb-2">

            {filters.map((filter) => (
              <button
                key={filter}
                type="button"
                onClick={() =>
                  setActiveFilter(filter)
                }
                className={`shrink-0 rounded-full border px-4 py-2.5 text-xs font-semibold transition-all duration-300 ${
                  activeFilter === filter
                    ? "border-[#14162B] bg-[#14162B] text-white shadow-lg shadow-[#14162B]/10"
                    : "border-[#E8E5F2] bg-[#F6F5FB] text-[#4A5D75] hover:-translate-y-0.5 hover:border-[#3457E8] hover:bg-white hover:text-[#3457E8]"
                }`}
              >
                {filter}
              </button>
            ))}

          </div>
        </Reveal>

        {/* Research cards */}
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">

          {filteredPapers.map((paper, index) => (
            <Reveal
              key={paper.id}
              delay={index * 80}
            >
              <ResearchCard paper={paper} />
            </Reveal>
          ))}

        </div>

        {/* Empty state */}
        {filteredPapers.length === 0 && (
          <div className="py-24 text-center">

            <p className="text-lg font-semibold text-[#14162B]">
              No research found.
            </p>

            <p className="mt-2 text-sm text-[#9A9BB8]">
              Try another search term or category.
            </p>

          </div>
        )}

      </div>
    </section>
  );
}

/* Research Card */
function ResearchCard({
  paper,
}: {
  paper: Paper;
}) {
  return (
    <article className="group flex min-h-[359px] flex-col rounded-2xl border border-[#E8E5F2] bg-white p-7 transition-all duration-500 hover:-translate-y-2 hover:border-[#3457E8]/30 hover:shadow-[0_20px_50px_rgba(20,22,43,0.10)]">

      {/* Card header */}
      <div className="flex items-start justify-between gap-4">

        <p
          className="font-mono text-[10px] font-bold tracking-[1px]"
          style={{
            color: paper.accent,
          }}
        >
          {paper.type}
        </p>

        {paper.badge && (
          <span
            className={`rounded-md px-2 py-1 text-[10px] font-bold tracking-wide ${
              paper.badgeColor === "blue"
                ? "bg-[#3457E8]/10 text-[#3457E8]"
                : paper.badgeColor === "teal"
                  ? "bg-[#2DD4BF]/15 text-[#139482]"
                  : "bg-[#B7791F]/15 text-[#9B6518]"
            }`}
          >
            {paper.badge}
          </span>
        )}

      </div>

      {/* Title */}
      <h2 className="mt-7 min-h-[52px] text-lg font-extrabold leading-[1.25] tracking-tight text-[#14162B] transition-colors duration-300 group-hover:text-[#3457E8]">
        {paper.title}
      </h2>

      {/* Description */}
      <p className="mt-4 min-h-[78px] text-[13px] leading-[1.55] text-[#4A5D75]">
        {paper.description}
      </p>

      {/* Tags */}
      <div className="mt-5 flex min-h-[48px] flex-wrap content-start gap-2">

        {paper.tags.map((tag, index) => (
          <span
            key={`${paper.id}-${tag}-${index}`}
            className="rounded-md bg-[#F6F5FB] px-2.5 py-1.5 text-[11px] font-semibold text-[#64668C] transition-all duration-300 group-hover:bg-[#F1F0F8]"
          >
            {tag}
          </span>
        ))}

      </div>

      {/* Status */}
      <div className="mt-5 flex items-center gap-3">

        <span
          className="h-1.5 w-1.5 rounded-full"
          style={{
            backgroundColor: paper.accent,
          }}
        />

        <span className="text-[11.5px] font-semibold text-[#64668C]">
          {paper.status}
        </span>

      </div>

      {/* Footer */}
      <div className="mt-auto flex items-center justify-between border-t border-[#F0EEF8] pt-5">

        <button
          type="button"
          className="text-[13.5px] font-bold text-[#3457E8] transition-all duration-300 hover:translate-x-1"
        >
          Read online →
        </button>

        <span className="text-xs font-semibold text-[#9A9BB8]">
          {paper.badge === "SUPERSEDED"
            ? "See current edition"
            : "Free · no form"}
        </span>

      </div>

    </article>
  );
}

/* Scroll-driven reveal animation */
function Reveal({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;

    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(element);
        }
      },
      {
        threshold: 0.12,
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{
        transitionDelay: `${delay}ms`,
      }}
      className={`transition-all duration-700 ease-out ${
        visible
          ? "translate-y-0 opacity-100"
          : "translate-y-8 opacity-0"
      }`}
    >
      {children}
    </div>
  );
}