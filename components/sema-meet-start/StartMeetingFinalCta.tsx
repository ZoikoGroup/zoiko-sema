import { Play, Check } from "lucide-react";

const chips = [
  "No marketing detour",
  "Intent preserved across sign-in",
  "Idempotent room creation",
  "Policy shown always",
  "No surveillance language",
];

export default function StartMeetingFinalCta() {
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

      <section className="bg-[#0B0F2E] px-6 py-20 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-3xl text-center">
          <span className="fade-up inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-[#3DD68C]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#3DD68C]" />
            Ready to Start
          </span>

          <h2 className="fade-up mt-5 text-3xl font-bold leading-tight text-white md:text-[38px]">
            One action.
            <br />
            One trusted room.
            <br />
            <span className="text-[#4F63F0]">Every time.</span>
          </h2>

          <p className="fade-up mx-auto mt-5 max-w-xl text-[15px] leading-7 text-[#9AA3C0]">
            Start free for instant meeting access. Get a demo for SSO,
            recording governance, AI controls, audit, and enterprise rollout.
          </p>

          <div className="fade-up mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              href="/start-free"
              className="flex items-center gap-2 rounded-full bg-[#4F63F0] px-7 py-3 text-sm font-semibold text-white transition hover:bg-[#4053E6]"
            >
              <Play size={15} fill="currentColor" />
              Start a Meeting
            </a>

            <a
              href="/get-a-demo"
              className="rounded-full bg-white/10 px-7 py-3 text-sm font-semibold text-white transition hover:bg-white/15"
            >
              Get a demo
            </a>
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
            {chips.map((chip, index) => (
              <span
                key={chip}
                className="fade-up flex items-center gap-1.5 text-xs text-[#9AA3C0]"
                style={{ animationDelay: `${0.2 + index * 0.06}s` }}
              >
                <Check size={13} className="text-[#3DD68C]" strokeWidth={2.5} />
                {chip}
              </span>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
