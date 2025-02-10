import Logo from "@/assets/images/neuroboost-website-logo.png";
import Image from "next/image";
import SocialX from "@/assets/images/icons8-twitter-48.png";
import SocialInstagram from "@/assets/images/icons8-insta-50.png";
import SocialLinkedIn from "@/assets/images/icons8-linkedin-50.png";
import SocialTiktok from "@/assets/images/icons8-tiktok-50.png";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="text-[#2E3A4D] bg-[#F5F7FA] text-sm py-10 px-5 z-50">
      <div className="container">
        {/* Main Footer Content */}
        <div className="flex md:items-start md:justify-between justify-start items-center flex-col md:flex-row gap-8">
          {/* Logo and Social Media */}
          <div className="flex flex-col justify-between md:items-start md:justify-start items-center">
            <Image src={Logo} alt="NeuroBoost Logo" height={80} />
            <div className="flex justify-start gap-6 mt-10">
              <Link href="https://x.com/NeuroBoost" aria-label="Twitter">
                <Image
                  src={SocialX}
                  alt="Twitter"
                  className="h-8 w-8 hover:opacity-80 transition-opacity"
                />
              </Link>
              <Link
                href="https://www.instagram.com/NeuroBoost"
                aria-label="Instagram"
              >
                <Image
                  src={SocialInstagram}
                  alt="Instagram"
                  className="h-8 w-8 hover:opacity-80 transition-opacity"
                />
              </Link>
              <Link
                href="https://www.linkedin.com/company/NeuroBoost"
                aria-label="LinkedIn"
              >
                <Image
                  src={SocialLinkedIn}
                  alt="LinkedIn"
                  className="h-8 w-8 hover:opacity-80 transition-opacity"
                />
              </Link>
              <Link
                href="https://www.youtube.com/NeuroBoost"
                aria-label="YouTube"
              >
                <Image
                  src={SocialTiktok}
                  alt="YouTube"
                  className="h-8 w-8 hover:opacity-80 transition-opacity"
                />
              </Link>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="grid md:grid-cols-3 grid-cols-2 gap-12 mb-5">
            {/* Product Links */}
            <nav className="flex flex-col gap-4">
              <h2 className="font-bold text-[#FF3B30]">Product</h2>
              <Link href="#features">Features</Link>
              <Link href="#pricing">Pricing</Link>
              <Link href="#testimonials">Testimonials</Link>
              <Link href="#faq">FAQs</Link>
            </nav>

            {/* Resources Links */}
            <nav className="flex flex-col gap-4">
              <h2 className="font-bold text-[#FF3B30]">Resources</h2>
              <Link href="/blog">Blog</Link>
              <Link href="/guides">Guides</Link>
              <Link href="/community">Community</Link>
              <Link href="/support">Support</Link>
            </nav>

            {/* Legal Links */}
            <nav className="flex flex-col gap-4">
              <h2 className="font-bold text-[#FF3B30]">Legal</h2>
              <Link href="/privacy">Privacy Policy</Link>
              <Link href="/terms">Terms of Service</Link>
              <Link href="/refund">Refund Policy</Link>
            </nav>
          </div>
        </div>

        {/* Copyright Section */}
        <p className="mt-6 pt-6 text-center border-t border-[#E5E7EB] text-[#6B7280]">
          &copy; {new Date().getFullYear()} NeuroBoost. All rights reserved.
        </p>
      </div>
    </footer>
  );
};