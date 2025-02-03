"use client";
import { motion } from "framer-motion";
import Link from "next/link";

const features = [
  {
    icon: "🤖", // AI icon
    title: "AI-Powered Automation",
    description:
      "Automate repetitive tasks like email responses, scheduling, and data entry with AI tools. Save 10+ hours/week instantly.",
  },
  {
    icon: "🚀", // Rocket icon
    title: "Daily AI Hacks",
    description:
      "Get actionable, step-by-step AI hacks delivered daily. Learn how to automate workflows and boost productivity.",
  },
  {
    icon: "🧠", // Brain icon
    title: "Focus & Productivity Boost",
    description:
      "Discover AI tools and techniques to eliminate distractions, prioritize tasks, and stay laser-focused on your goals.",
  },
  {
    icon: "📊", // Analytics icon
    title: "Real-Time Insights",
    description:
      "Track your productivity gains with AI-powered analytics. See how much time and money you’re saving in real-time.",
  },
  {
    icon: "💡", // Lightbulb icon
    title: "Customizable Templates",
    description:
      "Access ready-to-use Notion templates, ChatGPT prompts, and JavaScript scripts to automate your life instantly.",
  },
  {
    icon: "👥", // Collaboration icon
    title: "Community Support",
    description:
      "Join a community of 500K+ professionals sharing tips, tools, and success stories. Get inspired and stay accountable.",
  },
];

export const Features = () => {
  return (
    <div
      id="features"
      className="bg-[#F5F7FA] py-[72px] sm:py-24 px-4 sm:px-10"
    >
      <div className="container">
        {/* Heading Section */}
        <div className="max-w-3xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="font-bold text-4xl sm:text-5xl text-[#2E3A4D] tracking-tighter"
          >
            What NeuroBoost Offers
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-5 text-lg text-[#6B7280]"
          >
            In just 5 days, you’ll unlock the power of AI to automate your life,
            boost productivity, and achieve more with less effort. Here’s how:
          </motion.p>
        </div>

        {/* Features Grid */}
        <div className="mt-16 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-8">
          {features.map(({ title, description, icon }, index) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 group"
            >
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#FF3B30] text-white text-2xl transition-transform duration-300 group-hover:scale-110">
                {icon}
              </div>
              <h3 className="mt-6 font-bold text-2xl text-[#2E3A4D]">
                {title}
              </h3>
              <p className="mt-2 text-[#6B7280]">{description}</p>
              <Link href="#daily-breakdown">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="mt-6 px-4 py-2 rounded-lg font-bold text-white bg-[#FF3B30] hover:bg-[#E5342A] transition-colors duration-200"
                >
                  Learn More
                </motion.button>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Urgency Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-20 text-center bg-[#FF3B30] p-8 rounded-xl shadow-lg"
        >
          <h2 className="font-bold text-3xl sm:text-4xl text-white">
            Don’t Miss Out!
          </h2>
          <p className="mt-4 text-lg text-white max-w-2xl mx-auto">
            Join 500K+ professionals who’ve transformed their lives with
            NeuroBoost. The free challenge ends soon—sign up now before it’s too
            late!
          </p>
          <Link href="/signup">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-6 px-6 py-3 rounded-lg font-bold text-[#FF3B30] bg-white hover:bg-[#F5F7FA] transition-colors duration-200"
            >
              Join the Free Challenge
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
};
