export type UpdateStatus =
  | "Announced"
  | "Beta"
  | "Rolling out"
  | "Available"
  | "Deprecated"
  | "Migration required"
  | "Admin action"
  | "Retired";

export const STATUS_STYLES: Record<UpdateStatus, { bg: string; color: string }> = {
  Announced: { bg: "#F3F4F6", color: "#4B5563" },
  Beta: { bg: "#F3E8FF", color: "#7C3AED" },
  "Rolling out": { bg: "#E7E8FD", color: "#4F63F0" },
  Available: { bg: "#DCFCE7", color: "#16A34A" },
  Deprecated: { bg: "#FEF3C7", color: "#D97706" },
  "Migration required": { bg: "#FEE2E2", color: "#DC2626" },
  "Admin action": { bg: "#FEF3C7", color: "#D97706" },
  Retired: { bg: "#F3F4F6", color: "#6B7280" },
};
