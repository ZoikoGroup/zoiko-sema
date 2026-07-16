import Link from "next/link";
import { MessageSquare, Video, FileText, SquareCheck, Search, BarChart3 } from "lucide-react";

const capabilities = [
  {
    title: "Team Messaging",
    description:
      "Channels, threads, mentions, reactions, rich attachments, decision pinning, and message-to-task actions.",
    icon: MessageSquare,
    href: "/messaging",
    cta: "Open messaging",
    featured: true,
  },
  {
    title: "Meetings and Huddles",
    description:
      "Start or schedule secure meetings from the workspace and return outcomes to the source channel.",
    icon: Video,
    href: "/video-meetings",
    cta: "Open meetings",
  },
  {
    title: "Files and Documents",
    description:
      "Share, version, review, approve, and connect content to messages, tasks, and decisions.",
    icon: FileText,
    href: "/documents",
    cta: "Open documents",
  },
  {
    title: "Tasks and Follow-Ups",
    description:
      "Assign owners, due dates, priorities, dependencies, reminders, and completion evidence.",
    icon: SquareCheck,
    href: "/tasks",
    cta: "Open tasks",
  },
  {
    title: "Search and History",
    description:
      "Find messages, meetings, decisions, tasks, and documents within your permission boundaries.",
    icon: Search,
    href: "/search",
    cta: "Explore search",
  },
  {
    title: "Analytics and Adoption",
    description:
      "Workspace health, adoption milestones, and retention signals — without content surveillance.",
    icon: BarChart3,
    href: "/insights",
    cta: "View analytics",
  },
];

export default function CoreCapabilities() {
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

      <section id="core-capabilities" className="bg-white px-6 py-20 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-6xl">
          <div className="fade-up text-center">
            <span className="inline-block rounded-full bg-[#E7E9FB] px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-[#4F63F0]">
              Core Capabilities
            </span>

            <h2 className="mt-4 text-3xl font-bold text-[#1F2937] md:text-[38px]">
              Everything teams need. One governed workspace.
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-[17px] leading-8 text-[#6B7280]">
              Built-in connection between messaging, meetings, channels,
              tasks, documents, AI, and search — not bolted-on integrations.
            </p>
          </div>

          <div className="mt-14 grid gap-6 lg:grid-cols-[1.1fr_.9fr]">
            <div className="grid gap-5 sm:grid-cols-2">
              {capabilities.map((item, index) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className={`fade-up rounded-2xl p-6 shadow-sm transition duration-300 hover:-translate-y-1.5 hover:shadow-lg ${
                      item.featured
                        ? "bg-[#11163C]"
                        : "border border-[#ECECF4] bg-[#F8F7FD]"
                    }`}
                    style={{ animationDelay: `${index * 0.08}s` }}
                  >
                    <div
                      className={`flex h-10 w-10 items-center justify-center rounded-lg ${
                        item.featured ? "bg-white/10" : "bg-[#EEF2FF]"
                      }`}
                    >
                      <Icon
                        size={18}
                        className={item.featured ? "text-white" : "text-[#4F63F0]"}
                        strokeWidth={2}
                      />
                    </div>

                    <h3
                      className={`mt-5 text-base font-semibold ${
                        item.featured ? "text-white" : "text-[#1F2937]"
                      }`}
                    >
                      {item.title}
                    </h3>

                    <p
                      className={`mt-2.5 text-[14px] leading-6 ${
                        item.featured ? "text-[#C8C8C8]" : "text-[#6B7280]"
                      }`}
                    >
                      {item.description}
                    </p>

                    <Link
                      href={item.href}
                      className={`mt-4 inline-flex items-center gap-1.5 text-sm font-semibold transition ${
                        item.featured
                          ? "text-[#8FA3FF] hover:text-white"
                          : "text-[#4F63F0] hover:text-[#3348C9]"
                      }`}
                    >
                      {item.cta}
                      <span aria-hidden>→</span>
                    </Link>
                  </div>
                );
              })}
            </div>

            <div
              className="fade-up overflow-hidden rounded-2xl shadow-lg"
              style={{ animationDelay: ".3s" }}
            >
              <img
                src="/use-cases/team-collaboration/core-capabilities.webp"
                alt="Team collaborating in a governed workspace"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
