"use client";

import { useState } from "react";

export default function CheckoutButton() {
  const [loading, setLoading] = useState(false);

  const handleCheckout = async () => {
    setLoading(true);
    const res = await fetch("/api/stripe/checkout", {
      method: "POST",
      body: JSON.stringify({ priceId: "price_XXXX" }), // 🔁 Update this with your actual price ID
    });

    const data = await res.json();
    if (data.url) {
      window.location.href = data.url;
    } else {
      console.error("Stripe session creation failed:", data);
      setLoading(false);
    }
  };

  return (
    <button
      onClick={handleCheckout}
      disabled={loading}
      className="text-sm font-medium px-4 py-2 rounded border border-[#34d399] bg-[#34d399] text-black hover:bg-transparent hover:text-[#34d399] transition cursor-none ml-auto"
    >
      {loading ? "Redirecting..." : "Subscribe Now"}
    </button>
  );
}