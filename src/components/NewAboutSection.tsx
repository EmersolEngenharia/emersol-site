import { Award, Users, Lightbulb, Cpu } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { motion, useInView } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import solarFarm from '@/assets/solar-farm.jpg';

const useCountUp = (end: number, duration = 2000, startCounting: boolean) => {
  const [count, setCount] = useState(0);
  const hasStarted = useRef(false);

  useEffect(() => {
    if (!startCounting || hasStarted.current) return;
    hasStarted.current = true;
    const startTime = performance.now();
    const step = (now: number) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * end));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [startCounting, end, duration]);

  return count;
};

const CountUpStat = ({ end, suffix, labelKey, icon, delay }: { end: number; suffix: string; labelKey: string; icon: React.ReactNode; delay: number }) => {
  const { t } = useLanguage();
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [startCounting, setStartCounting] = useState(false);
  const count = useCountUp(end, 2000, startCounting);

  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => setStartCounting(true), delay * 100);
      return () => clearTimeout(timer);
    }
  }, [isInView, delay]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: delay * 0.1 }}
      className="bg-secondary/60 rounded-2xl p-6 text-center"
    >
      <div className="text-accent mb-3 flex justify-center">{icon}</div>
      <div className="font-inter font-bold text-3xl md:text-4xl text-foreground mb-2">
        {count}{suffix}
      </div>
      <div className="text-sm text-muted-foreground font-light">{t(labelKey)}</div>
    </motion.div>
  );
};

const NewAboutSection = () => {
  const { t } = useLanguage();

  const stats = [
    { end: 25, suffix: "+", labelKey: "about.years.engineering", icon: <Award className="h-5 w-5" strokeWidth={1.5} /> },
    { end: 10, suffix: "+", labelKey: "about.years.solar", icon: <Lightbulb className="h-5 w-5" strokeWidth={1.5} /> },
    { end: 3000, suffix: "+", labelKey: "about.projects", icon: <Users className="h-5 w-5" strokeWidth={1.5} /> },
    { end: 100, suffix: "%", labelKey: "about.ai.technology", icon: <Cpu className="h-5 w-5" strokeWidth={1.5} /> }
  ];

  return (
    <section id="about" className="py-24 md:py-36 bg-background">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">

        {/* Full-width image */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-3xl overflow-hidden mb-20 shadow-2xl shadow-foreground/5"
        >
          <img src={solarFarm} alt="Usina solar Emersol" className="w-full h-64 md:h-96 object-cover" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-20 items-start">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-4">
                {t('about.title.pioneering')} {t('about.title.and')} {t('about.title.trust')}
              </p>
              <h2 className="font-inter font-bold text-3xl md:text-5xl tracking-tight mb-8">
                Sobre a Emersol
              </h2>
            </div>

            <div className="space-y-6 text-muted-foreground leading-relaxed font-light">
              <p className="text-base md:text-lg">{t('about.paragraph1')}</p>
              <p className="text-base md:text-lg">{t('about.paragraph2')}</p>
              <p className="text-base md:text-lg">{t('about.paragraph3')}</p>
              <p className="text-base md:text-lg">{t('about.paragraph4')}</p>
            </div>
          </motion.div>

          {/* Right Content - Stats */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <CountUpStat
                  key={index}
                  end={stat.end}
                  suffix={stat.suffix}
                  labelKey={stat.labelKey}
                  icon={stat.icon}
                  delay={index}
                />
              ))}
            </div>

            {/* Mission */}
            <div className="bg-accent/5 border border-accent/15 rounded-2xl p-8">
              <h3 className="font-semibold text-lg text-foreground mb-4">{t('about.mission.title')}</h3>
              <p className="text-muted-foreground leading-relaxed font-light">{t('about.mission.text')}</p>
            </div>

            <div className="text-center text-sm text-muted-foreground bg-secondary/60 rounded-2xl px-6 py-4">
              {t('about.certification')}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default NewAboutSection;
