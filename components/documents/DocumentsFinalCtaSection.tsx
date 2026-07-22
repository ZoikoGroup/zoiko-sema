"use client"
import { ArrowRight } from "lucide-react";

export default function DocumentsFinalCtaSection() {
  return (
    <section className="bg-[#6C5CE7] px-6 py-20 sm:px-10 lg:px-16">
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

      <div className="mx-auto max-w-3xl text-center">
        <h2
          className="fade-in-item text-4xl font-extrabold leading-snug text-white sm:text-[42px]"
          style={{ animationDelay: "0ms" }}
        >
          Ready to bring your knowledge
          <br />
          into one governed workspace?
        </h2>
        <p
          className="fade-in-item mx-auto mt-4 text-[17px] leading-relaxed text-[#C6B6FA]"
          style={{ animationDelay: "100ms" }}
        >
          Start free. Deploy securely. Scale with governance already built in.
        </p>

        <div
          className="fade-in-item mt-8 flex flex-wrap items-center justify-center gap-3"
          style={{ animationDelay: "200ms" }}
        >
          <a href="/start-free">
          <button className="flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-[#6C5CE7] transition hover:bg-gray-100">
            Start free
            <ArrowRight size={16} />
          </button></a>
          <a href="/get-a-demo">
          <button className="rounded-full border border-white/40 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10">
            Get a demo
          </button></a>
        </div>
      </div>
    </section>
  );
}
