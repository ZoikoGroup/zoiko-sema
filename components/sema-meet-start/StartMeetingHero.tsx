import { Play, CheckCircle2 } from "lucide-react";

const checklist = [
  { title: "Workspace policy applied", detail: "Inherited from org defaults" },
  { title: "Recording off by default", detail: "Enable only when permitted" },
  { title: "AI review required", detail: "No autonomous output sharing" },
  { title: "Idempotent room creation", detail: "No duplicate rooms on retry" },
];

export default function StartMeetingHero() {
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
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-[#8FA3FF]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#3DD68C]" />
              Instant Meeting · Sema Meet
            </span>

            <h1 className="mt-5 text-4xl font-bold leading-tight text-white md:text-[44px]">
              One action.
              <br />
              <span className="text-[#4F63F0]">One trusted room.</span>
            </h1>

            <p className="mt-6 max-w-lg text-lg leading-8 text-[#C8C8C8]">
              Start an instant Sema meeting from your workspace. Workspace
              context, recording and AI policy, device readiness, and
              governed invites — resolved before the room goes live.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="/start-free"
                className="flex items-center gap-2 rounded-full bg-[#4F63F0] px-7 py-3 text-sm font-semibold text-white transition hover:bg-[#4053E6]"
              >
                <Play size={15} fill="currentColor" />
                Start a Meeting
              </a>

              <a
                href="/login"
                className="rounded-full bg-white/10 px-7 py-3 text-sm font-semibold text-white transition hover:bg-white/15"
              >
                Sign in first
              </a>
            </div>

            <div className="mt-9 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {checklist.map((item, index) => (
                <div
                  key={item.title}
                  className="fade-up flex items-start gap-2.5 rounded-xl bg-white/5 p-4 transition duration-300 hover:bg-white/10"
                  style={{ animationDelay: `${0.2 + index * 0.08}s` }}
                >
                  <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-[#3DD68C]" strokeWidth={2} />
                  <div>
                    <p className="text-sm font-semibold text-white">{item.title}</p>
                    <p className="mt-0.5 text-xs leading-5 text-[#9AA3C0]">{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div
            className="fade-up delay-1 overflow-hidden rounded-2xl border border-white/10 shadow-2xl"
          >
            <img
              src="/sema-meet/start/hero-preflight.png"
              alt="Start an instant Sema meeting"
              className="w-full object-cover"
            />
          </div>
        </div>
      </section>
    </>
  );
}
