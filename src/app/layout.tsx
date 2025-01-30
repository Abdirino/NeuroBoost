import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

// Load Geist fonts
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Metadata for NeuroBoost 5-Day Sprint
export const metadata: Metadata = {
  title: "NeuroBoost 5-Day Sprint | 2X Your Productivity with AI",
  description:
    "Join the free 5-day challenge to automate your workflows, boost focus, and save 10+ hours/week using AI-powered hacks. Sign up now!",
  keywords: [
    "AI productivity",
    "ChatGPT hacks",
    "time management",
    "automation tools",
    "free challenge",
    "NeuroBoost",
  ],
  openGraph: {
    title: "NeuroBoost 5-Day Sprint | 2X Your Productivity with AI",
    description:
      "Join the free 5-day challenge to automate your workflows, boost focus, and save 10+ hours/week using AI-powered hacks. Sign up now!",
    type: "website",
    url: "https://neuroboost-sprint.com",
    images: [
      {
        url: "https://neuroboost-sprint.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "NeuroBoost 5-Day Sprint",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "NeuroBoost 5-Day Sprint | 2X Your Productivity with AI",
    description:
      "Join the free 5-day challenge to automate your workflows, boost focus, and save 10+ hours/week using AI-powered hacks. Sign up now!",
    images: ["https://neuroboost-sprint.com/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#F5F7FA] text-[#1C1C1E]`}
      >
        {children}
      </body>
    </html>
  );
}