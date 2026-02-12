import { Car, TrendingUp, Users, BarChart3, Network } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';
import evMobilityImg from '@/assets/ev-mobility.png';

const MobilitySection = () => {
  const { t } = useLanguage();

  const services = [
    { icon: <Car className="h-6 w-6" strokeWidth={1.5} />, titleKey: 'mobility.strategist', descKey: 'mobility.strategist.desc' },
    { icon: <TrendingUp className="h-6 w-6" strokeWidth={1.5} />, titleKey: 'mobility.investor', descKey: 'mobility.investor.desc' },
    { icon: <Users className="h-6 w-6" strokeWidth={1.5} />, titleKey: 'mobility.partnerships', descKey: 'mobility.partnerships.desc' },
    { icon: <BarChart3 className="h-6 w-6" strokeWidth={1.5} />, titleKey: 'mobility.modeling', descKey: 'mobility.modeling.desc' },
    { icon: <Network className="h-6 w-6" strokeWidth={1.5} />, titleKey: 'mobility.network', descKey: 'mobility.network.desc' },
  ];

  return (
    <section id="mobility" className="py-24 md:py-36 bg-background">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-accent font-semibold text-sm uppercase tracking-widest mb-4">{t('mobility.title')}</motion.p>
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="font-inter font-bold text-3xl md:text-5xl tracking-tight mb-6">{t('mobility.title.electric')}</motion.h2>
          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="text-muted-foreground text-lg font-light leading-relaxed">{t('mobility.subtitle')}</motion.p>
        </div>

        {/* First row - 3 cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.slice(0, 3).map((service, index) => (
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

        {/* Second row - card + image + card */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5">
          {/* Card 4 */}
          {services.slice(3, 4).map((service, index) => (
            <motion.div key={index + 3} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 3 * 0.08 }}
              className="group bg-card border border-border/60 hover:border-accent/30 rounded-2xl p-8 transition-all duration-500 hover:shadow-lg hover:shadow-accent/5 hover:-translate-y-1">
              <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors duration-300">
                <div className="text-accent">{service.icon}</div>
              </div>
              <h3 className="font-semibold text-lg mb-3 text-foreground">{t(service.titleKey)}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed font-light">{t(service.descKey)}</p>
            </motion.div>
          ))}

          {/* Center image with faded edges */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex items-center justify-center rounded-2xl overflow-hidden"
          >
            <img
              src={evMobilityImg}
              alt="Mobilidade elétrica sustentável"
              className="w-full h-full object-contain"
              style={{
                maskImage: 'radial-gradient(ellipse 70% 70% at center, black 40%, transparent 100%)',
                WebkitMaskImage: 'radial-gradient(ellipse 70% 70% at center, black 40%, transparent 100%)',
              }}
            />
          </motion.div>

          {/* Card 5 */}
          {services.slice(4, 5).map((service, index) => (
            <motion.div key={index + 4} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 4 * 0.08 }}
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

export default MobilitySection;
