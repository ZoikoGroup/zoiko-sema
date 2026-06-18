"use client";

import React from "react";

interface TrustCard {
  icon: React.ReactNode;
  title: string;
  desc: string;
}

const ShieldIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#474787" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
  </svg>
);
const SparkleIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#474787" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 3v4M12 17v4M3 12h4M17 12h4M5.6 5.6l2.8 2.8M15.6 15.6l2.8 2.8M5.6 18.4l2.8-2.8M15.6 8.4l2.8-2.8" />
  </svg>
);
const PeopleIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#474787" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="9" cy="8" r="3.2" />
    <path d="M3.5 19c0-3 2.5-5 5.5-5s5.5 2 5.5 5" />
    <path d="M18 8v4M16 10h4" />
  </svg>
);
const FileIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#474787" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <polyline points="14 2 14 8 20 8" />
  </svg>
);

const cards: TrustCard[] = [
  {
    icon: <ShieldIcon />,
    title: "Secure by architecture",
    desc: "Encryption in transit, workspace isolation, role-based permissions, session controls. Built into how Sema manages access.",
  },
  {
    icon: <SparkleIcon />,
    title: "Explainable AI",
    desc: "Summaries trace back to source. Decision extraction is reviewable. AI scope is admin-configurable per channel.",
  },
  {
    icon: <PeopleIcon />,
    title: "Permissioned by default",
    desc: "ZoikoTime routing requires five gates to pass. AI processing is workspace-scoped. Guests and external users excluded by policy.",
  },
  {
    icon: <FileIcon />,
    title: "Governed retention",
    desc: "Per-workspace retention rules, jurisdiction-aware configuration, customer-controlled exports, audit-ready logs.",
  },
];

export default function UseCasesTrustSection() {
  return (
    <>
      <style>{`
        @keyframes utFadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        .ut-card-enter {
          animation: utFadeUp 0.6s cubic-bezier(0.22, 1, 0.36, 1) both;
        }
        .ut-heading-enter {
          animation: utFadeUp 0.6s cubic-bezier(0.22, 1, 0.36, 1) both;
        }
        .ut-note-enter {
          animation: utFadeUp 0.6s cubic-bezier(0.22, 1, 0.36, 1) both;
        }

        .ut-card {
          transition: transform .25s cubic-bezier(.22,1,.36,1),
                      box-shadow .25s cubic-bezier(.22,1,.36,1);
        }
        .ut-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 16px 34px rgba(71,71,135,0.14);
        }

        .ut-icon-box { transition: transform .25s ease, box-shadow .25s ease; }
        .ut-card:hover .ut-icon-box {
          transform: scale(1.1) rotate(-4deg);
          box-shadow: 0 6px 14px rgba(71,71,135,0.18);
        }

        @media (prefers-reduced-motion: reduce) {
          .ut-card-enter, .ut-heading-enter, .ut-note-enter {
            animation: none !important; opacity: 1 !important; transform: none !important;
          }
          .ut-card:hover { transform: none; }
          .ut-card:hover .ut-icon-box { transform: none; }
        }
      `}</style>

      <section
        aria-label="Built to earn trust without overclaiming what doesn't exist yet"
        className="w-full bg-white py-20 md:py-24"
      >
        <div className="mx-auto w-full max-w-7xl px-6 md:px-10 lg:px-16">

          {/* ── Heading ── */}
          <div className="ut-heading-enter text-center mb-14">
            <h2
              className="font-bold leading-[1.18] tracking-tight text-[#15131F] mb-4"
              style={{ fontSize: "35px" }}
            >
              Built to earn trust without overclaiming what doesn&apos;t exist yet
            </h2>
            <p className="mx-auto max-w-[680px] text-[15px] leading-[1.75] text-[#5C5870]">
              Sema is in launch. The trust posture below is what is built into the
              platform; certifications and customer-evidence claims will appear when
              they are real.
            </p>
          </div>

          {/* ── 4-card grid ── */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
            {cards.map((card, i) => (
              <div
                key={card.title}
                className="ut-card-enter"
                style={{ animationDelay: `${i * 0.08}s` }}
              >
                <div
                  className="ut-card h-full rounded-2xl p-6"
                  style={{ background: "#E9EEFB" }}
                >
                  {/* Icon box */}
                  <div className="ut-icon-box w-10 h-10 rounded-lg bg-white flex items-center justify-center mb-5 shadow-sm">
                    {card.icon}
                  </div>

                  {/* Title */}
                  <h3 className="text-[15.5px] font-bold leading-snug text-[#15131F] mb-3">
                    {card.title}
                  </h3>

                  {/* Description */}
                  <p className="text-[13px] leading-[1.7] text-[#5C5870]">
                    {card.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* ── Honest-at-launch note ── */}
          <div
            className="ut-note-enter"
            style={{ animationDelay: "0.32s" }}
          >
            <div
              className="rounded-2xl px-7 py-6"
              style={{
                background: "#E9EEFB",
                borderLeft: "3px solid #474787",
              }}
            >
              <p className="text-[13.5px] leading-relaxed text-[#3f3d56]">
                <span className="font-bold text-[#15131F]">Honest at launch.</span>{" "}
                This page describes how Sema is designed to operate, not benchmarked
                customer outcomes. Certifications, customer evidence and proof
                modules will appear here once pilots and live deployments produce
                them. Until then, Sema is presented as the workflows it supports —
                accurately, not aspirationally.
              </p>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}