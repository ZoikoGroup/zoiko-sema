"use client";

import React, { useEffect, useRef, useState } from "react";

const BRAND = "#3457E8";

type InfoBox = { text?: string; linkText?: string; linkHref?: string; fullLink?: boolean };

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
    id: "overview-and-purpose",
    number: 1,
    title: "Overview and Purpose",
    paragraphs: [
      "This Acceptable Use Policy defines rules for responsible use of Zoiko Sema. It applies to all users, workspaces, and integrations, and works alongside the Terms of Service, AI Use Policy, and Security Policy.",
    ],
  },
  {
    id: "responsible-and-permitted-use",
    number: 2,
    title: "Responsible and Permitted Use",
    paragraphs: [
      "Zoiko Sema is intended for lawful, professional business communication and collaboration, including messaging, meetings, file sharing, and AI-assisted workflows used in accordance with your organization's policies.",
    ],
  },
  {
    id: "prohibited-conduct",
    number: 3,
    title: "Prohibited Conduct",
    paragraphs: [
      "You may not use the Service to harass, threaten, impersonate, defraud, or exploit others, or to engage in unlawful activity of any kind.",
    ],
    bullets: [
      "Harassment, threats, or hate speech directed at individuals or groups",
      "Impersonation of another person or organization",
      "Fraud, phishing, or deceptive business practices",
      "Unauthorized collection of other users' personal information",
    ],
  },
  {
    id: "harmful-abusive-or-illegal-content",
    number: 4,
    title: "Harmful, Abusive, or Illegal Content",
    paragraphs: [
      "Content that is unlawful, exploitative, or that facilitates harm to others is prohibited, including but not limited to content that violates intellectual property rights or applicable law.",
    ],
  },
  {
    id: "spam-fraud-phishing-and-deception",
    number: 5,
    title: "Spam, Fraud, Phishing, and Deception",
    paragraphs: [
      "You may not use messaging, meetings, or integrations to send unsolicited bulk communications, run phishing campaigns, or otherwise deceive recipients about the origin or purpose of a communication.",
    ],
  },
  {
    id: "security-misuse-and-service-disruption",
    number: 6,
    title: "Security Misuse and Service Disruption",
    paragraphs: [
      "You may not probe, scan, or test the vulnerability of the Service without authorization, introduce malicious code, or take any action that could disable, overburden, or impair the Service.",
    ],
    infoBox: {
      text: "Report suspected vulnerabilities responsibly.",
      linkText: "View Security Policy",
      linkHref: "#",
    },
  },
  {
    id: "ai-feature-misuse",
    number: 7,
    title: "AI Feature Misuse",
    paragraphs: [
      "AI features must not be used to generate misleading summaries, fabricate decisions, circumvent human review requirements, or process content in sensitive workspaces where AI has been disabled by an admin.",
    ],
    infoBox: {
      text: "Full AI governance rules are documented separately.",
      linkText: "Read AI Use Policy",
      linkHref: "#",
    },
  },
  {
    id: "meetings-recordings-captions-and-summaries",
    number: 8,
    title: "Meetings, Recordings, Captions, and Summaries",
    paragraphs: [
      "Recording, captioning, and summarizing meetings must comply with applicable law and organizational policy, including obtaining any legally required notice or consent from participants.",
    ],
  },
  {
    id: "developer-api-and-automation-rules",
    number: 9,
    title: "Developer, API, and Automation Rules",
    paragraphs: [
      "API and integration use must comply with rate limits, scope restrictions, and admin-approved access. Automated use of the Service must not circumvent security controls or usage limits.",
    ],
    infoBox: {
      text: "Review API scopes and governance rules.",
      linkText: "Open Developer Docs",
      linkHref: "#",
    },
  },
  {
    id: "reporting-violations",
    number: 10,
    title: "Reporting Violations",
    paragraphs: [
      "If you become aware of a violation of this policy, please report it using the channels below so our Trust & Safety team can investigate.",
    ],
    infoBox: {
      linkText: "Report Abuse — routes to the Trust & Safety reporting form.",
      linkHref: "#",
      fullLink: true,
    },
  },
  {
    id: "investigation-enforcement-and-appeals",
    number: 11,
    title: "Investigation, Enforcement, and Appeals",
    paragraphs: [
      "Violations of this policy may result in warnings, feature restrictions, workspace suspension, account termination, or escalation to law enforcement where required. Affected users or admins may appeal enforcement decisions through the process described in our Help Center.",
    ],
  },
  {
    id: "related-policies",
    number: 12,
    title: "Related Policies",
    paragraphs: [
      "This policy should be read alongside the Terms of Service, AI Use Policy, Security Policy, and Privacy Notice.",
    ],
  },
  {
    id: "changes-to-this-policy",
    number: 13,
    title: "Changes to This Policy",
    paragraphs: [
      "We may update this policy from time to time. Material changes will be reflected by an updated effective date.",
    ],
  },
  {
    id: "contact-us",
    number: 14,
    title: "Contact Us",
    paragraphs: [
      "Questions about this policy, or reports of abuse, can be directed to our Trust & Safety team using the contact options below.",
    ],
  },
];

export default function AcceptableUsePolicyContentSection() {
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
        .aupc-toc-link { transition: color .2s ease, border-color .2s ease; }
        .aupc-toc-link:hover { color: #374151; }
        .aupc-infobox-link { transition: gap .2s ease, color .2s ease; }
        .aupc-infobox-link .aupc-arrow { transition: transform .2s ease; display: inline-block; }
        .aupc-infobox-link:hover .aupc-arrow { transform: translateX(3px); }
        .aupc-cta-btn { transition: transform .2s ease, box-shadow .2s ease; }
        .aupc-cta-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 22px -10px rgba(0,0,0,0.35);
        }
      `}</style>

      <section aria-label="Acceptable Use Policy content" className="w-full bg-white py-16 md:py-20">
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
                            className="aupc-toc-link text-left text-[13px] leading-snug pl-3 border-l-2"
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

                    {s.infoBox && !s.infoBox.fullLink && (
                      <div
                        className="mt-4 rounded-xl px-5 py-4 flex flex-wrap items-center justify-between gap-3"
                        style={{ background: "#EEF0FC" }}
                      >
                        <span className="text-[13px] text-gray-600">{s.infoBox.text}</span>
                        {s.infoBox.linkText && (
                          <a
                            href={s.infoBox.linkHref}
                            className="aupc-infobox-link inline-flex items-center gap-1 text-[13px] font-semibold flex-shrink-0"
                            style={{ color: BRAND }}
                          >
                            {s.infoBox.linkText}
                            <span className="aupc-arrow">→</span>
                          </a>
                        )}
                      </div>
                    )}

                    {s.infoBox?.fullLink && (
                      <a
                        href={s.infoBox.linkHref}
                        className="aupc-infobox-link block mt-4 rounded-xl px-5 py-4 text-[13px] font-medium"
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
                  Need enterprise conduct or DPA terms?
                </h3>
                <p className="text-[13.5px] leading-relaxed max-w-[560px] mx-auto mb-6" style={{ color: "#C7C9E8" }}>
                  Enterprise customers with specific conduct, compliance, or
                  data handling requirements can work with our sales and
                  legal teams on additional terms.
                </p>
                <button className="aupc-cta-btn bg-white text-gray-900 text-[14px] font-semibold rounded-full px-6 py-3">
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