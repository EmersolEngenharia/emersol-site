
import { 
  Zap, 
  Battery, 
  Shield, 
  Car, 
  Settings, 
  Monitor, 
  Wrench, 
  FileCheck 
} from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Energia Solar On-Grid",
      description: "Conectado à rede para máxima economia na sua conta de luz."
    },
    {
      icon: <Battery className="h-8 w-8" />,
      title: "Energia Solar Off-Grid",
      description: "Autonomia total com sistemas isolados, ideais para locais remotos."
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Energia Solar Híbrida",
      description: "A união da economia do On-Grid com a segurança de baterias para não ficar no escuro."
    },
    {
      icon: <Car className="h-8 w-8" />,
      title: "Estações de Recarga VE",
      description: "Instale o futuro na sua casa ou empresa com carregadores para veículos elétricos."
    },
    {
      icon: <Settings className="h-8 w-8" />,
      title: "Comissionamento de Grandes Usinas",
      description: "Análise e validação técnica para garantir a performance e a segurança de investimentos de grande porte."
    },
    {
      icon: <Monitor className="h-8 w-8" />,
      title: "Gestão e Monitoramento Online 24h",
      description: "Nossa equipe gerencia sua usina com acompanhamento em tempo real para otimizar cada watt produzido."
    },
    {
      icon: <Wrench className="h-8 w-8" />,
      title: "Planos de Manutenção",
      description: "Pacotes completos de cuidados, incluindo limpeza e inspeções preventivas, para a longevidade do seu sistema."
    },
    {
      icon: <FileCheck className="h-8 w-8" />,
      title: "Seguro Solar",
      description: "Proteja seu investimento contra imprevistos e garanta sua tranquilidade."
    }
  ];

  return (
    <section id="services" className="py-20 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 tech-gradient opacity-50"></div>
      
      <div className="container-max section-padding relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="font-orbitron font-bold text-3xl md:text-4xl lg:text-5xl mb-6">
            Nossas <span className="text-primary">Soluções</span> de A a Z
          </h2>
          <div className="w-24 h-1 yellow-gradient rounded-full mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Oferecemos um portfólio completo de produtos e serviços para atender desde residências até grandes complexos industriais
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group bg-card border border-border rounded-2xl p-6 hover:border-primary/50 transition-all duration-300 hover:scale-105 hover:glow-effect animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-primary mb-4 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="font-semibold text-lg mb-3 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
          <button 
            onClick={() => {
              const element = document.getElementById('contact');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
            className="bg-primary text-primary-foreground px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transition-all duration-300 animate-pulse-glow"
          >
            Solicite um Orçamento Personalizado
          </button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
