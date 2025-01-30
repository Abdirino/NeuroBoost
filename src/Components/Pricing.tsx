"use client";
import CheckIcon from "@/assets/images/icons8-check-30.png";
import { motion } from "framer-motion";
import Image from "next/image";

const toolkit = {
  title: "AI Productivity Toolkit",
  price: 49, // One-time payment
  description:
    "Unlock lifetime access to the ultimate AI productivity toolkit. Automate your life, boost focus, and save 10+ hours/week—forever.",
  buttonText: "Get the Toolkit",
  features: [
    "50+ ChatGPT Prompts for Work & Study",
    "Custom JavaScript Automation Scripts",
    "AI-Powered Notion Templates",
    "Lifetime Access & Updates",
    "Exclusive Community Access",
    "24/7 Priority Support",
  ],
};

export const Pricing = () => {
  return (
    <section id="pricing" className="bg-[#F5F7FA] py-20 px-4 sm:px-10">
      <div className="container">
        {/* Heading Section */}
        <div className="text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl font-bold text-[#2E3A4D]"
          >
            Transform Your Life with the AI Productivity Toolkit
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-4 text-lg text-[#6B7280] max-w-2xl mx-auto"
          >
            After the 5-day challenge, you’ll see how powerful these tools are.
            Don’t miss the chance to own them for life.
          </motion.p>
        </div>

        {/* Toolkit Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 max-w-2xl mx-auto bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
        >
          <div className="text-center">
            <h3 className="text-2xl font-bold text-[#2E3A4D]">
              {toolkit.title}
            </h3>
            <div className="mt-4">
              <span className="text-4xl font-bold text-[#FF3B30]">
                ${toolkit.price}
              </span>
              <span className="text-[#6B7280]"> (One-Time Payment)</span>
            </div>
            <p className="mt-4 text-[#6B7280]">{toolkit.description}</p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full mt-6 py-3 rounded-lg font-bold text-white bg-[#FF3B30] hover:bg-[#E5342A] transition-colors duration-200"
            >
              {toolkit.buttonText}
            </motion.button>
          </div>

          {/* Features List */}
          <ul className="mt-6 space-y-3">
            {toolkit.features.map((feature) => (
              <li
                key={feature}
                className="flex items-center gap-2 text-[#6B7280]"
              >
                <span>
                  <Image src={CheckIcon} className="h-5 w-5" alt="check" />
                </span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Irresistible Offer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="text-[#6B7280]">
            <span className="font-bold text-[#FF3B30]">Special Offer:</span> Get
            the toolkit for just $49 (one-time payment) and enjoy lifetime
            access.
          </p>
          <p className="mt-2 text-[#6B7280]">
            After the challenge, you’ll wonder how you ever lived without it.
          </p>
        </motion.div>
      </div>
    </section>
  );
};