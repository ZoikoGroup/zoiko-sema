import { Sparkles, Eye, CheckCircle2, FileText, CalendarPlus, ShieldCheck } from "lucide-react";

const steps = [
  {
    number: 1,
    title: "Draft summary",
    description: "AI drafts recap, decisions, actions, risks, and questions with source timestamps.",
    icon: Sparkles,
    color: "#7C3AED",
    bg: "#F3E8FF",
    status: "Pending review",
    statusColor: "#7C3AED",
  },
  {
    number: 2,
    title: "Human review",
    description: "Authorized reviewer edits facts, corrects commitments, and separates internal from customer-safe content.",
    icon: Eye,
    color: "#4F63F0",
    bg: "#EEF2FF",
    status: "Review required",
    statusColor: "#4F63F0",
  },
  {
    number: 3,
    title: "Confirm & assign",
    description: "Reviewer approves, rejects, or reopens. Action items are confirmed — never auto-assigned.",
    icon: CheckCircle2,
    color: "#16A34A",
    bg: "#DCFCE7",
    status: "Authorized",
    statusColor: "#16A34A",
  },
  {
    number: 4,
    title: "Save to space",
    description: "Approved summary saved to source channel, case, or project space with source links intact.",
    icon: FileText,
    color: "#D97706",
    bg: "#FEF3C7",
    status: "Linked",
    statusColor: "#D97706",
  },
  {
    number: 5,
    title: "Schedule follow-up",
    description: "Create follow-up meeting, tasks, or calendar item from the outcome record.",
    icon: CalendarPlus,
    color: "#7C3AED",
    bg: "#F3E8FF",
    status: "Optional",
    statusColor: "#7C3AED",
  },
  {
    number: 6,
    title: "Audit record",
    description: "Room creation, recording/AI use, review, corrections, exports, and follow-up actions are recorded.",
    icon: ShieldCheck,
    color: "#16A34A",
    bg: "#DCFCE7",
    status: "Permanent",
    statusColor: "#16A34A",
  },
];

export default function PostMeetingOutcomes() {
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
          <div className="fade-up text-center">
            <span className="inline-block rounded-full bg-[#EEF2FF] px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-[#4F63F0]">
              Post-Meeting Outcomes
            </span>

            <h2 className="mt-4 text-3xl font-bold text-[#1F2937] md:text-[36px]">
              From live room to governed follow-through.
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-[15px] leading-7 text-[#6B7280]">
              Every capture, review, confirmation, and follow-up is linked
              back to the source meeting — not stored in a disconnected notes
              app.
            </p>
          </div>

          <div className="relative mt-14 grid grid-cols-2 gap-y-10 md:grid-cols-3 lg:grid-cols-6">
            <div className="absolute left-[8%] right-[8%] top-6.5 hidden h-px bg-[#E5E7EB] md:block" />

            {steps.map((step, index) => {
              const Icon = step.icon;

              return (
                <div
                  key={step.title}
                  className="fade-up relative flex flex-col items-center text-center"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="relative">
                    <span
                      className="flex h-13 w-13 items-center justify-center rounded-2xl transition duration-300 hover:-translate-y-1"
                      style={{ backgroundColor: step.bg }}
                    >
                      <Icon size={20} style={{ color: step.color }} strokeWidth={2} />
                    </span>
                    <span
                      className="absolute -right-1.5 -top-1.5 flex h-5 w-5 items-center justify-center rounded-full text-[10px] font-bold text-white"
                      style={{ backgroundColor: step.color }}
                    >
                      {step.number}
                    </span>
                  </div>

                  <h3 className="mt-4 text-sm font-semibold text-[#1F2937]">{step.title}</h3>

                  <p className="mx-auto mt-2 max-w-37.5 text-xs leading-5 text-[#6B7280]">
                    {step.description}
                  </p>

                  <span
                    className="mt-3 rounded-full px-2.5 py-1 text-[10px] font-bold"
                    style={{ backgroundColor: step.bg, color: step.statusColor }}
                  >
                    {step.status}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
