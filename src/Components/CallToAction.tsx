"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";

export const CallToAction = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);

  return (
    <section
      ref={sectionRef}
      className="bg-gradient-to-b from-[#FF3B30] to-[#FF6F61] py-24 overflow-x-clip"
    >
      <div className="container">
        {/* Heading Section */}
        <div className="text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl font-bold text-white tracking-tighter"
          >
            Ready to 2X Your Productivity?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-4 text-lg text-white/80 max-w-2xl mx-auto"
          >
            Join 500K+ professionals who’ve transformed their lives with
            NeuroBoost. Automate your tasks, boost focus, and save 10+
            hours/week—starting today!
          </motion.p>
        </div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="flex justify-center gap-4 mt-10"
        >
          <Link href="/signup">
            <button className="bg-white text-[#FF3B30] px-8 py-3 rounded-lg font-bold hover:bg-[#F5F7FA] hover:text-[#E5342A] transition-colors duration-200">
              Join the Free Challenge
            </button>
          </Link>
          <Link href="/checkout" className="text-[#4A90E2] hover:underline">
            <button className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-bold hover:bg-white hover:text-[#FF3B30] transition-colors duration-200">
              Get the Toolkit
            </button>
          </Link>
        </motion.div>

        {/* Urgency Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-8 text-center"
        >
          <p className="text-white/80">
            <span className="font-bold">Hurry!</span> The free challenge ends in{" "}
            <span className="font-bold">24 hours</span>. Don’t miss out!
          </p>
        </motion.div>
      </div>
    </section>
  );
};
