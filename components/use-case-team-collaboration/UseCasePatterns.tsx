"use client";

import { useState } from "react";

interface Pattern {
  id: string;
  label: string;
  image: string;
}

const patterns: Pattern[] = [
  {
    id: "leadership",
    label: "Leadership Communication",
    image: "/use-cases/team-collaboration/pattern-leadership.png",
  },
  {
    id: "project",
    label: "Project Coordination",
    image: "/use-cases/team-collaboration/pattern-leadership.png",
  },
  {
    id: "client",
    label: "Client Collaboration",
    image: "/use-cases/team-collaboration/pattern-leadership.png",
  },
  {
    id: "remote",
    label: "Remote Team Alignment",
    image: "/use-cases/team-collaboration/pattern-leadership.png",
  },
  {
    id: "decision",
    label: "Cross-Functional Decision",
    image: "/use-cases/team-collaboration/pattern-leadership.png",
  },
  {
    id: "onboarding",
    label: "New-Team Onboarding",
    image: "/use-cases/team-collaboration/pattern-leadership.png",
  },
];

export default function UseCasePatterns() {
  const [selectedId, setSelectedId] = useState("leadership");
  const selected = patterns.find((p) => p.id === selectedId) ?? patterns[0];

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

        .pattern-item{ transition: background-color .2s ease, box-shadow .2s ease, transform .2s ease; }
        .pattern-item:hover{ transform: translateX(2px); }
      `}</style>

      <section className="bg-[#EEF2FF] px-6 py-20 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-6xl">
          <div className="fade-up text-center">
            <span className="inline-block rounded-full bg-white px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-[#4F63F0]">
              Use-Case Patterns
            </span>

            <h2 className="mt-4 text-3xl font-bold text-[#1F2937] md:text-[38px]">
              Recognize your team&apos;s workflow.
            </h2>
          </div>

          <div className="fade-up mt-14 grid gap-6 lg:grid-cols-[1fr_1.4fr]" style={{ animationDelay: ".1s" }}>
            <div className="space-y-2.5">
              {patterns.map((pattern) => {
                const isActive = pattern.id === selectedId;

                return (
                  <button
                    key={pattern.id}
                    onClick={() => setSelectedId(pattern.id)}
                    className={`pattern-item w-full rounded-xl px-5 py-4 text-left text-[15px] font-semibold ${
                      isActive
                        ? "bg-white text-[#1F2937] shadow-md"
                        : "bg-transparent text-[#4B5563] hover:bg-white/60"
                    }`}
                  >
                    {pattern.label}
                  </button>
                );
              })}
            </div>

            <div key={selected.id} className="fade-up overflow-hidden rounded-2xl shadow-lg">
              <img
                src={selected.image}
                alt={selected.label}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
