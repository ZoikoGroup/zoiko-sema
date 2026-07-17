"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { FiCircle } from "react-icons/fi";

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

export default function DevicePreviewSection() {
  const { ref: leftRef, inView: leftIn } = useInView(0.15);
  const { ref: rightRef, inView: rightIn } = useInView(0.15);

  return (
    <>
      <style>{`
        @keyframes dpFadeLeft{
          from{
            opacity:0;
            transform:translateX(-40px);
          }
          to{
            opacity:1;
            transform:translateX(0);
          }
        }

        @keyframes dpFadeRight{
          from{
            opacity:0;
            transform:translateX(40px);
          }
          to{
            opacity:1;
            transform:translateX(0);
          }
        }

        .dp-hidden-left{
          opacity:0;
          transform:translateX(-40px);
        }

        .dp-hidden-right{
          opacity:0;
          transform:translateX(40px);
        }

        .dp-visible-left{
          animation:dpFadeLeft .8s cubic-bezier(.22,1,.36,1) forwards;
        }

        .dp-visible-right{
          animation:dpFadeRight .8s cubic-bezier(.22,1,.36,1) forwards;
        }

        .dp-card{
          transition:
            transform .4s ease,
            box-shadow .4s ease;
        }

        .dp-card:hover{
          transform:translateY(-6px);
          box-shadow:0 28px 60px rgba(15,23,42,.12);
        }

        .dp-image{
          transition:transform .45s ease;
        }

        .dp-card:hover .dp-image{
          transform:scale(1.02);
        }

        @media(prefers-reduced-motion:reduce){

          .dp-hidden-left,
          .dp-hidden-right,
          .dp-visible-left,
          .dp-visible-right{
            opacity:1!important;
            transform:none!important;
            animation:none!important;
          }

          .dp-card:hover,
          .dp-card:hover .dp-image{
            transform:none!important;
          }

        }

      `}</style>

      <section className="bg-[#F8F8FD] py-10 dark:bg-[#0D0B24] sm:py-14">

        <div className="mx-auto max-w-6xl px-6 sm:px-8">

          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">

            {/* ===================================================== */}
            {/* DEVICE PREVIEW */}
            {/* ===================================================== */}

            <div
              ref={leftRef}
              className={`${
                leftIn ? "dp-visible-left" : "dp-hidden-left"
              }`}
            >
              <div className="mb-6 flex items-center justify-between">

                <h2 className="text-[28px] font-bold text-[#172046] dark:text-white">
                  Device Preview
                </h2>

              </div>
              <div className="dp-card overflow-hidden rounded-[24px] border border-[#E6E8F5] bg-white shadow-[0_20px_60px_rgba(15,23,42,0.08)] dark:border-white/10 dark:bg-[#151233]">

                <Image
                  src="/join-a-meeting/device-preview.png"
                  alt="Device Preview"
                  width={1200}
                  height={900}
                  priority
                  className="dp-image h-auto w-full object-cover"
                />

              </div>

            </div>

            {/* ===================================================== */}
            {/* WAITING ROOM */}
            {/* ===================================================== */}

            <div
              ref={rightRef}
              className={`${
                rightIn ? "dp-visible-right" : "dp-hidden-right"
              }`}
            >
              <div className="mb-6 flex items-center justify-between">

                <div className="flex items-center gap-3">

                  <span className="flex items-center gap-2 text-[14px] font-medium text-[#172046] dark:text-white">

                    <FiCircle className="h-2.5 w-2.5 fill-green-500 text-green-500" />

                    Live Feed Active

                  </span>

                </div>

                <h2 className="text-[28px] font-bold text-[#172046] dark:text-white">
                  Waiting Room
                </h2>

              </div>

              <div className="dp-card overflow-hidden rounded-[24px] border border-[#E6E8F5] bg-white shadow-[0_20px_60px_rgba(15,23,42,0.08)] dark:border-white/10 dark:bg-[#151233]">

                <Image
                  src="/join-a-meeting/waiting-room.png"
                  alt="Waiting Room"
                  width={1200}
                  height={900}
                  priority
                  className="dp-image h-auto w-full object-cover"
                />

              </div>

            </div>

          </div>

        </div>

      </section>

    </>

  );

}