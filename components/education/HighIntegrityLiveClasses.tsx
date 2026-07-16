"use client";

import React from "react";
import { AudioLines, FileText } from "lucide-react";

const features = [
  {
    icon: AudioLines,
    title: "Live AI Transcripts",
    description: "Real-time accessibility and searchable lecture notes.",
  },
  {
    icon: FileText,
    title: "AI Summary Drafts",
    description: "Automated session recaps ready for teacher review.",
  },
];

export default function HighIntegrityLiveClasses() {
  return (
    <section className="bg-[#F3F2FD] px-6 py-24">
      <style>{`
        @keyframes hilc-rise {
          from { opacity: 0; transform: translateY(18px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .hilc-rise { animation: hilc-rise 0.6s cubic-bezier(0.16, 1, 0.3, 1) both; }
        .hilc-rise-1 { animation-delay: 0s; }
        .hilc-rise-2 { animation-delay: 0.1s; }
        .hilc-rise-3 { animation-delay: 0.2s; }
        .hilc-rise-4 { animation-delay: 0.15s; }
        .hilc-feature-icon {
          transition: transform 0.2s ease, background-color 0.2s ease;
        }
        .hilc-feature:hover .hilc-feature-icon {
          transform: scale(1.08);
          background-color: #E0E0FB;
        }
        @media (prefers-reduced-motion: reduce) {
          .hilc-rise, .hilc-feature-icon { animation: none !important; transition: none !important; }
        }
      `}</style>

      <div className="mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-2">
        {/* Left: copy */}
        <div>
          <h2 className="hilc-rise hilc-rise-1 text-[36px] font-extrabold leading-tight tracking-tight text-slate-900 sm:text-[42px]">
            High-Integrity Live Classes
          </h2>

          <p className="hilc-rise hilc-rise-2 mt-5 max-w-170 text-[16px] leading-relaxed text-[#46464D]">
            Engage learners with purpose-built classroom tools. Automated
            transcripts, real-time polling, and AI-generated summaries keep
            everyone aligned and focused.
          </p>

          <div className="mt-10 flex flex-col gap-7">
            {features.map((f, i) => (
              <div
                key={f.title}
                className={`hilc-feature hilc-rise ${
                  i === 0 ? "hilc-rise-3" : "hilc-rise-4"
                } flex items-start gap-4`}
              >
                <span className="hilc-feature-icon flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-indigo-100 text-indigo-600">
                  <f.icon size={20} />
                </span>
                <div>
                  <h3 className="text-[16px] font-bold text-slate-900">{f.title}</h3>
                  <p className="mt-1 text-[14.5px] text-slate-500">{f.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: screenshot */}
          <img src="/education/meet.png" alt="image" className="block h-auto w-full" />
       
      </div>
    </section>
  );
}
