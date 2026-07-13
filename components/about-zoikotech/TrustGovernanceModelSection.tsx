"use client";
import {
  ShieldCheck,
  Lock,
  Sparkles,
  Activity,
  LayoutGrid,
  Bell,
  LucideIcon,
  ArrowRight
} from "lucide-react";

interface Card {
  icon: LucideIcon;
  title: string;
  description: string;
  action: string;
}

const cards: Card[] = [
  {
    icon: ShieldCheck,
    title: "Security",
    description:
      "Security as an operating priority — documented in the Trust Center rather than claimed on this page.",
    action: "Security Policy",
  },
  {
    icon: Lock,
    title: "Privacy",
    description: "Privacy notice, DPA, cookie policy, and privacy requests.",
    action: "Privacy Notice / DPA",
  },
  {
    icon: Sparkles,
    title: "AI governance",
    description: "AI features are governed, reviewable, and admin-controlled.",
    action: "AI Use Policy",
  },
  {
    icon: Activity,
    title: "System reliability",
    description: "Current service availability and incident transparency.",
    action: "View System Status",
  },
  {
    icon: LayoutGrid,
    title: "Admin governance",
    description: "Workspace-owner and admin control philosophy.",
    action: "Admin Console",
  },
  {
    icon: Bell,
    title: "Support",
    description: "How customers get help, from Help Center to Contact.",
    action: "Help Center / Contact",
  },
];

export default function TrustGovernanceModelSection() {
  return (
    <section className="bg-[#0B1330] px-6 py-16 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-6xl text-center">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[2px] text-[#7C93FF]">
          Trust &amp; governance model
        </p>
        <h2 className="mx-auto max-w-xl text-3xl font-bold leading-snug text-white sm:text-[32px]">
          Trust routes, not unsupported claims
        </h2>
        <p className="mx-auto mt-4 max-w-160 text-sm leading-relaxed text-[#AEB7CC]">
          Security, privacy, AI governance, reliability, admin control, and
          support — each links to the resource that documents it.
        </p>

        <div className="mt-10 grid grid-cols-1 gap-5 text-left sm:grid-cols-2 lg:grid-cols-3">
          {cards.map(({ icon: Icon, title, description, action }) => (
            <div
              key={title}
              className="rounded-xl border border-white/10 bg-white/5 p-6"
            >
              <span className="mb-4 flex h-9 w-9 items-center justify-center rounded-lg bg-[#4F63F0]/15 text-[#7C93FF]">
                <Icon size={16} strokeWidth={2} />
              </span>
              <h3 className="text-sm font-semibold text-white">{title}</h3>
              <p className="mt-2 text-[13px] leading-relaxed text-[#9AA4BD]">
                {description}
              </p>
              <button className="mt-4 flex items-center gap-1 text-xs font-semibold text-[#7C93FF] hover:text-white">
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
