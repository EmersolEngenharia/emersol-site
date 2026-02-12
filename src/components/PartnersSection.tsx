import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';

const techPartners = [
  { name: "TRINA SOLAR", url: "https://www.trinasolar.com" },
  { name: "HUAWEI", url: "https://solar.huawei.com" },
  { name: "WEG", url: "https://www.weg.net" },
  { name: "Sungrow", url: "https://www.sungrowpower.com" },
  { name: "Canadian Solar", url: "https://www.canadiansolar.com" },
  { name: "Fronius", url: "https://www.fronius.com" },
  { name: "Hoymiles", url: "https://www.hoymiles.com" },
  { name: "JA Solar", url: "https://www.jasolar.com" },
];

const financialPartners = [
  { name: "Santander", url: "https://www.santander.com.br" },
  { name: "BV Financeira", url: "https://www.bv.com.br" },
  { name: "SICOOB", url: "https://www.sicoob.com.br" },
  { name: "Banco do Brasil", url: "https://www.bb.com.br" },
  { name: "CAIXA", url: "https://www.caixa.gov.br" },
  { name: "Bradesco", url: "https://www.bradesco.com.br" },
];

const PartnerGrid = ({ partners, delayOffset = 0 }: { partners: typeof techPartners; delayOffset?: number }) => (
  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
    {partners.map((partner, index) => (
      <motion.a
        key={partner.name}
        href={partner.url}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: (index + delayOffset) * 0.05 }}
        className="flex items-center justify-center h-20 rounded-2xl bg-background border border-border/50 hover:border-accent/40 hover:shadow-lg hover:shadow-accent/5 transition-all duration-300 group"
      >
        <span className="font-inter font-bold text-base md:text-lg text-muted-foreground group-hover:text-accent transition-colors tracking-tight">
          {partner.name}
        </span>
      </motion.a>
    ))}
  </div>
);

const PartnersSection = () => {
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

        {/* Fabricantes */}
        <h3 className="font-inter font-semibold text-lg text-muted-foreground mb-4 text-center">Fabricantes & Tecnologia</h3>
        <PartnerGrid partners={techPartners} />

        {/* Financeiros */}
        <h3 className="font-inter font-semibold text-lg text-muted-foreground mb-4 mt-12 text-center">Parceiros Financeiros</h3>
        <PartnerGrid partners={financialPartners} delayOffset={techPartners.length} />
      </div>
    </section>
  );
};

export default PartnersSection;
