import { Video, MessagesSquare, Sparkles, UserCheck, ClipboardCheck, Send, RefreshCcw } from "lucide-react";

const steps = [
  { label: "Meeting", icon: Video },
  { label: "Transcript", icon: MessagesSquare },
  { label: "AI Draft", icon: Sparkles, active: true },
  { label: "Review", icon: UserCheck },
  { label: "Commitments", icon: ClipboardCheck },
  { label: "Follow-up", icon: Send },
  { label: "CRM Sync", icon: RefreshCcw },
];

export default function FlowOfAccountability() {
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
          <h2 className="fade-up text-center text-3xl font-bold text-[#1F2937] md:text-[36px]">
            The Flow of Accountability
          </h2>

          <div className="mt-12 flex flex-wrap items-center justify-center gap-2">
            {steps.map((step, index) => {
              const Icon = step.icon;

              return (
                <div key={step.label} className="flex items-center gap-2">
                  <div
                    className={`fade-up flex flex-col items-center gap-2 rounded-xl border px-5 py-4 transition duration-300 hover:-translate-y-1 ${
                      step.active
                        ? "border-[#4F63F0] bg-[#EEF2FF]"
                        : "border-[#E5E7EB] bg-white hover:shadow-md"
                    }`}
                    style={{ animationDelay: `${index * 0.07}s` }}
                  >
                    <Icon
                      size={18}
                      className={step.active ? "text-[#4F63F0]" : "text-[#6B7280]"}
                      strokeWidth={2}
                    />
                    <span
                      className={`text-[11px] font-bold uppercase tracking-wide ${
                        step.active ? "text-[#4F63F0]" : "text-[#4B5563]"
                      }`}
                    >
                      {step.label}
                    </span>
                  </div>

                  {index !== steps.length - 1 && (
                    <span className="hidden text-[#9CA3AF] sm:inline" aria-hidden>
                      →
                    </span>
                  )}
                </div>
              );
            })}
          </div>

          <div
            className="fade-up mt-12 overflow-hidden rounded-2xl  transition duration-300 hover:-translate-y-1"
            style={{ animationDelay: ".3s" }}
          >
            <img
              src="/use-cases/sales-enablement/flow-workspace.png"
              alt="Sales deal room workspace"
              className="w-full object-cover"
            />
          </div>
        </div>
      </section>
    </>
  );
}
