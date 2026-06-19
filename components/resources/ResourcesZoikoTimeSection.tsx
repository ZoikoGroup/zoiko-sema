"use client";

import React from "react";
import Link from "next/link";

interface ResourceLink {
  title: string;
  desc: string;
  href: string;
}

const resources: ResourceLink[] = [
  {
    title: "How Sema and ZoikoTime work together",
    desc: "What the integration covers, how it's governed, and where boundaries sit.",
    href: "/resources/sema-zoikotime-integration",
  },
  {
    title: "What governed communication context means",
    desc: "A glossary entry for evaluators: what we mean, what we don't, and why it matters.",
    href: "/resources/governed-communication-context",
  },
  {
    title: "When not to connect communication to workforce records",
    desc: "The boundary cases — and why deliberate separation is sometimes the right answer.",
    href: "/resources/when-not-to-connect",
  },
];

export default function ResourcesZoikoTimeSection() {
  return (
    <>
      <style>{`
        @keyframes rztFadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        .rzt-enter-1 { animation: rztFadeUp 0.5s cubic-bezier(.22,1,.36,1) 0.02s both; }
        .rzt-enter-2 { animation: rztFadeUp 0.55s cubic-bezier(.22,1,.36,1) 0.10s both; }
        .rzt-enter-3 { animation: rztFadeUp 0.55s cubic-bezier(.22,1,.36,1) 0.18s both; }
        .rzt-enter-4 { animation: rztFadeUp 0.5s cubic-bezier(.22,1,.36,1) 0.26s both; }
        .rzt-panel-enter { animation: rztFadeUp 0.55s cubic-bezier(.22,1,.36,1) 0.14s both; }
        .rzt-link-enter { animation: rztFadeUp 0.5s cubic-bezier(.22,1,.36,1) both; }

        @keyframes rztDotPulse {
          0%,100% { box-shadow: 0 0 0 0 rgba(165,180,252,0.5); }
          50%      { box-shadow: 0 0 0 5px rgba(165,180,252,0); }
        }
        .rzt-badge-dot { animation: rztDotPulse 2.2s ease-in-out infinite; }

        /* primary pill button */
        .rzt-btn-primary {
          position: relative; overflow: hidden;
          transition: transform .22s cubic-bezier(.22,1,.36,1), box-shadow .22s ease, opacity .2s ease;
        }
        .rzt-btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 14px 28px rgba(0,0,0,0.25);
        }
        @keyframes rztShimmer {
          from { transform: translateX(-120%); }
          to   { transform: translateX(220%); }
        }
        .rzt-btn-primary::after {
          content: "";
          position: absolute; inset: 0;
          background: linear-gradient(110deg, transparent 30%, rgba(71,71,135,0.18) 50%, transparent 70%);
          transform: translateX(-120%);
        }
        .rzt-btn-primary:hover::after { animation: rztShimmer .6s ease forwards; }
        .rzt-btn-arrow { display: inline-block; transition: transform .2s ease; }
        .rzt-btn-primary:hover .rzt-btn-arrow { transform: translateX(3px); }

        /* secondary outline button */
        .rzt-btn-secondary {
          transition: transform .22s cubic-bezier(.22,1,.36,1), box-shadow .22s ease, border-color .22s ease, background-color .22s ease;
        }
        .rzt-btn-secondary:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 22px rgba(0,0,0,0.18);
          border-color: rgba(255,255,255,0.5);
          background-color: rgba(255,255,255,0.06);
        }

        /* resource link row */
        .rzt-resource-link {
          display: block;
          transition: background-color .2s ease, padding-left .2s ease;
          border-radius: 10px;
        }
        .rzt-resource-link:hover {
          background-color: rgba(255,255,255,0.06);
          padding-left: 6px;
        }
        .rzt-resource-arrow { display: inline-block; transition: transform .2s ease, opacity .2s ease; opacity: 0.6; }
        .rzt-resource-link:hover .rzt-resource-arrow { transform: translateX(3px); opacity: 1; }
        .rzt-resource-title { transition: color .2s ease; }
        .rzt-resource-link:hover .rzt-resource-title { color: #a5b4fc; }

        @media (prefers-reduced-motion: reduce) {
          .rzt-enter-1, .rzt-enter-2, .rzt-enter-3, .rzt-enter-4, .rzt-panel-enter, .rzt-link-enter {
            animation: none !important; opacity: 1 !important; transform: none !important;
          }
          .rzt-badge-dot { animation: none !important; }
          .rzt-btn-primary:hover, .rzt-btn-secondary:hover, .rzt-resource-link:hover { transform: none; }
        }
      `}</style>

      <section
        aria-label="Where communication connects to workforce context"
        className="w-full bg-white px-4 md:px-8 py-10 md:py-14"
      >
        <div
          className="mx-auto w-full max-w-6xl rounded-[28px] overflow-hidden"
          style={{ background: "#474787" }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] gap-0">

            {/* ════ LEFT — main content ════ */}
            <div className="p-8 md:p-10 lg:p-12">

              {/* Badge */}
              <div className="rzt-enter-1 inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 mb-6" style={{ background: "rgba(255,255,255,0.1)" }}>
                <span className="rzt-badge-dot w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: "#a5b4fc" }} />
                <span className="text-[10.5px] font-bold uppercase tracking-[0.14em]" style={{ color: "#c7caed" }}>
                  Sema + ZoikoTime
                </span>
              </div>

              {/* Heading */}
              <h2
                className="rzt-enter-2 font-bold leading-[1.15] tracking-tight text-white mb-5"
                style={{ fontSize: "35px" }}
              >
                Where communication connects to workforce context
              </h2>

              {/* Sub-copy */}
              <p className="rzt-enter-3 text-[14.5px] leading-[1.75] max-w-[480px] mb-7" style={{ color: "#c7caed" }}>
                For organizations evaluating Sema&apos;s integration with ZoikoTime — the
                integration that governs how communication signals can support
                workforce truth, billing accuracy, and audit-ready evidence.
              </p>

              {/* Boundary note */}
              <div
                className="rzt-enter-3 rounded-xl px-5 py-4 mb-8"
                style={{
                  background: "rgba(255,255,255,0.06)",
                  borderLeft: "3px solid #a5b4fc",
                }}
              >
                <p className="text-[13px] leading-relaxed" style={{ color: "#dde0f5" }}>
                  <span className="font-bold text-white">Boundary note.</span> Sema
                  works independently. ZoikoTime is a separate Zoiko Tech platform
                  requiring its own subscription. Integration is governed and
                  permissioned, and Sema is not a surveillance tool.
                </p>
              </div>

              {/* CTAs */}
              <div className="rzt-enter-4 flex flex-wrap items-center gap-3">
                <Link
                  href="/zoikotime"
                  className="rzt-btn-primary inline-flex items-center gap-2 rounded-full px-6 py-3 text-[14px] font-semibold"
                  style={{ background: "#fff", color: "#15131F" }}
                >
                  Learn about Sema + ZoikoTime
                  <span aria-hidden="true" className="rzt-btn-arrow">→</span>
                </Link>

                <Link
                  href="/contact-sales"
                  className="rzt-btn-secondary inline-flex items-center justify-center rounded-full border px-6 py-3 text-[14px] font-medium text-white"
                  style={{ borderColor: "rgba(255,255,255,0.35)" }}
                >
                  Talk to sales
                </Link>
              </div>
            </div>

            {/* ════ RIGHT — featured resources panel ════ */}
            <div
              className="rzt-panel-enter p-8 md:p-10 lg:p-12"
              style={{ background: "rgba(0,0,0,0.12)" }}
            >
              <p className="text-[11px] font-bold uppercase tracking-[0.14em] mb-6" style={{ color: "#9b9ed4" }}>
                Featured Integration Resources
              </p>

              <div className="space-y-1">
                {resources.map((res, i) => (
                  <React.Fragment key={res.title}>
                    <Link
                      href={res.href}
                      className="rzt-resource-link rzt-link-enter px-3 py-4"
                      style={{ animationDelay: `${0.1 + i * 0.1}s` }}
                    >
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <h4 className="rzt-resource-title text-[14px] font-bold leading-snug text-white mb-1.5">
                            {res.title}
                          </h4>
                          <p className="text-[12.5px] leading-relaxed" style={{ color: "#a8abda" }}>
                            {res.desc}
                          </p>
                        </div>
                        <span aria-hidden="true" className="rzt-resource-arrow flex-shrink-0 text-white mt-1">
                          →
                        </span>
                      </div>
                    </Link>
                    {i < resources.length - 1 && (
                      <div className="h-px" style={{ background: "rgba(255,255,255,0.1)" }} />
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}