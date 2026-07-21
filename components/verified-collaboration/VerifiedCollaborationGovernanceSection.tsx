"use client";

import { Star, LayoutGrid, Lock, FileCheck, Clock, Eye, LucideIcon } from "lucide-react";
import Link from "next/link";
import { useInView } from "./useInView";

interface GovernanceCard {
  icon: LucideIcon;
  title: string;
  description: string;
  action: string;
  href: string;
}

const cards: GovernanceCard[] = [
  {
    icon: Star,
    title: "Human review",
    description: "AI or system-generated signals require review before finalization.",
    action: "Responsible AI",
    href: "/responsive-ai",
  },
  {
    icon: LayoutGrid,
    title: "Role permissions",
    description: "Only authorized users can approve, sync, export, or edit verified records.",
    action: "Admin Console",
    href: "/admin-console",
  },
  {
    icon: Lock,
    title: "Sensitive spaces",
    description: "AI, sync, or verification can be restricted in sensitive workflows.",
    action: "Security Center",
    href: "/security-center",
  },
  {
    icon: FileCheck,
    title: "Audit timeline",
    description: "Records show source, reviewer, timestamp, status changes, and sync destination.",
    action: "Compliance & Audit",
    href: "/compliance",
  },
  {
    icon: Clock,
    title: "Retention",
    description: "Records follow workspace retention, legal, and plan settings.",
    action: "Privacy & Data / DPA",
    href: "/data-processing-addendum",
  },
  {
    icon: Eye,
    title: "Transparency",
    description: "Users can see what is being captured, reviewed, and synced — and why.",
    action: "Trust & Security",
    href: "/trust-center",
  },
];

export default function VerifiedCollaborationGovernanceSection() {
  const { ref: headRef, inView: headIn } = useInView(0.2);
  const { ref: gridRef, inView: gridIn } = useInView(0.1);

  return (
    <>
      <style>{`
        @keyframes vcGovUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .vc-gov-hidden { opacity: 0; transform: translateY(20px); }
        .vc-gov-visible { animation: vcGovUp .55s cubic-bezier(.22,1,.36,1) forwards; }

        @keyframes vcGovStagger {
          from { opacity: 0; transform: translateY(14px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .vc-gov-card {
          opacity: 0;
          animation: vcGovStagger .5s ease forwards;
          transition: transform .22s ease, box-shadow .22s ease;
        }
        .vc-gov-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 16px 32px -14px rgba(15,15,40,0.14);
        }
        .vc-gov-link { transition: color .2s ease, gap .2s ease; }
        .vc-gov-link .vc-arrow { transition: transform .2s ease; display: inline-block; }
        .vc-gov-link:hover .vc-arrow { transform: translateX(3px); }

        @media (prefers-reduced-motion: reduce) {
          .vc-gov-hidden { opacity: 1 !important; transform: none !important; }
          .vc-gov-visible { animation: none !important; }
          .vc-gov-card { opacity: 1 !important; animation: none !important; }
        }
      `}</style>

      <section className="bg-[#F3F2FD] px-6 py-16 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-6xl text-center">
          <div ref={headRef} className={`vc-gov-hidden ${headIn ? "vc-gov-visible" : ""}`}>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[2px] text-[#4F63F0]">
              Governance & trust
            </p>
            <h2 className="mx-auto max-w-2xl text-3xl font-extrabold leading-10 text-gray-900 sm:text-[32px]">
              Visible governance at every step
            </h2>
            <p className="mx-auto mt-4 max-w-160 text-sm leading-relaxed text-gray-500">
              Because Verified Collaboration touches meetings, records, and AI
              summaries, governance stays front and center.
            </p>
          </div>

          <div
            ref={gridRef}
            className={`vc-gov-hidden ${gridIn ? "vc-gov-visible" : ""} mt-10 grid grid-cols-1 gap-5 text-left sm:grid-cols-2 lg:grid-cols-3`}
          >
            {cards.map(({ icon: Icon, title, description, action, href }, i) => (
              <div
                key={title}
                className="vc-gov-card rounded-2xl bg-white p-6 shadow-sm"
                style={{ animationDelay: `${i * 0.08}s` }}
              >
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-[#EDEBFB] text-[#4F63F0]">
                  <Icon size={18} strokeWidth={2} />
                </div>
                <h3 className="text-sm font-semibold text-gray-900">{title}</h3>
                <p className="mt-2 text-[13px] leading-relaxed text-[#5B627E]">
                  {description}
                </p>
                <Link
                  href={href}
                  className="vc-gov-link mt-4 flex items-center gap-1 text-xs font-semibold text-[#4F63F0] hover:text-[#3E51DE]"
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
