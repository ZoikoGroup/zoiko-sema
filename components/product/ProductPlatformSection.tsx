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

// ─────────────────────────────────────────
// PRODUCT SURFACE CARDS (bottom 2×2 grid)
// ─────────────────────────────────────────
const surfaces = [
  {
    title: "Messaging",
    image: "MESSAGING_ICON_IMAGE_URL_HERE", // 👈 add image URL here
    features: [
      "1:1 & group chat",
      "Channels & spaces",
      "Agreements & reactions",
      "Threaded replies",
      "Search & mentions",
      "File sharing",
    ],
  },
  {
    title: "Audio calls",
    image: "AUDIO_CALLS_ICON_IMAGE_URL_HERE", // 👈 add image URL here
    features: [
      "1:1 & group calls",
      "Call history",
      "Optional summaries & notes",
      "Multiple devices",
      "Escalate to video",
      "Business-grade controls",
    ],
  },
  {
    title: "Video meetings",
    image: "VIDEO_MEETINGS_ICON_IMAGE_URL_HERE", // 👈 add image URL here
    features: [
      "Instant & scheduled meetings",
      "Screen sharing",
      "Recording, transcripts",
      "AI meeting summaries",
      "Participant management",
      "Breakout rooms",
    ],
  },
  {
    title: "Channels & Spaces",
    image: "CHANNELS_SPACES_ICON_IMAGE_URL_HERE", // 👈 add image URL here
    features: [
      "Team channels",
      "Project spaces",
      "Client & guest access",
      "Announcement channels",
      "Pinned context & mentions",
      "Role-based access",
    ],
  },
];

const CHECK_ICON_URL = "/Images/ic_sharp-verified.png"; // 👈 add checkmark icon image URL here

export default function ProductPlatformSection() {
  const { ref: headRef,     inView: headIn     } = useInView(0.2);
  const { ref: diagRef,     inView: diagIn     } = useInView(0.1);
  const { ref: surfacesRef, inView: surfacesIn } = useInView(0.08);

  return (
    <>
      <style>{`
        /* ── fade-up for heading ── */
        @keyframes ppFadeUp {
          from { opacity:0; transform:translateY(26px); }
          to   { opacity:1; transform:translateY(0); }
        }
        .pp-hidden  { opacity:0; transform:translateY(26px); }
        .pp-visible { animation: ppFadeUp .6s cubic-bezier(.22,1,.36,1) forwards; }

        /* ── diagram image fade/scale in ── */
        @keyframes ppDiagIn {
          from { opacity:0; transform:translateY(20px) scale(.97); }
          to   { opacity:1; transform:translateY(0) scale(1); }
        }
        .pp-diagram { opacity:0; transform:translateY(20px) scale(.97); }
        .pp-diagram.on { animation: ppDiagIn .7s cubic-bezier(.22,1,.36,1) forwards; }
        .pp-diagram-img {
          transition: transform .5s cubic-bezier(.22,1,.36,1);
        }
        .pp-diagram:hover .pp-diagram-img {
          transform: scale(1.015);
        }

        /* ── product surface cards (bottom 2×2) ── */
        @keyframes ppSurfaceIn {
          from { opacity:0; transform:translateY(30px) scale(.97); }
          to   { opacity:1; transform:translateY(0) scale(1); }
        }
        .pp-surface { opacity:0; transform:translateY(30px) scale(.97); }
        .pp-surface-grid.on .pp-surface {
          animation: ppSurfaceIn .6s cubic-bezier(.22,1,.36,1) forwards;
        }
        .pp-surface-card {
          transition: transform .35s cubic-bezier(.22,1,.36,1), box-shadow .35s ease;
        }
        .pp-surface-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 24px 48px rgba(67,56,202,0.35);
        }
        .pp-surface-img {
          transition: transform .5s cubic-bezier(.22,1,.36,1);
        }
        .pp-surface-card:hover .pp-surface-img {
          transform: scale(1.06) translateY(-2px);
        }
        .pp-surface-feat {
          transition: transform .2s ease;
        }
        .pp-surface-feat:hover {
          transform: translateX(2px);
        }
        .pp-surface-check {
          transition: transform .2s ease;
        }
        .pp-surface-feat:hover .pp-surface-check {
          transform: scale(1.15);
        }

        /* ── reduced motion ── */
        @media (prefers-reduced-motion:reduce) {
          .pp-hidden, .pp-surface, .pp-diagram { opacity:1!important; transform:none!important; animation:none!important; }
          .pp-visible { animation:none!important; opacity:1!important; }
          .pp-surface-card:hover, .pp-surface-card:hover .pp-surface-img,
          .pp-diagram:hover .pp-diagram-img { transform:none!important; }
        }
      `}</style>

      <section
        aria-label="Everything people need to communicate clearly"
        className="w-full bg-white py-20 md:py-24 overflow-hidden"
      >
        <div className="mx-auto w-full max-w-7xl px-6 md:px-10 lg:px-16">

          {/* ── Heading ── */}
          <div
            ref={headRef}
            className={`pp-hidden ${headIn ? "pp-visible" : ""} text-center mb-12`}
          >
            <h2 className="font-bold leading-[1.15] tracking-tight text-gray-900 mb-4" style={{ fontSize: "clamp(26px,3.6vw,35px)" }}>
              Everything people need to communicate clearly.
            </h2>
            <p className="mx-auto max-w-[620px] text-[15px] leading-[1.8] text-gray-500">
              Four product surfaces that work together as one platform for individuals having a
              personal call, teams running a project, and businesses governing communication
              across an organization.
            </p>
          </div>

          {/* ════════════════════════════════════════
              HUB-AND-SPOKE DIAGRAM — single image
          ════════════════════════════════════════ */}
          <div
            ref={diagRef}
            className={`pp-diagram ${diagIn ? "on" : ""} mx-auto max-w-[900px]`}
          >
            <img
              src="/Images/COMMUNICATION_CORE.webp"
              alt="Communication Core — Messaging, calls and meetings connected to AI Signal Layer, Channels & Spaces, Audio Calls, Mobile & Desktop, Files & Context, and Admin & Security"
              className="pp-diagram-img w-full h-auto"
            />
          </div>
          {/* ════════ END DIAGRAM ════════ */}

          {/* ════════════════════════════════════════
              PRODUCT SURFACE CARDS — bottom 2×2 grid
          ════════════════════════════════════════ */}
          <div
            ref={surfacesRef}
            className={`pp-surface-grid ${surfacesIn ? "on" : ""} grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6  items-stretch`}
          >
            {surfaces.map((s, i) => (
              <div
                key={s.title}
                className="pp-surface h-full"
                style={{ animationDelay: `${0.08 + i * 0.1}s` }}
              >
                <div
                  className="pp-surface-card h-full flex flex-col rounded-3xl px-7 py-8 sm:px-9 sm:py-9"
                  style={{
                    background: "linear-gradient(155deg, #6858DC 0%, #453494 100%)",
                  }}
                >
                  <h3 className="text-[19px] sm:text-[20px] font-bold text-white text-center mb-6">
                    {s.title}
                  </h3>

                  <div className="flex justify-center mb-7">
                    <img
                      src={s.image}
                      alt={s.title}
                      className="pp-surface-img h-[110px] sm:h-[124px] w-auto object-contain"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-x-5 gap-y-2.5 mt-auto">
                    {s.features.map((f) => (
                      <div key={f} className="pp-surface-feat flex items-center gap-2">
                        <img
                          src={CHECK_ICON_URL}
                          alt=""
                          aria-hidden="true"
                          className="pp-surface-check flex-shrink-0 w-[17px] h-[17px] object-contain"
                        />
                        <span className="text-[12px] sm:text-[12.5px] leading-snug text-white/90">
                          {f}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* ════════ END SURFACE CARDS ════════ */}

        </div>
      </section>
    </>
  );
}