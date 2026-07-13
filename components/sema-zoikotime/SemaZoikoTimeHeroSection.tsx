"use client";

import { ShieldCheck, Link2, CheckCircle2, Settings2, LucideIcon } from "lucide-react";
import { useInView } from "./useInView";

// TODO: replace with your actual hero image path, e.g. "/Images/sema-zoikotime-hero.webp"
const HERO_IMAGE_SRC = "/Images/sema-zoikotime-hero.webp";

interface Badge {
  icon: LucideIcon;
  label: string;
}

const badges: Badge[] = [
  { icon: ShieldCheck, label: "Enterprise-ready" },
  { icon: Link2, label: "Source-linked" },
  { icon: CheckCircle2, label: "Reviewable" },
  { icon: Settings2, label: "Admin-governed" },
];

export default function SemaZoikoTimeHeroSection() {
  const { ref: copyRef, inView: copyIn } = useInView(0.2);
  const { ref: imgRef, inView: imgIn } = useInView(0.1);

  return (
    <>
      <style>{`
        @keyframes sztFadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes sztFadeIn {
          from { opacity: 0; transform: translateY(32px) scale(.97); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }
        .szt-hidden  { opacity: 0; transform: translateY(24px); }
        .szt-visible { animation: sztFadeUp .55s cubic-bezier(.22,1,.36,1) forwards; }

        .szt-img-hidden  { opacity: 0; transform: translateY(32px) scale(.97); }
        .szt-img-visible { animation: sztFadeIn .7s cubic-bezier(.22,1,.36,1) forwards; }

        .szt-btn-primary {
          background: #4F63F0;
          transition: transform .2s ease, box-shadow .2s ease, background .2s ease;
        }
        .szt-btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 26px -10px rgba(79,99,240,0.55);
          background: #3E51DE;
        }
        .szt-btn-secondary {
          transition: transform .2s ease, background .2s ease;
        }
        .szt-btn-secondary:hover {
          transform: translateY(-2px);
          background: #f2f2f2;
        }

        .szt-badge {
          transition: transform .2s ease, border-color .2s ease, background-color .2s ease;
        }
        .szt-badge:hover {
          transform: translateY(-2px);
          border-color: rgba(124,140,248,0.5);
          background-color: rgba(255,255,255,0.06);
        }

        .szt-hero-img-wrap { transition: transform .4s cubic-bezier(.22,1,.36,1); }
        .szt-hero-img-wrap:hover { transform: translateY(-6px); }
        .szt-hero-img-wrap img { transition: box-shadow .3s ease; }
        .szt-hero-img-wrap:hover img { box-shadow: 0 30px 60px -20px rgba(0,0,0,0.55); }

        @media (prefers-reduced-motion: reduce) {
          .szt-hidden, .szt-img-hidden { opacity: 1 !important; transform: none !important; }
          .szt-visible, .szt-img-visible { animation: none !important; }
        }
      `}</style>

      <section className="bg-[#0B1330] px-6 py-16 sm:px-10 lg:px-16">
        <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 lg:grid-cols-2">
          <div ref={copyRef} className={`szt-hidden ${copyIn ? "szt-visible" : ""}`}>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[2px] text-[#7C8CF8]">
              ZoikoTime
            </p>
            <h1 className="text-4xl font-bold leading-tight text-white sm:text-[42px]">
              Sema <span className="text-[#7C93FF]">+</span> ZoikoTime
            </h1>
            <p className="mt-5 max-w-md text-sm leading-relaxed text-[#AEB7CC]">
              Connect Zoiko Sema meetings, messages, summaries, decisions, and
              action items to ZoikoTime verified work signals, audit evidence,
              and productivity intelligence.
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-3">
              <button className="szt-btn-primary rounded-xl px-6 py-3 text-sm font-semibold text-white">
                Request Demo
              </button>
              <button className="szt-btn-secondary rounded-xl bg-white px-6 py-3 text-sm font-semibold text-[#0B1330]">
                See Workflow
              </button>
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-2.5">
              {badges.map(({ icon: Icon, label }) => (
                <span
                  key={label}
                  className="szt-badge inline-flex items-center gap-1.5 rounded-full border border-white/10 px-3 py-1.5 text-[11.5px] font-medium text-[#AEB7CC]"
                >
                  <Icon size={13} strokeWidth={2} className="text-[#7C93FF]" />
                  {label}
                </span>
              ))}
            </div>
          </div>

          <div
            ref={imgRef}
            className={`szt-img-hidden ${imgIn ? "szt-img-visible" : ""} szt-hero-img-wrap overflow-hidden rounded-2xl`}
          >
            <img
              src={HERO_IMAGE_SRC}
              alt="Sema and ZoikoTime connected workspace"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>
    </>
  );
}
