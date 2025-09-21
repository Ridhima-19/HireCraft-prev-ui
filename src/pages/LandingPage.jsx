import Background from "../components/landing/Background";
import BottomSection from "../components/landing/BottomSection";
import DashboardFeature from "../components/landing/DashboardFeature";
import FeatureSection from "../components/landing/FeatureSection";
import Footer from "../components/landing/Footer";
import Navbar from "../components/landing/Navbar";
import PricingPlan from "../components/landing/PricingPlan";
import Section from "../components/landing/Section";
import Hero from "../components/landing/SectionMain";

export default function LandingPage() {
  return (
    <div className="w-full relative bg-white min-h-screen overflow-hidden text-left text-[52px] text-black font-['Inter']">
      <Navbar />
      <Hero />
      <Background />
      <Section />
      <FeatureSection />
      <DashboardFeature />
      <PricingPlan />
      <BottomSection />
      <Footer />
    </div>
  );
}
