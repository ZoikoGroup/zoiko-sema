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

const steps = [
  "Download or open Sema on any device",
  "Start messaging or calling — no setup",
  "Create personal groups for friends and projects",
  "Use AI summaries and follow-ups",
  "Continue solo, or upgrade into a team workspace",
];

export default function StartWithOneConversationSection() {
  const { ref: headRef, inView: headIn } = useInView(0.2);
  const { ref: leftRef, inView: leftIn } = useInView(0.15);
  const { ref: rightRef, inView: rightIn } = useInView(0.15);

  return (
    <>
      <style>{`
        @keyframes swocFadeUp {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes swocFadeRight {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .swoc-hidden  { opacity: 0; transform: translateY(28px); }
        .swoc-visible { animation: swocFadeUp .65s cubic-bezier(.22,1,.36,1) forwards; }

        .swoc-left-hidden  { opacity: 0; transform: translateY(24px); }
        .swoc-left-visible { animation: swocFadeUp .65s cubic-bezier(.22,1,.36,1) forwards; }

        .swoc-right-hidden  { opacity: 0; transform: translateY(24px); }
        .swoc-right-visible { animation: swocFadeRight .65s cubic-bezier(.22,1,.36,1) forwards; }

        .swoc-step { opacity: 0; transform: translateX(-10px); }
        .swoc-steps.swoc-left-visible .swoc-step {
          animation: swocStepIn .45s cubic-bezier(.22,1,.36,1) forwards;
        }
        @keyframes swocStepIn {
          from { opacity: 0; transform: translateX(-10px); }
          to   { opacity: 1; transform: translateX(0); }
        }

        /* Bubbles: trigger class now applied directly on .swoc-bubbles itself,
           so this selector reliably matches once in view. */
        .swoc-bubble { opacity: 0; transform: translateY(12px); }
        .swoc-bubbles.swoc-bubbles-visible .swoc-bubble {
          animation: swocFadeUp .45s cubic-bezier(.22,1,.36,1) forwards;
        }

        .swoc-btn {
          transition: transform .25s ease, box-shadow .25s ease;
        }
        .swoc-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 14px 28px rgba(71,71,222,0.32);
        }

        .swoc-mic {
          transition: transform .25s ease, box-shadow .25s ease;
        }
        .swoc-mic:hover {
          transform: scale(1.08);
          box-shadow: 0 8px 18px rgba(71,71,222,0.4);
        }

        @media (prefers-reduced-motion: reduce) {
          .swoc-hidden, .swoc-visible, .swoc-left-hidden, .swoc-left-visible,
          .swoc-right-hidden, .swoc-right-visible, .swoc-step, .swoc-bubble {
            opacity: 1 !important; transform: none !important; animation: none !important;
          }
          .swoc-btn:hover, .swoc-mic:hover { transform: none !important; }
        }
      `}</style>

      <section
        aria-label="Start with one conversation, grow when the need is real"
        className="w-full bg-white py-16 sm:py-20 md:py-0"
      >
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 md:px-10">
          {/* Heading */}
          <div
            ref={headRef}
            className={`swoc-hidden ${headIn ? "swoc-visible" : ""} text-center mb-4`}
          >
            <h2 className="text-[clamp(24px,4.2vw,34px)] font-bold leading-[1.25] tracking-tight text-gray-900">
              Start with one conversation.
              <br />
              Grow when the need is real.
            </h2>
          </div>

          {/* Subheading */}
          <p
            className={`swoc-hidden ${headIn ? "swoc-visible" : ""} text-center text-[14px] sm:text-[15px] leading-[1.7] text-gray-500 max-w-[640px] mx-auto mb-14 sm:mb-20`}
            style={{ animationDelay: "0.08s" }}
          >
            Sema doesn&apos;t force every user into a business funnel. Individuals stay individuals if they want to. Businesses adopt Sema when the team is ready.
          </p>

          {/* Overlapping two-card layout */}
          <div className="relative">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-8 lg:gap-0 items-center">
              {/* Left card - Path A */}
              <div
                ref={leftRef}
                className={`swoc-left-hidden ${leftIn ? "swoc-left-visible" : ""} relative z-10 lg:mr-[-40px]`}
              >
                <div className="rounded-2xl border border-gray-100 bg-white shadow-[0_20px_50px_rgba(15,31,78,0.08)] p-7 sm:p-9 pr-7 sm:pr-16 lg:pr-24">
                  <p className="text-[11px] font-semibold tracking-[0.08em] uppercase text-[#4B47E5] mb-3">
                    Path A &middot; Individual Use
                  </p>
                  <h3 className="text-[17px] sm:text-[18px] font-bold text-gray-900 mb-5">
                    Start solo. Stay solo or invite a team when you&apos;re ready.
                  </h3>

                  <ol
                    className={`swoc-steps ${leftIn ? "swoc-left-visible" : ""} flex flex-col gap-3 mb-7`}
                  >
                    {steps.map((step, i) => (
                      <li
                        key={step}
                        className="swoc-step flex items-start gap-3"
                        style={{ animationDelay: `${0.1 + i * 0.08}s` }}
                      >
                        <span className="flex items-center justify-center w-5 h-5 rounded-full bg-[#4B47E5]/10 text-[#4B47E5] text-[10.5px] font-bold shrink-0 mt-0.5">
                          {i + 1}
                        </span>
                        <span className="text-[13px] sm:text-[13.5px] leading-[1.6] text-gray-600">
                          {step}
                        </span>
                      </li>
                    ))}
                  </ol>
                  <a
                  
                    href="#start-free"
                    className="swoc-btn flex items-center justify-center rounded-full text-white text-[14px] font-semibold px-8 py-3.5 w-full"
                    style={{ background: "#4B47E5" }}
                  >
                    Start free
                  </a>
                </div>
              </div>

              {/* Right card - Dark chat interface */}
              <div
                ref={rightRef}
                className={`swoc-right-hidden ${rightIn ? "swoc-right-visible" : ""} relative z-20`}
                style={{ animationDelay: "0.12s" }}
              >
                <div
                  className="rounded-[40px] shadow-[0_30px_60px_rgba(0,0,0,0.35)] p-6 sm:p-8"
                  style={{ background: "#03051C" }}
                >
                  <h3 className="text-[22px] sm:text-[24px] font-bold leading-[1.25] text-white mb-6">
                    Keep the<br />
                     conversation going<br /> without delay
                  </h3>

                  <div
                    className={`swoc-bubbles ${rightIn ? "swoc-bubbles-visible" : ""} flex flex-col gap-2.5 mb-5`}
                  >
                    {/* Avatar + first incoming */}
                    <div
                      className="swoc-bubble flex items-start gap-2.5"
                      style={{ animationDelay: "0.05s" }}
                    >
                      <img
                        src="/Home/Ellipse.png"
                        alt="Contact"
                        className="w-[60px] h-[60px] rounded-full object-cover shrink-0 mt-1"
                      />
                      <div className="flex flex-col gap-2 max-w-[75%]">
                        <div className="rounded-xl rounded-tl-sm bg-white/10 px-4 py-2.5">
                          <p className="text-[12.5px] text-white/90">Amazing!</p>
                        </div>
                        <div className="rounded-xl rounded-tl-sm bg-white/10 px-4 py-2.5">
                          <p className="text-[12.5px] text-white/90 leading-[1.5]">
                            Thanks for the info! I&apos;ll get in touch with you!
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Outgoing */}
                    <div
                      className="swoc-bubble flex justify-end"
                      style={{ animationDelay: "0.12s" }}
                    >
                      <div
                        className="rounded-xl rounded-tr-sm px-4 py-2.5 max-w-[75%]"
                        style={{ background: "#4B6BFB" }}
                      >
                        <p className="text-[12.5px] text-white leading-[1.5]">
                          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint
                        </p>
                      </div>
                    </div>

                    {/* Incoming short */}
                    <div
                      className="swoc-bubble flex items-start gap-2.5"
                      style={{ animationDelay: "0.19s" }}
                    >
                      <div className="w-8 h-8 shrink-0" />
                      <div className="rounded-xl rounded-tl-sm bg-white/10 px-4 py-2.5">
                        <p className="text-[12.5px] text-white/90">Thank jnor Bye bye</p>
                      </div>
                    </div>

                    {/* Outgoing final */}
                    <div
                      className="swoc-bubble flex justify-end"
                      style={{ animationDelay: "0.26s" }}
                    >
                      <div
                        className="rounded-xl rounded-tr-sm px-4 py-2.5 max-w-[75%]"
                        style={{ background: "#4B6BFB" }}
                      >
                        <p className="text-[12.5px] text-white leading-[1.5]">
                          Perfect! I&apos;ll send you a video about our Webflow Templates in case you&apos;re interested!
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Message input bar */}
                  <div className="flex items-center gap-3 rounded-full bg-white/10 px-4 py-2.5">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeOpacity="0.5" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="shrink-0">
                      <circle cx="12" cy="12" r="10" />
                      <path d="M8 14s1.5 2 4 2 4-2 4-2" />
                      <line x1="9" y1="9" x2="9.01" y2="9" />
                      <line x1="15" y1="9" x2="15.01" y2="9" />
                    </svg>
                    <span className="text-[13px] text-white/40 flex-1">Message</span>
                    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="white" strokeOpacity="0.5" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="shrink-0">
                      <path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48" />
                    </svg>
                    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="white" strokeOpacity="0.5" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="shrink-0">
                      <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
                      <circle cx="12" cy="13" r="4" />
                    </svg>
                    <span
                      className="swoc-mic flex items-center justify-center w-8 h-8 rounded-full shrink-0"
                      style={{ background: "#4B6BFB" }}
                    >
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" />
                        <path d="M19 10v2a7 7 0 0 1-14 0v-2M12 19v4" />
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}