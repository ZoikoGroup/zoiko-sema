export default function Features() {
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

      {/* FEATURED */}
      <section className="bg-[#F6F4FD] px-6 py-20 sm:px-10 lg:px-16">
        <div className="mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-2">
          <div className="fade-up delay-3 overflow-hidden rounded-2xl">
            <img
              src="/customer-stories/feature.png"
              alt="image"
              className="w-full object-cover"
            />
          </div>

          <div className="fade-up delay-4">
            <span className="rounded-full bg-white px-4 py-1 text-xs font-semibold uppercase tracking-wide text-[#3457E8] shadow-sm">
              Customer Story
            </span>

            <h2 className="mt-6 max-w-md text-3xl font-bold italic leading-relaxed text-[#111827]">
              “Zoiko Sema transformed how our global engineering teams
              synchronize. Decisions that used to take days are now finalized in
              minutes.”
            </h2>

            <button className="mt-8 flex items-center gap-2 text-sm font-semibold text-[#3457E8] transition hover:gap-3">
              Read the full case study
              <span>→</span>
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
