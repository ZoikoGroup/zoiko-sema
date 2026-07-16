"use client"

import { useRouter } from "next/navigation";

export default function SemaFinalCtaSection() {
  const router = useRouter();
  return (
    <section className="bg-[#0B1330] px-6 py-20 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold leading-snug text-white sm:text-[32px]">
          See how Zoiko Sema keeps work communication connected
        </h2>
        <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-[#AEB7CC]">
          Explore the product, review use cases, or talk to the team about deploying
          Zoiko Sema for your organization.
        </p>

        <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
          <button onClick={()=>router.push("/products")}
          className="rounded-full cursor-pointer bg-[#4F63F0] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#3E51DE]">
            Explore Product
          </button>
          <button onClick={()=>router.push('/talk-to-sales')}
          className="rounded-full cursor-pointer bg-white px-6 py-3 text-sm font-semibold text-[#0B1330] transition hover:bg-gray-100">
            Talk to sales
          </button>
        </div>
      </div>
    </section>
  );
}
