import { Zap, TrendingUp, Shield } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import SolarTechAnimation from './SolarTechAnimation';

const NewHeroSection = () => {
  const { t } = useLanguage();

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToSolutions = () => {
    const element = document.getElementById('solutions');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-b from-background via-background to-muted/20 pt-16">

      {/* Subtle Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="font-orbitron font-black text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight">
                <span className="text-foreground">{t('hero.title.intelligent')}</span>
                <br />
                <span className="text-primary">{t('hero.title.intelligent2')}</span>
                <br />
                <span className="text-foreground">{t('hero.title.future')}</span>
                <br />
                <span className="text-primary">{t('hero.title.sustainable')}</span>
              </h1>

              <div className="w-20 h-1 bg-primary rounded-full" />

              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl">
                {t('hero.subtitle')}
                <br />
                <span className="text-foreground font-medium">{t('hero.subtitle2')}</span>
              </p>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap gap-6">
              <div className="flex items-center space-x-3">
                <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <span className="text-sm font-medium text-foreground">{t('hero.experience')}</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg">
                  <Zap className="h-6 w-6 text-primary" />
                </div>
                <span className="text-sm font-medium text-foreground">{t('hero.technology')}</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg">
                  <TrendingUp className="h-6 w-6 text-primary" />
                </div>
                <span className="text-sm font-medium text-foreground">{t('hero.economy')}</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={scrollToContact}
                className="bg-primary text-primary-foreground px-8 py-4 rounded-xl font-bold text-lg hover:bg-primary/90 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                {t('hero.cta.simulate')}
              </button>
              <button
                onClick={scrollToSolutions}
                className="border-2 border-primary text-primary px-8 py-4 rounded-xl font-bold text-lg hover:bg-primary hover:text-primary-foreground transition-all duration-200"
              >
                {t('hero.cta.solutions')}
              </button>
            </div>
          </div>

          <div className="relative lg:block hidden">
            <div className="relative flex items-center justify-center">
              <SolarTechAnimation />
            </div>
          </div>

        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block">
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center">
          <div className="w-1.5 h-3 bg-primary rounded-full mt-2" />
        </div>
      </div>
    </section>
  );
};

export default NewHeroSection;
