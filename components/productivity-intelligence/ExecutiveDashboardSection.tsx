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

export default function ExecutiveDashboardSection() {
  const { ref: badgeRef, inView: badgeIn } = useInView(0.3);
  const { ref: titleRef, inView: titleIn } = useInView(0.25);
  const { ref: subRef, inView: subIn } = useInView(0.25);
  const { ref: imageRef, inView: imageIn } = useInView(0.15);

  return (
    <>
      <style>{`
        @keyframes edFadeUp{
          from{
            opacity:0;
            transform:translateY(30px);
          }
          to{
            opacity:1;
            transform:translateY(0);
          }
        }

        @keyframes edFadeRight{
          from{
            opacity:0;
            transform:translateX(40px);
          }
          to{
            opacity:1;
            transform:translateX(0);
          }
        }

        @keyframes dashboardFloat{
          0%,100%{
            transform:translateY(0px);
          }
          50%{
            transform:translateY(-8px);
          }
        }

        .ed-hidden{
          opacity:0;
          transform:translateY(30px);
        }

        .ed-visible{
          animation:edFadeUp .75s cubic-bezier(.22,1,.36,1) forwards;
        }

        .ed-hidden-x{
          opacity:0;
          transform:translateX(40px);
        }

        .ed-visible-x{
          animation:edFadeRight .8s cubic-bezier(.22,1,.36,1) forwards;
        }

        .dashboard-image{
          animation:dashboardFloat 6s ease-in-out infinite;
          transition:
            transform .45s ease,
            box-shadow .45s ease;
        }

        .dashboard-image:hover{
          transform:translateY(-8px);
          box-shadow:0 35px 80px rgba(0,0,0,.35);
        }

        @media(prefers-reduced-motion:reduce){
          .ed-hidden,
          .ed-hidden-x{
            opacity:1;
            transform:none;
          }

          .ed-visible,
          .ed-visible-x{
            animation:none;
          }

          .dashboard-image{
            animation:none;
          }
        }
      `}</style>

      <section className="bg-[#F8F8FD] py-20 dark:bg-[#0D0B24] sm:py-24">
        <div className="mx-auto max-w-7xl px-6 sm:px-8">

          {/* Header */}

          <div className="mx-auto max-w-3xl text-center">

            <p
              ref={badgeRef}
              className={`ed-hidden ${
                badgeIn ? "ed-visible" : ""
              } mb-3 text-[11px] font-bold uppercase tracking-[0.22em] text-[#4F5BD5] dark:text-[#7C86F0]`}
            >
              Dashboard Preview
            </p>

            <h2
              ref={titleRef}
              style={{ animationDelay: ".08s" }}
              className={`ed-hidden ${
                titleIn ? "ed-visible" : ""
              } text-[clamp(30px,4vw,46px)] font-bold leading-tight text-[#172046] dark:text-white`}
            >
              Executive insight,
              aggregate by default
            </h2>

            <p
              ref={subRef}
              style={{ animationDelay: ".16s" }}
              className={`ed-hidden ${
                subIn ? "ed-visible" : ""
              } mx-auto mt-5 max-w-2xl text-[15px] leading-7 text-gray-500 dark:text-gray-400`}
            >
              Filter the sample view to see practical leadership insight
              patterns. Filters indicate role-based visibility; data is
              illustrative.
            </p>

          </div>

          {/* Dashboard */}

          <div
            ref={imageRef}
            style={{ animationDelay: ".2s" }}
            className={`ed-hidden-x ${
              imageIn ? "ed-visible-x" : ""
            } mt-14 flex justify-center`}
          >
            <div className="w-full max-w-6xl">
              <Image
                src="/productivity-intelligence/dashboard.png"
                alt="Executive productivity dashboard preview"
                width={1600}
                height={980}
                priority={false}
                className="dashboard-image h-auto w-full rounded-2xl"
              />
            </div>
          </div>

        </div>
      </section>
    </>
  );
}