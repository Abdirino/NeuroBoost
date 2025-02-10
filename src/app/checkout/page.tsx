"use client";
import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { SquarePaymentsForm, CreditCardInput } from "react-square-web-payments-sdk";

const applicationId = process.env.NEXT_PUBLIC_SQUARE_APP_ID!;
const locationId = process.env.NEXT_PUBLIC_SQUARE_LOCATION_ID!;

export default function Checkout() {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handlePaymentSuccess = async (token: any) => {
    setLoading(true);
    const response = await fetch("/api/process-payment", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ sourceId: token.token }),
    });

    if (response.ok) {
      router.push("/thank-you");
    } else {
      alert("Payment failed. Please try again.");
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex">
      {/* Left Side: Urgency & FOMO */}
      <div className="w-1/2 bg-[#FF3B30] p-12 flex flex-col justify-center text-white">
        <Image src="/neuroboost-logo.png" alt="NeuroBoost Logo" width={120} height={40} className="mb-6" />
        <h1 className="text-4xl font-bold mb-6">Unlock Lifetime Access to the AI Productivity Toolkit</h1>
        <p className="text-lg mb-6">Join 500K+ professionals who’ve transformed their productivity with NeuroBoost.</p>
        <ul className="space-y-3 mb-8">
          <li>✅ 50+ ChatGPT Prompts</li>
          <li>✅ JavaScript Automation Scripts</li>
          <li>✅ AI-Powered Notion Templates</li>
          <li>✅ Exclusive Community Access</li>
          <li>✅ Lifetime Updates</li>
        </ul>
        <div className="bg-white text-[#2E3A4D] p-6 rounded-lg">
          <p className="text-lg font-bold">Special Offer: $49 (One-Time Payment)</p>
          <p className="text-sm">Price increases in <span className="font-bold">24 hours</span>!</p>
        </div>
      </div>

      {/* Right Side: Checkout */}
      <div className="w-1/2 p-12 flex flex-col justify-center">
        <h2 className="text-3xl font-bold text-[#2E3A4D] mb-6">Secure Your Toolkit Now</h2>
        <SquarePaymentsForm
          applicationId={applicationId}
          locationId={locationId}
          cardTokenizeResponseReceived={handlePaymentSuccess}
        >
          <CreditCardInput />
        </SquarePaymentsForm>
        <p className="mt-4 text-[#6B7280] text-center">30-day money-back guarantee. No questions asked.</p>
      </div>
    </div>
  );
}
