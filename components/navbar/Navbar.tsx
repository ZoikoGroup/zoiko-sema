"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

/* ---------------- Nav data ---------------- */

type NavChild = { label: string; href: string; desc?: string };
type NavItem = { title: string; url: string; children?: NavChild[] };

const menuItems: NavItem[] = [
  {
    title: "Products",
    url: "/products",
    children: [
      { label: "Messaging", href: "/messaging", desc: "Chat, channels, and team conversations" },
      { label: "Audio Calls", href: "/audio-calls", desc: "Voice calls that stay connected to work" },
      { label: "Video Meetings", href: "/video-meetings", desc: "Meetings that drive decisions" },
      { label: "Channels & Spaces", href: "/product/channels", desc: "Organized conversations" },
    ],
  },
  {
    title: "Solutions",
    url: "/solutions",
    children: [
      { label: "For Individuals", href: "/solutions/individuals" },
      { label: "For Teams", href: "/solutions/teams" },
      { label: "For Enterprises", href: "/solutions/enterprise" },
    ],
  },
  {
    title: "Use Cases",
    url: "/use-cases",
    children: [
      { label: "Founder-led teams", href: "/use-cases/founders" },
      { label: "Remote teams", href: "/use-cases/remote" },
      { label: "Customer support", href: "/use-cases/support" },
    ],
  },
  { title: "ZoikoTime", url: "/zoikotime" },
  { title: "Pricing", url: "/pricing" },
  {
    title: "Resources",
    url: "/resources",
    children: [
      { label: "Blog", href: "/resources/blog" },
      { label: "Help Center", href: "/resources/help" },
      { label: "Documentation", href: "/resources/docs" },
    ],
  },
  {
    title: "Sema Meet",
    url: "/sema-meet",
    children: [
      { label: "Overview", href: "/sema-meet" },
      { label: "Download", href: "/sema-meet/download" },
    ],
  },
];

/* ---------------- Workspace grid popup data ---------------- */

type WorkspaceCard = {
  title: string;
  desc: string;
  href: string;
  icon: React.ReactNode;
  iconBg: string;
};

type WorkspaceGroup = {
  label: string;
  icon: React.ReactNode;
  items: WorkspaceCard[];
};

const iconWrap = (children: React.ReactNode) => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    {children}
  </svg>
);

const workspaceGroups: WorkspaceGroup[] = [
  {
    label: "Communicate",
    icon: iconWrap(<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />),
    items: [
      {
        title: "Meetings",
        desc: "Video meetings and screen sharing",
        href: "/video-meetings",
        iconBg: "bg-brand-light text-brand",
        icon: iconWrap(<><polygon points="23 7 16 12 23 17 23 7" /><rect x="1" y="5" width="15" height="14" rx="2" ry="2" /></>),
      },
      {
        title: "Messaging",
        desc: "Chat, channels and team conversations",
        href: "/messaging",
        iconBg: "bg-brand-light text-brand",
        icon: iconWrap(<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />),
      },
      {
        title: "Calls",
        desc: "High-quality voice and audio calls",
        href: "/audio-calls",
        iconBg: "bg-brand-light text-brand",
        icon: iconWrap(<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.35 2 2 0 0 1 3.6 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.6a16 16 0 0 0 6.29 6.29l.96-.96a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />),
      },
    ],
  },
  {
    label: "Intelligence",
    icon: iconWrap(<path d="M12 2l1.8 5.6L19 9l-5.2 1.4L12 16l-1.8-5.6L5 9l5.2-1.4z" />),
    items: [
      {
        title: "Sema AI",
        desc: "AI assistant for smarter work and answers",
        href: "/sema-ai",
        iconBg: "bg-brand-light text-brand",
        icon: iconWrap(<path d="M12 2l1.8 5.6L19 9l-5.2 1.4L12 16l-1.8-5.6L5 9l5.2-1.4z" />),
      },
      {
        title: "AI Meeting Summaries",
        desc: "Instant summaries, decisions, insights",
        href: "/ai-summaries",
        iconBg: "bg-brand-light text-brand",
        icon: iconWrap(<><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /></>),
      },
      {
        title: "Sema Notes",
        desc: "Capture, organise and share notes",
        href: "/sema-notes",
        iconBg: "bg-brand-light text-brand",
        icon: iconWrap(<><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><line x1="8" y1="13" x2="16" y2="13" /><line x1="8" y1="17" x2="13" y2="17" /></>),
      },
    ],
  },
  {
    label: "Govern",
    icon: iconWrap(<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />),
    items: [
      {
        title: "Admin Console",
        desc: "Manage users, settings and workspace",
        href: "/admin-console",
        iconBg: "bg-brand-light text-brand",
        icon: iconWrap(<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />),
      },
      {
        title: "Confidential Mode",
        desc: "Secure conversations and data protection",
        href: "/confidential-mode",
        iconBg: "bg-brand-light text-brand",
        icon: iconWrap(<><rect x="3" y="11" width="18" height="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></>),
      },
      {
        title: "Security Center",
        desc: "Security, compliance and audit controls",
        href: "/security-center",
        iconBg: "bg-brand-light text-brand",
        icon: iconWrap(<><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><polyline points="9 12 11 14 15 10" /></>),
      },
    ],
  },
  {
    label: "Connect",
    icon: iconWrap(<><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" /><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" /></>),
    items: [
      {
        title: "ZoikoTime",
        desc: "Workforce assurance and time intelligence",
        href: "/zoikotime",
        iconBg: "bg-emerald-50 text-emerald-600",
        icon: <span className="text-[11px] font-bold">Zt</span>,
      },
      {
        title: "Integrations",
        desc: "Connect your favourite tools and apps",
        href: "/integrations",
        iconBg: "bg-brand-light text-brand",
        icon: iconWrap(<><rect x="3" y="3" width="7" height="7" rx="1" /><rect x="14" y="3" width="7" height="7" rx="1" /><rect x="3" y="14" width="7" height="7" rx="1" /><rect x="14" y="14" width="7" height="7" rx="1" /></>),
      },
      {
        title: "API & Developers",
        desc: "Build, extend and integrate with Sema",
        href: "/developers",
        iconBg: "bg-brand-light text-brand",
        icon: iconWrap(<polyline points="16 18 22 12 16 6 8 6 2 12 8 18 16 18" />),
      },
    ],
  },
];

/* ---------------- Component ---------------- */

export default function Navbar() {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [workspaceOpen, setWorkspaceOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [openMobileAccordion, setOpenMobileAccordion] = useState<string | null>(null);

  const workspaceRef = useRef<HTMLDivElement>(null);
  const gridBtnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!workspaceOpen) return;

    const handleClick = (e: MouseEvent) => {
      if (
        workspaceRef.current &&
        !workspaceRef.current.contains(e.target as Node) &&
        gridBtnRef.current &&
        !gridBtnRef.current.contains(e.target as Node)
      ) {
        setWorkspaceOpen(false);
      }
    };
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setWorkspaceOpen(false);
    };

    document.addEventListener("mousedown", handleClick);
    document.addEventListener("keydown", handleEsc);
    return () => {
      document.removeEventListener("mousedown", handleClick);
      document.removeEventListener("keydown", handleEsc);
    };
  }, [workspaceOpen]);

  useEffect(() => {
    if (workspaceOpen && window.innerWidth < 768) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [workspaceOpen]);

  return (
    <>
      <style>{`
        @keyframes navDropdownIn {
          from { opacity: 0; transform: translateY(-6px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .nav-dropdown { animation: navDropdownIn .18s ease forwards; }

        @keyframes wsPopIn {
          from { opacity: 0; transform: translateY(-10px) scale(0.97); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }
        .ws-panel-enter { animation: wsPopIn .22s cubic-bezier(.22,1,.36,1) forwards; transform-origin: top right; }

        @keyframes wsOverlayIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        .ws-overlay-enter { animation: wsOverlayIn .2s ease forwards; }

        @keyframes wsCardStagger {
          from { opacity: 0; transform: translateY(8px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .ws-card { opacity: 0; animation: wsCardStagger .35s ease forwards; }

        .ws-card-link {
          transition: transform .22s ease, box-shadow .22s ease, border-color .22s ease, background-color .22s ease;
        }
        .ws-card-link:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 20px rgba(59,95,221,0.12);
          border-color: color-mix(in srgb, var(--brand) 30%, transparent);
          background-color: #fafbff;
        }

        .grid-btn-dot { transition: background-color .2s ease; }

        @keyframes mobileMenuIn {
          from { opacity: 0; transform: translateY(-8px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .mobile-menu-enter { animation: mobileMenuIn .22s ease forwards; }

        @media (prefers-reduced-motion: reduce) {
          .nav-dropdown, .ws-panel-enter, .ws-overlay-enter, .ws-card, .mobile-menu-enter {
            animation: none !important; opacity: 1 !important; transform: none !important;
          }
        }
      `}</style>

      <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-100">
        {/* Full width, side padding as % of viewport instead of a max-width container */}
        <div className="w-full px-[4%] xl:px-[5%]">
          <div className="h-16 sm:h-20 lg:h-[95px] flex items-center justify-between gap-3">
            {/* Logo */}
            <Link href="/" className="flex-shrink-0">
              <img src="/logo.png" alt="Logo" className="h-8 sm:h-9 lg:h-10 w-auto" />
            </Link>

            {/* Desktop Menu */}
            <nav className="hidden lg:flex items-center gap-4 xl:gap-6 flex-1 justify-center">
              {menuItems.map((item) => (
                <div
                  key={item.title}
                  className="relative flex-shrink-0"
                  onMouseEnter={() => item.children && setOpenDropdown(item.title)}
                  onMouseLeave={() => item.children && setOpenDropdown(null)}
                >
                  <Link
                    href={item.url}
                    className="relative flex items-center gap-1 text-[13px] xl:text-[14px] font-semibold text-gray-800 group py-2 whitespace-nowrap"
                  >
                    {item.title}
                    {item.children && (
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-gray-400 flex-shrink-0"
                        style={{
                          transform: openDropdown === item.title ? "rotate(180deg)" : "rotate(0deg)",
                          transition: "transform .2s ease",
                        }}
                      >
                        <polyline points="6 9 12 15 18 9" />
                      </svg>
                    )}
                    <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-brand transition-all duration-300 group-hover:w-full" />
                  </Link>

                  {item.children && openDropdown === item.title && (
                    <div className="nav-dropdown absolute top-full left-0 pt-2 w-60 z-10">
                      <div className="rounded-xl border border-gray-100 bg-white shadow-[0_16px_40px_rgba(15,15,40,0.12)] p-2">
                        {item.children.map((child) => (
                          <Link
                            key={child.label}
                            href={child.href}
                            className="block rounded-lg px-3 py-2.5 hover:bg-brand-light transition-colors duration-150"
                          >
                            <p className="text-[13px] font-semibold text-gray-800">
                              {child.label}
                            </p>
                            {child.desc && (
                              <p className="text-[11.5px] text-gray-500 mt-0.5">
                                {child.desc}
                              </p>
                            )}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* Desktop right side */}
            <div className="hidden lg:flex items-center gap-2.5 xl:gap-3 flex-shrink-0">
              <Link
                href="/login"
                className="text-[13px] xl:text-[14px] font-semibold text-[#1A1D2E] hover:text-brand transition-colors whitespace-nowrap"
              >
                Log in
              </Link>
              <Link
                href="/contact-sales"
                className="border border-brand text-brand px-4 xl:px-5 py-2 xl:py-2.5 rounded-[8px] text-[12.5px] xl:text-[13.5px] font-medium hover:bg-brand-light transition-colors whitespace-nowrap"
              >
                Contact Sales
              </Link>
              <Link
                href="/start-free"
                className="bg-brand text-white px-4 xl:px-5 py-2 xl:py-2.5 rounded-[8px] text-[12.5px] xl:text-[13.5px] font-medium hover:bg-brand-dark transition-colors whitespace-nowrap"
              >
                Start Free
              </Link>

              {/* Grid launcher button */}
              <button
                ref={gridBtnRef}
                onClick={() => setWorkspaceOpen((v) => !v)}
                aria-label="Open workspace apps"
                aria-expanded={workspaceOpen}
                className="w-9 h-9 xl:w-10 xl:h-10 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors duration-200"
                style={{ backgroundColor: workspaceOpen ? "#EEF2FF" : "transparent" }}
              >
                <div className="grid grid-cols-3 gap-[6px]">
                  {Array.from({ length: 9 }).map((_, i) => (
                    <span
                      key={i}
                      className="grid-btn-dot w-[8px] h-[8px] rounded-full"
                      style={{ backgroundColor: "var(--brand)" }}
                    />
                  ))}
                </div>
              </button>
            </div>

            {/* Mobile: grid + hamburger */}
            <div className="flex lg:hidden items-center gap-2 flex-shrink-0">
              <button
                ref={gridBtnRef}
                onClick={() => setWorkspaceOpen((v) => !v)}
                aria-label="Open workspace apps"
                aria-expanded={workspaceOpen}
                className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ background: "#EEF2FF" }}
              >
                <div className="grid grid-cols-3 gap-[3px]">
                  {Array.from({ length: 9 }).map((_, i) => (
                    <span
                      key={i}
                      className="w-[3.5px] h-[3.5px] rounded-full"
                      style={{ backgroundColor: "var(--brand)" }}
                    />
                  ))}
                </div>
              </button>

              <button
                onClick={() => setMobileMenu(!mobileMenu)}
                aria-label={mobileMenu ? "Close menu" : "Open menu"}
                aria-expanded={mobileMenu}
                className="flex flex-col justify-center items-center w-10 h-10 rounded-xl transition-colors duration-200"
                style={{ background: mobileMenu ? "#474787" : "#EEF2FF" }}
              >
                {mobileMenu ? (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round">
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                ) : (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#474787" strokeWidth="2.2" strokeLinecap="round">
                    <line x1="3" y1="6" x2="21" y2="6" />
                    <line x1="3" y1="12" x2="21" y2="12" />
                    <line x1="3" y1="18" x2="21" y2="18" />
                  </svg>
                )}
              </button>
            </div>
          </div>

          {/* Mobile Dropdown */}
          {mobileMenu && (
            <div
              className="mobile-menu-enter lg:hidden py-5 border-t max-h-[calc(100vh-64px)] overflow-y-auto"
              style={{ borderColor: "rgba(71,71,135,0.12)" }}
            >
              <div className="flex flex-col gap-1">
                {menuItems.map((item) => (
                  <div key={item.title}>
                    <button
                      onClick={() => {
                        if (item.children) {
                          setOpenMobileAccordion((prev) => (prev === item.title ? null : item.title));
                        } else {
                          setMobileMenu(false);
                        }
                      }}
                      className="w-full flex items-center justify-between gap-3 px-4 py-3 rounded-xl font-medium transition-colors duration-150"
                      style={{ color: "#474787" }}
                    >
                      <span className="flex items-center gap-3">
                        <span
                          className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                          style={{ background: "#3B6FF7" }}
                        />
                        {item.children ? (
                          item.title
                        ) : (
                          <Link href={item.url} onClick={() => setMobileMenu(false)}>
                            {item.title}
                          </Link>
                        )}
                      </span>
                      {item.children && (
                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          style={{
                            transform: openMobileAccordion === item.title ? "rotate(180deg)" : "rotate(0deg)",
                            transition: "transform .2s ease",
                          }}
                        >
                          <polyline points="6 9 12 15 18 9" />
                        </svg>
                      )}
                    </button>

                    {item.children && openMobileAccordion === item.title && (
                      <div className="pl-8 pr-2 pb-2 flex flex-col gap-0.5">
                        {item.children.map((child) => (
                          <Link
                            key={child.label}
                            href={child.href}
                            onClick={() => setMobileMenu(false)}
                            className="px-3 py-2.5 rounded-lg text-[13.5px] text-gray-600 hover:bg-brand-light hover:text-brand transition-colors"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}

                <div className="my-3 h-px" style={{ background: "rgba(71,71,135,0.1)" }} />

                <Link
                  href="/login"
                  onClick={() => setMobileMenu(false)}
                  className="flex items-center justify-center px-5 py-3 rounded-full font-semibold text-[#1A1D2E]"
                >
                  Log in
                </Link>

                <Link
                  href="/contact-sales"
                  onClick={() => setMobileMenu(false)}
                  className="flex items-center justify-center px-5 py-3 rounded-full font-medium mt-1"
                  style={{ border: "1.5px solid #3B6FF7", color: "#3B6FF7" }}
                >
                  Contact Sales
                </Link>

                <Link
                  href="/start-free"
                  onClick={() => setMobileMenu(false)}
                  className="flex items-center justify-center px-5 py-3 rounded-full font-medium text-white mt-2"
                  style={{ background: "#474787" }}
                >
                  Start free
                </Link>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* ---------------- Workspace launcher popup ---------------- */}
      {workspaceOpen && (
        <>
          <div
            className="ws-overlay-enter fixed inset-0 z-[60] bg-black/40 md:hidden"
            onClick={() => setWorkspaceOpen(false)}
          />

          <div
            ref={workspaceRef}
            className="ws-panel-enter fixed z-[70] bg-white overflow-y-auto
                       inset-x-3 top-[72px] bottom-3 rounded-2xl
                       sm:inset-x-6 sm:top-20
                       md:inset-x-auto md:bottom-auto md:top-[76px] md:right-[4%] xl:right-[5%]
                       md:w-[563px] md:max-h-[85vh] md:rounded-2xl"
            style={{ boxShadow: "0 24px 60px rgba(15,15,40,0.22)" }}
          >
            {/* Header */}
            <div className="flex items-center justify-between px-5 sm:px-6 py-4 sm:py-5 border-b border-gray-100">
              <div className="flex items-center gap-2.5">
                {/* Logo */}
            <Link href="/" className="flex-shrink-0">
              <img src="/logo.png" alt="Logo" className="h-8 sm:h-9 lg:h-10 w-auto" />
            </Link>
              </div>
              <button
                onClick={() => setWorkspaceOpen(false)}
                aria-label="Close"
                className="w-7 h-7 rounded-lg flex items-center justify-center text-gray-400 hover:bg-gray-50 hover:text-gray-600 transition-colors"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </button>
            </div>

            {/* Groups */}
            <div className="px-5 sm:px-6 py-4 sm:py-5 flex flex-col gap-5 sm:gap-6">
              {workspaceGroups.map((group, gi) => (
                <div key={group.label}>
                  <div className="flex items-center gap-1.5 mb-3 text-brand">
                    {group.icon}
                    <span className="text-[12.5px] font-semibold text-gray-800">
                      {group.label}
                    </span>
                  </div>

                  <div className="grid grid-cols-3 gap-2.5 sm:gap-3">
                    {group.items.map((card, ci) => (
                      <Link
                        key={card.title}
                        href={card.href}
                        onClick={() => setWorkspaceOpen(false)}
                        className="ws-card ws-card-link"
                        style={{ animationDelay: `${gi * 0.06 + ci * 0.03}s` }}
                      >
                        <div className="rounded-xl border border-gray-100 p-3 sm:p-3.5 h-full flex flex-col">
                          <span
                            className={`w-8 h-8 rounded-lg flex items-center justify-center mb-2.5 flex-shrink-0 ${card.iconBg}`}
                          >
                            {card.icon}
                          </span>
                          <p className="text-[12px] sm:text-[12.5px] font-bold text-gray-900 mb-1 leading-tight">
                            {card.title}
                          </p>
                          <p className="text-[10.5px] sm:text-[11px] leading-[1.4] text-gray-500">
                            {card.desc}
                          </p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Footer */}
            <div className="px-5 sm:px-6 py-4 sm:py-5 border-t border-gray-100 flex flex-col sm:flex-row gap-2.5 sticky bottom-0 bg-white">
              <Link
                href="/contact-sales"
                onClick={() => setWorkspaceOpen(false)}
                className="flex-1 inline-flex items-center justify-center gap-2 rounded-[8px] px-5 py-3 text-[13.5px] font-semibold text-white transition-colors hover:bg-brand-dark"
                style={{ backgroundColor: "var(--brand)" }}
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 18v-6a9 9 0 0 1 18 0v6" />
                  <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" />
                </svg>
                Contact Sales
              </Link>
              <Link
                href="/product-overview"
                onClick={() => setWorkspaceOpen(false)}
                className="flex-1 inline-flex items-center justify-center gap-2 rounded-[8px] px-5 py-3 text-[13.5px] font-semibold border transition-colors hover:bg-brand-light"
                style={{ borderColor: "var(--brand)", color: "var(--brand)" }}
              >
                Explore Platform
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="7" y1="17" x2="17" y2="7" />
                  <polyline points="7 7 17 7 17 17" />
                </svg>
              </Link>
            </div>
          </div>
        </>
      )}
    </>
  );
}