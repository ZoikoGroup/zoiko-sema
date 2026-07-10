"use client";

import React, { useEffect, useRef, useState } from "react";

function useInView(threshold = 0.15) {
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

const leftCards = [
  {
    title: "Client chat",
    desc: "Messages between you and the client, file cards, and a context-rich reply composer.",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
  },
  {
    title: "Project tasks",
    desc: "Task checklist with owner, due date, status, and a client-approval flag.",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 11l3 3L22 4" />
        <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
      </svg>
    ),
  },
  {
    title: "Client mode",
    desc: "Client-visible content is clearly marked while your private notes stay internal.",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
      </svg>
    ),
  },
];

const rightCards = [
  {
    title: "Meeting & notes",
    desc: "Recent client call, AI recap, decisions, action items, and the next meeting in one place.",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="23 7 16 12 23 17 23 7" />
        <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
      </svg>
    ),
  },
  {
    title: "Delivery state",
    desc: "Every item is labeled Draft, In review, Approved, or Invoice ready — never color alone.",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 15 9 22 9.5 17 14.5 18.5 22 12 18 5.5 22 7 14.5 2 9.5 9 9 12 2" />
      </svg>
    ),
  },
  {
    title: "Invoice readiness",
    desc: "Mark approved work as ready to bill and connect your finance tools when it's time.",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="8" y1="13" x2="16" y2="13" />
        <line x1="8" y1="17" x2="12" y2="17" />
      </svg>
    ),
  },
];

function ShowcaseCard({
  title,
  desc,
  icon,
  active,
  delay,
}: {
  title: string;
  desc: string;
  icon: React.ReactNode;
  active: boolean;
  delay: number;
}) {
  return (
    <div
      className={`fws-card ${active ? "active" : ""} rounded-2xl border border-gray-100 bg-white p-5 shadow-sm`}
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="flex items-center gap-2.5 mb-2">
        <span
          className="fws-icon-box w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
          style={{ background: "rgba(52,87,232,0.10)", color: "#3457E8" }}
        >
          {icon}
        </span>
        <h3 className="text-[14.5px] font-bold text-gray-900">{title}</h3>
      </div>
      <p className="text-[15px] leading-relaxed text-gray-500">{desc}</p>
    </div>
  );
}

export default function FreelancerShowcaseSection() {
  const { ref: headRef, inView: headIn } = useInView(0.25);
  const { ref: bodyRef, inView: bodyIn } = useInView(0.1);

  return (
    <>
      <style>{`
        @keyframes fwsFadeUp {
          from { opacity:0; transform:translateY(28px); }
          to   { opacity:1; transform:translateY(0); }
        }
        .fws-hidden  { opacity:0; transform:translateY(28px); }
        .fws-visible { animation: fwsFadeUp .6s cubic-bezier(.22,1,.36,1) forwards; }

        .fws-card { opacity:0; transform:translateY(20px); }
        .fws-card.active { animation: fwsFadeUp .5s cubic-bezier(.22,1,.36,1) forwards; }

        .fws-card {
          transition: transform .3s ease, box-shadow .3s ease, border-color .3s ease;
        }
        .fws-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 28px rgba(52,87,232,0.12);
          border-color: rgba(52,87,232,0.35);
        }
        .fws-card:hover .fws-icon-box {
          background-color: rgba(52,87,232,0.18);
        }
        .fws-icon-box { transition: background-color .3s ease; }

        .fws-img-wrap { transition: transform .5s cubic-bezier(.22,1,.36,1), box-shadow .5s ease; }
        .fws-img-wrap:hover { transform: translateY(-4px) scale(1.01); box-shadow: 0 24px 48px rgba(15,23,42,0.18); }

        @media (prefers-reduced-motion: reduce) {
          .fws-hidden, .fws-card { opacity:1!important; transform:none!important; animation:none!important; }
          .fws-visible { animation:none!important; opacity:1!important; }
          .fws-card:hover, .fws-img-wrap:hover { transform:none!important; }
        }
      `}</style>

      <section
        aria-label="Product Showcase"
        className="w-full py-20 md:py-24"
        style={{ background: "#F3F2FD" }}
      >
        <div className="mx-auto w-full max-w-7xl px-6 md:px-10 lg:px-16">

          {/* Heading */}
          <div
            ref={headRef}
            className={`fws-hidden ${headIn ? "fws-visible" : ""} text-center mb-14`}
          >
            <p
              className="text-[11px] font-semibold uppercase tracking-[0.14em] mb-4"
              style={{ color: "#3457E8" }}
            >
              Product Showcase
            </p>
            <h2 className="text-[clamp(26px,3.8vw,38px)] font-extrabold leading-[1.15] tracking-tight text-gray-900 mb-5 max-w-[760px] mx-auto">
              One client workspace, from chat to invoice-ready
            </h2>
            <p className="mx-auto max-w-[680px] text-[15px] leading-[1.75] text-gray-500">
              A real freelancer workspace: client chat, meeting recaps,
              project tasks, files, and delivery state — with a clear line
              between client-visible content and private notes.
            </p>
          </div>

          {/* Body: left cards / center image / right cards */}
          <div
            ref={bodyRef}
            className="grid grid-cols-1 lg:grid-cols-[280px_1fr_280px] gap-6 items-center"
          >
            {/* LEFT */}
            <div className="flex flex-col gap-4 order-2 lg:order-1">
              {leftCards.map((card, i) => (
                <ShowcaseCard
                  key={card.title}
                  {...card}
                  active={bodyIn}
                  delay={i * 90}
                />
              ))}
            </div>

            {/* CENTER — Image */}
            <div
              className={`fws-hidden ${bodyIn ? "fws-visible" : ""} order-1 lg:order-2`}
            >
              <div className="fws-img-wrap rounded-2xl overflow-hidden shadow-lg">
                <img
                  src="/Images/Freelancer.webp" /* 👈 add your image URL here */
                  alt="Zoiko Sema client workspace showing chat, meeting recap and delivery state"
                  className="w-full h-auto object-cover rounded-2xl"
                />
              </div>
            </div>

            {/* RIGHT */}
            <div className="flex flex-col gap-4 order-3">
              {rightCards.map((card, i) => (
                <ShowcaseCard
                  key={card.title}
                  {...card}
                  active={bodyIn}
                  delay={i * 90}
                />
              ))}
            </div>
          </div>

        </div>
      </section>
    </>
  );
}