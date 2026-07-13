"use client";

import { useInView } from "./useInView";

// TODO: replace with your actual hero image path, e.g. "/Images/verified-collaboration-hero.webp"
const HERO_IMAGE_SRC = "/Images/verified-collaboration-hero.webp";

export default function VerifiedCollaborationHeroSection() {
  const { ref: copyRef, inView: copyIn } = useInView(0.2);
  const { ref: imgRef, inView: imgIn } = useInView(0.1);

  return (
    <>
      <style>{`
        @keyframes vcFadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes vcFadeIn {
          from { opacity: 0; transform: translateY(32px) scale(.97); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }
        .vc-hidden  { opacity: 0; transform: translateY(24px); }
        .vc-visible { animation: vcFadeUp .55s cubic-bezier(.22,1,.36,1) forwards; }

        .vc-img-hidden  { opacity: 0; transform: translateY(32px) scale(.97); }
        .vc-img-visible { animation: vcFadeIn .7s cubic-bezier(.22,1,.36,1) forwards; }

        .vc-btn-primary {
          background: #4F63F0;
          transition: transform .2s ease, box-shadow .2s ease, background .2s ease;
        }
        .vc-btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 26px -10px rgba(79,99,240,0.55);
          background: #3E51DE;
        }
        .vc-btn-secondary {
          transition: transform .2s ease, background .2s ease;
        }
        .vc-btn-secondary:hover {
          transform: translateY(-2px);
          background: #f2f2f2;
        }

        .vc-hero-img-wrap { transition: transform .4s cubic-bezier(.22,1,.36,1); }
        .vc-hero-img-wrap:hover { transform: translateY(-6px); }
        .vc-hero-img-wrap img { transition: box-shadow .3s ease; }
        .vc-hero-img-wrap:hover img { box-shadow: 0 30px 60px -20px rgba(0,0,0,0.55); }

        @media (prefers-reduced-motion: reduce) {
          .vc-hidden, .vc-img-hidden { opacity: 1 !important; transform: none !important; }
          .vc-visible, .vc-img-visible { animation: none !important; }
        }
      `}</style>

      <section className="bg-[#0B1330] px-6 py-16 sm:px-10 lg:px-16">
        <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 lg:grid-cols-2">
          <div ref={copyRef} className={`vc-hidden ${copyIn ? "vc-visible" : ""}`}>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[2px] text-[#7C8CF8]">
              ZoikoTime
            </p>
            <h1 className="text-4xl font-bold leading-tight text-white sm:text-[42px]">
              Verified Collaboration
            </h1>
            <p className="mt-5 max-w-md text-sm leading-relaxed text-[#AEB7CC]">
              Turn meetings, messages, decisions, and follow-ups into
              source-linked, human-reviewed collaboration records that can
              connect to ZoikoTime work context.
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-3">
              <button className="vc-btn-primary rounded-xl px-6 py-3 text-sm font-semibold text-white">
                Request Demo
              </button>
              <button className="vc-btn-secondary rounded-xl bg-white px-6 py-3 text-sm font-semibold text-[#0B1330]">
                See How It Works
              </button>
            </div>
          </div>

          <div
            ref={imgRef}
            className={`vc-img-hidden ${imgIn ? "vc-img-visible" : ""} vc-hero-img-wrap overflow-hidden rounded-2xl`}
          >
            <img
              src={HERO_IMAGE_SRC}
              alt="Verified collaboration record dashboard"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>
    </>
  );
}
