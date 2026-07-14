export default function BlogPage() {
  return (
    <>
      <style>{`
        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .fade-up {
          opacity: 0;
          animation: fadeUp .8s ease forwards;
        }

        .delay-1 {
          animation-delay: .15s;
        }

        .delay-2 {
          animation-delay: .3s;
        }

        .delay-3 {
          animation-delay: .45s;
        }

        .delay-4 {
          animation-delay: .6s;
        }
      `}</style>

      {/* HERO */}
      <section className="bg-[#11163C] px-6 py-20 sm:px-10 lg:px-16">
        <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div className="fade-up">
            <span className="inline-block rounded-full bg-[#D8E2FF] px-4 py-1.5 text-xs font-semibold uppercase tracking-[1px] text-[#3457E8]">
              Customer Stories
            </span>

            <h1 className="mt-5 max-w-xl text-4xl font-bold leading-tight text-white md:text-[42px]">
              See how teams turn communication into accountable outcomes.
            </h1>

            <p className="mt-6 max-w-lg text-lg leading-8 text-[#C8C8C8]">
              Explore how organizations use Zoiko Sema to bring messages,
              meetings, summaries, decisions, and follow-ups into one governed
              communication workspace.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <button className="rounded-full bg-[#4F63F0] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#4055e7]">
                Get Demo
              </button>

              <button className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#0B1330] transition hover:bg-gray-100">
                Read Customer Stories
              </button>
            </div>
          </div>

          <div className="fade-up delay-1 overflow-hidden rounded-2xl border border-[#EBE8F4]">
            <img
              src="/customer-stories/hero.png"
              alt="image"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>
      
    </>
  );
}
