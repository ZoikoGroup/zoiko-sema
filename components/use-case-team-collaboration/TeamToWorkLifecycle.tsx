import { MessageSquare, Video, Lock, SquareCheck, FileText, Eye } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Discuss",
    description:
      "Members exchange messages, files, and updates in a scoped channel.",
    icon: MessageSquare,
  },
  {
    number: "02",
    title: "Meet",
    description: "Start or schedule a meeting when synchronous discussion is needed.",
    icon: Video,
  },
  {
    number: "03",
    title: "Decide",
    description: "A person confirms the decision. AI may suggest but does not silently finalize.",
    icon: Lock,
  },
  {
    number: "04",
    title: "Assign",
    description: "Create owned work with due date, priority, and dependencies.",
    icon: SquareCheck,
  },
  {
    number: "05",
    title: "Deliver",
    description: "Task, document, or approval produces a reviewable output.",
    icon: FileText,
  },
  {
    number: "06",
    title: "Review",
    description: "Inspect outcome, history, changes, and policy events in the audit trail.",
    icon: Eye,
  },
];

export default function TeamToWorkLifecycle() {
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

      <section className="bg-[#0D1230] px-6 py-20 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-6xl">
          <div className="fade-up text-center">
            <span className="inline-block rounded-full bg-[#232B57] px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-[#A78BFA]">
              Team-to-Work Lifecycle
            </span>

            <h2 className="mt-4 text-3xl font-bold text-white md:text-[38px]">
              From discussion to confirmed, owned outcome.
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-[17px] leading-8 text-[#9AA3C0]">
              Every stage is traceable, permission-bound, and linked to its
              source thread.
            </p>
          </div>

          <div className="mt-14 grid grid-cols-2 gap-y-10 md:grid-cols-6 md:gap-x-4">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isActive = index === 0;

              return (
                <div
                  key={step.number}
                  className="fade-up flex flex-col items-center text-center"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div
                    className={`flex h-14 w-14 items-center justify-center rounded-2xl transition duration-300 hover:-translate-y-1 ${
                      isActive ? "bg-[#4F63F0]" : "bg-white/5"
                    }`}
                  >
                    <Icon
                      size={22}
                      className={isActive ? "text-white" : "text-[#C8C8C8]"}
                      strokeWidth={1.75}
                    />
                  </div>

                  <span className="mt-4 text-xs font-bold text-[#2ED47A]">
                    {step.number}
                  </span>

                  <h3 className="mt-1 text-base font-semibold text-white">
                    {step.title}
                  </h3>

                  <p className="mx-auto mt-2 max-w-[150px] text-[13px] leading-6 text-[#9AA3C0]">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
