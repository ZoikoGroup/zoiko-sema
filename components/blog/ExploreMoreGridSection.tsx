"use client"
import {
  PlayCircle,
  HelpCircle,
  Bell,
  Code2,
  Activity,
  ShieldCheck,
  LucideIcon,
} from "lucide-react";

interface ResourceCard {
  icon: LucideIcon;
  title: string;
  description: string;
}

const cards: ResourceCard[] = [
  {
    icon: PlayCircle,
    title: "Customer Stories",
    description: "See how world-class teams use Zoiko Sema to transform their workflows.",
  },
  {
    icon: HelpCircle,
    title: "Help Center",
    description: "Find technical documentation and step-by-step setup guides.",
  },
  {
    icon: Bell,
    title: "Product Updates",
    description: "Stay informed about our latest feature releases and bug fixes.",
  },
  {
    icon: Code2,
    title: "Developer Docs",
    description: "Explore our APIs and SDKs to build custom integrations.",
  },
  {
    icon: Activity,
    title: "System Status",
    description: "Real-time performance monitoring of our global infrastructure.",
  },
  {
    icon: ShieldCheck,
    title: "Trust Center",
    description: "Our commitment to security, compliance, and data privacy.",
  },
];

export default function ExploreMoreGridSection() {
  return (
    <section className="bg-white px-6 py-16 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map(({ icon: Icon, title, description }) => (
            <div key={title} className="rounded-2xl bg-[#F7F8FA] p-6">
              <span className="mb-4 flex h-8 w-8 items-center justify-center text-[#0058BE]">
                <Icon size={20} strokeWidth={1.75} />
              </span>
              <h3 className="text-sm font-semibold text-gray-900">{title}</h3>
              <p className="mt-2 text-xs leading-relaxed text-gray-500">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
