"use client"
import {
  Briefcase,
  FolderKanban,
  Globe,
  UserRound,
  Settings,
  ShieldCheck,
  ArrowRight,
  LucideIcon,
} from "lucide-react";
import { useRouter } from "next/navigation";

interface Audience {
  icon: LucideIcon;
  title: string;
  description: string;
  action: string;
  link:string;
}

const audiences: Audience[] = [
  {
    icon: Briefcase,
    title: "Business teams",
    description:
      "Keep everyday communication organized and actionable with messaging, meetings, summaries, spaces, and follow-ups.",
    action: "View Business Communication",
    link:"/business-communication"
  },
  {
    icon: FolderKanban,
    title: "Project teams",
    description:
      "Track work across meetings, decisions, files, and timelines in dedicated project spaces.",
    action: "View Project Collaboration",
    link:"/project-collaboration"
  },
  {
    icon: Globe,
    title: "Remote teams",
    description:
      "Coordinate across time zones with meeting summaries, channels, spaces, and async updates.",
    action: "View Remote Coordination",
    link:"/remote-coordination"
  },
  {
    icon: UserRound,
    title: "Freelancers & client-facing",
    description:
      "Manage client work, follow-ups, and deliverables with client spaces and follow-up controls.",
    action: "View Freelancer Workflow",
    link:"/freelancer-workflow"
  },
  {
    icon: Settings,
    title: "Admins & IT",
    description:
      "Manage users, roles, access, security, IT settings, and integrations from the Admin Console.",
    action: "View Admin Console",
    link:"/admin-console"
  },
  {
    icon: ShieldCheck,
    title: "Regulated teams",
    description:
      "Keep communication moderated and governed with enterprise trails, retention, and audit records.",
    action: "View Regulated Workflow",
    link:"/regulated-workflow"
  },
];

export default function WhoSemaServesSection() {
  const router = useRouter();
  return (
    <section className="bg-[#F3F2FD] px-6 py-16 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-6xl text-center">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[2px] text-[#4F63F0]">
          Who Sema serves
        </p>
        <h2 className="mx-auto max-w-2xl text-3xl font-extrabold leading-10 text-gray-900 sm:text-[32px]">
          Built for the way different teams communicate
        </h2>
        <p className="mx-auto mt-4 max-w-160 text-sm leading-relaxed text-gray-500">
          From business teams to regulated operations, Sema adapts to how each team works —
          and routes to the right solution.
        </p>

        <div className="mt-10 grid grid-cols-1 gap-5 text-left sm:grid-cols-2 lg:grid-cols-3">
          {audiences.map(({ icon: Icon, title, description, action,link }) => (
            <div
              key={title}
              className="flex flex-col justify-between rounded-2xl bg-white p-6 shadow-sm"
            >
              <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-xl bg-[#EDEBFB] text-[#4F63F0]">
                <Icon size={18} strokeWidth={2} />
              </div>
              <h3 className="text-sm font-semibold text-gray-900">{title}</h3>
              <p className="mt-2 text-[13.5px] leading-relaxed text-[#5B627E]">
                {description}
              </p>
              <button onClick={()=>router.push(link)}
              className="mt-5 flex cursor-pointer items-center gap-1 text-xs font-semibold text-[#4F63F0] hover:text-[#3E51DE]">
                {action}
                <ArrowRight size={12} />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
