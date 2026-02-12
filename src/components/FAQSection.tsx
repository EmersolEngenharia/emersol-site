import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";

const faqs = [
  {
    question: "Quanto custa instalar energia solar?",
    answer:
      "O investimento varia conforme o consumo e o tipo de instalação. Um sistema residencial típico custa entre R$ 10.000 e R$ 35.000, com retorno do investimento em 2 a 5 anos. Obviamente existem casos abaixo de R$ 10.000,00 e também casos em que o sistema supera os R$ 35.000,00 Oferecemos financiamento facilitado com nossos parceiros financeiros.",
  },
  {
    question: "Quanto posso economizar na conta de luz?",
    answer:
      "A economia pode chegar a até 95% da conta de energia elétrica. O valor exato depende do dimensionamento do sistema, da irradiação solar da região e do seu padrão de consumo.",
  },
  {
    question: "Qual a vida útil dos painéis solares?",
    answer:
      "Os painéis fotovoltaicos possuem vida útil superior a 25 anos, com garantia de performance de 80% após esse período. Os inversores duram em média de 10 a 15 anos, e oferecemos serviços de manutenção e substituição.",
  },
  {
    question: "O sistema funciona em dias nublados ou chuvosos?",
    answer:
      "Sim! Embora a geração seja menor em dias nublados, o sistema continua produzindo energia. Além disso, os créditos de energia gerados nos dias ensolarados compensam os períodos de menor produção.",
  },
  {
    question: "Preciso de autorização da concessionária?",
    answer:
      "Sim. A Emersol cuida de todo o processo burocrático junto à concessionária local, incluindo o projeto técnico, solicitação de acesso e homologação do sistema.",
  },
  {
    question: "Como funciona o financiamento?",
    answer:
      "Trabalhamos com diversas instituições financeiras como Santander, BV Financeira, SICOOB, Banco do Brasil, CAIXA, Bradesco e Solfácil. As condições incluem parcelamento em até 120 meses, com parcelas que podem ser menores que a própria conta de luz.",
  },
  {
    question: "Qual manutenção o sistema exige?",
    answer:
      "A manutenção é simples: limpeza periódica dos painéis (a cada 6-12 meses) e inspeção do sistema elétrico. A Emersol oferece planos de manutenção preventiva e monitoramento remoto 24h para garantir o máximo desempenho.",
  },
  {
    question: "A Emersol atende minha região?",
    answer:
      "Atendemos todo o estado de Goiás e regiões próximas de Uberlândia/MG, com unidades em Itumbiara e Caldas Novas. Entre em contato para verificar a disponibilidade na sua localidade.",
  },
];

const FAQSection = () => {
  return (
    <section id="faq" className="py-24 md:py-36 bg-background">
      <div className="max-w-3xl mx-auto px-6 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-3">
            Dúvidas Frequentes
          </p>
          <h2 className="font-inter font-bold text-3xl md:text-5xl tracking-tight text-foreground">
            Perguntas & Respostas
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card border border-border/60 rounded-2xl px-6 data-[state=open]:border-accent/30 transition-colors"
              >
                <AccordionTrigger className="text-left font-semibold text-foreground hover:text-accent hover:no-underline py-5 text-base">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed font-light pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
