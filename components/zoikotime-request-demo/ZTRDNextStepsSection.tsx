"use client";

import { useInView } from "./useInView";

interface Step {
  number: string;
  title: string;
  desc: string;
}

const steps: Step[] = [
  { number: "1", title: "Submit", desc: "Loading state confirms your request and prevents duplicates." },
  { number: "2", title: "Confirm", desc: "Reference number, selected route, and next step shown instantly." },
  { number: "3", title: "Route", desc: "Assigned to sales, success, or security by size and use case." },
  { number: "4", title: "Schedule", desc: "Calendar scheduling where available, with agenda attached." },
  { number: "5", title: "Prepare", desc: "Confirmation email with resources; a brief goes to your team." },
  { number: "6", title: "Follow up", desc: "Reminders and post-demo resources; outcomes tracked." },
];

export default function ZTRDNextStepsSection() {
  const { ref: headRef, inView: headIn } = useInView(0.2);
  const { ref: rowRef, inView: rowIn } = useInView(0.05);

  return (
    <>
      <style>{`
        @keyframes ztrdNsFadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes ztrdNsLineGrow {
          from { transform: scaleX(0); }
          to   { transform: scaleX(1); }
        }
        @keyframes ztrdNsDotPulse {
          0%,100% { box-shadow: 0 0 0 0 rgba(79,99,240,0.35); }
          50%      { box-shadow: 0 0 0 6px rgba(79,99,240,0); }
        }

        .ztrd-ns-hidden { opacity: 0; transform: translateY(20px); }
        .ztrd-ns-visible { animation: ztrdNsFadeUp .55s cubic-bezier(.22,1,.36,1) forwards; }

        .ztrd-ns-step { opacity: 0; transform: translateY(14px); }
        .ztrd-ns-step.active { animation: ztrdNsFadeUp .5s cubic-bezier(.22,1,.36,1) forwards; }

        .ztrd-ns-badge { animation: ztrdNsDotPulse 2.6s ease-in-out infinite; }
        .ztrd-ns-step:hover .ztrd-ns-badge { transform: scale(1.08); }
        .ztrd-ns-badge { transition: transform .2s ease; }

        .ztrd-ns-line {
          position: absolute;
          top: 19px;
          left: 8%;
          right: 8%;
          height: 2px;
          background: #E1E4F5;
          transform-origin: left;
          animation: ztrdNsLineGrow .8s cubic-bezier(.22,1,.36,1) both;
        }

        @media (max-width: 767px) {
          .ztrd-ns-row { flex-direction: column; align-items: center; gap: 28px; }
          .ztrd-ns-line { display: none; }
          .ztrd-ns-step-wrap { width: 100% !important; }
        }

        @media (prefers-reduced-motion: reduce) {
          .ztrd-ns-hidden, .ztrd-ns-step, .ztrd-ns-line { opacity: 1 !important; transform: none !important; animation: none !important; }
          .ztrd-ns-badge { animation: none !important; }
        }
      `}</style>

      <section className="bg-[#F4F2FD] px-6 py-16 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-6xl">
          <div ref={headRef} className={`ztrd-ns-hidden ${headIn ? "ztrd-ns-visible" : ""} text-center`}>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[2px] text-[#4F63F0]">
              What happens next
            </p>
            <h2 className="text-3xl font-extrabold leading-tight text-gray-900 sm:text-[34px]">
              From request to a prepared conversation
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-gray-500">
              You always know your request was received, who owns follow-up,
              and what comes next.
            </p>
          </div>

          <div ref={rowRef} className="ztrd-ns-row relative mt-14 flex items-start justify-between gap-4">
            <span className="ztrd-ns-line hidden md:block" />
            {steps.map((step, i) => (
              <div key={step.number} className="ztrd-ns-step-wrap relative flex flex-col items-center text-center" style={{ width: "16%" }}>
                <div
                  className={`ztrd-ns-step flex flex-col items-center text-center ${rowIn ? "active" : ""}`}
                  style={{ animationDelay: `${i * 0.1}s` }}
                >
                  <span
                    className="ztrd-ns-badge relative z-10 mb-4 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 bg-white text-[13px] font-bold"
                    style={{ borderColor: "#4F63F0", color: "#4F63F0" }}
                  >
                    {step.number}
                  </span>
                  <h3 className="mb-1.5 text-[15px] font-bold text-gray-900">{step.title}</h3>
                  <p className="mx-auto max-w-[160px] text-[12.5px] leading-relaxed text-gray-500">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}