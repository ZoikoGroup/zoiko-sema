"use client";

import { useState } from "react";
import {
  Settings,
  IdCard,
  CircleDollarSign,
  TrendingUp,
  Bot,
  CheckCircle2,
} from "lucide-react";

interface Department {
  id: string;
  label: string;
  title: string;
  description: string;
  checklist: string[];
  image: string;
  icon: typeof Settings;
}

const departments: Department[] = [
  {
    id: "it",
    label: "IT",
    title: "IT Overview",
    description:
      "Centralize ticketing, asset tracking, and access requests with automated escalation paths built for uptime-critical teams.",
    checklist: ["ISO 27001 Change Control", "Automated Incident Escalation"],
    image: "/department-solutions/it-overview.png",
    icon: Settings,
  },
  {
    id: "hr",
    label: "HR",
    title: "HR Overview",
    description:
      "Streamline onboarding, PII-sensitive records, and employee communications with redaction and retention built in.",
    checklist: [
      "PII Redaction & Access Controls",
      "Automated Onboarding Milestones",
    ],
    image: "/department-solutions/hr-overview.png",
    icon: IdCard,
  },
  {
    id: "finance",
    label: "Finance",
    title: "Finance Overview",
    description:
      "Automate regulatory oversight with dedicated archiving for high-stakes communications. Real-time audit trails ensure every request meets institutional standards.",
    checklist: ["FINRA & SEC Compliance Readiness", "Immutable Record Retention"],
    image: "/department-solutions/finance-overview.png",
    icon: CircleDollarSign,
  },
  {
    id: "sales",
    label: "Sales",
    title: "Sales Overview",
    description:
      "Track deal conversations, proposal approvals, and customer commitments with governed record-keeping across every deal cycle.",
    checklist: [
      "CRM-Linked Conversation Threads",
      "Automated Deal Approval Trails",
    ],
    image: "/department-solutions/sales-overview.png",
    icon: TrendingUp,
  },
  {
    id: "operations",
    label: "Operations",
    title: "Operations Overview",
    description:
      "Coordinate cross-functional execution with shared visibility into workflows, vendor communications, and process compliance.",
    checklist: [
      "Vendor Communication Oversight",
      "Process Compliance Monitoring",
    ],
    image: "/department-solutions/operations-overview.png",
    icon: Bot,
  },
];

export default function WorkflowCenter() {
  const [selectedId, setSelectedId] = useState("finance");
  const selected =
    departments.find((d) => d.id === selectedId) ?? departments[0];

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

        .dept-pill{ transition: transform .2s ease, box-shadow .2s ease, border-color .2s ease; }
        .dept-pill:hover{ transform: translateY(-3px); }

        .dept-panel{ transition: opacity .25s ease; }
      `}</style>

      <section id="workflow-center" className="bg-white px-6 py-20 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-6xl">
          <div key={selected.id} className="dept-panel fade-up grid items-center gap-14 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold text-[#1F2937] md:text-[38px]">
                {selected.title}
              </h2>

              <p className="mt-5 max-w-lg text-[17px] leading-8 text-[#6B7280]">
                {selected.description}
              </p>

              <div className="mt-8 space-y-4">
                {selected.checklist.map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle2
                      size={20}
                      className="shrink-0 text-[#4F63F0]"
                      strokeWidth={2}
                    />
                    <span className="text-[15px] font-medium text-[#374151]">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="overflow-hidden rounded-2xl">
              <img
                src={selected.image}
                alt={selected.title}
                className="w-full object-cover"
              />
            </div>
          </div>

          <div className="mt-20 text-center">
            <h3 className="text-2xl font-bold text-[#1F2937] md:text-[28px]">
              Select Your Workflow Center
            </h3>

            <p className="mx-auto mt-3 max-w-xl text-[15px] leading-7 text-[#6B7280]">
              Selecting a department instantly reconfigures dashboards, AI
              rules, and compliance boundaries.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
            {departments.map((dept) => {
              const Icon = dept.icon;
              const isActive = dept.id === selectedId;

              return (
                <button
                  key={dept.id}
                  onClick={() => setSelectedId(dept.id)}
                  className={`dept-pill flex flex-col items-center gap-2.5 rounded-xl bg-[#4A4F99] px-4 py-6 ${
                    isActive
                      ? "ring-2 ring-[#4F9BFF] shadow-lg"
                      : "hover:shadow-md"
                  }`}
                >
                  <Icon size={22} className="text-white" strokeWidth={1.75} />
                  <span className="text-sm font-medium text-white">
                    {dept.label}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
