"use client";

import { useEffect, useState } from "react";

/**
 * StartSecuritySection
 * Dark indigo "Built for secure work and responsible AI." section —
 * 4 translucent cards on a solid indigo background, plus a row of
 * footer text links beneath.
 */

function CodeIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M9 18l-5-6 5-6M15 6l5 6-5 6"
        stroke="currentColor"
        strokeWidth={1.8}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function DataIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <ellipse cx="12" cy="6" rx="7" ry="3" stroke="currentColor" strokeWidth={1.8} />
      <path
        d="M5 6v6c0 1.66 3.13 3 7 3s7-1.34 7-3V6M5 12v6c0 1.66 3.13 3 7 3s7-1.34 7-3v-6"
        stroke="currentColor"
        strokeWidth={1.8}
        strokeLinecap="round"
      />
    </svg>
  );
}

function ShieldCheckIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M12 3l7 3v5c0 5-3.5 8.5-7 10-3.5-1.5-7-5-7-10V6l7-3Z"
        stroke="currentColor"
        strokeWidth={1.8}
        strokeLinejoin="round"
      />
      <path
        d="M9.5 12l2 2 3.5-4"
        stroke="currentColor"
        strokeWidth={1.8}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function DocumentIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M7 3h7l4 4v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Z"
        stroke="currentColor"
        strokeWidth={1.8}
        strokeLinejoin="round"
      />
      <path d="M14 3v4h4" stroke="currentColor" strokeWidth={1.8} strokeLinejoin="round" />
    </svg>
  );
}

interface SecurityCard {
  id: string;
  title: string;
  description: string;
  linkLabel: string;
  icon: React.ReactNode;
}

const CARDS: SecurityCard[] = [
  {
    id: "encryption",
    title: "Encryption in transit",
    description:
      "All messages, calls, files, and AI outputs are encrypted in transit across all plans.",
    linkLabel: "Security overview",
    icon: <CodeIcon className="h-5 w-5 text-white" />,
  },
  {
    id: "data-ownership",
    title: "Your data, your workspace",
    description:
      "Workspace data belongs to your organization. Export and deletion follow the published retention policy.",
    linkLabel: "Privacy Notice",
    icon: <DataIcon className="h-5 w-5 text-white" />,
  },
  {
    id: "ai-use-policy",
    title: "AI Use Policy",
    description:
      "AI summaries are workspace-controlled and plan-based. Customer data is not used to train external models unless explicitly stated.",
    linkLabel: "AI Use Policy",
    icon: <ShieldCheckIcon className="h-5 w-5 text-white" />,
  },
  {
    id: "dpa",
    title: "DPA available",
    description:
      "Data Processing Addendum for eligible customers and deployment types through the Trust Center or sales route.",
    linkLabel: "Trust Center",
    icon: <DocumentIcon className="h-5 w-5 text-white" />,
  },
];

const FOOTER_LINKS = [
  "Visit Trust Center",
  "Read AI Use Policy",
  "Data Processing Addendum",
  "System status",
];

function CardSkeleton() {
  return (
    <div className="animate-pulse rounded-2xl bg-white/10 p-6">
      <div className="h-10 w-10 rounded-xl bg-white/15" />
      <div className="mt-4 h-3.5 w-2/3 rounded bg-white/15" />
      <div className="mt-3 space-y-2">
        <div className="h-2.5 w-full rounded bg-white/10" />
        <div className="h-2.5 w-4/5 rounded bg-white/10" />
      </div>
      <div className="mt-4 h-2.5 w-24 rounded bg-white/10" />
    </div>
  );
}

export default function StartSecuritySection() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 450);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="bg-[#4B4789] px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-indigo-200">
          Security &amp; Responsible AI
        </p>
        <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Built for secure work and responsible AI.
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-[14.5px] leading-relaxed text-indigo-200">
          Only verified claims below. No overstated certifications. Serious
          buyers can visit our Trust Center for detailed documentation.
        </p>
      </div>

      <div className="mx-auto mt-10 grid max-w-7xl grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {!loaded
          ? Array.from({ length: 4 }).map((_, i) => <CardSkeleton key={i} />)
          : CARDS.map((card, index) => (
              <div
                key={card.id}
                className="group flex flex-col rounded-2xl bg-white/10 p-6 transition-all duration-300 ease-out hover:-translate-y-1 hover:bg-white/15"
                style={{
                  animation: "fadeUp 0.5s ease-out both",
                  animationDelay: `${index * 80}ms`,
                }}
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/15 transition-transform duration-300 group-hover:scale-110 group-hover:bg-white/20">
                  {card.icon}
                </span>

                <h3 className="mt-4 text-[14.5px] font-semibold text-white">
                  {card.title}
                </h3>

                <p className="mt-2 flex-1 text-[13px] leading-relaxed text-indigo-200">
                  {card.description}
                </p>

                <a
                  href="#"
                  className="mt-4 inline-flex items-center text-[12.5px] font-semibold text-white/90 underline-offset-2 transition-colors duration-200 hover:text-white hover:underline"
                >
                  {card.linkLabel}
                </a>
              </div>
            ))}
      </div>

      <div className="mx-auto mt-9 flex max-w-3xl flex-wrap items-center justify-center gap-x-8 gap-y-3">
        {FOOTER_LINKS.map((link) => (
          <a
            key={link}
            href="#"
            className="text-[13px] font-medium text-indigo-200 underline-offset-2 transition-colors duration-200 hover:text-white hover:underline"
          >
            {link}
          </a>
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