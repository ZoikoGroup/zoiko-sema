"use client";

import React, { useEffect, useRef, useState } from "react";

const BRAND = "#3457E8";

type InfoBox = { text?: string; linkText?: string; linkHref?: string; fullLink?: boolean };

type Section = {
  id: string;
  number: number;
  title: string;
  paragraphs: string[];
  infoBox?: InfoBox;
};

const sections: Section[] = [
  {
    id: "overview",
    number: 1,
    title: "Overview",
    paragraphs: [
      "This AI Use Policy explains how Zoiko Sema's AI features should be used responsibly, reviewed by humans, governed by admins, and reported when something goes wrong.",
    ],
  },
  {
    id: "scope-and-covered-ai-features",
    number: 2,
    title: "Scope and Covered AI Features",
    paragraphs: [
      "This policy covers AI meeting summaries, transcript processing, action item extraction, draft reply suggestions, and related AI-assisted workflows within Zoiko Sema.",
    ],
  },
  {
    id: "allowed-and-responsible-ai-use",
    number: 3,
    title: "Allowed and Responsible AI Use",
    paragraphs: [
      "AI features are intended to help you and your team move faster on legitimate business communication tasks. Use of AI outputs should always be consistent with your organization's policies and applicable law.",
    ],
  },
  {
    id: "human-review-and-output-limitations",
    number: 4,
    title: "Human Review and Output Limitations",
    paragraphs: [
      "AI-generated summaries, action items, and suggestions may contain errors, omissions, or misattributions. They should be reviewed by a human before being relied upon, shared externally, or used for decision-making.",
    ],
    infoBox: {
      text: "AI output is a starting point, not a final record of truth.",
    },
  },
  {
    id: "ai-meeting-summaries",
    number: 5,
    title: "AI Meeting Summaries",
    paragraphs: [
      "Meeting summaries are generated from audio, transcripts, and available context to highlight key discussion points. Hosts and permitted participants can review, edit, and approve summaries before they are shared.",
    ],
  },
  {
    id: "action-items-decisions-and-follow-ups",
    number: 6,
    title: "Action Items, Decisions, and Follow-Ups",
    paragraphs: [
      "Extracted action items, owners, and due dates are suggestions based on meeting content and should be confirmed by a responsible human before being treated as an assignment of work.",
    ],
  },
  {
    id: "admin-controls-and-sensitive-workspaces",
    number: 7,
    title: "Admin Controls and Sensitive Workspaces",
    paragraphs: [
      "Workspace admins can disable or limit AI features in HR, legal, executive, confidential, or regulated workspaces, and can configure who may generate, view, edit, share, or export AI outputs.",
    ],
    infoBox: {
      text: "Configure AI availability at the workspace level.",
      linkText: "View AI Controls",
      linkHref: "#",
    },
  },
  {
    id: "data-privacy-retention-and-security",
    number: 8,
    title: "Data, Privacy, Retention, and Security",
    paragraphs: [
      "AI processing of meeting and workspace content is subject to the retention, security, and privacy controls described in the Privacy Notice, Security Policy, and DPA where applicable.",
    ],
    infoBox: {
      text: "Review how AI-related data is protected.",
      linkText: "Read Privacy Notice",
      linkHref: "#",
    },
  },
  {
    id: "external-participants-guests-and-sharing",
    number: 9,
    title: "External Participants, Guests, and Sharing",
    paragraphs: [
      "Workspace admins define whether AI features may operate when guests or external participants join a session, and AI outputs should only be shared with individuals who are permitted to access the underlying meeting or workspace content.",
    ],
  },
  {
    id: "third-party-integrations",
    number: 10,
    title: "Third-Party Integrations",
    paragraphs: [
      "Where AI outputs are exported to third-party integrations, the receiving system's own terms and security posture apply, and admins should review integration scopes before enabling this.",
    ],
  },
  {
    id: "restricted-uses",
    number: 11,
    title: "Restricted Uses",
    paragraphs: [
      "AI features must not be used to generate deceptive content, automate decisions with legal or safety consequences without human review, or process content in workspaces where AI has been explicitly disabled.",
    ],
  },
  {
    id: "reporting-misuse-or-ai-concerns",
    number: 12,
    title: "Reporting Misuse or AI Concerns",
    paragraphs: [
      "If an AI output appears inaccurate, inappropriate, or misused, please report it so our AI governance team can investigate.",
    ],
    infoBox: {
      linkText: "Report AI Concern — routes to the AI governance reporting form.",
      linkHref: "#",
      fullLink: true,
    },
  },
  {
    id: "changes-to-this-policy",
    number: 13,
    title: "Changes to This Policy",
    paragraphs: [
      "We may update this policy as AI features evolve. Material changes will be reflected by an updated effective date.",
    ],
  },
  {
    id: "contact-us",
    number: 14,
    title: "Contact Us",
    paragraphs: [
      "Questions about AI governance or this policy can be directed to our AI governance team using the contact options below.",
    ],
  },
];

export default function AiUsePolicyContentSection() {
  const [activeId, setActiveId] = useState(sections[0].id);
  const sectionRefs = useRef<Record<string, HTMLDivElement | null>>({});
  const isClickScrolling = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (isClickScrolling.current) return;
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "-15% 0px -70% 0px", threshold: 0 }
    );

    Object.values(sectionRefs.current).forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleTocClick = (id: string) => {
    setActiveId(id);
    isClickScrolling.current = true;
    const el = sectionRefs.current[id];
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    window.setTimeout(() => {
      isClickScrolling.current = false;
    }, 700);
  };

  return (
    <>
      <style>{`
        .aiuc-toc-link { transition: color .2s ease, border-color .2s ease; }
        .aiuc-toc-link:hover { color: #374151; }
        .aiuc-infobox-link { transition: gap .2s ease, color .2s ease; }
        .aiuc-infobox-link .aiuc-arrow { transition: transform .2s ease; display: inline-block; }
        .aiuc-infobox-link:hover .aiuc-arrow { transform: translateX(3px); }
        .aiuc-cta-btn { transition: transform .2s ease, box-shadow .2s ease; }
        .aiuc-cta-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 22px -10px rgba(0,0,0,0.35);
        }
      `}</style>

      <section aria-label="AI Use Policy content" className="w-full bg-white py-16 md:py-20">
        <div className="mx-auto w-full max-w-7xl px-6 md:px-10 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-[240px_1fr] gap-12 lg:gap-16">

            {/* Sidebar TOC */}
            <aside className="hidden lg:block">
              <div className="sticky top-10">
                <p className="text-[10.5px] font-semibold uppercase tracking-[0.14em] text-gray-400 mb-4">
                  On This Page
                </p>
                <nav>
                  <ul className="flex flex-col gap-3">
                    {sections.map((s) => {
                      const isActive = activeId === s.id;
                      return (
                        <li key={s.id}>
                          <button
                            type="button"
                            onClick={() => handleTocClick(s.id)}
                            className="aiuc-toc-link text-left text-[13px] leading-snug pl-3 border-l-2"
                            style={{
                              color: isActive ? BRAND : "#9CA3AF",
                              borderColor: isActive ? BRAND : "transparent",
                              fontWeight: isActive ? 600 : 400,
                            }}
                          >
                            {s.title}
                          </button>
                        </li>
                      );
                    })}
                  </ul>
                </nav>
              </div>
            </aside>

            {/* Content */}
            <div>
              {sections.map((s, i) => (
                <div key={s.id}>
                  <div
                    id={s.id}
                    ref={(el) => {
                      sectionRefs.current[s.id] = el;
                    }}
                    className="scroll-mt-24 py-6"
                  >
                    <h2 className="flex items-baseline gap-2 text-[19px] font-bold text-gray-900 mb-3">
                      <span style={{ color: BRAND }}>{s.number}.</span>
                      {s.title}
                    </h2>

                    {s.paragraphs.map((p, pi) => (
                      <p key={pi} className="text-[14px] leading-relaxed text-gray-500 mb-3 max-w-[720px]">
                        {p}
                      </p>
                    ))}

                    {s.infoBox && !s.infoBox.fullLink && (
                      <div
                        className="mt-4 rounded-xl px-5 py-4 flex flex-wrap items-center justify-between gap-3"
                        style={{ background: "#EEF0FC" }}
                      >
                        <span className="text-[13px] text-gray-600">{s.infoBox.text}</span>
                        {s.infoBox.linkText && (
                          <a
                            href={s.infoBox.linkHref}
                            className="aiuc-infobox-link inline-flex items-center gap-1 text-[13px] font-semibold flex-shrink-0"
                            style={{ color: BRAND }}
                          >
                            {s.infoBox.linkText}
                            <span className="aiuc-arrow">→</span>
                          </a>
                        )}
                      </div>
                    )}

                    {s.infoBox?.fullLink && (
                      <a
                        href={s.infoBox.linkHref}
                        className="aiuc-infobox-link block mt-4 rounded-xl px-5 py-4 text-[13px] font-medium"
                        style={{ background: "#EEF0FC", color: BRAND }}
                      >
                        {s.infoBox.linkText}
                      </a>
                    )}
                  </div>

                  {i < sections.length - 1 && <div className="border-t border-gray-100" />}
                </div>
              ))}

              {/* Closing enterprise CTA */}
              <div
                className="mt-10 rounded-2xl px-8 py-10 text-center"
                style={{ background: "linear-gradient(135deg, #4A46C4 0%, #33305C 100%)" }}
              >
                <h3 className="text-[17px] font-bold text-white mb-3">
                  Need enterprise AI governance documentation?
                </h3>
                <p className="text-[13.5px] leading-relaxed max-w-[560px] mx-auto mb-6" style={{ color: "#C7C9E8" }}>
                  Enterprise and regulated customers can request detailed AI
                  governance documentation, review retention configurations,
                  or discuss sensitive workspace controls with our team.
                </p>
                <button className="aiuc-cta-btn bg-white text-gray-900 text-[14px] font-semibold rounded-full px-6 py-3">
                  Contact Sales
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}