"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";

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

const routes = [
  {
    title: "Sales conversation",
    alt: "Team reviewing a video call together in a meeting room",
    src: "/Images/sales-meeting.webp",
  },
  {
    title: "Support conversation",
    alt: "Customer support agent working across connected devices",
    src: "/Images/support-hub.webp",
  },
];

export default function ContactRouteSection() {
  const { ref: badgeRef, inView: badgeIn } = useInView(0.3);
  const { ref: headRef, inView: headIn } = useInView(0.2);
  const { ref: gridRef, inView: gridIn } = useInView(0.08);

  return (
    <>
      <style>{`
        @keyframes crsFadeUp {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .crs-hidden  { opacity: 0; transform: translateY(28px); }
        .crs-visible { animation: crsFadeUp .65s cubic-bezier(.22,1,.36,1) forwards; }

        .crs-card { opacity: 0; transform: translateY(24px); }
        .crs-grid.crs-visible .crs-card {
          animation: crsFadeUp .6s cubic-bezier(.22,1,.36,1) forwards;
        }

        .crs-img-wrap {
          transition: transform .4s ease, box-shadow .4s ease;
        }
        .crs-img-wrap:hover {
          transform: translateY(-4px);
          box-shadow: 0 20px 40px rgba(15, 31, 78, 0.12);
        }

        @media (prefers-reduced-motion: reduce) {
          .crs-hidden, .crs-visible, .crs-card { opacity: 1 !important; transform: none !important; animation: none !important; }
          .crs-img-wrap:hover { transform: none !important; }
        }
      `}</style>

      <section
        aria-label="Contact routes"
        className="w-full bg-[#F3F2FD] py-16 sm:py-20 md:py-24"
      >
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 md:px-10 lg:px-16">
          {/* Badge */}
          <div
            ref={badgeRef}
            className={`crs-hidden ${badgeIn ? "crs-visible" : ""} flex justify-center mb-4`}
          >
            <span className="text-[11px] font-bold tracking-[0.12em] uppercase text-brand">
              Sales &amp; Support
            </span>
          </div>

          {/* Heading */}
          <div
            ref={headRef}
            className={`crs-hidden ${headIn ? "crs-visible" : ""} text-center mb-3`}
            style={{ animationDelay: "0.08s" }}
          >
            <h2 className="text-[clamp(24px,4.2vw,36px)] font-bold leading-[1.15] tracking-tight text-gray-900 max-w-[720px] mx-auto">
              Two clear paths — equally easy to reach
            </h2>
          </div>

          {/* Subtext */}
          <p
            className={`crs-hidden ${headIn ? "crs-visible" : ""} text-center text-[14px] sm:text-[15px] leading-[1.7] text-gray-500 max-w-[620px] mx-auto mb-12 sm:mb-16`}
            style={{ animationDelay: "0.14s" }}
          >
            Prospects move toward a demo and enterprise qualification;
            customers get help fast, starting with the Help Center.
          </p>

          {/* Grid */}
          <div
            ref={gridRef}
            className={`crs-grid ${gridIn ? "crs-visible" : ""} grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6`}
          >
            {routes.map((r, i) => (
              <div
                key={r.title}
                className="crs-card"
                style={{ animationDelay: `${0.05 + i * 0.1}s` }}
              >
                <div className="crs-img-wrap relative w-full aspect-[4/3] sm:aspect-[16/12] rounded-2xl overflow-hidden shadow-sm">
                  <Image
                    src={r.src}
                    alt={r.alt}
                    fill
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}