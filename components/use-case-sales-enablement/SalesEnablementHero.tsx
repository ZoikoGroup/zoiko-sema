import { ArrowLeftRight, ShieldCheck, UsersRound } from "lucide-react";

const badges = [
  { label: "CRM Connected", icon: ArrowLeftRight },
  { label: "Human Reviewed AI", icon: ShieldCheck },
  { label: "Governed Collaboration", icon: UsersRound },
  { label: "Enterprise Ready", icon: ShieldCheck },
];

export default function SalesEnablementHero() {
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

      <section className="bg-[#F3F2FD] px-6 py-20 sm:px-10 lg:px-16">
        <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">
          <div className="fade-up">
            <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-[#4F63F0]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#4F63F0]" />
              Use Cases: Sales &amp; Enablement
            </span>

            <h1 className="mt-5 text-4xl font-bold leading-tight text-[#1F2937] md:text-[44px]">
              Turn every customer conversation into accountable follow-through.
            </h1>

            <p className="mt-6 max-w-lg text-lg leading-8 text-[#6B7280]">
              Show how Zoiko Sema connects meetings, reviewed AI summaries,
              customer commitments, follow-ups, approved content, CRM
              context, deal rooms, and implementation handoffs in one
              governed collaboration workspace.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-3">
              {badges.map((badge, index) => {
                const Icon = badge.icon;

                return (
                  <div
                    key={badge.label}
                    className="fade-up flex items-center gap-2 rounded-xl border border-[#E0E4FD] bg-white px-4 py-3 transition duration-300 hover:-translate-y-1 hover:shadow-md"
                    style={{ animationDelay: `${0.15 + index * 0.08}s` }}
                  >
                    <Icon size={16} className="shrink-0 text-[#4F63F0]" strokeWidth={2} />
                    <span className="text-sm font-semibold text-[#1F2937]">{badge.label}</span>
                  </div>
                );
              })}
            </div>
          </div>

          <div
            className="fade-up delay-1 overflow-hidden rounded-2xl shadow-xl transition duration-300 hover:-translate-y-1 hover:shadow-2xl"
          >
            <img
              src="/use-cases/sales-enablement/hero-dashboard.png"
              alt="Sales enablement workspace dashboard"
              className="w-full object-cover"
            />
          </div>
        </div>
      </section>
    </>
  );
}
