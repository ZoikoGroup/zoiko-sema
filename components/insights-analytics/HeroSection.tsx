import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="w-full bg-[#0F172A] py-16 lg:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between gap-12">

        {/* Text Content */}
        <div className="w-full lg:w-1/2 flex flex-col justify-start items-start gap-6">
          <div className="flex flex-col justify-start items-start gap-1">
            <span className="text-[#818CF8] text-xs font-bold font-['Plus_Jakarta_Sans'] uppercase tracking-widest">
              Insights & Analytics
            </span>
            <h1 className="text-white text-4xl lg:text-5xl font-extrabold font-['Plus_Jakarta_Sans'] leading-tight lg:leading-[57px]">
              See what helps<br />
              communication<br />
              move work<br />
              forward.
            </h1>
          </div>

          <p className="text-[#C7D2FE] text-lg font-normal font-['Inter'] leading-7 max-w-[520px]">
            Understand adoption, meeting-to-work follow-through, AI usage, guest access, and policy health through role-aware reporting — with clear metric definitions and privacy boundaries.
          </p>

          <div className="flex flex-wrap items-center gap-3">
            <Link
              href="/start-free"
              className="px-6 py-3 bg-[#4F46E5] hover:bg-[#4338CA] transition-colors rounded-full text-white text-sm font-bold font-['Plus_Jakarta_Sans']"
            >
              Start free
            </Link>
            <Link
              href="/get-a-demo"
              className="px-6 py-3 bg-white hover:bg-gray-50 transition-colors rounded-full text-[#1E1B4B] text-sm font-bold font-['Plus_Jakarta_Sans']"
            >
              Get a demo
            </Link>
            <Link
              href="#dashboard"
              className="px-6 py-3 rounded-full border border-white/40 hover:bg-white/10 transition-colors text-white text-sm font-bold font-['Plus_Jakarta_Sans']"
            >
              See the dashboard
            </Link>
          </div>

          <p className="text-indigo-300 text-xs font-normal font-['Inter'] leading-5 max-w-[480px]">
            Aggregate, permission-aware, methodology-defined, and designed{" "}
            <span className="text-white font-bold">without hidden employee scoring</span>.
          </p>
        </div>

        {/* Hero Image */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
          <div className="relative w-full max-w-[701px] aspect-[4/3] rounded-[20px] overflow-hidden shadow-2xl">
            {/* Using a placeholder since we don't have the exact image asset */}
            <Image
              src="/insights/product-proof-dashboard.png"
              alt="Insights and Analytics Dashboard Preview"
              fill
              className="object-cover"
              unoptimized
            />
          </div>
        </div>

      </div>
    </section>
  );
}
