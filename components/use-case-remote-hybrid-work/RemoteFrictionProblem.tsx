import { XCircle, CheckCircle2, CloudOff, Share2 } from "lucide-react";

const disconnected = [
  "Information trapped in siloed threads",
  "Context loss during timezone shifts",
  "Constant status ping-pong fatigue",
];

const connected = [
  "AI-synthesized daily team feed",
  "Visual timezone overlap intelligence",
  "Automated async standup workflows",
];

export default function RemoteFrictionProblem() {
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

      <section className="bg-white px-6 py-20 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="fade-up text-center text-3xl font-bold text-[#1F2937] md:text-[38px]">
            The Remote Friction Problem
          </h2>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            <div
              className="fade-up relative overflow-hidden rounded-2xl border border-[#ECECF4] bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-1.5 hover:shadow-lg"
            >
              <CloudOff
                className="pointer-events-none absolute -right-4 -top-4 text-[#F1F0FB]"
                size={110}
                strokeWidth={1.2}
              />

              <div className="relative flex items-center gap-2.5">
                <XCircle size={20} className="text-[#EF4444]" strokeWidth={2} />
                <h3 className="text-lg font-semibold text-[#EF4444]">
                  Disconnected Communication
                </h3>
              </div>

              <ul className="relative mt-6 space-y-3">
                {disconnected.map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <span className="mt-0.5 text-sm font-bold text-[#9CA3AF]">
                      _
                    </span>
                    <span className="text-[15px] leading-6 text-[#4B5563]">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div
              className="fade-up relative overflow-hidden rounded-2xl bg-[#5B5FEF] p-8 shadow-sm transition duration-300 hover:-translate-y-1.5 hover:shadow-lg"
              style={{ animationDelay: ".12s" }}
            >
              <Share2
                className="pointer-events-none absolute -right-4 -top-4 text-white/15"
                size={110}
                strokeWidth={1.2}
              />

              <div className="relative flex items-center gap-2.5">
                <CheckCircle2 size={20} className="text-white" strokeWidth={2} />
                <h3 className="text-lg font-semibold text-white">
                  Connected Remote Coordination
                </h3>
              </div>

              <ul className="relative mt-6 space-y-3">
                {connected.map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <span className="mt-0.5 text-sm font-bold text-white/70">
                      +
                    </span>
                    <span className="text-[15px] leading-6 text-white/90">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
