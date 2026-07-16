"use client";

import { Check, Shield } from "lucide-react";
import { useInView } from "./useInView";
import { useRouter } from "next/navigation";

// TODO: replace with your actual hero image path, e.g. "/Images/compliance-audit-hero.webp"
const HERO_IMAGE_SRC = "/Images/compliance-audit-hero.webp";

const badges = ["Source-linked", "Reviewed", "Permissioned", "Export-ready"];

export default function ComplianceAuditHeroSection() {
  const { ref: copyRef, inView: copyIn } = useInView(0.2);
  const { ref: imgRef, inView: imgIn } = useInView(0.1);
  const router = useRouter();

  return (
    <>
      <style>{`
        @keyframes caFadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes caFadeIn {
          from { opacity: 0; transform: translateY(32px) scale(.97); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }
        .ca-hidden  { opacity: 0; transform: translateY(24px); }
        .ca-visible { animation: caFadeUp .55s cubic-bezier(.22,1,.36,1) forwards; }

        .ca-img-hidden  { opacity: 0; transform: translateY(32px) scale(.97); }
        .ca-img-visible { animation: caFadeIn .7s cubic-bezier(.22,1,.36,1) forwards; }

        .ca-btn-primary {
          background: #4F63F0;
          transition: transform .2s ease, box-shadow .2s ease, background .2s ease;
        }
        .ca-btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 26px -10px rgba(79,99,240,0.55);
          background: #3E51DE;
        }
        .ca-btn-secondary {
          transition: transform .2s ease, background .2s ease;
        }
        .ca-btn-secondary:hover {
          transform: translateY(-2px);
          background: #f2f2f2;
        }

        .ca-badge {
          transition: transform .2s ease, border-color .2s ease, background-color .2s ease;
        }
        .ca-badge:hover {
          transform: translateY(-2px);
          border-color: rgba(124,140,248,0.5);
          background-color: rgba(255,255,255,0.06);
        }

        .ca-hero-img-wrap { transition: transform .4s cubic-bezier(.22,1,.36,1); }
        .ca-hero-img-wrap:hover { transform: translateY(-6px); }
        .ca-hero-img-wrap img { transition: box-shadow .3s ease; }
        .ca-hero-img-wrap:hover img { box-shadow: 0 30px 60px -20px rgba(0,0,0,0.55); }

        @media (prefers-reduced-motion: reduce) {
          .ca-hidden, .ca-img-hidden { opacity: 1 !important; transform: none !important; }
          .ca-visible, .ca-img-visible { animation: none !important; }
        }
      `}</style>

      <section className="bg-[#0B1330] px-6 py-16 sm:px-10 lg:px-16">
        <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 lg:grid-cols-2">
          <div ref={copyRef} className={`ca-hidden ${copyIn ? "ca-visible" : ""}`}>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[2px] text-[#7C8CF8]">
              ZoikoTime
            </p>
            <h1 className="text-4xl font-bold leading-tight text-white sm:text-[42px]">
              Compliance &amp; Audit
            </h1>
            <p className="mt-5 max-w-md text-sm leading-relaxed text-[#AEB7CC]">
              Turn meetings, decisions, and action items into reviewed,
              source-linked, export-ready work records for enterprise audit
              readiness.
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-3">
              <button onClick={()=>router.push("/get-a-demo")}
              className="ca-btn-primary cursor-pointer rounded-xl px-6 py-3 text-sm font-semibold text-white">
                Request Demo
              </button>
              <button onClick={()=>router.push('/workflows')}
              className="ca-btn-secondary rounded-xl cursor-pointer bg-white px-6 py-3 text-sm font-semibold text-[#0B1330]">
                View Audit Workflow
              </button>
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-2.5">
              {badges.map((label, i) => (
                <span
                  key={label}
                  className="ca-badge inline-flex items-center gap-1.5 rounded-full border border-white/10 px-3 py-1.5 text-[11.5px] font-medium text-[#AEB7CC]"
                >
                  {i === 0 && <Check size={13} strokeWidth={2.5} className="text-[#7C93FF]" />}
                  {label}
                </span>
              ))}
            </div>

            <p className="mt-6 flex items-center gap-1.5 text-xs leading-relaxed text-[#7C879E]">
              <Shield size={13} strokeWidth={2} className="shrink-0 text-[#7C93FF]" />
              Reviewed work evidence — not surveillance or personal scoring.
            </p>
          </div>

          <div
            ref={imgRef}
            className={`ca-img-hidden ${imgIn ? "ca-img-visible" : ""} ca-hero-img-wrap overflow-hidden rounded-2xl`}
          >
            <img
              src={HERO_IMAGE_SRC}
              alt="Audit readiness dashboard reviewed on a workstation"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>
    </>
  );
}
