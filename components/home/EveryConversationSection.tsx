"use client";

import React, { useEffect, useState, useRef } from "react";

// ── Intersection observer hook ─────────────────────────────────────────────
function useInView(threshold = 0.12) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setInView(true); obs.disconnect(); } },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, inView };
}

// ── Typing animation for the chat bubble ──────────────────────────────────
function TypingDots() {
  return (
    <span className="ec-typing-dots inline-flex items-center gap-[3px] ml-1">
      <span /><span /><span />
    </span>
  );
}

export default function EveryConversationSection() {
  const { ref: headRef,  inView: headIn  } = useInView(0.2);
  const { ref: card1Ref, inView: card1In } = useInView(0.1);
  const { ref: card2Ref, inView: card2In } = useInView(0.1);
  const { ref: card3Ref, inView: card3In } = useInView(0.1);

  const [activeTab, setActiveTab] = useState("Summary");
  const tabs = ["Summary", "Decisions", "Timeline", "Notes"];

  return (
    <>
      <style>{`
        /* ── entrance ── */
        @keyframes ecFadeUp {
          from { opacity: 0; transform: translateY(36px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .ec-hidden  { opacity: 0; transform: translateY(36px); }
        .ec-visible { animation: ecFadeUp .6s cubic-bezier(.22,1,.36,1) forwards; }

        /* ── typing dots ── */
        @keyframes ecBounce {
          0%,80%,100% { transform: translateY(0); opacity:.4; }
          40%          { transform: translateY(-4px); opacity:1; }
        }
        .ec-typing-dots span {
          display:inline-block; width:5px; height:5px;
          border-radius:50%; background:#6b7280;
          animation: ecBounce 1.2s ease-in-out infinite;
        }
        .ec-typing-dots span:nth-child(2) { animation-delay:.15s; }
        .ec-typing-dots span:nth-child(3) { animation-delay:.30s; }

        /* ── card hover ── */
        .ec-card { transition: transform .3s ease, box-shadow .3s ease; }
        .ec-card:hover { transform: translateY(-4px); box-shadow: 0 20px 48px rgba(0,0,0,0.10); }

        /* ── CTA button shimmer ── */
        @keyframes ecShimmer {
          from { transform: translateX(-100%); }
          to   { transform: translateX(220%); }
        }
        .ec-btn { position:relative; overflow:hidden; transition: opacity .2s ease, transform .2s ease; }
        .ec-btn::after {
          content:""; position:absolute; inset:0;
          background: linear-gradient(120deg, transparent 30%, rgba(255,255,255,0.18) 50%, transparent 70%);
          transform: translateX(-100%);
        }
        .ec-btn:hover::after { animation: ecShimmer .65s ease forwards; }
        .ec-btn:hover { opacity:.88; transform: translateY(-1px); }

        /* ── tab pill ── */
        .ec-tab { transition: background .2s ease, color .2s ease, box-shadow .2s ease; }
        .ec-tab:hover { background: rgba(71,71,135,0.08); }

        /* ── grid image hover ── */
        .ec-grid-img { transition: transform .4s ease, brightness .3s ease; }
        .ec-grid-img:hover { transform: scale(1.05); filter: brightness(1.08); }

        /* ── chat row hover ── */
        .ec-chat-row { transition: background .2s ease; border-radius: 8px; }
        .ec-chat-row:hover { background: rgba(71,71,135,0.05); }

        @media (prefers-reduced-motion: reduce) {
          .ec-hidden  { opacity:1!important; transform:none!important; }
          .ec-visible { animation:none!important; opacity:1!important; transform:none!important; }
          .ec-card:hover { transform:none; }
          .ec-btn:hover  { transform:none; }
        }
      `}</style>

      <section
        aria-label="Every conversation, in context"
        className="w-full py-20 md:py-24"
        style={{ background: "#474787" }}
      >
        <div className="mx-auto w-full max-w-7xl px-6 md:px-10 lg:px-16">

          {/* ── Heading ── */}
          <div
            ref={headRef}
            className={`mb-10 text-center ec-hidden ${headIn ? "ec-visible" : ""}`}
          >
            <h2 className="text-[clamp(24px,3.4vw,35px)] font-bold leading-[1.12] tracking-tight text-white mb-4">
              Every conversation, in context
            </h2>
            <p className="mx-auto max-w-[760px] text-[15.5px] leading-[1.75]" style={{ color: "#c7caed" }}>
              Sema combines everyday communication tools with AI-powered understanding
              giving individuals a simple way to connect, and businesses a stronger way
              to coordinate, govern and act.
            </p>
          </div>

          {/* ── Bento grid ── */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">

            {/* ══ TOP CARD — full width, spans 2 cols ══ */}
            <div
              ref={card1Ref}
              className={`ec-card lg:col-span-2 grid grid-cols-1 md:grid-cols-2 rounded-2xl overflow-hidden bg-white ec-hidden ${card1In ? "ec-visible" : ""}`}
              style={{ animationDelay: "0.05s" }}
            >
              {/* Left — UI mockup */}
              <div className="p-8 flex flex-col justify-between">
                {/* Tab bar */}
                <div>
                  <div className="flex items-center gap-1 mb-6 flex-wrap">
                    {tabs.map((tab) => (
                      <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={`ec-tab px-4 py-1.5 rounded-full text-[13px] font-medium border transition-all ${
                          activeTab === tab
                            ? "border-gray-300 bg-white text-gray-800 shadow-sm"
                            : "border-transparent text-gray-500"
                        }`}
                      >
                        {tab}
                      </button>
                    ))}
                  </div>

                  {/* Chat bubbles */}
                  <div className="flex flex-col gap-4">
                    {/* User message */}
                    <div className="rounded-xl bg-gray-50 border border-gray-100 p-4">
                      <p className="text-[13.5px] text-gray-700 leading-relaxed">
                        Let&apos;s review the Q3 roadmap. Can you give us a quick summary of where we
                        landed and the open blockers?
                      </p>
                    </div>

                    {/* AI response */}
                    <div className="rounded-xl bg-gray-50 border border-gray-100 p-4">
                      <div className="flex items-start justify-between gap-3">
                        <p className="text-[13.5px] text-gray-700 leading-relaxed">
                          Three decisions confirmed: launch on Oct 14, hire two engineers, defer
                          Phase 2 to Q4. One blocker on the design side.
                        </p>
                        <button className="flex-shrink-0 px-3 py-1 rounded-lg border border-gray-200 text-[11.5px] font-medium text-gray-500 hover:bg-gray-100 transition-colors">
                          Copy
                        </button>
                      </div>
                    </div>

                    {/* Typing indicator */}
                    {activeTab === "Summary" && (
                      <div className="rounded-xl bg-gray-50 border border-gray-100 px-4 py-3 w-fit">
                        <TypingDots />
                      </div>
                    )}
                  </div>
                </div>

                {/* Text + CTA */}
                <div className="mt-8">
                  <h3 className="text-[clamp(18px,2vw,24px)] font-bold text-gray-900 mb-2 leading-tight">
                    Summarize and share key moments with AI
                  </h3>
                  <p className="text-[13.5px] text-gray-500 leading-relaxed mb-6 max-w-[360px]">
                    Sema captures decisions, action items and follow-ups inside every meeting —
                    so context never gets lost between calls.
                  </p>
                  <a
                    href="#ai-summary"
                    className="ec-btn inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-[14.5px] font-semibold text-white"
                    style={{ background: "#1a1a2e" }}
                  >
                    Learn more
                    <span aria-hidden="true">→</span>
                  </a>
                </div>
              </div>

              {/* Right — hero image */}
              <div className="relative overflow-hidden min-h-[280px] md:min-h-0">
                <img
                  src="/Home/conversation-hero.webp"
                  alt="Person on a video call"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 hover:scale-[1.03]"
                  loading="lazy"
                  draggable={false}
                />
                {/* fallback gradient if image missing */}
                <div
                  className="absolute inset-0 -z-10"
                  style={{ background: "linear-gradient(135deg,#e0e7ff,#c7d2fe)" }}
                />
              </div>
            </div>

            {/* ══ BOTTOM LEFT — Automatic recording ══ */}
            <div
              ref={card2Ref}
              className={`ec-card rounded-2xl bg-white p-8 flex flex-col ec-hidden ${card2In ? "ec-visible" : ""}`}
              style={{ animationDelay: "0.12s" }}
            >
              {/* 2×3 photo grid */}
              <div className="grid grid-cols-3 grid-rows-2 gap-2 mb-7 rounded-xl overflow-hidden h-[200px]">
                {[
                  "/Home/rec-1.png",
                  "/Home/rec-2.png",
                  "/Home/rec-3.png",
                  "/Home/rec-4.png",
                  "/Home/rec-5.png",
                  "/Home/rec-6.png",
                ].map((src, i) => (
                  <div key={i} className="overflow-hidden bg-indigo-50 rounded">
                    <img
                      src={src}
                      alt=""
                      aria-hidden="true"
                      className="ec-grid-img w-full h-full object-cover"
                      loading="lazy"
                      draggable={false}
                    />
                  </div>
                ))}
              </div>

              <div className="flex flex-col flex-1 justify-end">
                <h3 className="text-[clamp(18px,2vw,24px)] font-bold text-gray-900 mb-2 leading-tight">
                  Automatic recording
                </h3>
                <p className="text-[13.5px] text-gray-500 leading-relaxed mb-6">
                  Start a meeting and Sema records audio and video in real-time, then
                  automatically attaches it to the right project, channel or contact.
                </p>
                <a
                  href="#recording"
                  className="ec-btn inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-[14.5px] font-semibold text-white w-full md:w-fit"
                  style={{ background: "#1a1a2e" }}
                >
                  Learn more
                  <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>

            {/* ══ BOTTOM RIGHT — Transcription & search ══ */}
            <div
              ref={card3Ref}
              className={`ec-card rounded-2xl bg-white p-8 flex flex-col ec-hidden ${card3In ? "ec-visible" : ""}`}
              style={{ animationDelay: "0.22s" }}
            >
              {/* Chat transcript mockup */}
              <div className="flex flex-col gap-3 mb-7 flex-1">
                {[
                  {
                    name: "Andy",
                    msg: "Can you explain more about the integration timeline, John?",
                  },
                  {
                    name: "Johnson",
                    msg: "Sure — for this task we need icons and animation. Eva will help us by Friday.",
                  },
                  {
                    name: "Eva",
                    msg: "Already on it. Drafts shipped to the channel.",
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="ec-chat-row flex gap-4 px-3 py-2.5"
                  >
                    <span className="text-[13px] font-semibold text-gray-900 w-[58px] flex-shrink-0 pt-0.5">
                      {item.name}
                    </span>
                    <span className="text-[13px] text-gray-500 leading-relaxed">
                      {item.msg}
                    </span>
                  </div>
                ))}
              </div>

              {/* Text + CTA */}
              <div>
                <h3 className="text-[clamp(18px,2vw,24px)] font-bold text-gray-900 mb-2 leading-tight">
                  Transcription &amp; search
                </h3>
                <p className="text-[13.5px] text-gray-500 leading-relaxed mb-6">
                  Sema&apos;s AI engine transcribes spoken words into text, making it easy to search
                  and reference specific sections of any meeting.
                </p>
                <a
                  href="#transcription"
                  className="ec-btn inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-[14.5px] font-semibold text-white w-full md:w-fit"
                  style={{ background: "#1a1a2e" }}
                >
                  Learn more
                  <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>

          </div>{/* /bento grid */}
        </div>
      </section>
    </>
  );
}