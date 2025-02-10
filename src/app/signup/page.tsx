"use client";
import { useState } from "react";
import { supabase } from "@/app/lib/supabaseClient";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Logo from "@/Assets/images/neuroboost-website-logo.png"; // Replace with your logo

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const router = useRouter();

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    const { data, error: signUpError } = await supabase.auth.signUp({
      email,
      password,
    });

    if (signUpError) {
      setError(signUpError.message);
    } else {
      setSuccess("Account created! Redirecting to dashboard...");
      setTimeout(() => router.push("/dashboard"), 2000);
    }
  };

  return (
    <div className="min-h-screen bg-[#F5F7FA] flex items-center justify-center p-4 py-20">
      <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-md">
        {/* Logo */}
        <div className="mb-8 flex justify-center">
          <Image
            src={Logo}
            alt="NeuroBoost Logo"
            width={120}
            className="hover:opacity-80"
          />
        </div>

        <h1 className="text-3xl font-bold text-[#2E3A4D] mb-6 text-center">
          Join the NeuroBoost Challenge
        </h1>

        {error && (
          <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-lg">{error}</div>
        )}

        {success && (
          <div className="mb-4 p-3 bg-green-100 text-green-700 rounded-lg">
            {success}
          </div>
        )}

        <form onSubmit={handleSignUp} className="space-y-4">
          <div>
            <label className="block text-[#6B7280] mb-2">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 border border-[#E5E7EB] rounded-lg focus:ring-2 focus:ring-[#FF3B30]"
              required
            />
          </div>

          <div>
            <label className="block text-[#6B7280] mb-2">Password</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-3 border border-[#E5E7EB] rounded-lg focus:ring-2 focus:ring-[#FF3B30]"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-3 text-[#6B7280]"
              >
                {showPassword ? "👁️" : "👁️🗨️"}
              </button>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-[#FF3B30] text-white py-3 rounded-lg font-bold hover:bg-[#E5342A] transition-colors"
          >
            Start Free Challenge
          </button>
        </form>

        <p className="mt-6 text-[#6B7280] text-center">
          Already have an account?{" "}
          <a
            href="/login"
            className="text-[#4A90E2] hover:underline font-semibold"
          >
            Log In
          </a>
        </p>
      </div>
    </div>
  );
}