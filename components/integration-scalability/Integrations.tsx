import { Fingerprint, Calendar, AlignJustify, Workflow } from "lucide-react";

const integrations = [
  {
    icon: Fingerprint,
    title: "Identity & SSO",
    description: "Okta, Auth0, Active Directory, PingFederate.",
  },
  {
    icon: Calendar,
    title: "Calendar & Scheduling",
    description: "Google Calendar, Outlook, Calendly, iCloud.",
  },
  {
    icon: AlignJustify,
    title: "Cloud Storage",
    description: "AWS S3, Google Cloud, Azure Blob, Dropbox.",
  },
  {
    icon: Workflow,
    title: "Workflow Systems",
    description: "Zapier, Make.com, Workato, Tray.io.",
  },
];

export default function Integrations() {
  return (
    <section className="bg-[#F3F2FD] px-6 py-24 md:px-16">
      <style>{`
        @keyframes cardFadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .integ-heading {
          opacity: 0;
          animation: cardFadeUp 0.6s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }
        .integ-card {
          opacity: 0;
          animation: cardFadeUp 0.6s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }
        .integ-card:nth-child(1) { animation-delay: 0.05s; }
        .integ-card:nth-child(2) { animation-delay: 0.15s; }
        .integ-card:nth-child(3) { animation-delay: 0.25s; }
        .integ-card:nth-child(4) { animation-delay: 0.35s; }
        @media (prefers-reduced-motion: reduce) {
          .integ-heading, .integ-card {
            animation: none !important;
            opacity: 1 !important;
            transform: none !important;
          }
        }
      `}</style>

      <div className="mx-auto max-w-6xl">
        <h2 className="integ-heading text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
          Pre-built integrations for every layer.
        </h2>
        <p className="integ-heading mt-3 max-w-xl text-[15px] leading-relaxed text-slate-500">
          Eliminate technical debt with our library of native connectors
          designed for deep-stack compatibility.
        </p>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {integrations.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="integ-card rounded-2xl border border-slate-100 bg-white p-6 shadow-[0_1px_3px_rgba(15,23,42,0.06)] transition-transform duration-200 hover:-translate-y-1 hover:shadow-md"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-100">
                <Icon className="h-5 w-5 text-slate-700" strokeWidth={1.75} />
              </div>
              <h3 className="mt-6 text-[15px] font-semibold text-slate-900">
                {title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-500">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
