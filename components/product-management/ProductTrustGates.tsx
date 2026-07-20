import React from "react";

export function ProductTrustGates() {
  const tiers = [
    {
      title: "Entry / Free",
      titleColor: "text-slate-900",
      subtitle: "Personal & small-team overview",
      featuresCol1: [
        "· Personal / small-team overview as approved",
        "· Self-serve implementation",
      ],
      featuresCol2: [
        "· Basic team filters and saved views",
      ],
    },
    {
      title: "Business",
      titleColor: "text-violet-600",
      subtitle: "Advanced workflows and routing",
      featuresCol1: [
        "· Advanced approval & correction workflows",
        "· SSO/MFA as approved · priority support",
      ],
      featuresCol2: [
        "· Advanced team filters and saved views",
      ],
    },
    {
      title: "Enterprise",
      titleColor: "text-blue-600",
      subtitle: "Custom policy at scale",
      featuresCol1: [
        "· Custom approval chains & separation of duties",
        "· Custom retention, legal hold, dedicated support",
      ],
      featuresCol2: [
        "· Jurisdiction / custom transparency routing",
      ],
    },
  ];

  return (
    <section className="relative w-full bg-white py-24">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="mb-16">
          <div className="text-violet-600 text-xs font-bold font-['JetBrains_Mono'] uppercase tracking-widest mb-4">
            09 — Trust & Plan Gates
          </div>
          <h2 className="text-slate-900 text-3xl md:text-4xl font-extrabold font-['Plus_Jakarta_Sans'] leading-tight max-w-2xl">
            Legally required access and correction is never paywalled.
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-8 items-stretch">
          
          {/* Left Column (Tiers List) */}
          <div className="w-full lg:flex-1 flex flex-col">
            {tiers.map((tier, idx) => (
              <div 
                key={idx} 
                className={`py-8 flex flex-col md:flex-row gap-4 md:gap-8 border-t border-violet-100 ${
                  idx === tiers.length - 1 ? "border-b" : ""
                }`}
              >
                {/* Tier Name & Subtitle */}
                <div className="w-full md:w-56 flex-shrink-0">
                  <h3 className={`${tier.titleColor} text-base font-extrabold font-['Plus_Jakarta_Sans'] mb-1`}>
                    {tier.title}
                  </h3>
                  <p className="text-slate-600 text-xs font-normal font-['Inter']">
                    {tier.subtitle}
                  </p>
                </div>

                {/* Features Columns */}
                <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                  <div className="flex flex-col gap-3">
                    {tier.featuresCol1.map((feat, i) => (
                      <p key={i} className="text-slate-600 text-xs font-normal font-['Inter'] leading-5">
                        {feat}
                      </p>
                    ))}
                  </div>
                  <div className="flex flex-col gap-3">
                    {tier.featuresCol2.map((feat, i) => (
                      <p key={i} className="text-slate-600 text-xs font-normal font-['Inter'] leading-5">
                        {feat}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column (Image) */}
          <div className="w-full lg:w-80 flex-shrink-0 flex items-center lg:items-start pt-4 lg:pt-0">
            <div className="w-full bg-slate-900 rounded-3xl overflow-hidden relative shadow-sm h-[400px] lg:h-[495px]">
              <img 
                src="/product-management/human-oversight-2.png" 
                alt="Trust & Plan Gates illustration"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
