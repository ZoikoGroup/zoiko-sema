import { CircleCheck, FilePen, Link2, Lock } from "lucide-react";
import SectionHeading from "./SectionHeading";

const PROMISES = [
  {
    icon: CircleCheck,
    color: "text-emerald-400",
    title: "Every application is reviewed",
    body: "We assess audience fit, authenticity, and collaboration value. There's no follower count that automatically approves or rejects you.",
  },
  {
    icon: Lock,
    color: "text-amber-300",
    title: "No sensitive data at this stage",
    body: "We don't collect payment IDs, bank details, tax numbers, or identity documents in this application.",
  },
  {
    icon: FilePen,
    color: "text-sky-300",
    title: "Compensation is agreed, not assumed",
    body: "Fees, deliverables, tracking access, and payment terms are set only in a separate written agreement after approval.",
  },
  {
    icon: Link2,
    color: "text-violet-300",
    title: "Links & dashboards come later",
    body: "Unique campaign links and reporting are issued only after approval, contract, and campaign activation — subject to system readiness.",
  },
];

export default function ResponsibleMarketingSection() {
  return (
    <section className="bg-[#0B1538] px-6 py-20 font-inter sm:px-10 lg:py-24">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          dark
          eyebrow="Responsible marketing"
          title="What we will and won't promise"
          intro="We keep this program honest. Here's exactly where you stand when you apply."
        />

        <div className="mt-12 grid gap-4 md:grid-cols-2">
          {PROMISES.map(({ icon: Icon, color, title, body }) => (
            <div
              key={title}
              className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 transition hover:border-white/20 hover:bg-white/[0.07]"
            >
              <h3 className="flex items-center gap-2.5 text-[16px] font-bold text-white font-plus-jakarta">
                <Icon size={18} className={`shrink-0 ${color}`} />
                {title}
              </h3>
              <p className="mt-2 text-[14.5px] leading-6 text-[#B8C0DA]">{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
