"use client";

import React, { useEffect, useState, useRef } from "react";

function useInView(threshold = 0.15) {
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

// align: "left" | "right" | "full"
// mt: extra top margin to stagger vertical position
const chatMessages = [
  { source: "SLACK",  time: "6 WEEKS AGO",  text: '"Let\'s revisit pricing in Q3"',                align: "left",  mt: 0   },
  { source: "EMAIL",  time: "4 WEEKS AGO",  text: '"Per our call, the launch should be October..."', align: "right", mt: 24  },
  { source: "ZOOM",   time: "12 DAYS AGO",  text: '"We agreed Maya owns the rollout, right?"',       align: "left",  mt: 8   },
  { source: "DM",     time: "YESTERDAY",    text: '"What was the date we landed on again?"',          align: "right", mt: 16  },
];

export default function AboutConversationsSection() {
  const { ref: headRef,  inView: headIn  } = useInView(0.2);
  const { ref: leftRef,  inView: leftIn  } = useInView(0.15);
  const { ref: rightRef, inView: rightIn } = useInView(0.08);

  const [msgActive, setMsgActive] = useState(-1);
  const [showTyping, setShowTyping] = useState(false);
  const [showSema,   setShowSema]   = useState(false);

  useEffect(() => {
    if (!rightIn) return;
    chatMessages.forEach((_, i) => {
      setTimeout(() => setMsgActive(i), 300 + i * 450);
    });
    const after = 300 + chatMessages.length * 450;
    setTimeout(() => setShowTyping(true),  after + 150);
    setTimeout(() => { setShowTyping(false); setShowSema(true); }, after + 1400);
  }, [rightIn]);

  return (
    <>
      <style>{`
        @keyframes acFadeUp {
          from { opacity:0; transform:translateY(26px); }
          to   { opacity:1; transform:translateY(0); }
        }
        .ac-hidden  { opacity:0; transform:translateY(26px); }
        .ac-visible { animation: acFadeUp .6s cubic-bezier(.22,1,.36,1) forwards; }

        /* individual message entrance */
        @keyframes acMsgLeft {
          from { opacity:0; transform:translateX(-16px) translateY(6px); }
          to   { opacity:1; transform:translateX(0) translateY(0); }
        }
        @keyframes acMsgRight {
          from { opacity:0; transform:translateX(16px) translateY(6px); }
          to   { opacity:1; transform:translateX(0) translateY(0); }
        }
        .ac-msg { opacity:0; }
        .ac-msg.show-left  { animation: acMsgLeft  .4s ease forwards; }
        .ac-msg.show-right { animation: acMsgRight .4s ease forwards; }

        /* typing dots */
        @keyframes acDot {
          0%,80%,100% { transform:translateY(0); opacity:.35; }
          40%          { transform:translateY(-4px); opacity:1; }
        }
        .ac-dot { display:inline-block; width:5px; height:5px; border-radius:50%; background:#9ca3af; animation:acDot 1.2s ease-in-out infinite; }
        .ac-dot:nth-child(2) { animation-delay:.15s; }
        .ac-dot:nth-child(3) { animation-delay:.30s; }

        /* sema card pop */
        @keyframes acPop {
          0%   { opacity:0; transform:scale(.96) translateY(10px); }
          65%  { transform:scale(1.015) translateY(-2px); }
          100% { opacity:1; transform:scale(1) translateY(0); }
        }
        .ac-sema { opacity:0; }
        .ac-sema.show { animation: acPop .55s cubic-bezier(.22,1,.36,1) forwards; }

        /* blockquote hover */
        .ac-quote { transition:box-shadow .25s,transform .25s; }
        .ac-quote:hover { transform:translateY(-2px); box-shadow:0 8px 24px rgba(71,71,135,0.13); }

        @media (prefers-reduced-motion:reduce) {
          .ac-hidden,.ac-msg,.ac-sema { opacity:1!important; transform:none!important; animation:none!important; }
          .ac-visible { animation:none!important; opacity:1!important; }
        }
      `}</style>

      <section
        aria-label="Conversations move faster than organizations can remember"
        className="w-full bg-white py-20 md:py-24"
      >
        <div className="mx-auto w-full max-w-7xl px-6 md:px-10 lg:px-16">

          {/* ── Heading ── */}
          <div
            ref={headRef}
            className={`ac-hidden ${headIn ? "ac-visible" : ""} text-center mb-14`}
          >
            <h2 className="text-[clamp(24px,3.8vw,35px)] font-bold leading-[1.1] tracking-tight text-gray-900  mx-auto">
              Conversations move faster than organizations can remember
            </h2>
          </div>

          {/* ── Two-column layout ── */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">

            {/* ── LEFT — text ── */}
            <div
              ref={leftRef}
              className={`ac-hidden ${leftIn ? "ac-visible" : ""} flex flex-col gap-7 lg:pt-8`}
              style={{ animationDelay: "0.05s" }}
            >
              <p className="text-[15.5px] leading-[1.8] text-gray-500">
                Modern work and everyday communication happen across messages, calls, meetings,
                files and follow-ups. Important decisions get buried. Context gets lost. Teams
                repeat conversations. Individuals forget what was agreed.
              </p>

              {/* Blockquote */}
              <div
                className="ac-quote rounded-xl px-5 py-4 border-l-4"
                style={{ background: "#EEF2FF", borderLeftColor: "#474787" }}
              >
                <p className="text-[15px] font-semibold leading-[1.65] text-gray-800">
                  Businesses struggle to connect communication with execution.
                  Sema was created to close that gap.
                </p>
              </div>

              <p className="text-[15.5px] leading-[1.8] text-gray-500">
                Sema is the layer where conversations become usable context — helping people
                remember more, teams execute faster and businesses operate with greater clarity.
              </p>
            </div>

            {/* ── RIGHT — staggered chat timeline ── */}
            <div ref={rightRef} className="relative flex flex-col gap-0 pt-2">

              {/* Staggered messages — left & right with vertical offsets */}
              <div className="relative flex flex-col">
                {chatMessages.map((msg, i) => {
                  const isRight = msg.align === "right";
                  const showClass = i <= msgActive
                    ? (isRight ? "show-right" : "show-left")
                    : "";

                  return (
                    <div
                      key={i}
                      className={`ac-msg ${showClass} flex flex-col gap-1 px-4 py-3 rounded-xl border bg-white w-[78%]`}
                      style={{
                        borderColor: "#f0f0f0",
                        marginTop: i === 0 ? 0 : `${msg.mt + 12}px`,
                        /* stagger: left msgs align-self start, right msgs align-self end */
                        alignSelf: isRight ? "flex-end" : "flex-start",
                        boxShadow: "0 1px 4px rgba(0,0,0,0.04)",
                      }}
                    >
                      <div className="flex items-center gap-2 mb-0.5">
                        <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: "#d1d5db" }} />
                        <span className="text-[10px] font-semibold uppercase tracking-[0.13em] text-gray-400">
                          {msg.source} · {msg.time}
                        </span>
                      </div>
                      <p className="text-[13.5px] leading-relaxed text-gray-400 pl-3.5">
                        {msg.text}
                      </p>
                    </div>
                  );
                })}

                {/* Typing indicator */}
                {showTyping && (
                  <div
                    className="flex items-center gap-1.5 px-4 py-3 rounded-xl border bg-white w-fit mt-3"
                    style={{ borderColor: "#f0f0f0", boxShadow: "0 1px 4px rgba(0,0,0,0.04)" }}
                  >
                    <span className="ac-dot" />
                    <span className="ac-dot" />
                    <span className="ac-dot" />
                  </div>
                )}

                {/* Sema answer — full width, prominent */}
                <div
                  className={`ac-sema ${showSema ? "show" : ""} flex flex-col gap-1.5 px-5 py-4 rounded-2xl mt-4 w-full`}
                  style={{ background: "#474787", boxShadow: "0 8px 32px rgba(71,71,135,0.28)" }}
                >
                  <div className="flex items-center gap-2 mb-1">
                    <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: "#a5b4fc" }} />
                    <span className="text-[10px] font-semibold uppercase tracking-[0.13em]" style={{ color: "#a5b4fc" }}>
                      Sema · Just Now
                    </span>
                  </div>
                  <p className="text-[14.5px] leading-relaxed text-white pl-3.5">
                    <span className="font-bold underline decoration-indigo-300 decoration-1 underline-offset-2">
                      Oct 14, 2026.
                    </span>{" "}
                    Decided in the Q4 sync. Owner: Maya. Linked to 3 follow-ups.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    </>
  );
}