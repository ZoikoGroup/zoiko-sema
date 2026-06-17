"use client";

import React, { useEffect, useRef, useState } from "react";

interface ConversationItem {
  number: string;
  title: string;
  desc: string;
}

const items: ConversationItem[] = [
  {
    number: "01",
    title: "Secure Team Messaging",
    desc: "Keep team comms organized by project, function, client or topic.",
  },
  {
    number: "02",
    title: "Audio & Video Calls",
    desc: "High-quality calls for work, personal and group conversations.",
  },
  {
    number: "03",
    title: "AI Meeting Summaries",
    desc: "Auto-summarize meetings and extract decisions, owners and next steps.",
  },
  {
    number: "04",
    title: "Client Consultations",
    desc: "Support professional calls with notes, summaries and follow-ups.",
  },
  {
    number: "05",
    title: "Remote & Hybrid Work",
    desc: "Keep distributed teams aligned across time zones and patterns.",
  },
  {
    number: "06",
    title: "Project Collaboration",
    desc: "Connect messages, meetings, files and decisions around work.",
  },
  {
    number: "07",
    title: "Executive Communication",
    desc: "One governed space for founder and senior team decisions.",
  },
  {
    number: "08",
    title: "Individual Calling",
    desc: "Secure space for personal audio and video conversations.",
  },
  {
    number: "09",
    title: "From Individual to Team",
    desc: "Start solo, invite others, grow into a team workspace.",
  },
  {
    number: "10",
    title: "Workforce Truth",
    desc: "Connect Sema with ZoikoTime for verified work context.",
  },
];

// ── Intersection-observer hook (matches HeroSection style) ─────────────────
function useInView(threshold = 0.12) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          obs.disconnect();
        }
      },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, inView };
}

export default function ConversationsGridSection() {
  const { ref: headRef, inView: headIn } = useInView(0.25);
  const { ref: gridRef, inView: gridIn } = useInView(0.05);

  return (
    <>
      <style>{`
        @keyframes cgFadeUp {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        .cg-hidden  { opacity: 0; transform: translateY(28px); }
        .cg-visible { animation: cgFadeUp .55s cubic-bezier(.22,1,.36,1) forwards; }

        /* staggered card entrance — same easing family as Hero anim-1..5 */
        .cg-card-wrap { opacity: 0; transform: translateY(22px); }
        .cg-grid-in .cg-card-wrap {
          animation: cgFadeUp .5s cubic-bezier(.22,1,.36,1) forwards;
        }
        .cg-grid-in .cg-card-wrap:nth-child(1)  { animation-delay: .02s; }
        .cg-grid-in .cg-card-wrap:nth-child(2)  { animation-delay: .06s; }
        .cg-grid-in .cg-card-wrap:nth-child(3)  { animation-delay: .10s; }
        .cg-grid-in .cg-card-wrap:nth-child(4)  { animation-delay: .14s; }
        .cg-grid-in .cg-card-wrap:nth-child(5)  { animation-delay: .18s; }
        .cg-grid-in .cg-card-wrap:nth-child(6)  { animation-delay: .22s; }
        .cg-grid-in .cg-card-wrap:nth-child(7)  { animation-delay: .26s; }
        .cg-grid-in .cg-card-wrap:nth-child(8)  { animation-delay: .30s; }
        .cg-grid-in .cg-card-wrap:nth-child(9)  { animation-delay: .34s; }
        .cg-grid-in .cg-card-wrap:nth-child(10) { animation-delay: .38s; }

        /* card hover */
        .cg-card {
          transition: transform .25s cubic-bezier(.22,1,.36,1),
                      box-shadow .25s cubic-bezier(.22,1,.36,1),
                      border-color .25s ease;
          will-change: transform;
        }
        .cg-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 14px 32px rgba(71,71,135,0.14);
          border-color: rgba(71,71,135,0.25);
        }

        /* number color shift on hover */
        .cg-number { transition: color .25s ease; }
        .cg-card:hover .cg-number { color: #474787; }

        @media (prefers-reduced-motion: reduce) {
          .cg-hidden, .cg-card-wrap { opacity: 1 !important; transform: none !important; animation: none !important; }
          .cg-visible { animation: none !important; opacity: 1 !important; }
          .cg-card:hover { transform: none; }
        }
      `}</style>

      <section
        aria-label="Sema for the conversations that move work forward"
        style={{ backgroundColor: "#E3EDFF" }}
        className="w-full py-20 md:py-24"
      >
        <div className="mx-auto w-full max-w-7xl px-6 md:px-10 lg:px-16">

          {/* ── Heading ── */}
          <div
            ref={headRef}
            className={`cg-hidden ${headIn ? "cg-visible" : ""} text-center mb-14`}
          >
            <h2
              className="font-bold leading-[1.12] tracking-tight text-[#15131F] mb-4"
              style={{ fontSize: "clamp(26px,3.6vw,35px)" }}
            >
              Sema for the conversations that move work forward
            </h2>
            <p className="mx-auto max-w-[560px] text-[15px] leading-[1.75] text-[#5C5870]">
              Practical jobs-to-be-done, not abstract product features.
              <br />
              Pick the work, and Sema fits around it.
            </p>
          </div>

          {/* ── 5-col / 2-row grid ── */}
          <div
            ref={gridRef}
            className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 ${
              gridIn ? "cg-grid-in" : ""
            }`}
          >
            {items.map((item) => (
              <div key={item.number} className="cg-card-wrap">
                <div className="cg-card h-full rounded-2xl border border-[#E8E4F2] bg-white p-5 flex flex-col cursor-default">
                  <span className="cg-number text-[11px] font-semibold tracking-wider text-gray-400 mb-4">
                    {item.number}
                  </span>
                  <h3 className="text-[14.5px] font-bold leading-snug text-[#15131F] mb-2">
                    {item.title}
                  </h3>
                  <p className="text-[12.5px] leading-[1.65] text-[#5C5870]">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
}