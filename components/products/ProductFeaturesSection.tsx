"use client";

import React, { useEffect, useState, useRef } from "react";

function useInView(threshold = 0.1) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setInView(true); obs.disconnect(); } },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, inView };
}

// ── Typing animation for chat ──────────────────────────────────────────────
function TypingDots() {
  return (
    <span className="pf-typing inline-flex items-end gap-[3px]">
      <span /><span /><span />
    </span>
  );
}

// ── Audio waveform bars ────────────────────────────────────────────────────
function WaveformBars() {
  const heights = [12,20,28,36,28,40,28,36,20,28,16,24,32,24,16];
  return (
    <div className="flex items-end gap-[3px] h-10">
      {heights.map((h, i) => (
        <div
          key={i}
          className="pf-wave-bar rounded-full"
          style={{
            width: 3,
            height: h,
            background: "#6366f1",
            animationDelay: `${i * 0.07}s`,
          }}
        />
      ))}
    </div>
  );
}

export default function ProductFeaturesSection() {
  const { ref: headRef, inView: headIn } = useInView(0.2);
  const { ref: c1Ref,   inView: c1In   } = useInView(0.08);
  const { ref: c2Ref,   inView: c2In   } = useInView(0.08);
  const { ref: c3Ref,   inView: c3In   } = useInView(0.08);
  const { ref: c4Ref,   inView: c4In   } = useInView(0.08);

  // chat bubble stagger
  const [chatStep, setChatStep] = useState(0);
  useEffect(() => {
    if (!c1In) return;
    const t1 = setTimeout(() => setChatStep(1), 400);
    const t2 = setTimeout(() => setChatStep(2), 950);
    const t3 = setTimeout(() => setChatStep(3), 1500);
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
  }, [c1In]);

  // audio timer
  const [audioSec, setAudioSec] = useState(0);
  useEffect(() => {
    if (!c2In) return;
    const iv = setInterval(() => setAudioSec(s => s + 1), 1000);
    return () => clearInterval(iv);
  }, [c2In]);
  const fmt = (s: number) => `0${Math.floor(s/60)}:${String(s%60).padStart(2,'0')}`;

  // channel tab
  const [activeTab, setActiveTab] = useState("All");
  const tabs = ["All","Projects","Clients","Personal"];

  return (
    <>
      <style>{`
        @keyframes pfFadeUp {
          from { opacity:0; transform:translateY(28px); }
          to   { opacity:1; transform:translateY(0); }
        }
        .pf-hidden  { opacity:0; transform:translateY(28px); }
        .pf-visible { animation: pfFadeUp .6s cubic-bezier(.22,1,.36,1) forwards; }

        /* card stagger */
        .pf-card { opacity:0; transform:translateY(24px); transition:box-shadow .28s,transform .28s; }
        .pf-grid-in .pf-card:nth-child(1) { animation: pfFadeUp .58s ease .04s forwards; }
        .pf-grid-in .pf-card:nth-child(2) { animation: pfFadeUp .58s ease .12s forwards; }
        .pf-grid-in .pf-card:nth-child(3) { animation: pfFadeUp .58s ease .20s forwards; }
        .pf-grid-in .pf-card:nth-child(4) { animation: pfFadeUp .58s ease .28s forwards; }
        .pf-card:hover { transform:translateY(-4px)!important; box-shadow:0 16px 40px rgba(0,0,0,0.09)!important; }

        /* chat bubble pop */
        @keyframes pfBubblePop {
          0%   { opacity:0; transform:scale(.88) translateY(6px); }
          65%  { transform:scale(1.03) translateY(-1px); }
          100% { opacity:1; transform:scale(1) translateY(0); }
        }
        .pf-bubble { opacity:0; }
        .pf-bubble.on { animation: pfBubblePop .38s cubic-bezier(.22,1,.36,1) forwards; }

        /* waveform bars */
        @keyframes pfWave {
          0%,100% { transform:scaleY(1); }
          50%     { transform:scaleY(0.4); }
        }
        .pf-wave-bar {
          animation: pfWave 1s ease-in-out infinite;
          transform-origin: bottom center;
        }

        /* typing dots */
        @keyframes pfDot {
          0%,80%,100% { transform:translateY(0); opacity:.4; }
          40%          { transform:translateY(-3px); opacity:1; }
        }
        .pf-typing span {
          display:inline-block; width:4px; height:4px;
          border-radius:50%; background:#9ca3af;
          animation: pfDot 1.1s ease-in-out infinite;
        }
        .pf-typing span:nth-child(2) { animation-delay:.15s; }
        .pf-typing span:nth-child(3) { animation-delay:.30s; }

        /* channel row hover */
        .pf-ch-row { transition:background .18s; border-radius:10px; }
        .pf-ch-row:hover { background:#f5f7ff; }

        /* tab hover */
        .pf-tab { transition:background .18s,color .18s; }
        .pf-tab:hover { background:#e8edff!important; }

        /* meeting grid tile */
        .pf-tile { transition:filter .3s; }
        .pf-tile:hover { filter:brightness(1.08); }

        @media (prefers-reduced-motion:reduce) {
          .pf-hidden,.pf-card,.pf-bubble { opacity:1!important; transform:none!important; animation:none!important; }
          .pf-visible { animation:none!important; opacity:1!important; }
          .pf-wave-bar { animation:none!important; }
        }
      `}</style>

      <section
        aria-label="Everything people need to communicate clearly"
        className="w-full py-20 md:py-24"
        style={{ background: "#ECF3FF" }}
      >
        <div className="mx-auto w-full max-w-7xl px-6 md:px-10 lg:px-16">

          {/* ── Heading ── */}
          <div ref={headRef} className={`pf-hidden ${headIn ? "pf-visible" : ""} text-center mb-12`}>
            <h2 className="font-bold leading-[1.12] tracking-tight text-gray-900 mb-4" style={{ fontSize: "35px" }}>
              Everything people need to communicate clearly
            </h2>
            <p className="mx-auto max-w-[620px] text-[15px] leading-[1.8] text-gray-500">
              Four product surfaces that work together as one platform for individuals having a
              personal call, teams running a project, and businesses governing communication
              across an organization.
            </p>
          </div>

          {/* ── 2×2 grid ── */}
          <div
            className={`grid grid-cols-1 md:grid-cols-2 gap-5 ${
              (c1In || c2In || c3In || c4In) ? "pf-grid-in" : ""
            }`}
          >

            {/* ══ CARD 1 — Messaging ══ */}
            <div ref={c1Ref} className="pf-card rounded-2xl bg-white p-7 flex flex-col gap-5"
              style={{ boxShadow: "0 2px 16px rgba(0,0,0,0.06)" }}>
              {/* Header */}
              <div className="flex items-center gap-3">
                <span className="w-9 h-9 rounded-xl flex items-center justify-center" style={{ background: "#EEF2FF" }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#4f46e5" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
                  </svg>
                </span>
                <h3 className="text-[20px] font-bold text-gray-900">Messaging</h3>
              </div>
              <p className="text-[13.5px] text-gray-500 leading-relaxed -mt-2">
                Direct messages, group chats and channels with threads, mentions, voice notes and searchable history.
              </p>

              {/* Chat mockup */}
              <div className="rounded-xl border border-gray-100 bg-gray-50 p-4 flex flex-col gap-3">
                {/* channel bar */}
                <div className="flex items-center gap-2 pb-2 border-b border-gray-100">
                  <span className="text-[13px] font-semibold text-indigo-600"># q4-launch</span>
                  <span className="text-[11px] text-gray-400 ml-1">12 members</span>
                </div>
                {/* msg 1 */}
                <div className={`pf-bubble ${c1In ? "on" : ""} flex gap-2.5 items-start`} style={{ animationDelay: "0.4s" }}>
                  <div className="w-7 h-7 rounded-full bg-indigo-500 flex items-center justify-center text-white text-[11px] font-bold flex-shrink-0">A</div>
                  <div className="text-[13px] text-gray-700 bg-white rounded-xl px-3 py-2 shadow-sm border border-gray-100">
                    Anyone blocked on the design review?
                  </div>
                </div>
                {/* msg 2 — right aligned */}
                {chatStep >= 1 && (
                  <div className="pf-bubble on flex gap-2.5 items-end justify-end">
                    <div className="text-[13px] text-white rounded-xl px-3 py-2 shadow-sm max-w-[80%]" style={{ background: "#474787" }}>
                      Reviewed last night. Two small comments shipped 🔥
                    </div>
                    <div className="w-7 h-7 rounded-full bg-green-500 flex items-center justify-center text-white text-[11px] font-bold flex-shrink-0">M</div>
                  </div>
                )}
                {/* replies badge */}
                {chatStep >= 2 && (
                  <div className="pf-bubble on ml-9 text-[11.5px] text-indigo-500 font-medium">
                    3 replies · last 2m ago
                  </div>
                )}
                {/* msg 3 */}
                {chatStep >= 3 && (
                  <div className="pf-bubble on flex gap-2.5 items-start">
                    <div className="w-7 h-7 rounded-full bg-orange-400 flex items-center justify-center text-white text-[11px] font-bold flex-shrink-0">T</div>
                    <div className="text-[12px] text-gray-700 bg-white rounded-xl px-3 py-2 shadow-sm border border-gray-100">
                      Drafts in #design — let me know if anything blocks the Friday review.
                    </div>
                  </div>
                )}
              </div>

              {/* Feature bullets 2-col */}
              <div className="grid grid-cols-2 gap-x-6 gap-y-1.5 mt-auto">
                {["1:1 & group chat","Channels & threads","@mentions & reactions","Pinned items","Voice notes","Searchable history"].map((f,i) => (
                  <div key={i} className="flex items-center gap-2 text-[13px] text-gray-600">
                    <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: "#6366f1" }}/>
                    {f}
                  </div>
                ))}
              </div>
            </div>

            {/* ══ CARD 2 — Audio Calls ══ */}
            <div ref={c2Ref} className="pf-card rounded-2xl bg-white p-7 flex flex-col gap-5"
              style={{ boxShadow: "0 2px 16px rgba(0,0,0,0.06)" }}>
              <div className="flex items-center gap-3">
                <span className="w-9 h-9 rounded-xl flex items-center justify-center" style={{ background: "#EEF2FF" }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#4f46e5" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.35 2 2 0 0 1 3.6 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.6a16 16 0 0 0 6.29 6.29l.96-.96a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
                  </svg>
                </span>
                <h3 className="text-[20px] font-bold text-gray-900">Audio calls</h3>
              </div>
              <p className="text-[13.5px] text-gray-500 leading-relaxed -mt-2">
                High-quality 1:1 and group audio with call history, optional summaries and mobile-first calling.
              </p>

              {/* Call UI mockup */}
              <div className="rounded-xl overflow-hidden flex flex-col items-center justify-center py-8 gap-4"
                style={{ background: "#1e1b4b" }}>
                {/* connected badge */}
                <div className="flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-widest" style={{ color: "#6ee7b7" }}>
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
                  Connected · Encrypted
                </div>
                {/* name + timer */}
                <div className="text-center">
                  <p className="text-[22px] font-bold text-white mb-1">Andy Park</p>
                  <p className="text-[15px] font-mono text-indigo-300">{fmt(audioSec)}</p>
                </div>
                {/* waveform */}
                <WaveformBars />
                {/* call controls */}
                <div className="flex items-center gap-4 mt-1">
                  {[
                    <svg key="mic" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" y1="19" x2="12" y2="23"/><line x1="8" y1="23" x2="16" y2="23"/></svg>,
                    <svg key="vol" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"/></svg>,
                  ].map((icon, i) => (
                    <button key={i} className="w-9 h-9 rounded-full flex items-center justify-center text-white border border-white/20 hover:bg-white/10 transition-colors">
                      {icon}
                    </button>
                  ))}
                  <button className="px-5 py-2 rounded-full text-white text-[13px] font-semibold transition-opacity hover:opacity-80" style={{ background: "#ef4444" }}>
                    End
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-x-6 gap-y-1.5 mt-auto">
                {["1:1 & group calls","Call history","Optional summaries","Workspace routing","Mobile-first quality","Encrypted in transit"].map((f,i) => (
                  <div key={i} className="flex items-center gap-2 text-[13px] text-gray-600">
                    <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: "#6366f1" }}/>
                    {f}
                  </div>
                ))}
              </div>
            </div>

            {/* ══ CARD 3 — Video meetings ══ */}
            <div ref={c3Ref} className="pf-card rounded-2xl bg-white p-7 flex flex-col gap-5"
              style={{ boxShadow: "0 2px 16px rgba(0,0,0,0.06)" }}>
              <div className="flex items-center gap-3">
                <span className="w-9 h-9 rounded-xl flex items-center justify-center" style={{ background: "#EEF2FF" }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#4f46e5" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="23 7 16 12 23 17 23 7"/><rect x="1" y="5" width="15" height="14" rx="2" ry="2"/>
                  </svg>
                </span>
                <h3 className="text-[20px] font-bold text-gray-900">Video meetings</h3>
              </div>
              <p className="text-[13.5px] text-gray-500 leading-relaxed -mt-2">
                Instant and scheduled meetings with screen sharing, AI summaries and automatic action item extraction.
              </p>

              {/* Video grid mockup */}
              <div className="rounded-xl overflow-hidden">
                <div className="flex items-center gap-2 px-3 py-2" style={{ background: "#1a1a2e" }}>
                  <span className="w-2 h-2 rounded-full bg-red-500 flex-shrink-0"/>
                  <span className="text-[11px] font-semibold text-white/60 uppercase tracking-widest">REC</span>
                </div>
                <div className="grid grid-cols-2">
                  {[
                    { name:"Andy",   bg:"#3730a3", color:"#a5b4fc" },
                    { name:"Maya",   bg:"#065f46", color:"#6ee7b7" },
                    { name:"Eva",    bg:"#92400e", color:"#fcd34d" },
                    { name:"Johnson",bg:"#831843", color:"#f9a8d4" },
                  ].map((p,i) => (
                    <div key={i} className="pf-tile relative flex flex-col items-center justify-center h-24" style={{ background: p.bg }}>
                      <div className="w-11 h-11 rounded-full flex items-center justify-center text-[18px] font-bold border-2"
                        style={{ background: p.color + "33", borderColor: p.color, color: p.color }}>
                        {p.name[0]}
                      </div>
                      <span className="absolute bottom-2 left-2 text-[10px] font-semibold text-white/80 bg-black/30 rounded px-1.5 py-0.5">{p.name}</span>
                    </div>
                  ))}
                </div>
                {/* Sema summary bar */}
                <div className="flex items-center gap-2 px-4 py-2.5" style={{ background: "#0f172a" }}>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#a5b4fc" strokeWidth="2.2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                  <span className="text-[11.5px] font-medium" style={{ color: "#a5b4fc" }}>Sema · summary</span>
                  <span className="text-[11.5px] text-white/50">· 3 decisions, 2 action items extracted</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-x-6 gap-y-1.5 mt-auto">
                {["Instant & scheduled","Screen sharing","Meeting chat","AI meeting summaries","Action extraction","Participant management"].map((f,i) => (
                  <div key={i} className="flex items-center gap-2 text-[13px] text-gray-600">
                    <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: "#6366f1" }}/>
                    {f}
                  </div>
                ))}
              </div>
            </div>

            {/* ══ CARD 4 — Channels & Spaces ══ */}
            <div ref={c4Ref} className="pf-card rounded-2xl bg-white p-7 flex flex-col gap-5"
              style={{ boxShadow: "0 2px 16px rgba(0,0,0,0.06)" }}>
              <div className="flex items-center gap-3">
                <span className="w-9 h-9 rounded-xl flex items-center justify-center" style={{ background: "#EEF2FF" }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#4f46e5" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/>
                    <rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/>
                  </svg>
                </span>
                <h3 className="text-[20px] font-bold text-gray-900">Channels & Spaces</h3>
              </div>
              <p className="text-[13.5px] text-gray-500 leading-relaxed -mt-2">
                Organize conversations by project, client, department, community or personal group — with files and decisions in context.
              </p>

              {/* Channel list mockup */}
              <div className="rounded-xl border border-gray-100 bg-gray-50 p-3 flex flex-col gap-2">
                {/* Tab bar */}
                <div className="flex items-center gap-1 mb-1">
                  {tabs.map(t => (
                    <button
                      key={t}
                      onClick={() => setActiveTab(t)}
                      className={`pf-tab px-3 py-1.5 rounded-full text-[12px] font-medium transition-all ${
                        activeTab === t
                          ? "text-white"
                          : "text-gray-500"
                      }`}
                      style={{ background: activeTab === t ? "#474787" : "transparent" }}
                    >
                      {t}
                    </button>
                  ))}
                </div>
                {/* Channels */}
                {[
                  { name:"q4-launch",   sub:"Project · 12 members", count:3,  countBg:"#474787" },
                  { name:"acme-corp",   sub:"Client space · 6 members", count:12, countBg:"#6366f1" },
                  { name:"engineering", sub:"Department · 24 members", count:5,  countBg:"#474787" },
                  { name:"family",      sub:"Personal · 4 members",    count:null },
                ].map((ch, i) => (
                  <div
                    key={i}
                    className="pf-ch-row flex items-center justify-between px-3 py-2.5 rounded-lg bg-white border border-gray-100"
                  >
                    <div className="flex items-center gap-2.5">
                      <span className="text-[14px] font-bold text-gray-400">#</span>
                      <div>
                        <p className="text-[13px] font-semibold text-gray-800">{ch.name}</p>
                        <p className="text-[11px] text-gray-400">{ch.sub}</p>
                      </div>
                    </div>
                    {ch.count && (
                      <span className="w-6 h-6 rounded-full text-[11px] font-bold text-white flex items-center justify-center flex-shrink-0"
                        style={{ background: ch.countBg }}>
                        {ch.count}
                      </span>
                    )}
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-2 gap-x-6 gap-y-1.5 mt-auto">
                {["Personal groups","Team channels","Project spaces","Business workspaces","Files in context","Pinned decisions"].map((f,i) => (
                  <div key={i} className="flex items-center gap-2 text-[13px] text-gray-600">
                    <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: "#6366f1" }}/>
                    {f}
                  </div>
                ))}
              </div>
            </div>

          </div>{/* /grid */}
        </div>
      </section>
    </>
  );
}