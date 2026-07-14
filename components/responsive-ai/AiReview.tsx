interface Card {
  title: string;
  description: string;
}

const leftCards: Card[] = [
  {
    title: "Review before relying",
    description:
      "Review AI output before using it for decisions, follow-ups, external communication, or records.",
  },
  {
    title: "Professional judgment",
    description:
      "AI output should not replace legal, medical, financial, security, compliance, or employment review.",
  },
];

const rightCards: Card[] = [
  {
    title: "Review before sharing",
    description:
      "Confirm recipients, permissions, accuracy, sensitivity, and context before sharing AI output.",
  },
  {
    title: "Editable outputs",
    description:
      "Where supported, correct summaries, decisions, and action items before publication.",
  },
];

function ReviewCard({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="rounded-2xl border border-[#D8D8F6] border-l-4 border-l-[#6C4FE0] bg-white p-15 shadow-sm">
      <h3 className="mb-4 text-[18px] font-semibold text-[#1A1A2E]">{title}</h3>

      <p className="text-[15px] leading-7 text-[#666A85]">{description}</p>
    </div>
  );
}

export default function AiReview() {
  return (
    <section className="bg-[#F3F1FA] px-6 py-24 lg:px-20">
      <div className="mx-auto max-w-6xl">
        <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-[#5B63F6]">
          Human Review & Output Quality
        </p>

        <h2 className="text-2xl md:text-[32px] font-bold text-[#17172F]">
          AI output is helpful, not final.
        </h2>

        <p className="mt-5 max-w-3xl text-lg leading-8 text-[#6D7086]">
          Review AI output for accuracy, context, ownership, and sensitivity
          before relying on it, sharing it, or treating it as a record.
        </p>

        <div className="mt-20 grid gap-8 lg:grid-cols-[1fr_320px_1fr]">
          <div className="space-y-8">
            {leftCards.map((card) => (
              <ReviewCard key={card.title} {...card} />
            ))}
          </div>

          <div className="overflow-hidden rounded-3xl">
            <img
              src="/responsive-ai/review.png"
              alt="AI Review"
              className="h-full w-full object-cover"
            />
          </div>

          <div className="space-y-8">
            {rightCards.map((card) => (
              <ReviewCard key={card.title} {...card} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
