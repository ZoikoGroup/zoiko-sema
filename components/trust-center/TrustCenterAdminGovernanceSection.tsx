"use client";

import { useInView } from "./useInView";

// TODO: replace with your actual image path, e.g. "/Images/trust-center-admin-governance.webp"
const ADMIN_IMAGE_SRC = "/Images/Admin-Governance.webp";

interface GovernanceRow {
  title: string;
  scope: string;
  description: string;
  action: string;
  href: string;
}

const rows: GovernanceRow[] = [
  {
    title: "Identity & access",
    scope: "Plan & role based",
    description: "Manage users, SSO/MFA where supported, session and device controls, guest access.",
    action: "View Admin Console",
    href: "/admin-console",
  },
  {
    title: "Roles & permissions",
    scope: "Plan & role based",
    description: "Assign admin, workspace, and member roles; control scope and visibility by role.",
    action: "View Roles",
    href: "/admin-console",
  },
  {
    title: "Retention & audit",
    scope: "Plan & role based",
    description: "Set message, file, meeting, and AI summary retention. Review admin and export audit events.",
    action: "Retention Settings",
    href: "/admin-console",
  },
  {
    title: "AI governance",
    scope: "Admin-controlled",
    description: "Control which workspaces use AI features, exclusions, and summary access rules.",
    action: "AI Governance",
    href: "/ai-use-policy",
  },
  {
    title: "Integrations & webhooks",
    scope: "Admin-controlled",
    description: "Approve OAuth scopes, manage API keys, review webhook access, and revoke tokens.",
    action: "Developer Docs",
    href: "/admin-console",
  },
];

export default function TrustCenterAdminGovernanceSection() {
  const { ref: leftRef, inView: leftIn } = useInView(0.2);
  const { ref: rowsRef, inView: rowsIn } = useInView(0.1);

  return (
    <>
      <style>{`
        @keyframes tcAdminUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .tc-admin-hidden { opacity: 0; transform: translateY(20px); }
        .tc-admin-visible { animation: tcAdminUp .55s cubic-bezier(.22,1,.36,1) forwards; }

        .tc-admin-btn {
          background: #4F63F0;
          transition: transform .2s ease, box-shadow .2s ease, background .2s ease;
        }
        .tc-admin-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 26px -10px rgba(79,99,240,0.55);
          background: #3E51DE;
        }

        .tc-admin-img-wrap { transition: transform .4s cubic-bezier(.22,1,.36,1); }
        .tc-admin-img-wrap:hover { transform: translateY(-6px); }

        @keyframes tcAdminRowStagger {
          from { opacity: 0; transform: translateY(12px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .tc-admin-row {
          opacity: 0;
          animation: tcAdminRowStagger .45s ease forwards;
          transition: transform .2s ease, background-color .2s ease, border-color .2s ease;
        }
        .tc-admin-row:hover {
          transform: translateY(-3px);
          background-color: rgba(255,255,255,0.06);
          border-color: rgba(124,140,248,0.35);
        }
        .tc-admin-row-btn {
          transition: transform .18s ease, background .18s ease;
        }
        .tc-admin-row-btn:hover {
          transform: translateY(-2px);
          background: #3E51DE;
        }

        @media (prefers-reduced-motion: reduce) {
          .tc-admin-hidden { opacity: 1 !important; transform: none !important; }
          .tc-admin-visible { animation: none !important; }
          .tc-admin-row { opacity: 1 !important; animation: none !important; }
        }
      `}</style>

      <section className="bg-[#0B1330] px-6 py-16 sm:px-10 lg:px-16">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 lg:grid-cols-2">
          <div ref={leftRef} className={`tc-admin-hidden ${leftIn ? "tc-admin-visible" : ""}`}>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[2px] text-[#8FA3FF]">
              Admin governance
            </p>
            <h2 className="text-3xl font-extrabold leading-tight text-white sm:text-[32px]">
              Route admins to the controls that support trust.
            </h2>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-[#AEB7CC]">
              Configure identity, roles, retention, AI governance, audit, and
              integrations from the Admin Console. Availability depends on
              plan and role.
            </p>

            <button className="tc-admin-btn mt-6 rounded-xl px-6 py-3 text-sm font-semibold text-white">
              View Admin Console
            </button>

            <div className="tc-admin-img-wrap mt-8 overflow-hidden rounded-2xl">
              <img
                src={ADMIN_IMAGE_SRC}
                alt="Admin managing identity, access, and governance controls"
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          <div
            ref={rowsRef}
            className={`tc-admin-hidden ${rowsIn ? "tc-admin-visible" : ""} flex flex-col gap-3`}
          >
            {rows.map(({ title, scope, description, action, href }, i) => (
              <div
                key={title}
                className="tc-admin-row flex flex-wrap items-center justify-between gap-3 rounded-xl border border-white/10 bg-white/3 p-5"
                style={{ animationDelay: `${i * 0.08}s` }}
              >
                <div className="min-w-0 flex-1">
                  <p className="flex flex-wrap items-baseline gap-2">
                    <span className="text-[13.5px] font-bold text-white">{title}</span>
                    <span className="text-[11px] text-[#7C879E]">{scope}</span>
                  </p>
                  <p className="mt-1 max-w-md text-[12.5px] leading-relaxed text-[#9CA0C4]">
                    {description}
                  </p>
                </div>
                <a
                  href={href}
                  className="tc-admin-row-btn shrink-0 rounded-full bg-[#4F63F0] px-4 py-2 text-[11.5px] font-semibold text-white"
                >
                  {action}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
