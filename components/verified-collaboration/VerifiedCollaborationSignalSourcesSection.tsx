"use client";

import { Video, Phone, MessageCircle, List, FileText, Clock, LucideIcon } from "lucide-react";
import { useInView } from "./useInView";

interface SourceCard {
  icon: LucideIcon;
  title: string;
  caption: string;
  description: string;
  action: string;
  href: string;
  iconBg: string;
  iconColor: string;
}

const sources: SourceCard[] = [
  {
    icon: Video,
    title: "Video meetings",
    caption: "Summary · decisions · action items · questions",
    description: "Meetings become structured work records.",
    action: "Video Meetings & AI Summaries",
    href: "/video-meetings",
    iconBg: "bg-indigo-100",
    iconColor: "text-indigo-600",
  },
  {
    icon: Phone,
    title: "Audio calls",
    caption: "Recap · commitments · follow-ups · notes",
    description: "Client and service calls produce clear next steps.",
    action: "Audio Calls & Client Follow-Up",
    href: "/audio-calls",
    iconBg: "bg-teal-100",
    iconColor: "text-teal-600",
  },
  {
    icon: MessageCircle,
    title: "Messaging",
    caption: "Thread decisions · requests · files · approvals",
    description: "Important work doesn't stay buried in chat.",
    action: "Message-to-record source",
    href: "/messaging",
    iconBg: "bg-indigo-100",
    iconColor: "text-indigo-600",
  },
  {
    icon: List,
    title: "Channels & Spaces",
    caption: "Project context · decisions · files · risks",
    description: "Team collaboration becomes searchable and reviewable.",
    action: "Channels & Spaces",
    href: "/channels-spaces",
    iconBg: "bg-indigo-100",
    iconColor: "text-indigo-600",
  },
  {
    icon: FileText,
    title: "Files & links",
    caption: "Attached proof · supporting docs · references",
    description: "Records carry context, not isolated tasks.",
    action: "File & link evidence",
    href: "/resources",
    iconBg: "bg-amber-100",
    iconColor: "text-amber-600",
  },
  {
    icon: Clock,
    title: "ZoikoTime",
    caption: "Approved record · timeline · verified state",
    description: "Collaboration connects to work truth and productivity intelligence.",
    action: "Sync-gated & admin-governed",
    href: "/zoikotime-customers",
    iconBg: "bg-teal-100",
    iconColor: "text-teal-600",
  },
];

export default function VerifiedCollaborationSignalSourcesSection() {
  const { ref: headRef, inView: headIn } = useInView(0.2);
  const { ref: gridRef, inView: gridIn } = useInView(0.1);

  return (
    <>
      <style>{`
        @keyframes vcSourceUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .vc-source-hidden { opacity: 0; transform: translateY(20px); }
        .vc-source-visible { animation: vcSourceUp .55s cubic-bezier(.22,1,.36,1) forwards; }

        @keyframes vcSourceStagger {
          from { opacity: 0; transform: translateY(14px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .vc-source-card {
          opacity: 0;
          animation: vcSourceStagger .5s ease forwards;
          transition: transform .22s ease, box-shadow .22s ease, border-color .22s ease;
        }
        .vc-source-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 16px 32px -14px rgba(15,15,40,0.14);
          border-color: rgba(79,99,240,0.3);
        }
        .vc-source-link { transition: color .2s ease, gap .2s ease; }
        .vc-source-link .vc-arrow { transition: transform .2s ease; display: inline-block; }
        .vc-source-link:hover .vc-arrow { transform: translateX(3px); }

        @media (prefers-reduced-motion: reduce) {
          .vc-source-hidden { opacity: 1 !important; transform: none !important; }
          .vc-source-visible { animation: none !important; }
          .vc-source-card { opacity: 1 !important; animation: none !important; }
        }
      `}</style>

      <section className="bg-white px-6 py-16 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-6xl text-center">
          <div ref={headRef} className={`vc-source-hidden ${headIn ? "vc-source-visible" : ""}`}>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[2px] text-[#4F63F0]">
              Signal sources & evidence
            </p>
            <h2 className="mx-auto max-w-2xl text-3xl font-extrabold leading-10 text-gray-900 sm:text-[32px]">
              Where verified records come from
            </h2>
            <p className="mx-auto mt-4 max-w-160 text-sm leading-relaxed text-gray-500">
              Legitimate collaboration events become structured, source-linked
              evidence — governed by workspace permissions.
            </p>
          </div>

          <div
            ref={gridRef}
            className={`vc-source-hidden ${gridIn ? "vc-source-visible" : ""} mt-10 grid grid-cols-1 gap-5 text-left sm:grid-cols-2 lg:grid-cols-3`}
          >
            {sources.map(({ icon: Icon, title, caption, description, action, href, iconBg, iconColor }, i) => (
              <div
                key={title}
                className="vc-source-card rounded-2xl border border-gray-100 bg-white p-6 shadow-sm"
                style={{ animationDelay: `${i * 0.06}s` }}
              >
                <div className={`mb-3 flex h-10 w-10 items-center justify-center rounded-xl ${iconBg} ${iconColor}`}>
                  <Icon size={18} strokeWidth={2} />
                </div>
                <h3 className="text-sm font-semibold text-gray-900">{title}</h3>
                <p className="mt-1 text-[11.5px] text-gray-400">{caption}</p>
                <p className="mt-2.5 text-[13px] leading-relaxed text-[#5B627E]">
                  {description}
                </p>
                <a
                  href={href}
                  className="vc-source-link mt-4 flex items-center gap-1 text-xs font-semibold text-[#4F63F0] hover:text-[#3E51DE]"
                >
                  {action}
                  <span className="vc-arrow">→</span>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
