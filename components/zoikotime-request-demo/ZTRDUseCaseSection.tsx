"use client";

import { useInView } from "./useInView";
import { useZTRD } from "./ZTRDContext";
import { useCaseOptions } from "./ztrdUseCases";

export default function ZTRDUseCaseSection() {
  const { ref: headRef, inView: headIn } = useInView(0.2);
  const { ref: gridRef, inView: gridIn } = useInView(0.05);
  const { selectedGoal, setSelectedGoal } = useZTRD();

  return (
    <>
      <style>{`
        @keyframes ztrdUseFadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .ztrd-use-hidden { opacity: 0; transform: translateY(20px); }
        .ztrd-use-visible { animation: ztrdUseFadeUp .55s cubic-bezier(.22,1,.36,1) forwards; }

        .ztrd-use-card {
          transition: transform .2s cubic-bezier(.22,1,.36,1), box-shadow .2s ease, border-color .2s ease;
        }
        .ztrd-use-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 16px 32px -16px rgba(15,15,42,0.16);
        }
        .ztrd-use-icon { transition: transform .2s ease; }
        .ztrd-use-card:hover .ztrd-use-icon { transform: scale(1.08); }

        @media (prefers-reduced-motion: reduce) {
          .ztrd-use-hidden { opacity: 1 !important; transform: none !important; }
          .ztrd-use-visible { animation: none !important; }
          .ztrd-use-card:hover { transform: none !important; }
        }
      `}</style>

      <section id="use-case-selector" className="bg-[#F4F2FD] px-6 py-16 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-6xl">
          <div ref={headRef} className={`ztrd-use-hidden ${headIn ? "ztrd-use-visible" : ""} text-center`}>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[2px] text-[#4F63F0]">
              Use case selector
            </p>
            <h2 className="text-3xl font-extrabold leading-tight text-gray-900 sm:text-[34px]">
              Pick your primary ZoikoTime goal
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-gray-500">
              Your choice tailors the demo agenda, the fields below, and who
              follows up. You can change it anytime.
            </p>
          </div>

          <div
            ref={gridRef}
            className={`ztrd-use-hidden ${gridIn ? "ztrd-use-visible" : ""} mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3`}
            style={{ animationDelay: "0.08s" }}
          >
            {useCaseOptions.map((option) => {
              const isSelected = selectedGoal === option.id;
              return (
                <button
                  key={option.id}
                  type="button"
                  onClick={() => setSelectedGoal(isSelected ? "" : option.id)}
                  aria-pressed={isSelected}
                  className={`ztrd-use-card rounded-2xl border bg-white p-6 text-left ${
                    isSelected ? "border-[#4F63F0] ring-2 ring-[#4F63F0]/20" : "border-gray-200"
                  }`}
                >
                  <span
                    className="ztrd-use-icon mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl"
                    style={{ background: isSelected ? "#4F63F0" : "#EDEBFB" }}
                  >
                    <option.icon
                      size={19}
                      strokeWidth={2}
                      color={isSelected ? "#ffffff" : "#4F63F0"}
                    />
                  </span>
                  <h3 className="mb-1.5 text-base font-bold text-gray-900">{option.title}</h3>
                  <p className="mb-3 text-[13px] leading-relaxed text-gray-500">{option.desc}</p>
                  <p className="text-[12px] font-semibold text-[#4F63F0]">
                    Follow-up: {option.followUp}
                  </p>
                </button>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}