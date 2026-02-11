import { Wrench, Headphones, FileCheck, RefreshCw, Activity, Monitor } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';
import solarDetail from '@/assets/solar-panels-detail.jpg';

const TechnicalServicesSection = () => {
  const { t } = useLanguage();

  const services = [
    { icon: <Wrench className="h-6 w-6" strokeWidth={1.5} />, titleKey: 'technical.maintenance', descKey: 'technical.maintenance.desc' },
    { icon: <Headphones className="h-6 w-6" strokeWidth={1.5} />, titleKey: 'technical.aftersales', descKey: 'technical.aftersales.desc' },
    { icon: <FileCheck className="h-6 w-6" strokeWidth={1.5} />, titleKey: 'technical.reports', descKey: 'technical.reports.desc' },
    { icon: <RefreshCw className="h-6 w-6" strokeWidth={1.5} />, titleKey: 'technical.modernization', descKey: 'technical.modernization.desc' },
    { icon: <Activity className="h-6 w-6" strokeWidth={1.5} />, titleKey: 'technical.analysis', descKey: 'technical.analysis.desc' },
    { icon: <Monitor className="h-6 w-6" strokeWidth={1.5} />, titleKey: 'technical.monitoring', descKey: 'technical.monitoring.desc' },
  ];

  return (
    <section id="technical" className="py-24 md:py-36 bg-secondary/50">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-4">
              {t('technical.title')}
            </p>
            <h2 className="font-inter font-bold text-3xl md:text-5xl tracking-tight mb-6">
              {t('technical.title.specialized')}
            </h2>
            <p className="text-muted-foreground text-lg font-light leading-relaxed">
              {t('technical.subtitle')}
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl overflow-hidden shadow-2xl shadow-foreground/5"
          >
            <img src={solarDetail} alt="Painéis solares de alta tecnologia" className="w-full h-72 object-cover" />
          </motion.div>
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
              <h3 className="font-semibold text-lg mb-3 text-foreground">{t(service.titleKey)}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed font-light">{t(service.descKey)}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnicalServicesSection;
