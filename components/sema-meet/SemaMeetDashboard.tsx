"use client";

import React from "react";
import {
  Search,
  Bell,
  HelpCircle,
  ChevronDown,
  Link2,
  Play,
  CalendarClock,
  Info,
  Home,
  CalendarDays,
  LogIn,
  PlayCircle,
  Calendar,
  Video,
  FileText,
  History,
  LayoutTemplate,
  Settings,
} from "lucide-react";

/* -------------------------------------------------------------------------- */
/*  Types                                                                     */
/* -------------------------------------------------------------------------- */

interface NavItem {
  label: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
  active?: boolean;
}

interface StatusPillProps {
  label: string;
  tone: "green" | "purple" | "orange" | "blue";
}

/* -------------------------------------------------------------------------- */
/*  Static data                                                               */
/* -------------------------------------------------------------------------- */

const primaryNav: NavItem[] = [
  { label: "Home", icon: Home, active: true },
  { label: "Upcoming", icon: CalendarDays },
  { label: "Join", icon: LogIn },
  { label: "Start", icon: PlayCircle },
  { label: "Schedule", icon: Calendar },
];

const secondaryNav: NavItem[] = [
  { label: "Recordings", icon: Video },
  { label: "Summaries", icon: FileText },
  { label: "Meeting History", icon: History },
  { label: "Templates", icon: LayoutTemplate },
];

const upcomingMeetings = [
  {
    title: "Board prep: Q3 agenda",
    subtitle: "Tomorrow · 9:00 AM PT · 5 guests",
    pill: { label: "Calendar", tone: "purple" as const },
  },
  {
    title: "Weekly team standup",
    subtitle: "Thu · 10:00 AM PT · Recurring",
    pill: { label: "Ready", tone: "green" as const },
  },
];

const recentMeetings = [
  {
    title: "Client onboarding call",
    subtitle: "Ended yesterday · Summary pending review",
    pill: { label: "Review needed", tone: "orange" as const },
  },
  {
    title: "Sprint retro",
    subtitle: "Ended Monday · Summary approved",
    pill: { label: "Approved", tone: "green" as const },
  },
];

/* -------------------------------------------------------------------------- */
/*  Small building blocks                                                     */
/* -------------------------------------------------------------------------- */

function StatusPill({ label, tone }: StatusPillProps) {
  const tones: Record<StatusPillProps["tone"], string> = {
    green: "bg-emerald-50 text-emerald-700",
    purple: "bg-indigo-50 text-indigo-700",
    orange: "bg-amber-50 text-amber-700",
    blue: "bg-blue-50 text-blue-700",
  };

  return (
    <span
      className={`inline-flex items-center rounded-full px-3 py-1 text-[13px] font-semibold whitespace-nowrap ${tones[tone]}`}
    >
      {label}
    </span>
  );
}

function ReadinessRow({
  label,
  value,
  tone,
}: {
  label: string;
  value: string;
  tone: StatusPillProps["tone"];
}) {
  return (
    <div className="flex items-center justify-between py-2.5">
      <span className="text-[14px] text-slate-500">{label}</span>
      <StatusPill label={value} tone={tone} />
    </div>
  );
}

function ThumbnailPlaceholder({ className = "" }: { className?: string }) {
  return (
    <div
      className={`flex items-center justify-center rounded-xl bg-slate-100 ${className}`}
      aria-hidden="true"
    >
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        className="text-slate-300"
      >
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <circle cx="8.5" cy="8.5" r="1.5" />
        <path d="M21 15l-5-5L5 21" />
      </svg>
    </div>
  );
}

function ActionCard({
  icon: Icon,
  label,
  filled = false,
}: {
  icon: React.ComponentType<{ size?: number; className?: string }>;
  label: string;
  filled?: boolean;
}) {
  return (
    <button
      type="button"
      className="sema-action-card group flex flex-col items-center justify-center gap-3 rounded-2xl border border-slate-200 bg-white py-8 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
    >
      <span
        className={`flex h-11 w-11 items-center justify-center rounded-full transition-colors ${
          filled ? "bg-indigo-600 text-white" : "bg-indigo-50 text-indigo-600"
        } group-hover:bg-indigo-600 group-hover:text-white`}
      >
        <Icon size={20} className={filled ? "fill-white" : ""} />
      </span>
      <span className="text-[15px] font-semibold text-slate-900">{label}</span>
    </button>
  );
}

function MeetingRow({
  title,
  subtitle,
  pill,
  last = false,
}: {
  title: string;
  subtitle: string;
  pill: { label: string; tone: StatusPillProps["tone"] };
  last?: boolean;
}) {
  return (
    <div
      className={`flex items-center gap-4 py-5 ${
        last ? "" : "border-b border-slate-100"
      }`}
    >
      <ThumbnailPlaceholder className="h-14 w-14 shrink-0" />
      <div className="min-w-0 flex-1">
        <p className="truncate text-[16px] font-semibold text-slate-900">
          {title}
        </p>
        <p className="mt-1 truncate text-[14px] text-slate-500">{subtitle}</p>
      </div>
      <StatusPill label={pill.label} tone={pill.tone} />
    </div>
  );
}

const actions = [
  { icon: Search, label: "Search" },
  { icon: Bell, label: "Notifications" },
  { icon: HelpCircle, label: "Help" },
];

/* -------------------------------------------------------------------------- */
/*  Main component                                                            */
/* -------------------------------------------------------------------------- */

export default function SemaMeetDashboard() {
  return (
    <div className="min-h-screen w-full bg-slate-50 text-slate-900 antialiased">
      <style>{`
        @keyframes sema-fade-in {
          from { opacity: 0; transform: translateY(6px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes sema-pulse-dot {
          0%, 100% { box-shadow: 0 0 0 0 rgba(16, 185, 129, 0.45); }
          70% { box-shadow: 0 0 0 6px rgba(16, 185, 129, 0); }
        }
        .sema-fade-in {
          animation: sema-fade-in 0.45s ease both;
        }
        .sema-status-dot {
          animation: sema-pulse-dot 2.2s infinite;
        }
        .sema-action-card {
          animation: sema-fade-in 0.5s ease both;
        }
        .sema-nav-item {
          position: relative;
          transition: background-color 0.15s ease, color 0.15s ease;
        }
        .sema-hero-card {
          animation: sema-fade-in 0.5s ease both;
        }
        @media (prefers-reduced-motion: reduce) {
          .sema-fade-in, .sema-action-card, .sema-hero-card, .sema-status-dot {
            animation: none !important;
          }
        }
      `}</style>

      {/* ---------------------------------------------------------------- */}
      {/* Top bar                                                          */}
      {/* ---------------------------------------------------------------- */}
      <header className="sticky top-0 z-20 flex h-[72px] items-center justify-between border-b border-slate-200 bg-white px-8">
        <div className="flex items-center gap-10 md:gap-40">
          <div className="flex items-center text-[22px] font-bold tracking-tight">
            <span className="text-slate-900">Z</span>
            <span className="text-indigo-600">oiko</span>
            <span className="ml-1.5 text-slate-900">Sema</span>
          </div>

          <button
            type="button"
            className="flex items-center gap-2 rounded-full border border-[#E7E7F2] bg-[#F3F2FD] px-4 py-2 text-[14px] font-medium text-slate-700 transition-colors hover:bg-slate-50"
          >
            Acme Corp workspace
            <ChevronDown size={16} className="text-slate-400" />
          </button>
        </div>

        <div className="flex items-center gap-5">
          <div className="flex items-center gap-2 text-[14px] font-medium text-slate-600">
            <span className="sema-status-dot h-2 w-2 rounded-full bg-emerald-500" />
            All systems operational
          </div>

          {actions.map(({ icon: Icon, label }) => (
            <button
              key={label}
              type="button"
              aria-label={label}
              className="flex h-10 w-10 items-center justify-center rounded-[10px] bg-[#F3F2FD] border border-slate-200 text-slate-500 transition-colors hover:bg-slate-50"
            >
              <Icon size={18} />
            </button>
          ))}

          <button
            type="button"
            aria-label="Account menu"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-indigo-700 text-[14px] font-semibold text-white transition-transform hover:scale-105"
          >
            JL
          </button>
        </div>
      </header>

      {/* ---------------------------------------------------------------- */}
      {/* Body: sidebar + main + right rail                                */}
      {/* ---------------------------------------------------------------- */}
      <div className="mx-auto flex max-w-[1700px] items-start">
        {/* -------------------------------------------------------------- */}
        {/* Left sidebar                                                   */}
        {/* -------------------------------------------------------------- */}
        <aside className="sticky top-[72px] hidden h-[calc(100vh-72px)] w-[230px] shrink-0 flex-col justify-between border-r border-slate-200 bg-[#F3F2FD] px-5 py-6 lg:flex">
          <nav className="flex flex-col gap-1">
            {primaryNav.map(({ label, icon: Icon, active }) => (
              <button
                key={label}
                type="button"
                className={`sema-nav-item flex items-center gap-3 rounded-xl px-4 py-3 text-left text-[15px] font-medium ${
                  active
                    ? "bg-white text-indigo-700 shadow-sm"
                    : "text-[#5B5F73] hover:bg-white/70 hover:text-slate-900"
                }`}
              >
                {label}
              </button>
            ))}

            <div className="my-4 border-t border-slate-200" />

            {secondaryNav.map(({ label, icon: Icon }) => (
              <button
                key={label}
                type="button"
                className="sema-nav-item flex items-center gap-3 rounded-xl px-4 py-3 text-left text-[15px] font-medium text-[#5B5F73] hover:bg-white/70 hover:text-slate-900"
              >
                {label}
              </button>
            ))}
          </nav>

          <button
            type="button"
            className="sema-nav-item flex items-center gap-3 rounded-xl px-4 py-3 text-left text-[15px] font-medium text-slate-600 hover:bg-white/70 hover:text-slate-900"
          >
            <Settings size={18} className="text-slate-400" />
            Settings
          </button>
        </aside>

        {/* -------------------------------------------------------------- */}
        {/* Main content                                                   */}
        {/* -------------------------------------------------------------- */}
        <main className="min-w-0 bg-white flex-1 px-8 py-8">
          <p className="text-[15px] text-slate-500">
            Good afternoon, Jordan &middot; Pacific Time (PT)
          </p>
          <h1 className="mt-1 text-[34px] font-bold tracking-tight text-slate-900">
            Sema Meet
          </h1>

          {/* Hero meeting card */}
          <div className="sema-hero-card mt-6 flex flex-col gap-5 rounded-2xl border border-slate-200 bg-[bg-gradient-to-b from-[#F3F2FD] to-[#FFFFFF]] p-5 shadow-sm sm:flex-row sm:items-center">
            <ThumbnailPlaceholder className="h-24 w-24 shrink-0 sm:h-28 sm:w-28" />

            <div className="min-w-0 flex-1">
              <div className="flex flex-wrap items-center gap-2">
                <StatusPill label="Starts in 12 min" tone="green" />
                <StatusPill label="Host: You" tone="purple" />
              </div>
              <h2 className="mt-3 text-[20px] font-bold text-slate-900">
                Renewal review — Acme Corp
              </h2>
              <p className="mt-1 text-[14px] text-slate-500">
                3 guests &middot; Calendar-linked &middot; AI notes eligible
              </p>
            </div>

            <button
              type="button"
              className="shrink-0 rounded-full bg-indigo-700 px-7 py-3 text-[15px] font-semibold text-white shadow-sm transition-colors hover:bg-indigo-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
            >
              Open lobby
            </button>
          </div>

          {/* Quick action cards */}
          <div className="mt-6 grid grid-cols-2 gap-4 lg:grid-cols-4">
            <ActionCard icon={Link2} label="Join a Meeting" />
            <ActionCard icon={Play} label="Start a Meeting" filled />
            <ActionCard icon={CalendarClock} label="Schedule a Meeting" />
            <ActionCard icon={Info} label="Open Overview" />
          </div>

          {/* Upcoming meetings */}
          <section className="mt-10">
            <h3 className="text-[13px] font-semibold tracking-wide text-slate-400">
              UPCOMING MEETINGS
            </h3>
            <div className="mt-3 rounded-2xl border border-slate-200 bg-white px-5 shadow-sm">
              {upcomingMeetings.map((m, i) => (
                <MeetingRow
                  key={m.title}
                  title={m.title}
                  subtitle={m.subtitle}
                  pill={m.pill}
                  last={i === upcomingMeetings.length - 1}
                />
              ))}
            </div>
          </section>

          {/* Recent meetings */}
          <section className="mt-10">
            <h3 className="text-[13px] font-semibold tracking-wide text-slate-400">
              RECENT MEETINGS &amp; PENDING REVIEW
            </h3>
            <div className="mt-3 rounded-2xl border border-slate-200 bg-white px-5 shadow-sm">
              {recentMeetings.map((m, i) => (
                <MeetingRow
                  key={m.title}
                  title={m.title}
                  subtitle={m.subtitle}
                  pill={m.pill}
                  last={i === recentMeetings.length - 1}
                />
              ))}
            </div>
          </section>

          {/* Disclosure banner */}
          <div className="mt-8 rounded-2xl bg-[#F3F2FD] px-6 py-5 text-[14px] leading-relaxed text-slate-600">
            Opening Sema Meet does not start, join, record, or summarize a
            meeting. Meeting actions follow workspace policy and participant
            notice requirements.
          </div>
        </main>

        {/* -------------------------------------------------------------- */}
        {/* Right rail                                                     */}
        {/* -------------------------------------------------------------- */}
        <aside className="hidden w-[300px] bg-[#F3F2FD] shrink-0 flex-col gap-5 px-6 py-8 xl:flex">
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <h4 className="text-[15px] font-bold text-slate-900">Readiness</h4>
            <div className="mt-1 divide-y divide-slate-100">
              <ReadinessRow label="Calendar" value="Connected" tone="green" />
              <ReadinessRow label="Device" value="Ready" tone="green" />
              <ReadinessRow label="Service" value="Operational" tone="green" />
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <h4 className="text-[15px] font-bold text-slate-900">
              AI &amp; recording eligibility
            </h4>
            <div className="mt-1 divide-y divide-slate-100">
              <ReadinessRow label="AI notes" value="Eligible" tone="blue" />
              <ReadinessRow
                label="Recording"
                value="Restricted"
                tone="orange"
              />
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <h4 className="text-[15px] font-bold text-slate-900">
              Admin notices
            </h4>
            <p className="mt-3 text-[14px] leading-relaxed text-slate-500">
              Confidential Mode required for Executive space meetings.
            </p>
          </div>
        </aside>
      </div>
    </div>
  );
}
