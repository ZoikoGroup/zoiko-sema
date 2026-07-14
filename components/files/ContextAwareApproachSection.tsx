"use client";

interface ImageCard {
  title: string;
  description: string;
  src: string;
}

const cards: ImageCard[] = [
  {
    title: "Left rail",
    description:
      "Spaces, channels, projects, meetings, mail, calendar, and Files selected.",
    src: "/files/left.png",
  },
  {
    title: "Center panel",
    description:
      "File list grouped by conversation, meeting, mail thread, or project.",
    src: "/files/center.png",
  },
  {
    title: "Right context panel",
    description:
      "Linked source, related meeting, owner, decision, follow-up, policy, and audit trail.",
    src: "/files/right.png",
  },
];

export default function ContextAwareApproachSection() {
  return (
    <section className="bg-[#F0EFFB] px-6 py-16 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-6xl text-center">
        <p className="mb-4 flex items-center justify-center gap-1.5 text-xs font-semibold uppercase tracking-[2px] text-[#4F63F0]">
          <span className="h-1.5 w-1.5 rounded-full bg-[#4F63F0]" />
          Context workspace
        </p>
        <h2 className="mx-auto max-w-2xl text-3xl font-bold leading-snug text-gray-900 sm:text-[32px]">
          Each file preserves its conversation, meeting, decision, owner, and
          policy.
        </h2>

        <div className="mt-10 grid grid-cols-1 gap-4 text-left sm:grid-cols-3">
          {cards.map(({ title, description, src }) => (
            <div key={title}>
              <img
                src={src}
                alt="image"
                className="h-120 w-full rounded-2xl object-cover"
              />

              <div className="relative z-10 -mt-4 mx-1 rounded-2xl bg-white p-5 shadow-lg">
                <h3 className="text-sm font-semibold text-gray-900">{title}</h3>
                <p className="mt-1.5 text-xs leading-relaxed text-gray-500">
                  {description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
