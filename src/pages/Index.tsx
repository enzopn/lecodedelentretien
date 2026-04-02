import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import AccompagnementSection from "@/components/AccompagnementSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import AuthorSection from "@/components/AuthorSection";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    document.querySelectorAll(".reveal, .reveal-stagger").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <div className="reveal"><ProblemSection /></div>
      <div className="reveal"><AccompagnementSection /></div>
      <div className="reveal"><TestimonialsSection /></div>
      <div className="reveal"><AuthorSection /></div>
      <div className="reveal"><FAQSection /></div>
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
