import {
  Component,
  ListX,
  ClipboardList,
  ShieldCheck,
  TrendingUp,
  History,
  Sparkles,
  UserCheck,
  Lock,
  LogIn,
  CheckCircle2,
  Archive,
  SquarePen,
  ArchiveRestore,
  ExternalLink,
} from "lucide-react";

const stats = [
  {
    label: "Total Audit Events",
    value: "1.42M",
    icon: Component,
    tag: { text: "+12%", color: "#16A34A", icon: TrendingUp },
    barColor: "#4F63F0",
    barWidth: "70%",
  },
  {
    label: "Policy Compliance",
    value: "98.2%",
    icon: ListX,
    tag: { text: "Healthy", color: "#16A34A" },
    barColor: "#16A34A",
    barWidth: "98%",
  },
  {
    label: "Pending Reviews",
    value: "24",
    icon: ClipboardList,
    tag: { text: "Priority", color: "#DC2626" },
    barColor: "#DC2626",
    barWidth: "35%",
  },
  {
    label: "Compliance Score",
    value: "A+",
    icon: ShieldCheck,
    tag: { text: "Score", color: "#9CA3AF" },
    barColor: "#4F63F0",
    barWidth: "92%",
  },
];

const timeline = [
  {
    time: "TODAY, 10:42 AM",
    title: "Audit Event Recorded",
    description: "User logged into admin panel from unrecognized IP.",
    color: "#2563EB",
    icon: History,
  },
  {
    time: "TODAY, 10:45 AM",
    title: "AI Risk Review",
    description: 'AI classified as "Low Risk" based on historical patterns.',
    color: "#7C3AED",
    icon: Sparkles,
  },
  {
    time: "TODAY, 11:00 AM",
    title: "Human Approval",
    description: "Approved by Alexander Vance (Compliance Lead).",
    color: "#2563EB",
    icon: UserCheck,
  },
  {
    time: "YESTERDAY",
    title: "Legal Hold Applied",
    description: "Workspace #98124 locked for external audit.",
    color: "#DC2626",
    icon: Lock,
  },
];

const pipeline = [
  { label: "Source", icon: LogIn },
  { label: "Validation", icon: CheckCircle2, active: true },
  { label: "Evidence", icon: Archive },
  { label: "Review", icon: SquarePen },
  { label: "Archive", icon: ArchiveRestore },
];

const policies = [
  { title: "Data Retention v2.4", status: "ACTIVE", effective: "Jan 20, 2024" },
  { title: "Access Control", status: "ACTIVE", effective: "Dec 05, 2023" },
];

export default function ComplianceDashboardOverview() {
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

        @keyframes growWidth{
          from{ width: 0%; }
        }

        .grow-width{
          animation: growWidth 1s ease forwards;
        }

        .stat-card, .policy-card{ transition: transform .3s ease, box-shadow .3s ease; }
        .stat-card:hover, .policy-card:hover{ transform: translateY(-3px); box-shadow: 0 12px 28px rgba(15,15,40,0.08); }
      `}</style>

      <section className="bg-[#F4F2FD] px-6 py-20 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-6xl">
          {/* Stat cards */}
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              const TagIcon = stat.tag.icon;

              return (
                <div
                  key={stat.label}
                  className="stat-card fade-up rounded-2xl bg-white p-5 shadow-sm"
                  style={{ animationDelay: `${index * 0.08}s` }}
                >
                  <div className="flex items-center justify-between">
                    <Icon size={18} className="text-[#1F2937]" strokeWidth={2} />
                    <span
                      className="flex items-center gap-1 text-xs font-semibold"
                      style={{ color: stat.tag.color }}
                    >
                      {TagIcon && <TagIcon size={12} strokeWidth={2.5} />}
                      {stat.tag.text}
                    </span>
                  </div>

                  <p className="mt-4 text-[11px] font-semibold uppercase tracking-wide text-[#9CA3AF]">
                    {stat.label}
                  </p>

                  <p className="mt-1 text-2xl font-bold text-[#1F2937]">{stat.value}</p>

                  <div className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-[#E5E7EB]">
                    <div
                      className="grow-width h-full rounded-full"
                      style={{ width: stat.barWidth, backgroundColor: stat.barColor }}
                    />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Timeline + Pipeline */}
          <div className="mt-6 grid gap-6 lg:grid-cols-2">
            <div
              className="fade-up rounded-2xl bg-white p-7 shadow-sm lg:row-span-2"
              style={{ animationDelay: ".1s" }}
            >
              <div className="flex items-center gap-2">
                <History size={17} className="text-[#4B5563]" strokeWidth={2} />
                <h3 className="text-sm font-semibold text-[#1F2937]">Evidence Timeline</h3>
              </div>

              <div className="mt-6 space-y-6">
                {timeline.map((entry) => {
                  const Icon = entry.icon;

                  return (
                    <div key={entry.title} className="flex gap-3.5">
                      <span
                        className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border-2 bg-white"
                        style={{ borderColor: entry.color }}
                      >
                        <Icon size={12} style={{ color: entry.color }} strokeWidth={2.25} />
                      </span>

                      <div>
                        <p className="text-xs font-semibold" style={{ color: entry.color }}>
                          {entry.time}
                        </p>
                        <p className="mt-1 text-[15px] font-semibold text-[#1F2937]">
                          {entry.title}
                        </p>
                        <p className="mt-0.5 text-sm leading-6 text-[#6B7280]">
                          {entry.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="fade-up rounded-2xl bg-white p-7 shadow-sm" style={{ animationDelay: ".18s" }}>
              <h3 className="text-sm font-semibold text-[#1F2937]">Compliance Pipeline</h3>

              <div className="relative mt-8 flex items-start justify-between">
                {(() => {
                  const trackStart = 10;
                  const trackEnd = 90;
                  const activeIndex = pipeline.findIndex((step) => step.active);
                  const progress =
                    trackStart +
                    (activeIndex / (pipeline.length - 1)) * (trackEnd - trackStart);

                  return (
                    <>
                      <div
                        className="absolute top-4.75 h-px bg-[#4F63F0]"
                        style={{ left: `${trackStart}%`, width: `${progress - trackStart}%` }}
                      />
                      <div
                        className="absolute top-4.75 h-px bg-[#E5E7EB]"
                        style={{ left: `${progress}%`, width: `${trackEnd - progress}%` }}
                      />
                    </>
                  );
                })()}

                {pipeline.map((step) => {
                  const Icon = step.icon;

                  return (
                    <div key={step.label} className="relative flex flex-col items-center gap-2.5">
                      <span
                        className={`flex h-10 w-10 items-center justify-center rounded-full border transition duration-300 hover:-translate-y-1 ${
                          step.active
                            ? "border-[#4F63F0] bg-[#4F63F0]"
                            : "border-[#E5E7EB] bg-white"
                        }`}
                      >
                        <Icon
                          size={16}
                          className={step.active ? "text-white" : "text-[#6B7280]"}
                          strokeWidth={2}
                        />
                      </span>
                      <span className="text-xs font-medium text-[#4B5563]">{step.label}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {policies.map((policy, index) => (
                <div
                  key={policy.title}
                  className="policy-card fade-up rounded-2xl border-l-4 border-[#4F63F0] bg-white p-4 shadow-sm"
                  style={{ animationDelay: `${0.22 + index * 0.06}s` }}
                >
                  <div className="flex items-center justify-between">
                    <h4 className="text-sm font-semibold text-[#1F2937]">{policy.title}</h4>
                    <span className="rounded-full bg-[#DCFCE7] px-2 py-0.5 text-[10px] font-bold text-[#16A34A]">
                      {policy.status}
                    </span>
                  </div>

                  <div className="mt-2 flex items-center justify-between text-xs text-[#6B7280]">
                    <span>Effective: {policy.effective}</span>
                    <ExternalLink size={13} className="text-[#9CA3AF]" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* AI Governance banner */}
          <div
            className="fade-up mt-6 flex flex-col items-start gap-5 rounded-2xl bg-[#11163C] p-7 sm:flex-row sm:items-center"
            style={{ animationDelay: ".25s" }}
          >
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/10">
              <Sparkles size={22} className="text-[#8FA3FF]" strokeWidth={2} />
            </span>

            <div>
              <h3 className="text-base font-semibold text-white">
                AI Governance &amp; Traceability
              </h3>
              <p className="mt-1.5 max-w-2xl text-sm leading-6 text-[#9AA3C0]">
                Our proprietary Human-in-the-Loop (HITL) system ensures that
                every AI decision is verified by a compliance expert. Each
                audit entry contains full decision metadata and training-set
                lineage.
              </p>
              <a
                href="/trust-center"
                className="mt-3 inline-block text-sm font-semibold text-[#8FA3FF] underline underline-offset-4 transition hover:text-white"
              >
                View Transparency Report
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
