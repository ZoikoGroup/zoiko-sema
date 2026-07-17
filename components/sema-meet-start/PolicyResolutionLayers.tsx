import { ShieldCheck, Hash, Settings, CheckCircle2 } from "lucide-react";

const layers = [
  {
    label: "Layer 1",
    title: "Organization",
    icon: ShieldCheck,
    color: "#4F63F0",
    bg: "#EEF2FF",
    items: ["SSO / MFA required", "Guest domains: approved list", "Recording: Admin approval"],
  },
  {
    label: "Layer 2",
    title: "Workspace",
    icon: Hash,
    color: "#7C3AED",
    bg: "#F3E8FF",
    items: ["Waiting room: On by default", "Recording: Off by default", "AI summary: Off · review required", "External participants: scoped"],
  },
  {
    label: "Layer 3",
    title: "Meeting override",
    icon: Settings,
    color: "#4B5563",
    bg: "#F3F4F6",
    items: ["Title: optional, editable", "Passcode: host can add", "Recording: host toggle if permitted", "AI: host toggle if workspace-eligible"],
  },
];

export default function PolicyResolutionLayers() {
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

      <section className="bg-[#F4F2FD] px-6 py-20 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-6xl">
          <div className="fade-up text-center">
            <span className="inline-block rounded-full bg-[#E7E8FD] px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-[#4F63F0]">
              Policy Resolution
            </span>

            <h2 className="mt-4 text-3xl font-bold text-[#1F2937] md:text-[36px]">
              Three layers. One effective setting. Always shown.
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-[15px] leading-7 text-[#6B7280]">
              Organization defaults cascade into workspace settings. Meeting
              overrides are only available where policy permits. Source and
              provenance are always visible to the host.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {layers.map((layer, index) => {
              const Icon = layer.icon;

              return (
                <div
                  key={layer.title}
                  className="fade-up rounded-2xl border border-[#ECECF4] bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1.5 hover:shadow-lg"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <span
                    className="flex h-10 w-10 items-center justify-center rounded-lg"
                    style={{ backgroundColor: layer.bg }}
                  >
                    <Icon size={18} style={{ color: layer.color }} strokeWidth={2} />
                  </span>

                  <p
                    className="mt-4 text-[11px] font-bold uppercase tracking-wide"
                    style={{ color: layer.color }}
                  >
                    {layer.label}
                  </p>

                  <h3 className="mt-1 text-lg font-semibold text-[#1F2937]">{layer.title}</h3>

                  <ul className="mt-4 space-y-2">
                    {layer.items.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm leading-6 text-[#4B5563]">
                        <span
                          className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full"
                          style={{ backgroundColor: layer.color }}
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>

          <div
            className="fade-up mt-8 flex items-start gap-3 rounded-2xl bg-[#EFFCF4] p-6"
            style={{ animationDelay: ".3s" }}
          >
            <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-[#16A34A]" strokeWidth={2} />
            <p className="text-[15px] leading-7 text-[#166534]">
              <span className="font-semibold">Effective policy is always shown.</span>{" "}
              When a setting is locked by organization or workspace policy, the
              host sees the source and a plain-language explanation — not a
              silent missing toggle.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
