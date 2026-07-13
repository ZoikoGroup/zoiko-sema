"use client";

interface Feature {
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    title: "Mail attachment becomes meeting asset",
    description:
      "A file received by mail can attach to a scheduled meeting without losing the source thread.",
  },
  {
    title: "Meeting deck becomes channel resource",
    description:
      "A deck used in a meeting stays linked to the summary and project channels.",
  },
  {
    title: "Calendar event carries files",
    description:
      "Agenda, briefing notes, and attachments stay with the event and meeting room.",
  },
  {
    title: "Follow-up keeps the file attached",
    description: "Follow-up messages can reference the correct file version.",
  },
];

export default function MailCalendarContinuitySection() {
  return (
    <section className="bg-[#F3F2FD] px-5 py-12 sm:px-8 sm:py-16 lg:px-16">
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <p className="mb-4 flex items-center justify-center gap-1.5 text-xs font-semibold uppercase tracking-[2px] text-[#4F63F0]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#4F63F0]" />
            Mail, calendar, meeting continuity
          </p>

          <h2 className="mx-auto max-w-2xl text-2xl font-extrabold leading-snug text-gray-900 sm:text-3xl lg:text-[32px]">
            Mail and Calendar are part of the Sema product system. Files
            benefits from that.
          </h2>
        </div>

        <div className="mt-8 overflow-hidden rounded-2xl">
          <img
            src="/files/mailproduct.png"
            alt="image"
            className="h-auto w-full object-cover lg:h-95"
          />
        </div>

        <div className="mt-10 grid grid-cols-1 gap-5 text-left sm:grid-cols-2 lg:grid-cols-4">
          {features.map(({ title, description }) => (
            <div
              key={title}
              className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm"
            >
              <h3 className="max-w-full text-[13.1px] font-bold text-gray-900 lg:max-w-55">
                {title}
              </h3>

              <p className="mt-2 max-w-full text-xs leading-relaxed text-gray-500 lg:max-w-55">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}