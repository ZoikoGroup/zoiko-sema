"use client";

import { useInView } from "./useInView";

interface RoleRow {
  role: string;
  enterprise?: boolean;
  visible: string;
  actions: string;
}

const rows: RoleRow[] = [
  {
    role: "Public visitor",
    visible: "Marketing page, workflow diagrams, trust links, FAQ.",
    actions: "Request demo, visit Trust Center.",
  },
  {
    role: "Signed-in user",
    visible: "Product education and account/workspace routing if applicable.",
    actions: "Request admin access, view help.",
  },
  {
    role: "Manager / project lead",
    visible: "Records for permitted workspaces/projects.",
    actions: "Review, assign, resolve exceptions where permitted.",
  },
  {
    role: "ZoikoTime admin",
    visible: "Full admin settings, sync rules, retention, export policy.",
    actions: "Configure rules, approve exports, view audit logs.",
  },
  {
    role: "Compliance reviewer",
    visible: "Permissioned record views, export packs, review history.",
    actions: "Export, comment, approve, request changes.",
  },
  {
    role: "Enterprise buyer",
    enterprise: true,
    visible: "Trust links, DPA, security review, demo CTA.",
    actions: "Request demo / enterprise review.",
  },
];

export default function ComplianceAuditRolesTableSection() {
  const { ref: headRef, inView: headIn } = useInView(0.2);
  const { ref: tableRef, inView: tableIn } = useInView(0.1);

  return (
    <>
      <style>{`
        @keyframes caRolesUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .ca-roles-hidden { opacity: 0; transform: translateY(20px); }
        .ca-roles-visible { animation: caRolesUp .55s cubic-bezier(.22,1,.36,1) forwards; }

        @keyframes caRolesRowStagger {
          from { opacity: 0; transform: translateY(8px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .ca-roles-row {
          opacity: 0;
          animation: caRolesRowStagger .4s ease forwards;
          transition: background-color .18s ease;
        }
        .ca-roles-row:hover { background-color: #F7F7FC; }

        @media (prefers-reduced-motion: reduce) {
          .ca-roles-hidden { opacity: 1 !important; transform: none !important; }
          .ca-roles-visible { animation: none !important; }
          .ca-roles-row { opacity: 1 !important; animation: none !important; }
        }
      `}</style>

      <section className="bg-white px-6 py-16 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-6xl text-center">
          <div ref={headRef} className={`ca-roles-hidden ${headIn ? "ca-roles-visible" : ""}`}>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[2px] text-[#4F63F0]">
              Roles, permissions & plan gates
            </p>
            <h2 className="mx-auto max-w-2xl text-3xl font-extrabold leading-10 text-gray-900 sm:text-[32px]">
              Who can view, approve, sync, and export
            </h2>
            <p className="mx-auto mt-4 max-w-160 text-sm leading-relaxed text-gray-500">
              Access is role-based; advanced governance, audit, and export
              controls are Enterprise.
            </p>
          </div>

          <div
            ref={tableRef}
            className={`ca-roles-hidden ${tableIn ? "ca-roles-visible" : ""} mt-10 overflow-x-auto rounded-2xl border border-gray-100 shadow-sm`}
          >
            <table className="w-full min-w-[640px] border-collapse text-left">
              <thead>
                <tr className="bg-[#F3F2FD]">
                  <th className="px-5 py-3.5 text-xs font-semibold text-gray-900">Role</th>
                  <th className="px-5 py-3.5 text-xs font-semibold text-gray-900">Visible content</th>
                  <th className="px-5 py-3.5 text-xs font-semibold text-gray-900">Actions available</th>
                </tr>
              </thead>
              <tbody>
                {rows.map(({ role, enterprise, visible, actions }, i) => (
                  <tr
                    key={role}
                    className={`ca-roles-row ${i !== rows.length - 1 ? "border-b border-gray-100" : ""}`}
                    style={{ animationDelay: `${i * 0.06}s` }}
                  >
                    <td className="px-5 py-4 align-top text-[13.5px] font-semibold text-gray-900">
                      <span className="flex items-center gap-2">
                        {role}
                        {enterprise && (
                          <span className="rounded-full bg-[#EDEBFB] px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-[#4F63F0]">
                            Enterprise
                          </span>
                        )}
                      </span>
                    </td>
                    <td className="px-5 py-4 align-top text-[13px] leading-relaxed text-gray-500">
                      {visible}
                    </td>
                    <td className="px-5 py-4 align-top text-[13px] leading-relaxed text-gray-500">
                      {actions}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  );
}
