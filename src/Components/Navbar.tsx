"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Logo from "@/assets/images/neuroboost-website-logo.png";
import Image from "next/image";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className="sticky top-0 z-30 w-full backdrop-blur-sm bg-[#F5F7FA] border-b border-[#E5E7EB]">
        <div className="container mx-auto px-4 sm:px-8 py-3 flex items-center justify-between">
          {/* Logo */}
          <div>
            <Link
              href="/"
              onClick={() => {
                document
                  .getElementById("hero")
                  ?.scrollIntoView({ behavior: "smooth" });
                toggleMenu();
              }}
            >
              <Image
                src={Logo}
                alt="NeuroBoost 5-Day Sprint Logo"
                width={50}
                height={50}
                className="hover:opacity-80 transition-opacity"
              />
            </Link>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex gap-8 ml-4 font-semibold">
            <Link
              href="#features"
              onClick={() => {
                document
                  .getElementById("features")
                  ?.scrollIntoView({ behavior: "smooth" });
                toggleMenu();
              }}
            >
              <span className="hover:text-[#FF3B30] transition-colors duration-200 text-black text-lg">
                Features
              </span>
            </Link>
            <Link
              href="#daily-breakdown"
              onClick={() => {
                document
                  .getElementById("daily-breakdown")
                  ?.scrollIntoView({ behavior: "smooth" });
                toggleMenu();
              }}
            >
              <span className="hover:text-[#FF3B30] transition-colors duration-200 text-black text-lg">
                Daily Breakdown
              </span>
            </Link>
            <Link
              href="#testimonials"
              onClick={() => {
                document
                  .getElementById("testimonials")
                  ?.scrollIntoView({ behavior: "smooth" });
                toggleMenu();
              }}
            >
              <span className="hover:text-[#FF3B30] transition-colors duration-200 text-black text-lg">
                Testimonials
              </span>
            </Link>
            <Link
              href="#faq"
              onClick={() => {
                document
                  .getElementById("faq")
                  ?.scrollIntoView({ behavior: "smooth" });
                toggleMenu();
              }}
            >
              <span className="hover:text-[#FF3B30] transition-colors duration-200 text-black text-lg">
                FAQ
              </span>
            </Link>
          </div>

          {/* Auth Buttons */}
          <div className="flex gap-4 items-center">
            <div className="hidden md:flex gap-2">
              <Link href="/signup">
                <button className="px-4 py-2 rounded-lg font-bold text-white bg-black hover:bg-[#333333] transition-colors duration-200">
                  Sign Up
                </button>
              </Link>
            </div>

            {/* Mobile Menu Toggle */}
            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                className="focus:outline-none"
                aria-label="Toggle Menu"
              >
                <svg
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
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="md:hidden bg-white flex flex-col gap-4 items-center py-4 border-t border-[#E5E7EB]"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <Link
                href="#features"
                onClick={() => {
                  document
                    .getElementById("features")
                    ?.scrollIntoView({ behavior: "smooth" });
                  toggleMenu();
                }}
              >
                <span className="hover:text-[#FF3B30] transition-colors duration-200 text-black text-lg">
                  Features
                </span>
              </Link>
              <Link
                href="#daily-breakdown"
                onClick={() => {
                  document
                    .getElementById("daily-breakdown")
                    ?.scrollIntoView({ behavior: "smooth" });
                  toggleMenu();
                }}
              >
                <span className="hover:text-[#FF3B30] transition-colors duration-200 text-black text-lg">
                  Daily Breakdown
                </span>
              </Link>
              <Link
                href="#testimonials"
                onClick={() => {
                  document
                    .getElementById("testimonials")
                    ?.scrollIntoView({ behavior: "smooth" });
                  toggleMenu();
                }}
              >
                <span className="hover:text-[#FF3B30] transition-colors duration-200 text-black text-lg">
                  Testimonials
                </span>
              </Link>
              <Link
                href="#faq"
                onClick={() => {
                  document
                    .getElementById("faq")
                    ?.scrollIntoView({ behavior: "smooth" });
                  toggleMenu();
                }}
              >
                <span className="hover:text-[#FF3B30] transition-colors duration-200 text-black text-lg">
                  FAQ
                </span>
              </Link>

              <div className="flex gap-4 mt-4">
                <Link href="/signup" onClick={toggleMenu}>
                  <button className="px-4 py-2 rounded-lg font-bold text-white bg-black hover:bg-[#333333] transition-colors duration-200">
                    Sign Up
                  </button>
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
};