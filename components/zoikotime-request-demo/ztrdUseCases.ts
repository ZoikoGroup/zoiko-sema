import { Link2, ShieldCheck, PenLine, Network, ShieldAlert, BarChart3, LucideIcon } from "lucide-react";

export interface UseCaseOption {
  id: string;
  icon: LucideIcon;
  title: string;
  desc: string;
  followUp: string;
}

export const useCaseOptions: UseCaseOption[] = [
  {
    id: "sema-zoikotime",
    icon: Link2,
    title: "Sema + ZoikoTime",
    desc: "General enterprise demo for connected communication and work truth.",
    followUp: "Sales + solution engineer",
  },
  {
    id: "workforce-truth",
    icon: ShieldCheck,
    title: "Workforce Truth",
    desc: "Reliable, source-linked work visibility across the organization.",
    followUp: "Executive / operations demo",
  },
  {
    id: "meeting-to-work",
    icon: PenLine,
    title: "Meeting-to-Work",
    desc: "Turn meeting outputs into owned, tracked work.",
    followUp: "Workflow demo",
  },
  {
    id: "verified-collaboration",
    icon: Network,
    title: "Verified Collaboration",
    desc: "Evidence-backed collaboration records across teams.",
    followUp: "Governance demo",
  },
  {
    id: "compliance-audit",
    icon: ShieldAlert,
    title: "Compliance & Audit",
    desc: "Audit packs, evidence trails, and export controls.",
    followUp: "Compliance + security review",
  },
  {
    id: "productivity-intelligence",
    icon: BarChart3,
    title: "Productivity Intelligence",
    desc: "Team-level insight and operational intelligence, governed.",
    followUp: "Productivity intelligence demo",
  },
];