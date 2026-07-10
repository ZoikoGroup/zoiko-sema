"use client";

import React, { useEffect, useRef, useState } from "react";

/** Same scroll-reveal hook used across the other sections/pages. */
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

const BRAND = "#3457E8";

const STATUS_STYLES: Record<string, string> = {
  Connected: "#6EE7B7",
  Available: "#8FE0D6",
  "Enterprise setup": "#8FE0D6",
};

// TODO: replace each src with your real logo file path, e.g. "/images/ecosystem/zoiko-time.svg"
const products = [
  { name: "ZoikoTime", logoSrc: "/Images/zoiko-time.png", status: "Connected" },
  { name: "Zoiko ID", logoSrc: "/Images/zoikoid.png", status: "Connected" },
  { name: "ZoikoOne", logoSrc: "/Images/zoiko-one.png", status: "Available" },
  { name: "ZoikoCloud", logoSrc: "/Images/zoiko-cloud.png", status: "Available" },
  { name: "ZoikoVertex", logoSrc: "/Images/zoiko-vertex.png", status: "Enterprise setup" },
  { name: "Zoikomail", logoSrc: "/Images/zoiko-mail.png", status: "Enterprise setup" },
];

export default function ZoikoCustomersEcosystemSection() {
  const { ref: eyebrowRef, inView: eyebrowIn } = useInView(0.3);
  const { ref: headingRef, inView: headingIn } = useInView(0.2);
  const { ref: copyRef, inView: copyIn } = useInView(0.2);
  const { ref: panelRef, inView: panelIn } = useInView(0.1);
  const { ref: gridRef, inView: gridIn } = useInView(0.1);

  return (
    <>
      <style>{`
        @keyframes zceFadeUp {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes zceFadeIn {
          from { opacity: 0; transform: translateY(32px) scale(.98); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }
        .zce-hidden  { opacity: 0; transform: translateY(28px); }
        .zce-visible { animation: zceFadeUp .6s cubic-bezier(.22,1,.36,1) forwards; }

        .zce-panel-hidden  { opacity: 0; transform: translateY(32px) scale(.98); }
        .zce-panel-visible { animation: zceFadeIn .7s cubic-bezier(.22,1,.36,1) forwards; }

        .zce-card { opacity: 0; transform: translateY(22px); }
        .zce-card.zce-card-in {
          animation: zceFadeUp .5s cubic-bezier(.22,1,.36,1) forwards;
        }

        .zce-card {
          transition: transform .25s ease, box-shadow .25s ease, background .25s ease;
        }
        .zce-card:hover {
          transform: translateY(-4px);
          background: #6b62f5;
          box-shadow: 0 16px 32px -18px rgba(0,0,0,0.45);
        }

        .zce-logo { transition: transform .25s ease; }
        .zce-card:hover .zce-logo { transform: scale(1.05); }

        @media (prefers-reduced-motion: reduce) {
          .zce-hidden, .zce-panel-hidden, .zce-card { opacity: 1 !important; transform: none !important; }
          .zce-visible, .zce-panel-visible, .zce-card-in { animation: none !important; }
        }
      `}</style>

      <section
        aria-label="Integrations and Zoiko ecosystem"
        className="w-full py-20 md:py-24"
        style={{ background: "#F3F2FD" }}
      >
        <div className="mx-auto w-full max-w-7xl px-6 md:px-10 lg:px-16">

          {/* Heading */}
          <div className="text-center mb-10">
            <p
              ref={eyebrowRef}
              className={`zce-hidden ${eyebrowIn ? "zce-visible" : ""} text-[11px] font-semibold uppercase tracking-[0.14em] mb-3`}
              style={{ color: BRAND }}
            >
              Integrations & Zoiko Ecosystem
            </p>
            <h2
              ref={headingRef}
              className={`zce-hidden ${headingIn ? "zce-visible" : ""} text-[clamp(24px,3.4vw,34px)] font-bold leading-[1.25] tracking-tight text-gray-900 mb-4`}
              style={{ animationDelay: "0.05s" }}
            >
              Fits your identity, calendar, storage, and workforce stack
            </h2>
            <p
              ref={copyRef}
              className={`zce-hidden ${copyIn ? "zce-visible" : ""} text-[14.5px] text-gray-500`}
              style={{ animationDelay: "0.1s" }}
            >
              The Zoiko ecosystem connects first, then the tools your
              organization already runs.
            </p>
          </div>

          {/* Dark panel */}
          <div
            ref={panelRef}
            className={`zce-panel-hidden ${panelIn ? "zce-panel-visible" : ""} rounded-3xl p-6 md:p-8`}
            style={{ background: "linear-gradient(160deg, #17182F 0%, #1E1F42 100%)" }}
          >
            <div className="flex items-center justify-between mb-6">
              <span className="text-[14px] font-semibold text-white">
                Zoiko Ecosystem
              </span>
              <span
                className="inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-[11px] font-semibold"
                style={{ background: "rgba(110,231,183,0.14)", color: "#6EE7B7" }}
              >
                Connected first
              </span>
            </div>

            <div
              ref={gridRef}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4"
            >
              {products.map((product, i) => (
                <div
                  key={product.name}
                  className={`zce-card ${gridIn ? "zce-card-in" : ""} rounded-2xl p-5 flex flex-col justify-between`}
                  style={{
                    background: "#F3F2FD",
                    minHeight: "108px",
                    animationDelay: `${i * 0.08}s`,
                  }}
                >
                  <img
                    src={product.logoSrc}
                    alt={product.name}
                    className="zce-logo h-auto w-full object-contain mb-0"
                  />

                  <div className="flex items-center gap-5">
                    <span
                      className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                      style={{ background: STATUS_STYLES[product.status] }}
                    />
                    <span
                      className="text-[11.5px] font-medium"
                      style={{ color: STATUS_STYLES[product.status] }}
                    >
                      {product.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>
    </>
  );
}