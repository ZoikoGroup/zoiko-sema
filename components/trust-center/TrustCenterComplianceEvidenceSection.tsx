"use client";

import { useInView } from "./useInView";

type Access = "Public" | "Partial" | "Gated";

interface EvidenceRow {
  title: string;
  access: Access;
  description: string;
  action: string;
  href: string;
}

const accessStyles: Record<Access, string> = {
  Public: "bg-emerald-100 text-emerald-700",
  Partial: "bg-amber-100 text-amber-700",
  Gated: "bg-red-100 text-red-600",
};

const legend: { access: Access; label: string }[] = [
  { access: "Public", label: "Visible to all visitors" },
  { access: "Partial", label: "Summary public, detail gated" },
  { access: "Gated", label: "Requires verified access" },
];

const rows: EvidenceRow[] = [
  {
    title: "Security overview",
    access: "Public",
    description: "Public summary of security controls and admin capabilities.",
    action: "View overview",
    href: "/security-policy",
  },
  {
    title: "Privacy overview",
    access: "Public",
    description: "Public summary of privacy and data governance approach.",
    action: "View privacy resources",
    href: "/privacy-notice",
  },
  {
    title: "AI governance brief",
    access: "Partial",
    description:
      "How AI summaries, retention, access, exclusions, and audit controls are managed.",
    action: "Request access",
    href: "#security-review",
  },
  {
    title: "Vendor security packet",
    access: "Gated",
    description: "Detailed questionnaire responses and review materials where available.",
    action: "Request trust documents",
    href: "#security-review",
  },
  {
    title: "Data processing summary",
    access: "Partial",
    description: "Integrations, APIs, subprocessors, and data flow overview where approved.",
    action: "Review data resources",
    href: "/data-processing-addendum",
  },
  {
    title: "Incident & reliability history",
    access: "Public",
    description: "System Status and incident communication.",
    action: "View System Status",
    href: "/system-status",
  },
  {
    title: "Compliance support notes",
    access: "Gated",
    description: "Audit logs, retention, exports, legal hold, and enterprise review support.",
    action: "Talk to sales",
    href: "/contact",
  },
];

export default function TrustCenterComplianceEvidenceSection() {
  const { ref: leftRef, inView: leftIn } = useInView(0.2);
  const { ref: rowsRef, inView: rowsIn } = useInView(0.1);

  return (
    <>
      <style>{`
        @keyframes tcEvidenceUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .tc-evidence-hidden { opacity: 0; transform: translateY(20px); }
        .tc-evidence-visible { animation: tcEvidenceUp .55s cubic-bezier(.22,1,.36,1) forwards; }

        .tc-evidence-btn {
          background: #4F63F0;
          transition: transform .2s ease, box-shadow .2s ease, background .2s ease;
        }
        .tc-evidence-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 26px -10px rgba(79,99,240,0.4);
          background: #3E51DE;
        }

        @keyframes tcEvidenceRowStagger {
          from { opacity: 0; transform: translateY(10px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .tc-evidence-row {
          opacity: 0;
          animation: tcEvidenceRowStagger .42s ease forwards;
          transition: background-color .18s ease;
        }
        .tc-evidence-row:hover { background-color: #F7F7FC; }
        .tc-evidence-link { transition: color .2s ease, gap .2s ease; }
        .tc-evidence-link .tc-arrow { transition: transform .2s ease; display: inline-block; }
        .tc-evidence-link:hover .tc-arrow { transform: translateX(3px); }

        @media (prefers-reduced-motion: reduce) {
          .tc-evidence-hidden { opacity: 1 !important; transform: none !important; }
          .tc-evidence-visible { animation: none !important; }
          .tc-evidence-row { opacity: 1 !important; animation: none !important; }
        }
      `}</style>

      <section className="bg-white px-6 py-16 sm:px-10 lg:px-16">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 lg:grid-cols-2">
          <div ref={leftRef} className={`tc-evidence-hidden ${leftIn ? "tc-evidence-visible" : ""}`}>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[2px] text-[#4F63F0]">
              Compliance & evidence
            </p>
            <h2 className="text-3xl font-extrabold leading-tight text-gray-900 sm:text-[32px]">
              A guided path for procurement and security review.
            </h2>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-gray-500">
              Public summaries are available to all visitors. Detailed
              evidence and vendor security materials require a verified
              request.
            </p>

            <a
              href="#security-review"
              className="tc-evidence-btn mt-6 inline-block rounded-xl px-6 py-3 text-sm font-semibold text-white"
            >
              Request trust documents
            </a>

            <div className="mt-7 flex flex-col gap-2.5">
              {legend.map(({ access, label }) => (
                <div key={access} className="flex items-center gap-2.5">
                  <span
                    className={`rounded px-2 py-0.5 text-[10.5px] font-bold ${accessStyles[access]}`}
                  >
                    {access}
                  </span>
                  <span className="text-[12.5px] text-gray-500">{label}</span>
                </div>
              ))}
            </div>
          </div>

          <div ref={rowsRef} className={`tc-evidence-hidden ${rowsIn ? "tc-evidence-visible" : ""} flex flex-col`}>
            {rows.map(({ title, access, description, action, href }, i) => (
              <div
                key={title}
                className={`tc-evidence-row flex flex-wrap items-center justify-between gap-3 rounded-lg px-3 py-4 ${
                  i !== rows.length - 1 ? "border-b border-gray-100" : ""
                }`}
                style={{ animationDelay: `${i * 0.06}s` }}
              >
                <div className="min-w-0">
                  <p className="flex flex-wrap items-center gap-2">
                    <span className="text-[13.5px] font-semibold text-gray-900">{title}</span>
                    <span className={`rounded px-2 py-0.5 text-[10px] font-bold ${accessStyles[access]}`}>
                      {access}
                    </span>
                  </p>
                  <p className="mt-1 max-w-sm text-[12.5px] leading-relaxed text-gray-500">
                    {description}
                  </p>
                </div>
                <a
                  href={href}
                  className="tc-evidence-link shrink-0 flex items-center gap-1 text-xs font-semibold text-[#4F63F0]"
                >
                  {action}
                  <span className="tc-arrow">→</span>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
