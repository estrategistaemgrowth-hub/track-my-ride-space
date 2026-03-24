import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ContactPopup from "@/components/ContactPopup";
import ServicesSection from "@/components/ServicesSection";
import SegmentsSection from "@/components/SegmentsSection";
import SecuritySection from "@/components/SecuritySection";
import CoverageSection from "@/components/CoverageSection";

import Footer from "@/components/Footer";

const Index = () => (
  <>
    <Header />
    <HeroSection />
    <AboutSection />
    <ServicesSection />
    <SegmentsSection />
    <SecuritySection />
    <CoverageSection />
    <div className="h-16 bg-background" />
    <Footer />
  </>
);

export default Index;
