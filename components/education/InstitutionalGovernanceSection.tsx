"use client";

import React from "react";
import { ShieldCheck, FileSearch } from "lucide-react";

const approvalQueue = [
  { title: "Bio 101 - Lecture 04", status: "Review", pending: true },
  { title: "Advanced Algebra", status: "Approved", pending: false },
];

const integrations = ["SIS", "LMS", "SAML", "API", "LTI", "ZoikoTime"];

function DonutScore({ pct }: { pct: number }) {
  const r = 54;
  const c = 2 * Math.PI * r;
  const dash = (pct / 100) * c;
  return (
    <svg viewBox="0 0 130 130" className="h-32 w-32 -rotate-90">
      <circle
        cx="65"
        cy="65"
        r={r}
        fill="none"
        stroke="#E5E7EB"
        strokeWidth="7"
      />
      <circle
        cx="65"
        cy="65"
        r={r}
        fill="none"
        stroke="#4F46E5"
        strokeWidth="7"
        strokeLinecap="round"
        strokeDasharray={`${dash} ${c - dash}`}
        className="gov-donut-ring"
      />
    </svg>
  );
}

export default function InstitutionalGovernanceSection() {
  return (
    <section className="bg-white px-6 py-24">
      <style>{`
        @keyframes gov-rise {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .gov-card { animation: gov-rise 0.6s cubic-bezier(0.16, 1, 0.3, 1) both; }
        .gov-card-1 { animation-delay: 0.05s; }
        .gov-card-2 { animation-delay: 0.15s; }
        .gov-card-3 { animation-delay: 0.25s; }
        .gov-card-4 { animation-delay: 0.35s; }
        .gov-row { transition: background-color 0.2s ease, transform 0.2s ease; }
        .gov-row:hover { transform: translateX(2px); }
        .gov-pill { transition: transform 0.2s ease, box-shadow 0.2s ease; }
        .gov-pill:hover { transform: translateY(-2px); box-shadow: 0 8px 20px -8px rgba(15, 23, 42, 0.25); }
        @keyframes gov-dash {
          from { stroke-dashoffset: 340; }
          to { stroke-dashoffset: 0; }
        }
        .gov-donut-ring {
          stroke-dasharray: 340;
          animation: gov-dash 1.2s cubic-bezier(0.16, 1, 0.3, 1) both;
          animation-delay: 0.4s;
        }
        @media (prefers-reduced-motion: reduce) {
          .gov-card, .gov-row, .gov-pill, .gov-donut-ring { animation: none !important; transition: none !important; }
        }
      `}</style>

      <h2 className="text-center text-[32px] font-extrabold tracking-tight text-slate-900 sm:text-[38px]">
        Institutional Governance &amp; Governance
      </h2>

      <div className="mx-auto mt-16 grid max-w-6xl grid-cols-1 gap-6 lg:grid-cols-[1.55fr_1fr]">
        {/* AI Governance Hub */}
        <div className="gov-card gov-card-1 rounded-3xl border border-slate-200 bg-white p-8">
          <h3 className="text-[19px] font-bold text-slate-900">
            AI Governance Hub
          </h3>
          <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-slate-500">
            Full control over how AI models interact with institution data.
            Review every summary before students see it.
          </p>

          <div className="mt-7 rounded-2xl bg-[#EFEDF0] p-5">
            <div className="flex items-center justify-between">
              <h4 className="text-[16px] font-bold text-slate-900">
                Summary Approval Queue
              </h4>
              <span className="rounded-full bg-[#4A47D21A] px-3 py-1 text-[11px] font-bold tracking-wide text-[#4A47D2]">
                12 PENDING
              </span>
            </div>

            <div className="mt-4 flex flex-col gap-2">
              {approvalQueue.map((item) => (
                <div
                  key={item.title}
                  className="gov-row flex items-center justify-between rounded-xl bg-white px-4 py-3.5"
                >
                  <div className="flex items-center gap-3">
                    <FileSearch size={17} className="text-slate-400" />
                    <span className="text-[14.5px] font-medium text-slate-700">
                      {item.title}
                    </span>
                  </div>
                  <span
                    className={`text-[14px] font-semibold ${
                      item.pending ? "text-[#4A47D2]" : "text-slate-400"
                    }`}
                  >
                    {item.status}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Privacy & Age Controls */}
        <div className="gov-card gov-card-2 flex flex-col rounded-3xl bg-[#0B0E24] p-8">
          <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-600 text-white">
            <ShieldCheck size={20} />
          </span>

          <h3 className="mt-6 text-[19px] font-bold text-white">
            Privacy &amp; Age Controls
          </h3>
          <p className="mt-3 text-[15px] leading-relaxed text-slate-400">
            Granular consent management and guardian approval workflows for K-12
            and Higher Ed.
          </p>

          <div className="mt-8 flex flex-1 flex-col justify-end divide-y divide-white/10">
            <div className="flex items-center justify-between py-4">
              <span className="text-[14.5px] text-white">Guardian Consent</span>
              <span className="text-[14.5px] font-semibold text-[#C2C1FF]">
                Active
              </span>
            </div>
            <div className="flex items-center justify-between py-4">
              <span className="text-[14.5px] text-white">COPPA Compliance</span>
              <span className="text-[14.5px] font-semibold text-[#C2C1FF]">
                Verified
              </span>
            </div>
          </div>
        </div>
        {/* Accessibility Readiness */}
      </div>

      <div className="mx-auto mt-16 grid max-w-6xl grid-cols-1 gap-6 lg:grid-cols-[30%_70%]">
        <div className="gov-card gov-card-3 rounded-3xl border border-slate-200 bg-white p-8">
          <h3 className="text-[19px] font-bold text-slate-900">
            Accessibility Readiness
          </h3>
          <p className="mt-3 max-w-xs text-[15px] leading-relaxed text-slate-500">
            Monitor institution-wide captioning status and keyboard nav
            compliance.
          </p>

          <div className="mt-8 flex items-center justify-center">
            <div className="relative flex items-center justify-center">
              <DonutScore pct={90} />
              <div className="absolute flex flex-col items-center">
                <span className="text-[26px] font-extrabold leading-none text-slate-900">
                  90%
                </span>
                <span className="mt-1 text-[10px] font-semibold tracking-widest text-slate-400">
                  SCORE
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Seamless Integrations */}
        <div className="gov-card gov-card-4 flex flex-col justify-between gap-8 rounded-3xl bg-[#F5F3F6] p-8 sm:flex-row sm:items-center">
          <div className="max-w-xs">
            <h3 className="text-[19px] font-bold text-slate-900">
              Seamless Integrations
            </h3>
            <p className="mt-3 text-[15px] leading-relaxed text-slate-500">
              Native connectivity with Canvas, Moodle, Blackboard, and student
              identity systems.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-3">
            {integrations.map((name) => (
              <div
                key={name}
                className="gov-pill flex h-16 w-24 items-center justify-center rounded-xl bg-white text-[14px] font-bold text-slate-800 shadow-sm"
              >
                {name}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
