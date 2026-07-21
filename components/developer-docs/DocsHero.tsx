import Link from "next/link";

export default function DocsHero() {
  return (
    <>
      <style>{`
        @keyframes fadeUp{
          from{
            opacity:0;
            transform:translateY(40px);
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

        .delay-1{animation-delay:.15s;}
      `}</style>

      <section className="bg-[#11163C] px-6 py-20 sm:px-10 lg:px-16">
        <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">
          <div className="fade-up">
            <span className="inline-block rounded-full bg-[#DDE5FF] px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-[#3457E8]">
              Developer Docs
            </span>

            <h1 className="mt-5 max-w-xl text-4xl font-bold leading-tight text-white md:text-[44px]">
              Build secure integrations on Zoiko Sema
            </h1>

            <p className="mt-6 max-w-lg text-lg leading-8 text-[#C8C8C8]">
              Connect enterprise messaging, virtual meetings, and AI-powered
              summaries into your workflows with our robust suite of APIs and
              SDKs.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="#docs" className="inline-flex items-center justify-center rounded-full bg-[#4F63F0] px-7 py-3 text-sm font-semibold text-white transition hover:bg-[#4053E6]">
                View Docs
              </Link>

              <Link href="#quickstart" className="inline-flex items-center justify-center rounded-full bg-white px-7 py-3 text-sm font-semibold text-[#11163C] transition hover:bg-gray-100">
                Quickstart
              </Link>
            </div>
          </div>

          <div className="fade-up delay-1 overflow-hidden rounded-2xl border border-white/10">
            <img
              src="/developer-docs/hero.png"
              alt="Developer"
              className="w-full object-cover"
            />
          </div>
        </div>
      </section>
    </>
  );
}
