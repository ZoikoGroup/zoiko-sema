"use client";

import React, { useEffect, useRef, useState } from "react";
import { PenLine, CheckSquare, FileText } from "lucide-react";

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

const features = [
  {
    icon: <PenLine size={16} />,
    title: "Editable recap",
    desc: "Overview, key points, decisions, open questions, and risks — all editable.",
  },
  {
    icon: <CheckSquare size={16} />,
    title: "Action extraction",
    desc: "Accept, edit, reject, or assign each suggested action with owner and due date.",
  },
  {
    icon: <FileText size={16} />,
    title: "Share destinations",
    desc: "Participants, workspace, channel, email, or CRM — blocked options shown clearly.",
  },
];

export default function MeetingSummaryReviewSection() {
  const { ref: imgRef, inView: imgIn } = useInView(0.15);
  const { ref: rightRef, inView: rightIn } = useInView(0.2);

  return (
    <>
      <style>{`
        @keyframes msrFadeUp {
          from { opacity:0; transform:translateY(32px); }
          to   { opacity:1; transform:translateY(0); }
        }
        @keyframes msrFadeLeft {
          from { opacity:0; transform:translateX(-28px) scale(0.98); }
          to   { opacity:1; transform:translateX(0) scale(1); }
        }
        .msr-hidden { opacity:0; transform:translateY(32px); }
        .msr-visible { animation: msrFadeUp .6s cubic-bezier(.22,1,.36,1) forwards; }

        .msr-img-hidden { opacity:0; transform:translateX(-28px) scale(0.98); }
        .msr-img-visible { animation: msrFadeLeft .7s cubic-bezier(.22,1,.36,1) forwards; }

        .msr-feature { opacity:0; transform:translateY(14px); }
        .msr-feature.active {
          animation: msrFadeUp .5s cubic-bezier(.22,1,.36,1) forwards;
        }

        .msr-feature:hover .msr-icon {
          transform: scale(1.08);
          background-color: #E4E2FB;
        }
        .msr-icon { transition: transform .2s ease, background-color .2s ease; }

        @media (prefers-reduced-motion: reduce) {
          .msr-hidden, .msr-img-hidden, .msr-feature { opacity:1!important; transform:none!important; animation:none!important; }
        }
      `}</style>

      <section
        aria-label="Human-in-the-loop summary review and sharing"
        className="w-full py-20 md:py-28"
        style={{ background: "#F4F5FC" }}
      >
        <div className="mx-auto w-full max-w-7xl px-6 md:px-10 lg:px-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-14 items-center">

            {/* LEFT — Image */}
            <div
              ref={imgRef}
              className={`msr-img-hidden ${imgIn ? "msr-img-visible" : ""} order-2 md:order-1`}
            >
              <div className="relative rounded-2xl overflow-hidden">
                {/* Replace src with the actual laptop/dashboard photo asset */}
                <img
                  src="/Images/MeetingSummaryReviewSection.webp"
                  alt="Laptop displaying the Zoiko Sema human-in-the-loop review screen with editable recap, human review approval, and share controls"
                  className="w-full h-auto object-cover rounded-2xl"
                />
              </div>
            </div>

            {/* RIGHT — Copy */}
            <div
              ref={rightRef}
              className={`msr-hidden ${rightIn ? "msr-visible" : ""} order-1 md:order-2`}
            >
              <p className="text-[11px] font-semibold uppercase tracking-[0.16em] mb-4" style={{ color: "#4F46E5" }}>
                Summary Review &amp; Sharing
              </p>

              <h2 className="text-[clamp(26px,3.2vw,36px)] font-bold leading-[1.18] tracking-tight text-gray-900 mb-5 max-w-[440px]">
                Human-in-the-loop before anything is shared
              </h2>

              <p className="text-[15px] leading-[1.75] text-gray-500 max-w-[460px] mb-9">
                Zoiko Sema never bypasses review. You edit the recap, accept or reject
                suggested actions, confirm decisions, and choose where it goes — every
                approval is recorded.
              </p>

              <div className="flex flex-col gap-6">
                {features.map((f, i) => (
                  <div
                    key={i}
                    className={`msr-feature ${rightIn ? "active" : ""} flex items-start gap-4`}
                    style={{ animationDelay: `${0.15 + i * 0.12}s` }}
                  >
                    <span
                      className="msr-icon flex-shrink-0 w-9 h-9 rounded-lg flex items-center justify-center"
                      style={{ backgroundColor: "#EEECFB", color: "#4F46E5" }}
                    >
                      {f.icon}
                    </span>
                    <div>
                      <h3 className="text-[14.5px] font-semibold text-gray-900 mb-1">
                        {f.title}
                      </h3>
                      <p className="text-[11px] leading-[1.6] text-gray-500 max-w-[400px]">
                        {f.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}