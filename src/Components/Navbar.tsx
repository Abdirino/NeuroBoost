"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import Logo from "@/assets/images/neuroboost-website-logo.png";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white border-b border-gray-200">
      <div className="container mx-auto px-4 sm:px-8 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" onClick={() => setIsOpen(false)}>
          <Image
            src={Logo}
            alt="NeuroBoost Logo"
            width={50}
            height={50}
            className="hover:opacity-80 transition-opacity"
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-8 font-semibold">
          {[
            { label: "Features", href: "#features" },
            { label: "Daily Breakdown", href: "#daily-breakdown" },
            { label: "Testimonials", href: "#testimonials" },
            { label: "ToolKit", href: "#pricing" },
            { label: "FAQ", href: "#faq" },
          ].map(({ label, href }) => (
            <Link key={href} href={href} className="text-lg text-black hover:text-red-500 transition">
              {label}
            </Link>
          ))}
        </div>

        {/* Auth Buttons */}
        <div className="hidden md:flex gap-4">
          <Link href="/signup">
            <button className="px-4 py-2 rounded-lg font-bold text-white bg-black hover:bg-gray-800 transition">
              Sign Up
            </button>
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button onClick={toggleMenu} className="md:hidden focus:outline-none">
          <motion.svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <motion.path
                d="M6 18L18 6M6 6l12 12"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.2 }}
              />
            ) : (
              <motion.path
                d="M4 6h16M4 12h16M4 18h16"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.2 }}
              />
            )}
          </motion.svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="absolute top-full left-0 w-full bg-white shadow-lg border-t border-gray-200 py-4 flex flex-col items-center gap-4 md:hidden"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {[
              { label: "Features", href: "#features" },
              { label: "Daily Breakdown", href: "#daily-breakdown" },
              { label: "Testimonials", href: "#testimonials" },
              { label: "ToolKit", href: "#pricing" },
              { label: "FAQ", href: "#faq" },
            ].map(({ label, href }) => (
              <Link
                key={href}
                href={href}
                className="text-lg text-black hover:text-red-500 transition"
                onClick={toggleMenu}
              >
                {label}
              </Link>
            ))}

            <Link href="/signup" onClick={toggleMenu}>
              <button className="px-4 py-2 rounded-lg font-bold text-white bg-black hover:bg-gray-800 transition">
                Sign Up
              </button>
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};