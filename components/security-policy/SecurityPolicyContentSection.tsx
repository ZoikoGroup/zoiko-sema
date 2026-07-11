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
      "This Security Policy describes the security program, controls, and shared responsibilities that protect the Zoiko Sema platform and the data processed within it.",
    ],
  },
  {
    id: "security-program-scope",
    number: 2,
    title: "Security Program Scope",
    paragraphs: [
      "Our security program covers identity and access management, data protection, application security, infrastructure security, monitoring, and incident response across the Service.",
    ],
  },
  {
    id: "access-controls-and-identity",
    number: 3,
    title: "Access Controls and Identity",
    paragraphs: [
      "Zoiko Sema supports single sign-on (SAML/OIDC), multi-factor authentication, role-based access control, and session management to help organizations control who can access their workspace.",
    ],
    infoBox: {
      text: "Configure identity and access settings.",
      linkText: "View Admin Console",
      linkHref: "#",
    },
  },
  {
    id: "customer-and-admin-responsibilities",
    number: 4,
    title: "Customer and Admin Responsibilities",
    paragraphs: [
      "Workspace owners and admins are responsible for configuring user access, roles, guest permissions, retention policies, integrations, and AI governance settings appropriate to their organization's risk profile.",
    ],
  },
  {
    id: "data-protection-and-governance",
    number: 5,
    title: "Data Protection and Governance",
    paragraphs: [
      "Data protection practices include encryption in transit, access-controlled storage, retention configuration, and export controls, as described in more detail in our Data Processing Addendum.",
    ],
    infoBox: {
      text: "Review data processing and protection terms.",
      linkText: "View DPA",
      linkHref: "#",
    },
  },
  {
    id: "meeting-ai-and-workspace-security",
    number: 6,
    title: "Meeting, AI, and Workspace Security",
    paragraphs: [
      "Meeting security considerations include access controls for joining sessions, recording and caption permissions, and governance over AI-generated summaries and outputs.",
    ],
    infoBox: {
      text: "Review AI-specific governance rules.",
      linkText: "Read AI Use Policy",
      linkHref: "#",
    },
  },
  {
    id: "integrations-apis-and-third-parties",
    number: 7,
    title: "Integrations, APIs, and Third Parties",
    paragraphs: [
      "Integrations and API access are governed by admin-approved scopes, OAuth or service account credentials, and audit logging of integration activity.",
    ],
    infoBox: {
      text: "Review API authentication and scopes.",
      linkText: "Open Developer Docs",
      linkHref: "#",
    },
  },
  {
    id: "monitoring-audit-and-logs",
    number: 8,
    title: "Monitoring, Audit, and Logs",
    paragraphs: [
      "We maintain logging and monitoring designed to detect anomalous activity and support incident investigation. Admins can access relevant audit logs for their workspace where plan and role permit.",
    ],
  },
  {
    id: "incident-reporting",
    number: 9,
    title: "Incident Reporting",
    paragraphs: [
      "Security incidents affecting the Service are communicated through System Status and, where appropriate, direct customer notification in accordance with applicable law and contractual commitments.",
    ],
    infoBox: {
      text: "Check current incidents and history.",
      linkText: "View System Status",
      linkHref: "#",
    },
  },
  {
    id: "vulnerability-reporting",
    number: 10,
    title: "Vulnerability Reporting",
    paragraphs: [
      "If you believe you've discovered a security vulnerability, please report it responsibly using the channel below so our security team can investigate.",
    ],
    infoBox: {
      linkText: "Report a Vulnerability — routes to our responsible disclosure process.",
      linkHref: "#",
      fullLink: true,
    },
  },
  {
    id: "enterprise-security-review",
    number: 11,
    title: "Enterprise Security Review",
    paragraphs: [
      "Enterprise and procurement teams can request detailed security documentation, questionnaire responses, and review materials through the Trust Center.",
    ],
    infoBox: {
      text: "Request detailed security materials.",
      linkText: "Visit Trust Center",
      linkHref: "#",
    },
  },
  {
    id: "changes-to-this-policy",
    number: 12,
    title: "Changes to This Policy",
    paragraphs: [
      "We may update this policy as our security program evolves. Material changes will be reflected by an updated effective date.",
    ],
  },
  {
    id: "contact-us",
    number: 13,
    title: "Contact Us",
    paragraphs: [
      "Questions about this policy, or security concerns, can be directed to our security team using the contact options below.",
    ],
  },
];

export default function SecurityPolicyContentSection() {
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
        .secc-toc-link { transition: color .2s ease, border-color .2s ease; }
        .secc-toc-link:hover { color: #374151; }
        .secc-infobox-link { transition: gap .2s ease, color .2s ease; }
        .secc-infobox-link .secc-arrow { transition: transform .2s ease; display: inline-block; }
        .secc-infobox-link:hover .secc-arrow { transform: translateX(3px); }
        .secc-cta-btn { transition: transform .2s ease, box-shadow .2s ease; }
        .secc-cta-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 22px -10px rgba(0,0,0,0.35);
        }
      `}</style>

      <section aria-label="Security Policy content" className="w-full bg-white py-16 md:py-20">
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
                            className="secc-toc-link text-left text-[13px] leading-snug pl-3 border-l-2"
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
                            className="secc-infobox-link inline-flex items-center gap-1 text-[13px] font-semibold flex-shrink-0"
                            style={{ color: BRAND }}
                          >
                            {s.infoBox.linkText}
                            <span className="secc-arrow">→</span>
                          </a>
                        )}
                      </div>
                    )}

                    {s.infoBox?.fullLink && (
                      <a
                        href={s.infoBox.linkHref}
                        className="secc-infobox-link block mt-4 rounded-xl px-5 py-4 text-[13px] font-medium"
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
                  Need a security review or DPA for procurement?
                </h3>
                <p className="text-[13.5px] leading-relaxed max-w-[560px] mx-auto mb-6" style={{ color: "#C7C9E8" }}>
                  Enterprise and regulated customers can request our vendor
                  security packet, review our Trust Center documentation, or
                  execute a Data Processing Addendum.
                </p>
                <button className="secc-cta-btn bg-white text-gray-900 text-[14px] font-semibold rounded-full px-6 py-3">
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