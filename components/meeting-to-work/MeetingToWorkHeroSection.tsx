"use client";

import { useInView } from "./useInView";

// TODO: replace with your actual hero image path, e.g. "/Images/meeting-to-work-hero.webp"
const HERO_IMAGE_SRC = "/Images/meeting-to-work-hero.webp";

export default function MeetingToWorkHeroSection() {
  const { ref: copyRef, inView: copyIn } = useInView(0.2);
  const { ref: imgRef, inView: imgIn } = useInView(0.1);

  return (
    <>
      <style>{`
        @keyframes mtwFadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes mtwFadeIn {
          from { opacity: 0; transform: translateY(32px) scale(.97); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }
        .mtw-hidden  { opacity: 0; transform: translateY(24px); }
        .mtw-visible { animation: mtwFadeUp .55s cubic-bezier(.22,1,.36,1) forwards; }

        .mtw-img-hidden  { opacity: 0; transform: translateY(32px) scale(.97); }
        .mtw-img-visible { animation: mtwFadeIn .7s cubic-bezier(.22,1,.36,1) forwards; }

        .mtw-btn-primary {
          background: #4F63F0;
          transition: transform .2s ease, box-shadow .2s ease, background .2s ease;
        }
        .mtw-btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 26px -10px rgba(79,99,240,0.55);
          background: #3E51DE;
        }
        .mtw-btn-secondary {
          transition: transform .2s ease, background .2s ease;
        }
        .mtw-btn-secondary:hover {
          transform: translateY(-2px);
          background: #f2f2f2;
        }

        .mtw-hero-img-wrap { transition: transform .4s cubic-bezier(.22,1,.36,1); }
        .mtw-hero-img-wrap:hover { transform: translateY(-6px); }
        .mtw-hero-img-wrap img { transition: box-shadow .3s ease; }
        .mtw-hero-img-wrap:hover img { box-shadow: 0 30px 60px -20px rgba(0,0,0,0.55); }

        @media (prefers-reduced-motion: reduce) {
          .mtw-hidden, .mtw-img-hidden { opacity: 1 !important; transform: none !important; }
          .mtw-visible, .mtw-img-visible { animation: none !important; }
        }
      `}</style>

      <section className="bg-[#0B1330] px-6 py-16 sm:px-10 lg:px-16">
        <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 lg:grid-cols-2">
          <div ref={copyRef} className={`mtw-hidden ${copyIn ? "mtw-visible" : ""}`}>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[2px] text-[#7C8CF8]">
              ZoikoTime
            </p>
            <h1 className="text-4xl font-bold leading-tight text-white sm:text-[42px]">
              Turn Every Conversation into a Productive Workflow.
            </h1>
            <p className="mt-5 max-w-md text-sm leading-relaxed text-[#AEB7CC]">
              Meeting-to-Work seamlessly automates the transition from
              dialogue to delivery. Transcribe, extract, and sync tasks
              effortlessly.
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-3">
              <button className="mtw-btn-primary rounded-xl px-6 py-3 text-sm font-semibold text-white">
                Start Free Trial
              </button>
              <button className="mtw-btn-secondary rounded-xl bg-white px-6 py-3 text-sm font-semibold text-[#0B1330]">
                View Demo
              </button>
            </div>
          </div>

          <div
            ref={imgRef}
            className={`mtw-img-hidden ${imgIn ? "mtw-img-visible" : ""} mtw-hero-img-wrap overflow-hidden rounded-2xl`}
          >
            <img
              src={HERO_IMAGE_SRC}
              alt="Meeting conversation automatically becoming a tracked workflow"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>
    </>
  );
}
