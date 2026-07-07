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

const checklist = [
  "Workspace creation for teams, projects, departments, regions, or clients",
  "Assign owners, administrators, moderators, and reviewers",
  "Branding, approved domains, and naming conventions",
  "Archive inactive workspaces and transfer ownership",
];

const rows = [
  { workspace: "Growth Team", owner: "Priya M.", members: "48", policy: "Configured" },
  { workspace: "Client Services", owner: "Daniel K.", members: "112", policy: "Configured" },
  { workspace: "Legal Space", owner: "Ana R.", members: "9", policy: "Needs review" },
  { workspace: "APAC Region", owner: "—", members: "0", policy: "Pending setup" },
];

function PolicyPill({ policy }: { policy: string }) {
  const styles: Record<string, string> = {
    Configured: "bg-emerald-50 text-emerald-600",
    "Needs review": "bg-amber-50 text-amber-600",
    "Pending setup": "bg-blue-50 text-blue-600",
  };
  return (
    <span
      className={`inline-flex items-center rounded-full text-[11px] font-semibold px-3 py-1 ${
        styles[policy] || "bg-gray-100 text-gray-600"
      }`}
    >
      {policy}
    </span>
  );
}

export default function AdminConsoleWorkspaceGovernanceSection() {
  const { ref: textRef, inView: textIn } = useInView(0.2);
  const { ref: cardRef, inView: cardIn } = useInView(0.1);

  return (
    <>
      <style>{`
        @keyframes acwgFadeUp {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .acwg-hidden  { opacity: 0; transform: translateY(28px); }
        .acwg-visible { animation: acwgFadeUp .65s cubic-bezier(.22,1,.36,1) forwards; }

        @media (prefers-reduced-motion: reduce) {
          .acwg-hidden, .acwg-visible { opacity: 1 !important; transform: none !important; animation: none !important; }
        }
      `}</style>

      <section
        aria-label="Workspace creation and governance"
        className="w-full bg-white py-16 sm:py-20 md:py-24"
      >
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 md:px-10 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center">
            {/* Left column - text */}
            <div
              ref={textRef}
              className={`acwg-hidden ${textIn ? "acwg-visible" : ""}`}
            >
              <h2 className="text-[clamp(24px,4vw,32px)] font-bold leading-[1.2] tracking-tight text-gray-900 mb-5 max-w-[440px]">
                Create and govern workspaces for every team, department, or client.
              </h2>
              <p className="text-[14px] sm:text-[15px] leading-[1.75] text-gray-500 max-w-[460px] mb-6">
                Administrators can create workspaces, assign owners, apply policies, manage branding, control external access, and keep workspace structures aligned with the organization.
              </p>

              <ul className="flex flex-col gap-3">
                {checklist.map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-brand mt-0.5 shrink-0"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span className="text-[13.5px] sm:text-[14px] leading-[1.5] text-gray-700">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right column - table preview */}
            <div
              ref={cardRef}
              className={`acwg-hidden ${cardIn ? "acwg-visible" : ""}`}
              style={{ animationDelay: "0.1s" }}
            >
              <div className="rounded-2xl border border-gray-100 bg-white shadow-[0_20px_50px_rgba(15,31,78,0.08)] overflow-hidden">
                {/* Browser bar */}
                <div className="flex items-center gap-1.5 px-5 py-3.5 border-b border-gray-100">
                  <span className="w-2.5 h-2.5 rounded-full bg-gray-200" />
                  <span className="w-2.5 h-2.5 rounded-full bg-gray-200" />
                  <span className="w-2.5 h-2.5 rounded-full bg-gray-200" />
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full min-w-[480px]">
                    <thead>
                      <tr className="border-b border-gray-100">
                        {["Workspace", "Owner", "Members", "Policy"].map((h) => (
                          <th
                            key={h}
                            className="text-left text-[11px] font-semibold tracking-[0.06em] uppercase text-gray-400 px-5 py-3"
                          >
                            {h}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {rows.map((r, i) => (
                        <tr
                          key={i}
                          className={i !== rows.length - 1 ? "border-b border-gray-100" : ""}
                        >
                          <td className="px-5 py-4 text-[13.5px] font-medium text-gray-900">
                            {r.workspace}
                          </td>
                          <td className="px-5 py-4 text-[13.5px] text-gray-600">{r.owner}</td>
                          <td className="px-5 py-4 text-[13.5px] text-gray-600">{r.members}</td>
                          <td className="px-5 py-4">
                            <PolicyPill policy={r.policy} />
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}