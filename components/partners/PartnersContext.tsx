"use client";

import { createContext, useContext, useState, ReactNode } from "react";

export type PartnerRouteId =
  | "technology"
  | "channel"
  | "implementation"
  | "consulting"
  | "referral"
  | "marketplace";

interface PartnerRouteMeta {
  id: PartnerRouteId;
  label: string;
}

export const PARTNER_ROUTES: PartnerRouteMeta[] = [
  { id: "technology", label: "Technology" },
  { id: "channel", label: "Channel" },
  { id: "implementation", label: "Implementation" },
  { id: "consulting", label: "Consulting" },
  { id: "referral", label: "Referral" },
  { id: "marketplace", label: "Marketplace" },
];

interface PartnersContextValue {
  selectedRoute: PartnerRouteId | null;
  selectRoute: (id: PartnerRouteId) => void;
}

const PartnersContext = createContext<PartnersContextValue | null>(null);

export function PartnersProvider({ children }: { children: ReactNode }) {
  const [selectedRoute, setSelectedRoute] = useState<PartnerRouteId | null>(
    null
  );

  function selectRoute(id: PartnerRouteId) {
    setSelectedRoute(id);

    const target = document.getElementById("apply");
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }

  return (
    <PartnersContext.Provider value={{ selectedRoute, selectRoute }}>
      {children}
    </PartnersContext.Provider>
  );
}

export function usePartners() {
  const ctx = useContext(PartnersContext);
  if (!ctx) {
    throw new Error("usePartners must be used within a PartnersProvider");
  }
  return ctx;
}
