import type { Metadata } from "next";
import {
  SemaHero,
  SemaPlans,
  SemaAudiences,
  SemaSeeInAction,
  SemaCapture,
  SemaTestimonialsCta,
} from "@/components/black-friday";

export const metadata: Metadata = {
  title: "Black Friday Deals & Discounts 2026 | Zoiko Sema",
  description:
    "Discover Zoiko Sema Black Friday discounts in 2026. Explore special offers and find the right solution for your business.", //[cite: 3]
};

export default function BlackFridayPage() {
  return (
    <main>
      <SemaHero />
      <SemaPlans />
      <SemaAudiences />
      <SemaSeeInAction />
      <SemaCapture />
      <SemaTestimonialsCta />
    </main>
  );
}