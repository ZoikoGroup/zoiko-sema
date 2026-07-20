"use client";

import React from "react";

export default function ComparisonTable() {
  const rows = [
    {
      role: "Organization Owner",
      viewHierarchy: "Full",
      createTeams: "Full",
      assignManagers: "Full",
      manageAccess: "Full",
    },
    {
      role: "Org / People Admin",
      viewHierarchy: "Full",
      createTeams: "Full",
      assignManagers: "Full",
      manageAccess: "Limited",
    },
    {
      role: "Team Manager",
      viewHierarchy: "Scoped",
      createTeams: "Limited",
      assignManagers: "Limited / request",
      manageAccess: "No",
    },
    {
      role: "Security / Compliance Admin",
      viewHierarchy: "View",
      createTeams: "No",
      assignManagers: "Review",
      manageAccess: "Full / review",
    },
    {
      role: "Worker",
      viewHierarchy: "Own path",
      createTeams: "No",
      assignManagers: "No",
      manageAccess: "No",
    },
    {
      role: "Auditor",
      viewHierarchy: "View",
      createTeams: "No",
      assignManagers: "View",
      manageAccess: "View",
    },
  ];

  return (
    <section className="w-full bg-[#0f1225] text-white px-6 md:px-12 lg:px-16 py-16 md:py-24 flex flex-col items-center justify-center">
      <style
        dangerouslySetInnerHTML={{
          __html: `
            @keyframes fadeUpComparison {
              from {
                opacity: 0;
                transform: translateY(20px);
              }
              to {
                opacity: 1;
                transform: translateY(0);
              }
            }
            .animate-fade-up-comparison {
              animation: fadeUpComparison 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
            }
          `,
        }}
      />

      <div className="w-full max-w-6xl mx-auto flex flex-col animate-fade-up-comparison">
        {/* Top Header Section */}
        <div className="w-full mb-10 md:mb-14">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-[10px] tracking-[0.25em] font-extrabold text-[#00e1c6] uppercase">
              12 – ROLES & PERMISSIONS
            </span>
          </div>
          <h2 className="text-3xl md:text-[38px] font-bold tracking-tight text-white leading-tight max-w-3xl">
            Least-privilege by default, across every role.
          </h2>
        </div>

        {/* Matrix Comparison Table */}
        <div className="w-full rounded-xl border border-white/10 overflow-hidden bg-[#131730]">
          <div className="overflow-x-auto w-full">
            <table className="w-full border-collapse text-left min-w-[800px]">
              <thead>
                <tr className="border-b border-white/10 bg-[#161c3a]">
                  <th className="px-6 py-4.5 text-[10px] tracking-[0.15em] font-extrabold text-[#a5a9cc] uppercase w-[24%]">
                    ROLE
                  </th>
                  <th className="px-6 py-4.5 text-[10px] tracking-[0.15em] font-extrabold text-[#a5a9cc] uppercase w-[19%]">
                    Can view hierarchy
                  </th>
                  <th className="px-6 py-4.5 text-[10px] tracking-[0.15em] font-extrabold text-[#a5a9cc] uppercase w-[19%]">
                    Can create teams
                  </th>
                  <th className="px-6 py-4.5 text-[10px] tracking-[0.15em] font-extrabold text-[#a5a9cc] uppercase w-[19%]">
                    Can assign managers
                  </th>
                  <th className="px-6 py-4.5 text-[10px] tracking-[0.15em] font-extrabold text-[#a5a9cc] uppercase w-[19%]">
                    Can manage access
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {rows.map((row, index) => (
                  <tr
                    key={index}
                    className={`transition-colors hover:bg-white/[0.02] ${
                      row.role === "Team Manager" ? "bg-[#181d3d]/50" : ""
                    }`}
                  >
                    {/* Role Label */}
                    <td className="px-6 py-[22px] text-[13px] font-bold text-white whitespace-nowrap">
                      {row.role}
                    </td>
                    {/* Can view hierarchy */}
                    <td className="px-6 py-[22px] text-[13px] text-white/70 font-medium whitespace-nowrap">
                      {row.viewHierarchy}
                    </td>
                    {/* Can create teams */}
                    <td className="px-6 py-[22px] text-[13px] text-white/70 font-medium whitespace-nowrap">
                      {row.createTeams}
                    </td>
                    {/* Can assign managers */}
                    <td className="px-6 py-[22px] text-[13px] text-white/70 font-medium whitespace-nowrap">
                      {row.assignManagers}
                    </td>
                    {/* Can manage access */}
                    <td className="px-6 py-[22px] text-[13px] text-white/70 font-medium whitespace-nowrap">
                      {row.manageAccess}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
