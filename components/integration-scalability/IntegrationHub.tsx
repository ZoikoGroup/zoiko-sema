import { Check } from "lucide-react";

const checklist = [
  "Universal Connector Engine",
  "Conflict Resolution Logic",
  "Auto-healing Synchronization",
];

export default function IntegrationHub() {
  return (
    <section className="bg-white px-6 py-20 md:px-16">
      <style>{`
        @keyframes hubFadeUp {
          from { opacity: 0; transform: translateY(22px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes hubFadeIn {
          from { opacity: 0; transform: scale(0.98); }
          to { opacity: 1; transform: scale(1); }
        }
        .hub-anim {
          opacity: 0;
          animation: hubFadeUp 0.65s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }
        .hub-anim-delay-1 { animation-delay: 0.08s; }
        .hub-anim-delay-2 { animation-delay: 0.16s; }
        .hub-check {
          opacity: 0;
          animation: hubFadeUp 0.5s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }
        .hub-check:nth-child(1) { animation-delay: 0.24s; }
        .hub-check:nth-child(2) { animation-delay: 0.32s; }
        .hub-check:nth-child(3) { animation-delay: 0.4s; }
        .hub-image {
          opacity: 0;
          animation: hubFadeIn 0.8s cubic-bezier(0.22, 1, 0.36, 1) forwards;
          animation-delay: 0.15s;
        }
        @media (prefers-reduced-motion: reduce) {
          .hub-anim, .hub-check, .hub-image {
            animation: none !important;
            opacity: 1 !important;
            transform: none !important;
          }
        }
      `}</style>

      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-14 lg:grid-cols-12 lg:gap-10">
        {/* Left column */}
        <div className="lg:col-span-5">
          <h2 className="hub-anim text-2xl font-bold leading-snug tracking-tight text-slate-900 sm:text-3xl">
            Integration Hub. Central control for global connections.
          </h2>

          <p className="hub-anim hub-anim-delay-1 mt-6 max-w-md text-[15px] leading-relaxed text-slate-500">
            Monitor every byte of data traversing your ecosystem. Our hub
            provides real-time visibility into sync status, data volume, and
            potential bottlenecks before they impact your users.
          </p>

          <ul className="mt-8 space-y-3">
            {checklist.map((item) => (
              <li key={item} className="hub-check flex items-center gap-3">
                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-indigo-600">
                  <Check className="h-3 w-3 text-white" strokeWidth={3} />
                </span>
                <span className="text-sm font-medium text-slate-800">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Right column - image */}
        <div className="hub-image lg:col-span-7">
          <div className="overflow-hidden rounded-2xl border border-slate-200 shadow-xl">
            <img src="/integration-scalability/hub.png"
              alt="Image"
              className="h-auto w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
