export default function VisualOverlapIntelligence() {
  return (
    <>
      <style>{`
        @keyframes fadeUp{
          from{
            opacity:0;
            transform:translateY(35px);
          }
          to{
            opacity:1;
            transform:translateY(0);
          }
        }

        .fade-up{
          opacity:0;
          animation:fadeUp .8s ease forwards;
        }
      `}</style>

      <section id="global-overlap" className="bg-[#F3F2FD] px-6 py-20 sm:px-10 lg:px-16">
        <div className="mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-2">
          <div className="fade-up">
            <span className="text-xs font-bold uppercase tracking-[2px] text-[#5B5FEF]">
              Global Alignment
            </span>

            <h2 className="mt-4 text-3xl font-bold text-[#1F2937] md:text-[36px]">
              Visual Overlap Intelligence
            </h2>

            <p className="mt-5 max-w-lg text-[17px] leading-8 text-[#6B7280]">
              Eliminate the guesswork of global collaboration. Map quiet
              hours, overlap windows, and active working slots across every
              continent in a single, intuitive timeline.
            </p>

            <a
              href="#global-overlap"
              className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-[#5B5FEF] transition hover:text-[#4B4FE0]"
            >
              Check global overlap
              <span aria-hidden>→</span>
            </a>
          </div>

          <div
            className="fade-up overflow-hidden"
            style={{ animationDelay: ".15s" }}
          >
            <img
              src="/use-cases/remote-hybrid-work/overlap-intelligence.png"
              alt="Timezone overlap visualization"
              className="w-full object-cover"
            />
          </div>
        </div>
      </section>
    </>
  );
}
