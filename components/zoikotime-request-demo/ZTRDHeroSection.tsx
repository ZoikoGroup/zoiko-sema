"use client";

import { useInView } from "./useInView";

// TODO: replace with your actual hero image path, e.g. "/Images/zoikotime-request-demo-hero.webp"
const HERO_IMAGE_SRC = "/Images/zoikotime-request-demo-hero.webp";

export default function ZTRDHeroSection() {
  const { ref: copyRef, inView: copyIn } = useInView(0.2);
  const { ref: imgRef, inView: imgIn } = useInView(0.1);

  return (
    <>
      <style>{`
        @keyframes ztrdFadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes ztrdFadeIn {
          from { opacity: 0; transform: translateY(32px) scale(.97); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }
        .ztrd-hidden  { opacity: 0; transform: translateY(24px); }
        .ztrd-visible { animation: ztrdFadeUp .55s cubic-bezier(.22,1,.36,1) forwards; }

        .ztrd-img-hidden  { opacity: 0; transform: translateY(32px) scale(.97); }
        .ztrd-img-visible { animation: ztrdFadeIn .7s cubic-bezier(.22,1,.36,1) forwards; }

        .ztrd-btn-primary {
          background: #4F63F0;
          transition: transform .2s ease, box-shadow .2s ease, background .2s ease;
        }
        .ztrd-btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 26px -10px rgba(79,99,240,0.55);
          background: #3E51DE;
        }
        .ztrd-btn-secondary {
          transition: transform .2s ease, background .2s ease;
        }
        .ztrd-btn-secondary:hover {
          transform: translateY(-2px);
          background: #f2f2f2;
        }

        .ztrd-hero-img-wrap { transition: transform .4s cubic-bezier(.22,1,.36,1); }
        .ztrd-hero-img-wrap:hover { transform: translateY(-6px); }
        .ztrd-hero-img-wrap img { transition: box-shadow .3s ease; }
        .ztrd-hero-img-wrap:hover img { box-shadow: 0 30px 60px -20px rgba(0,0,0,0.55); }

        @media (prefers-reduced-motion: reduce) {
          .ztrd-hidden, .ztrd-img-hidden { opacity: 1 !important; transform: none !important; }
          .ztrd-visible, .ztrd-img-visible { animation: none !important; }
        }
      `}</style>

      <section className="bg-[#0B1330] px-6 py-16 sm:px-10 lg:px-16">
        <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 lg:grid-cols-2">
          <div ref={copyRef} className={`ztrd-hidden ${copyIn ? "ztrd-visible" : ""}`}>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[2px] text-[#7C8CF8]">
              ZoikoTime
            </p>
            <h1 className="text-4xl font-bold leading-tight text-white sm:text-[42px]">
              Request a
              <br />
              ZoikoTime demo
            </h1>
            <p className="mt-5 max-w-md text-sm leading-relaxed text-[#AEB7CC]">
              See how Zoiko Sema and ZoikoTime connect meetings, verified
              collaboration, compliance-ready records, and productivity
              intelligence into one governed workflow.
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-3">
              <a
                href="#request-demo"
                className="ztrd-btn-primary rounded-xl px-6 py-3 text-sm font-semibold text-white"
              >
                Request Demo →
              </a>
              <a
                href="/contact"
                className="ztrd-btn-secondary rounded-xl bg-white px-6 py-3 text-sm font-semibold text-[#0B1330]"
              >
                Talk to Sales
              </a>
            </div>
          </div>

          <div
            ref={imgRef}
            className={`ztrd-img-hidden ${imgIn ? "ztrd-img-visible" : ""} ztrd-hero-img-wrap overflow-hidden rounded-2xl`}
          >
            <img
              src={HERO_IMAGE_SRC}
              alt="Sema and ZoikoTime connected meeting and compliance workflow"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>
    </>
  );
}