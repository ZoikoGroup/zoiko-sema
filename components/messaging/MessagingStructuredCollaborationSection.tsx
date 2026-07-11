"use client";

import React, { useEffect, useRef, useState } from "react";

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

const tableData = [
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
  const { ref: sectionRef, inView: sectionIn } = useInView(0.15);

  return (
    <>
      <style>{`
        @keyframes scFadeUp {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .sc-hidden  { opacity: 0; transform: translateY(28px); }
        .sc-visible { animation: scFadeUp 0.75s cubic-bezier(0.22, 1, 0.36, 1) forwards; }
      `}</style>

      <section className="w-full bg-white py-16 sm:py-20 md:py-24 overflow-hidden">
        <div
          ref={sectionRef}
          className={`mx-auto w-full max-w-6xl px-5 sm:px-8 md:px-10 sc-hidden ${
            sectionIn ? "sc-visible" : ""
          }`}
        >
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <span className="block text-blue-600 text-xs font-bold tracking-widest uppercase mb-3">
              STRUCTURED COLLABORATION
            </span>
            <h2 className="text-[clamp(24px,4.5vw,36px)] font-extrabold text-slate-900 leading-[1.25] tracking-tight">
              Organize conversations by team, project, department, client, or purpose.
            </h2>
          </div>

          {/* Table Container Matrix */}
          <div className="w-full bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
            <div className="w-full overflow-x-auto scrollbar-thin">
              <table className="w-full min-w-[800px] border-collapse text-left">
                <thead>
                  <tr className="bg-gradient-to-r from-indigo-950 to-slate-900 border-b border-slate-200">
                    <th className="w-[24%] px-6 py-4 text-white text-xs font-bold uppercase tracking-wide select-none">
                      Structure
                    </th>
                    <th className="w-[46%] px-6 py-4 text-white text-xs font-bold uppercase tracking-wide select-none">
                      Definition
                    </th>
                    <th className="w-[30%] px-6 py-4 text-white text-xs font-bold uppercase tracking-wide select-none">
                      Example
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200/80">
                  {tableData.map((row, idx) => (
                    <tr 
                      key={idx} 
                      className="hover:bg-slate-50/70 transition-colors duration-150"
                    >
                      <td className="px-6 py-4.5 text-slate-900 text-sm font-bold align-top leading-normal">
                        {row.structure}
                      </td>
                      <td className="px-6 py-4.5 text-gray-700 text-sm font-normal align-top leading-relaxed">
                        {row.definition}
                      </td>
                      <td className="px-6 py-4.5 text-gray-400 text-sm font-normal align-top leading-relaxed">
                        {row.example}
                      </td>
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