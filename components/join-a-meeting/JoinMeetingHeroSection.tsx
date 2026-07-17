"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import {
  FiLink,
  FiKey,
  FiGrid,
  FiArrowRight,
} from "react-icons/fi";
import type { IconType } from "react-icons";

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

type ConnectionMethod = {
  icon: IconType;
  title: string;
  description: string;
};

const CONNECTION_METHODS: ConnectionMethod[] = [
  {
    icon: FiLink,
    title: "Direct Link",
    description: "Join via magic invitation link",
  },
  {
    icon: FiKey,
    title: "Meeting Code",
    description: "Enter the unique 9-digit session code",
  },
  {
    icon: FiGrid,
    title: "QR Access",
    description: "Scan physical room display codes",
  },
];

export default function JoinMeetingHeroSection() {
  const { ref: contentRef, inView: contentIn } = useInView(0.2);
  const { ref: imageRef, inView: imageIn } = useInView(0.15);

  return (
    <>
      <style>{`
        @keyframes jmFadeUp{
          from{
            opacity:0;
            transform:translateY(28px);
          }
          to{
            opacity:1;
            transform:translateY(0);
          }
        }

        @keyframes jmFadeRight{
          from{
            opacity:0;
            transform:translateX(36px);
          }
          to{
            opacity:1;
            transform:translateX(0);
          }
        }

        .jm-hidden{
          opacity:0;
          transform:translateY(28px);
        }

        .jm-visible{
          animation:jmFadeUp .75s cubic-bezier(.22,1,.36,1) forwards;
        }

        .jm-hidden-right{
          opacity:0;
          transform:translateX(36px);
        }

        .jm-visible-right{
          animation:jmFadeRight .8s cubic-bezier(.22,1,.36,1) forwards;
        }

        .jm-card{
          transition:
            transform .3s ease,
            background-color .3s ease,
            border-color .3s ease,
            box-shadow .3s ease;
        }

        .jm-card:hover{
          transform:translateX(6px);
          background:#D8D8E5;
          border-color:#FFFFFF;
          box-shadow:0 18px 35px rgba(0,0,0,.18);
        }

        .dark .jm-card:hover{
          background:#22253A;
          border-color:rgba(255,255,255,.15);
        }

        .jm-icon{
          transition:transform .3s ease;
        }

        .jm-card:hover .jm-icon{
          transform:scale(1.08);
        }

        .jm-arrow{
          transition:transform .25s ease;
        }

        .jm-card:hover .jm-arrow{
          transform:translateX(4px);
        }

        .jm-image{
          transition:
            transform .45s ease,
            box-shadow .45s ease;
        }

        .jm-image:hover{
          transform:translateY(-6px);
          box-shadow:0 34px 70px rgba(0,0,0,.45);
        }

        @media(prefers-reduced-motion:reduce){

          .jm-hidden,
          .jm-hidden-right,
          .jm-visible,
          .jm-visible-right{
            opacity:1!important;
            transform:none!important;
            animation:none!important;
          }

          .jm-card:hover,
          .jm-image:hover{
            transform:none;
          }

        }

      `}</style>

      <section className="overflow-hidden bg-[#0D0B24] py-10 sm:py-12 lg:py-14">

        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 px-6 sm:px-8 lg:grid-cols-[0.40fr_0.60fr]">

          {/* ===================================================== */}
          {/* LEFT CONTENT */}
          {/* ===================================================== */}

          <div
            ref={contentRef}
            className={`max-w-xl ${contentIn ? "jm-visible" : "jm-hidden"
              }`}
          >
            <h1 className="text-[clamp(34px,5vw,48px)] font-bold leading-[1.05] text-white">
              Secure Connection
            </h1>

            <p className="mt-4 max-w-md text-[16px] leading-8 text-gray-400">
              Sema Meet ensures enterprise-grade security for every
              connection. Choose your preferred method to join the
              session.
            </p>

            {/* Connection Methods */}

            <div className="mt-5 space-y-4">

              {CONNECTION_METHODS.map((item, index) => {

                const Icon = item.icon;

                return (

                  <button
                    key={item.title}
                    type="button"
                    style={{
                      animationDelay: `${0.15 + index * 0.08}s`,
                    }}
                    className={` flex w-full items-center justify-between rounded-2xl border border-transparent bg-[#D6D6E2] px-3 py-4 text-left dark:bg-[#171A2A]`}
                  >
                    <div className="flex items-center gap-4 md:gap-7">

                      <div className="jm-icon flex h-12 w-12 items-center justify-center rounded-xl bg-white dark:bg-[#252944]">

                        <Icon className="h-5 w-5 text-[#4F5BD5]" />

                      </div>

                      <div>

                        <h3 className="text-[16px] font-semibold text-[#172046] dark:text-white">
                          {item.title}
                        </h3>

                        <p className="mt-1 text-[13px] text-gray-600 dark:text-gray-400">
                          {item.description}
                        </p>

                      </div>

                    </div>
                  </button>

                );

              })}

            </div>

          </div>

          {/* ===================================================== */}
          {/* RIGHT IMAGE */}
          {/* ===================================================== */}

          <div
            ref={imageRef}
            className={`w-full ${imageIn ? "jm-visible-right" : "jm-hidden-right"}`}
            style={{ animationDelay: ".15s" }}
          >
            <div className="overflow-hidden rounded-2xl shadow-[0_25px_60px_rgba(0,0,0,0.45)]">
              <Image
                src="/join-a-meeting/join-meeting-hero1.png"
                alt="Secure meeting connection dashboard"
                width={1400}
                height={1200}
                priority
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="jm-image h-auto w-full"
              />
            </div>
          </div>

        </div>
      </section>
    </>
  );
}