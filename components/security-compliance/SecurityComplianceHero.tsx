import Link from "next/link";

export default function SecurityComplianceHero() {
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

      <section className="bg-slate-900 px-6 py-18 sm:px-10 lg:px-16 overflow-hidden">
        <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">
          <div className="fade-up flex flex-col justify-start items-start gap-3.5">
            <div className="flex flex-col justify-start items-start">
              <span className="text-blue-400 text-xs font-medium font-['Plus_Jakarta_Sans'] uppercase leading-5 tracking-widest">
                Security &amp; Compliance
              </span>
            </div>

            <div className="pt-px flex flex-col justify-start items-start">
              <h1 className="text-white text-4xl font-extrabold font-['Hanken_Grotesk'] leading-[52px] md:text-5xl md:leading-[56px]">
                Enterprise security and governance built into every workspace.
              </h1>
            </div>

            <div className="max-w-[520px] pt-1 flex flex-col justify-start items-start">
              <p className="text-white/80 text-lg font-normal font-['Inter'] leading-7">
                Show how Zoiko Sema helps organizations manage identity, access, communication
                security, AI governance, compliance workflows, audit readiness, and operational trust
                from one unified control layer.
              </p>
            </div>

            <div className="pt-3 inline-flex justify-start items-start gap-3 flex-wrap">
              <Link
                href="/pricing"
                className="px-6 py-3 bg-blue-600 rounded-full text-white text-sm font-bold font-['Plus_Jakarta_Sans'] leading-5 transition hover:bg-blue-500 shadow-md"
              >
                Start free
              </Link>

              <Link
                href="/get-a-demo"
                className="px-6 py-3 bg-white rounded-full text-slate-900 text-sm font-bold font-['Plus_Jakarta_Sans'] leading-5 transition hover:bg-slate-100 shadow-md"
              >
                Get a demo
              </Link>
            </div>
          </div>

          <div className="fade-up delay-1 relative flex justify-center items-center">
            <div className="absolute inset-0 bg-sky-700/10 rounded-full blur-3xl" />
            <img
              src="/security-and-compliance/ai-summary-draft.png"
              alt="Enterprise security and governance"
              className="w-full h-96 relative rounded-xl shadow-2xl border border-neutral-300/30 object-cover"
            />
          </div>
        </div>
      </section>
    </>
  );
}
