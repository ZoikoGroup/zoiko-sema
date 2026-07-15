"use client"
import { ArrowRight } from "lucide-react";

interface TransformCard {
  before: string;
  after: string;
}

const transforms: TransformCard[] = [
  { before: "Scattered drafts", after: "One structured document" },
  { before: "Lost decisions", after: "Sourced decision blocks" },
  { before: "Stale versions", after: "Named, compared versions" },
  { before: "Unsafe sharing", after: "Governed external access" },
];

export default function WhyDocumentsFailSection() {
  return (
    <section className="bg-[#F3F1FA] px-6 py-24 sm:px-10 lg:px-16">
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(18px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .fade-in-item {
          opacity: 0;
          animation: fadeInUp 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `}</style>

      <div className="mx-auto max-w-6xl text-center">
        <p
          className="fade-in-item text-xs font-bold uppercase tracking-[2px] text-[#6C5CE7]"
          style={{ animationDelay: "0ms" }}
        >
          Why documents fail
        </p>
        <h2
          className="fade-in-item mt-4 text-4xl font-extrabold leading-[1.15] text-gray-900 sm:text-5xl"
          style={{ animationDelay: "80ms" }}
        >
          Scattered drafts.
          <br />
          Lost decisions.
          <br />
          Silent overwrites.
        </h2>
        <p
          className="fade-in-item mx-auto mt-6 max-w-xl text-base leading-relaxed text-gray-500"
          style={{ animationDelay: "160ms" }}
        >
          Most document tools don&apos;t know your work exists. Zoiko Sema
          Documents is built inside your workspace — where context lives.
        </p>

        <div className="mt-14 grid grid-cols-1 gap-5 text-left sm:grid-cols-2 lg:grid-cols-4">
          {transforms.map(({ before, after }, i) => (
            <div
              key={before}
              className="fade-in-item rounded-2xl border border-gray-100 bg-white p-6 shadow-sm"
              style={{ animationDelay: `${240 + i * 100}ms` }}
            >
              <div className="flex items-center gap-2 text-xs font-semibold">
                <span className="text-gray-400">Before</span>
                <ArrowRight size={12} className="text-gray-300" />
                <span className="text-[#4F63F0]">After</span>
              </div>
              <p className="mt-4 text-[13px] text-[#9A9BB8] line-through decoration-gray-300">
                {before}
              </p>
              <p className="mt-2 text-[15px] font-bold text-[#14162B]">{after}</p>
            </div>
          ))}
        </div>

        <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-2">
          <div
            className="fade-in-item overflow-hidden rounded-2xl"
            style={{ animationDelay: "700ms" }}
          >
            <img src="/system-status/man.png" alt="image" className="h-full w-full object-cover" />
          </div>
          <div
            className="fade-in-item overflow-hidden rounded-2xl bg-white"
            style={{ animationDelay: "780ms" }}
          >
            <img src="/system-status/doc.png" alt="image" className="h-full w-full object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
}
