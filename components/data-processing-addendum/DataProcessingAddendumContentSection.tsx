"use client";

import React, { useEffect, useRef, useState } from "react";

const BRAND = "#3457E8";

type InfoBox = {
  text?: string;
  linkText?: string;
  linkHref?: string;
  fullLink?: boolean;
};

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
      "This Data Processing Addendum (\"DPA\") describes the terms that apply when Zoiko Sema processes personal data on behalf of a business or enterprise customer in connection with the Service, supplementing the Terms of Service.",
    ],
  },
  {
    id: "applicability-and-roles",
    number: 2,
    title: "Applicability and Roles",
    paragraphs: [
      "This DPA applies where the customer acts as a data controller (or equivalent) and Zoiko Sema acts as a data processor (or equivalent) with respect to personal data processed through the Service.",
    ],
    infoBox: {
      text: "Final role terminology (controller/processor/business/service provider) to be confirmed by legal counsel based on applicable law.",
    },
  },
  {
    id: "processing-scope",
    number: 3,
    title: "Processing Scope",
    paragraphs: [
      "Zoiko Sema processes personal data only to provide, secure, and support the Service in accordance with the customer's documented instructions and this DPA.",
    ],
  },
  {
    id: "customer-data-categories",
    number: 4,
    title: "Customer Data Categories",
    paragraphs: [
      "Processed data categories may include workspace and account data, communication content, meeting data, AI-generated outputs, support data, usage data, and integration data.",
    ],
    bullets: [
      "Account and workspace configuration data",
      "Messages, files, and meeting recordings",
      "AI summaries, transcripts, and action items",
      "Usage, device, and diagnostic data",
      "Support tickets and correspondence",
      "Integration and API activity data",
    ],
  },
  {
    id: "processing-purposes-and-instructions",
    number: 5,
    title: "Processing Purposes and Instructions",
    paragraphs: [
      "Zoiko Sema processes personal data solely to deliver, secure, support, and improve the Service in accordance with the customer's instructions as reflected in the order form and this DPA.",
    ],
  },
  {
    id: "subprocessors",
    number: 6,
    title: "Subprocessors",
    paragraphs: [
      "Zoiko Sema engages approved subprocessors to support hosting, security, and operational functions. A current subprocessor list is available on request, and customers will be notified of material changes in accordance with this DPA.",
    ],
    infoBox: {
      text: "Request the current subprocessor list.",
      linkText: "View Subprocessors",
      linkHref: "#",
    },
  },
  {
    id: "security-measures",
    number: 7,
    title: "Security Measures",
    paragraphs: [
      "Zoiko Sema maintains technical and organizational security measures described in our Security Policy and available in more detail through the Trust Center.",
    ],
    infoBox: {
      text: "Review our security program in detail.",
      linkText: "Visit Trust Center",
      linkHref: "#",
    },
  },
  {
    id: "international-transfers",
    number: 8,
    title: "International Transfers",
    paragraphs: [
      "Where personal data is transferred internationally, Zoiko Sema relies on appropriate transfer mechanisms as required by applicable law.",
    ],
    infoBox: {
      text: "Transfer mechanism language (e.g., SCCs) pending confirmation by legal counsel.",
    },
  },
  {
    id: "data-subject-requests",
    number: 9,
    title: "Data Subject Requests",
    paragraphs: [
      "Zoiko Sema will provide reasonable assistance to customers in responding to verified data subject requests relating to personal data processed through the Service.",
    ],
    infoBox: {
      text: "Submit or route a data subject request.",
      linkText: "Submit Privacy Request",
      linkHref: "#",
    },
  },
  {
    id: "return-deletion-and-retention",
    number: 10,
    title: "Return, Deletion, and Retention",
    paragraphs: [
      "Upon termination of the Service or upon customer request, Zoiko Sema will return or delete personal data in accordance with this DPA and applicable retention obligations.",
    ],
  },
  {
    id: "audit-and-compliance-review",
    number: 11,
    title: "Audit and Compliance Review",
    paragraphs: [
      "Zoiko Sema will make available information reasonably necessary to demonstrate compliance with this DPA, subject to confidentiality and security considerations, and may direct requests to existing audit reports where available.",
    ],
  },
  {
    id: "dpa-request-and-signature-workflow",
    number: 12,
    title: "DPA Request and Signature Workflow",
    paragraphs: [
      "Business and enterprise customers can request execution of this DPA through our sales or legal team. Requests are reviewed and routed to a signature workflow once commercial context is confirmed.",
    ],
    infoBox: {
      linkText: "Request DPA Review — routes to the legal review and e-signature workflow.",
      linkHref: "#",
      fullLink: true,
    },
  },
  {
    id: "changes-to-this-addendum",
    number: 13,
    title: "Changes to This Addendum",
    paragraphs: [
      "We may update this DPA to reflect legal, operational, or security changes. Material changes will be reflected by an updated effective date.",
    ],
  },
  {
    id: "contact-us",
    number: 14,
    title: "Contact Us",
    paragraphs: [
      "Questions about this DPA can be directed to our legal and privacy team using the contact options below.",
    ],
  },
];

export default function DataProcessingAddendumContentSection() {
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
        .dpc-toc-link { transition: color .2s ease, border-color .2s ease; }
        .dpc-toc-link:hover { color: #374151; }
        .dpc-infobox-link { transition: gap .2s ease, color .2s ease; }
        .dpc-infobox-link .dpc-arrow { transition: transform .2s ease; display: inline-block; }
        .dpc-infobox-link:hover .dpc-arrow { transform: translateX(3px); }
        .dpc-cta-btn { transition: transform .2s ease, box-shadow .2s ease; }
        .dpc-cta-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 22px -10px rgba(0,0,0,0.35);
        }
      `}</style>

      <section aria-label="Data Processing Addendum content" className="w-full bg-white py-16 md:py-20">
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
                            className="dpc-toc-link text-left text-[13px] leading-snug pl-3 border-l-2"
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
                      <ul className="flex flex-col gap-1.5 mt-2 mb-1 max-w-[720px]">
                        {s.bullets.map((b, bi) => (
                          <li key={bi} className="text-[13.5px] text-gray-500 flex items-start gap-2">
                            <span
                              className="mt-[7px] w-1 h-1 rounded-full shrink-0"
                              style={{ background: BRAND }}
                            />
                            {b}
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
                            className="dpc-infobox-link inline-flex items-center gap-1 text-[13px] font-semibold flex-shrink-0"
                            style={{ color: BRAND }}
                          >
                            {s.infoBox.linkText}
                            <span className="dpc-arrow">→</span>
                          </a>
                        )}
                      </div>
                    )}

                    {s.infoBox?.fullLink && (
                      <a
                        href={s.infoBox.linkHref}
                        className="dpc-infobox-link block mt-4 rounded-xl px-5 py-4 text-[13px] font-medium"
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
                  Ready to execute a DPA for your organization?
                </h3>
                <p className="text-[13.5px] leading-relaxed max-w-[560px] mx-auto mb-6" style={{ color: "#C7C9E8" }}>
                  Business and enterprise customers can request DPA execution, review subprocessor lists, or discuss data residency and security requirements with our legal and sales teams.
                </p>
                <button className="dpc-cta-btn bg-white text-gray-900 text-[14px] font-semibold rounded-full px-6 py-3">
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