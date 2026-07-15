"use client";

import { useRouter } from "next/navigation";

export default function AboutHeroSection() {
  const router = useRouter();
  return (
    <section className="bg-[#0B1330] px-6 py-16 sm:px-10 lg:px-16">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 lg:grid-cols-2">
        <div>
          <p className="mb-4 text-xs font-semibold uppercase tracking-[2px] text-[#7C8CF8]">
            Company
          </p>
          <h1 className="text-4xl font-bold leading-tight text-white sm:text-[42px]">
            communication with{" "}
            <span className="text-[#7C93FF]">
              context, clarity, and control.
            </span>
          </h1>
          <p className="mt-5 max-w-md text-sm leading-relaxed text-[#AEB7CC]">
            Zoiko Sema helps teams move from messages and meetings to summaries,
            decisions, spaces, and follow-ups without losing context.
          </p>

          <div className="mt-7 flex flex-wrap items-center gap-3">
            <button onClick={()=>router.push('/products')}
            className="rounded-xl cursor-pointer bg-[#4F63F0] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#3E51DE]">
              Explore Product
            </button>
            <button className="rounded-xl cursor-pointer bg-white px-6 py-3 text-sm font-semibold text-[#0B1330] transition hover:bg-gray-100">
              Talk to sales
            </button>
          </div>

          <p className="mt-6 max-w-md text-xs leading-relaxed text-[#7C879E]">
            Built for teams that need communication to stay organized,
            searchable, governed, and actionable.
          </p>
        </div>

        <div className="overflow-hidden rounded-2xl">
          <img
            src="/about/hero.png"
            alt="Team member on a video call with organized context"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
