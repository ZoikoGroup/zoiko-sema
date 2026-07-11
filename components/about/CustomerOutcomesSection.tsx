"use client"
import {
  Link2,
  CheckSquare,
  Users,
  ShieldCheck,
  Lock,
  Play,
  LucideIcon,
} from "lucide-react";

interface Outcome {
  icon: LucideIcon;
  title: string;
  description: string;
}

const outcomes: Outcome[] = [
  {
    icon: Link2,
    title: "Less lost context",
    description: "Messages, meetings, summaries, and follow-ups stay connected.",
  },
  {
    icon: CheckSquare,
    title: "Clearer follow-ups",
    description: "Action items and decisions can be reviewed and assigned.",
  },
  {
    icon: Users,
    title: "Better coordination",
    description: "Teams can work across remote, client, and project spaces.",
  },
  {
    icon: ShieldCheck,
    title: "More controlled collaboration",
    description: "Admins can govern roles, access, AI retention, and sensitive workflows.",
  },
  {
    icon: Lock,
    title: "Trust-ready communication",
    description: "Security, privacy, policy, and status resources are easy to access.",
  },
];

export default function CustomerOutcomesSection() {
  return (
    <section className="bg-[#F3F2FD] px-6 py-16 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-6xl text-center">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[2px] text-[#4F63F0]">
          Customer outcomes
        </p>
        <h2 className="mx-auto max-w-xl text-3xl font-extrabold leading-10 text-gray-900 sm:text-[32px]">
          What teams gain with connected communication
        </h2>
        <p className="mx-auto mt-4 text-sm leading-6 text-gray-500">
          Directional outcomes that follow from keeping context connected — not unsupported metrics.
        </p>

        <div className="mt-10 grid grid-cols-1 gap-5 text-left sm:grid-cols-2 lg:grid-cols-3">
          {outcomes.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm"
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-[#EDEBFB] text-[#4F63F0]">
                <Icon size={18} strokeWidth={2} />
              </div>
              <h3 className="text-sm font-semibold text-gray-900">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-500">
                {description}
              </p>
            </div>
          ))}

          <div className="rounded-2xl bg-[#4F46E5] p-6 text-white shadow-sm">
            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-white/15">
              <Play size={18} strokeWidth={2} fill="white" />
            </div>
            <h3 className="text-sm font-semibold text-white">See it in real teams</h3>
            <p className="mt-2 text-sm leading-relaxed text-white/75">
              Read how teams get connected communication to work.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
