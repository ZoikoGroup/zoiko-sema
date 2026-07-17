"use client";

import { useEffect, useRef, useState } from "react";
import {
  FiClock,
  FiRotateCcw,
  FiSlash,
} from "react-icons/fi";
import { MdLinkOff } from "react-icons/md";
import { BsHourglassTop } from "react-icons/bs";
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

type StatusCard = {
  icon: IconType;
  title: string;
  description: string;
  action: string;
  accent: string;
  iconBg: string;
  cardBg: string;
};

const STATUS_CARDS: StatusCard[] = [
  {
    icon: BsHourglassTop,
    title: "Host Not Started",
    description:
      "The session hasn't been activated. We'll ping you when it begins.",
    action: "Get Notified",
    accent: "#2563EB",
    iconBg: "#EEF4FF",
    cardBg: "#E6E8EA",
  },
  {
    icon: FiRotateCcw,
    title: "Wrong Passcode",
    description:
      "The provided entry code is incorrect. Check your calendar invite.",
    action: "Try Again",
    accent: "#DC2626",
    iconBg: "#FEECEC",
    cardBg: "#FFDAD6",
  },
  {
    icon: MdLinkOff,
    title: "Invalid Link",
    description:
      "This session has expired or the link is malformed.",
    action: "Contact Support",
    accent: "#6B7280",
    iconBg: "#F3F4F6",
    cardBg: "#E0E3E5",
  },
];

export default function MeetingStatusSection() {
  const { ref, inView } = useInView(0.15);

  return (
    <>
      <style>{`
        @keyframes msFadeUp{
          from{
            opacity:0;
            transform:translateY(28px);
          }
          to{
            opacity:1;
            transform:translateY(0);
          }
        }

        .ms-hidden{
          opacity:0;
          transform:translateY(28px);
        }

        .ms-visible{
          animation:msFadeUp .75s cubic-bezier(.22,1,.36,1) forwards;
        }

        .ms-card{
          transition:
            transform .35s ease,
            box-shadow .35s ease,
            border-color .35s ease;
        }

        .ms-card:hover{
          transform:translateY(-6px);
          box-shadow:0 18px 42px rgba(15,23,42,.10);
        }

        .ms-icon{
          transition:transform .3s ease;
        }

        .ms-card:hover .ms-icon{
          transform:scale(1.08);
        }

        .ms-arrow{
          transition:transform .25s ease;
        }

        .ms-card:hover .ms-arrow{
          transform:translateX(4px);
        }

        @media(prefers-reduced-motion:reduce){

          .ms-hidden,
          .ms-visible{
            opacity:1!important;
            transform:none!important;
            animation:none!important;
          }

          .ms-card:hover{
            transform:none;
          }

        }
      `}</style>

      <section className="bg-[#F8F8FD] py-10 dark:bg-[#0D0B24] sm:py-14">

        <div
          ref={ref}
          className={`mx-auto max-w-7xl px-6 sm:px-8 ${
            inView ? "ms-visible" : "ms-hidden"
          }`}
        >

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">

            {STATUS_CARDS.map((card, index) => {
              const Icon = card.icon;

              return (
                <div
                  key={card.title}
                  style={{
                    animationDelay: `${0.12 + index * 0.08}s`,
                    backgroundColor: card.cardBg,
                    borderLeft: `4px solid ${card.accent}`,
                  }}
                  className="ms-card flex h-full flex-col rounded-2xl border border-[#E7EAF5] p-7 dark:border-white/10 dark:bg-[#151233]"
                >
                  {/* Icon */}

                  <div
                    className="ms-icon mb-6 flex h-12 w-12 items-center justify-center rounded-xl"
                    style={{
                      backgroundColor: card.iconBg,
                    }}
                  >
                    <Icon
                      className="h-5 w-5"
                      style={{
                        color: card.accent,
                      }}
                    />
                  </div>

                  {/* Title */}

                  <h3 className="text-[20px] font-semibold text-[#172046] dark:text-white">
                    {card.title}
                  </h3>

                  {/* Description */}

                  <p
                    className="mt-4 flex-1 text-[15px] leading-7 dark:text-gray-400"
                    style={{
                      color:
                        card.accent === "#DC2626"
                          ? "#B42318"
                          : undefined,
                    }}
                  >
                    {card.description}
                  </p>

                  {/* CTA */}

                  <button
                    type="button"
                    className="mt-6 inline-flex items-center gap-2 text-sm font-semibold"
                    style={{
                      color: card.accent,
                    }}
                  >
                    {card.action}

                    {/* <FiArrowRight className="ms-arrow h-4 w-4" /> */}
                  </button>
                </div>
              );
            })}

          </div>

        </div>

      </section>

    </>

  );
}