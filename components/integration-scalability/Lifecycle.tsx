import { Search, CircleCheck, SlidersHorizontal, Rocket, TrendingUp } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Discover",
    description: "Map endpoints & auth",
  },
  {
    number: "02",
    icon: CircleCheck,
    title: "Authorize",
    description: "Secure OAuth flow",
  },
  {
    number: "03",
    icon: SlidersHorizontal,
    title: "Configure",
    description: "Logic & transforms",
  },
  {
    number: "04",
    icon: Rocket,
    title: "Enable",
    description: "Deploy to production",
  },
  {
    number: "05",
    icon: TrendingUp,
    title: "Monitor",
    description: "24/7 uptime tracking",
  },
];

export default function Lifecycle() {
  return (
    <section className="bg-[#0B0E2E] px-6 py-24 md:px-16">
      <style>{`
        @keyframes lifeFadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes lifeFadeIn {
          from { opacity: 0; transform: scale(0.97); }
          to { opacity: 1; transform: scale(1); }
        }
        @keyframes lineGrow {
          from { transform: scaleX(0); }
          to { transform: scaleX(1); }
        }
        .life-heading {
          opacity: 0;
          animation: lifeFadeUp 0.6s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }
        .life-step {
          opacity: 0;
          animation: lifeFadeUp 0.6s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }
        .life-step:nth-child(1) { animation-delay: 0.1s; }
        .life-step:nth-child(2) { animation-delay: 0.2s; }
        .life-step:nth-child(3) { animation-delay: 0.3s; }
        .life-step:nth-child(4) { animation-delay: 0.4s; }
        .life-step:nth-child(5) { animation-delay: 0.5s; }
        .life-line {
          transform-origin: left;
          animation: lineGrow 1.1s cubic-bezier(0.22, 1, 0.36, 1) forwards;
          animation-delay: 0.15s;
        }
        .life-image {
          opacity: 0;
          animation: lifeFadeIn 0.8s cubic-bezier(0.22, 1, 0.36, 1) forwards;
          animation-delay: 0.6s;
        }
        @media (prefers-reduced-motion: reduce) {
          .life-heading, .life-step, .life-line, .life-image {
            animation: none !important;
            opacity: 1 !important;
            transform: none !important;
          }
        }
      `}</style>

      <div className="mx-auto max-w-6xl text-center">
        <h2 className="life-heading text-2xl font-bold tracking-tight text-white sm:text-3xl">
          The Zero-Friction Lifecycle.
        </h2>
        <p className="life-heading mx-auto mt-3 max-w-xl text-[15px] leading-relaxed text-slate-400">
          From discovery to monitoring, every step is optimized for
          enterprise scale and operational excellence.
        </p>

        {/* Steps */}
        <div className="relative mx-auto mt-16 hidden max-w-5xl grid-cols-5 md:grid">
          <div className="life-line absolute left-[10%] right-[10%] top-8 h-px bg-slate-700" />
          {steps.map(({ number, icon: Icon, title, description }) => (
            <div key={number} className="life-step relative flex flex-col items-center px-2">
              <div className="relative">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-lg">
                  <Icon className="h-6 w-6 text-indigo-600" strokeWidth={1.75} />
                </div>
                <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-indigo-600 text-[10px] font-semibold text-white ring-2 ring-[#0B0E2E]">
                  {number}
                </span>
              </div>
              <h3 className="mt-4 text-sm font-semibold text-white">{title}</h3>
              <p className="mt-1 text-xs text-slate-400">{description}</p>
            </div>
          ))}
        </div>

        {/* Mobile steps (stacked) */}
        <div className="mx-auto mt-14 grid max-w-sm grid-cols-1 gap-8 md:hidden">
          {steps.map(({ number, icon: Icon, title, description }) => (
            <div key={number} className="life-step flex items-center gap-4 text-left">
              <div className="relative shrink-0">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white shadow-lg">
                  <Icon className="h-6 w-6 text-indigo-600" strokeWidth={1.75} />
                </div>
                <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-indigo-600 text-[10px] font-semibold text-white ring-2 ring-[#0B0E2E]">
                  {number}
                </span>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-white">{title}</h3>
                <p className="mt-0.5 text-xs text-slate-400">{description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Dashboard image */}
        <div className="life-image mx-auto mt-16 max-w-4xl overflow-hidden rounded-2xl border border-white/10 shadow-2xl">
          <img src="/integration-scalability/lifecycle.png"
            alt="Image"
            className="h-auto w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
