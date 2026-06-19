"use client";

import React, { useEffect, useState, useRef, useMemo } from "react";

function useInView(threshold = 0.05) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setInView(true); obs.disconnect(); } },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, inView };
}

type Resource = {
  badge: string;
  title: string;
  desc: string;
  time: number;
  href: string;
  topic: string;
  audience: string;
  type: string;
};

const resources: Resource[] = [
  { badge:"ARTICLE",    title:"What Is Accountable Communication?",                       desc:"A working definition for teams that want conversations to produce decisions, owners, and follow-through — not just meeting notes.",                                                          time:6,  href:"#", topic:"Accountable Communication", audience:"Teams",       type:"Article"    },
  { badge:"PLAYBOOK",   title:"Turning Meetings Into Decisions: A Team Playbook",          desc:"Step-by-step rituals for ending every meeting with a decision log, a checklist and clear next steps.",                                                                                      time:14, href:"#", topic:"AI Meeting Intelligence",    audience:"Teams",       type:"Playbook"   },
  { badge:"GUIDE",      title:"How AI Meeting Summaries Work — and What They Miss",        desc:"A practical look at what AI summarisation handles well, where it needs human review, and how to calibrate expectations.",                                                                   time:11, href:"#", topic:"AI Meeting Intelligence",    audience:"All",         type:"Guide"      },
  { badge:"FAQ",        title:"How Does Sema Extract Action Items from a Meeting?",        desc:"A short answer for evaluators: how owner detection works, what signals matter most, and where the limits are.",                                                                              time:4,  href:"#", topic:"AI Meeting Intelligence",    audience:"Businesses",  type:"FAQ"        },
  { badge:"COMPARISON", title:"Can Sema Work Alongside Slack or Microsoft Teams?",         desc:"A side-by-side look at where Sema complements existing chat platforms and where it consolidates workflows over time.",                                                                      time:9,  href:"#", topic:"Comparisons",               audience:"Businesses",  type:"Comparison" },
  { badge:"COMPARISON", title:"Sema vs. Zoom: Beyond the Video Call",                     desc:"When teams need video plus messaging, AI summaries, and accountable follow-through, the comparison shifts from features to outcomes.",                                                       time:8,  href:"#", topic:"Comparisons",               audience:"Teams",       type:"Comparison" },
  { badge:"GUIDE",      title:"Responsible AI in Communication Platforms",                 desc:"What 'responsible AI' means in practice for meeting summarisation, decision capture, and team workflows. Designed for evaluators.",                                                         time:13, href:"#", topic:"Governance and Trust",       audience:"Businesses",  type:"Guide"      },
  { badge:"ARTICLE",    title:"What Happens to Meeting Data in Sema?",                    desc:"A clear walkthrough of how Sema handles transcripts, summaries, and AI artifacts — including retention, deletion, and admin controls.",                                                      time:7,  href:"#", topic:"Governance and Trust",       audience:"Businesses",  type:"Article"    },
  { badge:"GUIDE",      title:"Sema + ZoikoTime: An Integration Primer",                  desc:"For organisations evaluating how communication signals can support workforce truth — what the integration covers and what stays separate.",                                                   time:10, href:"#", topic:"Sema + ZoikoTime",           audience:"Businesses",  type:"Guide"      },
  { badge:"ARTICLE",    title:"When Should Communication Connect to Workforce Records?",   desc:"A boundary-setting article on where Sema + ZoikoTime integration makes sense — and where to draw the line.",                                                                               time:9,  href:"#", topic:"Sema + ZoikoTime",           audience:"Businesses",  type:"Article"    },
  { badge:"PLAYBOOK",   title:"Cross-Functional Coordination Without the Status Meeting",  desc:"How distributed teams use channels, summaries, and decision pins to stay aligned without the overhead.",                                                                                    time:12, href:"#", topic:"Team Collaboration",         audience:"Teams",       type:"Playbook"   },
  { badge:"ARTICLE",    title:"Sema for Individual Power Users: A Workflow Guide",         desc:"For freelancers, consultants, and solo professionals — how to use Sema to manage client communication, follow-ups, and context.",                                                           time:8,  href:"#", topic:"Team Collaboration",         audience:"Individuals", type:"Article"    },
];

const allTopics    = ["All topics",    "Accountable Communication", "AI Meeting Intelligence", "Comparisons", "Governance and Trust", "Sema + ZoikoTime", "Team Collaboration"];
const allAudiences = ["All audiences", "Teams", "Businesses", "Individuals", "All"];
const allTypes     = ["All formats",   "Article", "Playbook", "Guide", "FAQ", "Comparison"];

// Badge style — all outline pills like screenshot
const badgeStyle = { bg:"#fff", color:"#474889", border:"1px solid #474889" };

function ClockIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
    </svg>
  );
}
function ChevronDown() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="6 9 12 15 18 9"/>
    </svg>
  );
}

export default function ResourcesLibrarySection() {
  const { ref: headRef, inView: headIn } = useInView(0.15);
  const { ref: gridRef, inView: gridIn } = useInView(0.04);

  const [topic,    setTopic]    = useState("All topics");
  const [audience, setAudience] = useState("All audiences");
  const [type,     setType]     = useState("All formats");
  const [filterKey, setFilterKey] = useState(0);

  const filtered = useMemo(() => resources.filter(r =>
    (topic    === "All topics"    || r.topic    === topic)    &&
    (audience === "All audiences" || r.audience === audience || audience === "All") &&
    (type     === "All formats"   || r.type     === type)
  ), [topic, audience, type]);

  function change<T>(setter: React.Dispatch<React.SetStateAction<T>>, val: T) {
    setter(val);
    setFilterKey(k => k + 1);
  }

  return (
    <>
      <style>{`
        @keyframes rlbFadeUp {
          from { opacity:0; transform:translateY(22px); }
          to   { opacity:1; transform:translateY(0); }
        }
        .rlb-hidden  { opacity:0; transform:translateY(22px); }
        .rlb-visible { animation: rlbFadeUp .55s cubic-bezier(.22,1,.36,1) forwards; }

        @keyframes rlbCardIn {
          from { opacity:0; transform:translateY(16px); }
          to   { opacity:1; transform:translateY(0); }
        }
        .rlb-card { opacity:0; transition:transform .25s ease, box-shadow .25s ease; }
        .rlb-grid-in .rlb-card { animation: rlbCardIn .4s ease forwards; }
        .rlb-grid-in .rlb-card:nth-child(1)  { animation-delay:.02s; }
        .rlb-grid-in .rlb-card:nth-child(2)  { animation-delay:.06s; }
        .rlb-grid-in .rlb-card:nth-child(3)  { animation-delay:.10s; }
        .rlb-grid-in .rlb-card:nth-child(4)  { animation-delay:.14s; }
        .rlb-grid-in .rlb-card:nth-child(5)  { animation-delay:.18s; }
        .rlb-grid-in .rlb-card:nth-child(6)  { animation-delay:.22s; }
        .rlb-grid-in .rlb-card:nth-child(7)  { animation-delay:.26s; }
        .rlb-grid-in .rlb-card:nth-child(8)  { animation-delay:.30s; }
        .rlb-grid-in .rlb-card:nth-child(9)  { animation-delay:.34s; }
        .rlb-grid-in .rlb-card:nth-child(10) { animation-delay:.38s; }
        .rlb-grid-in .rlb-card:nth-child(11) { animation-delay:.42s; }
        .rlb-grid-in .rlb-card:nth-child(12) { animation-delay:.46s; }

        .rlb-card:hover {
          transform: translateY(-3px) !important;
          box-shadow: 0 10px 28px rgba(71,71,135,0.10) !important;
        }

        /* native select reset + styling */
        .rlb-select {
          -webkit-appearance: none;
          appearance: none;
          cursor: pointer;
          outline: none;
          transition: border-color .18s;
        }
        .rlb-select:hover  { border-color: #a5b4fc !important; }
        .rlb-select:focus  { border-color: #6366f1 !important; box-shadow: 0 0 0 3px rgba(99,102,241,0.12); }

        /* read link */
        .rlb-read { display:inline-flex; align-items:center; gap:5px; transition:gap .18s; }
        .rlb-read:hover { gap:9px; }
        .rlb-read-arrow { display:inline-block; transition:transform .18s; }
        .rlb-read:hover .rlb-read-arrow { transform:translateX(3px); }

        /* line-clamp */
        .rlb-clamp3 {
          display:-webkit-box; -webkit-line-clamp:3;
          -webkit-box-orient:vertical; overflow:hidden;
        }
        .rlb-clamp4 {
          display:-webkit-box; -webkit-line-clamp:4;
          -webkit-box-orient:vertical; overflow:hidden;
        }

        @media (prefers-reduced-motion:reduce) {
          .rlb-hidden,.rlb-card { opacity:1!important; transform:none!important; animation:none!important; }
          .rlb-visible { animation:none!important; opacity:1!important; }
          .rlb-card:hover { transform:none!important; }
        }
      `}</style>

      <section
        aria-label="Browse the full resource library"
        className="w-full py-16 md:py-20"
        style={{ background: "#ECF3FF" }}
      >
        <div className="mx-auto w-full max-w-7xl px-6 md:px-10 lg:px-16">

          {/* ── Heading ── */}
          <div ref={headRef} className={`rlb-hidden ${headIn ? "rlb-visible" : ""} text-center mb-8`}>
            <p className="text-[11px] font-bold uppercase tracking-[0.18em] mb-4" style={{ color:"#4f46e5" }}>
              All Resources
            </p>
            <h2 className="font-bold leading-[1.1] tracking-tight text-gray-900 mb-3" style={{ fontSize:"35px" }}>
              Browse the full resource library
            </h2>
            <p className="text-[15px] leading-[1.75] text-gray-500">
              Filter by topic, audience, or format to find what you need.
            </p>
          </div>

          {/* ── Filter bar — white rounded card ── */}
          <div
            className={`rlb-hidden ${headIn ? "rlb-visible" : ""} flex flex-wrap items-center gap-x-6 gap-y-3 rounded-2xl bg-white px-6 py-4 mb-4`}
            style={{
              border:"1px solid #e5e7eb",
              boxShadow:"0 2px 12px rgba(71,71,135,0.06)",
              animationDelay:"0.08s",
            }}
          >
            {/* FILTER label */}
            <span className="text-[11.5px] font-semibold uppercase tracking-[0.14em] text-gray-400 flex-shrink-0">
              Filter
            </span>

            {/* Topic */}
            <div className="flex items-center gap-2.5">
              <span className="text-[13.5px] font-medium text-gray-700">Topic</span>
              <div className="relative flex items-center">
                <select
                  value={topic}
                  onChange={e => change(setTopic, e.target.value)}
                  className="rlb-select rounded-lg border text-[13.5px] font-medium text-gray-800 bg-white pl-3 pr-8 py-1.5"
                  style={{ borderColor:"#e5e7eb", minWidth:148 }}
                >
                  {allTopics.map(t => <option key={t} value={t}>{t}</option>)}
                </select>
                <span className="pointer-events-none absolute right-2.5 flex items-center">
                  <ChevronDown />
                </span>
              </div>
            </div>

            {/* Audience */}
            <div className="flex items-center gap-2.5">
              <span className="text-[13.5px] font-medium text-gray-700">Audience</span>
              <div className="relative flex items-center">
                <select
                  value={audience}
                  onChange={e => change(setAudience, e.target.value)}
                  className="rlb-select rounded-lg border text-[13.5px] font-medium text-gray-800 bg-white pl-3 pr-8 py-1.5"
                  style={{ borderColor:"#e5e7eb", minWidth:152 }}
                >
                  {allAudiences.map(a => <option key={a} value={a}>{a}</option>)}
                </select>
                <span className="pointer-events-none absolute right-2.5 flex items-center">
                  <ChevronDown />
                </span>
              </div>
            </div>

            {/* Type */}
            <div className="flex items-center gap-2.5">
              <span className="text-[13.5px] font-medium text-gray-700">Type</span>
              <div className="relative flex items-center">
                <select
                  value={type}
                  onChange={e => change(setType, e.target.value)}
                  className="rlb-select rounded-lg border text-[13.5px] font-medium text-gray-800 bg-white pl-3 pr-8 py-1.5"
                  style={{ borderColor:"#e5e7eb", minWidth:138 }}
                >
                  {allTypes.map(t => <option key={t} value={t}>{t}</option>)}
                </select>
                <span className="pointer-events-none absolute right-2.5 flex items-center">
                  <ChevronDown />
                </span>
              </div>
            </div>
          </div>

          {/* ── Resource count — right aligned, outside filter bar ── */}
          <div className="flex justify-end mb-5">
            <span className="text-[13px] font-medium text-gray-400">
              {filtered.length} resources
            </span>
          </div>

          {/* ── Cards grid ── */}
          <div
            ref={gridRef}
            key={filterKey}
            className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 ${gridIn ? "rlb-grid-in" : ""}`}
          >
            {filtered.length === 0
              ? (
                <div className="col-span-4 py-16 text-center text-[15px] text-gray-400">
                  No resources match the selected filters.
                </div>
              )
              : filtered.map((r, i) => (
                <div
                  key={`${r.title}-${i}`}
                  className="rlb-card flex flex-col rounded-2xl bg-white p-5"
                  style={{
                    border:"1px solid #e8ecf5",
                    boxShadow:"0 1px 8px rgba(71,71,135,0.05)",
                  }}
                >
                  {/* Badge */}
                  <span
                    className="inline-flex w-fit mb-4 px-3 py-1 rounded-full text-[10.5px] font-semibold uppercase tracking-[0.11em]"
                    style={badgeStyle}
                  >
                    {r.badge}
                  </span>

                  {/* Title */}
                  <h3 className="rlb-clamp3 text-[14.5px] font-bold leading-[1.4] text-gray-900 mb-2.5">
                    {r.title}
                  </h3>

                  {/* Desc */}
                  <p className="rlb-clamp4 text-[12.5px] leading-[1.65] text-gray-500 mb-5 flex-1">
                    {r.desc}
                  </p>

                  {/* Footer */}
                  <div
                    className="flex items-center justify-between pt-3 mt-auto"
                    style={{ borderTop:"1px solid #f3f4f6" }}
                  >
                    <span className="flex items-center gap-1.5 text-[12px] text-gray-400">
                      <ClockIcon />
                      {r.time} min
                    </span>
                    <a
                      href={r.href}
                      className="rlb-read text-[13px] font-semibold"
                      style={{ color:"#474787" }}
                    >
                      Read
                      <span className="rlb-read-arrow" aria-hidden="true">→</span>
                    </a>
                  </div>
                </div>
              ))
            }
          </div>

        </div>
      </section>
    </>
  );
}