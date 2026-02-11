import { Cpu, Zap, Car, Grid3x3, Building, ShieldCheck } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';

const EngineeringSection = () => {
  const { t } = useLanguage();

  const services = [
    { icon: <Cpu className="h-6 w-6" strokeWidth={1.5} />, titleKey: 'engineering.energy.engineer', descKey: 'engineering.energy.engineer.desc' },
    { icon: <Grid3x3 className="h-6 w-6" strokeWidth={1.5} />, titleKey: 'engineering.designer', descKey: 'engineering.designer.desc' },
    { icon: <Car className="h-6 w-6" strokeWidth={1.5} />, titleKey: 'engineering.ev.stations', descKey: 'engineering.ev.stations.desc' },
    { icon: <Zap className="h-6 w-6" strokeWidth={1.5} />, titleKey: 'engineering.hybrid', descKey: 'engineering.hybrid.desc' },
    { icon: <Building className="h-6 w-6" strokeWidth={1.5} />, titleKey: 'engineering.commercial', descKey: 'engineering.commercial.desc' },
    { icon: <ShieldCheck className="h-6 w-6" strokeWidth={1.5} />, titleKey: 'engineering.compliance', descKey: 'engineering.compliance.desc' },
  ];

  return (
    <section id="engineering" className="py-24 md:py-36 bg-background">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-accent font-semibold text-sm uppercase tracking-widest mb-4"
          >
            {t('engineering.title')}
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-inter font-bold text-3xl md:text-5xl tracking-tight mb-6"
          >
            {t('engineering.title.energy')}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground text-lg font-light leading-relaxed"
          >
            {t('engineering.subtitle')}
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="group bg-card border border-border/60 hover:border-accent/30 rounded-2xl p-8 transition-all duration-500 hover:shadow-lg hover:shadow-accent/5 hover:-translate-y-1"
            >
              <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors duration-300">
                <div className="text-accent">{service.icon}</div>
              </div>
              <h3 className="font-semibold text-lg mb-3 text-foreground">
                {t(service.titleKey)}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed font-light">
                {t(service.descKey)}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EngineeringSection;
