export default function WhatsNewHero() {
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

      <section className="bg-white px-6 pb-16 pt-20 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-3xl text-center">
          <span className="fade-up inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[2px] text-[#4F63F0]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#4F63F0]" />
            Product Updates
          </span>

          <h1
            className="fade-up mt-5 text-4xl font-bold leading-tight text-[#1F2937] md:text-[42px]"
            style={{ animationDelay: ".08s" }}
          >
            See what&apos;s new in Zoiko Sema.
          </h1>

          <p
            className="fade-up mx-auto mt-6 max-w-2xl text-[17px] leading-8 text-[#6B7280]"
            style={{ animationDelay: ".16s" }}
          >
            Shipped features, phased rollouts, admin changes, developer
            updates, and deprecations — with plain availability and a clear
            next step.
          </p>

          <div className="fade-up mt-8" style={{ animationDelay: ".24s" }}>
            <a
              href="#featured-release"
              className="inline-block rounded-full bg-[#4F63F0] px-7 py-3 text-sm font-semibold text-white transition hover:bg-[#4053E6]"
            >
              View latest update
            </a>
          </div>

          <p
            className="fade-up mx-auto mt-6 max-w-2xl text-xs italic leading-6 text-[#9CA3AF]"
            style={{ animationDelay: ".3s" }}
          >
            Availability can vary by plan, platform, region, workspace
            policy, role, and rollout cohort. Each update states its
            conditions.
          </p>
        </div>
      </section>
    </>
  );
}
