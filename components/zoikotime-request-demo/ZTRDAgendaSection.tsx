"use client";

import { useInView } from "./useInView";

interface AgendaItem {
  number: string;
  title: string;
  desc: string;
}

const items: AgendaItem[] = [
  {
    number: "1",
    title: "Sema + ZoikoTime overview",
    desc: "How Zoiko Sema communication and ZoikoTime work intelligence connect.",
  },
  {
    number: "2",
    title: "Meeting-to-work",
    desc: "Meeting summary, decisions, action items, owners, due dates, and ZoikoTime sync.",
  },
  {
    number: "3",
    title: "Verified collaboration",
    desc: "Source-linked records from meetings, channels, approvals, and follow-ups.",
  },
  {
    number: "4",
    title: "Compliance & audit",
    desc: "Exportable activity package, exception handling, audit trail, and evidence filters.",
  },
  {
    number: "5",
    title: "Productivity intelligence",
    desc: "Team-level trends, work patterns, blockers, workload signals, and review controls.",
  },
  {
    number: "6",
    title: "Admin governance",
    desc: "Roles, permissions, retention, privacy controls, integrations, and plan gates.",
  },
  {
    number: "7",
    title: "Implementation planning",
    desc: "Discovery of systems, departments, rollout stages, and success metrics.",
  },
];

export default function ZTRDAgendaSection() {
  const { ref: headRef, inView: headIn } = useInView(0.2);
  const { ref: listRef, inView: listIn } = useInView(0.05);

  return (
    <>
      <style>{`
        @keyframes ztrdAgnFadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .ztrd-agn-hidden { opacity: 0; transform: translateY(20px); }
        .ztrd-agn-visible { animation: ztrdAgnFadeUp .55s cubic-bezier(.22,1,.36,1) forwards; }

        .ztrd-agn-row {
          opacity: 0;
          transform: translateY(14px);
          transition: background-color .18s ease, border-color .18s ease;
        }
        .ztrd-agn-row.active {
          animation: ztrdAgnFadeUp .5s cubic-bezier(.22,1,.36,1) forwards;
        }
        .ztrd-agn-row:hover {
          background-color: #FAFAFF;
          border-color: #C9D0FA;
        }
        .ztrd-agn-badge { transition: transform .2s ease, background-color .2s ease; }
        .ztrd-agn-row:hover .ztrd-agn-badge { transform: scale(1.08); background-color: #3E51DE; }

        @media (prefers-reduced-motion: reduce) {
          .ztrd-agn-hidden, .ztrd-agn-row { opacity: 1 !important; transform: none !important; animation: none !important; }
          .ztrd-agn-row:hover .ztrd-agn-badge { transform: none !important; }
        }
      `}</style>

      <section className="bg-[#fff] px-6 py-16 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-3xl">
          <div ref={headRef} className={`ztrd-agn-hidden ${headIn ? "ztrd-agn-visible" : ""} text-center`}>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[2px] text-[#4F63F0]">
              What you will see
            </p>
            <h2 className="text-3xl font-extrabold leading-tight text-gray-900 sm:text-[34px]">
              A guided demo agenda, end to end
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-gray-500">
              A consistent walkthrough of Sema + ZoikoTime — from meetings to
              reviewable work evidence.
            </p>
          </div>

          <div ref={listRef} className="mt-10 flex flex-col gap-3">
            {items.map((item, i) => (
              <div
                key={item.number}
                className={`ztrd-agn-row ${listIn ? "active" : ""} flex items-start gap-4 rounded-2xl border border-gray-200 bg-white p-5`}
                style={{ animationDelay: `${i * 0.08}s` }}
              >
                <span
                  className="ztrd-agn-badge flex h-9 w-9 shrink-0 items-center justify-center rounded-xl text-[13px] font-bold text-white"
                  style={{ background: "#0B1330" }}
                >
                  {item.number}
                </span>
                <div>
                  <h3 className="text-[15px] font-bold text-gray-900">{item.title}</h3>
                  <p className="mt-1 text-[13px] leading-relaxed text-gray-500">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}