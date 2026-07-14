"use client";

import { createContext, useContext, useState, ReactNode } from "react";

interface ZTRDContextValue {
  selectedGoal: string;
  setSelectedGoal: (id: string) => void;
}

const ZTRDContext = createContext<ZTRDContextValue | null>(null);

export function ZTRDProvider({ children }: { children: ReactNode }) {
  const [selectedGoal, setSelectedGoal] = useState("");

  return (
    <ZTRDContext.Provider value={{ selectedGoal, setSelectedGoal }}>
      {children}
    </ZTRDContext.Provider>
  );
}

export function useZTRD() {
  const ctx = useContext(ZTRDContext);
  if (!ctx) throw new Error("useZTRD must be used within a ZTRDProvider");
  return ctx;
}
