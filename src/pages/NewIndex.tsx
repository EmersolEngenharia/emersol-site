import NewHeader from "@/components/NewHeader";
import NewHeroSection from "@/components/NewHeroSection";
import CalculatorSection from "@/components/CalculatorSection";
import EngineeringSection from "@/components/EngineeringSection";
import TechnicalServicesSection from "@/components/TechnicalServicesSection";
import MobilitySection from "@/components/MobilitySection";
import TechnologySection from "@/components/TechnologySection";
import CooperativesSection from "@/components/CooperativesSection";
import NewAboutSection from "@/components/NewAboutSection";
import PartnersSection from "@/components/PartnersSection";
import FAQSection from "@/components/FAQSection";
import NewContactSection from "@/components/NewContactSection";
import NewFooter from "@/components/NewFooter";
import WhatsAppButton from "@/components/WhatsAppButton";
import CTABanner from "@/components/CTABanner";

const NewIndex = () => {
  return (
    <div className="min-h-screen">
      <NewHeader />
      <main>
        <NewHeroSection />
        {/* <CalculatorSection /> - Removed as per user request */}
        <div id="solutions" />
        <EngineeringSection />
        <TechnicalServicesSection />
        <CTABanner />
        <MobilitySection />
        <TechnologySection />
        <CooperativesSection />
        <CTABanner variant="alt" />
        <NewAboutSection />
        <PartnersSection />
        <FAQSection />
        <NewContactSection />
      </main>
      <NewFooter />
      <WhatsAppButton />
    </div>
  );
};

export default NewIndex;
