"use client";

import { useEffect, useRef, useState } from "react";
import { FileText, CheckCircle2, ShieldCheck, Download } from "lucide-react";

const TOTAL_MB = 12.4;

const versionHistory = [
  { version: "v4.2.0 (Current)", meta: "Stable Release · 2024-10-24", current: true },
  { version: "v4.1.8", meta: "Archived · 2024-08-12", action: "Download v4.1" },
];

const keyCoverage = [
  "Multi-layered verification protocols",
  "Real-time integrity monitoring",
  "Node consensus during audit cycles",
  "Exception handling and failure state recovery",
];

type DownloadState = "idle" | "downloading" | "complete" | "cancelled";

export default function AdvancedCircuitDownload() {
  const [state, setState] = useState<DownloadState>("downloading");
  const [progress, setProgress] = useState(78);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (state !== "downloading") return;

    intervalRef.current = setInterval(() => {
      setProgress((p) => {
        const next = p + Math.random() * 6 + 2;
        if (next >= 100) {
          clearInterval(intervalRef.current!);
          setState("complete");
          return 100;
        }
        return next;
      });
    }, 500);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [state]);

  function handleCancel() {
    if (intervalRef.current) clearInterval(intervalRef.current);
    setState("cancelled");
  }

  function handleStart() {
    setProgress(0);
    setState("downloading");
  }

  const transferredMb = ((progress / 100) * TOTAL_MB).toFixed(1);

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

        .progress-fill{ transition: width .5s ease; }

        .rl-btn{ transition: transform .2s ease, box-shadow .2s ease, background-color .2s ease; }
        .rl-btn:hover{ transform: translateY(-1px); }
      `}</style>

      <section id="advanced-circuit-integrity" className="bg-white px-6 py-20 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-6 lg:grid-cols-[1.4fr_1fr]">
            <div
              className="fade-up rounded-2xl border border-[#ECECF4] p-7 shadow-sm transition duration-300 hover:shadow-lg"
            >
              <div className="flex items-start gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-[#EEF2FF]">
                  <FileText size={20} className="text-[#4F63F0]" strokeWidth={2} />
                </span>

                <div>
                  <h2 className="text-xl font-bold text-[#1F2937]">
                    Advanced Circuit Integrity v4.2
                  </h2>
                  <p className="mt-1 text-sm text-[#9CA3AF]">
                    Published Oct 24, 2024 · Technical Resource · PDF (12.4 MB)
                  </p>
                </div>
              </div>

              <p className="mt-5 text-[15px] leading-7 text-[#4B5563]">
                This resource provides a comprehensive technical overview of
                circuit integrity auditing mechanisms. Designed for security
                architects and hardware engineers, it covers the fundamental
                pillars of decentralized node verification.
              </p>

              <p className="mt-5 text-sm font-semibold text-[#1F2937]">Key Coverage:</p>
              <ul className="mt-2 space-y-1.5">
                {keyCoverage.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm leading-6 text-[#4B5563]">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[#9CA3AF]" />
                    {item}
                  </li>
                ))}
              </ul>

              <div className="mt-6 border-t border-[#ECECF4] pt-5">
                <p className="text-sm font-semibold text-[#1F2937]">Version History</p>

                <div className="mt-3 space-y-2">
                  {versionHistory.map((entry) => (
                    <div
                      key={entry.version}
                      className="flex items-center justify-between rounded-lg bg-[#F9FAFB] px-4 py-3"
                    >
                      <div>
                        <p className={`text-sm ${entry.current ? "font-semibold text-[#1F2937]" : "text-[#4B5563]"}`}>
                          {entry.version}
                        </p>
                        <p className="text-xs text-[#9CA3AF]">{entry.meta}</p>
                      </div>

                      {entry.current ? (
                        <span className="text-sm font-semibold text-[#4F63F0]">
                          {Math.round(progress)}%
                        </span>
                      ) : (
                        <button className="text-xs font-medium text-[#6B7280] underline underline-offset-2 hover:text-[#4F63F0]">
                          {entry.action}
                        </button>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="fade-up space-y-4" style={{ animationDelay: ".15s" }}>
              <div className="rounded-2xl bg-[#EEF2FF] p-6">
                {state === "downloading" && (
                  <>
                    <div className="flex items-center gap-2 text-sm font-semibold text-[#1F2937]">
                      <CheckCircle2 size={16} className="text-[#4F63F0]" strokeWidth={2.5} />
                      Active Download
                    </div>

                    <div className="mt-5 flex items-center justify-between text-sm">
                      <span className="text-[#4B5563]">Transferring…</span>
                      <span className="font-bold text-[#4F63F0]">{Math.round(progress)}%</span>
                    </div>

                    <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-white">
                      <div
                        className="progress-fill h-full rounded-full bg-[#4F63F0]"
                        style={{ width: `${progress}%` }}
                      />
                    </div>

                    <div className="mt-2 flex items-center justify-between text-xs text-[#6B7280]">
                      <span>{transferredMb} MB / {TOTAL_MB} MB</span>
                      <span>2.4 MB/s</span>
                    </div>
                  </>
                )}

                {state === "complete" && (
                  <>
                    <div className="flex items-center gap-2 text-sm font-semibold text-[#16A34A]">
                      <CheckCircle2 size={16} strokeWidth={2.5} />
                      Download Complete
                    </div>
                    <p className="mt-3 text-sm text-[#4B5563]">
                      Advanced Circuit Integrity v4.2 ({TOTAL_MB} MB) saved to
                      your device.
                    </p>
                  </>
                )}

                {state === "cancelled" && (
                  <>
                    <div className="text-sm font-semibold text-[#DC2626]">
                      Transfer Cancelled
                    </div>
                    <p className="mt-3 text-sm text-[#4B5563]">
                      {transferredMb} MB of {TOTAL_MB} MB was transferred
                      before cancellation.
                    </p>
                  </>
                )}

                <div className="mt-4 space-y-2">
                  <div className="flex items-center gap-2.5 rounded-lg bg-white px-4 py-3">
                    <CheckCircle2 size={16} className="shrink-0 text-[#16A34A]" strokeWidth={2} />
                    <div>
                      <p className="text-[11px] font-bold uppercase tracking-wide text-[#9CA3AF]">
                        Hash Verification
                      </p>
                      <p className="text-sm text-[#1F2937]">SHA-256 Checksum Valid</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2.5 rounded-lg bg-white px-4 py-3">
                    <ShieldCheck size={16} className="shrink-0 text-[#4F63F0]" strokeWidth={2} />
                    <div>
                      <p className="text-[11px] font-bold uppercase tracking-wide text-[#9CA3AF]">
                        Security Scan
                      </p>
                      <p className="text-sm text-[#1F2937]">No vulnerabilities detected</p>
                    </div>
                  </div>
                </div>

                {state === "downloading" ? (
                  <button
                    onClick={handleCancel}
                    className="rl-btn mt-4 w-full rounded-lg bg-[#DC2626] py-3 text-sm font-semibold text-white hover:bg-[#C31C1C]"
                  >
                    Cancel Transfer
                  </button>
                ) : (
                  <button
                    onClick={handleStart}
                    className="rl-btn mt-4 flex w-full items-center justify-center gap-2 rounded-lg bg-[#4F63F0] py-3 text-sm font-semibold text-white hover:bg-[#4053E6]"
                  >
                    <Download size={15} />
                    {state === "cancelled" ? "Resume Download" : "Download Again"}
                  </button>
                )}
              </div>

              <div className="rounded-2xl border border-[#ECECF4] p-6">
                <p className="text-xs font-bold uppercase tracking-wide text-[#9CA3AF]">
                  Resource Manifest
                </p>

                <div className="mt-4 space-y-3 text-sm">
                  <div className="flex items-center justify-between">
                    <span className="text-[#6B7280]">Author</span>
                    <span className="font-semibold text-[#1F2937]">Engineering Ops</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-[#6B7280]">Owner</span>
                    <span className="font-semibold text-[#1F2937]">Security Council</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-[#6B7280]">Review Status</span>
                    <span className="font-semibold text-[#16A34A]">Approved</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
