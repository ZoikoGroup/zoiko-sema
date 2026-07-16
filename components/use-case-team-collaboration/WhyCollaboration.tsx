import { Users, MessageSquare, ShieldCheck } from "lucide-react";

const items = [
  {
    title: "Alignment without constant meetings",
    description:
      "Persistent channels, pinned decisions, and owned tasks mean every team member knows what matters — without scheduling yet another sync.",
    icon: Users,
  },
  {
    title: "Context that doesn't disappear",
    description:
      "Conversations, meeting outcomes, decisions, and files live in one searchable, permission-bound workspace — not scattered across inboxes and chat apps.",
    icon: MessageSquare,
  },
  {
    title: "Governed growth, not ungoverned sprawl",
    description:
      "Role-based access, policy inheritance, guest controls, and audit visibility mean your workspace scales without losing control.",
    icon: ShieldCheck,
  },
];

export default function WhyCollaboration() {
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

      <section className="bg-[#F8F7FD] px-6 py-20 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-6xl">
          <div className="fade-up text-center">
            <span className="inline-block rounded-full bg-[#E7E9FB] px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-[#4F63F0]">
              Why Collaboration
            </span>

            <h2 className="mt-4 text-3xl font-bold text-[#1F2937] md:text-[38px]">
              Fragmented tools create fragmented teams.
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-[17px] leading-8 text-[#6B7280]">
              One governed workspace reduces friction, preserves context, and
              turns conversation into accountable work.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {items.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="fade-up rounded-2xl border border-[#ECECF4] bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-lg"
                  style={{ animationDelay: `${index * 0.12}s` }}
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#EEF2FF]">
                    <Icon size={18} className="text-[#4F63F0]" strokeWidth={2} />
                  </div>

                  <h3 className="mt-5 text-base font-semibold text-[#1F2937]">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-[15px] leading-7 text-[#6B7280]">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>

          <div
            className="fade-up mt-8 overflow-hidden rounded-2xl shadow-lg"
            style={{ animationDelay: ".35s" }}
          >
            <img
              src="/use-cases/team-collaboration/why-collaboration.webp"
              alt="Team collaborating around a workspace board"
              className="h-72 w-full object-cover"
            />
          </div>
        </div>
      </section>
    </>
  );
}
