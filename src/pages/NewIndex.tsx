import NewHeader from "@/components/NewHeader";
import NewHeroSection from "@/components/NewHeroSection";
import CalculatorSection from "@/components/CalculatorSection";
import EngineeringSection from "@/components/EngineeringSection";
import TechnicalServicesSection from "@/components/TechnicalServicesSection";
import MobilitySection from "@/components/MobilitySection";
import TechnologySection from "@/components/TechnologySection";
import CooperativesSection from "@/components/CooperativesSection";
import NewAboutSection from "@/components/NewAboutSection";
import InstagramSection from "@/components/InstagramSection";
import NewContactSection from "@/components/NewContactSection";
import NewFooter from "@/components/NewFooter";

const NewIndex = () => {
  return (
    <div className="min-h-screen">
      <NewHeader />
      <main id="solutions">
        <NewHeroSection />
        <CalculatorSection />
        <EngineeringSection />
        <TechnicalServicesSection />
        <MobilitySection />
        <TechnologySection />
        <CooperativesSection />
        <NewAboutSection />
        <InstagramSection />
        <NewContactSection />
      </main>
      <NewFooter />
    </div>
  );
};

export default NewIndex;
