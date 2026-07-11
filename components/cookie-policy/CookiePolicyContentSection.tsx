"use client";

import React, { useEffect, useRef, useState } from "react";

const BRAND = "#3457E8";

type InfoBox = {
  text?: string;
  linkText?: string;
  linkHref?: string;
  fullLink?: boolean;
};

type TableRow = {
  cookie: string;
  category: "essential" | "pref" | "analytics";
  provider: string;
  purpose: string;
  duration: string;
  surface: string;
  choice: string;
};

type Section = {
  id: string;
  number: number;
  title: string;
  paragraphs: string[];
  infoBox?: InfoBox;
  table?: TableRow[];
};

const CATEGORY_STYLES: Record<TableRow["category"], { color: string; bg: string }> = {
  essential: { color: "#16A34A", bg: "#DCFCE7" },
  pref: { color: BRAND, bg: "#E6E9FB" },
  analytics: { color: "#D97706", bg: "#FEF3C7" },
};

const sections: Section[] = [
  {
    id: "overview",
    number: 1,
    title: "Overview",
    paragraphs: [
      "This Cookie Policy explains how Zoiko Sema uses cookies and similar technologies on our website and in our app, and the choices available to you.",
    ],
  },
  {
    id: "what-cookies-and-similar-technologies-are",
    number: 2,
    title: "What Cookies and Similar Technologies Are",
    paragraphs: [
      "Cookies are small text files placed on your device that help websites and apps function, remember preferences, and understand usage. Similar technologies include local storage and pixels used for comparable purposes.",
    ],
  },
  {
    id: "how-zoiko-sema-uses-cookies",
    number: 3,
    title: "How Zoiko Sema Uses Cookies",
    paragraphs: [
      "We use cookies for essential functionality such as keeping you signed in, for security purposes such as fraud prevention, for remembering your preferences, and for analytics that help us understand how the Service is used.",
    ],
  },
  {
    id: "cookie-categories",
    number: 4,
    title: "Cookie Categories",
    paragraphs: [
      "Cookies fall into four categories: essential, preference, analytics, and marketing. Essential cookies are always on; other categories can typically be managed through the Cookie Preference Center.",
    ],
  },
  {
    id: "essential-cookies",
    number: 5,
    title: "Essential Cookies",
    paragraphs: [
      "Essential cookies are required for core site and app functionality, including authentication, load balancing, security, and accessibility. These cannot be turned off because the Service would not function correctly without them.",
    ],
  },
  {
    id: "preference-cookies",
    number: 6,
    title: "Preference Cookies",
    paragraphs: [
      "Preference cookies remember choices like language and display settings so you don't have to reset them on every visit.",
    ],
  },
  {
    id: "analytics-cookies",
    number: 7,
    title: "Analytics Cookies",
    paragraphs: [
      "Analytics cookies help us understand aggregate usage patterns so we can improve product quality and reliability. Where required, these cookies are used only with your consent.",
    ],
  },
  {
    id: "marketing-cookies-placeholder",
    number: 8,
    title: "Marketing Cookies Placeholder",
    paragraphs: [
      "Zoiko Sema does not currently use marketing or advertising cookies on core product surfaces. This section will be updated if that changes and will be subject to legal and privacy review.",
    ],
    infoBox: {
      text: "Placeholder pending confirmation from marketing and legal teams.",
    },
  },
  {
    id: "cookie-preference-center",
    number: 9,
    title: "Cookie Preference Center",
    paragraphs: [
      "You can review and update your cookie choices at any time using the Cookie Preference Center.",
    ],
    infoBox: {
      linkText:
        "Manage Cookie Choices — opens the preference center (to be wired to your consent management platform).",
      linkHref: "#",
      fullLink: true,
    },
  },
  {
    id: "cookie-table",
    number: 10,
    title: "Cookie Table",
    paragraphs: [
      "The table below lists representative cookies used across our website and app. Final cookie names, providers, purposes, and durations must be confirmed by the engineering and privacy teams before publication.",
    ],
    table: [
      {
        cookie: "sema_session",
        category: "essential",
        provider: "Zoiko Sema",
        purpose: "Maintains signed-in session state",
        duration: "Session",
        surface: "Website, App",
        choice: "Always on",
      },
      {
        cookie: "sema_csrf",
        category: "essential",
        provider: "Zoiko Sema",
        purpose: "Protects against cross-site request forgery",
        duration: "Session",
        surface: "Website",
        choice: "Always on",
      },
      {
        cookie: "sema_pref_lang",
        category: "pref",
        provider: "Zoiko Sema",
        purpose: "Remembers language and display preferences",
        duration: "1 year",
        surface: "Website, App",
        choice: "Toggle",
      },
      {
        cookie: "sema_pref_theme",
        category: "pref",
        provider: "Zoiko Sema",
        purpose: "Remembers light/dark interface preference",
        duration: "1 year",
        surface: "App",
        choice: "Toggle",
      },
      {
        cookie: "sema_analytics_id",
        category: "analytics",
        provider: "Zoiko Sema",
        purpose: "Understands aggregate feature usage patterns",
        duration: "13 months",
        surface: "Website, App",
        choice: "Opt out",
      },
    ],
  },
  {
    id: "third-party-providers",
    number: 11,
    title: "Third-Party Providers",
    paragraphs: [
      "Where we use approved third-party analytics or infrastructure providers, those providers may set cookies subject to their own privacy practices and our data processing agreements with them.",
    ],
  },
  {
    id: "changing-your-choices",
    number: 12,
    title: "Changing Your Choices",
    paragraphs: [
      "You can change your cookie choices at any time through the Cookie Preference Center or your browser settings. Note that disabling essential cookies may affect Service functionality.",
    ],
  },
  {
    id: "regional-notices-placeholder",
    number: 13,
    title: "Regional Notices Placeholder",
    paragraphs: [
      "Additional region-specific cookie and consent requirements may apply. Regional notices will be added here following legal review.",
    ],
    infoBox: {
      text: "Placeholder — do not publish without confirmed regional legal text.",
    },
  },
  {
    id: "changes-to-this-policy",
    number: 14,
    title: "Changes to This Policy",
    paragraphs: [
      "We may update this Cookie Policy from time to time. Material changes will be reflected by an updated effective date.",
    ],
  },
  {
    id: "contact-us",
    number: 15,
    title: "Contact Us",
    paragraphs: [
      "Questions about cookies or your choices can be directed to our privacy team using the contact options below.",
    ],
  },
];

export default function CookiePolicyContentSection() {
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
        .cpc-toc-link { transition: color .2s ease, border-color .2s ease; }
        .cpc-toc-link:hover { color: #374151; }
        .cpc-infobox-link { transition: gap .2s ease, color .2s ease; }
        .cpc-infobox-link .cpc-arrow { transition: transform .2s ease; display: inline-block; }
        .cpc-infobox-link:hover .cpc-arrow { transform: translateX(3px); }
        .cpc-cta-btn { transition: transform .2s ease, box-shadow .2s ease; }
        .cpc-cta-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 22px -10px rgba(0,0,0,0.35);
        }
        .cpc-table-row { transition: background .2s ease; }
        .cpc-table-row:hover { background: #F8F9FE; }
      `}</style>

      <section aria-label="Cookie Policy content" className="w-full bg-white py-16 md:py-20">
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
                            className="cpc-toc-link text-left text-[13px] leading-snug pl-3 border-l-2"
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
                            className="cpc-infobox-link inline-flex items-center gap-1 text-[13px] font-semibold flex-shrink-0"
                            style={{ color: BRAND }}
                          >
                            {s.infoBox.linkText}
                            <span className="cpc-arrow">→</span>
                          </a>
                        )}
                      </div>
                    )}

                    {s.infoBox?.fullLink && (
                      <a
                        href={s.infoBox.linkHref}
                        className="cpc-infobox-link block mt-4 rounded-xl px-5 py-4 text-[13px] font-medium"
                        style={{ background: "#EEF0FC", color: BRAND }}
                      >
                        {s.infoBox.linkText}
                      </a>
                    )}

                    {s.table && (
                      <div className="mt-4 overflow-x-auto rounded-xl border border-gray-200">
                        <table className="w-full border-collapse min-w-[720px]">
                          <thead>
                            <tr className="bg-gray-50">
                              {["Cookie", "Category", "Provider", "Purpose", "Duration", "Surface", "Choice"].map(
                                (col) => (
                                  <th
                                    key={col}
                                    className="text-left text-[10.5px] font-semibold uppercase tracking-[0.08em] text-gray-400 px-4 py-3 whitespace-nowrap"
                                  >
                                    {col}
                                  </th>
                                )
                              )}
                            </tr>
                          </thead>
                          <tbody>
                            {s.table.map((row, ri) => {
                              const cat = CATEGORY_STYLES[row.category];
                              return (
                                <tr
                                  key={ri}
                                  className="cpc-table-row border-t border-gray-100"
                                >
                                  <td className="px-4 py-3 text-[13px] font-medium text-gray-800 whitespace-nowrap">
                                    {row.cookie}
                                  </td>
                                  <td className="px-4 py-3">
                                    <span
                                      className="inline-flex items-center rounded-full px-2.5 py-1 text-[11px] font-semibold"
                                      style={{ background: cat.bg, color: cat.color }}
                                    >
                                      {row.category}
                                    </span>
                                  </td>
                                  <td className="px-4 py-3 text-[13px] text-gray-600 whitespace-nowrap">
                                    {row.provider}
                                  </td>
                                  <td className="px-4 py-3 text-[13px] text-gray-600 min-w-[220px]">
                                    {row.purpose}
                                  </td>
                                  <td className="px-4 py-3 text-[13px] text-gray-600 whitespace-nowrap">
                                    {row.duration}
                                  </td>
                                  <td className="px-4 py-3 text-[13px] text-gray-600 whitespace-nowrap">
                                    {row.surface}
                                  </td>
                                  <td className="px-4 py-3 text-[13px] text-gray-600 whitespace-nowrap">
                                    {row.choice}
                                  </td>
                                </tr>
                              );
                            })}
                          </tbody>
                        </table>
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
                  Need details for a vendor or privacy review?
                </h3>
                <p className="text-[13.5px] leading-relaxed max-w-[560px] mx-auto mb-6" style={{ color: "#C7C9E8" }}>
                  Enterprise customers and procurement teams can request
                  additional detail on cookie providers, data flows, and
                  consent handling through our Trust Center or legal team.
                </p>
                <button className="cpc-cta-btn bg-white text-gray-900 text-[14px] font-semibold rounded-full px-6 py-3">
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