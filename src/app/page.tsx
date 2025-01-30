import { Features } from "@/Components/Feature";
import { Hero } from "@/Components/Hero";
import { Navbar } from "@/Components/Navbar";
import { Pricing } from "@/Components/Pricing";
import { Testimonials } from "@/Components/Testimonials";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <Testimonials />
      <Pricing />
    </>
  );
}
