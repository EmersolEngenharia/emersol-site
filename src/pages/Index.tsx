
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import ServicesSection from '../components/ServicesSection';
import PortfolioSection from '../components/PortfolioSection';
import AboutSection from '../components/AboutSection';
import InstagramSection from '../components/InstagramSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <HeroSection />
      <ServicesSection />
      <PortfolioSection />
      <AboutSection />
      <InstagramSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
