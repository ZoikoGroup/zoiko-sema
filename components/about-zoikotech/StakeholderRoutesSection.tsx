"use client"
import {
  ShoppingCart,
  LayoutGrid,
  Code2,
  FileText,
  GraduationCap,
  Bell,
  LucideIcon,
} from "lucide-react";

interface RouteCard {
  icon: LucideIcon;
  title: string;
  description: string;
  primaryAction: string;
  secondaryAction: string;
}

const routes: RouteCard[] = [
  {
    icon: ShoppingCart,
    title: "Customers & buyers",
    description:
      "Understand Zoiko Sema, trust routes, and enterprise deployment paths.",
    primaryAction: "Explore Sema",
    secondaryAction: "Contact Sales",
  },
  {
    icon: LayoutGrid,
    title: "Workspace admins",
    description:
      "Review admin controls, security policies, and status resources.",
    primaryAction: "Admin Console",
    secondaryAction: "Trust Center",
  },
  {
    icon: Code2,
    title: "Partners",
    description:
      "Explore partner, integration, or ecosystem collaboration routes.",
    primaryAction: "Partners",
    secondaryAction: "Developer Docs",
  },
  {
    icon: FileText,
    title: "Press",
    description:
      "Access approved company story and the press inquiry route.",
    primaryAction: "Press",
    secondaryAction: "Contact",
  },
  {
    icon: GraduationCap,
    title: "Candidates",
    description:
      "Learn how to join the teams building communication and collaboration products.",
    primaryAction: "Careers",
    secondaryAction: "About Sema",
  },
  {
    icon: Bell,
    title: "Support needs",
    description:
      "Find help, system status, or a contact route quickly.",
    primaryAction: "Help Center",
    secondaryAction: "System Status",
  },
];

export default function StakeholderRoutesSection() {
  return (
    <section className="bg-white px-6 py-16 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-6xl text-center">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[2px] text-[#4F63F0]">
          Stakeholder routes
        </p>
        <h2 className="mx-auto max-w-xl text-3xl font-bold leading-snug text-gray-900 sm:text-[32px]">
          Find the right next step
        </h2>
        <p className="mx-auto mt-4 max-w-185 text-[17px] leading-relaxed text-gray-500">
          Whether you&apos;re buying, integrating, reporting, hiring, curious, or need help —
          here&apos;s where to go.
        </p>

        <div className="mt-10 grid grid-cols-1 gap-5 text-left sm:grid-cols-2 lg:grid-cols-3">
          {routes.map(({ icon: Icon, title, description, primaryAction, secondaryAction }) => (
            <div
              key={title}
              className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm"
            >
              <span className="mb-4 flex h-9 w-9 items-center justify-center rounded-lg bg-[#EDEBFB] text-[#4F63F0]">
                <Icon size={16} strokeWidth={2} />
              </span>
              <h3 className="text-sm font-semibold text-gray-900">{title}</h3>
              <p className="mt-2 text-xs leading-relaxed text-gray-500">
                {description}
              </p>
              <div className="mt-4 flex flex-wrap items-center gap-2">
                <button className="rounded-lg bg-[#4F46E5] px-3.5 py-2 text-xs font-semibold text-white transition hover:bg-[#3E51DE]">
                  {primaryAction}
                </button>
                <button className="rounded-lg border border-gray-200 px-3.5 py-2 text-xs font-semibold text-gray-700 transition hover:bg-gray-50">
                  {secondaryAction}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
