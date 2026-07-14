"use client";
import { Calendar, Clock } from "lucide-react";

const tableOfContents = [
  { label: "The Latency Challenge", active: true },
  { label: "Adaptive Bitrate Scaling", active: false },
  { label: "Next-Gen Codec Support", active: false },
  { label: "Browser vs Desktop App", active: false },
  { label: "Future Outlook", active: false },
];

const relatedResources = [
  { tag: "Guide", title: "Configuring Zoiko for Slow Networks" },
  { tag: "Whitepaper", title: "2024 Global Infrastructure Report" },
];

export default function ArticlePreviewSection() {
  return (
    <section className="bg-[#F4F2FD] px-6 py-12 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_320px]">
          <div className="rounded-2xl bg-white p-8 shadow-sm">
            <p className="mb-3 flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[1.5px] text-[#4F63F0]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#4F63F0]" />
              Article preview
            </p>
            <h2 className="text-2xl font-bold leading-snug text-gray-900 md:text-[32px]">
              Optimizing Video Quality for High-Latency Global Networks
            </h2>

            <div className="mt-4 flex items-center gap-4 text-xs text-gray-400">
              <span className="flex items-center text-[#45464D] gap-1.5">
                <Calendar size={13} />
                Oct 10, 2024
              </span>
              <span className="flex items-center text-[#45464D] gap-1.5">
                <Clock size={13} />
                15 min read
              </span>
            </div>

            <blockquote className="mt-6 border-l-4 border-[#0058BE] p-4 max-w-2xl italic leading-relaxed text-gray-600">
              &quot;Network reliability is no longer a luxury; it&apos;s the
              bedrock of the global workplace. This guide breaks down the codecs
              and protocols that power Zoiko Sema&apos;s 4K video
              infrastructure.&quot;
            </blockquote>

            <p className="mt-6 max-w-2xl leading-relaxed text-gray-500">
              Global teams often face the challenge of inconsistent internet
              speeds. Whether it&apos;s a team member in a rural area or an
              executive traveling internationally, maintaining high-fidelity
              video communication is crucial for professional presence and
              efficient information exchange...
            </p>

            <div className="mt-6 overflow-hidden rounded-xl border border-gray-100">
              <img
                src="/blog/preview.png"
                alt="image"
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <div className="rounded-2xl bg-[#F2F4F6] p-6 shadow-sm">
              <p className="mb-4 text-xs font-semibold uppercase tracking-wide text-gray-400">
                Table of Contents
              </p>
              <div className="flex flex-col gap-3">
                {tableOfContents.map(({ label, active }) => (
                  <a
                    key={label}
                    href="#"
                    className={`border-l-2 pl-5 text-xs leading-relaxed transition ${
                      active
                        ? "border-[#0058BE] font-semibold text-[#0058BE]"
                        : "border-[#C6C6CD] text-gray-500 hover:text-[#45464D]"
                    }`}
                  >
                    {label}
                  </a>
                ))}
              </div>
            </div>

            <div className="rounded-2xl bg-[#0B0B14] p-6">
              <p className="mb-4 text-xs font-semibold uppercase tracking-wide text-gray-400">
                Related Resources
              </p>
              <div className="flex flex-col gap-4">
                {relatedResources.map(({ tag, title }) => (
                  <div key={title}>
                    <p className="text-[10px] font-semibold uppercase tracking-wide text-[#7C93FF]">
                      {tag}
                    </p>
                    <p className="mt-1 text-sm font-medium text-white">
                      {title}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
