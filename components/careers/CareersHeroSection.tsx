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

export default function CareersHeroSection() {
  const { ref: badgeRef, inView: badgeIn } = useInView(0.3);
  const { ref: headingRef, inView: headingIn } = useInView(0.25);
  const { ref: textRef, inView: textIn } = useInView(0.25);
  const { ref: buttonRef, inView: buttonIn } = useInView(0.2);
  const { ref: noteRef, inView: noteIn } = useInView(0.2);
  const { ref: imageRef, inView: imageIn } = useInView(0.15);

  return (
    <>
      <style>{`
        @keyframes careersFadeUp {
          from {
            opacity: 0;
            transform: translateY(28px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes careersFadeRight {
          from {
            opacity: 0;
            transform: translateX(40px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes careersFloat {
          0%,100%{
            transform:translateY(0px);
          }
          50%{
            transform:translateY(-8px);
          }
        }

        .careers-hidden{
          opacity:0;
          transform:translateY(28px);
        }

        .careers-visible{
          animation:careersFadeUp .75s cubic-bezier(.22,1,.36,1) forwards;
        }

        .careers-hidden-right{
          opacity:0;
          transform:translateX(40px);
        }

        .careers-visible-right{
          animation:careersFadeRight .8s cubic-bezier(.22,1,.36,1) forwards;
        }

        .careers-image{
          animation:careersFloat 6s ease-in-out infinite;
          transition:
            transform .45s ease,
            box-shadow .45s ease;
        }

        .careers-image:hover{
          transform:translateY(-8px);
          box-shadow:0 35px 70px rgba(0,0,0,.35);
        }

        .careers-btn-primary{
          transition:
            transform .25s ease,
            background-color .25s ease,
            box-shadow .25s ease;
        }

        .careers-btn-primary:hover{
          transform:translateY(-2px);
          background:#5C68E0;
          box-shadow:0 14px 30px rgba(79,91,213,.45);
        }

        .careers-btn-secondary{
          transition:
            transform .25s ease,
            box-shadow .25s ease;
        }

        .careers-btn-secondary:hover{
          transform:translateY(-2px);
          box-shadow:0 10px 24px rgba(0,0,0,.2);
        }

        @media(prefers-reduced-motion:reduce){

          .careers-hidden,
          .careers-hidden-right{
            opacity:1 !important;
            transform:none !important;
          }

          .careers-visible,
          .careers-visible-right{
            animation:none !important;
          }

          .careers-image{
            animation:none;
          }

        }
      `}</style>

      <section className="relative overflow-hidden bg-[#0D0B24] py-8 sm:py-10 lg:py-14">

        {/* Glow */}

        <div
          className="pointer-events-none absolute -right-24 top-1/2 h-[520px] w-[520px] -translate-y-1/2 rounded-full blur-[120px]"
          style={{
            background:
              "radial-gradient(circle, rgba(79,91,213,.28) 0%, rgba(79,91,213,0) 72%)",
          }}
        />

        <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 px-6 sm:px-8 lg:grid-cols-2">

          {/* Left */}

          <div className="max-w-xl">

            <p
              ref={badgeRef}
              className={`careers-hidden ${
                badgeIn ? "careers-visible" : ""
              } mb-5 text-[12px] font-bold uppercase tracking-[0.22em] text-[#7C86F0]`}
            >
              Company / Careers
            </p>

            <h1
              ref={headingRef}
              style={{ animationDelay: ".08s" }}
              className={`careers-hidden ${
                headingIn ? "careers-visible" : ""
              } text-[clamp(34px,5.5vw,54px)] font-extrabold leading-[1.05] tracking-tight text-white`}
            >
              Build the future of
              <br />
              <span className="text-[#6D8BFF]">
                secure business
              </span>
              <br />
              <span className="text-[#6D8BFF]">
                communication.
              </span>
            </h1>

            <p
              ref={textRef}
              style={{ animationDelay: ".16s" }}
              className={`careers-hidden ${
                textIn ? "careers-visible" : ""
              } mt-6 max-w-[480px] text-[15px] leading-8 text-gray-400`}
            >
              Help create Zoiko Sema: secure messaging, audio calls,
              video meetings, AI meeting summaries, channels,
              spaces, admin governance, and enterprise-ready
              communication workflows.
            </p>

            <div
              ref={buttonRef}
              style={{ animationDelay: ".24s" }}
              className={`careers-hidden ${
                buttonIn ? "careers-visible" : ""
              } mt-9 flex flex-col gap-3 sm:flex-row`}
            >
              <button className="careers-btn-primary rounded-full bg-[#4F5BD5] px-8 py-3 text-sm font-semibold text-white">
                View Open Roles
              </button>

              <button className="careers-btn-secondary rounded-full bg-white px-8 py-3 text-sm font-semibold text-[#172046]">
                Join Talent Community
              </button>
            </div>

            <p
              ref={noteRef}
              style={{ animationDelay: ".32s" }}
              className={`careers-hidden ${
                noteIn ? "careers-visible" : ""
              } mt-8 max-w-[500px] text-[12px] leading-6 text-gray-500`}
            >
              Role, benefits, compensation, location, and hiring-process
              details are published only after HR approval — sample roles
              below are illustrative placeholders.
            </p>

          </div>

          {/* Right Side */}

          <div
            ref={imageRef}
            style={{ animationDelay: ".1s" }}
            className={`careers-hidden-right ${
              imageIn ? "careers-visible-right" : ""
            } flex justify-center lg:justify-end`}
          >
            <Image
              src="/careers/hero-pic.png"
              alt="Woman collaborating during an online meeting"
              width={900}
              height={650}
              priority
              className="careers-image h-auto w-full max-w-[720px] rounded-3xl"
            />
          </div>

        </div>
      </section>
    </>
  );
}