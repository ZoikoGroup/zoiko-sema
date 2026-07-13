"use client";

import { Users, CheckSquare, FileText, Calendar, MessageCircle, BarChart3, LucideIcon } from "lucide-react";
import { useInView } from "./useInView";

// TODO: replace with your actual image path, e.g. "/Images/verified-collaboration-review.webp"
const REVIEW_IMAGE_SRC = "/Images/verified-collaboration-review.webp";

interface FlowNode {
  icon: LucideIcon;
  bg: string;
}

const leftBadges: FlowNode[] = [
  { icon: Users, bg: "bg-indigo-500" },
  { icon: CheckSquare, bg: "bg-emerald-500" },
  { icon: FileText, bg: "bg-blue-500" },
];

const rightBadges: FlowNode[] = [
  { icon: Calendar, bg: "bg-blue-500" },
  { icon: MessageCircle, bg: "bg-indigo-500" },
  { icon: BarChart3, bg: "bg-teal-500" },
];

const flowSequence: FlowNode[] = [...leftBadges, ...rightBadges];

export default function VerifiedCollaborationReviewBeforeSyncSection() {
  const { ref: headRef, inView: headIn } = useInView(0.2);
  const { ref: imgRef, inView: imgIn } = useInView(0.1);

  return (
    <>
      <style>{`
        @keyframes vcReviewUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .vc-review-hidden { opacity: 0; transform: translateY(20px); }
        .vc-review-visible { animation: vcReviewUp .55s cubic-bezier(.22,1,.36,1) forwards; }

        @keyframes vcReviewImgIn {
          from { opacity: 0; transform: translateY(28px) scale(.97); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }
        .vc-review-img-hidden { opacity: 0; transform: translateY(28px) scale(.97); }
        .vc-review-img-visible { animation: vcReviewImgIn .65s cubic-bezier(.22,1,.36,1) forwards; }

        @keyframes vcBadgeStagger {
          from { opacity: 0; transform: translateY(10px) scale(.9); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }
        .vc-review-badge {
          opacity: 0;
          animation: vcBadgeStagger .45s ease forwards;
          transition: transform .22s ease, box-shadow .22s ease;
        }
        .vc-review-badge:hover {
          transform: translateY(-3px) scale(1.08);
          box-shadow: 0 12px 24px -8px rgba(0,0,0,0.35);
        }

        .vc-review-flow-node {
          transition: transform .2s ease, box-shadow .2s ease;
        }
        .vc-review-flow-node:hover {
          transform: translateY(-2px) scale(1.06);
          box-shadow: 0 10px 20px -8px rgba(0,0,0,0.4);
        }

        @media (prefers-reduced-motion: reduce) {
          .vc-review-hidden, .vc-review-img-hidden, .vc-review-badge { opacity: 1 !important; transform: none !important; animation: none !important; }
          .vc-review-visible, .vc-review-img-visible { animation: none !important; }
        }
      `}</style>

      <section className="bg-[#F3F2FD] px-6 py-16 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-5xl text-center">
          <div ref={headRef} className={`vc-review-hidden ${headIn ? "vc-review-visible" : ""}`}>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[2px] text-[#4F63F0]">
              Review before sync
            </p>
            <h2 className="mx-auto max-w-2xl text-3xl font-extrabold leading-10 text-gray-900 sm:text-[32px]">
              Nothing becomes a record without review
            </h2>
            <p className="mx-auto mt-4 max-w-160 text-sm leading-relaxed text-gray-500">
              Verified Collaboration is a reviewed workflow — not automatic
              surveillance or unchecked AI. Select a state to see what it means.
            </p>
          </div>

          <div
            ref={imgRef}
            className={`vc-review-img-hidden ${imgIn ? "vc-review-img-visible" : ""} relative mt-10`}
          >
            <div className="relative overflow-hidden rounded-2xl">
              <img
                src={REVIEW_IMAGE_SRC}
                alt="Reviewed video meeting turning into a verified record"
                className="h-full w-full object-cover"
              />

             
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
