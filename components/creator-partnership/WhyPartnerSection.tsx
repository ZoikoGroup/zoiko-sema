import { ChartColumn, Handshake, Target } from "lucide-react";
import SectionHeading from "./SectionHeading";

const REASONS = [
  {
    icon: Target,
    title: "Authentic product relevance",
    body: "Introduce audiences to practical meetings, messaging, and collaboration — not hype. You only promote what fits your content.",
  },
  {
    icon: Handshake,
    title: "Flexible, approved collaborations",
    body: "Sponsored content, performance-based, or hybrid — each arrangement is negotiated and individually approved. Benefits apply only when agreed.",
  },
  {
    icon: ChartColumn,
    title: "Measured, accountable campaigns",
    body: "Approved campaigns use authorized attribution and reporting. Paid outcomes require verification — no guesswork, no inflated claims.",
  },
];

export default function WhyPartnerSection() {
  return (
    <section className="bg-white px-6 py-20 font-inter sm:px-10 lg:py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Why partner"
          title="Honest collaboration, built on relevance"
          intro="A communication and meetings platform your audience can actually use — with campaigns that are agreed, measured, and accountable."
        />

        <div className="relative mt-12 overflow-hidden rounded-3xl shadow-xl shadow-[#0D1638]/10">
          <img
            src="/creator-partnership/why-partner-banner.webp"
            alt="Team planning a product launch around a whiteboard"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0B1538]/90 via-[#0B1538]/70 to-[#0B1538]/10" />
          <div className="relative max-w-xl px-8 py-12 sm:px-11 sm:py-16">
            <span className="text-xs font-semibold uppercase tracking-[0.14em] text-[#38A8F5] font-plus-jakarta">
              For creators who build trust
            </span>
            <h3 className="mt-3 text-2xl font-bold leading-snug text-white font-plus-jakarta md:text-[28px]">
              Share tools your audience can actually use
            </h3>
            <p className="mt-3 text-[15px] leading-6 text-[#D3D9EC]">
              Meetings, messaging, and collaboration — introduced authentically, with campaigns that are agreed,
              measured, and accountable.
            </p>
          </div>
        </div>

        <div className="mt-6 grid gap-5 md:grid-cols-3">
          {REASONS.map(({ icon: Icon, title, body }) => (
            <div
              key={title}
              className="rounded-2xl border border-[#E3E8F4] bg-white p-6 transition duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-[#0D1638]/5"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#EEF4FF] text-[#2F6FED]">
                <Icon size={20} />
              </span>
              <h3 className="mt-5 text-[17px] font-bold text-[#0D1638] font-plus-jakarta">{title}</h3>
              <p className="mt-2 text-[14.5px] leading-6 text-[#5B6582]">{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
