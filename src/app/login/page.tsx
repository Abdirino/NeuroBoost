"use client";
import { useState } from "react";
import { supabase } from "@/app/lib/supabaseClient";
import { useRouter } from "next/navigation";

export default function Login () {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    const { data, error: loginError } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (loginError) {
      setError(loginError.message);
    } else {
      router.push("/dashboard"); // Redirect to dashboard after login
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F5F7FA]">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h1 className="text-2xl font-bold text-[#2E3A4D] mb-6">Log In</h1>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label className="block text-[#6B7280] mb-2">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 border border-[#E5E7EB] rounded-lg"
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-[#6B7280] mb-2">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 border border-[#E5E7EB] rounded-lg"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-[#FF3B30] hover:bg-[#E5342A] text-white py-2 rounded-lg transition-colors"
          >
            Log In
          </button>
        </form>
        <p className="mt-4 text-[#6B7280]">
          Don’t have an account?{" "}
          <a href="/signup" className="text-[#FF3B30] hover:underline">
            Sign Up
          </a>
        </p>
      </div>
    </div>
  );
};