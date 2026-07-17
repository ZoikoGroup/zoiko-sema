import { ShieldCheck } from "lucide-react";

export default function TimeTrackingHero() {
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

      <section className="bg-[#F3F2FD] px-6 py-20 sm:px-10 lg:px-16">
        <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">
          <div className="fade-up">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-[#4F63F0] px-4 py-1.5 text-xs font-bold text-white">
              <ShieldCheck size={13} strokeWidth={2.25} />
              Enterprise Verified
            </span>

            <h1 className="mt-5 text-4xl font-bold leading-tight text-[#1F2937] md:text-[44px]">
              Accurate Workforce
              <br />
              Verification. Governed
              <br />
              by Intelligence.
            </h1>

            <p className="mt-6 max-w-lg text-lg leading-8 text-[#6B7280]">
              Transform manual time tracking into institutional security with
              our high-precision workforce verification engine. Built for
              the modern enterprise to ensure compliance, trust, and
              operational excellence.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="/start-free"
                className="rounded-lg bg-[#4F63F0] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#4053E6]"
              >
                Get Started
              </a>

              <a
                href="/get-a-demo"
                className="rounded-lg bg-[#F3F4F6] px-6 py-3 text-sm font-semibold text-[#1F2937] transition hover:bg-[#E5E7EB]"
              >
                Request Demo
              </a>
            </div>
          </div>

          <div
            className="fade-up delay-1 overflow-hidden rounded-2xl  transition duration-300 hover:-translate-y-1"
          >
            <img
              src="/zoikotime/time-tracking/hero.png"
              alt="Workforce verification engine"
              className="w-full object-cover"
            />
          </div>
        </div>
      </section>
    </>
  );
}
