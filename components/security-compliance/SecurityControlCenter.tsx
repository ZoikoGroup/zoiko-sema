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
  { label: "Verification", icon: "/security-and-compliance/verification.svg" },
  { label: "Access Control", icon: "/security-and-compliance/access-control.svg" },
  { label: "Protection", icon: "/security-and-compliance/protection.svg" },
  { label: "Meeting Sec", icon: "/security-and-compliance/meeting-sec.svg" },
  { label: "AI Governance", icon: "/security-and-compliance/ai-governance.svg" },
  { label: "Policy", icon: "/security-and-compliance/policy.svg" },
  { label: "Audit", icon: "/security-and-compliance/audit.svg" },
  { label: "Monitoring", icon: "/security-and-compliance/monitoring.svg" },
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
          <div className="relative w-full inline-flex justify-center items-start gap-6 overflow-hidden pb-10">
            <div className="absolute left-0 right-0 top-[23px] h-0.5 bg-gradient-to-r from-sky-700/0 via-sky-700/20 to-sky-700/0 hidden md:block" />

            {flow.map((step, index) => {
              return (
                <div
                  key={step.label}
                  className="fade-up flex-1 self-stretch inline-flex flex-col justify-start items-center gap-4 z-10"
                  style={{ animationDelay: `${index * 0.06}s` }}
                >
                  <div className="size-12 bg-zinc-200/50 rounded-full inline-flex justify-center items-center shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md">
                    <div className="inline-flex flex-col justify-start items-center">
                      <img src={step.icon} alt={step.label} className="size-5 object-contain" />
                    </div>
                  </div>

                  <div className="self-stretch flex flex-col justify-start items-center">
                    <div className="text-center justify-center text-zinc-700 text-xs font-normal font-['Hanken_Grotesk'] uppercase leading-4 tracking-wide">
                      {step.label}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div
            className="fade-up relative mt-16 rounded-2xl bg-slate-900 p-16 overflow-hidden flex flex-col justify-start items-start gap-16"
            style={{ animationDelay: ".2s" }}
          >
            {/* Background blur effects from Figma */}
            <div className="absolute inset-0 opacity-20 pointer-events-none">
                <div className="absolute w-[600px] h-[600px] left-[60%] top-[-10%] bg-sky-700 rounded-full blur-3xl" />
                <div className="absolute w-96 h-96 left-[-5%] top-[5%] bg-black rounded-full blur-[50px]" />
            </div>

            <div className="relative z-10 w-full flex flex-wrap items-end justify-between gap-4">
              <div className="flex flex-col gap-2">
                <h3 className="text-base font-normal font-['Hanken_Grotesk'] leading-6 text-white">
                  Security Control Center
                </h3>
                <p className="text-base font-normal font-['Inter'] leading-6 text-slate-500">
                  Unified visibility into every layer of enterprise risk.
                </p>
              </div>

              <button
                onClick={handleSync}
                disabled={syncing}
                className="flex items-center justify-center gap-2 rounded-lg bg-sky-700 px-10 py-2 text-base font-normal font-['Hanken_Grotesk'] leading-6 text-white transition hover:bg-sky-600 disabled:opacity-70"
              >
                <RefreshCcw
                  size={16}
                  className={syncing ? "animate-spin" : ""}
                />
                {syncing ? "Syncing…" : "Sync Now"}
              </button>
            </div>

            <div className="relative z-10 w-full grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="flex flex-col gap-2 rounded-xl bg-slate-50/5 p-6 outline outline-1 outline-offset-[-1px] outline-white/10 backdrop-blur-[6px] transition duration-300 hover:bg-white/10"
                >
                  <p className="text-base font-normal font-['Inter'] leading-6 text-slate-500">
                    {stat.label}
                  </p>
                  <p className={`text-3xl font-bold font-['Inter'] leading-[48px] ${stat.color === 'text-red-400' ? 'text-red-500' : stat.color}`}>
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
