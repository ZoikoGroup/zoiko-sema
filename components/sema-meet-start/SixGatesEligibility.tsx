import { UserCheck, Hash, ShieldCheck, Zap, Settings, Play, CheckCircle2 } from "lucide-react";

const gates = [
  {
    title: "Authenticated",
    icon: UserCheck,
    pass: "Continue with account",
    recovery: "Sign in → return to intent",
  },
  {
    title: "Workspace selected",
    icon: Hash,
    pass: "Policy loaded from workspace",
    recovery: "Choose or create workspace",
  },
  {
    title: "Host role allowed",
    icon: ShieldCheck,
    pass: "Open setup screen",
    recovery: "Request access or Join instead",
  },
  {
    title: "Feature entitled",
    icon: Zap,
    pass: "All controls available",
    recovery: "Plan gate with upgrade route",
  },
  {
    title: "Policy service ready",
    icon: Settings,
    pass: "Effective settings shown",
    recovery: "Retry + Status link shown",
  },
  {
    title: "Room ready",
    icon: Play,
    pass: "Idempotent creation begins",
    recovery: "Input preserved for recovery",
  },
];

export default function SixGatesEligibility() {
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
          <div className="fade-up text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-[#8FA3FF]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#3DD68C]" />
              Eligibility Check
            </span>

            <h2 className="mt-4 text-3xl font-bold text-white md:text-[38px]">
              Six gates. Every one recoverable.
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-[15px] leading-7 text-[#9AA3C0]">
              Identity, workspace, role, entitlement, and policy are resolved
              server-side before setup opens. Each gate has a safe pass and a
              recovery path — nothing is a dead end.
            </p>
          </div>

          <div className="mt-14 grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-6">
            {gates.map((gate, index) => {
              const Icon = gate.icon;

              return (
                <div
                  key={gate.title}
                  className="fade-up text-center"
                  style={{ animationDelay: `${index * 0.08}s` }}
                >
                  <div className="relative mx-auto flex h-12 w-12 items-center justify-center rounded-xl border border-[#3B4270] transition duration-300 hover:-translate-y-1 hover:border-[#4F63F0]">
                    <Icon size={20} className="text-[#8FA3FF]" strokeWidth={1.75} />
                    <span className="absolute -right-1.5 -top-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-[#11163C]">
                      <CheckCircle2 size={14} className="text-[#3DD68C]" />
                    </span>
                  </div>

                  <h3 className="mt-4 text-sm font-semibold text-white">{gate.title}</h3>

                  <p className="mt-2 text-xs leading-5 text-[#3DD68C]">✓ {gate.pass}</p>

                  <p className="mt-1 text-xs leading-5 text-[#7D869F]">{gate.recovery}</p>
                </div>
              );
            })}
          </div>

          <div
            className="fade-up mt-14 overflow-hidden rounded-2xl shadow-2xl"
            style={{ animationDelay: ".5s" }}
          >
            <img
              src="/sema-meet/start/eligibility-team.png"
              alt="Team reviewing analytics before a meeting"
              className="w-full object-cover"
            />
          </div>
        </div>
      </section>
    </>
  );
}
