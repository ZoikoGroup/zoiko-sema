"use client"
import {
  GraduationCap,
  Code2,
  FileText,
  MessageCircle,
  ArrowRight,
  LucideIcon,
} from "lucide-react";

interface EngageCard {
  icon: LucideIcon;
  title: string;
  description: string;
  badge: string;
  action: string;
  bg: string;
}

const cards: EngageCard[] = [
  {
    icon: GraduationCap,
    title: "Careers",
    description: "Help build governed, enterprise-ready communication products.",
    badge: "Hiring status shown on Careers",
    action: "View openings",
    bg: "bg-gradient-to-r from-[#4F46E5] to-[#4338CA]",
  },
  {
    icon: Code2,
    title: "Partners",
    description: "Partner, integration, and ecosystem collaboration inquiries.",
    badge: "Developer Docs available",
    action: "Partner inquiry",
    bg: "bg-gradient-to-r from-[#0FA9A0] to-[#0B7A73]",
  },
  {
    icon: FileText,
    title: "Press",
    description: "Approved company boilerplate and media kit — routed through press contact.",
    badge: "Media kit on request",
    action: "Press contact",
    bg: "bg-gradient-to-r from-[#5A3FE0] to-[#4B3FD6]",
  },
  {
    icon: MessageCircle,
    title: "Contact",
    description: "General inquiries with a department selector to reach the right team.",
    badge: "Response route on submit",
    action: "Contact Team",
    bg: "bg-gradient-to-r from-[#1C2246] to-[#111746]",
  },
];

export default function EngageWithZoikoTechSection() {
  return (
    <section className="bg-[#F0EFFB] px-6 py-16 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-6xl text-center">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[2px] text-[#4F46E5]">
          Careers · Partners · Press · Contact
        </p>
        <h2 className="mx-auto max-w-xl text-3xl font-extrabold leading-snug text-gray-900 sm:text-[32px]">
          Engage with Zoiko Tech
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-gray-500">
          Pick the route that fits — each connects to the right team and next step.
        </p>

        <div className="mt-10 grid grid-cols-1 gap-5 text-left sm:grid-cols-2 lg:grid-cols-4">
          {cards.map(({ icon: Icon, title, description, badge, action, bg }) => (
            <div key={title} className={`flex flex-col rounded-2xl justify-center ${bg} p-6`}>
              <span className="mb-4 flex h-9 w-9 items-center justify-center rounded-lg bg-white/15 text-white">
                <Icon size={16} strokeWidth={2} />
              </span>
              <h3 className="text-sm font-semibold text-white">{title}</h3>
              <p className="mt-2 text-xs leading-relaxed max-w-51 text-white/70">
                {description}
              </p>

              <span className="mt-3 inline-block w-fit rounded-full bg-white/15 px-3 py-1 text-[10px] font-medium text-white/90">
                {badge}
              </span>

              <button className="mt-4 flex items-center gap-1 text-xs font-semibold text-white hover:text-white/80">
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
