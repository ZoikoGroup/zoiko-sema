"use client";

import { createContext, useContext, useState, ReactNode } from "react";

export type UpdateFilter = "all" | "meetings" | "admin" | "developer";

interface ProductUpdatesContextValue {
  filter: UpdateFilter;
  selectFilter: (filter: UpdateFilter) => void;
}

const ProductUpdatesContext = createContext<ProductUpdatesContextValue | null>(null);

export function ProductUpdatesProvider({ children }: { children: ReactNode }) {
  const [filter, setFilter] = useState<UpdateFilter>("all");

  function selectFilter(next: UpdateFilter) {
    setFilter(next);

    const target = document.getElementById("all-updates");
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }

  return (
    <ProductUpdatesContext.Provider value={{ filter, selectFilter }}>
      {children}
    </ProductUpdatesContext.Provider>
  );
}

export function useProductUpdates() {
  const ctx = useContext(ProductUpdatesContext);
  if (!ctx) {
    throw new Error("useProductUpdates must be used within a ProductUpdatesProvider");
  }
  return ctx;
}
