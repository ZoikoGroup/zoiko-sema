"use client";

import React from "react";
import { useInView } from "@/components/Personal-to-team/useInView";

const cards = [
  {
    title: "Time-zone Coordination",
    desc: "Eliminate the guesswork of availability with intelligent overlap mapping and quiet hour protection.",
    img: "/Hybrid/card-timezone.jpg",
  },
  {
    title: "Missed Handoffs",
    desc: "Automated task transitions ensure that when London logs off, New York is ready to pick up the baton.",
    img: "/Hybrid/card-handoff.jpg",
  },
  {
    title: "Scattered Context",
    desc: "Unify messages, meetings, and files into a single governed workspace that lives across time zones.",
    img: "/Hybrid/card-team-updates.jpg",
  },
];

export function StopDriftSection() {
  const { ref, inView } = useInView(0.15);

  return (
    <section className="w-full bg-white overflow-hidden">
      <div
        ref={ref}
        className="max-w-[1280px] mx-auto px-6 md:px-12 pt-10 pb-[72px] flex flex-col items-center gap-16"
      >
        {/* Header */}
        <div
          className={`flex flex-col items-center gap-4 transition-all duration-700 transform ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
        >
          <h2 className="text-center text-zinc-900 text-3xl font-semibold font-sans leading-10">
            Stop the distributed drift
          </h2>
          <div className="max-w-[672px]">
            <p className="text-center text-zinc-700 text-base font-normal font-['Inter'] leading-6">
              Siloed communication and time-zone friction cost enterprise teams
              thousands of hours
              <br />
              annually. We solve for the gap.
            </p>
          </div>
        </div>

        {/* Cards */}
        <div className="self-stretch grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((card, i) => (
            <div
              key={card.title}
              className={`p-6 bg-white/70 rounded-xl border border-slate-200/80 backdrop-blur-[6px] flex flex-col gap-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-500 transform ${inView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-12"
                }`}
              style={{ transitionDelay: `${200 + i * 150}ms` }}
            >
              {/* Card Image */}
              <div className="self-stretch h-40 bg-gray-100 rounded-lg border border-neutral-300/20 overflow-hidden">
                <img
                  src={card.img}
                  alt={card.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Card Content */}
              <div className="flex flex-col gap-2">
                <h3 className="text-zinc-900 text-2xl font-semibold font-sans leading-8">
                  {card.title}
                </h3>
                <p className="text-zinc-700 text-sm font-normal font-['Inter'] leading-5">
                  {card.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
