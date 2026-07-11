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
    id: "overview",
    number: 1,
    title: "Overview",
    paragraphs: [
      "This Privacy Notice explains how Zoiko Sema collects, uses, discloses, and protects personal information in connection with our messaging, meeting, AI summary, and workspace collaboration services. It applies to individual users, workspace members, and visitors to our websites.",
    ],
  },
  {
    id: "information-we-collect",
    number: 2,
    title: "Information We Collect",
    paragraphs: [
      "We collect information you provide directly, such as account and profile details, and information generated through your use of the Service, including workspace settings, communication content, meeting data, usage data, device data, support interactions, and cookie data.",
    ],
    bullets: [
      "Account and profile information (name, email, role)",
      "Workspace and organization settings",
      "Messages, files, and meeting content",
      "Usage, device, and diagnostic data",
      "Support tickets and correspondence",
      "Cookie and similar tracking data",
    ],
  },
  {
    id: "how-we-use-information",
    number: 3,
    title: "How We Use Information",
    paragraphs: [
      "We use information to deliver and secure the Service, provide customer support, improve product quality, communicate with you, process billing, and comply with legal obligations, consistent with counsel-approved purposes.",
    ],
  },
  {
    id: "ai-features-and-meeting-summaries",
    number: 4,
    title: "AI Features and Meeting Summaries",
    paragraphs: [
      "Where enabled by a workspace admin, AI features may process meeting audio, transcripts, and workspace context to generate summaries, action items, and suggestions. Admins can configure availability, retention, and sensitive workspace exclusions.",
    ],
    infoBox: {
      text: "Full AI governance details are documented separately.",
      linkText: "Read AI Use Policy",
      linkHref: "#",
    },
  },
  {
    id: "workspace-owners-and-admin-controls",
    number: 5,
    title: "Workspace Owners and Admin Controls",
    paragraphs: [
      "Workspace owners and administrators may configure access, roles, retention, integrations, and AI governance settings for their organization, which can affect how personal information is processed within that workspace.",
    ],
    infoBox: {
      text: "Admin-level configuration is managed centrally.",
      linkText: "View Admin Console",
      linkHref: "#",
    },
  },
  {
    id: "cookies-and-website-technologies",
    number: 6,
    title: "Cookies and Website Technologies",
    paragraphs: [
      "We use cookies and similar technologies for essential functionality, security, preferences, and analytics as described in our Cookie Policy.",
    ],
    infoBox: {
      text: "Manage your cookie preferences at any time.",
      linkText: "Read Cookie Policy",
      linkHref: "#",
    },
  },
  {
    id: "sharing-vendors-and-integrations",
    number: 7,
    title: "Sharing, Vendors, and Integrations",
    paragraphs: [
      "We may share information with service providers who support hosting, security, analytics, and customer support, and with third-party integrations you or your admin choose to enable, subject to appropriate safeguards.",
    ],
  },
  {
    id: "retention-and-deletion",
    number: 8,
    title: "Retention and Deletion",
    paragraphs: [
      "We retain personal information for as long as necessary to provide the Service and comply with legal obligations. Workspace admins may configure retention settings for messages, files, meeting records, and AI summaries where the plan allows.",
    ],
  },
  {
    id: "security",
    number: 9,
    title: "Security",
    paragraphs: [
      "We maintain administrative, technical, and organizational measures designed to protect personal information, as described in our Security Policy.",
    ],
    infoBox: {
      text: "Review our security program and controls.",
      linkText: "Read Security Policy",
      linkHref: "#",
    },
  },
  {
    id: "your-privacy-choices",
    number: 10,
    title: "Your Privacy Choices",
    paragraphs: [
      "You can manage cookie preferences, communication preferences, and certain account settings directly. Workspace-level choices may be managed by your admin depending on your organization's configuration.",
    ],
  },
  {
    id: "privacy-requests",
    number: 11,
    title: "Privacy Requests",
    paragraphs: [
      "You may submit requests to access, correct, or delete personal information, subject to applicable law and any workspace admin controls. We aim to respond to verified requests within the timeframes required by applicable law.",
    ],
  },
  {
    id: "region-specific-notices",
    number: 12,
    title: "Region-Specific Notices",
    paragraphs: [
      "Additional rights and disclosures may apply to individuals in certain regions. Region-specific notices will be added here following legal review.",
    ],
    infoBox: {
      text: "Regional legal placeholders pending confirmation by counsel.",
    },
  },
  {
    id: "children-eligibility-placeholder",
    number: 13,
    title: "Children / Eligibility Placeholder",
    paragraphs: [
      "The Service is intended for business and professional use and is not directed to children. Eligibility language will be finalized by legal counsel prior to publication.",
    ],
  },
  {
    id: "changes-to-this-notice",
    number: 14,
    title: "Changes to This Notice",
    paragraphs: [
      "We may update this Privacy Notice from time to time. Material changes will be reflected by an updated effective date and, where required, additional notice.",
    ],
  },
  {
    id: "contact-us",
    number: 15,
    title: "Contact Us",
    paragraphs: [
      "Questions about this Privacy Notice or privacy requests can be directed to our privacy team using the contact options below.",
    ],
  },
];

export default function PrivacyNoticeContentSection() {
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
        .pnc-toc-link {
          transition: color .2s ease, border-color .2s ease;
        }
        .pnc-toc-link:hover {
          color: #374151;
        }
        .pnc-infobox-link {
          transition: gap .2s ease, color .2s ease;
        }
        .pnc-infobox-link .pnc-arrow {
          transition: transform .2s ease;
          display: inline-block;
        }
        .pnc-infobox-link:hover .pnc-arrow {
          transform: translateX(3px);
        }
        .pnc-cta-btn {
          transition: transform .2s ease, box-shadow .2s ease;
        }
        .pnc-cta-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 22px -10px rgba(0,0,0,0.35);
        }
      `}</style>

      <section aria-label="Privacy Notice content" className="w-full bg-white py-16 md:py-20">
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
                            className="pnc-toc-link text-left text-[13px] leading-snug pl-3 border-l-2"
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
                            className="pnc-infobox-link inline-flex items-center gap-1 text-[13px] font-semibold flex-shrink-0"
                            style={{ color: BRAND }}
                          >
                            {s.infoBox.linkText}
                            <span className="pnc-arrow">→</span>
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
                  Need a DPA or enterprise privacy review?
                </h3>
                <p className="text-[13.5px] leading-relaxed max-w-[560px] mx-auto mb-6" style={{ color: "#C7C9E8" }}>
                  Enterprise and business customers can request a Data
                  Processing Addendum, review security documentation, or
                  speak with our legal and sales teams about specific privacy
                  requirements.
                </p>
                <button className="pnc-cta-btn bg-white text-gray-900 text-[14px] font-semibold rounded-full px-6 py-3">
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