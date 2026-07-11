"use client";

import React, { useEffect, useRef, useState } from "react";

const BRAND = "#3457E8";

type InfoBox = { text: string; linkText?: string; linkHref?: string };

type Section = {
  id: string;
  number: number;
  title: string;
  paragraphs: string[];
  bullets?: string[];
  infoBox?: InfoBox;
};

const sections: Section[] = [
  {
    id: "overview-and-acceptance",
    number: 1,
    title: "Overview and Acceptance",
    paragraphs: [
      `These Terms of Service ("Terms") govern access to and use of Zoiko Sema's messaging, meeting, AI summary, and workspace collaboration services (the "Service"). By creating an account, joining a workspace, or otherwise using the Service, you agree to these Terms on behalf of yourself and, where applicable, the organization you represent.`,
    ],
    infoBox: {
      text: "If you are entering into these Terms on behalf of a company, you confirm you have authority to bind that company.",
    },
  },
  {
    id: "eligibility-and-authorized-use",
    number: 2,
    title: "Eligibility and Authorized Use",
    paragraphs: [
      "The Service is intended for business and professional use by individuals who meet the minimum age and legal capacity requirements in their jurisdiction. Organizations are responsible for confirming that their users are authorized to use the Service under this agreement and any applicable order form.",
    ],
    bullets: [
      "You must provide accurate registration information.",
      "You are responsible for maintaining the confidentiality of your credentials.",
      "Organizations may set additional eligibility rules for their workspace.",
    ],
  },
  {
    id: "accounts-workspaces-and-admin-responsibilities",
    number: 3,
    title: "Accounts, Workspaces, and Admin Responsibilities",
    paragraphs: [
      "Workspace owners and administrators are responsible for configuring roles, permissions, guest access, retention settings, and integrations for their organization. Admins may access, manage, or restrict user activity within the workspace in accordance with the Admin Console and Security Policy.",
    ],
    infoBox: {
      text: "Workspace configuration connects directly to admin tooling.",
      linkText: "View Admin Console",
      linkHref: "#",
    },
  },
  {
    id: "plans-payments-trials-and-renewals",
    number: 4,
    title: "Plans, Payments, Trials, and Renewals",
    paragraphs: [
      "Paid subscriptions renew automatically unless canceled prior to the renewal date, subject to the plan and order terms presented at signup or in an executed order form. Trial periods, proration, taxes, and plan changes are governed by the commercial terms applicable to your account.",
    ],
    infoBox: {
      text: "See current plans and enterprise contract options.",
      linkText: "View Pricing",
      linkHref: "#",
    },
  },
  {
    id: "messaging-meetings-files-and-user-content",
    number: 5,
    title: "Messaging, Meetings, Files, and User Content",
    paragraphs: [
      `You retain rights to content you submit to the Service, including messages, files, and meeting recordings ("User Content"), subject to the licenses necessary for Zoiko Sema to provide, secure, and support the Service. You are responsible for ensuring you have the necessary rights and permissions for content you share.`,
    ],
  },
  {
    id: "ai-features-and-meeting-summaries",
    number: 6,
    title: "AI Features and Meeting Summaries",
    paragraphs: [
      "Zoiko Sema offers AI-assisted features including meeting summaries, action item extraction, and draft replies. AI-generated outputs may contain errors and should be reviewed before being relied upon or shared. Admins may configure availability, retention, and sensitive workspace exclusions for AI features.",
    ],
    infoBox: {
      text: "Review the full policy governing AI feature use.",
      linkText: "Read AI Use Policy",
      linkHref: "#",
    },
  },
  {
    id: "acceptable-use-and-restrictions",
    number: 7,
    title: "Acceptable Use and Restrictions",
    paragraphs: [
      "Use of the Service is subject to the Acceptable Use Policy, which prohibits harmful, abusive, fraudulent, or unlawful conduct, as well as attempts to disrupt, probe, or bypass the security of the Service.",
    ],
    infoBox: {
      text: "Prohibited conduct and enforcement details are defined separately.",
      linkText: "Read Acceptable Use Policy",
      linkHref: "#",
    },
  },
  {
    id: "security-privacy-and-data-processing",
    number: 8,
    title: "Security, Privacy, and Data Processing",
    paragraphs: [
      "Zoiko Sema maintains administrative, technical, and organizational safeguards described in the Security Policy. Personal data is handled in accordance with the Privacy Notice, and business customers may execute a Data Processing Addendum where required.",
    ],
    infoBox: {
      text: "Security and privacy documentation is available for review.",
      linkText: "Visit Trust Center",
      linkHref: "#",
    },
  },
  {
    id: "third-party-integrations",
    number: 9,
    title: "Third-Party Integrations",
    paragraphs: [
      "The Service may integrate with third-party applications such as calendar, storage, or identity providers. Use of third-party integrations is subject to the applicable third party's terms, and Zoiko Sema is not responsible for third-party service availability or conduct.",
    ],
  },
  {
    id: "service-changes-availability-and-support",
    number: 10,
    title: "Service Changes, Availability, and Support",
    paragraphs: [
      "Zoiko Sema may update, modify, or discontinue features of the Service from time to time, and may perform scheduled maintenance. Current availability, incidents, and maintenance windows are published on System Status.",
    ],
    infoBox: {
      text: "Check live availability and incident history.",
      linkText: "View System Status",
      linkHref: "#",
    },
  },
  {
    id: "disclaimers-liability-and-indemnity",
    number: 11,
    title: "Disclaimers, Liability, and Indemnity",
    paragraphs: [
      `The Service is provided on an "as available" basis. To the maximum extent permitted by law, Zoiko Sema disclaims implied warranties and limits liability as set out in the applicable order form or enterprise agreement.`,
    ],
    infoBox: {
      text: "This section requires final legal counsel wording before publication.",
    },
  },
  {
    id: "termination-and-suspension",
    number: 12,
    title: "Termination and Suspension",
    paragraphs: [
      "Zoiko Sema may suspend or terminate access to the Service for material breach of these Terms, the Acceptable Use Policy, or non-payment, subject to notice periods described in your order form where applicable.",
    ],
  },
  {
    id: "governing-law-disputes-and-enterprise-agreements",
    number: 13,
    title: "Governing Law, Disputes, and Enterprise Agreements",
    paragraphs: [
      "These Terms are governed by the laws of the jurisdiction specified in your order form or enterprise agreement. Enterprise agreements executed separately take precedence over these Terms to the extent of any conflict.",
    ],
    infoBox: {
      text: "Jurisdiction and dispute resolution language is a placeholder pending legal review.",
    },
  },
  {
    id: "changes-to-terms",
    number: 14,
    title: "Changes to Terms",
    paragraphs: [
      "Zoiko Sema may update these Terms from time to time. Material changes will be reflected by an updated effective date and, where required, additional notice. See the version history below for prior changes.",
    ],
  },
  {
    id: "contact-information",
    number: 15,
    title: "Contact Information",
    paragraphs: [
      "Questions about these Terms can be directed to our legal team using the contact options below.",
    ],
  },
];

export default function TermsOfServiceContentSection() {
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
      // triggers when a heading crosses roughly the upper third of the viewport
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
    // let the smooth scroll finish before scrollspy takes over again
    window.setTimeout(() => {
      isClickScrolling.current = false;
    }, 700);
  };

  return (
    <>
      <style>{`
        .tosc-toc-link {
          transition: color .2s ease, border-color .2s ease;
        }
        .tosc-toc-link:hover {
          color: #374151;
        }
        .tosc-infobox-link {
          transition: gap .2s ease, color .2s ease;
        }
        .tosc-infobox-link .tosc-arrow {
          transition: transform .2s ease;
          display: inline-block;
        }
        .tosc-infobox-link:hover .tosc-arrow {
          transform: translateX(3px);
        }
        .tosc-cta-btn {
          transition: transform .2s ease, box-shadow .2s ease;
        }
        .tosc-cta-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 22px -10px rgba(0,0,0,0.35);
        }
      `}</style>

      <section aria-label="Terms of Service content" className="w-full bg-white py-16 md:py-20">
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
                            className="tosc-toc-link text-left text-[13px] leading-snug pl-3 border-l-2"
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

                    {s.bullets && (
                      <ul className="flex flex-col gap-1.5 mt-3 mb-1">
                        {s.bullets.map((b, bi) => (
                          <li key={bi} className="flex items-start gap-2 text-[14px] text-gray-500">
                            <span className="mt-2 w-1 h-1 rounded-full bg-gray-400 flex-shrink-0" />
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>
                    )}

                    {s.infoBox && (
                      <div
                        className="mt-4 rounded-xl px-5 py-4 flex flex-wrap items-center justify-between gap-3"
                        style={{ background: "#EEF0FC" }}
                      >
                        <span className="text-[13px] text-gray-600">{s.infoBox.text}</span>
                        {s.infoBox.linkText && (
                          <a
                            href={s.infoBox.linkHref}
                            className="tosc-infobox-link inline-flex items-center gap-1 text-[13px] font-semibold flex-shrink-0"
                            style={{ color: BRAND }}
                          >
                            {s.infoBox.linkText}
                            <span className="tosc-arrow">→</span>
                          </a>
                        )}
                      </div>
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
                  Need enterprise terms, a DPA, or security review?
                </h3>
                <p className="text-[13.5px] leading-relaxed max-w-[560px] mx-auto mb-6" style={{ color: "#C7C9E8" }}>
                  Enterprise agreements, data processing terms, procurement
                  documents, security review materials, and custom
                  implementation terms may be handled through the enterprise
                  sales and legal review process.
                </p>
                <button className="tosc-cta-btn bg-white text-gray-900 text-[14px] font-semibold rounded-full px-6 py-3">
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