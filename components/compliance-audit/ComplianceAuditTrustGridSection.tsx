"use client";

import {
  Shield,
  Star,
  Lock,
  CheckSquare,
  Monitor,
  Clock,
  FileText,
  Bell,
  LucideIcon,
} from "lucide-react";
import { useInView } from "./useInView";

interface TrustCard {
  icon: LucideIcon;
  title: string;
  description: string;
  action: string;
  href: string;
}

const cards: TrustCard[] = [
  {
    icon: Shield,
    title: "Security Center",
    description: "Security posture and enterprise security review routes.",
    action: "Visit Security Center",
    href: "/security-center",
  },
  {
    icon: Star,
    title: "Responsible AI",
    description: "AI summary, action-item, and decision capture governance.",
    action: "Read Responsible AI",
    href: "/responsive-ai",
  },
  {
    icon: Lock,
    title: "Privacy & Data",
    description: "Data categories, privacy requests, and data handling.",
    action: "View Privacy & Data",
    href: "/privacy",
  },
  {
    icon: CheckSquare,
    title: "Compliance",
    description: "Broader trust and control evidence.",
    action: "View Compliance",
    href: "/compliance",
  },
  {
    icon: Monitor,
    title: "Subprocessors",
    description: "Supports procurement and data-processing review.",
    action: "View Subprocessors",
    href: "/subprocessors",
  },
  {
    icon: Clock,
    title: "Accessibility",
    description: "Accessible meeting and work-record workflows.",
    action: "View Accessibility",
    href: "/accessibility",
  },
  {
    icon: FileText,
    title: "Data Processing Addendum",
    description: "Supports enterprise contract and privacy review.",
    action: "View DPA",
    href: "/data-processing-addendum",
  },
  {
    icon: Bell,
    title: "Report a Concern",
    description: "Route concerns about security, privacy, abuse, AI, or accessibility.",
    action: "Report a Concern",
    href: "/report-concern",
  },
];

export default function ComplianceAuditTrustGridSection() {
  const { ref: headRef, inView: headIn } = useInView(0.2);
  const { ref: gridRef, inView: gridIn } = useInView(0.1);

  return (
    <>
      <style>{`
        @keyframes caTrustUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .ca-trust-hidden { opacity: 0; transform: translateY(20px); }
        .ca-trust-visible { animation: caTrustUp .55s cubic-bezier(.22,1,.36,1) forwards; }

        @keyframes caTrustStagger {
          from { opacity: 0; transform: translateY(14px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .ca-trust-card {
          opacity: 0;
          animation: caTrustStagger .5s ease forwards;
          transition: transform .22s ease, box-shadow .22s ease;
        }
        .ca-trust-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 16px 32px -14px rgba(15,15,40,0.14);
        }
        .ca-trust-link { transition: color .2s ease, gap .2s ease; }
        .ca-trust-link .ca-arrow { transition: transform .2s ease; display: inline-block; }
        .ca-trust-link:hover .ca-arrow { transform: translateX(3px); }

        @media (prefers-reduced-motion: reduce) {
          .ca-trust-hidden { opacity: 1 !important; transform: none !important; }
          .ca-trust-visible { animation: none !important; }
          .ca-trust-card { opacity: 1 !important; animation: none !important; }
        }
      `}</style>

      <section className="bg-[#F3F2FD] px-6 py-16 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-6xl text-center">
          <div ref={headRef} className={`ca-trust-hidden ${headIn ? "ca-trust-visible" : ""}`}>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[2px] text-[#4F63F0]">
              Trust, privacy & governance
            </p>
            <h2 className="mx-auto max-w-2xl text-3xl font-extrabold leading-10 text-gray-900 sm:text-[32px]">
              Everything security &amp; legal will ask for
            </h2>
            <p className="mx-auto mt-4 max-w-160 text-sm leading-relaxed text-gray-500">
              Route reviewers to the resources that back reviewed,
              permissioned, source-linked evidence.
            </p>
          </div>

          <div
            ref={gridRef}
            className={`ca-trust-hidden ${gridIn ? "ca-trust-visible" : ""} mt-10 grid grid-cols-1 gap-5 text-left sm:grid-cols-2 lg:grid-cols-4`}
          >
            {cards.map(({ icon: Icon, title, description, action, href }, i) => (
              <div
                key={title}
                className="ca-trust-card rounded-2xl bg-white p-6 shadow-sm"
                style={{ animationDelay: `${i * 0.06}s` }}
              >
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-[#EDEBFB] text-[#4F63F0]">
                  <Icon size={18} strokeWidth={2} />
                </div>
                <h3 className="text-sm font-semibold text-gray-900">{title}</h3>
                <p className="mt-2 text-[13px] leading-relaxed text-[#5B627E]">
                  {description}
                </p>
                <a
                  href={href}
                  className="ca-trust-link mt-4 flex items-center gap-1 text-xs font-semibold text-[#4F63F0] hover:text-[#3E51DE]"
                >
                  {action}
                  <span className="ca-arrow">→</span>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
