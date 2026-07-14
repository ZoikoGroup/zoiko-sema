"use client"

interface SurfaceRow {
  surface: string;
  notes: string;
  status: string;
  statusClass: string;
}

const rows: SurfaceRow[] = [
  {
    surface: "Messaging & channels",
    notes: "Core messaging flows tested with screen readers and keyboard navigation.",
    status: "Supported",
    statusClass: "bg-green-50 text-green-600",
  },
  {
    surface: "Meetings",
    notes: "Captions and keyboard controls supported; some layouts being refined.",
    status: "Partial",
    statusClass: "bg-[#FDF3E0] text-[#B7791F]",
  },
  {
    surface: "Admin console",
    notes: "Core settings accessible; complex tables under active review.",
    status: "Partial",
    statusClass: "bg-[#FDF3E0] text-[#B7791F]",
  },
  {
    surface: "Mobile apps",
    notes: "Screen-reader labeling and touch target sizing in progress.",
    status: "In progress",
    statusClass: "bg-blue-50 text-blue-600",
  },
  {
    surface: "AI summaries & assistant",
    notes: "Text output is accessible; UI polish ongoing.",
    status: "Partial",
    statusClass: "bg-[#FDF3E0] text-[#B7791F]",
  },
  {
    surface: "Notifications",
    notes: "Accessible across supported channels and devices.",
    status: "Supported",
    statusClass: "bg-green-50 text-green-600",
  },
  {
    surface: "Onboarding & settings",
    notes: "Keyboard and screen-reader tested end-to-end.",
    status: "Supported",
    statusClass: "bg-green-50 text-green-600",
  },
];

export default function ConformanceProductCoverageSection() {
  return (
    <section className="bg-[#fbfafd] px-6 py-16 sm:px-10 lg:px-16">
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(14px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .fade-in-section { animation: fadeInUp 0.7s ease-out both; }
        .fade-in-item { animation: fadeInUp 0.5s ease-out both; }
      `}</style>

      <div className="fade-in-section mx-auto max-w-5xl">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[2px] text-[#4F63F0]">
          Conformance &amp; product coverage
        </p>
        <h2 className="max-w-xl text-3xl font-bold leading-snug text-gray-900 sm:text-[32px]">
          Where each surface stands today.
        </h2>
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-gray-500">
          Conformance varies by surface and feature. Status reflects internal testing
          and is reviewed on a rolling basis — not a certified audit unless noted.
        </p>

        <div className="mt-8 overflow-hidden rounded-2xl border border-gray-200">
          <div className="hidden grid-cols-[1fr_2fr_auto] gap-4 border-b border-gray-100 bg-[#F8F6FD] px-6 py-3 sm:grid">
            <span className="text-[10px] font-semibold uppercase tracking-wide text-gray-400">
              Surface
            </span>
            <span className="text-[10px] font-semibold uppercase tracking-wide text-gray-400">
              Notes
            </span>
            <span className="text-[10px] font-semibold uppercase tracking-wide text-gray-400">
              Status
            </span>
          </div>

          {rows.map(({ surface, notes, status, statusClass }, i) => (
            <div
              key={surface}
              className={`fade-in-item bg-white flex flex-col gap-2 px-6 py-4 sm:grid sm:grid-cols-[1fr_2fr_auto] sm:items-center sm:gap-4 ${
                i !== rows.length - 1 ? "border-b border-gray-100" : ""
              }`}
              style={{ animationDelay: `${i * 60}ms` }}
            >
              <p className="text-sm font-semibold text-gray-900">{surface}</p>
              <p className="text-xs leading-relaxed text-gray-500">{notes}</p>
              <span
                className={`inline-block w-fit rounded-full px-3 py-1 text-[10px] font-semibold ${statusClass}`}
              >
                {status}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
