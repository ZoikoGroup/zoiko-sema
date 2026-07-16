"use client";

import { useState } from "react";
import {
  ScanFace,
  Lock,
  ShieldCheck,
  Video,
  BrainCircuit,
  FileText,
  History,
  LineChart,
  RefreshCcw,
} from "lucide-react";

const flow = [
  { label: "Verification", icon: ScanFace },
  { label: "Access Control", icon: Lock },
  { label: "Protection", icon: ShieldCheck },
  { label: "Meeting Sec", icon: Video },
  { label: "AI Governance", icon: BrainCircuit },
  { label: "Policy", icon: FileText },
  { label: "Audit", icon: History },
  { label: "Monitoring", icon: LineChart },
];

const stats = [
  { label: "Identity Risk Score", value: "98/100", color: "text-white" },
  { label: "Active Policies", value: "1,242", color: "text-white" },
  { label: "Policy Violated", value: "0", color: "text-red-400" },
  { label: "System Uptime", value: "99.99%", color: "text-white" },
];

export default function SecurityControlCenter() {
  const [syncing, setSyncing] = useState(false);

  function handleSync() {
    if (syncing) return;
    setSyncing(true);
    setTimeout(() => setSyncing(false), 1200);
  }

  return (
    <>
      <style>{`
        @keyframes fadeUp{
          from{
            opacity:0;
            transform:translateY(35px);
          }
          to{
            opacity:1;
            transform:translateY(0);
          }
        }

        .fade-up{
          opacity:0;
          animation:fadeUp .8s ease forwards;
        }
      `}</style>

      <section className="bg-white px-6 py-20 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-6xl">
          <div className="relative grid grid-cols-4 gap-y-10 md:grid-cols-8">
            <div className="absolute left-[6%] right-[6%] top-[26px] hidden h-px bg-[#E5E7EB] md:block" />

            {flow.map((step, index) => {
              const Icon = step.icon;

              return (
                <div
                  key={step.label}
                  className="fade-up relative flex flex-col items-center text-center"
                  style={{ animationDelay: `${index * 0.06}s` }}
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-full border border-[#E5E7EB] bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md">
                    <Icon size={20} className="text-[#4B5563]" strokeWidth={1.75} />
                  </div>

                  <span className="mt-3 text-[11px] font-semibold uppercase tracking-wide text-[#6B7280]">
                    {step.label}
                  </span>
                </div>
              );
            })}
          </div>

          <div
            className="fade-up mt-16 rounded-2xl bg-[#11163C] p-8"
            style={{ animationDelay: ".2s" }}
          >
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <h3 className="text-xl font-semibold text-white">
                  Security Control Center
                </h3>
                <p className="mt-1.5 text-sm text-[#9AA3C0]">
                  Unified visibility into every layer of enterprise risk.
                </p>
              </div>

              <button
                onClick={handleSync}
                disabled={syncing}
                className="flex items-center gap-2 rounded-full bg-[#4F63F0] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#4053E6] disabled:opacity-70"
              >
                <RefreshCcw
                  size={15}
                  className={syncing ? "animate-spin" : ""}
                />
                {syncing ? "Syncing…" : "Sync Now"}
              </button>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-xl bg-white/5 p-5 transition duration-300 hover:bg-white/10"
                >
                  <p className="text-xs text-[#9AA3C0]">{stat.label}</p>
                  <p className={`mt-2 text-2xl font-bold ${stat.color}`}>
                    {stat.value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
