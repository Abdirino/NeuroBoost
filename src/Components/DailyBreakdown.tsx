"use client";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import JS from "@/Assets/images/JavaScript frameworks-cuate.png";
import NotionDash from "@/Assets/images/Dashboard-amico.png";
import Focus from "@/Assets/images/Development focus-pana.png";
import ChatBot from "@/Assets/images/Chat bot-amico.png";
import Statistics from "@/Assets/images/Statistics-bro.png";

export const DailyBreakdown = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div
      className="bg-[#F5F7FA] py-[72px] sm:py-24 relative overflow-hidden"
      id="daily-breakdown"
    >
      {/* Vertical Line */}
      <motion.div
        style={{ height: lineHeight }}
        className="absolute left-1/2 w-1 rounded-sm bg-[#FF3B30] top-[350px] bottom-7 transform -translate-x-1/2 z-0 hidden"
      />

      <div className="container relative px-10" ref={containerRef}>
        {/* Heading Section */}
        <div className="max-w-2xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl font-bold text-[#2E3A4D] tracking-tighter"
          >
            Your 5-Day Productivity Transformation
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-5 text-lg text-[#6B7280]"
          >
            In just 5 days, you’ll learn how to automate tasks, boost focus, and
            save 10+ hours/week with AI-powered tools. Here’s what you’ll get
            each day:
          </motion.p>
        </div>

        {/* Steps Section */}
        <div className="mt-16 space-y-20 lg:space-y-32">
          {/* Day 1 */}
          <div className="grid lg:grid-cols-2 gap-8 items-start">
            <div className="lg:order-1">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-[#FF3B30] rounded-full flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">1</span>
                </div>
                <h3 className="text-3xl font-bold text-[#2E3A4D]">
                  Automate Repetitive Tasks
                </h3>
              </div>
              <p className="mt-6 text-xl text-[#6B7280]">
                Discover how to automate emails, scheduling, and data entry
                using ChatGPT and JavaScript. Save 2+ hours on Day 1 and unlock
                a more efficient workflow. Join now to start transforming your
                productivity instantly!
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-6 px-6 py-3 rounded-lg font-bold text-white bg-[#FF3B30] hover:bg-[#E5342A] transition-colors duration-200"
              >
                Get Day 1 Hack
              </motion.button>
            </div>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="lg:order-2"
            >
              <Image
                src={JS} // Replace with actual image
                alt="Day 1: Automate Repetitive Tasks"
                width={600}
                height={400}
                className="rounded-xl shadow-2xl md:ml-6"
              />
            </motion.div>
          </div>

          {/* Day 2 */}
          <div className="grid lg:grid-cols-2 gap-8 items-start">
            <div className="lg:order-2">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-[#1C1C1E] rounded-full flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">2</span>
                </div>
                <h3 className="text-3xl font-bold text-[#2E3A4D]">
                  Streamline Workflows with Notion
                </h3>
              </div>
              <p className="mt-6 text-xl text-[#6B7280]">
                Unlock AI-powered Notion templates to streamline projects, track
                goals, and manage tasks effortlessly. Save 3+ hours on Day 2
                alone—transform chaos into clarity with tools designed to boost
                productivity instantly. Ready to work smarter? Get your free
                template now!
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-6 px-6 py-3 rounded-lg font-bold text-white bg-[#1C1C1E] hover:bg-[#1C1C1E]/90 transition-colors duration-200"
              >
                Get Day 2 Hack
              </motion.button>
            </div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="lg:order-1"
            >
              <Image
                src={NotionDash} // Replace with actual image
                alt="Day 2: Streamline Workflows"
                width={600}
                height={400}
                className="rounded-xl shadow-2xl md:mr-6"
              />
            </motion.div>
          </div>

          {/* Day 3 */}
          <div className="grid lg:grid-cols-2 gap-8 items-start">
            <div className="lg:order-1">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-[#FF3B30] rounded-full flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">3</span>
                </div>
                <h3 className="text-3xl font-bold text-[#2E3A4D]">
                  Boost Focus with AI Tools
                </h3>
              </div>
              <p className="mt-6 text-xl text-[#6B7280]">
                Discover AI-powered focus hacks to eliminate distractions and
                boost productivity. On Day 3, you’ll learn tools and techniques
                to stay laser-focused, saving 2+ hours daily. Perfect for
                overwhelmed professionals craving clarity and efficiency. Join
                now and transform your workflow!
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-6 px-6 py-3 rounded-lg font-bold text-white bg-[#FF3B30] hover:bg-[#FF3B30]/90 transition-colors duration-200"
              >
                Get Day 3 Hack
              </motion.button>
            </div>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="lg:order-2"
            >
              <Image
                src={Focus} // Replace with actual image
                alt="Day 3: Boost Focus"
                width={600}
                height={400}
                className="rounded-xl shadow-2xl md:ml-6"
              />
            </motion.div>
          </div>

          {/* Day 4 */}
          <div className="grid lg:grid-cols-2 gap-8 items-start">
            <div className="lg:order-2">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-[#1C1C1E] rounded-full flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">4</span>
                </div>
                <h3 className="text-3xl font-bold text-[#2E3A4D]">
                  Automate Client Communication
                </h3>
              </div>
              <p className="mt-6 text-xl text-[#6B7280]">
                Automate client emails, proposals, and follow-ups with ChatGPT.
                Save 3+ hours on Day 4—no more manual typing or chasing
                responses. Focus on growing your business while AI handles the
                busywork. Join the free challenge now and see how easy it is to
                streamline your workflow!
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-6 px-6 py-3 rounded-lg font-bold text-white bg-[#1C1C1E] hover:bg-[#1C1C1E]/90 transition-colors duration-200"
              >
                Get Day 4 Hack
              </motion.button>
            </div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="lg:order-1"
            >
              <Image
                src={ChatBot} // Replace with actual image
                alt="Day 4: Automate Communication"
                width={600}
                height={400}
                className="rounded-xl shadow-2xl md:mr-6"
              />
            </motion.div>
          </div>

          {/* Day 5 */}
          <div className="grid lg:grid-cols-2 gap-8 items-start">
            <div className="lg:order-1">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-[#FF3B30] rounded-full flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">5</span>
                </div>
                <h3 className="text-3xl font-bold text-[#2E3A4D]">
                  Master Advanced Automation
                </h3>
              </div>
              <p className="mt-6 text-xl text-[#6B7280]">
                Master advanced automation by combining all the hacks into a
                seamless workflow. Save 5+ hours on Day 5 and unlock peak
                productivity. Automate everything—emails, tasks, and client
                communication—with AI tools. Ready to transform your workday?
                Get the full toolkit for lifetime access and never look back!
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-6 px-6 py-3 rounded-lg font-bold text-white bg-[#FF3B30] hover:bg-[#FF3B30]/90 transition-colors duration-200"
              >
                Get Day 5 Hack
              </motion.button>
            </div>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="lg:order-2"
            >
              <Image
                src={Statistics} // Replace with actual image
                alt="Day 5: Master Automation"
                width={600}
                height={400}
                className="rounded-xl shadow-2xl md:ml-6"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};
