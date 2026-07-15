"use client";

import { useRouter } from "next/navigation";
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

// Order matches the screenshot's row-wise 2-column fill:
// row1: Individuals | Small teams
// row2: Operations teams | Leadership teams
// row3: Sales & customer teams | Enterprise organizations
const useCases = [
  {
    title: "Individuals",
    desc: "Make fast calls from messages, contacts, and calendars without setting up a formal meeting.",
  },
  {
    title: "Small teams",
    desc: "Resolve project questions quickly and share call outcomes back into team spaces.",
  },
  {
    title: "Operations teams",
    desc: "Coordinate urgent decisions and attach summaries to operational spaces.",
  },
  {
    title: "Leadership teams",
    desc: "Use governed call summaries, controlled retention, and restricted workspaces for sensitive conversations.",
  },
  {
    title: "Sales & customer teams",
    desc: "Discuss customer needs, capture next steps, and keep voice context connected to customer workspaces.",
  },
  {
    title: "Enterprise organizations",
    desc: "Apply identity, policy, retention, AI governance, auditability, and ZoikoTime integration where required.",
  },
];

export default function AudioCallsUseCasesSection() {
  const { ref: leftRef, inView: leftIn } = useInView(0.15);
  const { ref: imgRef, inView: imgIn } = useInView(0.1);
  const router = useRouter();

  return (
    <>
      <style>{`
        @keyframes ucFadeUp {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes ucFadeUpImg {
          from { opacity: 0; transform: translateY(32px) scale(0.94); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }
        .uc-hidden  { opacity: 0; transform: translateY(28px); }
        .uc-visible { animation: ucFadeUp .65s cubic-bezier(.22,1,.36,1) forwards; }

        .uc-item { opacity: 0; transform: translateY(18px); }
        .uc-left.uc-visible .uc-item {
          animation: ucFadeUp .5s cubic-bezier(.22,1,.36,1) forwards;
        }

        .uc-item-inner {
          transition: transform .3s ease;
        }
        .uc-item-inner:hover {
          transform: translateX(4px);
        }
        .uc-item-inner:hover .uc-title {
          color: #4F46E5;
        }
        .uc-title {
          transition: color .3s ease;
        }

        .uc-img-hidden { opacity: 0; transform: translateY(32px) scale(0.94); }
        .uc-img-visible { animation: ucFadeUpImg .8s cubic-bezier(.22,1,.36,1) forwards; }
        .uc-img {
          transition: transform .5s cubic-bezier(.22,1,.36,1);
        }
        .uc-img:hover {
          transform: translateY(-8px) rotate(-1.5deg) scale(1.03);
        }

        @media (prefers-reduced-motion: reduce) {
          .uc-hidden, .uc-visible, .uc-item,
          .uc-img-hidden, .uc-img-visible { opacity: 1 !important; transform: none !important; animation: none !important; }
          .uc-item-inner:hover, .uc-img:hover { transform: none !important; }
        }
      `}</style>

      <section
        aria-label="Use cases"
        className="w-full bg-white py-16 sm:py-20 md:py-24"
      >
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 md:px-10 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-10 lg:gap-14 items-center">
            {/* LEFT — badge, heading, 2-col plain list */}
            <div ref={leftRef} className={`uc-left uc-hidden ${leftIn ? "uc-visible" : ""}`}>
              <p
                className="uc-item text-[12px] font-bold tracking-[0.1em] uppercase mb-3"
                style={{ color: "#4F46E5" }}
              >
                Use Cases
              </p>

              <h2
                className="uc-item text-[clamp(24px,4vw,34px)] font-extrabold leading-[1.2] tracking-tight text-gray-900 mb-10"
                style={{ animationDelay: "0.06s" }}
              >
                Built for how voice actually gets used.
              </h2>

              <div className="grid grid-cols-1  sm:grid-cols-2 gap-x-10 gap-y-7">
                {useCases.map((u, i) => (
                  <div
                    key={i}
                    className="uc-item -mr-10"
                    style={{ animationDelay: `${0.12 + i * 0.07}s` }}
                  >
                    <div className="uc-item-inner cursor-pointer">
                      <h3 className="uc-title text-[12px] sm:text-[12px] font-bold text-gray-900 mb-1.5">
                        {u.title}
                      </h3>
                      <p className="text-[13px] sm:text-[13.5px] leading-[1.7] text-gray-500">
                        {u.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT — single illustration image */}
            <div
              ref={imgRef}
              className={`uc-img-hidden ${imgIn ? "uc-img-visible" : ""} flex justify-center  lg:justify-end`}
            >
              <img
                src="/Images/AudioCallsUseCasesIllustration.png" // 👈 add image URL here
                alt="Illustration of a phone handset and a chat bubble representing voice calls"
                className="uc-img w-full max-w-[380px] h-auto"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}