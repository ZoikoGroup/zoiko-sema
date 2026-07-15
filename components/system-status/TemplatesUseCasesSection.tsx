"use client"
import { LayoutGrid, MessageSquare, Settings, Briefcase, ShieldCheck, FileText, LucideIcon, FileIcon } from "lucide-react";

interface TemplateCategory {
  icon: LucideIcon;
  iconBg: string;
  iconColor: string;
  title: string;
  items: string[];
  action: string;
  actionColor: string;
}

const categories: TemplateCategory[] = [
  {
    icon: LayoutGrid,
    iconBg: "bg-[#F1EEFE]",
    iconColor: "text-[#7C5CFC]",
    title: "Project & planning",
    items: ["Project brief", "Launch plan", "Risk review", "Status report"],
    action: "Browse Project templates",
    actionColor: "text-[#7C5CFC]",
  },
  {
    icon: MessageSquare,
    iconBg: "bg-[#E9F1FE]",
    iconColor: "text-[#3B82F6]",
    title: "Meetings & decisions",
    items: ["Agenda", "Decision record", "Retrospective", "Call follow-up"],
    action: "Browse Meetings templates",
    actionColor: "text-[#3B82F6]",
  },
  {
    icon: Settings,
    iconBg: "bg-[#E8F7EF]",
    iconColor: "text-[#22A35F]",
    title: "Operations",
    items: ["SOP", "Runbook", "Incident review", "Handoff"],
    action: "Browse Operations templates",
    actionColor: "text-[#22A35F]",
  },
  {
    icon: Briefcase,
    iconBg: "bg-[#FDF1E5]",
    iconColor: "text-[#E08A2E]",
    title: "Client work",
    items: ["Proposal", "Discovery brief", "Project update", "Review log"],
    action: "Browse Client work templates",
    actionColor: "text-[#E08A2E]",
  },
  {
    icon: ShieldCheck,
    iconBg: "bg-[#E9F1FE]",
    iconColor: "text-[#3B82F6]",
    title: "Governance",
    items: ["Policy", "Evidence index", "Assessment", "Approval record"],
    action: "Browse Governance templates",
    actionColor: "text-[#3B82F6]",
  },
  {
    icon: FileText,
    iconBg: "bg-[#FDECF1]",
    iconColor: "text-[#E24E85]",
    title: "Personal",
    items: ["Research note", "Plan", "Reading summary", "Personal project"],
    action: "Browse Personal templates",
    actionColor: "text-[#E24E85]",
  },
];

export default function TemplatesUseCasesSection() {
  return (
    <section className="bg-[#E8F2FD] px-6 py-20 sm:px-10 lg:px-16">
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(18px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .fade-in-item {
          opacity: 0;
          animation: fadeInUp 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `}</style>

      <div className="mx-auto max-w-6xl text-center">
        <p
          className="fade-in-item text-xs font-bold uppercase tracking-[2px] text-[#6C5CE7]"
          style={{ animationDelay: "0ms" }}
        >
          Templates &amp; use cases
        </p>
        <h2
          className="fade-in-item mt-4 text-4xl font-extrabold leading-snug text-gray-900 sm:text-[42px]"
          style={{ animationDelay: "80ms" }}
        >
          Start from a trusted structure.
        </h2>
        <p
          className="fade-in-item mx-auto mt-4 max-w-xl text-[17px] leading-relaxed text-[#5B5D80]"
          style={{ animationDelay: "160ms" }}
        >
          Purpose-built templates for every team — each with required fields,
          policy rules, and ownership built in.
        </p>

        <div className="mt-12 grid grid-cols-1 gap-5 text-left sm:grid-cols-2 lg:grid-cols-3">
          {categories.map(
            ({ icon: Icon, iconBg, iconColor, title, items, action, actionColor }, i) => (
              <div
                key={title}
                className="fade-in-item flex flex-col rounded-2xl border border-gray-100 bg-white p-6 shadow-sm"
                style={{ animationDelay: `${240 + i * 80}ms` }}
              >
                <div className="mb-4 flex items-center gap-3">
                  <span
                    className={`flex h-9 w-9 items-center justify-center rounded-lg ${iconBg} ${iconColor}`}
                  >
                    <Icon size={16} strokeWidth={2} />
                  </span>
                  <h3 className="text-sm font-semibold text-gray-900">{title}</h3>
                </div>

                <ul className="flex flex-col gap-2.5">
                  {items.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-2.5 text-sm text-gray-600"
                    >
                      <FileIcon size={13} className="text-gray-300" />
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="mt-5 border-t border-gray-100 pt-4">
                  <button className={`text-xs font-extrabold cursor-pointer ${actionColor}`}>
                    {action} →
                  </button>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
}
