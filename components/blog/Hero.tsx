"use client"

import { useRouter } from "next/navigation";

export default function Hero() {
  const router = useRouter();
  return (
    <section className="bg-[#11163C] px-6 py-24 sm:px-10 lg:px-16">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 lg:grid-cols-2">
        <div>
          <span className="mb-5 inline-block rounded-full border border-white/15 bg-[#D8E2FF] px-4 py-1.5 text-xs font-semibold uppercase tracking-[1px] text-[#3457E8]">
            BLOG
          </span>
          <h1 className="text-4xl font-bold leading-tight text-white max-w-150 md:text-[42px]">
            Insights for clearer, safer, and more productive team communication.
          </h1>
          <p className="mt-5 max-w-130 text-[18px] leading-relaxed text-[#C8C8C8]">
            Deep dives into enterprise messaging, video collaboration playbooks,
            and the future of AI-driven workflow governance.
          </p>

          <div className="mt-7 flex flex-wrap items-center gap-3">
            <a href="#latest"
            className="rounded-full bg-[#4F63F0] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#3E51DE]">
              Read Latest Articles
            </a>
            <button onClick={()=> router.push('/resources')}
            className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#0B1330] transition hover:bg-gray-100">
              Explore All Resources
            </button>
          </div>
        </div>

        <div className="overflow-hidden border border-[#EBE8F4] rounded-2xl">
          <img
            src="/blog/hero.png"
            alt="image"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
