"use client";

import { useState } from "react";
import { CheckCircle2, Clock, Users } from "lucide-react";

type Timeframe = "30days" | "quarter";

const dataByTimeframe: Record<
  Timeframe,
  {
    stats: { label: string; value: string; change: string; icon: typeof Users }[];
    chart: number[];
    chartLabels: string[];
    commitmentRate: string;
    commitmentChange: string;
    followUpSpeed: string;
    followUpChange: string;
    crmFreshness: string;
  }
> = {
  "30days": {
    stats: [
      { label: "Total Meetings", value: "1,248", change: "+12.4% vs prior 30 days", icon: Users },
      { label: "Follow-ups Completed", value: "842", change: "+18.7% vs prior 30 days", icon: CheckCircle2 },
      { label: "Follow-up Completion Rate", value: "67.5%", change: "+4.3pp vs prior 30 days", icon: CheckCircle2 },
      { label: "Avg. Time to Follow-up", value: "1.6 days", change: "-0.3 days vs prior 30 days", icon: Clock },
      { label: "Active Accounts", value: "523", change: "+9.8% vs prior 30 days", icon: Users },
    ],
    chart: [820, 940, 1010, 1120, 1180, 1248],
    chartLabels: ["Feb", "Mar", "Apr", "May", "Jun", "Jul"],
    commitmentRate: "84%",
    commitmentChange: "+12% vs last month",
    followUpSpeed: "1.2h",
    followUpChange: "-0.8h vs average",
    crmFreshness: "99.1%",
  },
  quarter: {
    stats: [
      { label: "Total Meetings", value: "3,742", change: "+15.1% vs prior quarter", icon: Users },
      { label: "Follow-ups Completed", value: "2,510", change: "+21.3% vs prior quarter", icon: CheckCircle2 },
      { label: "Follow-up Completion Rate", value: "71.2%", change: "+3.1pp vs prior quarter", icon: CheckCircle2 },
      { label: "Avg. Time to Follow-up", value: "1.4 days", change: "-0.4 days vs prior quarter", icon: Clock },
      { label: "Active Accounts", value: "612", change: "+11.2% vs prior quarter", icon: Users },
    ],
    chart: [2600, 2900, 3150, 3400, 3580, 3742],
    chartLabels: ["Q1-a", "Q1-b", "Q1-c", "Q2-a", "Q2-b", "Q2-c"],
    commitmentRate: "86%",
    commitmentChange: "+9% vs last quarter",
    followUpSpeed: "1.1h",
    followUpChange: "-0.6h vs average",
    crmFreshness: "99.4%",
  },
};

const contentUsage = {
  stages: ["Qualification", "Discovery", "Solution Design", "Proposal", "Negotiation"],
  rows: [
    { label: "Case Studies", values: [28, 47, 62, 74, 81] },
    { label: "Product Demos", values: [20, 38, 53, 65, 77] },
    { label: "ROI Tools", values: [12, 23, 37, 49, 64] },
    { label: "Decks", values: [34, 54, 63, 72, 83] },
    { label: "Datasheets", values: [18, 29, 41, 55, 66] },
  ],
};

const healthAccounts = [
  { name: "Northbridge Financial", health: 92, engagement: 82, lastMeeting: "May 22, 2024", nextFollowUp: "May 29, 2024" },
  { name: "Vantage Healthcare", health: 89, engagement: 76, lastMeeting: "May 20, 2024", nextFollowUp: "May 27, 2024" },
  { name: "Falcon Logistics", health: 87, engagement: 73, lastMeeting: "May 21, 2024", nextFollowUp: "May 28, 2024" },
  { name: "Quantum Technologies", health: 85, engagement: 71, lastMeeting: "May 19, 2024", nextFollowUp: "May 26, 2024" },
  { name: "Evergreen Manufacturing", health: 84, engagement: 69, lastMeeting: "May 18, 2024", nextFollowUp: "May 25, 2024" },
];

const leaderboard = [
  { initials: "CD", name: "Casey D.", meetings: 32 },
  { initials: "SR", name: "Samantha R.", meetings: 24 },
  { initials: "MG", name: "Marcus G.", meetings: 20 },
  { initials: "JW", name: "Jordan W.", meetings: 18 },
  { initials: "AT", name: "Avery T.", meetings: 17 },
];

export default function RevenueIntelligence() {
  const [timeframe, setTimeframe] = useState<Timeframe>("30days");
  const data = dataByTimeframe[timeframe];

  const maxChart = Math.max(...data.chart);
  const minChart = Math.min(...data.chart);
  const points = data.chart
    .map((value, index) => {
      const x = (index / (data.chart.length - 1)) * 280;
      const y = 70 - ((value - minChart) / (maxChart - minChart || 1)) * 60;
      return `${x},${y}`;
    })
    .join(" ");

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

        .ri-tab{ transition: background-color .18s ease, color .18s ease; }
        .ri-card{ transition: transform .3s ease, box-shadow .3s ease; }
        .ri-card:hover{ transform: translateY(-2px); box-shadow: 0 12px 28px rgba(15,15,40,0.08); }
      `}</style>

      <section className="bg-[#F8F7FD] px-6 py-20 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-6xl">
          <div className="fade-up flex flex-wrap items-end justify-between gap-4">
            <div>
              <h2 className="text-3xl font-bold text-[#1F2937] md:text-[34px]">
                Revenue Intelligence
              </h2>
              <p className="mt-2 text-[15px] text-[#6B7280]">
                Advanced analytics for meeting activity and deal hygiene.
              </p>
            </div>

            <div className="inline-flex rounded-lg border border-[#E5E7EB] bg-white p-1">
              {(["30days", "quarter"] as Timeframe[]).map((tf) => (
                <button
                  key={tf}
                  onClick={() => setTimeframe(tf)}
                  className={`ri-tab rounded-md px-4 py-2 text-sm font-semibold ${
                    timeframe === tf
                      ? "bg-[#1F2937] text-white"
                      : "text-[#6B7280] hover:text-[#1F2937]"
                  }`}
                >
                  {tf === "30days" ? "Last 30 Days" : "Quarter"}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-8 grid items-stretch gap-6 lg:grid-cols-[2fr_1fr]">
            <div className="fade-up flex h-full flex-col rounded-2xl border border-[#ECECF4] bg-white p-7 shadow-sm" style={{ animationDelay: ".1s" }}>
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
                {data.stats.map((stat) => {
                  const Icon = stat.icon;

                  return (
                    <div key={stat.label} className="ri-card rounded-xl border border-[#ECECF4] p-4">
                      <Icon size={16} className="text-[#4F63F0]" strokeWidth={2} />
                      <p className="mt-3 text-[10px] font-semibold uppercase tracking-wide text-[#9CA3AF]">
                        {stat.label}
                      </p>
                      <p className="mt-1 text-xl font-bold text-[#1F2937]">{stat.value}</p>
                      <p className="mt-1 text-[11px] font-medium text-[#16A34A]">{stat.change}</p>
                    </div>
                  );
                })}
              </div>

              <div className="mt-6 grid gap-4 lg:grid-cols-2">
                <div className="rounded-xl border border-[#ECECF4] p-5">
                  <p className="text-xs font-semibold text-[#1F2937]">
                    Meetings Activity vs. Follow-up Completion
                  </p>

                  <svg viewBox="0 0 280 80" className="mt-4 w-full">
                    <polyline
                      points={points}
                      fill="none"
                      stroke="#4F63F0"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeDasharray="4 3"
                    />
                    {data.chart.map((value, index) => {
                      const x = (index / (data.chart.length - 1)) * 280;
                      const y = 70 - ((value - minChart) / (maxChart - minChart || 1)) * 60;
                      return <circle key={index} cx={x} cy={y} r="3" fill="#4F63F0" />;
                    })}
                  </svg>

                  <div className="mt-2 flex justify-between text-[10px] text-[#9CA3AF]">
                    {data.chartLabels.map((label) => (
                      <span key={label}>{label}</span>
                    ))}
                  </div>
                </div>

                <div className="rounded-xl border border-[#ECECF4] p-5">
                  <p className="text-xs font-semibold text-[#1F2937]">Content Usage Across Deal Stage</p>

                  <div className="mt-4 overflow-x-auto">
                    <table className="w-full min-w-[380px] border-collapse text-left">
                      <thead>
                        <tr>
                          <th className="pb-2 text-[9px] font-semibold uppercase tracking-wide text-[#9CA3AF]" />
                          {contentUsage.stages.map((stage) => (
                            <th
                              key={stage}
                              className="pb-2 text-center text-[9px] font-semibold uppercase tracking-wide text-[#9CA3AF]"
                            >
                              {stage}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {contentUsage.rows.map((row) => (
                          <tr key={row.label}>
                            <td className="py-1 pr-2 text-[11px] text-[#4B5563]">{row.label}</td>
                            {row.values.map((value, i) => (
                              <td key={i} className="p-1 text-center">
                                <span
                                  className="block rounded py-1 text-[10px] font-semibold"
                                  style={{
                                    backgroundColor: `rgba(79,99,240,${value / 100})`,
                                    color: value > 55 ? "#fff" : "#4F63F0",
                                  }}
                                >
                                  {value}%
                                </span>
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

              <div className="mt-4 grid flex-1 gap-4 lg:grid-cols-2">
                <div className="rounded-xl border border-[#ECECF4] p-5">
                  <p className="text-xs font-semibold text-[#1F2937]">Health Accounts</p>

                  <div className="mt-3 overflow-x-auto">
                    <table className="w-full min-w-[280px] border-collapse text-left text-[11px]">
                      <thead>
                        <tr className="text-[9px] uppercase tracking-wide text-[#9CA3AF]">
                          <th className="pb-2 font-semibold">Account</th>
                          <th className="pb-2 font-semibold">Health</th>
                          <th className="pb-2 font-semibold">Engagement</th>
                        </tr>
                      </thead>
                      <tbody>
                        {healthAccounts.map((acc) => (
                          <tr key={acc.name} className="border-t border-[#F3F4F6]">
                            <td className="py-2 pr-2 font-medium text-[#1F2937]">{acc.name}</td>
                            <td className="py-2 pr-2 font-semibold text-[#16A34A]">{acc.health}</td>
                            <td className="py-2">
                              <div className="h-1.5 w-16 overflow-hidden rounded-full bg-[#F3F4F6]">
                                <div
                                  className="h-full rounded-full bg-[#4F63F0]"
                                  style={{ width: `${acc.engagement}%` }}
                                />
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="rounded-xl border border-[#ECECF4] p-5">
                  <p className="text-xs font-semibold text-[#1F2937]">Activity Leaderboard</p>

                  <div className="mt-3 space-y-2.5">
                    {leaderboard.map((owner, index) => (
                      <div key={owner.name} className="flex items-center justify-between text-[11px]">
                        <div className="flex items-center gap-2">
                          <span className="w-4 text-[#9CA3AF]">{index + 1}</span>
                          <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#EEF2FF] text-[9px] font-bold text-[#4F63F0]">
                            {owner.initials}
                          </span>
                          <span className="font-medium text-[#1F2937]">{owner.name}</span>
                        </div>
                        <span className="font-semibold text-[#4B5563]">{owner.meetings} meetings</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="fade-up flex h-full flex-col gap-4" style={{ animationDelay: ".2s" }}>
              <div className="ri-card flex flex-1 flex-col justify-center rounded-2xl border border-[#ECECF4] bg-white p-6">
                <p className="text-xs font-semibold uppercase tracking-wide text-[#9CA3AF]">
                  Commitment Rate
                </p>
                <p className="mt-2 text-3xl font-bold text-[#4F63F0]">{data.commitmentRate}</p>
                <p className="mt-2 text-xs font-medium text-[#16A34A]">{data.commitmentChange}</p>
              </div>

              <div className="ri-card flex flex-1 flex-col justify-center rounded-2xl border border-[#ECECF4] bg-white p-6">
                <p className="text-xs font-semibold uppercase tracking-wide text-[#9CA3AF]">
                  Follow-up Speed
                </p>
                <p className="mt-2 text-3xl font-bold text-[#16A34A]">{data.followUpSpeed}</p>
                <p className="mt-2 text-xs font-medium text-[#16A34A]">{data.followUpChange}</p>
              </div>

              <div className="ri-card flex flex-1 flex-col justify-center rounded-2xl bg-[#11163C] p-6">
                <p className="text-xs font-semibold uppercase tracking-wide text-[#9AA3C0]">
                  CRM Freshness
                </p>
                <p className="mt-2 text-3xl font-bold text-white">{data.crmFreshness}</p>
                <p className="mt-2 text-xs font-medium text-[#8FA3FF]">Automatic updates active</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
