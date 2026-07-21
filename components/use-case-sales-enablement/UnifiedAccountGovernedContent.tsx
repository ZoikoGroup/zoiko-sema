import { FileText, PlayCircle, ClipboardCheck, Award } from "lucide-react";

const contentLibrary = [
  { title: "Enterprise Playbook", status: "Approved V2.4", color: "#16A34A", icon: FileText },
  { title: "Master Pitch Deck", status: "Approved V1.1", color: "#16A34A", icon: PlayCircle },
  { title: "Security Whitepaper", status: "Reviewing", color: "#4F63F0", icon: ClipboardCheck },
  { title: "Competitor Battle Cards", status: "Approved V4.0", color: "#16A34A", icon: Award },
];

export default function UnifiedAccountGovernedContent() {
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

      <section className="bg-[#F8F7FD] px-6 py-20 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-10 lg:grid-cols-2">
            <div className="fade-up">
              <h2 className="text-2xl font-bold text-[#1F2937] md:text-[28px]">
                Unified Account Context
              </h2>

              <div className="mt-6 overflow-hidden rounded-2xl transition duration-300 hover:-translate-y-1">
                <img
                  src="/use-cases/sales-enablement/account-context.png"
                  alt="Unified account context workspace"
                  className="w-full object-cover"
                />
              </div>
            </div>

            <div className="fade-up" style={{ animationDelay: ".15s" }}>
              <h2 className="text-2xl font-bold text-[#1F2937] md:text-[28px]">
                Governed Content Library
              </h2>

              <div className="mt-6 grid grid-cols-2 gap-4">
                {contentLibrary.map((item, index) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={item.title}
                      className="fade-up rounded-xl border border-[#ECECF4] bg-white p-5 transition duration-300 hover:-translate-y-1 hover:shadow-md"
                      style={{ animationDelay: `${0.25 + index * 0.08}s` }}
                    >
                      <Icon size={20} className="text-[#4F63F0]" strokeWidth={2} />

                      <h3 className="mt-3 text-sm font-semibold text-[#1F2937]">
                        {item.title}
                      </h3>

                      <div className="mt-2 flex items-center gap-1.5">
                        <span
                          className="h-1.5 w-1.5 rounded-full"
                          style={{ backgroundColor: item.color }}
                        />
                        <span className="text-xs font-medium" style={{ color: item.color }}>
                          {item.status}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div
                className="fade-up mt-4 rounded-2xl bg-[#11163C] p-6"
                style={{ animationDelay: ".6s" }}
              >
                <h3 className="text-base font-semibold text-white">
                  The Content Integrity Gap
                </h3>
                <p className="mt-2 text-sm leading-6 text-[#9AA3C0]">
                  Ensure sales reps only use the latest, legal-approved
                  assets. Versioning is handled automatically, and old
                  versions are archived from deal rooms instantly.
                </p>

                <a
                  href="/security-policy"
                  className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-[#8FA3FF] transition hover:text-white"
                >
                  View Governance Controls
                  <span aria-hidden>›</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
