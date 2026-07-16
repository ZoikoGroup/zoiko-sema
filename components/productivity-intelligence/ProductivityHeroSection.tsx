"use client";

import Image from "next/image";
import Link from "next/link";
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

export default function ProductivityHeroSection() {
  const { ref: badgeRef, inView: badgeIn } = useInView(0.3);
  const { ref: titleRef, inView: titleIn } = useInView(0.2);
  const { ref: textRef, inView: textIn } = useInView(0.2);
  const { ref: buttonRef, inView: buttonIn } = useInView(0.2);
  const { ref: imageRef, inView: imageIn } = useInView(0.1);

  return (
    <>
      <style>{`
        @keyframes piFadeUp {
          from {
            opacity:0;
            transform:translateY(30px);
          }
          to{
            opacity:1;
            transform:translateY(0);
          }
        }

        @keyframes piFadeRight {
          from{
            opacity:0;
            transform:translateX(40px);
          }
          to{
            opacity:1;
            transform:translateX(0);
          }
        }

        @keyframes piFloat{
          0%,100%{
            transform:translateY(0px);
          }
          50%{
            transform:translateY(-8px);
          }
        }

        .pi-hidden{
          opacity:0;
          transform:translateY(30px);
        }

        .pi-visible{
          animation:piFadeUp .75s cubic-bezier(.22,1,.36,1) forwards;
        }

        .pi-hidden-x{
          opacity:0;
          transform:translateX(40px);
        }

        .pi-visible-x{
          animation:piFadeRight .8s cubic-bezier(.22,1,.36,1) forwards;
        }

        .pi-image{
          transition:
            transform .45s ease,
            box-shadow .45s ease;
          animation:piFloat 6s ease-in-out infinite;
        }

        .pi-image:hover{
          transform:translateY(-8px);
        }

        .pi-btn-primary{
          transition:.25s;
        }

        .pi-btn-primary:hover{
          transform:translateY(-2px);
          box-shadow:0 14px 28px rgba(79,91,213,.45);
          background:#5A66E3;
        }

        .pi-btn-secondary{
          transition:.25s;
        }

        .pi-btn-secondary:hover{
          transform:translateY(-2px);
          box-shadow:0 10px 24px rgba(0,0,0,.18);
        }

        @media(prefers-reduced-motion:reduce){
          .pi-hidden,
          .pi-hidden-x{
            opacity:1;
            transform:none;
          }

          .pi-visible,
          .pi-visible-x{
            animation:none;
          }

          .pi-image{
            animation:none;
          }
        }

      `}</style>

      <section className="relative overflow-hidden bg-[#0D0B24] py-8 sm:py-12 lg:py-14 dark:bg-[#0D0B24]">
        <div
          className="pointer-events-none absolute right-[-180px] top-1/2 h-[520px] w-[520px] -translate-y-1/2 rounded-full blur-[120px]"
          style={{
            background:
              "radial-gradient(circle, rgba(79,91,213,.28) 0%, rgba(79,91,213,0) 72%)",
          }}
        />

        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 px-6 sm:px-8 md:px-12 lg:grid-cols-2">
          {/* Left */}

          <div className="max-w-xl">
            <p
              ref={badgeRef}
              className={`pi-hidden ${
                badgeIn ? "pi-visible" : ""
              } mb-5 text-[12px] font-bold uppercase tracking-[0.22em] text-[#7C86F0]`}
            >
              ZoikoTime
            </p>

            <h1
              ref={titleRef}
              style={{ animationDelay: ".08s" }}
              className={`pi-hidden ${
                titleIn ? "pi-visible" : ""
              } text-[clamp(40px,6vw,64px)] font-extrabold leading-[1.05] tracking-tight text-white`}
            >
              Productivity
              <br />
              Intelligence
            </h1>

            <p
              ref={textRef}
              style={{ animationDelay: ".16s" }}
              className={`pi-hidden ${
                textIn ? "pi-visible" : ""
              } mt-6 max-w-[470px] text-[15px] leading-[1.8] text-gray-400`}
            >
              Turn meeting-to-work signals, decisions, action items, and
              verified collaboration records into governed productivity
              intelligence that helps leaders remove blockers and improve
              follow-through.
            </p>

            <div
              ref={buttonRef}
              style={{ animationDelay: ".24s" }}
              className={`pi-hidden ${
                buttonIn ? "pi-visible" : ""
              } mt-9 flex flex-col gap-3 sm:flex-row`}
            >
              <Link href="/get-a-demo">
              <button className="pi-btn-primary rounded-full bg-[#4F5BD5] px-8 py-3 text-sm font-semibold text-white">
                Request Demo
              </button>
              </Link>
              <Link href="#">
              <button className="pi-btn-secondary rounded-full bg-white px-8 py-3 text-sm font-semibold text-gray-900">
                View Governance
              </button>
              </Link>
            </div>
          </div>

          {/* Right */}

          <div
            ref={imageRef}
            style={{ animationDelay: ".1s" }}
            className={`pi-hidden-x ${
              imageIn ? "pi-visible-x" : ""
            } flex justify-center lg:justify-end`}
          >
            <Image
              src="/productivity-intelligence/Hero.png"
              alt="Productivity Intelligence Dashboard"
              width={900}
              height={640}
              priority
              className="pi-image h-auto w-full max-w-[720px]"
            />
          </div>
        </div>
      </section>
    </>
  );
}