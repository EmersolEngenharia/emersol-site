import { Award, Users, Lightbulb, Cpu } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const NewAboutSection = () => {
  const { t } = useLanguage();

  const stats = [
    { number: "25+", labelKey: "about.years.engineering", icon: <Award className="h-6 w-6" /> },
    { number: "10+", labelKey: "about.years.solar", icon: <Lightbulb className="h-6 w-6" /> },
    { number: "3000+", labelKey: "about.projects", icon: <Users className="h-6 w-6" /> },
    { number: "100%", labelKey: "about.ai.technology", icon: <Cpu className="h-6 w-6" /> }
  ];

  return (
    <section id="about" className="py-20 md:py-32 bg-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Content */}
          <div className="space-y-8">
            <div>
              <h2 className="font-orbitron font-bold text-3xl md:text-4xl lg:text-5xl mb-6">
                <span className="text-primary">{t('about.title.pioneering')}</span> {t('about.title.and')} <span className="text-primary">{t('about.title.trust')}</span>
              </h2>
              <div className="w-20 h-1 bg-primary rounded-full mb-8" />
            </div>

            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p className="text-base md:text-lg">
                {t('about.paragraph1')}
              </p>

              <p className="text-base md:text-lg">
                {t('about.paragraph2')}
              </p>

              <p className="text-base md:text-lg">
                {t('about.paragraph3')}
              </p>

              <p className="text-base md:text-lg">
                {t('about.paragraph4')}
              </p>
            </div>
          </div>

          {/* Right Content - Stats */}
          <div className="space-y-8">
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-card border border-border rounded-xl p-6 text-center hover:border-primary/50 transition-all duration-300 hover:shadow-lg"
                >
                  <div className="text-primary mb-3 flex justify-center">
                    {stat.icon}
                  </div>
                  <div className="font-orbitron font-bold text-2xl md:text-3xl text-primary mb-2">
                    {stat.number}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {t(stat.labelKey)}
                  </div>
                </div>
              ))}
            </div>

            {/* Mission Statement */}
            <div className="bg-primary/5 border border-primary/20 rounded-xl p-8">
              <h3 className="font-orbitron font-bold text-xl text-primary mb-4">
                {t('about.mission.title')}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {t('about.mission.text')}
              </p>
            </div>

            {/* Certifications */}
            <div className="bg-card border border-border rounded-xl px-6 py-4 text-center">
              <p className="text-sm font-medium text-foreground">
                {t('about.certification')}
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default NewAboutSection;
