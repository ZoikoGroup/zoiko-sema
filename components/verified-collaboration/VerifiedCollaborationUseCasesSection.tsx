"use client";

import { Phone, List, Globe, BarChart3, Shield, LayoutGrid, LucideIcon } from "lucide-react";
import Link from "next/link";
import { useInView } from "./useInView";

interface UseCase {
  icon: LucideIcon;
  title: string;
  description: string;
  action: string;
  href: string;
  iconBg: string;
  iconColor: string;
}

const useCases: UseCase[] = [
  {
    icon: Phone,
    title: "Client service teams",
    description: "Turn client calls into reviewed commitments, owners, and follow-up records.",
    action: "Client Call Follow-Up",
    href: "/client-call-follow-up",
    iconBg: "bg-indigo-100",
    iconColor: "text-indigo-600",
  },
  {
    icon: List,
    title: "Project teams",
    description: "Connect project meetings, decisions, tasks, and risks to verified records.",
    action: "Project Collaboration",
    href: "/project-collaboration",
    iconBg: "bg-indigo-100",
    iconColor: "text-indigo-600",
  },
  {
    icon: Globe,
    title: "Remote coordination",
    description: "Give distributed teams clarity on what was agreed and what moved forward.",
    action: "Remote Coordination",
    href: "/remote-coordination",
    iconBg: "bg-teal-100",
    iconColor: "text-teal-600",
  },
  {
    icon: BarChart3,
    title: "Leadership operations",
    description: "See approved collaboration outcomes without chasing every participant.",
    action: "Productivity Intelligence",
    href: "/productivity-intelligence",
    iconBg: "bg-indigo-100",
    iconColor: "text-indigo-600",
  },
  {
    icon: Shield,
    title: "Regulated workflows",
    description: "Keep source-linked, reviewed decisions and actions where auditability matters.",
    action: "Compliance & Audit",
    href: "/compliance",
    iconBg: "bg-amber-100",
    iconColor: "text-amber-600",
  },
  {
    icon: LayoutGrid,
    title: "Enterprise deployment",
    description: "Configure verified collaboration with roles, policies, retention, and integrations.",
    action: "Enterprise Deployment",
    href: "/enterprise",
    iconBg: "bg-teal-100",
    iconColor: "text-teal-600",
  },
];

export default function VerifiedCollaborationUseCasesSection() {
  const { ref: headRef, inView: headIn } = useInView(0.2);
  const { ref: gridRef, inView: gridIn } = useInView(0.1);

  return (
    <>
      <style>{`
        @keyframes vcUseCaseUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .vc-uc-hidden { opacity: 0; transform: translateY(20px); }
        .vc-uc-visible { animation: vcUseCaseUp .55s cubic-bezier(.22,1,.36,1) forwards; }

        @keyframes vcUseCaseStagger {
          from { opacity: 0; transform: translateY(14px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .vc-uc-card {
          opacity: 0;
          animation: vcUseCaseStagger .5s ease forwards;
          transition: transform .22s ease, box-shadow .22s ease, border-color .22s ease;
        }
        .vc-uc-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 16px 32px -14px rgba(15,15,40,0.14);
          border-color: rgba(79,99,240,0.3);
        }
        .vc-uc-link { transition: color .2s ease, gap .2s ease; }
        .vc-uc-link .vc-arrow { transition: transform .2s ease; display: inline-block; }
        .vc-uc-link:hover .vc-arrow { transform: translateX(3px); }

        @media (prefers-reduced-motion: reduce) {
          .vc-uc-hidden { opacity: 1 !important; transform: none !important; }
          .vc-uc-visible { animation: none !important; }
          .vc-uc-card { opacity: 1 !important; animation: none !important; }
        }
      `}</style>

      <section className="bg-white px-6 py-16 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-6xl text-center">
          <div ref={headRef} className={`vc-uc-hidden ${headIn ? "vc-uc-visible" : ""}`}>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[2px] text-[#4F63F0]">
              Enterprise use cases
            </p>
            <h2 className="mx-auto max-w-2xl text-3xl font-extrabold leading-10 text-gray-900 sm:text-[32px]">
              Where verified collaboration pays off
            </h2>
            <p className="mx-auto mt-4 max-w-160 text-sm leading-relaxed text-gray-500">
              Map source-linked, reviewed work records to the scenarios
              enterprise teams run every day.
            </p>
          </div>

          <div
            ref={gridRef}
            className={`vc-uc-hidden ${gridIn ? "vc-uc-visible" : ""} mt-10 grid grid-cols-1 gap-5 text-left sm:grid-cols-2 lg:grid-cols-3`}
          >
            {useCases.map(({ icon: Icon, title, description, action, href, iconBg, iconColor }, i) => (
              <div
                key={title}
                className="vc-uc-card rounded-2xl border border-gray-100 bg-white p-6 shadow-sm"
                style={{ animationDelay: `${i * 0.06}s` }}
              >
                <div className={`mb-3 flex h-10 w-10 items-center justify-center rounded-xl ${iconBg} ${iconColor}`}>
                  <Icon size={18} strokeWidth={2} />
                </div>
                <h3 className="text-sm font-semibold text-gray-900">{title}</h3>
                <p className="mt-2 text-[13px] leading-relaxed text-[#5B627E]">
                  {description}
                </p>
                <Link
                  href={href}
                  className="vc-uc-link mt-4 flex items-center gap-1 text-xs font-semibold text-[#4F63F0] hover:text-[#3E51DE]"
                >
                  {action}
                  <span className="vc-arrow">→</span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
