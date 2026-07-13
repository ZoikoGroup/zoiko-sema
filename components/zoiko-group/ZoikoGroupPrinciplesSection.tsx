"use client";

import {
  Shield,
  Star,
  Activity,
  MessageCircle,
  Sparkles,
  ShieldCheck,
  LucideIcon,
} from "lucide-react";
import { useInView } from "./useInView";

interface Principle {
  icon: LucideIcon;
  title: string;
  description: string;
  action: string;
  href: string;
}

const principles: Principle[] = [
  {
    icon: Shield,
    title: "Secure communication",
    description:
      "Work communication should be protected, permissioned, and routed with clarity.",
    action: "Security Policy / Trust Center",
    href: "/security-policy",
  },
  {
    icon: Star,
    title: "Governed AI",
    description:
      "AI features should be reviewable, explainable, controllable, and administratively governed.",
    action: "AI Use Policy / Admin Console",
    href: "/ai-use-policy",
  },
  {
    icon: Activity,
    title: "Reliable operations",
    description:
      "Service transparency and operational status should be easy to find.",
    action: "System Status",
    href: "/system-status",
  },
  {
    icon: MessageCircle,
    title: "Customer clarity",
    description:
      "Buyers and users should know where to go for sales, support, legal, security, partners, or press.",
    action: "Contact",
    href: "/contact",
  },
  {
    icon: Sparkles,
    title: "Ecosystem discipline",
    description:
      "Group storytelling should support product understanding, not create brand confusion.",
    action: "Company navigation",
    href: "/about",
  },
  {
    icon: ShieldCheck,
    title: "Responsible scaling",
    description:
      "Public claims must be validated and reviewed before publication.",
    action: "Content governance",
    href: "/trust-center",
  },
];

export default function ZoikoGroupPrinciplesSection() {
  const { ref: headRef, inView: headIn } = useInView(0.2);
  const { ref: gridRef, inView: gridIn } = useInView(0.1);

  return (
    <>
      <style>{`
        @keyframes zgPrincipleUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .zg-principle-hidden { opacity: 0; transform: translateY(20px); }
        .zg-principle-visible { animation: zgPrincipleUp .55s cubic-bezier(.22,1,.36,1) forwards; }

        @keyframes zgPrincipleStagger {
          from { opacity: 0; transform: translateY(14px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .zg-principle-card {
          opacity: 0;
          animation: zgPrincipleStagger .5s ease forwards;
          transition: transform .22s ease, box-shadow .22s ease;
        }
        .zg-principle-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 16px 32px -14px rgba(15,15,40,0.14);
        }
        .zg-principle-link { transition: color .2s ease, gap .2s ease; }
        .zg-principle-link .zg-arrow { transition: transform .2s ease; display: inline-block; }
        .zg-principle-link:hover .zg-arrow { transform: translateX(3px); }

        @media (prefers-reduced-motion: reduce) {
          .zg-principle-hidden { opacity: 1 !important; transform: none !important; }
          .zg-principle-visible { animation: none !important; }
          .zg-principle-card { opacity: 1 !important; animation: none !important; }
        }
      `}</style>

      <section className="bg-[#F3F2FD] px-6 py-16 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-6xl text-center">
          <div ref={headRef} className={`zg-principle-hidden ${headIn ? "zg-principle-visible" : ""}`}>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[2px] text-[#4F63F0]">
              Shared operating principles
            </p>
            <h2 className="mx-auto max-w-2xl text-3xl font-extrabold leading-10 text-gray-900 sm:text-[32px]">
              What the ecosystem holds in common
            </h2>
            <p className="mx-auto mt-4 max-w-160 text-sm leading-relaxed text-gray-500">
              Principles expressed through proof routes, not slogans — each links to
              where it&apos;s demonstrated.
            </p>
          </div>

          <div
            ref={gridRef}
            className={`zg-principle-hidden ${gridIn ? "zg-principle-visible" : ""} mt-10 grid grid-cols-1 gap-5 text-left sm:grid-cols-2 lg:grid-cols-3`}
          >
            {principles.map(({ icon: Icon, title, description, action, href }, i) => (
              <div
                key={title}
                className="zg-principle-card flex flex-col justify-between rounded-2xl bg-white p-6 shadow-sm"
                style={{ animationDelay: `${i * 0.08}s` }}
              >
                <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-xl bg-[#EDEBFB] text-[#4F63F0]">
                  <Icon size={18} strokeWidth={2} />
                </div>
                <h3 className="text-sm font-semibold text-gray-900">{title}</h3>
                <p className="mt-2 text-[13.5px] leading-relaxed text-[#5B627E]">
                  {description}
                </p>
                <a
                  href={href}
                  className="zg-principle-link mt-5 flex items-center gap-1 text-xs font-semibold text-[#4F63F0] hover:text-[#3E51DE]"
                >
                  {action}
                  <span className="zg-arrow">→</span>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
