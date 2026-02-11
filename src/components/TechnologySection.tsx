import { Code, Boxes, Cloud, Bot, TrendingUp, Database } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const TechnologySection = () => {
  const { t } = useLanguage();

  const services = [
    {
      icon: <Code className="h-8 w-8" />,
      titleKey: 'technology.developer',
      descKey: 'technology.developer.desc',
    },
    {
      icon: <Boxes className="h-8 w-8" />,
      titleKey: 'technology.integration',
      descKey: 'technology.integration.desc',
    },
    {
      icon: <Cloud className="h-8 w-8" />,
      titleKey: 'technology.saas',
      descKey: 'technology.saas.desc',
    },
    {
      icon: <Bot className="h-8 w-8" />,
      titleKey: 'technology.ai',
      descKey: 'technology.ai.desc',
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      titleKey: 'technology.optimization',
      descKey: 'technology.optimization.desc',
    },
    {
      icon: <Database className="h-8 w-8" />,
      titleKey: 'technology.digital',
      descKey: 'technology.digital.desc',
    },
  ];

  return (
    <section id="technology" className="py-20 md:py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-orbitron font-bold text-3xl md:text-4xl lg:text-5xl mb-6">
            {t('technology.title')} <span className="text-primary">{t('technology.title.systems')}</span>
          </h2>
          <div className="w-24 h-1 bg-primary rounded-full mx-auto mb-6" />
          <p className="text-lg text-muted-foreground">
            {t('technology.subtitle')}
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

export default TechnologySection;
