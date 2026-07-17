"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold }
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, [threshold]);

  return { ref, inView };
}

const POLICIES = [
  {
    title: "Activation",
    description:
      "Owner or admin selects a policy template, reviews effects, and confirms.",
  },
  {
    title: "Inheritance",
    description:
      "Organization policy applies by default; exceptions require permission and audit.",
  },
  {
    title: "Turn off",
    description:
      "High-impact confirmation explains which controls change; audit history is preserved.",
  },
];

export default function ConfidentialModeSection() {
  const { ref: headerRef, inView: headerIn } = useInView(0.25);
  const { ref: imageRef, inView: imageIn } = useInView(0.15);
  const { ref: cardsRef, inView: cardsIn } = useInView(0.15);

  return (
    <>
      <style>{`
        @keyframes cmFadeUp{
          from{
            opacity:0;
            transform:translateY(30px);
          }
          to{
            opacity:1;
            transform:translateY(0);
          }
        }

        @keyframes cmFadeRight{
          from{
            opacity:0;
            transform:translateX(40px);
          }
          to{
            opacity:1;
            transform:translateX(0);
          }
        }

        .cm-hidden{
          opacity:0;
          transform:translateY(30px);
        }

        .cm-visible{
          animation:cmFadeUp .75s cubic-bezier(.22,1,.36,1) forwards;
        }

        .cm-hidden-right{
          opacity:0;
          transform:translateX(40px);
        }

        .cm-visible-right{
          animation:cmFadeRight .8s cubic-bezier(.22,1,.36,1) forwards;
        }

        .cm-image{
          transition:
            transform .45s ease,
            box-shadow .45s ease;
        }

        .cm-image:hover{
          transform:translateY(-6px);
          box-shadow:0 34px 70px rgba(0,0,0,.45);
        }

        .cm-card{
          transition:
            transform .3s ease,
            border-color .3s ease,
            box-shadow .3s ease;
        }

        .cm-card:hover{
          transform:translateY(-4px);
          border-color:rgba(124,134,240,.35);
          box-shadow:0 18px 42px rgba(79,91,213,.18);
        }

        @media(prefers-reduced-motion:reduce){

          .cm-hidden,
          .cm-visible,
          .cm-hidden-right,
          .cm-visible-right{
            opacity:1!important;
            transform:none!important;
            animation:none!important;
          }

          .cm-card:hover,
          .cm-image:hover{
            transform:none!important;
          }

        }

      `}</style>

      <section className="relative overflow-hidden bg-[#0D0B24] py-8 sm:py-12 lg:py-14">

        {/* Ambient Glow */}

        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
        >
          <div className="absolute -left-40 top-0 h-[520px] w-[520px] rounded-full bg-[#4F5BD5]/15 blur-[140px]" />

          <div className="absolute right-0 top-0 h-[420px] w-[420px] rounded-full bg-[#4F5BD5]/10 blur-[120px]" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-8">

          {/* Header */}

          <div
            ref={headerRef}
            className={`mx-auto max-w-4xl text-center ${
              headerIn ? "cm-visible" : "cm-hidden"
            }`}
          >
            <p className="mb-4 text-[11px] font-bold uppercase tracking-[0.22em] text-[#7C86F0]">
              Confidential Mode
            </p>

            <h2 className="text-[clamp(34px,4vw,48px)] font-bold leading-tight text-white">
              A visible policy state —
              not a hidden switch.
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-[15px] leading-8 text-gray-400">
              Confidential Mode applies stricter, persistent rules to
              access, guests, meetings, files, AI, retention, and
              exports — visible in the workspace header, meeting prejoin,
              file cards, and export drawer.
            </p>

          </div>

          <div className="mt-12 grid grid-cols-1 items-center gap-10 lg:grid-cols-2">

            {/* LEFT IMAGE */}

            <div
              ref={imageRef}
              className={`${
                imageIn ? "cm-visible" : "cm-hidden"
              }`}
            >
              <div className="overflow-hidden rounded-[28px] shadow-[0_30px_70px_rgba(0,0,0,.45)]">

                <Image
                  src="/zoikosema-secure-communication/confidential-mode.png"
                  alt="Confidential Mode"
                  width={1400}
                  height={1000}
                  priority
                  className="cm-image h-auto w-full object-cover"
                />

              </div>

            </div>

            {/* RIGHT CONTENT */}

            <div
              ref={cardsRef}
              className={`space-y-5 ${
                cardsIn ? "cm-visible-right" : "cm-hidden-right"
              }`}
              style={{ animationDelay: ".15s" }}
            >
              {POLICIES.map((policy, index) => (
                <div
                  key={policy.title}
                  style={{
                    animationDelay: `${0.18 + index * 0.08}s`,
                  }}
                  className="cm-card rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm"
                >
                  <h3 className="text-[18px] font-semibold text-white">
                    {policy.title}
                  </h3>

                  <p className="mt-4 text-[15px] leading-7 text-gray-400">
                    {policy.description}
                  </p>
                </div>
              ))}
            </div>

          </div>

        </div>

      </section>

    </>

  );
}