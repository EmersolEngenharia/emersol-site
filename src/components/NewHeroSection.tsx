import { ArrowRight } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';
import heroImage from '@/assets/hero-solar.jpg';

const NewHeroSection = () => {
  const { t } = useLanguage();

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToSolutions = () => {
    document.getElementById('solutions')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Casa moderna com painéis solares"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-8 text-center pt-32 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-8"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-medium tracking-wide uppercase bg-accent/10 text-accent border border-accent/20">
              {t('hero.experience')}
            </span>
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="font-inter font-extrabold text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[0.95] tracking-tight"
          >
            <span className="text-foreground">{t('hero.title.intelligent')}</span>
            <br />
            <span className="text-foreground">{t('hero.title.intelligent2')}</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed font-light"
          >
            {t('hero.subtitle')}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex flex-col sm:flex-row gap-4 justify-center pt-4"
          >
            <button
              onClick={scrollToContact}
              className="inline-flex items-center justify-center gap-2 bg-accent text-accent-foreground px-8 py-4 rounded-full font-semibold text-base hover:brightness-110 transition-all duration-300 shadow-lg shadow-accent/25 hover:shadow-xl hover:shadow-accent/30 hover:-translate-y-0.5"
            >
              {t('hero.cta.simulate')}
              <ArrowRight className="h-4 w-4" />
            </button>
            <button
              onClick={scrollToSolutions}
              className="inline-flex items-center justify-center gap-2 bg-foreground/5 backdrop-blur-sm text-foreground px-8 py-4 rounded-full font-semibold text-base border border-foreground/10 hover:bg-foreground/10 transition-all duration-300 hover:-translate-y-0.5"
            >
              {t('hero.cta.solutions')}
            </button>
          </motion.div>

          {/* Trust strip */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="flex flex-wrap items-center justify-center gap-8 pt-8 text-sm text-muted-foreground"
          >
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-accent" />
              {t('hero.experience')}
            </span>
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-accent" />
              {t('hero.technology')}
            </span>
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-accent" />
              {t('hero.economy')}
            </span>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:block"
      >
        <div className="w-6 h-10 border-2 border-foreground/20 rounded-full flex justify-center">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-3 bg-foreground/30 rounded-full mt-2"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default NewHeroSection;
