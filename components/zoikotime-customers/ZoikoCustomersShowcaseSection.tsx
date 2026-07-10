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

export default function ZoikoCustomersShowcaseSection() {
  const { ref: headRef, inView: headIn } = useInView(0.25);
  const { ref: imgRef, inView: imgIn } = useInView(0.1);

  return (
    <>
      <style>{`
        @keyframes ztcsFadeUp {
          from { opacity:0; transform:translateY(28px); }
          to   { opacity:1; transform:translateY(0); }
        }
        .ztcs-hidden  { opacity:0; transform:translateY(28px); }
        .ztcs-visible { animation: ztcsFadeUp .6s cubic-bezier(.22,1,.36,1) forwards; }

        .ztcs-img-wrap {
          transition: transform .5s cubic-bezier(.22,1,.36,1), box-shadow .5s ease;
        }
        .ztcs-img-wrap:hover {
          transform: translateY(-5px) scale(1.01);
          box-shadow: 0 30px 60px rgba(15,23,42,0.28);
        }

        @media (prefers-reduced-motion: reduce) {
          .ztcs-hidden { opacity:1!important; transform:none!important; animation:none!important; }
          .ztcs-visible { animation:none!important; opacity:1!important; }
          .ztcs-img-wrap:hover { transform:none!important; }
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
            className={`ztcs-hidden ${headIn ? "ztcs-visible" : ""} text-center mb-12`}
          >
            <p
              className="text-[11px] font-semibold uppercase tracking-[0.14em] mb-4"
              style={{ color: "#4F46E5" }}
            >
              Product Showcase
            </p>
            <h2 className="text-[clamp(26px,3.8vw,38px)] font-extrabold leading-[1.15] tracking-tight text-gray-900 mb-5 max-w-[700px] mx-auto">
              From workforce context to governed communication
            </h2>
            <p className="mx-auto max-w-[680px] text-[15px] leading-[1.75] text-gray-500">
              The bridge from ZoikoTime context to Zoiko Sema collaboration —
              with governance recorded at every step, and no monitoring of
              people.
            </p>
          </div>

          {/* Image */}
          <div
            ref={imgRef}
            className={`ztcs-hidden ${imgIn ? "ztcs-visible" : ""}`}
          >
            <div className="ztcs-img-wrap rounded-2xl overflow-hidden shadow-xl">
              <img
                src="/Images/ZoikoCustomersShowcaseSection.webp" /* 👈 add your image URL here */
                alt="Zoiko Sema video meeting with Q2 product roadmap and AI meeting assistant"
                className="w-full h-auto object-cover rounded-2xl"
              />
            </div>
          </div>

        </div>
      </section>
    </>
  );
}