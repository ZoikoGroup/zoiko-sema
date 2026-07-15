import React from "react";
import Image from "next/image";

export default function RolesPlansSection() {

  return (
    <section className="w-full bg-white py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col items-center gap-12">
        
        {/* Header */}
        <div className="max-w-3xl text-center flex flex-col items-center gap-4">
          <span className="text-[#4F46E5] text-xs font-bold font-['Plus_Jakarta_Sans'] uppercase leading-5 tracking-widest">
            Roles & plans
          </span>
          <h2 className="text-[#1E1B4B] text-3xl lg:text-4xl font-extrabold font-['Plus_Jakarta_Sans'] leading-tight">
            What each plan can report
          </h2>
          <p className="text-[#475569] text-base font-normal font-['Inter'] leading-7 max-w-2xl mt-2">
            Proposed plan-gate matrix — final entitlements confirmed by Commercial. Locked capabilities show a clear upgrade or request access route.
          </p>
        </div>

        {/* Pricing/Plan Image */}
        <div className="w-full max-w-[1050px] relative flex justify-center">
            <Image 
              src="/insights/hero-dashboard.png"
              alt="Roles and Plans"
              width={1050}
              height={500}
              className="w-full h-auto"
              unoptimized
            />
        </div>

      </div>
    </section>
  );
}
