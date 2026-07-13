"use client";

import { MessageCircle, Phone, Sparkles, ShieldCheck, Shield, LucideIcon } from "lucide-react";
import { useInView } from "./useInView";

interface EcosystemNode {
  icon: LucideIcon;
  name: string;
  nameClass: string;
  description: string;
  tag?: { label: string; className: string };
  iconBg: string;
  iconColor: string;
  borderColor: string;
}

const nodes: EcosystemNode[] = [
  {
    icon: MessageCircle,
    name: "ZoikoSema",
    nameClass: "text-[#4F63F0]",
    description: "Business communication & governed collaboration.",
    tag: { label: "Active product", className: "bg-emerald-500/15 text-emerald-400" },
    iconBg: "bg-[#4F63F0]/20",
    iconColor: "text-[#8FA3FF]",
    borderColor: "border-[#4F63F0]/40",
  },
  {
    icon: Phone,
    name: "Zoiko Telecom",
    nameClass: "text-teal-300",
    description: "Related ecosystem route.",
    iconBg: "bg-teal-400/15",
    iconColor: "text-teal-300",
    borderColor: "border-white/10",
  },
  {
    icon: Sparkles,
    name: "Zoiko AI",
    nameClass: "text-white",
    description: "AI systems & governance route.",
    tag: { label: "Approved claims only", className: "bg-white/10 text-[#AEB7CC]" },
    iconBg: "bg-violet-400/15",
    iconColor: "text-violet-300",
    borderColor: "border-white/10",
  },
  {
    icon: ShieldCheck,
    name: "ZoikoMeds",
    nameClass: "text-emerald-300",
    description: "Healthcare intelligence route.",
    tag: { label: "Neutral · where approved", className: "bg-white/10 text-[#AEB7CC]" },
    iconBg: "bg-emerald-400/15",
    iconColor: "text-emerald-300",
    borderColor: "border-white/10",
  },
  {
    icon: Shield,
    name: "Trust Layer",
    nameClass: "text-amber-300",
    description: "Security, privacy, legal & status.",
    iconBg: "bg-amber-400/15",
    iconColor: "text-amber-300",
    borderColor: "border-white/10",
  },
];

export default function ZoikoGroupEcosystemMapSection() {
  const { ref: headRef, inView: headIn } = useInView(0.2);
  const { ref: panelRef, inView: panelIn } = useInView(0.1);

  return (
    <>
      <style>{`
        @keyframes zgMapUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .zg-map-hidden { opacity: 0; transform: translateY(20px); }
        .zg-map-visible { animation: zgMapUp .55s cubic-bezier(.22,1,.36,1) forwards; }

        @keyframes zgNodeStagger {
          from { opacity: 0; transform: translateY(14px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .zg-node { opacity: 0; animation: zgNodeStagger .5s ease forwards; }

        .zg-node-card {
          transition: transform .22s ease, box-shadow .22s ease, border-color .22s ease, background-color .22s ease;
        }
        .zg-node-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 18px 34px -16px rgba(0,0,0,0.5);
          background-color: rgba(255,255,255,0.06);
        }
        .zg-root-card { transition: transform .3s ease, box-shadow .3s ease; }
        .zg-root-card:hover { transform: translateY(-3px); box-shadow: 0 20px 40px -16px rgba(0,0,0,0.35); }
        .zg-root-link { transition: color .2s ease, gap .2s ease; }
        .zg-root-link .zg-arrow { transition: transform .2s ease; display: inline-block; }
        .zg-root-link:hover .zg-arrow { transform: translateX(3px); }

        @media (prefers-reduced-motion: reduce) {
          .zg-map-hidden { opacity: 1 !important; transform: none !important; }
          .zg-map-visible { animation: none !important; }
          .zg-node { opacity: 1 !important; animation: none !important; }
        }
      `}</style>

      <section id="ecosystem-map" className="bg-[#0B1330] px-6 py-16 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-6xl text-center">
          <div ref={headRef} className={`zg-map-hidden ${headIn ? "zg-map-visible" : ""}`}>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[2px] text-[#7C8CF8]">
              Ecosystem map
            </p>
            <h2 className="mx-auto max-w-2xl text-3xl font-extrabold leading-10 text-white sm:text-[32px]">
              How the ecosystem connects
            </h2>
            <p className="mx-auto mt-4 max-w-160 text-sm leading-relaxed text-[#AEB7CC]">
              Zoiko Group at the center, Zoiko Sema as your active context, and
              related routes shown where approved.
            </p>
          </div>

          <div
            ref={panelRef}
            className={`zg-map-hidden ${panelIn ? "zg-map-visible" : ""} mt-10 rounded-2xl border border-white/10 bg-white/3 p-8 sm:p-10`}
            style={{ animationDelay: "0.1s" }}
          >
            {/* Root node */}
            <div className="zg-root-card mx-auto w-full max-w-xs rounded-2xl bg-white px-6 py-5 shadow-[0_20px_40px_rgba(0,0,0,0.25)]">
              <p className="text-lg font-extrabold tracking-tight text-[#0B1330]">
                Zoiko<span className="text-teal-600">Group</span>
              </p>
              <p className="mt-1 text-xs leading-relaxed text-gray-500">
                Parent ecosystem &amp; shared operating vision
              </p>
              <a
                href="/about"
                className="zg-root-link mt-2 inline-flex items-center gap-1 text-xs font-semibold text-[#4F63F0] hover:text-[#3E51DE]"
              >
                Company overview
                <span className="zg-arrow">→</span>
              </a>
            </div>

            {/* Connecting line */}
            <div className="mx-auto h-8 w-px bg-white/15" />

            {/* Ecosystem nodes */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
              {nodes.map((node, i) => (
                <div
                  key={node.name}
                  className={`zg-node zg-node-card rounded-2xl border ${node.borderColor} bg-white/2 p-5 text-left`}
                  style={{ animationDelay: `${i * 0.08}s` }}
                >
                  <div
                    className={`mb-3 flex h-9 w-9 items-center justify-center rounded-lg ${node.iconBg} ${node.iconColor}`}
                  >
                    <node.icon size={16} strokeWidth={2} />
                  </div>
                  <p className={`text-sm font-bold ${node.nameClass}`}>{node.name}</p>
                  <p className="mt-1.5 text-[12.5px] leading-relaxed text-[#9CA0C4]">
                    {node.description}
                  </p>
                  {node.tag && (
                    <span
                      className={`mt-3 inline-flex items-center rounded-full px-2 py-0.5 text-[10px] font-semibold ${node.tag.className}`}
                    >
                      {node.tag.label}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
