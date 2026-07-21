"use client";

import { useInView } from "./useInView";

// TODO: replace with your actual image path, e.g. "/Images/trust-center-overview.webp"
const OVERVIEW_IMAGE_SRC = "/Images/Security-Center-Overview.webp";

interface OverviewRow {
  label: string;
  dotColor: string;
  action: string;
  href: string;
}

const rows: OverviewRow[] = [
  { label: "Secure communication", dotColor: "bg-blue-500", action: "Security Policy", href: "/security-policy" },
  { label: "Admin-governed controls", dotColor: "bg-indigo-500", action: "Admin Console", href: "/admin-console" },
  { label: "Responsible AI", dotColor: "bg-emerald-500", action: "AI Use Policy", href: "/ai-use-policy" },
  { label: "Privacy and data", dotColor: "bg-teal-500", action: "Privacy & Data / DPA", href: "/privacy-notice" },
  { label: "Reliability and incidents", dotColor: "bg-amber-500", action: "System Status", href: "/system-status" },
];

export default function TrustCenterOverviewSection() {
  const { ref: copyRef, inView: copyIn } = useInView(0.2);
  const { ref: imgRef, inView: imgIn } = useInView(0.1);

  return (
    <>
      <style>{`
        @keyframes tcOverviewUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .tc-overview-hidden { opacity: 0; transform: translateY(20px); }
        .tc-overview-visible { animation: tcOverviewUp .55s cubic-bezier(.22,1,.36,1) forwards; }

        @keyframes tcOverviewImgIn {
          from { opacity: 0; transform: translateY(28px) scale(.97); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }
        .tc-overview-img-hidden { opacity: 0; transform: translateY(28px) scale(.97); }
        .tc-overview-img-visible { animation: tcOverviewImgIn .65s cubic-bezier(.22,1,.36,1) forwards; }
        .tc-overview-img-wrap { transition: transform .4s cubic-bezier(.22,1,.36,1); }
        .tc-overview-img-wrap:hover { transform: translateY(-6px); }

        @keyframes tcOverviewRowStagger {
          from { opacity: 0; transform: translateY(10px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .tc-overview-row {
          opacity: 0;
          animation: tcOverviewRowStagger .4s ease forwards;
          transition: transform .2s ease, box-shadow .2s ease;
        }
        .tc-overview-row:hover {
          transform: translateX(4px);
          box-shadow: 0 4px 14px rgba(79, 99, 240, 0.12);
        }
        .tc-overview-link { transition: color .2s ease; }

        @media (prefers-reduced-motion: reduce) {
          .tc-overview-hidden, .tc-overview-img-hidden { opacity: 1 !important; transform: none !important; }
          .tc-overview-visible, .tc-overview-img-visible { animation: none !important; }
          .tc-overview-row { opacity: 1 !important; animation: none !important; }
        }
      `}</style>

      <section id="security-overview" className="bg-[#F3F1FA] px-6 py-16 sm:px-10 lg:px-16">
        <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 lg:grid-cols-2">
          <div ref={copyRef} className={`tc-overview-hidden ${copyIn ? "tc-overview-visible" : ""}`}>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[2px] text-[#4F63F0]">
              Security center overview
            </p>
            <h2 className="text-3xl font-extrabold leading-tight text-gray-900 sm:text-[32px]">
              The central hub connecting trust topics, evidence, and controls.
            </h2>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-gray-500">
              Zoiko Sema approaches security across communication workflows —
              meetings, messages, channels, AI summaries, admin controls,
              integrations, and data governance — with a shared-responsibility
              model between the platform and workspace admins.
            </p>

            <div className="mt-7 flex flex-col gap-2.5">
              {rows.map(({ label, dotColor, action, href }, i) => (
                <a
                  key={label}
                  href={href}
                  className="tc-overview-row flex items-center justify-between rounded-xl bg-white px-4 py-3.5 shadow-sm"
                  style={{ animationDelay: `${i * 0.08}s` }}
                >
                  <span className="flex items-center gap-3">
                    <span className={`h-2 w-2 rounded-full ${dotColor}`} />
                    <span className="text-[13.5px] font-medium text-gray-800">{label}</span>
                  </span>
                  <span className="tc-overview-link text-xs font-semibold text-[#4F63F0]">
                    {action}
                  </span>
                </a>
              ))}
            </div>
          </div>

          <div
            ref={imgRef}
            className={`tc-overview-img-hidden ${imgIn ? "tc-overview-img-visible" : ""} tc-overview-img-wrap overflow-hidden rounded-2xl`}
          >
            <img
              src={OVERVIEW_IMAGE_SRC}
              alt="Team reviewing a connected security controls network on screen"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>
    </>
  );
}
