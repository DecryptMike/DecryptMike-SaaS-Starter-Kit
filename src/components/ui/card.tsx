import React from "react";

export const Card = ({ className = "", children }: any) => (
  <div className={`bg-[#0a0a0a] rounded-lg shadow-md p-4 border border-green-500 ${className}`}>
    {children}
  </div>
);

export const CardHeader = ({ children }: any) => (
  <div className="mb-2">{children}</div>
);

export const CardContent = ({ children }: any) => (
  <div className="text-sm">{children}</div>
);

export const CardTitle = ({ className = "", children }: any) => (
  <h3 className={`text-green-400 text-sm font-semibold ${className}`}>{children}</h3>
);
