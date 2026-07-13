"use client";

import { useInView } from "./useInView";

interface Step {
  number: number;
  title: string;
  description: string;
  tag: string;
}

const steps: Step[] = [
  {
    number: 1,
    title: "Capture",
    description: "Meeting, thread, channel, file, client call, or project discussion.",
    tag: "Respects permissions",
  },
  {
    number: 2,
    title: "Extract",
    description: "Candidate summary, decision, task, owner, due date, risk, or follow-up.",
    tag: "Candidate until reviewed",
  },
  {
    number: 3,
    title: "Review",
    description: "Owner or authorized user edits, rejects, approves, or asks for clarity.",
    tag: "Nothing finalizes unreviewed",
  },
  {
    number: 4,
    title: "Verify",
    description: "Source link, timestamp, owner, reviewer, and evidence trail.",
    tag: "Audit & permissions",
  },
  {
    number: 5,
    title: "Sync",
    description: "Approved record updates ZoikoTime, CRM, project, or workspace.",
    tag: "Admin-controlled gates",
  },
];

export default function VerifiedCollaborationModelSection() {
  const { ref: headRef, inView: headIn } = useInView(0.2);
  const { ref: rowRef, inView: rowIn } = useInView(0.1);

  return (
    <>
      <style>{`
        @keyframes vcModelUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .vc-model-hidden { opacity: 0; transform: translateY(20px); }
        .vc-model-visible { animation: vcModelUp .55s cubic-bezier(.22,1,.36,1) forwards; }

        @keyframes vcModelStagger {
          from { opacity: 0; transform: translateY(14px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .vc-model-item {
          opacity: 0;
          animation: vcModelStagger .5s ease forwards;
        }
        .vc-model-badge {
          transition: transform .22s ease, background-color .22s ease;
        }
        .vc-model-item:hover .vc-model-badge {
          transform: translateY(-3px) scale(1.05);
          background-color: #2A2F6B;
        }

        @media (prefers-reduced-motion: reduce) {
          .vc-model-hidden { opacity: 1 !important; transform: none !important; }
          .vc-model-visible { animation: none !important; }
          .vc-model-item { opacity: 1 !important; animation: none !important; }
        }
      `}</style>

      <section className="bg-[#0B1330] px-6 py-16 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-6xl text-center">
          <div ref={headRef} className={`vc-model-hidden ${headIn ? "vc-model-visible" : ""}`}>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[2px] text-[#7C8CF8]">
              Verified collaboration model
            </p>
            <h2 className="mx-auto max-w-2xl text-3xl font-extrabold leading-10 text-white sm:text-[32px]">
              Capture, extract, review, verify, sync
            </h2>
            <p className="mx-auto mt-4 max-w-160 text-sm leading-relaxed text-[#AEB7CC]">
              Five governed steps turn collaboration into a trusted work
              record — with humans in control at every stage.
            </p>
          </div>

          <div
            ref={rowRef}
            className={`vc-model-hidden ${rowIn ? "vc-model-visible" : ""} mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-5`}
          >
            {steps.map(({ number, title, description, tag }, i) => (
              <div key={title} className="relative">
                {i < steps.length - 1 && (
                  <div className="absolute top-6 left-[calc(50%+28px)] hidden h-px w-[calc(100%-56px)] bg-white/15 lg:block" />
                )}
                <div
                  className="vc-model-item flex flex-col items-center text-center"
                  style={{ animationDelay: `${i * 0.1}s` }}
                >
                  <div className="vc-model-badge relative z-10 flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-[#1B2059] text-lg font-extrabold text-[#8FA3FF]">
                    {number}
                  </div>
                  <h3 className="mt-3 text-sm font-semibold text-white">{title}</h3>
                  <p className="mt-2 text-[12.5px] leading-relaxed text-[#9CA0C4]">
                    {description}
                  </p>
                  <span className="mt-3 rounded-full bg-white/10 px-2.5 py-1 text-[10.5px] font-medium text-[#AEB7CC]">
                    {tag}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
