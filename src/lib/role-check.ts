// src/lib/role-check.ts
export type Role = "admin" | "user";

export const isAuthorized = (role: Role, allowed: Role[]) => {
  return allowed.includes(role);
};
