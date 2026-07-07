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

const navItems = [
  { label: "Workspace", active: true },
  { label: "Direct Messages", active: false },
  { label: "Channels", active: false },
  { label: "Spaces", active: false },
  { label: "Calls", active: false },
  { label: "Meetings", active: false },
  { label: "Admin", active: false },
];

export default function ProductOverviewUnifiedUISection() {
  const { ref: badgeRef, inView: badgeIn } = useInView(0.3);
  const { ref: headRef, inView: headIn } = useInView(0.2);
  const { ref: frameRef, inView: frameIn } = useInView(0.08);

  return (
    <>
      <style>{`
        @keyframes puiFadeUp {
          from { opacity: 0; transform: translateY(32px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .pui-hidden  { opacity: 0; transform: translateY(32px); }
        .pui-visible { animation: puiFadeUp .7s cubic-bezier(.22,1,.36,1) forwards; }

        .pui-part { opacity: 0; transform: translateY(16px); }
        .pui-frame.pui-visible .pui-part {
          animation: puiFadeUp .5s cubic-bezier(.22,1,.36,1) forwards;
        }

        .pui-frame { transition: box-shadow .35s ease; }
        .pui-frame:hover { box-shadow: 0 30px 60px rgba(15,15,40,0.12); }

        .pui-nav-item {
          transition: background-color .2s ease, color .2s ease;
        }
        .pui-nav-item:hover {
          background-color: color-mix(in srgb, var(--brand) 6%, transparent);
          color: var(--brand);
        }

        .pui-card {
          transition: transform .3s ease, box-shadow .3s ease, border-color .3s ease;
        }
        .pui-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 12px 24px color-mix(in srgb, var(--brand) 12%, transparent);
          border-color: color-mix(in srgb, var(--brand) 26%, transparent);
        }

        @media (prefers-reduced-motion: reduce) {
          .pui-hidden, .pui-visible, .pui-part { opacity: 1 !important; transform: none !important; animation: none !important; }
          .pui-frame:hover, .pui-card:hover { transform: none !important; }
        }
      `}</style>

      <section
        aria-label="Unified product UI"
        className="w-full bg-white py-16 sm:py-20 md:py-24"
      >
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 md:px-10 lg:px-16">
          {/* Badge */}
          <div
            ref={badgeRef}
            className={`pui-hidden ${badgeIn ? "pui-visible" : ""} flex justify-center mb-6`}
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-gray-200 px-4 py-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-brand" />
              <span className="text-[11px] font-semibold tracking-[0.08em] uppercase text-brand">
                Unified Product UI
              </span>
            </div>
          </div>

          {/* Heading */}
          <div
            ref={headRef}
            className={`pui-hidden ${headIn ? "pui-visible" : ""} text-center mb-10 sm:mb-14`}
            style={{ animationDelay: "0.08s" }}
          >
            <h2 className="text-[clamp(24px,4.2vw,36px)] font-bold leading-[1.15] tracking-tight text-gray-900">
              Curated depth, not every control.
            </h2>
          </div>

          {/* App shell frame */}
          <div
            ref={frameRef}
            className={`pui-frame pui-hidden ${frameIn ? "pui-visible" : ""} rounded-2xl border border-gray-100 shadow-[0_20px_50px_rgba(15,15,40,0.08)] overflow-hidden`}
            style={{ animationDelay: "0.15s" }}
          >
            {/* Top bar */}
            <div className="flex items-center gap-1.5 px-5 py-3.5 border-b border-gray-100">
              <span className="w-2 h-2 rounded-full bg-gray-200" />
              <span className="w-2 h-2 rounded-full bg-gray-200" />
              <span className="w-2 h-2 rounded-full bg-gray-200" />
            </div>

            {/* Three-column app shell */}
            <div className="grid grid-cols-1 md:grid-cols-[160px_1fr_200px] lg:grid-cols-[180px_1fr_220px]">
              {/* Sidebar nav */}
              <div
                className="pui-part border-b md:border-b-0 md:border-r border-gray-100 p-4 sm:p-5"
                style={{ animationDelay: "0.2s" }}
              >
                <nav className="flex md:flex-col gap-1 overflow-x-auto md:overflow-visible">
                  {navItems.map((item, i) => (
                    <span
                      key={i}
                      className={`pui-nav-item flex-shrink-0 rounded-lg px-3 py-2 text-[12.5px] font-medium whitespace-nowrap ${
                        item.active
                          ? "bg-brand-light text-brand font-semibold"
                          : "text-gray-500"
                      }`}
                    >
                      {item.label}
                    </span>
                  ))}
                </nav>
              </div>

              {/* Main content */}
              <div
                className="pui-part p-5 sm:p-6 flex flex-col gap-3 border-b md:border-b-0 md:border-r border-gray-100"
                style={{ animationDelay: "0.28s" }}
              >
                <div className="pui-card rounded-xl border border-gray-100 px-5 py-4">
                  <p className="text-[13.5px] font-bold text-gray-900 mb-1">
                    #launch-planning
                  </p>
                  <p className="text-[12.5px] text-gray-500">
                    Pinned decision · Oct 14 launch confirmed
                  </p>
                </div>
                <div className="pui-card rounded-xl border border-gray-100 px-5 py-4">
                  <p className="text-[13.5px] font-bold text-gray-900 mb-1">
                    Upcoming: Q3 Launch Planning
                  </p>
                  <p className="text-[12.5px] text-gray-500">
                    Join · Agenda · Participants
                  </p>
                </div>
              </div>

              {/* Ask Sema panel */}
              <div
                className="pui-part p-5 sm:p-6"
                style={{ animationDelay: "0.36s" }}
              >
                <div className="pui-card rounded-xl border border-gray-100 px-5 py-4 h-full">
                  <p className="text-[13.5px] font-bold text-gray-900 mb-3">
                    Ask Sema
                  </p>
                  <div className="flex flex-col gap-2 mb-3">
                    <p className="text-[12.5px] text-gray-500">
                      Summarize conversation
                    </p>
                    <p className="text-[12.5px] text-gray-500">
                      Find decisions
                    </p>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    <span className="text-[12px] font-medium text-emerald-600">
                      Security: Configured
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