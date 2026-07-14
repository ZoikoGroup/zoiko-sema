import {
  ComplianceHeroSection,
  ComplianceOverviewSection,
  ComplianceControlMapSection,
  ComplianceEvidenceLibrarySection,
  ComplianceReviewPathsSection,
  ComplianceOperationalTrustSection,
  ComplianceRequestFlowSection,
  ComplianceReviewRequestSection,
  ComplianceRelatedMaterialSection,
  ComplianceFooterCtaSection,
  ComplianceFaqSection,
} from "@/components/compliance";

export default function CompliancePage() {
  const sidebarLinks = [
    { title: "Overview", href: "#overview" },
    { title: "Control map", href: "#control-map" },
    { title: "Evidence library", href: "#evidence-library" },
    { title: "Review paths", href: "#review-paths" },
    { title: "Operational trust", href: "#operations" },
    { title: "Request flow", href: "#request-flow" },
    { title: "Request a review", href: "#request-review" },
    { title: "Related links", href: "#resources" },
    { title: "FAQ", href: "#faq" },
  ];

  return (
    <main className="bg-gray-50 min-h-screen">
      <ComplianceHeroSection />

      <div className="flex w-full">
        {/* Sidebar */}
        <aside className="hidden lg:flex flex-col w-[300px] shrink-0 bg-slate-900 border-r border-slate-800">
          <div className="sticky top-10 p-10 pt-20">
            <div className="w-full inline-flex flex-col justify-start items-start gap-4">
              <div className="text-slate-300 text-sm font-bold font-['Plus_Jakarta_Sans'] uppercase tracking-widest mb-2">On this page</div>
              <div className="w-full flex flex-col justify-start items-start">
                {sidebarLinks.map((link, idx) => (
                  <a key={idx} href={link.href} className="w-full h-10 relative border-l-2 border-slate-700 hover:border-slate-300 transition-colors flex items-center pl-4 group">
                    <span className="text-slate-400 group-hover:text-white transition-colors text-sm font-semibold font-['Plus_Jakarta_Sans']">{link.title}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <div className="flex-1 w-full bg-white flex flex-col relative overflow-hidden">
          <ComplianceOverviewSection />
          <ComplianceControlMapSection />
          <ComplianceEvidenceLibrarySection />
          <ComplianceReviewPathsSection />
          <ComplianceOperationalTrustSection />
          <ComplianceRequestFlowSection />
          <ComplianceReviewRequestSection />
          <div className="px-8 sm:px-12 lg:px-20 py-20 flex flex-col">
            <ComplianceRelatedMaterialSection />
          </div>
        </div>
      </div>

      <ComplianceFooterCtaSection />

      <ComplianceFaqSection />
    </main>
  );
}
