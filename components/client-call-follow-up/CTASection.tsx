import React from "react";
import Link from "next/link";
import { Plus_Jakarta_Sans } from "next/font/google";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const CTASection = () => {
  return (
    <section className="w-full bg-slate-900 py-24 flex justify-center">
      <div className="w-full max-w-[800px] px-6 flex flex-col items-center text-center gap-8">
        <h2 className={`${plusJakartaSans.className} text-white text-3xl lg:text-4xl font-extrabold`}>
          Improve every client follow-up
        </h2>
        <p className="text-slate-300 text-lg font-normal font-['Inter'] leading-relaxed max-w-[650px]">
          See how Zoiko Sema turns client calls into clear recaps, captured commitments, owner-assigned follow-ups, CRM-ready notes, and governed external sharing.
        </p>
        <div className="flex flex-row items-center gap-4 pt-4">
          <Link href="/get-a-demo" className="px-8 py-3.5 bg-blue-600 hover:bg-blue-700 transition-colors rounded-full flex justify-center items-center shadow-lg shadow-blue-900/50">
            <span className={`${plusJakartaSans.className} text-white text-sm font-semibold`}>Get a demo</span>
          </Link>
          <Link href="/contact-sales" className="px-8 py-3.5 bg-white hover:bg-slate-50 transition-colors rounded-full flex justify-center items-center text-slate-900">
            <span className={`${plusJakartaSans.className} text-sm font-semibold`}>Talk to sales</span>
          </Link>
        </div>
      </div>
    </section>
  );
};
