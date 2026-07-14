"use client";

import { useInView } from "./useInView";

// TODO: replace with your actual image path, e.g. "/Images/meeting-to-work-challenge.webp"
const CHALLENGE_IMAGE_SRC = "/Images/meeting-to-work-challenge.webp";

export default function MeetingToWorkChallengeSection() {
  const { ref: copyRef, inView: copyIn } = useInView(0.2);
  const { ref: imgRef, inView: imgIn } = useInView(0.1);

  return (
    <>
      <style>{`
        @keyframes mtwChallengeUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .mtw-challenge-hidden { opacity: 0; transform: translateY(20px); }
        .mtw-challenge-visible { animation: mtwChallengeUp .55s cubic-bezier(.22,1,.36,1) forwards; }

        @keyframes mtwChallengeImgIn {
          from { opacity: 0; transform: translateY(28px) scale(.97); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }
        .mtw-challenge-img-hidden { opacity: 0; transform: translateY(28px) scale(.97); }
        .mtw-challenge-img-visible { animation: mtwChallengeImgIn .65s cubic-bezier(.22,1,.36,1) forwards; }

        .mtw-challenge-img-wrap { transition: transform .4s cubic-bezier(.22,1,.36,1); }
        .mtw-challenge-img-wrap:hover { transform: translateY(-6px); }
        .mtw-challenge-img-wrap img { transition: box-shadow .3s ease; }
        .mtw-challenge-img-wrap:hover img { box-shadow: 0 30px 60px -20px rgba(15,15,40,0.3); }

        @media (prefers-reduced-motion: reduce) {
          .mtw-challenge-hidden, .mtw-challenge-img-hidden { opacity: 1 !important; transform: none !important; }
          .mtw-challenge-visible, .mtw-challenge-img-visible { animation: none !important; }
        }
      `}</style>

      <section className="bg-white px-6 py-16 sm:px-10 lg:px-16">
        <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 lg:grid-cols-2">
          <div ref={copyRef} className={`mtw-challenge-hidden ${copyIn ? "mtw-challenge-visible" : ""}`}>
            <p className="mb-3 text-sm font-semibold text-[#4F63F0]">
              The Challenge
            </p>
            <h2 className="text-3xl font-extrabold leading-tight text-gray-900 sm:text-[34px]">
              Drowning in Meeting Overload?
            </h2>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-gray-500">
              Teams spend 60% of their time on &ldquo;work about work.&rdquo;
              Valuable insights from meetings often vanish into the ether,
              leaving managers and contributors scrambling to recall action
              items and deadlines.
            </p>
          </div>

          <div
            ref={imgRef}
            className={`mtw-challenge-img-hidden ${imgIn ? "mtw-challenge-img-visible" : ""} mtw-challenge-img-wrap overflow-hidden rounded-2xl`}
          >
            <img
              src={CHALLENGE_IMAGE_SRC}
              alt="Person overwhelmed by too many meeting notifications"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>
    </>
  );
}
