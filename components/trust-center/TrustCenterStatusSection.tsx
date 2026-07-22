"use client";

import Link from "next/link";
import { ExternalLink, Clock } from "lucide-react";
import { useInView } from "./useInView";

interface ServiceRow {
  name: string;
  status: "Operational" | "Degraded performance";
}

const services: ServiceRow[] = [
  { name: "API services", status: "Operational" },
  { name: "Video meetings", status: "Operational" },
  { name: "Messaging & channels", status: "Operational" },
  { name: "AI summaries", status: "Operational" },
  { name: "Admin console", status: "Operational" },
  { name: "Notifications", status: "Degraded performance" },
];

export default function TrustCenterStatusSection() {
  const { ref: copyRef, inView: copyIn } = useInView(0.2);
  const { ref: panelRef, inView: panelIn } = useInView(0.1);

  return (
    <>
      <style>{`
        @keyframes tcStatusUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .tc-status-hidden { opacity: 0; transform: translateY(20px); }
        .tc-status-visible { animation: tcStatusUp .55s cubic-bezier(.22,1,.36,1) forwards; }

        .tc-status-btn {
          transition: transform .2s ease, box-shadow .2s ease, background .2s ease;
        }
        .tc-status-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 26px -10px rgba(0,0,0,0.35);
          background: #1B2059;
        }

        @keyframes tcStatusRowStagger {
          from { opacity: 0; transform: translateY(8px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .tc-status-row {
          opacity: 0;
          animation: tcStatusRowStagger .4s ease forwards;
          transition: box-shadow .18s ease;
        }
        .tc-status-row:hover { box-shadow: 0 2px 8px -2px rgba(17, 24, 39, 0.12); }

        @media (prefers-reduced-motion: reduce) {
          .tc-status-hidden { opacity: 1 !important; transform: none !important; }
          .tc-status-visible { animation: none !important; }
          .tc-status-row { opacity: 1 !important; animation: none !important; }
        }
      `}</style>

      <section className="bg-white px-6 py-16 sm:px-10 lg:px-16">
        <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 lg:grid-cols-2">
          <div ref={copyRef} className={`tc-status-hidden ${copyIn ? "tc-status-visible" : ""}`}>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[2px] text-[#4F63F0]">
              Reliability & status
            </p>
            <h2 className="text-3xl font-extrabold leading-tight text-gray-900 sm:text-[32px]">
              Service health, always visible.
            </h2>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-gray-500">
              Real-time system status, incident communication, planned
              maintenance notices, and uptime history — all public.
            </p>

            <Link
              href="/status"
              className="tc-status-btn mt-6 inline-flex items-center gap-2 rounded-xl bg-[#0B1330] px-6 py-3 text-sm font-semibold text-white"
            >
              View System Status
              <ExternalLink size={15} strokeWidth={2} />
            </Link>
          </div>

          <div ref={panelRef} className={`tc-status-hidden ${panelIn ? "tc-status-visible" : ""} rounded-2xl bg-[#F3F2FD] p-6`}>
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-bold text-gray-900">Current System Status</h3>
              <span className="flex items-center gap-1.5 text-xs font-semibold text-emerald-600">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                All systems operational
              </span>
            </div>

            <div className="mt-4 flex flex-col gap-1.5">
              {services.map((s, i) => (
                <div
                  key={s.name}
                  className="tc-status-row flex items-center justify-between rounded-lg bg-white px-4 py-3"
                  style={{ animationDelay: `${i * 0.05}s` }}
                >
                  <span className="flex items-center gap-2.5">
                    <span
                      className={`h-2 w-2 rounded-full ${
                        s.status === "Operational" ? "bg-emerald-500" : "bg-amber-500"
                      }`}
                    />
                    <span className="text-[13px] font-medium text-gray-800">{s.name}</span>
                  </span>
                  <span
                    className={`text-xs font-semibold ${
                      s.status === "Operational" ? "text-emerald-600" : "text-amber-600"
                    }`}
                  >
                    {s.status}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-4 flex items-center gap-1.5 text-[11.5px] text-gray-500">
              <Clock size={12} strokeWidth={2} />
              Last updated: July 14, 2026 at 09:42 UTC
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
