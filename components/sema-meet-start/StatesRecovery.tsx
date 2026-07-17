import { Lock, ShieldOff, Zap, AlertCircle, WifiOff, Layers, RefreshCcw, Clock } from "lucide-react";

const states = [
  {
    title: "Signed out",
    description: "Sign in or Create workspace → return to intent",
    icon: Lock,
    color: "#D97706",
  },
  {
    title: "No host permission",
    description: "Explain role requirement → Request access → Join/Schedule alternative",
    icon: ShieldOff,
    color: "#DC2626",
  },
  {
    title: "Plan gate",
    description: "Show benefit → Trial / Upgrade / Talk to sales → return to preserved setup",
    icon: Zap,
    color: "#4F63F0",
  },
  {
    title: "Policy unavailable",
    description: "Do not guess — show Retry + Status link. Never default to permissive.",
    icon: AlertCircle,
    color: "#D97706",
  },
  {
    title: "Offline / degraded",
    description: "Preserve setup locally → reconnect → idempotent retry → same room",
    icon: WifiOff,
    color: "#8FA3FF",
  },
  {
    title: "Multiple workspaces",
    description: "Explicit workspace chooser → preserve draft title and device preferences",
    icon: Layers,
    color: "#3DD68C",
  },
  {
    title: "Duplicate click / timeout",
    description: "Idempotency key returns same room — no duplicate meeting created",
    icon: RefreshCcw,
    color: "#8FA3FF",
  },
  {
    title: "Session expired",
    description: "Refresh or sign in → resume with preserved setup and idempotency token",
    icon: Clock,
    color: "#9CA3AF",
  },
];

export default function StatesRecovery() {
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
            <span className="inline-block rounded-full bg-white/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-[#8FA3FF]">
              States and Recovery
            </span>

            <h2 className="mt-4 text-3xl font-bold text-white md:text-[36px]">
              Every failure has a safe, no-loss recovery.
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-[15px] leading-7 text-[#9AA3C0]">
              Setup, workspace, device choices, and intent are preserved
              across all interruptions. Users never lose progress and never
              face a dead end.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {states.map((state, index) => {
              const Icon = state.icon;

              return (
                <div
                  key={state.title}
                  className="fade-up rounded-2xl border border-white/10 bg-white/5 p-6 transition duration-300 hover:-translate-y-1.5 hover:bg-white/[0.08]"
                  style={{ animationDelay: `${index * 0.07}s` }}
                >
                  <Icon size={20} style={{ color: state.color }} strokeWidth={2} />

                  <h3 className="mt-4 text-sm font-semibold text-white">{state.title}</h3>

                  <p className="mt-2 text-xs leading-5 text-[#9AA3C0]">{state.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
