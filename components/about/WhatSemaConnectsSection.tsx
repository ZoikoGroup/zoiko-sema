"use client";
import {
  MessageSquare,
  Phone,
  Video,
  Sparkles,
  LayoutGrid,
  ShieldCheck,
  ArrowRight,
  LucideIcon,
} from "lucide-react";

interface Pillar {
  icon: LucideIcon;
  title: string;
  description: string;
  leftStatus: string;
  rightStatus: string;
  leftDot: string;
  rightColor: string;
  action: string;
}

const pillars: Pillar[] = [
  {
    icon: MessageSquare,
    title: "Messaging",
    description:
      "Conversation streams for direct, group, and workspace communication with files and context.",
    leftStatus: "Thread • Launch spec",
    rightStatus: "2 unread",
    leftDot: "bg-pink-400",
    rightColor: "text-[#6C63FF]",
    action: "Explore Messaging",
  },
  {
    icon: Phone,
    title: "Audio Calls",
    description:
      "Fast voice conversations that can connect back to workspace context.",
    leftStatus: "Call • 04:12",
    rightStatus: "Active",
    leftDot: "bg-green-400",
    rightColor: "text-green-600",
    action: "Explore Audio Calls",
  },
  {
    icon: Video,
    title: "Video Meetings",
    description:
      "Meetings built for context — captions, recording, summaries, and follow-up.",
    leftStatus: "Launch sync",
    rightStatus: "Recording",
    leftDot: "bg-[#6C63FF]",
    rightColor: "text-orange-500",
    action: "Explore Video Meetings",
  },
  {
    icon: Sparkles,
    title: "AI Meeting Summaries",
    description:
      "Summaries, decisions, action items, and follow-ups that remain reviewable.",
    leftStatus: "Recap • 2 decisions",
    rightStatus: "Needs review",
    leftDot: "bg-[#6C63FF]",
    rightColor: "text-orange-500",
    action: "Explore AI Summaries",
  },
  {
    icon: LayoutGrid,
    title: "Channels & Spaces",
    description:
      "Persistent spaces for teams, projects, clients, and regulated workflows.",
    leftStatus: "# product-launch",
    rightStatus: "8 members",
    leftDot: "bg-[#6C63FF]",
    rightColor: "text-[#6C63FF]",
    action: "Explore Channels & Spaces",
  },
  {
    icon: ShieldCheck,
    title: "Admin Console",
    description:
      "Roles, permissions, policies, AI governance, retention, and enterprise controls.",
    leftStatus: "SSO • MFA",
    rightStatus: "Healthy",
    leftDot: "bg-green-400",
    rightColor: "text-green-600",
    action: "Explore Admin Console",
  },
];

export default function WhatSemaConnectsSection() {
  return (
    <section className="bg-white px-6 py-16 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-6xl">
        <div className=" text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[2px] text-[#4F63F0]">
            What Sema connects
          </p>
          <h2 className="mx-auto max-w-2xl text-3xl font-extrabold leading-10 text-gray-900 sm:text-[32px]">
            One platform, connected around shared context
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-gray-500">
            Six product pillars work together so a conversation can become a
            meeting, a summary, a decision, and an eventual follow-up — all in
            one place.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {pillars.map(
            ({
              icon: Icon,
              title,
              description,
              leftStatus,
              rightStatus,
              leftDot,
              rightColor,
              action,
            }) => (
              <div
                key={title}
                className="flex flex-col rounded-2xl border border-[#E7E9F4] bg-white p-6 shadow-[0_6px_18px_rgba(16,24,40,0.05)] transition hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(16,24,40,0.08)]"
              >
                {/* Icon */}
                <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-xl bg-[#F4F2FF] text-[#6C63FF]">
                  <Icon size={18} strokeWidth={2} />
                </div>

                {/* Title */}
                <h3 className="text-[18px] font-bold text-[#23233F]">
                  {title}
                </h3>

                {/* Description */}
                <p className="mt-2 text-[13px] leading-5 text-[#5B627E]">
                  {description}
                </p>

                {/* Status Pill */}
                <div className="mt-4 flex items-center justify-between rounded-lg bg-[#F7F6FD] px-3 py-2 text-xs">
                  <div className="flex items-center gap-2 text-[#667085]">
                    <span className={`h-2 w-2 rounded-full ${leftDot}`} />
                    {leftStatus}
                  </div>

                  <span className={`font-medium ${rightColor}`}>
                    {rightStatus}
                  </span>
                </div>

                {/* CTA */}
                <button className="flex items-center gap-2 pt-6 text-sm font-semibold text-[#5B5AF7] transition hover:gap-3">
                  {action}
                  <ArrowRight size={15} />
                </button>
              </div>
            ),
          )}
        </div>
      </div>
    </section>
  );
}
