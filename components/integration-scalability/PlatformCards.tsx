import { Gem, Webhook, Plus, Copy } from "lucide-react";

const events = [
  {
    status: "200",
    statusClass: "bg-emerald-100 text-emerald-700",
    method: "POST",
    path: "/v1/events/customer.created",
    meta: "45ms",
    metaClass: "text-slate-400",
  },
  {
    status: "200",
    statusClass: "bg-emerald-100 text-emerald-700",
    method: "POST",
    path: "/v1/events/invoice.paid",
    meta: "32ms",
    metaClass: "text-slate-400",
  },
  {
    status: "503",
    statusClass: "bg-orange-100 text-orange-700",
    method: "POST",
    path: "/v1/events/subscription.ended",
    meta: "Retry 1/5",
    metaClass: "text-orange-500",
  },
];

export default function PlatformCards() {
  return (
    <section className="bg-[#F3F2FD] px-6 py-20 md:px-16">
      <style>{`
        @keyframes cardsFadeUp {
          from { opacity: 0; transform: translateY(22px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .cards-panel {
          opacity: 0;
          animation: cardsFadeUp 0.65s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }
        .cards-panel:nth-child(1) { animation-delay: 0.05s; }
        .cards-panel:nth-child(2) { animation-delay: 0.2s; }
        .cards-row {
          opacity: 0;
          animation: cardsFadeUp 0.5s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }
        @media (prefers-reduced-motion: reduce) {
          .cards-panel, .cards-row {
            animation: none !important;
            opacity: 1 !important;
            transform: none !important;
          }
        }
      `}</style>

      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-2">
        {/* API Management card */}
        <div className="cards-panel rounded-2xl bg-white p-8 shadow-[0px_4px_20px_0px_#0000001A]">
          <div className="flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#0B0E2E]">
              <Gem className="h-5 w-5 text-white" strokeWidth={1.75} />
            </span>
            <h3 className="text-lg font-semibold text-slate-900">
              API Management
            </h3>
          </div>

          <p className="mt-4 text-sm leading-relaxed text-slate-500">
            Provision granular keys, set intelligent rate limits, and analyze
            developer usage in one secure console.
          </p>

          <div className="mt-6 rounded-xl bg-slate-50 p-4">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-semibold uppercase tracking-wide text-slate-400">
                Production Keys
              </span>
              <Plus className="h-4 w-4 text-slate-400" />
            </div>

            <div className="mt-3 flex items-center justify-between rounded-lg bg-white px-3 py-2.5">
              <code className="font-mono text-xs text-slate-600">
                zs_live_********98f2
              </code>
              <Copy className="h-3.5 w-3.5 shrink-0 text-slate-400" />
            </div>

            <div className="mt-4 h-1.5 w-full overflow-hidden rounded-full bg-slate-200">
              <div className="h-full w-[65%] rounded-full bg-indigo-600" />
            </div>

            <div className="mt-2 flex items-center justify-between text-[11px] text-slate-400">
              <span>65% Monthly Limit</span>
              <span>124.5k Calls</span>
            </div>
          </div>
        </div>

        {/* Webhooks & Events card */}
        <div className="cards-panel rounded-2xl bg-white p-8 shadow-[0_1px_3px_rgba(15,23,42,0.06)]">
          <div className="flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-600">
              <Webhook className="h-5 w-5 text-white" strokeWidth={1.75} />
            </span>
            <h3 className="text-lg font-semibold text-slate-900">
              Webhooks &amp; Events
            </h3>
          </div>

          <p className="mt-4 text-sm leading-relaxed text-slate-500">
            Zero-loss event delivery with automatic retries, backoff
            strategies, and full audit logging.
          </p>

          <div className="mt-6">
            {events.map((event, idx) => (
              <div
                key={event.path}
                className={`cards-row flex items-center gap-3 py-3 ${
                  idx !== events.length - 1 ? "border-b border-slate-100" : ""
                }`}
              >
                <span
                  className={`rounded px-1.5 py-0.5 font-mono text-[10px] font-semibold ${event.statusClass}`}
                >
                  {event.status}
                </span>
                <span className="flex-1 truncate font-mono text-xs text-slate-700">
                  <span className="text-slate-400">{event.method}</span>{" "}
                  {event.path}
                </span>
                <span className={`shrink-0 text-[11px] ${event.metaClass}`}>
                  {event.meta}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
