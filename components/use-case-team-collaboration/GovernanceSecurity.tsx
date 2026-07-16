import Link from "next/link";
import { CheckCircle2 } from "lucide-react";

const checklist = [
  "Role-based access controls",
  "Records-aware workflows",
  "Controlled AI — no hidden scoring",
  "Audit-ready history",
  "Guest scope with expiry and review",
  "Retention and legal hold",
];

export default function GovernanceSecurity() {
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
        <div className="mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-2">
          <div className="fade-up">
            <span className="inline-block rounded-full bg-[#232B57] px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-[#8FA3FF]">
              Governance and Security
            </span>

            <h2 className="mt-4 text-3xl font-bold text-white md:text-[38px]">
              Access, AI, and audit — by design, not afterthought.
            </h2>

            <p className="mt-5 max-w-lg text-[17px] leading-8 text-[#C8C8C8]">
              Role-based access, policy inheritance, guest controls, AI
              guardrails, retention rules, and visible audit evidence built
              into every workspace object.
            </p>

            <div className="mt-8 grid grid-cols-1 gap-x-8 gap-y-3.5 sm:grid-cols-2">
              {checklist.map((item, index) => (
                <div
                  key={item}
                  className="fade-up flex items-center gap-2.5"
                  style={{ animationDelay: `${0.1 + index * 0.07}s` }}
                >
                  <CheckCircle2
                    size={18}
                    className="shrink-0 text-[#2ED47A]"
                    strokeWidth={2}
                  />
                  <span className="text-[15px] text-[#DDE1F0]">{item}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-5">
              <a
                href="/admin-console"
                className="rounded-full bg-[#4F63F0] px-7 py-3 text-sm font-semibold text-white transition hover:bg-[#4053E6]"
              >
                Review controls
              </a>

              <Link
                href="/trust-center"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#8FA3FF] transition hover:text-white"
              >
                Trust Center
                <span aria-hidden>→</span>
              </Link>
            </div>
          </div>

          <div
            className="fade-up overflow-hidden rounded-2xl border border-white/10 shadow-2xl"
            style={{ animationDelay: ".2s" }}
          >
            <img
              src="/use-cases/team-collaboration/governance-security.png"
              alt="Team reviewing governance and security controls"
              className="w-full object-cover"
            />
          </div>
        </div>
      </section>
    </>
  );
}
