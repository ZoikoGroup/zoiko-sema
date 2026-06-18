"use client";

import React from "react";

interface StakeholderCard {
  icon: React.ReactNode;
  role: string;
  titlePlain1: string;
  titleItalic: string;
  titlePlain2: string;
  desc: string;
}

const OperationsIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#474787" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 21h18M5 21V7l7-4 7 4v14M9 9h1M14 9h1M9 13h1M14 13h1M9 17h1M14 17h1" />
  </svg>
);
const AccountIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#474787" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="8" r="4" /><path d="M4 21v-1a8 8 0 0 1 16 0v1" />
  </svg>
);
const ProductIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#474787" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="3" width="7" height="7" rx="1" /><rect x="14" y="3" width="7" height="7" rx="1" />
    <rect x="3" y="14" width="7" height="7" rx="1" /><rect x="14" y="14" width="7" height="7" rx="1" />
  </svg>
);
const SecurityIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#474787" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
  </svg>
);
const LegalIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#474787" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="9" y1="13" x2="15" y2="13" /><line x1="9" y1="17" x2="15" y2="17" />
  </svg>
);
const ZoikoTimeIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#474787" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
  </svg>
);

const cards: StakeholderCard[] = [
  {
    icon: <OperationsIcon />,
    role: "Operations Lead",
    titlePlain1: "Meetings produce",
    titleItalic: "decisions",
    titlePlain2: ", not minutes.",
    desc: "Every recurring sync ends with a clear decision log and named owners — the next meeting starts with answers, not reruns.",
  },
  {
    icon: <AccountIcon />,
    role: "Account Manager",
    titlePlain1: "Client commitments don't",
    titleItalic: "fall through",
    titlePlain2: ".",
    desc: "Every client call ends in a recap, follow-up draft and CRM-ready record. Internal handoffs become handoffs, not retellings.",
  },
  {
    icon: <ProductIcon />,
    role: "Product Manager",
    titlePlain1: "Threads become",
    titleItalic: "tasks",
    titlePlain2: " automatically.",
    desc: "Convergent decisions in a channel land as pinned decisions and routed work — not as buried messages two weeks later.",
  },
  {
    icon: <SecurityIcon />,
    role: "IT & Security",
    titlePlain1: "Communication is",
    titleItalic: "governed by design",
    titlePlain2: ".",
    desc: "Identity, retention, AI scope, recording consent and ZoikoTime routing all configurable from the admin console — not bolted on later.",
  },
  {
    icon: <LegalIcon />,
    role: "Legal & Compliance",
    titlePlain1: "Audit trails without",
    titleItalic: "employee scoring",
    titlePlain2: ".",
    desc: "Per-jurisdiction retention, exportable audit records, AI explainability and explicit prohibited-claim language — defensible posture, not surveillance.",
  },
  {
    icon: <ZoikoTimeIcon />,
    role: "ZoikoTime Admin",
    titlePlain1: "Workforce context,",
    titleItalic: "under policy",
    titlePlain2: ".",
    desc: "Sema signals route into ZoikoTime only when admin, role, retention, jurisdiction and consent gates all pass — five locks, not one.",
  },
];

export default function UseCasesStakeholdersSection() {
  return (
    <>
      <style>{`
        @keyframes uscFadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        .usc-card-enter {
          animation: uscFadeUp 0.6s cubic-bezier(0.22, 1, 0.36, 1) both;
        }

        .usc-heading-enter {
          animation: uscFadeUp 0.6s cubic-bezier(0.22, 1, 0.36, 1) both;
        }

        .usc-card {
          transition: transform .25s cubic-bezier(.22,1,.36,1),
                      box-shadow .25s cubic-bezier(.22,1,.36,1),
                      border-color .25s ease;
        }
        .usc-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 16px 34px rgba(71,71,135,0.13);
          border-color: rgba(71,71,135,0.18);
        }

        .usc-icon-box { transition: transform .25s ease; }
        .usc-card:hover .usc-icon-box { transform: scale(1.1) rotate(-4deg); }

        .usc-title-italic { transition: color .25s ease; }
        .usc-card:hover .usc-title-italic { color: #4338CA; }

        @media (prefers-reduced-motion: reduce) {
          .usc-card-enter, .usc-heading-enter { animation: none !important; opacity: 1 !important; transform: none !important; }
          .usc-card:hover { transform: none; }
          .usc-card:hover .usc-icon-box { transform: none; }
        }
      `}</style>

      <section
        aria-label="Why these workflows matter to the people making the decision"
        style={{ backgroundColor: "#ECF3FF" }}
        className="w-full py-20 md:py-24"
      >
        <div className="mx-auto w-full max-w-7xl px-6 md:px-10 lg:px-16">

          {/* ── Heading ── */}
          <div className="usc-heading-enter text-center mb-14">
            <h2
              className="font-bold leading-[1.18] tracking-tight text-[#15131F] mb-4"
              style={{ fontSize: "35px" }}
            >
              Why these workflows matter to the people making the decision
            </h2>
            <p className="mx-auto max-w-[700px] text-[15px] leading-[1.75] text-[#5C5870]">
              Each workflow is designed to support a specific role&apos;s daily reality —
              not a generic persona. Six concrete outcomes, six different
              stakeholders.
            </p>
          </div>

          {/* ── 3x2 card grid ── */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {cards.map((card, i) => (
              <div
                key={card.role}
                className="usc-card-enter"
                style={{ animationDelay: `${i * 0.08}s` }}
              >
                <div className="usc-card h-full rounded-2xl bg-white p-6 flex flex-col border border-transparent">
                  {/* Icon + role label */}
                  <div className="flex items-center gap-2.5 mb-5">
                    <span className="usc-icon-box w-7 h-7 rounded-md bg-[#EEF0FB] flex items-center justify-center flex-shrink-0">
                      {card.icon}
                    </span>
                    <span className="text-[10.5px] font-bold uppercase tracking-[0.12em] text-[#474787]">
                      {card.role}
                    </span>
                  </div>

                  {/* Title — mixed plain + italic */}
                  <h3 className="text-[17px] font-bold leading-snug text-[#15131F] mb-3">
                    {card.titlePlain1}{" "}
                    <em className="usc-title-italic font-serif italic font-normal" style={{ color: "#5B5BD6" }}>
                      {card.titleItalic}
                    </em>
                    {card.titlePlain2}
                  </h3>

                  {/* Description */}
                  <p className="text-[13px] leading-[1.7] text-[#6b7280]">
                    {card.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
}