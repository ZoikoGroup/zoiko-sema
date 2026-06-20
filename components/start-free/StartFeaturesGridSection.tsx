"use client";

import { useEffect, useState } from "react";

/**
 * StartFeaturesGridSection
 * "Every conversation, in context." — 2x3 grid of feature cards,
 * each with a colored icon badge, title, description, and a text link.
 */

interface FeatureCard {
  id: string;
  title: string;
  description: string;
  linkLabel: string;
  iconBg: string;
  icon: React.ReactNode;
}

function MessageIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5Z"
        stroke="currentColor"
        strokeWidth={1.8}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function VideoIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <rect x="2" y="6" width="14" height="12" rx="2.5" stroke="currentColor" strokeWidth={1.8} />
      <path
        d="M16 10.5l5-3v9l-5-3"
        stroke="currentColor"
        strokeWidth={1.8}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function AISummaryIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M5 19l1.5-4.5L11 13l-4.5-1.5L5 7l-1.5 4.5L-1 13l4.5 1.5L5 19Z"
        transform="translate(2 0)"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinejoin="round"
      />
      <path
        d="M17 11l1-3 1 3 3 1-3 1-1 3-1-3-3-1 3-1Z"
        stroke="currentColor"
        strokeWidth={1.3}
        strokeLinejoin="round"
      />
    </svg>
  );
}

function TranscriptIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <rect x="5" y="3" width="14" height="18" rx="2" stroke="currentColor" strokeWidth={1.8} />
      <path d="M8 8h8M8 12h8M8 16h5" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" />
    </svg>
  );
}

function ShieldIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M12 3l7 3v5c0 5-3.5 8.5-7 10-3.5-1.5-7-5-7-10V6l7-3Z"
        stroke="currentColor"
        strokeWidth={1.8}
        strokeLinejoin="round"
      />
      <path d="M9.5 12l2 2 3.5-4" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function IntegrationsIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <rect x="3" y="3" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth={1.8} />
      <rect x="14" y="3" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth={1.8} />
      <rect x="3" y="14" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth={1.8} />
      <path d="M17.5 10v4M14 17.5h7" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" />
    </svg>
  );
}

const FEATURES: FeatureCard[] = [
  {
    id: "messaging",
    title: "Messaging & channels",
    description:
      "Secure 1:1 messages, group threads, organized channels, and searchable history — so important context stays findable forever.",
    linkLabel: "Start messaging free",
    iconBg: "bg-indigo-600",
    icon: <MessageIcon className="h-5 w-5 text-white" />,
  },
  {
    id: "calls",
    title: "HD calls & video meetings",
    description:
      "Audio and video calls with no time limit on 1:1. Group meetings with screen sharing, recordings, and live captions on paid plans.",
    linkLabel: "Start a call in seconds",
    iconBg: "bg-emerald-600",
    icon: <VideoIcon className="h-5 w-5 text-white" />,
  },
  {
    id: "ai-summaries",
    title: "AI meeting summaries",
    description:
      "Get auto-generated, workspace-controlled summaries after every meeting. 10/month on the free plan — unlimited on Starter and above.",
    linkLabel: "See how AI summaries work",
    iconBg: "bg-[#1B2A57]",
    icon: <AISummaryIcon className="h-5 w-5 text-white" />,
  },
  {
    id: "transcription",
    title: "Transcription & search",
    description:
      "Meeting transcriptions, searchable history, and fast-scan summaries that make every conversation a retrievable business record.",
    linkLabel: "Search across all conversations",
    iconBg: "bg-orange-500",
    icon: <TranscriptIcon className="h-5 w-5 text-white" />,
  },
  {
    id: "security",
    title: "Security & admin controls",
    description:
      "Workspace-level admin controls, data export, encryption in transit, SSO/SAML on Business, and compliance tools for regulated teams.",
    linkLabel: "Review security posture",
    iconBg: "bg-[#1B2A57]",
    icon: <ShieldIcon className="h-5 w-5 text-white" />,
  },
  {
    id: "integrations",
    title: "Integrations & workflows",
    description:
      "Connect calendar, storage, project tools, and workforce systems. ZoikoTime integration available on the Business plan for workforce-aware communication.",
    linkLabel: "See integrations",
    iconBg: "bg-indigo-500",
    icon: <IntegrationsIcon className="h-5 w-5 text-white" />,
  },
];

function CardSkeleton() {
  return (
    <div className="animate-pulse rounded-2xl bg-white p-6 shadow-sm">
      <div className="h-10 w-10 rounded-xl bg-slate-100" />
      <div className="mt-4 h-4 w-2/3 rounded bg-slate-100" />
      <div className="mt-3 space-y-2">
        <div className="h-3 w-full rounded bg-slate-100" />
        <div className="h-3 w-full rounded bg-slate-100" />
        <div className="h-3 w-3/4 rounded bg-slate-100" />
      </div>
      <div className="mt-4 h-3 w-32 rounded bg-slate-100" />
    </div>
  );
}

export default function StartFeaturesGridSection() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 450);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="bg-[#EEF1FB] px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-indigo-700">
          What you get
        </p>
        <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          Every conversation, in context.
        </h2>
        <p className="mx-auto mt-4 max-w-lg text-[15px] leading-relaxed text-slate-500">
          Messaging, calls, meetings, AI summaries, and workflow tools designed
          to work together so nothing gets lost.
        </p>
      </div>

      <div className="mx-auto mt-12 grid max-w-7xl grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {!loaded
          ? Array.from({ length: 6 }).map((_, i) => <CardSkeleton key={i} />)
          : FEATURES.map((feature, index) => (
              <div
                key={feature.id}
                className="group flex flex-col rounded-2xl bg-white p-6 shadow-sm transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-lg"
                style={{
                  animation: "fadeUp 0.5s ease-out both",
                  animationDelay: `${index * 70}ms`,
                }}
              >
                <span
                  className={`flex h-10 w-10 items-center justify-center rounded-xl ${feature.iconBg} shadow-sm transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3`}
                >
                  {feature.icon}
                </span>

                <h3 className="mt-4 text-[15px] font-semibold text-slate-900">
                  {feature.title}
                </h3>

                <p className="mt-2 text-[13.5px] leading-relaxed text-slate-500">
                  {feature.description}
                </p>

                <a
                  href="#"
                  className="group/link mt-4 inline-flex items-center gap-1 text-[13px] font-semibold text-indigo-700 transition-colors duration-200 hover:text-indigo-900"
                >
                  <span className="border-b border-transparent transition-colors duration-200 group-hover/link:border-indigo-900">
                    {feature.linkLabel}
                  </span>
                </a>
              </div>
            ))}
      </div>

      <style jsx global>{`
        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}