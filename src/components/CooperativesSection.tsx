import { Users, Coins, BarChart2, DollarSign, Shield, Building2 } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const CooperativesSection = () => {
  const { t } = useLanguage();

  const services = [
    {
      icon: <Users className="h-8 w-8" />,
      titleKey: 'cooperatives.structuring',
      descKey: 'cooperatives.structuring.desc',
    },
    {
      icon: <Coins className="h-8 w-8" />,
      titleKey: 'cooperatives.management',
      descKey: 'cooperatives.management.desc',
    },
    {
      icon: <BarChart2 className="h-8 w-8" />,
      titleKey: 'cooperatives.planning',
      descKey: 'cooperatives.planning.desc',
    },
    {
      icon: <DollarSign className="h-8 w-8" />,
      titleKey: 'cooperatives.modeling',
      descKey: 'cooperatives.modeling.desc',
    },
    {
      icon: <Building2 className="h-8 w-8" />,
      titleKey: 'cooperatives.administration',
      descKey: 'cooperatives.administration.desc',
    },
    {
      icon: <Shield className="h-8 w-8" />,
      titleKey: 'cooperatives.regulatory',
      descKey: 'cooperatives.regulatory.desc',
    },
  ];

  return (
    <section id="cooperatives" className="py-20 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-orbitron font-bold text-3xl md:text-4xl lg:text-5xl mb-6">
            {t('cooperatives.title')} <span className="text-primary">{t('cooperatives.title.credits')}</span>
          </h2>
          <div className="w-24 h-1 bg-primary rounded-full mx-auto mb-6" />
          <p className="text-lg text-muted-foreground">
            {t('cooperatives.subtitle')}
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

export default CooperativesSection;
