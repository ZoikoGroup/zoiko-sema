"use client";

interface AudienceCard {
  badge: string;
  badgeBg: string;
  title: string;
  description: string;
  bg: string;
}

const cards: AudienceCard[] = [
  {
    badge: "SR",
    badgeBg: "bg-blue-500",
    title: "Screen reader users",
    description:
      "Semantic structure, labels, and live regions across core flows.",
    bg: "bg-[#E7F0FE]",
  },
  {
    badge: "KB",
    badgeBg: "bg-[#6C5CE7]",
    title: "Keyboard-only users",
    description:
      "Full task completion without a mouse, with visible focus states.",
    bg: "bg-[#F0ECFC]",
  },
  {
    badge: "LV",
    badgeBg: "bg-teal-500",
    title: "Low vision users",
    description: "Contrast, scalable text, and zoom-friendly layouts.",
    bg: "bg-[#E1F5EF]",
  },
  {
    badge: "CM",
    badgeBg: "bg-orange-500",
    title: "Cognitive & motor",
    description:
      "Clear language, forgiving timing, and reduced motion options.",
    bg: "bg-[#FDF1DD]",
  },
];

export default function AccessibilityStatementSection() {
  return (
    <section className="bg-[#fbfafd] px-6 py-16 sm:px-10 lg:px-16">
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(14px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .fade-in-section { animation: fadeInUp 0.7s ease-out both; }
        .fade-in-item { animation: fadeInUp 0.6s ease-out both; }
      `}</style>

      <div className="fade-in-section mx-auto max-w-6xl">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[2px] text-[#4F63F0]">
          Accessibility statement
        </p>
        <h2 className="max-w-xl text-3xl font-bold leading-snug text-gray-900 sm:text-[32px]">
          Our commitment, in plain terms.
        </h2>
        <p className="mt-4 leading-relaxed text-gray-500">
          Zoiko Sema is committed to providing a communication workspace usable
          by people with a wide range of abilities. We follow WCAG guidance,
          test regularly, and welcome feedback — without claiming a conformance
          level we haven&apos;t verified.
        </p>

        <div className="mt-10 grid grid-cols-1 gap-5 text-left sm:grid-cols-2 lg:grid-cols-4">
          {cards.map(({ badge, badgeBg, title, description, bg }, i) => (
            <div
              key={title}
              className={`fade-in-item rounded-xl ${bg} border border-gray-200 p-5 shadow-sm`}
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <span
                className={`mb-4 flex h-9 w-9 items-center justify-center rounded-full text-xs font-bold text-white ${badgeBg}`}
              >
                {badge}
              </span>
              <h3 className="text-sm font-semibold text-gray-900">{title}</h3>
              <p className="mt-1.5 text-xs leading-relaxed text-gray-500">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
