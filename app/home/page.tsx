import { HeroSection, WorksForSection } from "@/components/home";

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <div>
        <HeroSection heroImageUrl="/Home/banner.webp" />
        <WorksForSection />
        {/* more sections here */}
      </div>
    </main>
  );
}