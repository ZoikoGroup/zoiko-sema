"use client";

import { useInView } from "./useInView";

// TODO: replace with your actual hero image path, e.g. "/Images/product-update-hero.webp"
const HERO_IMAGE_SRC = "/Images/product-update-hero.png";

export default function ProductUpdateHeroSection() {
  const { ref: copyRef, inView: copyIn } = useInView(0.2);
  const { ref: imgRef, inView: imgIn } = useInView(0.1);

  return (
    <>
      <style>{`
        @keyframes puFadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes puFadeIn {
          from { opacity: 0; transform: translateY(32px) scale(.97); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }
        .pu-hidden  { opacity: 0; transform: translateY(24px); }
        .pu-visible { animation: puFadeUp .55s cubic-bezier(.22,1,.36,1) forwards; }

        .pu-img-hidden  { opacity: 0; transform: translateY(32px) scale(.97); }
        .pu-img-visible { animation: puFadeIn .7s cubic-bezier(.22,1,.36,1) forwards; }

        .pu-btn-primary {
          background: #4F63F0;
          transition: transform .2s ease, box-shadow .2s ease, background .2s ease;
        }
        .pu-btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 26px -10px rgba(79,99,240,0.55);
          background: #3E51DE;
        }
        .pu-btn-secondary {
          transition: transform .2s ease, background .2s ease;
        }
        .pu-btn-secondary:hover {
          transform: translateY(-2px);
          background: #f2f2f2;
        }

        .pu-hero-img-wrap { transition: transform .4s cubic-bezier(.22,1,.36,1); }
        .pu-hero-img-wrap:hover { transform: translateY(-6px); }
        .pu-hero-img-wrap img { transition: box-shadow .3s ease; }
        .pu-hero-img-wrap:hover img { box-shadow: 0 30px 60px -20px rgba(0,0,0,0.55); }

        @media (prefers-reduced-motion: reduce) {
          .pu-hidden, .pu-img-hidden { opacity: 1 !important; transform: none !important; }
          .pu-visible, .pu-img-visible { animation: none !important; }
        }
      `}</style>

      <section className="bg-[#0B1330] px-6 py-16 sm:px-10 lg:px-16">
        <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 lg:grid-cols-2">
          <div ref={copyRef} className={`pu-hidden ${copyIn ? "pu-visible" : ""}`}>
            <span className="mb-5 inline-block rounded-full border border-white/15 bg-white/5 px-3 py-1 text-[10.5px] font-bold uppercase tracking-[1.5px] text-[#8FA3FF]">
              Product Update
            </span>
            <h1 className="text-4xl font-bold leading-tight text-white sm:text-[42px]">
              Know what changed, what improved, and what teams can use next.
            </h1>
            <p className="mt-5 max-w-md text-sm leading-relaxed text-[#AEB7CC]">
              Stay ahead of the curve with our comprehensive release hub.
              Track new features, critical fixes, and security enhancements
              across the entire Zoiko Sema ecosystem.
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-3">
              <button className="pu-btn-primary rounded-xl px-6 py-3 text-sm font-semibold text-white">
                Explore Releases
              </button>
              <button className="pu-btn-secondary rounded-xl bg-white px-6 py-3 text-sm font-semibold text-[#0B1330]">
                API Docs
              </button>
            </div>
          </div>

          <div
            ref={imgRef}
            className={`pu-img-hidden ${imgIn ? "pu-img-visible" : ""} pu-hero-img-wrap overflow-hidden rounded-2xl`}
          >
            
            <img
              src={HERO_IMAGE_SRC}
              alt="Release hub dashboard showing product updates and analytics"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>
    </>
  );
}
