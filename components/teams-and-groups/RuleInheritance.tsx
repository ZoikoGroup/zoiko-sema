"use client";

import React from "react";

export default function RuleInheritance() {
  const objectsData = [
    {
      num: "01",
      title: "Organization",
      desc: "Tenant ID, owner, domains, default region/timezone, status, source. Top-level boundary; cannot be deleted while records or legal holds require retention.",
    },
    {
      num: "02",
      title: "Business unit",
      desc: "ID, parent, executive owner, countries, reporting currency, default policies. Optional layer for regional governance.",
    },
    {
      num: "03",
      title: "Department",
      desc: "ID, code, parent, head, locations, worker types, cost center, policy/schedule defaults, effective dates.",
    },
    {
      num: "04",
      title: "Team",
      desc: "Purpose, parent, primary/secondary manager, members, subteams, schedule, policy set, approval route, access profile, sync source.",
    },
    {
      num: "05",
      title: "Group",
      desc: "Type, purpose, owner, membership method, rule/version, linked teams, access/policy/schedule/cost-center mapping, start/end date.",
    },
    {
      num: "06",
      title: "Membership",
      desc: "Worker ID, object, direct/inherited/dynamic, role, source, start/end, approver, status, reason, audit.",
    },
    {
      num: "07",
      title: "Access profile",
      desc: "Role/permission set, data scope, actions, exports, privileged flag, review cadence, expiry — separate from team membership.",
    },
  ];

  return (
    <section className="w-full bg-white text-[#0f1124] px-6 md:px-12 lg:px-16 py-16 md:py-24 flex flex-col items-center justify-center">
      <style
        dangerouslySetInnerHTML={{
          __html: `
            @keyframes fadeUpInherit {
              from {
                opacity: 0;
                transform: translateY(20px);
              }
              to {
                opacity: 1;
                transform: translateY(0);
              }
            }
            .animate-fade-up-inherit {
              animation: fadeUpInherit 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
            }
          `,
        }}
      />

      <div className="w-full max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start animate-fade-up-inherit">
        {/* Left Column Content & Visual */}
        <div className="lg:col-span-5 w-full flex flex-col">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-[10px] tracking-[0.25em] font-extrabold text-[#3b4fe4] uppercase">
              03 – OBJECT MODEL
            </span>
          </div>

          <h2 className="text-3xl md:text-[34px] font-bold tracking-tight leading-[1.15] text-[#0f1124] mb-5">
            Seven objects, each with a defined job.
          </h2>

          <p className="text-[13px] text-[#6b719c] leading-relaxed mb-8 max-w-sm">
            Structure isn't a flat list. Each object carries its own owner,
            fields, and behavior — and inherits policy, schedule, and access
            from the layer above.
          </p>

          <div className="w-full rounded-2xl overflow-hidden shadow-sm">
            <img
              src="/teams-and-groups/image 284.png"
              alt="image"
              className="w-full h-auto object-cover rounded-2xl"
            />
          </div>
        </div>

        {/* Right Column Structured Data Rows */}
        <div className="lg:col-span-7 w-full flex flex-col pt-2">
          <div className="flex flex-col w-full border-t border-[#ebedf5]">
            {objectsData.map((item, index) => (
              <div
                key={index}
                className="grid grid-cols-12 gap-2 py-7 border-b border-[#ebedf5] items-start text-xs"
              >
                {/* Number identifier */}
                <div className="col-span-1 text-[#a2a7cb] font-mono text-[11px] pt-0.5">
                  {item.num}
                </div>

                {/* Object Title */}
                <div className="col-span-3 font-bold text-[#0f1124] pr-2 text-[13px]">
                  {item.title}
                </div>

                {/* Object Spec Attributes */}
                <div className="col-span-8 text-[#51567d] leading-relaxed text-[12px]">
                  {item.desc}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
