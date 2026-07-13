"use client";

interface ControlRow {
  label: string;
  description: string;
  badge: string;
  badgeClass: string;
}

const rows: ControlRow[] = [
  {
    label: "Access permissions",
    description:
      "Workspace, channel, file, role, guest, and external sharing controls.",
    badge: "Role-based",
    badgeClass: "bg-[#D9DFFA] text-[#3C46B8]",
  },
  {
    label: "External sharing",
    description:
      "Approval workflows and default restrictions for external guests.",
    badge: "Approval required",
    badgeClass: "bg-[#FBF1DE] text-[#A2660F]",
  },
  {
    label: "Retention controls",
    description:
      "Policy-based retention by workspace, file type, project, or classification.",
    badge: "Policy-based",
    badgeClass: "bg-[#E4F4EC] text-[#1C7A4D]",
  },
  {
    label: "Version history",
    description:
      "Preserve file versions and identify approved/current versions.",
    badge: "Version-aware",
    badgeClass: "bg-[#D9DFFA] text-[#3C46B8]",
  },
  {
    label: "Audit trail",
    description:
      "Record sharing, download, permission, deletion, and policy changes.",
    badge: "Fully logged",
    badgeClass: "bg-[#FBF1DE] text-[#A2660F]",
  },
  {
    label: "Confidential Mode",
    description:
      "Files in Confidential Mode respect encryption and AI restrictions.",
    badge: "Encryption respected",
    badgeClass: "bg-[#FBE7E7] text-[#B8362F]",
  },
];

export default function GovernanceSecurityControlsSection() {
  return (
    <section className="bg-white px-5 py-12 sm:px-8 sm:py-16 lg:px-16">
      <div className="mx-auto max-w-5xl">
        <div className="text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[2px] text-[#4F63F0]">
            Governance and security
          </p>

          <h2 className="mx-auto text-2xl font-extrabold leading-snug text-gray-900 sm:text-3xl lg:text-[28px]">
            Explicit control for IT, legal, and regulated buyers.
          </h2>
        </div>

        <div className="mt-8 overflow-hidden rounded-2xl">
          <img
            src="/files/security.png"
            alt="image"
            className="h-auto w-full object-cover lg:h-94"
          />
        </div>

        <div className="mt-8 overflow-hidden rounded-2xl border border-gray-200">
          {rows.map(({ label, description, badge, badgeClass }, i) => (
            <div
              key={label}
              className={`flex flex-col gap-3 px-5 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-6 ${
                i !== rows.length - 1 ? "border-b border-gray-100" : ""
              }`}
            >
              <div className="sm:w-1/4">
                <p className="text-sm font-semibold text-gray-900">{label}</p>
              </div>

              <p className="flex-1 text-xs leading-relaxed text-gray-500">
                {description}
              </p>

              <span
                className={`inline-block w-fit rounded-full px-3 py-1 text-[10px] font-bold ${badgeClass}`}
              >
                {badge}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
