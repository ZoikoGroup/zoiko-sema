"use client";

import { useState } from "react";

type Tab = "Current" | "Archive" | "Legacy";

const tabs: Tab[] = ["Current", "Archive", "Legacy"];

const versions = [
  {
    tab: "Current" as Tab,
    label: "Current Version",
    version: "v4.2.0-stable",
    description: "Critical path optimizations and security hardening.",
    date: "OCT 2024",
    highlighted: true,
  },
  {
    tab: "Current" as Tab,
    label: "Previous",
    version: "v4.1.8",
    description: "Major feature release for multi-node support.",
    date: "AUG 2024",
  },
  {
    tab: "Archive" as Tab,
    label: "Archived",
    version: "v3.9.2",
    description: "End of life for legacy circuit definitions.",
    date: "JAN 2024",
  },
  {
    tab: "Legacy" as Tab,
    label: "Legacy",
    version: "v2.0.0",
    description: "Original core architecture documentation.",
    date: "MAR 2023",
  },
];

export default function VersionManagement() {
  const [activeTab, setActiveTab] = useState<Tab>("Current");

  const visible = versions.filter((v) => v.tab === activeTab);

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

        .version-card{ transition: opacity .3s ease, transform .3s ease, box-shadow .3s ease; }
        .version-card:hover{ transform: translateY(-3px); box-shadow: 0 12px 28px rgba(15,15,40,0.08); }
      `}</style>

      <section className="bg-white px-6 py-20 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-6xl">
          <div className="fade-up flex flex-wrap items-end justify-between gap-4">
            <div>
              <h2 className="text-3xl font-bold text-[#1F2937] md:text-[34px]">
                Version Management
              </h2>
              <p className="mt-2 text-[15px] text-[#6B7280]">
                Full lineage and provenance of all resource assets.
              </p>
            </div>

            <div className="inline-flex rounded-lg bg-[#F3F4F6] p-1">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`rounded-md px-4 py-2 text-sm font-semibold transition ${
                    activeTab === tab
                      ? "bg-white text-[#1F2937] shadow-sm"
                      : "text-[#6B7280] hover:text-[#1F2937]"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {visible.map((entry) => (
              <div
                key={entry.version}
                className={`version-card fade-up rounded-2xl border p-5 ${
                  entry.highlighted
                    ? "border-[#4F63F0] bg-[#EEF2FF]"
                    : "border-[#ECECF4] bg-[#F9FAFB]"
                }`}
              >
                <p
                  className={`text-[11px] font-bold uppercase tracking-wide ${
                    entry.highlighted ? "text-[#4F63F0]" : "text-[#9CA3AF]"
                  }`}
                >
                  {entry.label}
                </p>

                <p className="mt-2 text-base font-bold text-[#1F2937]">{entry.version}</p>

                <p className="mt-2 text-sm leading-6 text-[#6B7280]">{entry.description}</p>

                <div className="mt-4 border-t border-[#E5E7EB] pt-3 text-xs font-medium text-[#9CA3AF]">
                  {entry.date}
                </div>
              </div>
            ))}

            {visible.length === 0 && (
              <p className="text-sm text-[#9CA3AF]">No versions in this category.</p>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
