"use client";
import { ArrowRight } from "lucide-react";

export default function FeaturedArticleSection() {
  return (
    <section className="bg-[#F4F2FD] px-6 py-12 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 overflow-hidden rounded-2xl bg-white shadow-sm lg:grid-cols-2">
          <div className="h-64 lg:h-full">
            <img
              src="/blog/pc.png"
              alt="image"
              className="h-full w-full object-cover"
            />
          </div>

          <div className="flex flex-col justify-center p-8 sm:p-10">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[2px] text-[#4F63F0]">
              AI &amp; Governance
            </p>
            <h2 className="text-2xl font-bold max-w-120 leading-snug text-gray-900 sm:text-[26px]">
              The Ethical Guardrails of AI in Corporate Communication
            </h2>
            <p className="mt-4 text-[18px] max-w-120 leading-relaxed text-gray-500">
              How enterprise leaders are balancing the productivity gains of
              AI-automated summaries with the critical need for data privacy and
              human-centered decision making.
            </p>

            <div className="mt-6 flex items-center gap-3">
              <span className="flex h-9 w-9 rounded-full bg-[#EDEBFB]">
                <img src="/blog/sara.png" alt="image" />
              </span>
              <div className="text-sm">
                <p className="font-semibold text-gray-900">Sarah J. Miller</p>
                <p className="text-xs text-gray-500">Director of AI Strategy</p>
              </div>
              <span className="mx-1 h-8 w-px bg-gray-200" />
              <p className="text-xs text-gray-500">Oct 12, 2024</p>
            </div>

            <button className="mt-6 flex w-fit items-center gap-1 text-sm font-semibold text-[#4F63F0] hover:text-[#3E51DE]">
              Read Full Article
              <ArrowRight size={14} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
