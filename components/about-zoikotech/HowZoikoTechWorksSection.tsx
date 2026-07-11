"use client"
import {
  Target,
  Lock,
  Sparkles,
  Building2,
  TrendingUp,
  LucideIcon,
} from "lucide-react";

interface Principle {
  count:number;
  icon: LucideIcon;
  title: string;
  description: string;
}

const principles: Principle[] = [
  {
    count:1,
    icon: Target,
    title: "Product clarity",
    description: "Clear positioning through product pages, not vague claims.",
  },
  {
    count:2,
    icon: Lock,
    title: "Secure context",
    description: "Sensitive workflows use governed spaces and admin controls.",
  },
  {
    count:3,
    icon: Sparkles,
    title: "Governed AI",
    description: "AI features are reviewed, explainable, and admin-configurable.",
  },
  {
    count:4,
    icon: Building2,
    title: "Enterprise trust",
    description: "Support, review, security, and status verified for larger deployments.",
  },
  {
    count:5,
    icon: TrendingUp,
    title: "Growth routes",
    description: "Clear routes to careers, partners, updates, and contacts.",
  },
];

export default function HowZoikoTechWorksSection() {
  return (
    <section className="bg-[#F3F2FD] px-6 py-16 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-6xl text-center">
        <p className="text-xs font-semibold uppercase tracking-[2px] text-[#4F63F0]">
          Operating principles
        </p>
        <h2 className="mx-auto max-w-xl text-3xl font-extrabold leading-snug text-gray-900 sm:text-[32px]">
          How Zoiko Tech works
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-gray-500">
          Principles shown through product, workflows, and trust routes — not broad slogans.
        </p>

        <div className="mt-10 grid grid-cols-1 gap-5 text-left sm:grid-cols-2 lg:grid-cols-5">
          {principles.map(({ icon: Icon,count, title, description }) => (
            <div
              key={title}
              className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm"
            >
              <span className="text-[#8B83F2] font-extrabold text-[13px] leading-5">0{count}</span>
              <span className="mb-3 mt-2 flex h-9 w-9 items-center justify-center rounded-lg bg-[#EDEBFB] text-[#4F63F0]">
                <Icon size={16} strokeWidth={2} />
              </span>
              <h3 className="text-sm font-semibold text-gray-900">{title}</h3>
              <p className="mt-1.5 text-xs leading-relaxed text-gray-500">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
