"use client";
import {
  LayoutGrid,
  Shield,
  Sparkles,
  ArrowRight,
  LucideIcon,
} from "lucide-react";

interface RoleCard {
  icon: LucideIcon;
  title: string;
  description: string;
}

const roles: RoleCard[] = [
  {
    icon: LayoutGrid,
    title: "Product role",
    description:
      "Zoiko Sema delivers the messaging, meetings, summaries, spaces, and admin experience buyers evaluate.",
  },
  {
    icon: Shield,
    title: "Governance role",
    description:
      "Company-level emphasis on secure communication, auditability, privacy, and admin controls.",
  },
  {
    icon: Sparkles,
    title: "Ecosystem role",
    description:
      "ZoikoTime, developer docs, partners, and support connect around the same product foundation.",
  },
];

export default function HowCompanyProductRelateSection() {
  return (
    <section className="bg-[#F3F2FD] px-6 py-16 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-5xl text-center">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[2px] text-[#4F63F0]">
          Zoiko Tech &amp; Zoiko Sema
        </p>
        <h2 className="mx-auto text-3xl font-bold leading-snug text-gray-900 sm:text-[32px]">
          How the company and the product relate
        </h2>
        <p className="mx-auto mt-4 max-w-150 text-sm leading-relaxed text-gray-500">
          Simply put: Zoiko Tech is the technology organization; Zoiko Sema is
          the business communication product it builds and operates.
        </p>

        {/* Top row: two standalone cards with arrow floating between them */}
        <div className="mt-10 grid grid-cols-1 items-center gap-4 sm:grid-cols-[1fr_auto_1fr]">
          {/* Zoiko Tech card */}
          <div className="flex h-full flex-col items-center justify-center rounded-2xl bg-white p-8 text-center shadow-sm">
            <span className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-[#4F63F0] text-sm font-bold text-white">
              ZT
            </span>
            <p className="mb-1 text-[11px] font-semibold uppercase tracking-wide text-gray-400">
              Company
            </p>
            <p className="text-lg font-bold text-gray-900">Zoiko Tech</p>
            <p className="mt-2 text-sm leading-relaxed text-gray-500">
              The technology organization behind the product.
            </p>
          </div>

          {/* Arrow + label */}
          <div className="flex flex-row items-center justify-center gap-2 px-2 sm:flex-col sm:gap-1">
            <ArrowRight size={20} className="text-[#4F63F0]" />
            <span className="text-[10px] font-extrabold uppercase tracking-wide text-[#4F63F0]">
              builds &amp; operates
            </span>
          </div>

          {/* Zoiko Sema card */}
          <div className="flex h-full flex-col items-center justify-center rounded-2xl bg-white p-8 text-center shadow-sm">
            <img src="/about-zoikotech/zoikosema.png" alt="image" />
            <p className="mt-2 text-sm leading-relaxed text-gray-500">
              Business communication &amp; collaboration.
            </p>
          </div>
        </div>

        {/* Role cards */}
        <div className="mt-6 grid grid-cols-1 gap-5 text-left sm:grid-cols-3">
          {roles.map(({ icon: Icon, title, description }) => (
            <div key={title} className="rounded-xl bg-white p-5 shadow-sm">
              <span className="mb-3 flex h-9 w-9 items-center justify-center rounded-lg bg-[#EDEBFB] text-[#4F63F0]">
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
