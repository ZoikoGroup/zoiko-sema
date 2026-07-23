import React from "react";

export default function WhyChooseUs() {
  return (
    <section className="bg-white text-[#1E293B] px-6 py-20 animate-fade-up">
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-12">
          Why Marketing Teams Choose Zoiko Sema
        </h2>

        <div className="flex items-center justify-center gap-10 mt-5">
          <div>
            <img src="/marketing/Disconnected.png" alt="Image" />
          </div>
          <div>
            <img src="/marketing/Connected.png" alt="Image" />
          </div>
        </div>
      </div>
    </section>
  );
}
