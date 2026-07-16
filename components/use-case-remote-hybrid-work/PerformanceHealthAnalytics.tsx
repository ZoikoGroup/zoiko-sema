"use client";

import { Smile, Calendar, RefreshCw } from "lucide-react";

function ProgressRing({ percent }: { percent: number }) {
  const radius = 30;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference * (1 - percent / 100);

  return (
    <div className="relative flex h-[76px] w-[76px] shrink-0 items-center justify-center">
      <svg width="76" height="76" viewBox="0 0 76 76" className="-rotate-90">
        <circle cx="38" cy="38" r={radius} fill="none" stroke="#E5E7EB" strokeWidth="7" />
        <circle
          cx="38"
          cy="38"
          r={radius}
          fill="none"
          stroke="#22C55E"
          strokeWidth="7"
          strokeLinecap="round"
          strokeDasharray={circumference}
          style={{ strokeDashoffset: offset }}
          className="ring-fill"
        />
      </svg>
      <span className="absolute text-sm font-bold text-[#1F2937]">{percent}%</span>
    </div>
  );
}

function ProgressBar({ percent }: { percent: number }) {
  return (
    <div className="flex items-center gap-3">
      <div className="h-2 flex-1 overflow-hidden rounded-full bg-[#E5E7EB]">
        <div
          className="grow-width h-full rounded-full bg-[#22C55E]"
          style={{ width: `${percent}%` }}
        />
      </div>
      <span className="text-sm font-bold text-[#16A34A]">{percent}%</span>
    </div>
  );
}

export default function PerformanceHealthAnalytics() {
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

        @keyframes ringFill{
          from{ stroke-dashoffset: 188.5; }
        }

        .ring-fill{
          animation: ringFill 1s ease forwards;
        }

        @keyframes growWidth{
          from{ width: 0%; }
        }

        .grow-width{
          animation: growWidth 1s ease forwards;
        }

        @keyframes growBar{
          from{ height: 0%; }
        }

        .grow-bar{
          animation: growBar .9s ease forwards;
        }

        .stat-card{ transition: transform .3s ease, box-shadow .3s ease; }
        .stat-card:hover{ transform: translateY(-4px); box-shadow: 0 12px 28px rgba(15,15,40,0.08); }
      `}</style>

      <section className="bg-[#fff] px-6 py-20 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-5xl">
          <div className="fade-up text-center">
            <h2 className="text-3xl font-bold text-[#1F2937] md:text-[38px]">
              Performance & Health Analytics
            </h2>

            <p className="mt-4 text-[17px] leading-8 text-[#6B7280]">
              Data-driven insights into how your team actually works when
              apart.
            </p>
          </div>

          <div
            className="fade-up mt-12 overflow-hidden rounded-3xl"
            style={{ animationDelay: ".2s" }}
          >
            <img
              src="/use-cases/remote-hybrid-work/performance-health-analytics.png"
              alt="Performance and Health Analytics dashboard"
              className="w-full object-cover"
            />
          </div>
        </div>
      </section>
    </>
  );
}
