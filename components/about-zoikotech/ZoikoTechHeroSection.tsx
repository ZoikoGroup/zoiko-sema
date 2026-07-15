"use client"

import { useRouter } from "next/navigation";

export default function ZoikoTechHeroSection() {
  const router = useRouter();
  return (
    <section className="bg-[#0B1330] px-6 py-16 sm:px-10 lg:px-16">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 lg:grid-cols-2">
        <div>
          <p className="mb-4 text-xs font-semibold uppercase tracking-[2px] text-[#7C93FF]">
            Company
          </p>
          <h1 className="text-4xl font-bold leading-tight text-white sm:text-[48px]">
            The technology company{" "}
            <span className="text-[#7C93FF]">behind Zoiko Sema.</span>
          </h1>
          <p className="mt-5 max-w-md text-sm leading-relaxed text-[#AEB7CC]">
            Zoiko Tech builds product infrastructure for secure, context-aware
            business communication, governed AI workflows, admin-controlled
            collaboration, and enterprise-ready customer journeys.
          </p>

          <div className="mt-7 flex flex-wrap items-center gap-3">
            <button onClick={()=>router.push("/")}
             className="rounded-xl bg-[#4F63F0] cursor-pointer px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#3E51DE]">
              Explore Zoiko Sema
            </button>
            <button onClick={()=>router.push("/contact")}
            className="rounded-xl bg-white px-6 py-3 text-sm cursor-pointer font-semibold text-[#0B1330] transition hover:bg-gray-100">
              Contact Team
            </button>
          </div>

          <p className="mt-6 max-w-sm text-xs leading-relaxed text-[#7C879E]">
            A product-focused technology organization. Company details are published only
            when verified and approved.
          </p>
        </div>

        <div className="overflow-hidden rounded-2xl">
          <img
            src="/about-zoikotech/hero.png"
            alt="Zoiko Tech team in a meeting using Zoiko Sema"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
