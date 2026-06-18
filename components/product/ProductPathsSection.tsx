"use client";

import Link from "next/link";

const solutions = [
  {
    title: "Individuals",
    desc: "Messaging, audio calls, video calls, groups and personal conversation memory.",
    cta: "View Individual",
    href: "/solutions/individuals",
  },
  {
    title: "Teams",
    desc: "Channels, spaces, calls, meetings, summaries, action items and shared context.",
    cta: "View Teams",
    href: "/solutions/teams",
  },
  {
    title: "Businesses",
    desc: "Admin controls, security, governance, compliance routes and ZoikoTime readiness.",
    cta: "View Business",
    href: "/solutions/business",
  },
  {
    title: "Freelancers & Consultants",
    desc: "Client calls, meeting notes, follow-ups and project communication.",
    cta: "View Freelancer",
    href: "/solutions/freelancers",
  },
  {
    title: "Regulated Teams",
    desc: "Controlled access, retention, exports, responsible AI and audit-ready communication.",
    cta: "View Regulated",
    href: "/solutions/regulated",
  },
  {
    title: "ZoikoTime Customers",
    desc: "Connect Sema communication signals to verified workforce truth.",
    cta: "View ZoikoTime",
    href: "/solutions/zoikotime-customers",
  },
];

const useCases = [
  {
    title: "Secure team communication",
    desc: "Keep conversations organized by project, function, client or topic.",
    cta: "Explore",
    href: "/use-cases/secure-team-communication",
  },
  {
    title: "AI meeting summaries",
    desc: "Auto-summarize meetings and extract decisions, owners and next steps.",
    cta: "Explore",
    href: "/use-cases/ai-meeting-summaries",
  },
  {
    title: "Client calls & consultations",
    desc: "Support professional calls with notes, summaries and follow-ups.",
    cta: "Explore",
    href: "/use-cases/client-calls",
  },
  {
    title: "Remote & hybrid work",
    desc: "Keep distributed teams aligned across time zones and patterns.",
    cta: "Explore",
    href: "/use-cases/remote-hybrid-work",
  },
  {
    title: "Project collaboration",
    desc: "Connect messages, meetings, files and decisions around shared work.",
    cta: "Explore",
    href: "/use-cases/project-collaboration",
  },
  {
    title: "Workforce truth (ZoikoTime)",
    desc: "Connect Sema with ZoikoTime for verified work context.",
    cta: "Explore",
    href: "/use-cases/workforce-truth",
  },
];

function CardGrid({ cards }: { cards: typeof solutions }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {cards.map((card) => (
        <div
          key={card.title}
          className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300"
        >
          <h3 className="text-lg font-bold text-gray-900 mb-3">
            {card.title}
          </h3>

          <p className="text-sm text-gray-600 leading-7 mb-6">
            {card.desc}
          </p>

          <Link
            href={card.href}
            className="text-indigo-600 font-semibold hover:text-indigo-800"
          >
            {card.cta} →
          </Link>
        </div>
      ))}
    </div>
  );
}

export default function ProductPathsSection() {
  return (
    <section
      className="py-24"
      style={{ backgroundColor: "#EAEEFC" }}
    >
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#15131F] mb-5">
            Choose the path that fits how you communicate
          </h2>

          <p className="max-w-3xl mx-auto text-[#5C5870] leading-8">
            Solutions package Sema by audience. Use Cases describe practical
            jobs. Both routes deepen on dedicated pages.
          </p>
        </div>

        <div className="text-center mb-8">
          <span className="text-xs uppercase tracking-[0.25em] font-bold text-indigo-600">
            Solutions · By Audience
          </span>
        </div>

        <CardGrid cards={solutions} />

        <div className="text-center mt-20 mb-8">
          <span className="text-xs uppercase tracking-[0.25em] font-bold text-indigo-600">
            Use Cases · By Job-To-Be-Done
          </span>
        </div>

        <CardGrid cards={useCases} />
      </div>
    </section>
  );
}