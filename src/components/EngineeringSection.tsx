import { Cpu, Zap, Car, Grid3x3, Building, ShieldCheck } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const EngineeringSection = () => {
  const { t } = useLanguage();

  const services = [
    {
      icon: <Cpu className="h-8 w-8" />,
      titleKey: 'engineering.energy.engineer',
      descKey: 'engineering.energy.engineer.desc',
    },
    {
      icon: <Grid3x3 className="h-8 w-8" />,
      titleKey: 'engineering.designer',
      descKey: 'engineering.designer.desc',
    },
    {
      icon: <Car className="h-8 w-8" />,
      titleKey: 'engineering.ev.stations',
      descKey: 'engineering.ev.stations.desc',
    },
    {
      icon: <Zap className="h-8 w-8" />,
      titleKey: 'engineering.hybrid',
      descKey: 'engineering.hybrid.desc',
    },
    {
      icon: <Building className="h-8 w-8" />,
      titleKey: 'engineering.commercial',
      descKey: 'engineering.commercial.desc',
    },
    {
      icon: <ShieldCheck className="h-8 w-8" />,
      titleKey: 'engineering.compliance',
      descKey: 'engineering.compliance.desc',
    },
  ];

  return (
    <section id="engineering" className="py-20 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-orbitron font-bold text-3xl md:text-4xl lg:text-5xl mb-6">
            {t('engineering.title')} <span className="text-primary">{t('engineering.title.energy')}</span>
          </h2>
          <div className="w-24 h-1 bg-primary rounded-full mx-auto mb-6" />
          <p className="text-lg text-muted-foreground">
            {t('engineering.subtitle')}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-card border border-border hover:border-primary/50 rounded-xl p-8 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            >
              <div className="text-primary mb-5 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="font-semibold text-lg mb-3 text-foreground group-hover:text-primary transition-colors">
                {t(service.titleKey)}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {t(service.descKey)}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default EngineeringSection;
