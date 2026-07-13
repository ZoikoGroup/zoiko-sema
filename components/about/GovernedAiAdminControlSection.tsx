"use client"
import {
  Sparkles,
  UserCog,
  Lock,
  ListChecks,
  Archive,
  Building2,
  LucideIcon,
} from "lucide-react";

interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    icon: Sparkles,
    title: "AI review",
    description: "Summaries are reviewed before release or sharing.",
  },
  {
    icon: UserCog,
    title: "Role permissions",
    description: "Admins control who can access, store, export, or manage data.",
  },
  {
    icon: Lock,
    title: "Sensitive spaces",
    description: "Sensitive workflows can require tighter controls or restricted AI.",
  },
  {
    icon: ListChecks,
    title: "Audit events",
    description: "Important actions are trackable for admins when supported.",
  },
  {
    icon: Archive,
    title: "Retention",
    description: "Retention and export behavior follows workspace policies.",
  },
  {
    icon: Building2,
    title: "Enterprise controls",
    description: "SSO, MFA, SCIM, and policy settings for controlled, scalable deployment.",
  },
];

export default function GovernedAiAdminControlSection() {
  return (
    <section className="bg-[#0B1330] px-6 py-16 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-6xl text-center">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[2px] text-[#7C93FF]">
          Governed AI &amp; admin control
        </p>
        <h2 className="mx-auto max-w-xl text-3xl font-bold leading-snug text-white sm:text-[32px]">
          AI that&apos;s visible, reviewable, and configurable
        </h2>
        <p className="mx-auto mt-4 max-w-160 text-sm leading-relaxed text-[#AEB7CC]">
          What makes Sema different from a generic chat or meeting tool: AI-supported summaries
          and follow-ups are designed to be reviewed and controlled — never hidden or unaccountable.
        </p>

        <div className="mt-10 grid grid-cols-1 items-center gap-6 text-left lg:grid-cols-2">
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {features.map(({ icon: Icon, title, description }) => (
              <div
                key={title}
                className="rounded-xl border border-white/10 bg-white/5 p-5"
              >
                <div className="mb-3 flex h-8 w-8 items-center justify-center rounded-lg bg-[#4F63F0]/15 text-[#7C93FF]">
                  <Icon size={16} strokeWidth={2} />
                </div>
                <h3 className="text-sm font-semibold text-white">{title}</h3>
                <p className="mt-1.5 text-xs leading-relaxed text-[#9AA4BD]">
                  {description}
                </p>
              </div>
            ))}
          </div>

          <div className="overflow-hidden rounded-2xl">
            <img
              src="/about/ai.png"
              alt="Team member reviewing an AI-supported video meeting"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
