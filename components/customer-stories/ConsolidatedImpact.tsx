import { Zap, Eye, Timer, ShieldCheck, BrainCircuit } from "lucide-react";

export default function ConsolidatedImpact() {
  const stats = [
    {
      icon: Zap,
      value: "82%",
      label: "Comm Speed",
    },
    {
      icon: Eye,
      value: "94%",
      label: "Decision Visibility",
    },
    {
      icon: Timer,
      value: "12h",
      label: "Weekly Time Saved",
    },
    {
      icon: ShieldCheck,
      value: "100%",
      label: "Security Confidence",
    },
    {
      icon: BrainCircuit,
      value: "78%",
      label: "AI Adoption",
    },
  ];

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

      <section className="bg-[#F5F4FE] px-6 py-20 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-6xl">
          <div
            className="fade-up text-center"
            style={{ animationDelay: "0.1s" }}
          >
            <h2 className="text-3xl font-bold text-[#111827]">
              Consolidated Impact
            </h2>

            <p className="mt-3 text-gray-500">
              Average outcomes measured across 500+ enterprise deployments
            </p>
          </div>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {stats.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.label}
                  className="fade-up rounded-2xl bg-white p-8 text-center shadow-sm"
                  style={{ animationDelay: `${0.2 + index * 0.1}s` }}
                >
                  <div className="mb-4 flex justify-center">
                    <Icon
                      size={22}
                      strokeWidth={2}
                      className="text-[#3457E8]"
                    />
                  </div>

                  <div className="text-3xl font-bold text-[#111827]">
                    {item.value}
                  </div>

                  <p className="mt-3 text-sm text-gray-500">{item.label}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
