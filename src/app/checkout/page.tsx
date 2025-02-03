"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Checkout () {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleCheckout = async () => {
    setLoading(true);
    // Simulate a successful payment
    setTimeout(() => {
      setLoading(false);
      router.push("/dashboard"); // Redirect to dashboard after purchase
    }, 2000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F5F7FA]">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h1 className="text-2xl font-bold text-[#2E3A4D] mb-6">Checkout</h1>
        <p className="text-[#6B7280] mb-6">
          Unlock lifetime access to the AI Productivity Toolkit for just $49.
        </p>
        <button
          onClick={handleCheckout}
          disabled={loading}
          className="w-full bg-[#FF3B30] hover:bg-[#E5342A] text-white py-2 rounded-lg transition-colors"
        >
          {loading ? "Processing..." : "Get Toolkit Now"}
        </button>
      </div>
    </div>
  );
};