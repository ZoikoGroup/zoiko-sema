"use client";

import React, { useEffect, useRef, useState } from "react";

function useInView(threshold = 0.1) {
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

const panels = [
  {
    tag: "MANAGER VIEW",
    title: "A calm daily overview of your teams",
    desc: "Mapped ZoikoTime context, open handoffs, urgent messages, upcoming meetings, and unresolved tasks — with policy status in view.",
    image: "/Images/ZoikoCustomersExperienceSection1.png", // 👈 add manager view image URL here
    alt: "Manager dashboard showing mapped ZoikoTime context and team overview",
    imageWidth: "100%",   // 👈 set this panel's image width independently
    imageHeight: "320px", // 👈 set this panel's image height independently
  },
  {
    tag: "TEAM MEMBER VIEW",
    title: "Everything they need, nothing they don't",
    desc: "Channel updates, direct messages, meeting reminders, and task ownership — with a clear privacy notice on every workspace.",
    image: "/Images/ZoikoCustomersExperienceSection.png", // 👈 add team member view image URL here
    alt: "Team member view showing channel updates and task ownership",
    imageWidth: "100%",   // 👈 independent from the panel above
    imageHeight: "320px", // 👈 independent from the panel above
  },
];

export default function ZoikoCustomersExperienceSection() {
  const { ref: headRef, inView: headIn } = useInView(0.25);
  const { ref: panelsRef, inView: panelsIn } = useInView(0.08);

  return (
    <>
      <style>{`
        @keyframes ztceFadeUp {
          from { opacity:0; transform:translateY(28px); }
          to   { opacity:1; transform:translateY(0); }
        }
        .ztce-hidden  { opacity:0; transform:translateY(28px); }
        .ztce-visible { animation: ztceFadeUp .6s cubic-bezier(.22,1,.36,1) forwards; }

        .ztce-panel { opacity:0; transform:translateY(24px); }
        .ztce-panel.active { animation: ztceFadeUp .55s cubic-bezier(.22,1,.36,1) forwards; }

        .ztce-panel {
          transition: box-shadow .3s ease, transform .3s ease;
        }
        .ztce-panel:hover {
          transform: translateY(-4px);
          box-shadow: 0 16px 34px rgba(15,23,42,0.10);
        }

        .ztce-img-wrap img {
          transition: transform .5s cubic-bezier(.22,1,.36,1);
        }
        .ztce-panel:hover .ztce-img-wrap img {
          transform: scale(1.03);
        }

        @media (prefers-reduced-motion: reduce) {
          .ztce-hidden, .ztce-panel { opacity:1!important; transform:none!important; animation:none!important; }
          .ztce-visible { animation:none!important; opacity:1!important; }
          .ztce-panel:hover, .ztce-panel:hover .ztce-img-wrap img { transform:none!important; }
        }
      `}</style>

      <section
        aria-label="Manager and Employee Experience"
        className="w-full py-20 md:py-24"
        style={{ background: "#EEF1FC" }}
      >
        <div className="mx-auto w-full max-w-7xl px-6 md:px-10 lg:px-16">

          {/* Heading */}
          <div
            ref={headRef}
            className={`ztce-hidden ${headIn ? "ztce-visible" : ""} text-center mb-14`}
          >
            <p
              className="text-[11px] font-semibold uppercase tracking-[0.14em] mb-4"
              style={{ color: "#4F46E5" }}
            >
              Manager & Employee Experience
            </p>
            <h2 className="text-[clamp(26px,3.8vw,38px)] font-extrabold leading-[1.15] tracking-tight text-gray-900 mb-5 max-w-[700px] mx-auto">
              Value for the buyer and the everyday user
            </h2>
            <p className="mx-auto max-w-[640px] text-[15px] leading-[1.75] text-gray-500">
              A calm manager dashboard and a simple team-member view — built
              around communication needs, handoffs, and clear privacy
              labels.
            </p>
          </div>

          {/* Panels — left card wider (manager view), right card narrower (team member view) */}
          <div
            ref={panelsRef}
            className="grid grid-cols-1 lg:grid-cols-[1.35fr_1fr] gap-6 items-start"
          >
            {panels.map((panel, i) => (
              <div
                key={panel.tag}
                className={`ztce-panel ${panelsIn ? "active" : ""} rounded-2xl bg-white p-6`}
                style={{ animationDelay: `${i * 110}ms` }}
              >
                <p
                  className="text-[11px] font-semibold uppercase tracking-[0.12em] mb-3"
                  style={{ color: "#4F46E5" }}
                >
                  {panel.tag}
                </p>
                <h3 className="text-[19px] font-bold text-gray-900 mb-2.5 leading-snug">
                  {panel.title}
                </h3>
                <p className="text-[13.5px] leading-relaxed text-gray-500 mb-6">
                  {panel.desc}
                </p>
                {/* image sits directly under the text, no forced gap.
                    width/height come from this panel's own object only —
                    editing one panel no longer affects the other. */}
                <div className="ztce-img-wrap rounded-xl overflow-hidden">
                  <img
                    src={panel.image}
                    alt={panel.alt}
                    style={{
                      width: panel.imageWidth,
                      height: panel.imageHeight,
                      
                    }}
                    className="rounded-xl"
                  />
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
}