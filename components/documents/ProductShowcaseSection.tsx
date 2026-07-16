"use client"
import { useState } from "react";

const tabs = ["Create", "Collaborate", "Version", "Publish"];

const tagOptions = ["Blank", "Template", "From meeting", "From thread"];

export default function ProductShowcaseSection() {
  const [activeTab, setActiveTab] = useState("Create");

  return (
    <section className="bg-[#12163A] px-6 py-24 sm:px-10 lg:px-16">
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(18px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .fade-in-item {
          opacity: 0;
          animation: fadeInUp 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `}</style>

      <div className="mx-auto max-w-6xl text-center">
        <p
          className="fade-in-item text-xs font-bold uppercase tracking-[2px] text-[#8C7CFC]"
          style={{ animationDelay: "0ms" }}
        >
          Product showcase
        </p>
        <h2
          className="fade-in-item mx-auto mt-4 max-w-140 text-3xl font-extrabold leading-snug text-white sm:text-[38px]"
          style={{ animationDelay: "80ms" }}
        >
          From creation to governance in one connected surface.
        </h2>

        <div
          className="fade-in-item mt-9 flex flex-wrap items-center justify-center gap-2"
          style={{ animationDelay: "160ms" }}
        >
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`rounded-full px-6 py-2.5 text-sm font-semibold transition ${
                activeTab === tab
                  ? "bg-[#6C5CE7] text-white"
                  : "border border-white/10 bg-white/5 text-white/70 hover:bg-white/10"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <div
          className="fade-in-item mt-10 overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-8 text-left sm:p-10"
          style={{ animationDelay: "260ms" }}
        >
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
            <div>
              <h3 className="text-2xl font-bold text-white sm:text-[28px]">
                Start from work context.
              </h3>
              <p className="mt-4 max-w-md text-sm leading-relaxed text-[#B9BEDA]">
                Create a blank document, import from a meeting, convert an AI
                summary, or use a template. Location, owner, and permissions are
                set from the start.
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {tagOptions.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-[#A98CF026] border border-[#A98CF040] px-4 py-2 text-xs font-medium text-[#C6B6FA]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="overflow-hidden rounded-2xl border border-white/10">
              <div className="flex items-center gap-3 bg-white px-4 py-2.5">
                <div className="flex items-center gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F57]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#FEBC2E]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#28C840]" />
                </div>
                <span className="text-xs font-medium text-gray-500">
                  Q3 Launch Strategy · {activeTab}
                </span>
              </div>
              <img src="/system-status/showcase.png" alt="image" className="h-full w-full object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
