export default function ProductShowcase() {
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

      <section id="product-showcase" className="bg-[#F4F2FD] px-6 py-20 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-6xl">
          <div className="fade-up text-center">
            <span className="text-xs font-bold uppercase tracking-[2px] text-[#4F63F0]">
              Product Showcase
            </span>

            <h2 className="mt-3 text-3xl font-bold text-[#1F2937] md:text-[38px]">
              The Workforce Overview Command Center.
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-[17px] leading-8 text-[#6B7280]">
              One role-scoped dashboard — scope, KPIs, department coverage,
              and the review queue in a single frame.
            </p>
          </div>

          <div
            className="fade-up mt-14 overflow-hidden rounded-2xl"
            style={{ animationDelay: ".15s" }}
          >
            <img
              src="/zoikotime/workforce-overview/command-center.webp"
              alt="Workforce Overview command center"
              className="w-full object-cover"
            />
          </div>
        </div>
      </section>
    </>
  );
}
