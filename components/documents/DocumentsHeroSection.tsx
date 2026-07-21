"use client"
import { ArrowRight, Users, GitBranch, Lock, Link2, Zap, ShieldCheck, LucideIcon, Search, Bell } from "lucide-react";

interface Feature {
  icon: LucideIcon;
  iconBg: string;
  iconColor: string;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    icon: Users,
    iconBg: "bg-[#F1EEFE]",
    iconColor: "text-[#7C5CFC]",
    title: "Collaborative authoring",
    description:
      "Write together with structured content, comments, suggestions, mentions, and clear ownership.",
  },
  {
    icon: GitBranch,
    iconBg: "bg-[#E9F1FE]",
    iconColor: "text-[#3B82F6]",
    title: "Version history",
    description:
      "Compare meaningful changes, name releases, and restore safely without silent overwrites.",
  },
  {
    icon: Lock,
    iconBg: "bg-[#E8F7EF]",
    iconColor: "text-[#22A35F]",
    title: "Permissions",
    description: "Control who can view, comment, edit, approve, download, or share.",
  },
  {
    icon: Link2,
    iconBg: "bg-[#FDF1E5]",
    iconColor: "text-[#E08A2E]",
    title: "Connected context",
    description:
      "Link documents to meetings, channels, decisions, tasks, files, Mail, Calendar, and search.",
  },
  {
    icon: Zap,
    iconBg: "bg-[#EEF0FE]",
    iconColor: "text-[#4F63F0]",
    title: "Governed AI",
    description:
      "Draft, summarize, and transform content with visible sources, human review, and policy controls.",
  },
  {
    icon: ShieldCheck,
    iconBg: "bg-[#F1EEFE]",
    iconColor: "text-[#7C5CFC]",
    title: "Enterprise governance",
    description:
      "Apply retention, legal hold, audit, export, classification, and external-access rules.",
  },
];

export default function DocumentsHeroSection() {
  return (
    <>
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

      <section className="bg-[#11163C] px-6 py-20 sm:px-10 lg:px-16 lg:py-28">
        <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-14 lg:grid-cols-2">
          <div>
            <span
              className="fade-in-item mb-6 inline-flex items-center gap-2 rounded-full border border-[#A98CF059] bg-[#6C4FE033] px-4 py-1.5 text-xs font-semibold uppercase tracking-[1.5px] text-[#A98CF0]"
              style={{ animationDelay: "0ms" }}
            >
              <span className="h-1.5 w-1.5 rounded-full bg-[#A98CF0] border border-[#A98CF059]" />
              Documents
            </span>

            <h1
              className="fade-in-item text-4xl font-extrabold leading-[1.08] text-white md:text-[52px]"
              style={{ animationDelay: "80ms" }}
            >
              Documents that stay{" "}
              <span className="bg-gradient-to-r from-[#5B7FFF] to-[#3B5BFF] bg-clip-text text-transparent">
                connected to the work.
              </span>
            </h1>

            <p
              className="fade-in-item mt-6 max-w-lg text-base leading-relaxed text-[#B9BEDA]"
              style={{ animationDelay: "160ms" }}
            >
              Create, review, approve, and preserve living documents connected to
              conversations, meetings, decisions, tasks, files, and workspace
              governance.
            </p>

            <div
              className="fade-in-item mt-8 flex flex-wrap items-center gap-3"
              style={{ animationDelay: "240ms" }}
            >
              <a href="/start-free">
              <button className="flex items-center gap-2 rounded-full bg-[#4F63F0] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[#3E51DE]">
                Start free
                <ArrowRight size={16} />
              </button></a>
              <a href="/get-a-demo">
              <button className="rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-[#11163C] transition hover:bg-gray-100">
                Get a demo
              </button></a>
            </div>

            <p
              className="fade-in-item mt-6 max-w-110 text-xs leading-relaxed text-[#6B7093]"
              style={{ animationDelay: "320ms" }}
            >
              Versioned · Permission-aware · Human-reviewed · Governed for modern teams
            </p>
          </div>

          <div
            className="fade-in-item overflow-hidden rounded-2xl border border-white/10 shadow-2xl"
            style={{ animationDelay: "200ms" }}
          >
            <div className="flex items-center gap-4 bg-white px-4 py-3">
              <div className="flex items-center gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F57]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#FEBC2E]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#28C840]" />
              </div>
              <div className="flex flex-1 items-center gap-2 rounded-lg bg-gray-100 px-3 py-1.5">
                <Search size={13} className="text-gray-400" />
                <span className="text-xs text-gray-400">Search documents...</span>
              </div>
              <Bell size={16} className="text-gray-400" />
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#4F63F0] text-[10px] font-semibold text-white">
                AC
              </span>
            </div>
            <img src="/system-status/hero.png" alt="image" className="h-full w-full object-cover" />
          </div>
        </div>
      </section>

      <section className="bg-[#EAF1FE] px-6 py-14 sm:px-10 lg:px-16">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
          {features.map(({ icon: Icon, iconBg, iconColor, title, description }, i) => (
            <div
              key={title}
              className="fade-in-item rounded-2xl border border-white/60 bg-white p-5 shadow-sm"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <span
                className={`mb-4 flex h-10 w-10 items-center justify-center rounded-xl ${iconBg} ${iconColor}`}
              >
                <Icon size={18} strokeWidth={2} />
              </span>
              <h3 className="text-sm font-semibold leading-snug text-gray-900">
                {title}
              </h3>
              <p className="mt-2 text-xs w-35 leading-relaxed text-[#5B5D80]">
                {description}
              </p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
