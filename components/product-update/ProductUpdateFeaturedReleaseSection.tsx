"use client";

import { PlayCircle } from "lucide-react";
import { useInView } from "./useInView";

// TODO: replace with your actual image path, e.g. "/Images/product-update-featured.webp"
const FEATURED_IMAGE_SRC = "/Images/product-update-featured.png";

export default function ProductUpdateFeaturedReleaseSection() {
  const { ref: imgRef, inView: imgIn } = useInView(0.1);
  const { ref: copyRef, inView: copyIn } = useInView(0.2);

  return (
    <>
      <style>{`
        @keyframes puFeaturedUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .pu-featured-hidden { opacity: 0; transform: translateY(20px); }
        .pu-featured-visible { animation: puFeaturedUp .55s cubic-bezier(.22,1,.36,1) forwards; }

        @keyframes puFeaturedImgIn {
          from { opacity: 0; transform: translateY(28px) scale(.97); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }
        .pu-featured-img-hidden { opacity: 0; transform: translateY(28px) scale(.97); }
        .pu-featured-img-visible { animation: puFeaturedImgIn .65s cubic-bezier(.22,1,.36,1) forwards; }

        .pu-featured-img-wrap { transition: transform .4s cubic-bezier(.22,1,.36,1); }
        .pu-featured-img-wrap:hover { transform: translateY(-6px); }
        .pu-featured-img-wrap img { transition: box-shadow .3s ease; }
        .pu-featured-img-wrap:hover img { box-shadow: 0 30px 60px -20px rgba(15,15,40,0.3); }

        .pu-btn-dark {
          transition: transform .2s ease, box-shadow .2s ease, background .2s ease;
        }
        .pu-btn-dark:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 26px -10px rgba(0,0,0,0.4);
          background: #262626;
        }
        .pu-watch-link { transition: color .2s ease, gap .2s ease; }
        .pu-watch-link .pu-play { transition: transform .2s ease; }
        .pu-watch-link:hover .pu-play { transform: scale(1.1); }

        @media (prefers-reduced-motion: reduce) {
          .pu-featured-hidden, .pu-featured-img-hidden { opacity: 1 !important; transform: none !important; }
          .pu-featured-visible, .pu-featured-img-visible { animation: none !important; }
        }
      `}</style>

      <section className="bg-white px-6 py-16 sm:px-10 lg:px-16">
        <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 lg:grid-cols-2">
          <div
            ref={imgRef}
            className={`pu-featured-img-hidden ${imgIn ? "pu-featured-img-visible" : ""} pu-featured-img-wrap overflow-hidden rounded-2xl`}
          >
            <img
              src={FEATURED_IMAGE_SRC}
              alt="Team collaborating with Zoiko Intelligence AI overlay"
              className="h-full w-full object-cover"
            />
          </div>

          <div ref={copyRef} className={`pu-featured-hidden ${copyIn ? "pu-featured-visible" : ""}`}>
            <p className="text-[12.5px] text-gray-500">
              Impacted: Messaging, Meetings, Admin&nbsp;&nbsp;•&nbsp;&nbsp;July 13, 2026
            </p>
            <h2 className="mt-3 text-3xl font-extrabold leading-tight text-gray-900 sm:text-[32px]">
              The Intelligence Era: Generative AI for Every Workflow
            </h2>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-gray-500">
              v5.0 introduces Zoiko Intelligence—a suite of AI-powered tools
              designed to summarize meetings, draft responses, and automate
              complex cross-platform tasks without leaving your workspace.
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-6">
              <button className="pu-btn-dark rounded-xl bg-black px-6 py-3 text-sm font-semibold text-white">
                Read Release Notes
              </button>
              <a
                href="#"
                className="pu-watch-link flex items-center gap-2 text-sm font-semibold text-[#4F63F0]"
              >
                Watch Overview
                <PlayCircle size={18} strokeWidth={2} className="pu-play" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
