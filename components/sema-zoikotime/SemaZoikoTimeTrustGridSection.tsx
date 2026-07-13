"use client";

import {
  Shield,
  Star,
  Lock,
  ShieldCheck,
  Shuffle,
  Info,
  AlertTriangle,
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
    description: "Access, audit, identity, and platform security.",
    action: "Visit Security Center",
    href: "/security-policy",
  },
  {
    icon: Star,
    title: "Responsible AI",
    description: "Human review and governance for summaries and decisions.",
    action: "Read Responsible AI",
    href: "/ai-use-policy",
  },
  {
    icon: Lock,
    title: "Privacy & Data",
    description: "Clarity on work signals and communication context.",
    action: "Review Privacy & Data",
    href: "/privacy-notice",
  },
  {
    icon: ShieldCheck,
    title: "Compliance",
    description: "Audit, records, retention, and enterprise evidence.",
    action: "View Compliance",
    href: "/data-processing-addendum",
  },
  {
    icon: Shuffle,
    title: "Subprocessors",
    description: "Service provider transparency for DPA and procurement.",
    action: "View Subprocessors",
    href: "/data-processing-addendum",
  },
  {
    icon: Info,
    title: "Accessibility",
    description: "Inclusive meetings, summaries, tasks, and dashboards.",
    action: "Review Accessibility",
    href: "/accessibility",
  },
  {
    icon: AlertTriangle,
    title: "Report a Concern",
    description: "Safe routes for security, privacy, AI, or conduct concerns.",
    action: "Report a Concern",
    href: "/contact",
  },
];

export default function SemaZoikoTimeTrustGridSection() {
  const { ref: headRef, inView: headIn } = useInView(0.2);
  const { ref: gridRef, inView: gridIn } = useInView(0.1);

  return (
    <>
      <style>{`
        @keyframes sztTrustGridUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .szt-tg-hidden { opacity: 0; transform: translateY(20px); }
        .szt-tg-visible { animation: sztTrustGridUp .55s cubic-bezier(.22,1,.36,1) forwards; }

        @keyframes sztTrustGridStagger {
          from { opacity: 0; transform: translateY(14px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .szt-tg-card {
          opacity: 0;
          animation: sztTrustGridStagger .5s ease forwards;
          transition: transform .22s ease, box-shadow .22s ease;
        }
        .szt-tg-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 16px 32px -14px rgba(15,15,40,0.14);
        }
        .szt-tg-link { transition: color .2s ease, gap .2s ease; }
        .szt-tg-link .szt-arrow { transition: transform .2s ease; display: inline-block; }
        .szt-tg-link:hover .szt-arrow { transform: translateX(3px); }

        .szt-tg-cta {
          transition: transform .22s ease, box-shadow .22s ease;
        }
        .szt-tg-cta:hover {
          transform: translateY(-4px);
          box-shadow: 0 20px 36px -14px rgba(0,0,0,0.35);
        }
        .szt-tg-cta-link { transition: color .2s ease, gap .2s ease; }
        .szt-tg-cta-link:hover .szt-arrow { transform: translateX(3px); }

        @media (prefers-reduced-motion: reduce) {
          .szt-tg-hidden { opacity: 1 !important; transform: none !important; }
          .szt-tg-visible { animation: none !important; }
          .szt-tg-card { opacity: 1 !important; animation: none !important; }
        }
      `}</style>

      <section className="bg-[#F3F2FD] px-6 py-16 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-6xl text-center">
          <div ref={headRef} className={`szt-tg-hidden ${headIn ? "szt-tg-visible" : ""}`}>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[2px] text-[#4F63F0]">
              Trust, AI, privacy & security
            </p>
            <h2 className="mx-auto max-w-2xl text-3xl font-extrabold leading-10 text-gray-900 sm:text-[32px]">
              Enterprise assurance, one click away
            </h2>
            <p className="mx-auto mt-4 max-w-160 text-sm leading-relaxed text-gray-500">
              Route reviewers to the resources that back secure, governed,
              responsibly-assisted work.
            </p>
          </div>

          <div
            ref={gridRef}
            className={`szt-tg-hidden ${gridIn ? "szt-tg-visible" : ""} mt-10 grid grid-cols-1 gap-5 text-left sm:grid-cols-2 lg:grid-cols-4`}
          >
            {cards.map(({ icon: Icon, title, description, action, href }, i) => (
              <div
                key={title}
                className="szt-tg-card flex flex-col justify-between rounded-2xl bg-white p-6 shadow-sm"
                style={{ animationDelay: `${i * 0.06}s` }}
              >
                <div>
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-[#EDEBFB] text-[#4F63F0]">
                    <Icon size={18} strokeWidth={2} />
                  </div>
                  <h3 className="text-sm font-semibold text-gray-900">{title}</h3>
                  <p className="mt-2 text-[13px] leading-relaxed text-[#5B627E]">
                    {description}
                  </p>
                </div>
                <a
                  href={href}
                  className="szt-tg-link mt-5 flex items-center gap-1 text-xs font-semibold text-[#4F63F0] hover:text-[#3E51DE]"
                >
                  {action}
                  <span className="szt-arrow">→</span>
                </a>
              </div>
            ))}

            <div
              className="szt-tg-card szt-tg-cta flex flex-col justify-between rounded-2xl bg-[#0B1330] p-6"
              style={{ animationDelay: `${cards.length * 0.06}s` }}
            >
              <div>
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-[#8FA3FF]">
                  <Shield size={18} strokeWidth={2} />
                </div>
                <h3 className="text-sm font-semibold text-white">Trust Center</h3>
                <p className="mt-2 text-[13px] leading-relaxed text-[#AEB7CC]">
                  One hub for all enterprise trust resources.
                </p>
              </div>
              <a
                href="/trust-center"
                className="szt-tg-cta-link mt-5 flex items-center gap-1 text-xs font-semibold text-[#8FA3FF] hover:text-white"
              >
                Visit Trust Center
                <span className="szt-arrow">→</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
