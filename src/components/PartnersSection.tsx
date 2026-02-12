import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';

const partners = [
  { name: "TRINA SOLAR", url: "https://www.trinasolar.com" },
  { name: "HUAWEI", url: "https://solar.huawei.com" },
  { name: "WEG", url: "https://www.weg.net" },
  { name: "Sungrow", url: "https://www.sungrowpower.com" },
  { name: "Canadian Solar", url: "https://www.canadiansolar.com" },
  { name: "Fronius", url: "https://www.fronius.com" },
  { name: "Growatt", url: "https://www.growatt.com" },
  { name: "JA Solar", url: "https://www.jasolar.com" },
];

const PartnersSection = () => {
  const { t } = useLanguage();

  return (
    <section className="py-20 md:py-28 bg-secondary/30">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-3">
            Parceiros
          </p>
          <h2 className="font-inter font-bold text-2xl md:text-4xl tracking-tight text-foreground">
            Trabalhamos com as melhores marcas
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
          {partners.map((partner, index) => (
            <motion.a
              key={partner.name}
              href={partner.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="flex items-center justify-center h-20 rounded-2xl bg-background border border-border/50 hover:border-accent/40 hover:shadow-lg hover:shadow-accent/5 transition-all duration-300 group"
            >
              <span className="font-inter font-bold text-base md:text-lg text-muted-foreground group-hover:text-accent transition-colors tracking-tight">
                {partner.name}
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
