export default function FeaturedDownloads() {
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

      <section className="bg-[#11163C] px-6 py-20 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-6xl">
          <div className="fade-up flex flex-wrap items-end justify-between gap-4">
            <div>
              <h2 className="text-3xl font-bold text-white md:text-[34px]">
                Featured Downloads
              </h2>
              <p className="mt-2 text-[15px] text-[#9AA3C0]">
                High-priority assets for the current release cycle.
              </p>
            </div>

            <a
              href="#advanced-circuit-integrity"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#8FA3FF] transition hover:text-white"
            >
              View all
              <span aria-hidden>→</span>
            </a>
          </div>

          <div
            className="fade-up mt-10 overflow-hidden rounded-2xl transition duration-300 hover:-translate-y-1"
            style={{ animationDelay: ".15s" }}
          >
            <img
              src="/resources/downloads/featured-dashboard.png"
              alt=""
              className="w-full object-cover"
            />
          </div>
        </div>
      </section>
    </>
  );
}
