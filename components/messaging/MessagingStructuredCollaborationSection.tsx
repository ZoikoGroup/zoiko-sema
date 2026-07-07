"use client";

import React, { useEffect, useRef, useState } from "react";

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

const rows = [
  {
    structure: "Direct Message",
    definition: "Private conversation between two users",
    example: "Founder to operations lead",
  },
  {
    structure: "Group Chat",
    definition: "Small private conversation with selected members",
    example: "Launch team coordination",
  },
  {
    structure: "Channel",
    definition: "Persistent topic-based communication inside a workspace",
    example: "#product-launch, #customer-support",
  },
  {
    structure: "Space",
    definition: "Larger structured area for a project, department, region, or client",
    example: "Enterprise Sales Space",
  },
  {
    structure: "Announcement Channel",
    definition: "Broadcast channel for leadership updates or policy notices",
    example: "#company-announcements",
  },
  {
    structure: "External Collaboration Space",
    definition: "Controlled space with invited guests or partners",
    example: "Client implementation room",
  },
];

export default function MessagingStructuredCollaborationSection() {
  const { ref: badgeRef, inView: badgeIn } = useInView(0.3);
  const { ref: headRef, inView: headIn } = useInView(0.2);
  const { ref: tableRef, inView: tableIn } = useInView(0.08);

  return (
    <>
      <style>{`
        @keyframes mscFadeUp {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .msc-hidden  { opacity: 0; transform: translateY(28px); }
        .msc-visible { animation: mscFadeUp .65s cubic-bezier(.22,1,.36,1) forwards; }

        @media (prefers-reduced-motion: reduce) {
          .msc-hidden, .msc-visible { opacity: 1 !important; transform: none !important; animation: none !important; }
        }
      `}</style>

      <section
        aria-label="Structured collaboration"
        className="w-full bg-[#F4F7FF] py-16 sm:py-20 md:py-24"
      >
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 md:px-10 lg:px-16">
          {/* Badge */}
          <div
            ref={badgeRef}
            className={`msc-hidden ${badgeIn ? "msc-visible" : ""} flex justify-center mb-6`}
          >
            <div className="inline-flex items-center gap-2 rounded-full bg-white border border-gray-200 px-4 py-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-brand" />
              <span className="text-[11px] font-semibold tracking-[0.08em] uppercase text-brand">
                Structured Collaboration
              </span>
            </div>
          </div>

          {/* Heading */}
          <div
            ref={headRef}
            className={`msc-hidden ${headIn ? "msc-visible" : ""} text-center mb-10 sm:mb-14`}
            style={{ animationDelay: "0.08s" }}
          >
            <h2 className="text-[clamp(24px,4.2vw,34px)] font-bold leading-[1.2] tracking-tight text-gray-900 max-w-[620px] mx-auto">
              Organize conversations by team, project, department, client, or purpose.
            </h2>
          </div>

          {/* Table */}
          <div
            ref={tableRef}
            className={`msc-hidden ${tableIn ? "msc-visible" : ""} rounded-2xl border border-gray-100 bg-white overflow-hidden`}
            style={{ animationDelay: "0.1s" }}
          >
            <div className="overflow-x-auto">
              <table className="w-full min-w-[700px]">
                <thead>
                  <tr className="border-b border-gray-100">
                    <th className="text-left text-[11px] font-semibold tracking-[0.06em] uppercase text-gray-400 px-6 py-4 w-[24%]">
                      Structure
                    </th>
                    <th className="text-left text-[11px] font-semibold tracking-[0.06em] uppercase text-gray-400 px-6 py-4">
                      Definition
                    </th>
                    <th className="text-left text-[11px] font-semibold tracking-[0.06em] uppercase text-gray-400 px-6 py-4 w-[24%]">
                      Example
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {rows.map((r, i) => (
                    <tr
                      key={i}
                      className={i !== rows.length - 1 ? "border-b border-gray-100" : ""}
                    >
                      <td className="px-6 py-4 text-[13.5px] font-semibold text-gray-900">
                        {r.structure}
                      </td>
                      <td className="px-6 py-4 text-[13.5px] text-gray-500">{r.definition}</td>
                      <td className="px-6 py-4 text-[13.5px] text-gray-500">{r.example}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}