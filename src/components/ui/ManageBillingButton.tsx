"use client";
import { useRouter } from "next/navigation";

export const ManageBillingButton = () => {
  const router = useRouter();

  const handleClick = async () => {
    const res = await fetch("/api/stripe/create-portal-link");
    const data = await res.json();
    if (data.url) {
      window.location.href = data.url;
    }
  };

  return (
    <button
      onClick={handleClick}
      className="text-sm border border-[#34d399] px-4 py-1 rounded transition"
      style={{ backgroundColor: "#000000", color: "#34d399" }}
      onMouseOver={(e) => {
        e.currentTarget.style.backgroundColor = "#34d399";
        e.currentTarget.style.color = "#000000";
      }}
      onMouseOut={(e) => {
        e.currentTarget.style.backgroundColor = "#000000";
        e.currentTarget.style.color = "#34d399";
      }}
    >
      Manage Billing
    </button>
  );
};