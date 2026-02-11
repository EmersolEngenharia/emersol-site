import { Code, Boxes, Cloud, Bot, TrendingUp, Database } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';

const TechnologySection = () => {
  const { t } = useLanguage();

  const services = [
    { icon: <Code className="h-6 w-6" strokeWidth={1.5} />, titleKey: 'technology.developer', descKey: 'technology.developer.desc' },
    { icon: <Boxes className="h-6 w-6" strokeWidth={1.5} />, titleKey: 'technology.integration', descKey: 'technology.integration.desc' },
    { icon: <Cloud className="h-6 w-6" strokeWidth={1.5} />, titleKey: 'technology.saas', descKey: 'technology.saas.desc' },
    { icon: <Bot className="h-6 w-6" strokeWidth={1.5} />, titleKey: 'technology.ai', descKey: 'technology.ai.desc' },
    { icon: <TrendingUp className="h-6 w-6" strokeWidth={1.5} />, titleKey: 'technology.optimization', descKey: 'technology.optimization.desc' },
    { icon: <Database className="h-6 w-6" strokeWidth={1.5} />, titleKey: 'technology.digital', descKey: 'technology.digital.desc' },
  ];

  return (
    <section id="technology" className="py-24 md:py-36 bg-secondary/50">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-accent font-semibold text-sm uppercase tracking-widest mb-4">{t('technology.title')}</motion.p>
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="font-inter font-bold text-3xl md:text-5xl tracking-tight mb-6">{t('technology.title.systems')}</motion.h2>
          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="text-muted-foreground text-lg font-light leading-relaxed">{t('technology.subtitle')}</motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, index) => (
            <motion.div key={index} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.08 }}
              className="group bg-card border border-border/60 hover:border-accent/30 rounded-2xl p-8 transition-all duration-500 hover:shadow-lg hover:shadow-accent/5 hover:-translate-y-1">
              <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors duration-300">
                <div className="text-accent">{service.icon}</div>
              </div>
              <h3 className="font-semibold text-lg mb-3 text-foreground">{t(service.titleKey)}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed font-light">{t(service.descKey)}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnologySection;
