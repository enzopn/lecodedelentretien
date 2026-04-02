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
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <ProblemSection />
      <AccompagnementSection />
      <TestimonialsSection />
      <AuthorSection />
      <FAQSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
