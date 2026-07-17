import { CheckCircle2 } from "lucide-react";

const checklist = [
  "Camera preview remains local until meeting starts",
  "Microphone input meter detects silence before entry",
  "Speaker test with actionable browser-settings guidance",
  "Recording and AI notices shown before room opens",
  "Background options load without uploading media",
  "Captions language set without blocking start",
];

export default function DevicePreflight() {
  return (
    <>
      <style>{`
        @keyframes fadeUp{
          from{
            opacity:0;
            transform:translateY(35px);
          }
          to{
            opacity:1;
            transform:translateY(0);
          }
        }

        .fade-up{
          opacity:0;
          animation:fadeUp .8s ease forwards;
        }
      `}</style>

      <section className="bg-white px-6 py-20 sm:px-10 lg:px-16">
        <div className="mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-2">
          <div className="fade-up">
            <span className="inline-block rounded-full bg-[#EEF2FF] px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-[#4F63F0]">
              Host Preflight
            </span>

            <h2 className="mt-4 text-3xl font-bold text-[#1F2937] md:text-[36px]">
              Device readiness before the room goes live.
            </h2>

            <p className="mt-5 max-w-lg text-[17px] leading-8 text-[#6B7280]">
              Camera preview, microphone input meter, speaker test, display
              name, background, captions, and policy notices — all resolved
              locally before the room is created.
            </p>

            <div className="mt-6 space-y-3">
              {checklist.map((item, index) => (
                <div
                  key={item}
                  className="fade-up flex items-start gap-2.5"
                  style={{ animationDelay: `${0.1 + index * 0.06}s` }}
                >
                  <CheckCircle2 size={17} className="mt-0.5 shrink-0 text-[#16A34A]" strokeWidth={2} />
                  <span className="text-[15px] leading-6 text-[#374151]">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div
            className="fade-up overflow-hidden"
            style={{ animationDelay: ".2s" }}
          >
            <img
              src="/sema-meet/start/device-preflight.png"
              alt="Device preflight panel"
              className="w-full object-cover"
            />
          </div>
        </div>
      </section>
    </>
  );
}
