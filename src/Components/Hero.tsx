"use client";
import Image from "next/image";
import HeroIMG from "@/Assets/images/Time management-amico.png";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export const Hero = () => {
  // Countdown Timer Logic
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const countdownDate = new Date("2025-02-04T23:59:59").getTime(); // Set your end date here

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countdownDate - now;

      if (distance > 4) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor(
            (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
          ),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      } else {
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-white text-black bg-[linear-gradient(to_bottom,#f5f7fa,#ffffff)] py-[36px] sm:py-14 sm:pl-10 px-4 relative overflow-clip">
      <div className="flex items-start gap-2">
        <div>
          <div className="container relative">
            {/* Tagline */}
            <motion.div
              className="flex"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <a
                href="#"
                className="border px-4 py-2 rounded-lg border-[#4A90E2]/30 bg-[#4A90E2]/10 hover:bg-[#4A90E2]/20 transition-colors duration-200"
              >
                <span className="font-bold sm:text-xl text-sm text-[#FF3B30] text-balance">
                  Join the Free 5-Day Challenge
                </span>
              </a>
            </motion.div>

            {/* Main Headline */}
            <motion.div
              className="flex mt-3 sm:mt-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="inline-flex relative">
                <h1 className="section-title text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tighter text-balance text-[#2E3A4D]">
                  2X Your Productivity
                  <br />
                  with AI-Powered 
                  <br />
                  Hacks in Just 5 Days
                </h1>
              </div>
            </motion.div>

            {/* Subheadline */}
            <motion.p
              className="section-description mt-3 sm:mt-6 text-[#6B7280] max-w-2xl text-lg sm:text-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Automate repetitive tasks, boost focus, and save 10+ hours/week
              with free AI tools and strategies. No credit card required.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="flex mt-6 sm:mt-9 gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <button
                onClick={() => {
                  document
                    .getElementById("signup")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                className="bg-[#FF3B30] text-white py-3 px-6 rounded-lg font-bold hover:bg-[#FF3B30]/80 transition-colors duration-200"
              >
                Join the Free Challenge
              </button>
            </motion.div>

            {/* Countdown Timer */}
            <motion.div
              className="flex mt-6 sm:mt-9"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              <div className="bg-[#4A90E2]/10 p-6 rounded-lg flex gap-6 sm:gap-8">
                <div className="text-center">
                  <span className="text-3xl sm:text-5xl font-bold text-[#FF3B30]">
                    {timeLeft.days}
                  </span>
                  <span className="block text-sm sm:text-base text-[#6B7280]">
                    Days
                  </span>
                </div>
                <div className="text-center">
                  <span className="text-3xl sm:text-5xl font-bold text-[#FF3B30]">
                    {timeLeft.hours}
                  </span>
                  <span className="block text-sm sm:text-base text-[#6B7280]">
                    Hours
                  </span>
                </div>
                <div className="text-center">
                  <span className="text-3xl sm:text-5xl font-bold text-[#FF3B30]">
                    {timeLeft.minutes}
                  </span>
                  <span className="block text-sm sm:text-base text-[#6B7280]">
                    Minutes
                  </span>
                </div>
                <div className="text-center">
                  <span className="text-3xl sm:text-5xl font-bold text-[#FF3B30]">
                    {timeLeft.seconds}
                  </span>
                  <span className="block text-sm sm:text-base text-[#6B7280]">
                    Seconds
                  </span>
                </div>
              </div>
            </motion.div>

            {/* FOMO/Urgency */}
            <motion.div
              className="mt-6 sm:mt-9"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.6 }}
            >
              <p className="text-[#6B7280] max-w-2xl mx-auto text-lg lg:text-xl">
                <span className="font-bold text-[#FF3B30]">Hurry!</span> The
                free challenge ends in{" "}
                <span className="font-bold text-[#FF3B30]">
                  {timeLeft.days} days, {timeLeft.hours} hours,{" "}
                  {timeLeft.minutes} minutes
                </span>
                . Don’t miss out on this life-changing opportunity.
              </p>
            </motion.div>
          </div>
          {/* <div className="absolute top-0 right-0 hidden sm:block">
            <Image src={HeroIMG} alt="" />
          </div> */}
        </div>

        <div>
          {/* Problem Statement */}
          <motion.div
            className="mt-12 sm:mt-16 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <Image src={HeroIMG} alt="" className="-top-30 h-[500px] w-[500px] hidden sm:block"/>
          </motion.div>

          {/* Solution Overview */}
          {/* <motion.div
            className="mt-12 sm:mt-16 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-[#2E3A4D]">
              How NeuroBoost Helps
            </h2>
            <p className="mt-4 text-[#6B7280] max-w-2xl mx-auto text-lg sm:text-xl">
              In just 5 days, you’ll learn how to use AI tools like ChatGPT to
              automate tasks, streamline workflows, and focus on what truly
              matters. Join 500K+ professionals who’ve transformed their lives.
            </p>
          </motion.div> */}
        </div>
      </div>
    </div>
  );
};
