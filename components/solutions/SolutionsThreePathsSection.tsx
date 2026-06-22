"use client";

import React from "react";
import Link from "next/link";

interface PathStep {
  label: string;
  highlighted?: boolean;
}

interface PathCard {
  pathNumber: string;
  titlePlain1: string;
  titleItalic: string;
  titlePlain2: string;
  desc: string;
  steps: PathStep[];
  cta: string;
  href: string;
  primary?: boolean;
}

const paths: PathCard[] = [
  {
    pathNumber: "PATH 01",
    titlePlain1: "Start solo,",
    titleItalic: "stay solo",
    titlePlain2: ".",
    desc: "Some people use Sema for personal communication and never want it to become a work tool. That is a legitimate use case. Sema supports secure messaging, audio calls, video calls and AI-assisted memory for individuals.",
    steps: [{ label: "Solo" }, { label: "Solo" }],
    cta: "Start free",
    href: "#/start-free/",
    primary: false,
  },
  {
    pathNumber: "PATH 02",
    titlePlain1: "Start solo,",
    titleItalic: "grow into a team",
    titlePlain2: ".",
    desc: "One person tries Sema, brings it to colleagues, a team workspace forms and the organization later adopts more structure. The natural product-led growth path — without forced upgrades along the way.",
    steps: [{ label: "Solo" }, { label: "Team" }, { label: "Business" }],
    cta: "Start free",
    href: "/start-free/",
    primary: false,
  },
  {
    pathNumber: "PATH 03",
    titlePlain1: "Start with the",
    titleItalic: "business",
    titlePlain2: ".",
    desc: "Some organizations want top-down deployment, security review, governance, compliance planning and ZoikoTime integration design from day one. Sema is built to be deployed at scale when that's the right fit.",
    steps: [{ label: "Business" }, { label: "Org-wide" }, { label: "+ ZoikoTime", highlighted: true }],
    cta: "Get a demo",
    href: "/get-a-demo/",
    primary: true,
  },
];

export default function SolutionsThreePathsSection() {
  return (
    <>
      <style>{`
        @keyframes stpFadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        .stp-heading-enter { animation: stpFadeUp 0.55s cubic-bezier(.22,1,.36,1) both; }
        .stp-note-enter { animation: stpFadeUp 0.55s cubic-bezier(.22,1,.36,1) 0.1s both; }
        .stp-card-enter { animation: stpFadeUp 0.6s cubic-bezier(.22,1,.36,1) both; }

        .stp-card {
          transition: transform .28s cubic-bezier(.22,1,.36,1),
                      box-shadow .28s cubic-bezier(.22,1,.36,1);
        }
        .stp-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 18px 36px rgba(71,71,135,0.14);
        }
        .stp-card-primary:hover {
          box-shadow: 0 18px 36px rgba(71,71,135,0.30);
        }

        .stp-step-pill {
          transition: transform .2s ease, background-color .2s ease, border-color .2s ease;
        }
        .stp-card:hover .stp-step-pill {
          transform: translateY(-1px);
        }

        .stp-title-italic { transition: color .25s ease; }
        .stp-card:hover .stp-title-italic { color: #4338CA; }
        .stp-card-primary:hover .stp-title-italic { color: #a5b4fc; }

        /* CTA buttons */
        .stp-btn {
          position: relative; overflow: hidden;
          transition: transform .22s cubic-bezier(.22,1,.36,1), box-shadow .22s ease, opacity .2s ease;
        }
        .stp-btn:hover { transform: translateY(-2px); opacity: .94; }
        @keyframes stpShimmer {
          from { transform: translateX(-120%); }
          to   { transform: translateX(220%); }
        }
        .stp-btn::after {
          content: "";
          position: absolute; inset: 0;
          background: linear-gradient(110deg, transparent 30%, rgba(255,255,255,0.3) 50%, transparent 70%);
          transform: translateX(-120%);
        }
        .stp-btn:hover::after { animation: stpShimmer .6s ease forwards; }
        .stp-btn-arrow { display: inline-block; transition: transform .2s ease; }
        .stp-btn:hover .stp-btn-arrow { transform: translateX(3px); }

        @media (prefers-reduced-motion: reduce) {
          .stp-heading-enter, .stp-note-enter, .stp-card-enter {
            animation: none !important; opacity: 1 !important; transform: none !important;
          }
          .stp-card:hover, .stp-btn:hover { transform: none; }
        }
      `}</style>

      <section
        aria-label="Three real paths into Sema. Pick the one that matches your reality"
        className="w-full bg-white py-20 md:py-24"
      >
        <div className="mx-auto w-full max-w-7xl px-6 md:px-10 lg:px-16">

          {/* ── Heading ── */}
          <div className="stp-heading-enter text-center mb-12">
            <h2
              className="font-bold leading-[1.18] tracking-tight text-[#15131F] mb-4"
              style={{ fontSize: "35px" }}
            >
              Three real paths into Sema. Pick the one that matches your reality
            </h2>
            <p className="mx-auto max-w-[680px] text-[15px] leading-[1.75] text-[#5C5870]">
              Not every individual user wants to be funneled into a business plan.
              Not every business wants to start with a single user. Sema supports
              each path honestly.
            </p>
          </div>

          {/* ── Honesty note ── */}
          <div className="stp-note-enter mb-10">
            <div
              className="rounded-2xl px-7 py-5"
              style={{ background: "#E9EEFB" }}
            >
              <p className="text-[13.5px] leading-relaxed text-[#3f3d56]">
                <span className="font-bold text-[#15131F]">
                  Sema does not force one adoption path.
                </span>{" "}
                Individuals can stay individuals. Teams can scale or stay small.
                Businesses can deploy at any pace. The user situation determines
                the path — not the product.
              </p>
            </div>
          </div>

          {/* ── 3-card grid ── */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
            {paths.map((path, i) => (
              <div
                key={path.pathNumber}
                className="stp-card-enter"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div
                  className={`stp-card h-full rounded-2xl p-7 flex flex-col ${
                    path.primary ? "stp-card-primary" : ""
                  }`}
                  style={{ background: path.primary ? "#ECF3FF" : "#ECF3FF" }}
                >
                  {/* Path label */}
                  <span
                    className="text-[10.5px] font-bold uppercase tracking-[0.16em] mb-3"
                    style={{ color: path.primary ? "#5C5870" : "#5C5870" }}
                  >
                    {path.pathNumber}
                  </span>

                  {/* Title — mixed plain + italic */}
                  <h3
                    className="text-[19px] font-bold leading-snug mb-3"
                    style={{ color: path.primary ? "#5C5870" : "#5C5870" }}
                  >
                    {path.titlePlain1}{" "}
                    <em
                      className="stp-title-italic font-serif italic font-normal"
                      style={{ color: path.primary ? "#474889" : "#474889" }}
                    >
                      {path.titleItalic}
                    </em>
                    {path.titlePlain2}
                  </h3>

                  {/* Description */}
                  <p
                    className="text-[13px] leading-[1.7] mb-6 flex-1"
                    style={{ color: path.primary ? "#5C5870" : "#5C5870" }}
                  >
                    {path.desc}
                  </p>

                  {/* Step pills row */}
                 <div
  className="flex items-center gap-2 flex-wrap rounded-xl px-2 py-3 mb-5"
  style={{ background: path.primary ? "#FFFFFF" : "#fff" }}
>
  {path.steps.map((step, idx) => (
    <React.Fragment key={`${step.label}-${idx}`}>
      <span
        className="stp-step-pill text-[12px] font-semibold px-2.5 py-1 rounded-md"
        style={{
          color: step.highlighted
            ? "#474889"
            : path.primary
            ? "#474889"
            : "#474889",
          background: step.highlighted
            ? "rgba(165,180,252,0.15)"
            : "transparent",
        }}
      >
        {step.label}
      </span>

      {idx < path.steps.length - 1 && (
        <span
          aria-hidden="true"
          className="text-[12px]"
          style={{
            color: path.primary ? "#8b8fe8" : "#A5A8E0",
          }}
        >
          →
        </span>
      )}
    </React.Fragment>
  ))}
</div>
                  {/* CTA */}
                  <Link
                    href={path.href}
                    className="stp-btn inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-[14px] font-semibold w-fit"
                    style={{
                      background: path.primary ? "#474889" : "#fff",
                      color: path.primary ? "#fff" : "#15131F",
                    }}
                  >
                    {path.cta}
                    <span aria-hidden="true" className="stp-btn-arrow">→</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
}