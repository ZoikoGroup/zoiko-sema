import SectionHeading from "./SectionHeading";

const STEPS = [
  { title: "Apply", body: "Tell us about yourself, your channels, and your idea." },
  { title: "Review & Agree", body: "Our team evaluates your application and discusses an appropriate agreement." },
  { title: "Create & Promote", body: "Once approved, create content per the signed brief and disclosure rules." },
  { title: "Track & Earn", body: "Approved campaigns can use tracking and receive compensation per the agreement and verified results." },
];

export default function HowItWorksSection() {
  return (
    <section id="how-it-works" className="scroll-mt-20 bg-[#EEF4FF] px-6 py-20 font-inter sm:px-10 lg:py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="How it works" title="From application to approved campaign" />

        <ol className="relative mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          <span
            aria-hidden="true"
            className="absolute left-[12.5%] right-[12.5%] top-6 hidden h-px bg-[#C9D6F2] lg:block"
          />
          {STEPS.map(({ title, body }, i) => (
            <li key={title} className="relative flex flex-col items-center text-center">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl border-[1.5px] border-[#2F6FED] bg-white text-[15px] font-bold text-[#2F6FED] font-plus-jakarta">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-5 text-[16px] font-bold text-[#0D1638] font-plus-jakarta">{title}</h3>
              <p className="mt-2 max-w-[240px] text-[14px] leading-6 text-[#5B6582]">{body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
