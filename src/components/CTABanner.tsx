import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const CTABanner = ({ variant = "default" }: { variant?: "default" | "alt" }) => {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className={variant === "alt" ? "bg-secondary/30" : "bg-background"}>
      <div className="max-w-6xl mx-auto px-6 sm:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row items-center justify-between gap-6 bg-accent/5 border border-accent/15 rounded-3xl px-8 py-8 md:px-12"
        >
          <div>
            <h3 className="font-inter font-bold text-xl md:text-2xl text-foreground mb-1">
              Pronto para economizar com energia solar?
            </h3>
            <p className="text-muted-foreground font-light text-sm md:text-base">
              Solicite um orçamento gratuito e sem compromisso.
            </p>
          </div>
          <button
            onClick={scrollToContact}
            className="shrink-0 bg-accent text-accent-foreground px-8 py-3.5 rounded-full font-semibold hover:brightness-110 transition-all duration-300 flex items-center gap-2 shadow-lg shadow-accent/20"
          >
            Solicitar Orçamento
            <ArrowRight className="h-4 w-4" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default CTABanner;
