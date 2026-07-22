"use client"
import {
  ShieldCheck,
  Lock,
  Sparkles,
  Activity,
  Building2,
  Headphones,
  ArrowRight,
  LucideIcon,
} from "lucide-react";
import { useRouter } from "next/navigation";

interface TrustCard {
  icon: LucideIcon;
  title: string;
  description: string;
  action: string;
  link:string;
}

const cards: TrustCard[] = [
  {
    icon: ShieldCheck,
    title: "Security",
    description: "Security practices and controls for protecting work communication.",
    action: "Visit Trust Center",
    link:"/trust-center"
  },
  {
    icon: Lock,
    title: "Privacy",
    description: "Privacy notice and data processing terms for teams and enterprises.",
    action: "Read Privacy Notice",
    link:"/privacy-notice"
  },
  {
    icon: Sparkles,
    title: "AI governance",
    description: "How AI is used, reviewed, and controlled across the workplace.",
    action: "Read AI Use Policy",
    link:"/ai-use-policy"
  },
  {
    icon: Activity,
    title: "System reliability",
    description: "System status and product updates for ongoing confidence.",
    action: "View System Status",
    link:"/status"
  },
  {
    icon: Building2,
    title: "Enterprise deployment",
    description: "Deployment, identity, and admin controls for larger organizations.",
    action: "Explore Enterprise Deployment",
    link:"/enterprise"
  },
  {
    icon: Headphones,
    title: "Support",
    description: "Help Center and contact routes when teams need assistance.",
    action: "Get Help",
    link:"/help-center"
  },
];

export default function TrustEnterpriseReadinessSection() {
  const router = useRouter();
  return (
    <section className="bg-[#F3F2FD] px-6 py-16 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-6xl text-center">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[2px] text-[#4F63F0]">
          Trust &amp; enterprise readiness
        </p>
        <h2 className="mx-auto max-w-xl text-3xl font-extrabold leading-snug text-gray-900 sm:text-[32px]">
          Credible enough for business communication
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-gray-500">
          Security, privacy, AI governance, reliability, deployment, and support — with clear
          routes to the details buyers need.
        </p>

        <div className="mt-10 grid grid-cols-1 gap-5 text-left sm:grid-cols-2 lg:grid-cols-3">
          {cards.map(({ icon: Icon, title, description, action,link }) => (
            <div
              key={title}
              className="rounded-2xl bg-white p-6 shadow-sm"
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-[#EDEBFB] text-[#4F63F0]">
                <Icon size={18} strokeWidth={2} />
              </div>
              <h3 className="text-sm font-semibold text-gray-900">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-500">
                {description}
              </p>
              <button onClick={()=>router.push(link)}
              className="mt-4 flex cursor-pointer items-center gap-1 text-xs font-semibold text-[#4F63F0] hover:text-[#3E51DE]">
                {action}
                <ArrowRight size={12} />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
