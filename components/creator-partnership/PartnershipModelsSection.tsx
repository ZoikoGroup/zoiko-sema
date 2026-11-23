import SectionHeading from "./SectionHeading";

const MODELS = [
  {
    title: "Sponsored content",
    body: "Agreed deliverables and messaging for a defined brief, with clear advertising disclosure.",
    img: "model-sponsored",
    alt: "Website wireframe sketches laid out for a content brief",
  },
  {
    title: "Performance-based",
    body: "Incentives tied to authorized attribution and verified results — not self-reported numbers.",
    img: "model-performance",
    alt: "Creator working on a product concept in a design tool",
  },
  {
    title: "Negotiated hybrid",
    body: "A blend of fixed and performance elements, plus optional educational demos under a signed brief.",
    img: "model-hybrid",
    alt: "Smiling creator recording content at a café counter",
  },
];

export default function PartnershipModelsSection() {
  return (
    <section className="bg-white px-6 py-20 font-inter sm:px-10 lg:py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Partnership models"
          title="How approved collaborations can work"
          intro="Depending on the campaign, an approved collaboration may take one of these shapes. Deliverables, compensation, and terms are set in a separate written agreement."
        />

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {MODELS.map(({ title, body, img, alt }, i) => (
            <div
              key={title}
              className="group overflow-hidden rounded-2xl border border-[#E3E8F4] bg-white transition duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-[#0D1638]/10"
            >
              <div className="h-40 overflow-hidden">
                <img
                  src={`/creator-partnership/${img}.webp`}
                  alt={alt}
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <span className="text-xs font-bold uppercase tracking-[0.12em] text-[#2F6FED]">
                  Model {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-2 text-[18px] font-bold text-[#0D1638] font-plus-jakarta">{title}</h3>
                <p className="mt-2 text-[14.5px] leading-6 text-[#5B6582]">{body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
