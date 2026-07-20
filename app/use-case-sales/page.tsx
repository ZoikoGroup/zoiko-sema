import React from 'react';
import SalesHeroSection from '@/components/use-case-sales/SalesHeroSection';
import SalesWhyChoose from '@/components/use-case-sales/SalesWhyChoose';
import SalesUnifiedWorkflow from '@/components/use-case-sales/SalesUnifiedWorkflow';
import SalesMeetingReview from '@/components/use-case-sales/SalesMeetingReview';
import SalesDealRooms from '@/components/use-case-sales/SalesDealRooms';
import SalesEnablementAnalytics from '@/components/use-case-sales/SalesEnablementAnalytics';
import SalesGovernance from '@/components/use-case-sales/SalesGovernance';
import SalesPlatformContext from '@/components/use-case-sales/SalesPlatformContext';

export default function SalesUseCasePage() {
  return (
    <main className="min-h-screen bg-white">
      <div className="flex flex-col items-center">
        {/* We use a wrapper to center and stack the components */}
        <div className="w-full flex flex-col justify-start items-center overflow-hidden">
          <SalesHeroSection />
          <SalesWhyChoose />
          <SalesUnifiedWorkflow />
          <SalesMeetingReview />
          <SalesDealRooms />
          <SalesEnablementAnalytics />
          <SalesGovernance />
          <SalesPlatformContext />
        </div>
      </div>
    </main>
  );
}
