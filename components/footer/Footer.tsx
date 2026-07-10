"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaPinterest } from "react-icons/fa";

/* ─────────────────────────────────────────────
   Types
───────────────────────────────────────────── */
type FooterItem = { label: string; href: string; badge?: string };

/* ─────────────────────────────────────────────
   Intersection-observer hook for scroll-in animations
───────────────────────────────────────────── */
function useInView(threshold = 0.1) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);

  return { ref, visible };
}

/* ─────────────────────────────────────────────
   FooterColumn
───────────────────────────────────────────── */
function FooterColumn({
  title,
  items,
  titleColor = "text-white",
  linkColor = "text-gray-300",
  dotColor = "bg-white",
  delay = 0,
  visible = false,
}: {
  title: string;
  items: FooterItem[];
  titleColor?: string;
  linkColor?: string;
  dotColor?: string;
  delay?: number;
  visible?: boolean;
}) {
  return (
    <div
      style={{
        transitionDelay: `${delay}ms`,
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(24px)",
        transition: "opacity 0.55s ease, transform 0.55s ease",
      }}
    >
      {/* Column heading with bullet dot */}
      <h4
        className={`font-bold uppercase text-xs tracking-widest mb-4 pb-3 border-b border-white/20 flex items-center gap-2 ${titleColor}`}
      >
        <span
          className={`inline-block w-[7px] h-[7px] rounded-full flex-shrink-0 ${dotColor}`}
        />
        {title}
      </h4>

      <ul className="space-y-[10px]">
        {items.map((item) => (
          <li key={item.label} className="flex items-center gap-2">
            <Link
              href={item.href}
              className={`${linkColor} hover:text-white text-sm transition-colors duration-200 leading-snug`}
            >
              {item.label}
            </Link>
            {item.badge && (
              <span className="text-[9px] font-bold uppercase tracking-wider bg-white/20 text-white border border-white/30 px-[6px] py-[2px] rounded-sm">
                {item.badge}
              </span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

/* ─────────────────────────────────────────────
   Section label  e.g. "PRODUCT & BUYER NAVIGATION"
───────────────────────────────────────────── */
function SectionLabel({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-3 mb-8">
      <span className="uppercase text-[10px] tracking-[4px] text-gray-400 whitespace-nowrap">
        {label}
      </span>
      <span className="flex-1 border-t border-white/20" />
    </div>
  );
}

/* ─────────────────────────────────────────────
   Compliance badge pill
───────────────────────────────────────────── */
function Badge({
  label,
  highlight = false,
  amber = false,
}: {
  label: string;
  highlight?: boolean;
  amber?: boolean;
}) {
  return (
    <span
      className={`inline-block px-3 py-[6px] text-xs font-medium rounded border transition-colors duration-200 cursor-default
        ${
          amber
            ? "bg-amber-400/20 border-amber-400/60 text-amber-300 hover:bg-amber-400/30"
            : highlight
            ? "bg-cyan-400/20 border-cyan-400/60 text-cyan-300 hover:bg-cyan-400/30"
            : "bg-white/10 border-white/20 text-gray-300 hover:bg-white/20"
        }`}
    >
      {label}
    </span>
  );
}

/* ─────────────────────────────────────────────
   Main Footer
───────────────────────────────────────────── */
export default function Footer() {
  // Destructure ref + visible separately per section so refs are
  // plain variables (ending in "Ref") rather than object property
  // access inline in JSX — avoids the "Cannot access refs during
  // render" lint error.
  const { ref: heroRef, visible: heroVisible } = useInView(0.1);
  const { ref: navRef, visible: navVisible } = useInView(0.1);
  const { ref: assuranceRef, visible: assuranceVisible } = useInView(0.1);
  const { ref: trustRef, visible: trustVisible } = useInView(0.1);
  const { ref: bottomRef, visible: bottomVisible } = useInView(0.1);

  return (
    <>
      {/* ── WHITE LOGO BAR — full width white background ── */}
      <div className="w-full bg-white border-b border-gray-100 py-5 flex items-center justify-center">
        <Link href="/" className="inline-block">
          <img
            src="/logo.png"
            alt="ZoikoSema Logo"
            className="h-10 md:h-12 object-contain"
          />
        </Link>
      </div>

      {/* ── PURPLE FOOTER ── */}
      <footer className="bg-[#4a4888] text-white">

        {/* ── HERO SECTION ── */}
        <section className="max-w-7xl mx-auto px-6 py-16 text-center">
          <div
            ref={heroRef}
            style={{
              opacity: heroVisible ? 1 : 0,
              transform: heroVisible ? "translateY(0)" : "translateY(32px)",
              transition: "opacity 0.7s ease, transform 0.7s ease",
            }}
          >
            <h2 className="text-3xl md:text-5xl font-bold leading-[1.25] tracking-tight">
              Start free. Deploy securely.
              <br />
              Scale with{" "}
              <span className="text-cyan-300">workforce context.</span>
            </h2>

            <p className="mt-5 text-gray-300 text-[15px] max-w-2xl mx-auto leading-relaxed">
              Create a free Zoiko Sema workspace in minutes — or book a guided
              demo for enterprise rollout, security review, compliance
              configuration, and ZoikoTime integration.
            </p>

            {/* Social icons */}
            <div className="flex justify-center gap-3 mt-8 flex-wrap">
              {[
                {
                  href: "https://www.facebook.com/ZoikoSema/",
                  icon: <FaFacebookF size={14} />,
                  label: "Facebook",
                },
                {
                  href: "https://x.com/ZoikoSema",
                  icon: <FaXTwitter size={14} />,
                  label: "X / Twitter",
                },
                {
                  href: "https://www.instagram.com/zoikosema/",
                  icon: <FaInstagram size={14} />,
                  label: "Instagram",
                },
                {
                  href: "https://www.linkedin.com/company/zoiko-sema",
                  icon: <FaLinkedinIn size={14} />,
                  label: "LinkedIn",
                },
                {
                  href: "https://www.youtube.com/@ZoikoSema",
                  icon: <FaYoutube size={14} />,
                  label: "YouTube",
                },
                {
                  href: "https://www.pinterest.com/zoikosema/",
                  icon: <FaPinterest size={14} />,
                  label: "Pinterest.",
                },
              ].map(({ href, icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center text-white/80 hover:bg-white hover:text-[#4a4888] hover:border-white transition-all duration-200"
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* ── PRODUCT & BUYER NAVIGATION ── */}
        <section className="max-w-7xl mx-auto px-6 border-t border-white/15 py-14">
          <div ref={navRef}>
            <SectionLabel label="Product & Buyer Navigation" />

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-10">
              <FooterColumn
                title="Product"
                dotColor="bg-white"
                visible={navVisible}
                delay={0}
                items={[
                  { label: "Overview", href: "/product-overview/" },
                  { label: "Messaging", href: "/messaging/" },
                  { label: "Audio Calls", href: "/audio-calls/" },
                  { label: "Video Meetings", href: "/video-meetings/" },
                  { label: "AI Meeting Summaries", href: "/product/ai-meetings" },
                  { label: "Channels & Spaces", href: "/channels-spaces/" },
                  { label: "Admin Console", href: "/admin-console/" },
                ]}
              />

              <FooterColumn
                title="Solutions"
                dotColor="bg-white"
                visible={navVisible}
                delay={80}
                items={[
                  { label: "Business Communication", href: "/business-communication" },
                  { label: "Team Collaboration", href: "/team-collaboration" },
                  { label: "Individual Productivity", href: "/individual-productivity/" },

                  { label: "Freelancer Workflows", href: "/solutions/freelancers" },
                  { label: "ZoikoTime Customers", href: "/solutions/zoikotime-customers" },
                  { label: "Enterprise Deployment", href: "/enterprise" },
                  { label: "Regulated Workflows", href: "/solutions/regulated-workflows" },
                ]}
              />

              <FooterColumn
                title="Use Cases"
                dotColor="bg-white"
                visible={navVisible}
                delay={160}
                items={[
                  { label: "Secure Communication", href: "/secure-communication" },
                  { label: "Meeting to Summary", href: "/use-cases/meeting-summary" },
                  { label: "Client Call Follow-Up", href: "/use-cases/client-followup" },
                  { label: "Team Decision Tracking", href: "/use-cases/decision-tracking" },
                  { label: "Remote Coordination", href: "/use-cases/remote-coordination" },
                  { label: "Project Collaboration", href: "/use-cases/project-collaboration" },
                  { label: "Personal-to-Team", href: "/use-cases/personal-to-team" },
                ]}
              />

              {/* ZoikoTime — full cyan accent */}
              <FooterColumn
                title="ZoikoTime"
                titleColor="text-cyan-300"
                linkColor="text-cyan-300"
                dotColor="bg-cyan-300"
                visible={navVisible}
                delay={240}
                items={[
                  { label: "Sema + ZoikoTime", href: "/zoikotime" },
                  { label: "Workforce Truth", href: "/zoikotime/workforce-truth" },
                  { label: "Meeting-to-Work", href: "/zoikotime/meeting-to-work" },
                  { label: "Verified Collaboration", href: "/zoikotime/verified-collaboration" },
                  { label: "Compliance & Audit", href: "/zoikotime/compliance" },
                  { label: "Productivity Intelligence", href: "/zoikotime/productivity" },
                  { label: "Request Demo", href: "/demo", badge: "Enterprise" },
                ]}
              />
            </div>
          </div>
        </section>

        {/* ── ENTERPRISE ASSURANCE ── */}
        <section className="max-w-7xl mx-auto px-6 border-t border-white/15 py-14">
          <div ref={assuranceRef}>
            <SectionLabel label="Enterprise Assurance" />

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-10">
              <FooterColumn
                title="Resources"
                dotColor="bg-white"
                visible={assuranceVisible}
                delay={0}
                items={[
                  { label: "Blog", href: "/blog" },
                  { label: "Help Center", href: "/help-center" },
                  { label: "Customer Stories", href: "/customer-stories" },
                  { label: "Product Updates", href: "/product-updates" },
                  { label: "Developer Docs", href: "/docs" },
                  { label: "System Status", href: "/status" },
                  { label: "Trust Center", href: "/trust-center" },
                ]}
              />

              <FooterColumn
                title="Company"
                dotColor="bg-white"
                visible={assuranceVisible}
                delay={80}
                items={[
                  { label: "About Sema", href: "/about/" },
                  { label: "About Zoiko Tech", href: "/about/zoiko-tech" },
                  { label: "Careers", href: "/careers" },
                  { label: "Partners", href: "/partners" },
                  { label: "Press", href: "/press" },
                  { label: "Contact", href: "/contact" },
                  { label: "Zoiko Group", href: "/zoiko-group" },
                ]}
              />

              <FooterColumn
                title="Trust & Security"
                dotColor="bg-white"
                visible={assuranceVisible}
                delay={160}
                items={[
                  { label: "Security Center", href: "/security" },
                  { label: "Responsible AI", href: "/responsible-ai" },
                  { label: "Privacy & Data", href: "/privacy" },
                  { label: "Compliance", href: "/compliance" },
                  { label: "Subprocessors", href: "/subprocessors" },
                  { label: "Accessibility", href: "/accessibility" },
                  { label: "Report a Concern", href: "/report-concern" },
                ]}
              />

              <FooterColumn
                title="Legal"
                dotColor="bg-white"
                visible={assuranceVisible}
                delay={240}
                items={[
                  { label: "Terms of Service", href: "/terms" },
                  { label: "Privacy Notice", href: "/privacy-notice" },
                  { label: "Cookie Policy", href: "/cookie-policy" },
                  { label: "Acceptable Use Policy", href: "/acceptable-use-policy" },
                  { label: "AI Use Policy", href: "/ai-use-policy" },
                  { label: "Security Policy", href: "/security-policy" },
                  { label: "Data Processing Addendum", href: "/data-processing-addendum" },
                ]}
              />
            </div>
          </div>
        </section>

        {/* ── TRUST BADGES BLOCK ── */}
        <section className="max-w-7xl mx-auto px-6 border-t border-white/15 py-12">
          <div
            ref={trustRef}
            style={{
              opacity: trustVisible ? 1 : 0,
              transform: trustVisible ? "translateY(0)" : "translateY(20px)",
              transition: "opacity 0.6s ease, transform 0.6s ease",
            }}
            className="text-center"
          >
            <p className="font-bold text-base text-white mb-2">
              Built for trust, security, and responsible AI.
            </p>
            <p className="text-gray-300 text-sm max-w-2xl mx-auto leading-relaxed mb-7">
              Enterprise governance, privacy by design, auditable AI, and secure
              collaboration for regulated teams. Serious buyers can explore
              detailed documentation through the Trust Center.
            </p>

            {/* Row 1 — feature links */}
            <div className="flex flex-wrap justify-center gap-2 mb-3">
              {["Trust Center", "Security", "Responsible AI", "Privacy & Data", "Compliance", "Subprocessors", "Accessibility"].map((label) => (
                <Badge key={label} label={label} />
              ))}
            </div>

            {/* Row 2 — compliance standards */}
            <div className="flex flex-wrap justify-center gap-2 mb-4">
              {[
                { label: "ISO 27001" },
                { label: "SOC 2" },
                { label: "PCIDSS" },
                { label: "GDPR" },
                { label: "CCPA / CPRA" },
                { label: "HIPAA", highlight: true },
                { label: "FedRAMP Readiness", amber: true },
                { label: "WCAG 2.2 AA" },
                { label: "Data Protection" },
              ].map((b) => (
                <Badge key={b.label} label={b.label} highlight={b.highlight} amber={b.amber} />
              ))}
            </div>

            <p className="text-gray-400 text-[11px]">
              Alignment indicators only — not certified or attested where formally confirmed.
            </p>
          </div>
        </section>

        {/* ── BOTTOM BAR ── */}
        <section className="max-w-7xl mx-auto px-6 border-t border-white/15 py-8">
          <div
            ref={bottomRef}
            style={{
              opacity: bottomVisible ? 1 : 0,
              transition: "opacity 0.6s ease 0.1s",
            }}
            className="text-center text-gray-300 text-[13px] leading-relaxed space-y-2"
          >
            <p>
              © 2026{" "}
              <span className="font-semibold text-white">Zoiko Sema™</span> · A
              Zoiko Tech Inc. platform · All rights reserved.
            </p>
            <p>
              <span className="font-medium text-white">Global HQ:</span> 1401
              21st Street, Suite R, Sacramento, CA 95811, USA. ·{" "}
              <span className="font-medium text-white">European HQ:</span>{" "}
              167–169 Great Portland Street, 5th Floor, London W1W 5PF, United Kingdom.
            </p>
            <p className="max-w-3xl mx-auto text-[12px] text-gray-400">
              Customers are responsible for lawful configuration, notices,
              permissions, and consents — including where recording, AI summaries,
              workplace monitoring, or regulated communications laws apply. Zoiko
              Sema does not provide legal, HR, compliance, or other professional advice.
            </p>
          </div>
        </section>

        {/* ── Responsive styles ── */}
        <style jsx global>{`
          @media (max-width: 1023px) {
            footer .lg\\:grid-cols-4 {
              grid-template-columns: repeat(2, minmax(0, 1fr));
            }
          }
          @media (max-width: 480px) {
            footer .grid-cols-2 {
              grid-template-columns: repeat(1, minmax(0, 1fr));
            }
          }
          @media (prefers-reduced-motion: reduce) {
            footer * {
              transition: none !important;
            }
          }
        `}</style>
      </footer>
    </>
  );
}