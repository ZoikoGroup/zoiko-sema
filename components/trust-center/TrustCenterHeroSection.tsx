"use client";

import { useInView } from "./useInView";
import Link from "next/link";

// TODO: replace with your actual hero image path, e.g. "/Images/trust-center-hero.webp"
const HERO_IMAGE_SRC = "/Images/trust-hero.webp";

export default function TrustCenterHeroSection() {
  const { ref: copyRef, inView: copyIn } = useInView(0.2);
  const { ref: imgRef, inView: imgIn } = useInView(0.1);

  return (
    <>
      <style>{`
        @keyframes tcFadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes tcFadeIn {
          from { opacity: 0; transform: translateY(32px) scale(.97); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }
        .tc-hidden  { opacity: 0; transform: translateY(24px); }
        .tc-visible { animation: tcFadeUp .55s cubic-bezier(.22,1,.36,1) forwards; }

        .tc-img-hidden  { opacity: 0; transform: translateY(32px) scale(.97); }
        .tc-img-visible { animation: tcFadeIn .7s cubic-bezier(.22,1,.36,1) forwards; }

        .tc-btn-primary {
          background: #4F63F0;
          transition: transform .2s ease, box-shadow .2s ease, background .2s ease;
        }
        .tc-btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 26px -10px rgba(79,99,240,0.55);
          background: #3E51DE;
        }
        .tc-btn-secondary {
          transition: transform .2s ease, background-color .2s ease, border-color .2s ease;
        }
        .tc-btn-secondary:hover {
          transform: translateY(-2px);
          background-color: rgba(255,255,255,0.1);
          border-color: rgba(255,255,255,0.4);
        }

        .tc-hero-img-wrap { transition: transform .4s cubic-bezier(.22,1,.36,1); }
        .tc-hero-img-wrap:hover { transform: translateY(-6px); }
        .tc-hero-img-wrap img { transition: box-shadow .3s ease; }
        .tc-hero-img-wrap:hover img { box-shadow: 0 30px 60px -20px rgba(0,0,0,0.55); }

        @media (prefers-reduced-motion: reduce) {
          .tc-hidden, .tc-img-hidden { opacity: 1 !important; transform: none !important; }
          .tc-visible, .tc-img-visible { animation: none !important; }
        }
      `}</style>

      <section className="bg-[#0B1330] px-6 py-16 sm:px-10 lg:px-16">
        <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 lg:grid-cols-2">
          <div ref={copyRef} className={`tc-hidden ${copyIn ? "tc-visible" : ""}`}>
            <span className="mb-5 inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-[10.5px] font-bold uppercase tracking-[1.5px] text-[#8FA3FF]">
              <span className="h-1.5 w-1.5 rounded-full border border-[#8FA3FF]" />
              Trust Center
            </span>
            <h1 className="text-4xl font-bold leading-tight text-white sm:text-[42px]">
              Enterprise trust, security clarity, and governance proof.
            </h1>
            <p className="mt-5 max-w-md text-sm leading-relaxed text-[#AEB7CC]">
              Explore how Zoiko Sema approaches security, privacy, compliance
              readiness, AI governance, reliability, and enterprise review
              requests for governed business communication.
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-3">
              <Link href="#security-review" className="tc-btn-primary rounded-xl px-6 py-3 text-sm font-semibold text-white inline-block">
                Request trust documents
              </Link>
              <Link href="#security-overview" className="tc-btn-secondary rounded-xl border border-white/15 px-6 py-3 text-sm font-semibold text-white inline-block">
                View security overview
              </Link>
            </div>
          </div>

          <div
            ref={imgRef}
            className={`tc-img-hidden ${imgIn ? "tc-img-visible" : ""} tc-hero-img-wrap overflow-hidden rounded-2xl`}
          >
            <img
              src={HERO_IMAGE_SRC}
              alt="Enterprise team reviewing security clarity and governance proof"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>
    </>
  );
}
