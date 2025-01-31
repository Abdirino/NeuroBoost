import { CallToAction } from "@/Components/CallToAction";
import { FAQs } from "@/Components/FAQs";
import { Features } from "@/Components/Feature";
import { Footer } from "@/Components/Footer";
import { Hero } from "@/Components/Hero";
import { Navbar } from "@/Components/Navbar";
import { Pricing } from "@/Components/Pricing";
import { Testimonials } from "@/Components/Testimonials";
import { DailyBreakdown } from "@/Components/DailyBreakdown";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <DailyBreakdown /> 
      <Testimonials />
      <Pricing />
      <FAQs />
      <CallToAction />
      <Footer />
    </>
  );
}