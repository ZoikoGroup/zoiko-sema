"use client";

import { useState } from "react";
import { useProductUpdates, UpdateFilter } from "./ProductUpdatesContext";
import { STATUS_STYLES, UpdateStatus } from "./statusStyles";

interface Release {
  date: string;
  title: string;
  description: string;
  status: UpdateStatus;
  category: Exclude<UpdateFilter, "all">;
}

const releases: Release[] = [
  {
    date: "Jul 14, 2026",
    title: "Reviewed follow-up drafts now include linked source moments",
    description: "AI Meeting Summaries · reviewer-linked evidence",
    status: "Available",
    category: "meetings",
  },
  {
    date: "Jul 8, 2026",
    title: "Confidential Mode now available on Business plans",
    description: "End-to-end encrypted meetings and messaging, previously Enterprise-only.",
    status: "Rolling out",
    category: "meetings",
  },
  {
    date: "Jun 30, 2026",
    title: "Admin Console: scoped connector permissions for Workflows",
    description: "Least-privilege scopes replace workspace-wide connector access.",
    status: "Admin action",
    category: "admin",
  },
  {
    date: "Jun 21, 2026",
    title: "Sema Notes: search now covers linked mail threads",
    description: "Notes connected to a mail thread are indexed together by default.",
    status: "Available",
    category: "meetings",
  },
  {
    date: "Jun 12, 2026",
    title: "Deprecating the v1 Webhooks payload format",
    description: "v1 payloads stop delivering March 2027. Migrate to v2 before then.",
    status: "Migration required",
    category: "developer",
  },
  {
    date: "May 29, 2026",
    title: "Beta: AI-assisted workflow drafting",
    description: "Describe a process in plain language; review and test before publishing.",
    status: "Beta",
    category: "admin",
  },
  {
    date: "May 15, 2026",
    title: "Retiring legacy guest-link format",
    description: "Old-format guest links stopped working May 15. Replacement links were sent to workspace owners.",
    status: "Retired",
    category: "meetings",
  },
];

const filters: { id: UpdateFilter; label: string }[] = [
  { id: "all", label: "All products" },
  { id: "meetings", label: "Meetings" },
  { id: "admin", label: "Admin" },
  { id: "developer", label: "Developer" },
];

const PAGE_SIZE = 5;

export default function ReleaseTimeline() {
  const { filter, selectFilter } = useProductUpdates();
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);

  const filtered =
    filter === "all" ? releases : releases.filter((r) => r.category === filter);

  const visible = filtered.slice(0, visibleCount);
  const hasMore = visibleCount < filtered.length;

  function handleFilter(id: UpdateFilter) {
    selectFilter(id);
    setVisibleCount(PAGE_SIZE);
  }

  return (
    <>
      <style>{`
        @keyframes fadeUp{
          from{
            opacity:0;
            transform:translateY(35px);
          }
          to{
            opacity:1;
            transform:translateY(0);
          }
        }

        .fade-up{
          opacity:0;
          animation:fadeUp .8s ease forwards;
        }

        .filter-pill{ transition: transform .18s ease, background-color .18s ease, color .18s ease; }
        .filter-pill:hover{ transform: translateY(-1px); }

        .release-row{ transition: background-color .2s ease; }
        .release-row:hover{ background-color: #F9FAFB; }
      `}</style>

      <section id="all-updates" className="bg-white px-6 py-20 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-3xl">
          <div className="fade-up text-center">
            <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[2px] text-[#4F63F0]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#4F63F0]" />
              All Updates
            </span>

            <h2 className="mt-3 text-3xl font-bold text-[#1F2937] md:text-[36px]">
              Every release, in order.
            </h2>
          </div>

          <div className="fade-up mt-8 flex flex-wrap justify-center gap-2.5" style={{ animationDelay: ".1s" }}>
            {filters.map((f) => {
              const isActive = filter === f.id;

              return (
                <button
                  key={f.id}
                  onClick={() => handleFilter(f.id)}
                  className={`filter-pill rounded-full px-5 py-2 text-sm font-semibold ${
                    isActive
                      ? "bg-[#1F2937] text-white"
                      : "bg-[#F3F2FD] text-[#4B5563] hover:bg-[#E7E8FD]"
                  }`}
                >
                  {f.label}
                </button>
              );
            })}
          </div>

          <div
            className="fade-up mt-8 overflow-hidden rounded-2xl border border-[#ECECF4] bg-white shadow-sm"
            style={{ animationDelay: ".18s" }}
          >
            {visible.map((release, index) => {
              const style = STATUS_STYLES[release.status];

              return (
                <div
                  key={release.title}
                  className={`release-row flex items-start justify-between gap-6 px-6 py-5 ${
                    index !== visible.length - 1 ? "border-b border-[#ECECF4]" : ""
                  }`}
                >
                  <div className="flex gap-6">
                    <span className="w-24 shrink-0 text-xs text-[#9CA3AF]">{release.date}</span>

                    <div>
                      <h3 className="text-[15px] font-semibold leading-6 text-[#1F2937]">
                        {release.title}
                      </h3>
                      <p className="mt-1.5 text-sm leading-6 text-[#6B7280]">
                        {release.description}
                      </p>
                    </div>
                  </div>

                  <span
                    className="shrink-0 rounded-full px-3 py-1 text-xs font-bold"
                    style={{ backgroundColor: style.bg, color: style.color }}
                  >
                    {release.status}
                  </span>
                </div>
              );
            })}
          </div>

          {hasMore && (
            <div className="mt-6 text-center">
              <button
                onClick={() => setVisibleCount((c) => c + PAGE_SIZE)}
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#4F63F0] transition hover:text-[#3348C9]"
              >
                Load more updates
                <span aria-hidden>→</span>
              </button>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
