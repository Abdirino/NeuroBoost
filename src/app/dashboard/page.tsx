"use client";
import { useEffect, useState } from "react";
import { supabase } from "@/app/lib/supabaseClient";
import { useRouter } from "next/navigation";

export default function Dashboard () {
  const [user, setUser] = useState<any>(null);
  const router = useRouter();

  useEffect(() => {
    const fetchUser = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) {
        router.push("/login"); // Redirect to login if not authenticated
      } else {
        setUser(user);
      }
    };

    fetchUser();
  }, [router]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F5F7FA]">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h1 className="text-2xl font-bold text-[#2E3A4D] mb-6">Dashboard</h1>
        {user ? (
          <p className="text-[#6B7280]">
            Welcome, <span className="font-bold">{user.email}</span>! You’re now
            logged in and ready to boost your productivity with NeuroBoost.
          </p>
        ) : (
          <p className="text-[#6B7280]">Loading...</p>
        )}
      </div>
    </div>
  );
};