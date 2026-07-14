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

export default function PrivacyPositioningSection() {
  const { ref: badgeRef, inView: badgeIn } = useInView(0.3);
  const { ref: titleRef, inView: titleIn } = useInView(0.25);
  const { ref: imagesRef, inView: imagesIn } = useInView(0.15);

  return (
    <>
      <style>{`
        @keyframes ppFadeUp{
          from{
            opacity:0;
            transform:translateY(28px);
          }
          to{
            opacity:1;
            transform:translateY(0);
          }
        }

        @keyframes ppFadeLeft{
          from{
            opacity:0;
            transform:translateX(-45px);
          }
          to{
            opacity:1;
            transform:translateX(0);
          }
        }

        @keyframes ppFadeRight{
          from{
            opacity:0;
            transform:translateX(45px);
          }
          to{
            opacity:1;
            transform:translateX(0);
          }
        }

        @keyframes ppFloat{
          0%,100%{
            transform:translateY(0);
          }
          50%{
            transform:translateY(-8px);
          }
        }

        .pp-hidden{
          opacity:0;
          transform:translateY(28px);
        }

        .pp-visible{
          animation:ppFadeUp .75s cubic-bezier(.22,1,.36,1) forwards;
        }

        .pp-hidden-left{
          opacity:0;
          transform:translateX(-45px);
        }

        .pp-visible-left{
          animation:ppFadeLeft .8s cubic-bezier(.22,1,.36,1) forwards;
        }

        .pp-hidden-right{
          opacity:0;
          transform:translateX(45px);
        }

        .pp-visible-right{
          animation:ppFadeRight .8s cubic-bezier(.22,1,.36,1) forwards;
        }

        .pp-image{
          animation:ppFloat 7s ease-in-out infinite;
          transition:
            transform .45s ease,
            box-shadow .45s ease;
        }

        .pp-image:hover{
          transform:translateY(-8px);
          box-shadow:0 30px 70px rgba(0,0,0,.35);
        }

        @media (prefers-reduced-motion: reduce){
          .pp-hidden,
          .pp-hidden-left,
          .pp-hidden-right{
            opacity:1 !important;
            transform:none !important;
          }

          .pp-visible,
          .pp-visible-left,
          .pp-visible-right{
            animation:none !important;
          }

          .pp-image{
            animation:none;
          }
        }
      `}</style>

      <section className="bg-[#0D0B24] py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-6 sm:px-8">

          {/* Header */}

          <div className="mx-auto max-w-3xl text-center">

            <p
              ref={badgeRef}
              className={`pp-hidden ${
                badgeIn ? "pp-visible" : ""
              } mb-3 text-[11px] font-bold uppercase tracking-[0.22em] text-[#7C86F0]`}
            >
              Privacy-safe positioning
            </p>

            <h2
              ref={titleRef}
              style={{ animationDelay: ".08s" }}
              className={`pp-hidden ${
                titleIn ? "pp-visible" : ""
              } text-[clamp(30px,4vw,46px)] font-bold leading-tight text-white`}
            >
              Productivity intelligence,
              not surveillance
            </h2>

          </div>

          {/* Images */}

          <div
            ref={imagesRef}
            className="mt-14 grid grid-cols-1 gap-8 lg:grid-cols-2"
          >

            {/* Left */}

            <div
              style={{ animationDelay: ".18s" }}
              className={`${
                imagesIn ? "pp-visible-left" : "pp-hidden-left"
              }`}
            >
              <Image
                src="/productivity-intelligence/group1.png"
                alt="Privacy-safe productivity intelligence"
                width={900}
                height={700}
                className="pp-image h-auto w-full rounded-3xl"
              />
            </div>

            {/* Right */}

            <div
              style={{ animationDelay: ".3s" }}
              className={`${
                imagesIn ? "pp-visible-right" : "pp-hidden-right"
              }`}
            >
              <Image
                src="/productivity-intelligence/group2.png"
                alt="Productivity intelligence is not surveillance"
                width={900}
                height={700}
                className="pp-image h-auto w-full rounded-3xl"
              />
            </div>

          </div>

        </div>
      </section>
    </>
  );
}