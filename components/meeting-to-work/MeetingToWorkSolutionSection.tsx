"use client";

import { Mic, BrainCircuit, Repeat, LucideIcon } from "lucide-react";
import { useInView } from "./useInView";

interface SolutionCard {
  icon: LucideIcon;
  title: string;
  description: string;
}

const cards: SolutionCard[] = [
  {
    icon: Mic,
    title: "Listen",
    description: "Capture every word with high-fidelity enterprise-grade transcription.",
  },
  {
    icon: BrainCircuit,
    title: "Extract",
    description: "Our AI identifies action items, owners, and deadlines automatically.",
  },
  {
    icon: Repeat,
    title: "Sync",
    description: "Direct integration with your existing tech stack for immediate action.",
  },
];

export default function MeetingToWorkSolutionSection() {
  const { ref: headRef, inView: headIn } = useInView(0.2);
  const { ref: gridRef, inView: gridIn } = useInView(0.1);

  return (
    <>
      <style>{`
        @keyframes mtwSolutionUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .mtw-solution-hidden { opacity: 0; transform: translateY(20px); }
        .mtw-solution-visible { animation: mtwSolutionUp .55s cubic-bezier(.22,1,.36,1) forwards; }

        @keyframes mtwSolutionStagger {
          from { opacity: 0; transform: translateY(14px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .mtw-solution-card {
          opacity: 0;
          animation: mtwSolutionStagger .5s ease forwards;
          transition: transform .22s ease, box-shadow .22s ease;
        }
        .mtw-solution-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 18px 34px -16px rgba(15,15,40,0.16);
        }
        .mtw-solution-icon { transition: transform .25s ease; }
        .mtw-solution-card:hover .mtw-solution-icon { transform: scale(1.08) rotate(-4deg); }

        @media (prefers-reduced-motion: reduce) {
          .mtw-solution-hidden { opacity: 1 !important; transform: none !important; }
          .mtw-solution-visible { animation: none !important; }
          .mtw-solution-card { opacity: 1 !important; animation: none !important; }
        }
      `}</style>

      <section className="bg-[#F4F2FD] px-6 py-16 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-6xl text-center">
          <div ref={headRef} className={`mtw-solution-hidden ${headIn ? "mtw-solution-visible" : ""}`}>
            <p className="mb-3 text-sm font-semibold text-[#4F63F0]">The Solution</p>
            <h2 className="mx-auto max-w-2xl text-3xl font-extrabold leading-10 text-gray-900 sm:text-[32px]">
              Automated Workflow Perfection
            </h2>
            <p className="mx-auto mt-4 max-w-160 text-sm leading-relaxed text-gray-500">
              Zoiko Sema bridges the gap between discussion and execution with
              a sophisticated AI-driven engine.
            </p>
          </div>

          <div
            ref={gridRef}
            className={`mtw-solution-hidden ${gridIn ? "mtw-solution-visible" : ""} mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3`}
          >
            {cards.map(({ icon: Icon, title, description }, i) => (
              <div
                key={title}
                className="mtw-solution-card flex flex-col items-center rounded-2xl bg-white p-8 text-center shadow-sm"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className="mtw-solution-icon mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-[#4F63F0] text-white">
                  <Icon size={24} strokeWidth={2} />
                </div>
                <h3 className="text-lg font-bold text-gray-900">{title}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-gray-500">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
