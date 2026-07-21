export default function FeaturedRelease() {
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

      <section id="featured-release" className="bg-[#F3F2FD] px-6 py-16 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-2xl">
          <div
            className="fade-up rounded-2xl bg-white p-8 shadow-lg transition duration-300 hover:-translate-y-1 hover:shadow-xl"
          >
            <div className="flex flex-wrap gap-2">
              <span className="rounded-full bg-[#DCFCE7] px-3 py-1 text-xs font-bold text-[#16A34A]">
                Available
              </span>
              <span className="rounded-full bg-[#E7E8FD] px-3 py-1 text-xs font-bold text-[#4F63F0]">
                AI Meeting Summaries
              </span>
            </div>

            <h2 className="mt-4 text-xl font-bold leading-snug text-[#1F2937]">
              Reviewed follow-up drafts now include linked source moments
            </h2>

            <p className="mt-3 text-[15px] leading-7 text-[#6B7280]">
              Every drafted action item links back to the exact meeting
              moment it came from, so reviewers can verify before approving.
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              <span className="rounded-full bg-[#F3F4F6] px-3 py-1 text-xs font-medium text-[#4B5563]">
                All plans
              </span>
              <span className="rounded-full bg-[#F3F4F6] px-3 py-1 text-xs font-medium text-[#4B5563]">
                Web, desktop, mobile
              </span>
              <span className="rounded-full bg-[#FEF3C7] px-3 py-1 text-xs font-bold text-[#D97706]">
                Review recommended
              </span>
            </div>

            <p className="mt-5 text-xs text-[#9CA3AF]">Published Jul 14, 2026</p>
          </div>
        </div>
      </section>
    </>
  );
}
