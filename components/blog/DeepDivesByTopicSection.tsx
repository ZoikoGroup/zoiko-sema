"use client"
import { MessageSquare, Sparkles, Globe, Wind, Sparkle, LucideIcon } from "lucide-react";

interface TopicCard {
  icon: LucideIcon;
  title: string;
  description: string;
  count: string;
}

const primaryCards: TopicCard[] = [
  {
    icon: MessageSquare,
    title: "Business Communication",
    description: "Strategies for internal alignment and external collaboration.",
    count: "24 Articles",
  },
  {
    icon: Sparkles,
    title: "AI Meeting Summaries",
    description: "Master the art of automated documentation and insight extraction with next-gen AI.",
    count: "18 Articles",
  },
];

const secondaryCards: TopicCard[] = [
  {
    icon: Globe,
    title: "Secure Collaboration",
    description: "Protocols and best practices for high-security enterprise environments.",
    count: "31 Articles",
  },
  {
    icon: Wind,
    title: "Remote Coordination",
    description: "Maintaining velocity in distributed teams across multiple time zones.",
    count: "15 Articles",
  },
];

export default function DeepDivesByTopicSection() {
  return (
    <section className="bg-[#F4F2FD] px-6 py-16 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 sm:text-[28px]">
            Deep Dives by Topic
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-gray-500">
            Explore our curated content libraries across the core pillars of modern
            enterprise communication.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-5 lg:grid-cols-[1fr_2fr]">
          {primaryCards.map(({ icon: Icon, title, description, count }, i) => (
            <div
              key={title}
              className={`relative overflow-hidden rounded-2xl border border-[#C6C6CD4D] bg-[#F7F9FB] p-6 ${
                i === 1 ? "flex items-center" : ""
              }`}
            >
              <div>
                <span className="mb-4 flex h-9 w-9 items-center justify-center rounded-lg bg-[#0058BE1A] text-[#4F63F0] shadow-sm">
                  <Icon size={16} strokeWidth={2} />
                </span>
                <h3 className="text-sm font-semibold text-gray-900">{title}</h3>
                <p className="mt-2 max-w-xs text-xs leading-relaxed text-gray-500">
                  {description}
                </p>
                <p className="mt-3 text-xs font-semibold text-[#3B5BFF]">{count}</p>
              </div>

              {i === 1 && (
                <div className="pointer-events-none absolute right-6 top-1/2 hidden -translate-y-1/2 sm:block">
                  <Sparkle size={40} className="text-gray-300" />
                  <Sparkle size={22} className="ml-14 -mt-6 text-gray-300" />
                  <Sparkle size={16} className="ml-6 mt-2 text-gray-300" />
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2">
          {secondaryCards.map(({ icon: Icon, title, description, count }) => (
            <div key={title} className="rounded-2xl border border-[#C6C6CD4D] bg-[#F7F9FB] p-6">
              <span className="mb-4 flex h-9 w-9 items-center justify-center rounded-lg bg-[#0058BE1A] text-[#4F63F0] shadow-sm">
                <Icon size={16} strokeWidth={2} />
              </span>
              <h3 className="text-sm font-semibold text-gray-900">{title}</h3>
              <p className="mt-2 max-w-xs text-xs leading-relaxed text-gray-500">
                {description}
              </p>
              <p className="mt-3 text-xs font-semibold text-[#3B5BFF]">{count}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
