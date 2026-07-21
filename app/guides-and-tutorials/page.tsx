import React from 'react';
import Hero from '@/components/guides-and-tutorials/Hero';
import QuickStartPaths from '@/components/guides-and-tutorials/QuickStartPaths';
import MasteryCourse from '@/components/guides-and-tutorials/MasteryCourse';
import BrowseByProduct from '@/components/guides-and-tutorials/BrowseByProduct';
import BrowseByRole from '@/components/guides-and-tutorials/BrowseByRole';
import TutorialGrid from '@/components/guides-and-tutorials/TutorialGrid';
import TrustGovernance from '@/components/guides-and-tutorials/TrustGovernance';
import Faq from '@/components/guides-and-tutorials/Faq';

export default function LearnPage() {
  return (
    <main className="min-h-screen bg-violet-50 font-sans w-full overflow-x-hidden">
      <Hero />
      <QuickStartPaths />
      <MasteryCourse />
      <BrowseByProduct />
      <BrowseByRole />
      <TutorialGrid />
      <TrustGovernance />
      <Faq />
    </main>
  );
}
