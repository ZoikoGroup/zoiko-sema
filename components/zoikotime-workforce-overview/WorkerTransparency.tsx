import { Check } from "lucide-react";

const points = [
  {
    label: "Notice:",
    description: "Who operates the workspace, why data is processed, and the policy version.",
  },
  {
    label: "Own overview:",
    description: "Personal time and session records with source and freshness.",
  },
  {
    label: "Correction:",
    description: "Submit a factual correction with evidence where permitted.",
  },
  {
    label: "Challenge:",
    description: "Request review of a consequential decision, with status and escalation.",
  },
];

export default function WorkerTransparency() {
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
        <div className="mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-2">
          <div className="fade-up">
            <span className="text-xs font-bold uppercase tracking-[2px] text-[#5B5FEF]">
              Worker Transparency
            </span>

            <h2 className="mt-4 text-3xl font-bold text-[#1F2937] md:text-[36px]">
              Every worker sees their own record — and can correct it.
            </h2>

            <div className="mt-8 space-y-4">
              {points.map((point, index) => (
                <div
                  key={point.label}
                  className="fade-up flex items-start gap-3"
                  style={{ animationDelay: `${0.1 + index * 0.1}s` }}
                >
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#EEEEFE]">
                    <Check size={13} className="text-[#5B5FEF]" strokeWidth={3} />
                  </span>
                  <p className="text-[15px] leading-7 text-[#374151]">
                    <span className="font-semibold text-[#1F2937]">{point.label}</span>{" "}
                    {point.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div
            className="fade-up overflow-hidden"
            style={{ animationDelay: ".2s" }}
          >
            <img
              src="/zoikotime/workforce-overview/worker-transparency.png"
              alt="Team discussing worker record transparency"
              className="w-full object-cover"
            />
          </div>
        </div>
      </section>
    </>
  );
}
