import React from 'react';

export const Button = ({ className = "", children, ...props }: { className?: string; children: React.ReactNode; [key: string]: any }) => {
  return (
    <button
      className={`bg-transparent text-green-400 hover:text-white rounded-md px-3 py-1.5 text-sm font-medium transition-colors ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};