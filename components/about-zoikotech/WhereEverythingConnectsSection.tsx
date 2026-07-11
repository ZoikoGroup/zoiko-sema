"use client"
import {
  MessageSquare,
  Clock,
  ShieldCheck,
  Code2,
  Handshake,
  Briefcase,
  Newspaper,
  Mail,
  ArrowRight,
  LucideIcon,
} from "lucide-react";

interface EcosystemCard {
  icon: LucideIcon;
  title: string;
  description: string;
  action: string;
  featured?: boolean;
  iconBg: string;
  iconColor: string;
}

const cards: EcosystemCard[] = [
  {
    icon: MessageSquare,
    title: "Zoiko Sema",
    description:
      "Communication, messaging, AI summaries, spaces, chat, and admin controls.",
    action: "Explore Sema",
    featured: true,
    iconBg: "bg-white/10",
    iconColor: "text-white",
  },
  {
    icon: Clock,
    title: "ZoikoTime",
    description:
      "Centralized workforce and customer context linked where relevant to Sema workflows.",
    action: "Learn about ZoikoTime",
    iconBg: "bg-linear-to-r from-[#22C3B6] to-[#0FA9A0]",
    iconColor: "text-white",
  },
  {
    icon: ShieldCheck,
    title: "Trust Center",
    description:
      "Security, transparency, documentation, and system status.",
    action: "Visit Trust Center",
    iconBg: "bg-linear-to-r from-[#5B52EA] to-[#3D33C9]",
    iconColor: "text-white",
  },
  {
    icon: Code2,
    title: "Developer Docs",
    description:
      "API, integration, and administrative documentation resources.",
    action: "View Developer Docs",
    iconBg: "bg-linear-to-r from-[#4A7CFF] to-[#2A5BDB]",
    iconColor: "text-white",
  },
  {
    icon: Handshake,
    title: "Partners",
    description:
      "Partner and reseller collaboration routes.",
    action: "Explore Partners",
    iconBg: "bg-linear-to-r from-[#8B83F2] to-[#5B52EA]",
    iconColor: "text-white",
  },
  {
    icon: Briefcase,
    title: "Careers",
    description:
      "Talent openings, engineering, and company culture.",
    action: "View Careers",
    iconBg: "bg-linear-to-r from-[#1FAF6B] to-[#0E7A4A]",
    iconColor: "text-white",
  },
  {
    icon: Newspaper,
    title: "Press",
    description:
      "Company updates, media resources, and press inquiries.",
    action: "Contact Press",
    iconBg: "bg-linear-to-r from-[#C98A1A] to-[#9A6A12]",
    iconColor: "text-white",
  },
  {
    icon: Mail,
    title: "Contact",
    description:
      "General company inquiries and departmental contact routes.",
    action: "Contact Team",
    iconBg: "bg-linear-to-r from-[#3A4A6B] to-[#1F2A44]",
    iconColor: "text-white",
  },
];

export default function WhereEverythingConnectsSection() {
  return (
    <section className="bg-white px-6 py-16 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-6xl text-center">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[2px] text-[#4F63F0]">
          Product ecosystem
        </p>
        <h2 className="mx-auto max-w-xl text-3xl font-extrabold leading-snug text-gray-900 sm:text-[32px]">
          Where everything connects
        </h2>
        <p className="mx-auto mt-4 max-w-150 text-sm leading-relaxed text-gray-500">
          The product, the workforce-context tool, trust, developer tools, and the ways
          partners, candidates, and press engage.
        </p>

        <div className="mt-10 grid grid-cols-1 gap-5 text-left sm:grid-cols-2 lg:grid-cols-4">
          {cards.map(({ icon: Icon, title, description, action, featured, iconBg, iconColor }) => (
            <div
              key={title}
              className={
                featured
                  ? "rounded-xl bg-[#0B1330] p-6 shadow-sm"
                  : "rounded-xl border border-gray-200 bg-white p-6 shadow-sm"
              }
            >
              <span className={`mb-4 flex h-9 w-9 items-center justify-center rounded-lg ${iconBg} ${iconColor}`}>
                <Icon size={16} strokeWidth={2} />
              </span>
              <h3 className={`text-sm font-semibold ${featured ? "text-white" : "text-gray-900"}`}>
                {title}
              </h3>
              <p className={`mt-2 text-xs leading-relaxed ${featured ? "text-[#AEB7CC]" : "text-gray-500"}`}>
                {description}
              </p>
              <button
                className={`mt-4 flex items-center gap-1 text-xs font-semibold ${
                  featured ? "text-[#7C93FF] hover:text-white" : "text-[#4F63F0] hover:text-[#3E51DE]"
                }`}
              >
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
