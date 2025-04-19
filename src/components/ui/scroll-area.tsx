import React from "react";

export const ScrollArea = ({ className = "", children }: any) => (
  <div className={`overflow-y-auto ${className}`}>{children}</div>
);
