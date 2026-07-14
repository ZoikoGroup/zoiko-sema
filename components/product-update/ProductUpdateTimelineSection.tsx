"use client";

import { useInView } from "./useInView";

interface UpdateItem {
  date: string;
  tags: { label: string; className: string }[];
  title: string;
  description: string;
}

interface MonthGroup {
  month: string;
  active: boolean;
  items: UpdateItem[];
}

const groups: MonthGroup[] = [
  {
    month: "July 2026",
    active: true,
    items: [
      {
        date: "July 01, 2026",
        tags: [
          { label: "IMPROVED", className: "bg-emerald-100 text-emerald-700" },
          { label: "SECURITY", className: "bg-blue-100 text-blue-700" },
        ],
        title: "Multi-Factor Auth Redesign",
        description:
          "We've overhauled the MFA enrollment process for enterprise admins, adding support for biometric passkeys and granular policy controls.",
      },
      {
        date: "July 12, 2026",
        tags: [{ label: "FIXED", className: "bg-red-100 text-red-600" }],
        title: "Messaging Notification Latency",
        description:
          "Resolved an issue where mobile push notifications were delayed during peak traffic periods. Service is now operating at < 50ms latency.",
      },
    ],
  },
  {
    month: "September 2026",
    active: false,
    items: [
      {
        date: "Sep 12, 2026",
        tags: [{ label: "NEW FEATURE", className: "bg-violet-100 text-violet-700" }],
        title: "Shared Channel Persistence",
        description:
          "Collaborate across organizations seamlessly. Guest users can now retain history in shared enterprise channels.",
      },
    ],
  },
];

export default function ProductUpdateTimelineSection() {
  const { ref, inView } = useInView(0.1);

  return (
    <>
      <style>{`
        @keyframes puTimelineUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .pu-timeline-hidden { opacity: 0; transform: translateY(20px); }
        .pu-timeline-visible { animation: puTimelineUp .55s cubic-bezier(.22,1,.36,1) forwards; }

        @keyframes puTimelineStagger {
          from { opacity: 0; transform: translateY(12px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .pu-timeline-card {
          opacity: 0;
          animation: puTimelineStagger .45s ease forwards;
          transition: transform .2s ease, box-shadow .2s ease;
        }
        .pu-timeline-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 14px 28px -14px rgba(15,15,40,0.18);
        }
        .pu-timeline-link { transition: color .2s ease, gap .2s ease; }
        .pu-timeline-link .pu-chev { transition: transform .2s ease; display: inline-block; }
        .pu-timeline-link:hover .pu-chev { transform: translateX(3px); }

        @media (prefers-reduced-motion: reduce) {
          .pu-timeline-hidden { opacity: 1 !important; transform: none !important; }
          .pu-timeline-visible { animation: none !important; }
          .pu-timeline-card { opacity: 1 !important; animation: none !important; }
        }
      `}</style>

      <section className="bg-[#F3F2FD] px-6 py-16 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-extrabold text-gray-900 sm:text-3xl">Latest Updates</h2>

          <div ref={ref} className={`pu-timeline-hidden ${inView ? "pu-timeline-visible" : ""} relative mt-8`}>
            <div className="absolute left-[5px] top-2 bottom-2 w-px bg-gray-300" />

            <div className="flex flex-col gap-8">
              {groups.map((group) => (
                <div key={group.month}>
                  <div className="relative mb-4 flex items-center gap-3">
                    <span
                      className={`relative z-10 h-2.5 w-2.5 rounded-full ${
                        group.active ? "bg-[#4F63F0]" : "bg-gray-300"
                      }`}
                    />
                    <span
                      className={`text-xs font-bold uppercase tracking-[1.5px] ${
                        group.active ? "text-[#4F63F0]" : "text-gray-400"
                      }`}
                    >
                      {group.month}
                    </span>
                  </div>

                  <div className="ml-7 flex flex-col gap-4">
                    {group.items.map((item, i) => (
                      <div
                        key={item.title}
                        className="pu-timeline-card rounded-xl border border-gray-100 bg-white p-5"
                        style={{ animationDelay: `${i * 0.08}s` }}
                      >
                        <p className="text-xs text-gray-400">{item.date}</p>
                        <div className="mt-2 flex flex-wrap gap-1.5">
                          {item.tags.map((tag) => (
                            <span
                              key={tag.label}
                              className={`rounded px-2 py-0.5 text-[10px] font-bold ${tag.className}`}
                            >
                              {tag.label}
                            </span>
                          ))}
                        </div>
                        <h3 className="mt-2 text-[15px] font-bold text-gray-900">{item.title}</h3>
                        <p className="mt-1.5 text-[13px] leading-relaxed text-gray-500">
                          {item.description}
                        </p>
                        <a
                          href="#"
                          className="pu-timeline-link mt-3 inline-flex items-center gap-1 text-xs font-semibold text-[#4F63F0]"
                        >
                          View Details
                          <span className="pu-chev">›</span>
                        </a>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
