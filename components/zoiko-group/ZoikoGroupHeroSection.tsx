"use client";

import { useInView } from "./useInView";

// TODO: replace with your actual hero image path, e.g. "/zoiko-group/hero.png"
const HERO_IMAGE_SRC = "/Images/zoiko-group-hero.webp";

export default function ZoikoGroupHeroSection() {
  const { ref: copyRef, inView: copyIn } = useInView(0.2);
  const { ref: imgRef, inView: imgIn } = useInView(0.1);

  return (
    <>
      <style>{`
        @keyframes zgFadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes zgFadeIn {
          from { opacity: 0; transform: translateY(32px) scale(.97); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }
        .zg-hidden  { opacity: 0; transform: translateY(24px); }
        .zg-visible { animation: zgFadeUp .55s cubic-bezier(.22,1,.36,1) forwards; }

        .zg-img-hidden  { opacity: 0; transform: translateY(32px) scale(.97); }
        .zg-img-visible { animation: zgFadeIn .7s cubic-bezier(.22,1,.36,1) forwards; }

        .zg-btn-primary {
          background: #4F63F0;
          transition: transform .2s ease, box-shadow .2s ease, background .2s ease;
        }
        .zg-btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 26px -10px rgba(79,99,240,0.55);
          background: #3E51DE;
        }
        .zg-btn-secondary {
          transition: transform .2s ease, background .2s ease;
        }
        .zg-btn-secondary:hover {
          transform: translateY(-2px);
          background: #f2f2f2;
        }

        .zg-hero-img-wrap { transition: transform .4s cubic-bezier(.22,1,.36,1); }
        .zg-hero-img-wrap:hover { transform: translateY(-6px); }
        .zg-hero-img-wrap img { transition: box-shadow .3s ease; }
        .zg-hero-img-wrap:hover img { box-shadow: 0 30px 60px -20px rgba(0,0,0,0.55); }

        @media (prefers-reduced-motion: reduce) {
          .zg-hidden, .zg-img-hidden { opacity: 1 !important; transform: none !important; }
          .zg-visible, .zg-img-visible { animation: none !important; }
        }
      `}</style>

      <section className="bg-[#0B1330] px-6 py-16 sm:px-10 lg:px-16">
        <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 lg:grid-cols-2">
          <div ref={copyRef} className={`zg-hidden ${copyIn ? "zg-visible" : ""}`}>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[2px] text-[#7C8CF8]">
              Company
            </p>
            <h1 className="text-4xl font-bold leading-tight text-white sm:text-[42px]">
              Zoiko Group
            </h1>
            <p className="mt-5 max-w-md text-sm leading-relaxed text-[#AEB7CC]">
              See how Zoiko Sema fits into the wider Zoiko ecosystem and where to go
              for product, company, partner, press, career, legal, security, and
              enterprise enquiries.
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-3">
              <button className="zg-btn-primary rounded-xl px-6 py-3 text-sm font-semibold text-white">
                Explore Zoiko Sema
              </button>
              <button className="zg-btn-secondary rounded-xl bg-white px-6 py-3 text-sm font-semibold text-[#0B1330]">
                Contact Zoiko
              </button>
            </div>

            <p className="mt-6 max-w-md text-xs leading-relaxed text-[#7C879E]">
              We publish only approved brand and corporate relationship language —
              company facts appear here once verified.
            </p>
          </div>

          <div
            ref={imgRef}
            className={`zg-img-hidden ${imgIn ? "zg-img-visible" : ""} zg-hero-img-wrap overflow-hidden rounded-2xl`}
          >
            <img
              src={HERO_IMAGE_SRC}
              alt="Zoiko Group in the wider ecosystem"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>
    </>
  );
}
