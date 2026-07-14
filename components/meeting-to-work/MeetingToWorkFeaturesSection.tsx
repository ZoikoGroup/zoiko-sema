"use client";

import { CheckCircle2, Calendar, Zap, MessageSquare, Video, Mail, FileSpreadsheet } from "lucide-react";
import { useInView } from "./useInView";

// TODO: replace with your actual app mockup image path, e.g. "/Images/meeting-to-work-transcription-mockup.webp"
const TRANSCRIPTION_MOCKUP_SRC = "/Images/meeting-to-work-transcription-mockup.webp";

const integrations = [
  { icon: MessageSquare, label: "Slack", color: "text-fuchsia-600" },
  { icon: Video, label: "Zoom", color: "text-blue-600" },
  { icon: Mail, label: "Gmail", color: "text-red-500" },
  { icon: FileSpreadsheet, label: "Sheets", color: "text-green-600" },
];

export default function MeetingToWorkFeaturesSection() {
  const { ref: headRef, inView: headIn } = useInView(0.2);
  const { ref: gridRef, inView: gridIn } = useInView(0.1);

  return (
    <>
      <style>{`
        @keyframes mtwFeatUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .mtw-feat-hidden { opacity: 0; transform: translateY(20px); }
        .mtw-feat-visible { animation: mtwFeatUp .55s cubic-bezier(.22,1,.36,1) forwards; }

        @keyframes mtwFeatStagger {
          from { opacity: 0; transform: translateY(14px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .mtw-feat-card {
          opacity: 0;
          animation: mtwFeatStagger .5s ease forwards;
          transition: transform .22s ease, box-shadow .22s ease;
        }
        .mtw-feat-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 18px 34px -16px rgba(15,15,40,0.18);
        }
        .mtw-feat-card.dark:hover {
          box-shadow: 0 18px 34px -16px rgba(0,0,0,0.5);
        }

        .mtw-feat-mockup { transition: transform .3s ease; }
        .mtw-feat-card:hover .mtw-feat-mockup { transform: translateY(-2px) scale(1.02); }

        .mtw-feat-bolt { transition: transform .3s ease, opacity .3s ease; }
        .mtw-feat-card:hover .mtw-feat-bolt { transform: rotate(8deg) scale(1.1); opacity: 1; }

        .mtw-feat-badge {
          transition: transform .2s ease, box-shadow .2s ease;
        }
        .mtw-feat-badge:hover {
          transform: translateY(-3px);
          box-shadow: 0 10px 20px -10px rgba(15,15,40,0.25);
        }

        @media (prefers-reduced-motion: reduce) {
          .mtw-feat-hidden { opacity: 1 !important; transform: none !important; }
          .mtw-feat-visible { animation: none !important; }
          .mtw-feat-card { opacity: 1 !important; animation: none !important; }
        }
      `}</style>

      <section className="bg-white px-6 py-16 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-6xl">
          <div ref={headRef} className={`mtw-feat-hidden ${headIn ? "mtw-feat-visible" : ""}`}>
            <h2 className="text-3xl font-extrabold leading-tight text-gray-900 sm:text-[34px]">
              Powerful Features
            </h2>
            <p className="mt-2 text-sm text-gray-500">
              Built for teams that demand precision.
            </p>
          </div>

          <div
            ref={gridRef}
            className={`mtw-feat-hidden ${gridIn ? "mtw-feat-visible" : ""} mt-8 grid grid-cols-1 gap-5 lg:grid-cols-5`}
          >
            {/* Meeting Transcription */}
            <div
              className="mtw-feat-card flex flex-col items-center gap-6 overflow-hidden rounded-2xl border border-gray-100 bg-white p-8 shadow-sm sm:flex-row lg:col-span-3"
              style={{ animationDelay: "0s" }}
            >
              <div className="flex-1">
                <span className="text-3xl font-extrabold text-[#4F63F0]">99</span>
                <h3 className="mt-3 text-lg font-bold text-gray-900">Meeting Transcription</h3>
                <p className="mt-2 max-w-md text-sm leading-relaxed text-gray-500">
                  Multi-language support with speaker identification. Search
                  through years of conversations in seconds with semantic
                  indexing.
                </p>
              </div>
              <div className="mtw-feat-mockup w-full flex-1 overflow-hidden rounded-xl border border-gray-100 sm:w-auto">
                <img
                  src={TRANSCRIPTION_MOCKUP_SRC}
                  alt="Zoiko Sema meeting transcription app screenshot"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>

            {/* Action Item Extraction */}
            <div
              className="mtw-feat-card dark relative overflow-hidden rounded-2xl bg-black p-8 shadow-sm lg:col-span-2"
              style={{ animationDelay: "0.08s" }}
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white">
                <CheckCircle2 size={18} strokeWidth={2} />
              </div>
              <h3 className="mt-4 text-lg font-bold text-white">Action Item Extraction</h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-400">
                Never miss a follow-up. Our NLP engine converts spoken
                promises into tracked Jira, Asana, or Linear tickets.
              </p>
              <Zap
                size={40}
                strokeWidth={1.5}
                className="mtw-feat-bolt absolute bottom-6 right-6 text-white/20"
              />
            </div>

            {/* Calendar Sync */}
            <div
              className="mtw-feat-card rounded-2xl bg-gray-50 p-8 shadow-sm lg:col-span-2"
              style={{ animationDelay: "0.16s" }}
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                <Calendar size={20} strokeWidth={2} />
              </div>
              <h3 className="mt-4 text-lg font-bold text-gray-900">Calendar Sync</h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-500">
                Automatically attach transcripts and task lists to your
                Google or Outlook calendar events.
              </p>
            </div>

            {/* Seamless Integrations */}
            <div
              className="mtw-feat-card flex flex-col items-center justify-center rounded-2xl bg-gray-50 p-8 text-center shadow-sm lg:col-span-3"
              style={{ animationDelay: "0.24s" }}
            >
              <h3 className="text-lg font-bold text-gray-900">Seamless Integrations</h3>
              <p className="mt-2 max-w-sm text-sm leading-relaxed text-gray-500">
                Connects with Slack, Zoom, and Google Workspace out of the box.
              </p>
              <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
                {integrations.map(({ icon: Icon, label, color }) => (
                  <div key={label} className="flex flex-col items-center gap-2">
                    <span
                      className={`mtw-feat-badge flex h-11 w-11 items-center justify-center rounded-xl bg-white shadow-sm ${color}`}
                    >
                      <Icon size={18} strokeWidth={2} />
                    </span>
                    <span className="text-[11.5px] font-medium text-gray-500">{label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
