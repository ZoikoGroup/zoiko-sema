"use client";

import { useInView } from "./useInView";

// TODO: replace with your actual image path, e.g. "/Images/trust-center-doorways.webp"
const DOORWAYS_IMAGE_SRC = "/Images/Trust-Framework.webp";

interface TopicCard {
  code: string;
  badgeBg: string;
  badgeColor: string;
  title: string;
  description: string;
  action: string;
  href: string;
  linkColor: string;
}

const topics: TopicCard[] = [
  {
    code: "SC",
    badgeBg: "bg-blue-100",
    badgeColor: "text-blue-600",
    title: "Security",
    description:
      "Identity, access, admin controls, audit visibility, and secure communication operations.",
    action: "Security Overview",
    href: "/security-policy",
    linkColor: "text-blue-600",
  },
  {
    code: "AI",
    badgeBg: "bg-emerald-100",
    badgeColor: "text-emerald-600",
    title: "Responsible AI",
    description:
      "AI use, governance, human review, meeting summaries, and admin controls.",
    action: "View AI Governance",
    href: "/ai-use-policy",
    linkColor: "text-emerald-600",
  },
  {
    code: "CO",
    badgeBg: "bg-emerald-100",
    badgeColor: "text-emerald-600",
    title: "Compliance",
    description: "Review-ready compliance material and procurement routing.",
    action: "View Compliance",
    href: "/data-processing-addendum",
    linkColor: "text-emerald-600",
  },
  {
    code: "SP",
    badgeBg: "bg-amber-100",
    badgeColor: "text-amber-600",
    title: "Subprocessors",
    description: "Vendor and subprocessor categories, notices, and updates.",
    action: "View Subprocessors",
    href: "/data-processing-addendum",
    linkColor: "text-amber-600",
  },
  {
    code: "RC",
    badgeBg: "bg-red-100",
    badgeColor: "text-red-600",
    title: "Report a Concern",
    description:
      "Report security, privacy, AI, abuse, or accessibility concerns.",
    action: "Report a concern",
    href: "/contact",
    linkColor: "text-red-600",
  },
  {
    code: "AX",
    badgeBg: "bg-gray-200",
    badgeColor: "text-gray-600",
    title: "Accessibility",
    description: "Accessibility commitment and a route to report barriers.",
    action: "View Accessibility",
    href: "/accessibility",
    linkColor: "text-gray-700",
  },
];

export default function TrustCenterTopicsSection() {
  const { ref: headRef, inView: headIn } = useInView(0.2);
  const { ref: bodyRef, inView: bodyIn } = useInView(0.1);

  return (
    <>
      <style>{`
        @keyframes tcTopicsUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .tc-topics-hidden { opacity: 0; transform: translateY(20px); }
        .tc-topics-visible { animation: tcTopicsUp .55s cubic-bezier(.22,1,.36,1) forwards; }

        @keyframes tcTopicsStagger {
          from { opacity: 0; transform: translateY(14px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .tc-topics-card {
          opacity: 0;
          animation: tcTopicsStagger .5s ease forwards;
          transition: transform .22s ease, box-shadow .22s ease;
        }
        .tc-topics-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 16px 32px -14px rgba(15,15,40,0.14);
        }
        .tc-topics-link { transition: color .2s ease, gap .2s ease; }
        .tc-topics-link .tc-arrow { transition: transform .2s ease; display: inline-block; }
        .tc-topics-link:hover .tc-arrow { transform: translateX(3px); }

        .tc-topics-img-wrap { transition: transform .4s cubic-bezier(.22,1,.36,1); }
        .tc-topics-img-wrap:hover { transform: translateY(-6px); }

        @media (prefers-reduced-motion: reduce) {
          .tc-topics-hidden { opacity: 1 !important; transform: none !important; }
          .tc-topics-visible { animation: none !important; }
          .tc-topics-card { opacity: 1 !important; animation: none !important; }
        }
      `}</style>

      <section className="bg-[#E8F2FD] px-6 py-16 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-6xl text-center">
          <div ref={headRef} className={`tc-topics-hidden ${headIn ? "tc-topics-visible" : ""}`}>
            <span className="mb-3 inline-block rounded-full bg-white px-3 py-1 text-[10.5px] font-bold uppercase tracking-[1.5px] text-[#4F63F0]">
              Trust Framework
            </span>
            <h2 className="mx-auto max-w-2xl text-3xl font-extrabold leading-10 text-gray-900 sm:text-[32px]">
              Every trust topic has its own doorway.
            </h2>
            <p className="mx-auto mt-4 max-w-160 text-sm leading-relaxed text-gray-500">
              Navigate security, privacy, AI governance, compliance, and more
              from one central hub.
            </p>
          </div>

          <div
            ref={bodyRef}
            className={`tc-topics-hidden ${bodyIn ? "tc-topics-visible" : ""} mt-10 grid grid-cols-1 gap-5 text-left lg:grid-cols-3`}
          >
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:col-span-2">
              {topics.map(({ code, badgeBg, badgeColor, title, description, action, href, linkColor }, i) => (
                <div
                  key={title}
                  className="tc-topics-card rounded-2xl bg-white p-6 shadow-sm"
                  style={{ animationDelay: `${i * 0.06}s` }}
                >
                  <div className={`mb-3 flex h-9 w-9 items-center justify-center rounded-lg ${badgeBg} ${badgeColor} text-xs font-bold`}>
                    {code}
                  </div>
                  <h3 className="text-sm font-semibold text-gray-900">{title}</h3>
                  <p className="mt-2 text-[13px] leading-relaxed text-gray-500">
                    {description}
                  </p>
                  <a
                    href={href}
                    className={`tc-topics-link mt-4 flex items-center gap-1 text-xs font-semibold ${linkColor}`}
                  >
                    {action}
                    <span className="tc-arrow">→</span>
                  </a>
                </div>
              ))}
            </div>

            <div className="tc-topics-img-wrap overflow-hidden rounded-2xl">
              <img
                src={DOORWAYS_IMAGE_SRC}
                alt="Person walking toward doorways labeled Privacy, Legal, and Ethics"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
