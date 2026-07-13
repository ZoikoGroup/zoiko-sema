"use client";

import { useInView } from "./useInView";

// TODO: replace with your actual image paths, e.g. "/Images/verified-collaboration-problem.webp"
const PROBLEM_IMAGE_SRC = "/Images/verified-collaboration-problem.webp";
// TODO: replace with your actual image path, e.g. "/Images/verified-collaboration-solution.webp"
const SOLUTION_IMAGE_SRC = "/Images/verified-collaboration-solution.webp";

export default function VerifiedCollaborationProblemSection() {
  const { ref: headRef, inView: headIn } = useInView(0.2);
  const { ref: imgRef, inView: imgIn } = useInView(0.1);

  return (
    <>
      <style>{`
        @keyframes vcProblemUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .vc-problem-hidden { opacity: 0; transform: translateY(20px); }
        .vc-problem-visible { animation: vcProblemUp .55s cubic-bezier(.22,1,.36,1) forwards; }

        @keyframes vcProblemImgIn {
          from { opacity: 0; transform: translateY(24px) scale(.97); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }
        .vc-problem-img-hidden { opacity: 0; transform: translateY(24px) scale(.97); }
        .vc-problem-img-visible { animation: vcProblemImgIn .6s cubic-bezier(.22,1,.36,1) forwards; }

        .vc-problem-img-wrap { transition: transform .35s cubic-bezier(.22,1,.36,1); }
        .vc-problem-img-wrap:hover { transform: translateY(-6px); }
        .vc-problem-img-wrap img { transition: box-shadow .3s ease; }
        .vc-problem-img-wrap:hover img { box-shadow: 0 26px 50px -18px rgba(15,15,40,0.3); }

        @media (prefers-reduced-motion: reduce) {
          .vc-problem-hidden, .vc-problem-img-hidden { opacity: 1 !important; transform: none !important; }
          .vc-problem-visible, .vc-problem-img-visible { animation: none !important; }
        }
      `}</style>

      <section className="bg-white px-6 py-16 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-6xl text-center">
          <div ref={headRef} className={`vc-problem-hidden ${headIn ? "vc-problem-visible" : ""}`}>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[2px] text-[#4F63F0]">
              The problem
            </p>
            <h2 className="mx-auto max-w-2xl text-3xl font-extrabold leading-10 text-gray-900 sm:text-[32px]">
              Meeting outcomes shouldn&apos;t disappear
            </h2>
            <p className="mx-auto mt-4 max-w-160 text-sm leading-relaxed text-gray-500">
              Teams have meetings, chats, decisions, and follow-ups — but the
              real work record stays scattered. Verified Collaboration turns it
              into accountable, reviewable work context.
            </p>
          </div>

          <div
            ref={imgRef}
            className={`vc-problem-img-hidden ${imgIn ? "vc-problem-img-visible" : ""} mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2`}
          >
            <div className="vc-problem-img-wrap overflow-hidden rounded-2xl">
              <img
                src={PROBLEM_IMAGE_SRC}
                alt="Scattered meeting notes, decisions, and follow-ups"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="vc-problem-img-wrap overflow-hidden rounded-2xl" style={{ transitionDelay: "0.05s" }}>
              <img
                src={SOLUTION_IMAGE_SRC}
                alt="Meeting turned into a structured, verified work record"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
