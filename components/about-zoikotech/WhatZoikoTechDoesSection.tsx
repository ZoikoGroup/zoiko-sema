"use client"
import {
  LayoutGrid,
  MessageSquare,
  ShieldCheck,
  Users,
  ArrowRight,
  LucideIcon,
} from "lucide-react";
import { useRouter } from "next/navigation";

interface Card {
  icon: LucideIcon;
  title: string;
  description: string;
  action: string;
  link:string;
}

const cards: Card[] = [
  {
    icon: LayoutGrid,
    title: "What we build",
    description:
      "Technology products and services for secure work communication, collaboration, governed AI, admin controls, and connected workflows.",
    action: "Product Overview",
    link:"/product-overview"
  },
  {
    icon: MessageSquare,
    title: "Primary product",
    description:
      "Zoiko Sema is the business communication product within the Zoiko Tech ecosystem — messaging, meetings, AI summaries, spaces, and admin.",
    action: "About Sema",
    link:"/about"
  },
  {
    icon: ShieldCheck,
    title: "Operating focus",
    description:
      "Product clarity, secure context, explainable AI, admin governance, enterprise trust, and clear customer support routes.",
    action: "Trust Center",
    link:"/trust-center"
  },
  {
    icon: Users,
    title: "Who this page serves",
    description:
      "Prospects, customers, admins, enterprise buyers, partners, press, and candidates — each with a clear next step below.",
    action: "Choose a route",
    link:"/choose-a-route"
  },
];

export default function WhatZoikoTechDoesSection() {
  const router = useRouter();
  return (
    <section className="bg-white px-6 py-16 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-6xl text-center">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[2px] text-[#4F63F0]">
          Company snapshot
        </p>
        <h2 className="mx-auto max-w-xl text-3xl font-extrabold leading-snug text-gray-900 sm:text-[32px]">
          What Zoiko Tech does — in brief
        </h2>
        <p className="mx-auto mt-4 max-w-150 text-sm leading-relaxed text-gray-500">
          A product-focused technology organization. Here&apos;s what it builds, how it relates
          to Zoiko Sema, and where to go next.
        </p>

        <div className="mt-10 grid grid-cols-1 gap-5 text-left sm:grid-cols-2 lg:grid-cols-4">
          {cards.map(({ icon: Icon, title, description, action,link }) => (
            <div
              key={title}
              className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm"
            >
              <div className="mb-4 flex h-9 w-9 items-center justify-center rounded-lg bg-[#EDEBFB] text-[#4F63F0]">
                <Icon size={16} strokeWidth={2} />
              </div>
              <h3 className="text-sm font-semibold text-gray-900">{title}</h3>
              <p className="mt-2 text-xs leading-relaxed text-gray-500">
                {description}
              </p>
              <button onClick={()=>router.push(link)}
               className="mt-4 cursor-pointer flex items-center gap-1 text-xs font-semibold text-[#4F63F0] hover:text-[#3E51DE]">
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
