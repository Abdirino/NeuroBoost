"use client";
import Plus from "@/assets/images/icons8-plus-24.png";
import Minus from "@/assets/images/icons8-minus-24.png";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";

const items = [
  {
    question: "What is NeuroBoost, and how does it work?",
    answer:
      "NeuroBoost is a 5-day challenge that teaches you how to use AI tools like ChatGPT, Notion, and JavaScript to automate tasks, boost productivity, and save 10+ hours/week. You’ll get daily hacks, templates, and scripts to transform your workflow.",
  },
  {
    question: "Is NeuroBoost really free?",
    answer:
      "Yes, the 5-day challenge is completely free! You’ll get access to daily AI hacks, templates, and a supportive community. After the challenge, you can upgrade to the AI Productivity Toolkit for lifetime access to all resources.",
  },
  {
    question: "What’s included in the AI Productivity Toolkit?",
    answer:
      "The toolkit includes 50+ ChatGPT prompts, custom JavaScript automation scripts, AI-powered Notion templates, lifetime updates, and exclusive community access. It’s everything you need to automate your life and stay productive.",
  },
  {
    question: "Do I need technical skills to use NeuroBoost?",
    answer:
      "Not at all! NeuroBoost is designed for everyone, regardless of technical expertise. Each hack comes with step-by-step instructions, and the community is always there to help.",
  },
  {
    question: "How much time do I need to commit to the challenge?",
    answer:
      "Just 30-60 minutes per day! The challenge is designed to fit into your busy schedule while delivering maximum results.",
  },
  {
    question: "What if I don’t see results?",
    answer:
      "We’re confident you’ll see results, but if you’re not satisfied, we offer a 30-day money-back guarantee for the AI Productivity Toolkit. No questions asked.",
  },
  {
    question: "Can I use NeuroBoost for my team or business?",
    answer:
      "Absolutely! Many teams and businesses use NeuroBoost to streamline workflows and boost productivity. The toolkit is perfect for freelancers, solopreneurs, and teams alike.",
  },
  {
    question: "How do I get started?",
    answer:
      "Simply sign up for the free 5-day challenge! You’ll receive your first hack immediately. After the challenge, you can unlock the full toolkit for lifetime access.",
  },
];

const AccordionItem = ({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="py-4 border-b border-[#E5E7EB]/30 cursor-pointer"
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="flex items-center gap-2">
        <span className="flex-1 text-lg font-bold text-[#2E3A4D]">
          {question}
        </span>
        {isOpen ? (
          <Image src={Minus} alt="Minus icon" className="w-4 h-4" />
        ) : (
          <Image src={Plus} alt="Plus icon" className="w-4 h-4" />
        )}
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{
              opacity: 0,
              height: 0,
              marginTop: 0,
            }}
            animate={{
              opacity: 1,
              height: "auto",
              marginTop: "16px",
            }}
            exit={{
              opacity: 0,
              height: 0,
              marginTop: 0,
            }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="text-[#6B7280]"
          >
            {answer}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export const FAQs = () => {
  return (
    <div id="faq" className="bg-[#F5F7FA] py-[72px] sm:py-24 px-5">
      <div className="container">
        {/* Heading Section */}
        <div className="text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl font-bold text-[#2E3A4D] tracking-tighter"
          >
            Got Questions? We’ve Got Answers.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-4 text-lg text-[#6B7280] max-w-2xl mx-auto"
          >
            Here are answers to the most common questions about NeuroBoost. If
            you don’t see your question, feel free to reach out!
          </motion.p>
        </div>

        {/* Accordion Section */}
        <div className="mt-12 max-w-[648px] mx-auto">
          {items.map(({ question, answer }) => (
            <AccordionItem question={question} answer={answer} key={question} />
          ))}
        </div>
      </div>
    </div>
  );
};