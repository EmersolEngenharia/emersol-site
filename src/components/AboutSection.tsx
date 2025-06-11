
import { Award, Users, Lightbulb, Cpu } from 'lucide-react';

const AboutSection = () => {
  const stats = [
    { number: "25+", label: "Anos em Engenharia", icon: <Award className="h-6 w-6" /> },
    { number: "10+", label: "Anos em Solar", icon: <Lightbulb className="h-6 w-6" /> },
    { number: "1000+", label: "Projetos Executados", icon: <Users className="h-6 w-6" /> },
    { number: "100%", label: "Tecnologia IA", icon: <Cpu className="h-6 w-6" /> }
  ];

  return (
    <section id="about" className="py-20 relative overflow-hidden tech-gradient">
      <div className="container-max section-padding">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in-left">
            <div>
              <h2 className="font-orbitron font-bold text-3xl md:text-4xl lg:text-5xl mb-6">
                <span className="text-primary">Pioneirismo</span> e <span className="text-primary">Confiança</span>
              </h2>
              <div className="w-24 h-1 yellow-gradient rounded-full mb-8"></div>
            </div>

            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p className="text-lg">
                A <span className="text-primary font-semibold">Emersol</span> nasceu da visão de que a energia do futuro 
                deveria ser acessível, inteligente e sustentável. Com mais de duas décadas de sólida experiência em 
                <span className="text-primary font-semibold"> Engenharia Elétrica</span>, nos tornamos pioneiros na região 
                em energia solar fotovoltaica.
              </p>

              <p className="text-lg">
                Nossa jornada começou quando poucos acreditavam no potencial da energia solar no Brasil. Hoje, após 
                <span className="text-primary font-semibold"> mais de 10 anos</span> dedicados exclusivamente a esta 
                tecnologia, somos referência em soluções que vão desde sistemas residenciais até grandes complexos industriais.
              </p>

              <p className="text-lg">
                O que nos diferencia é nossa capacidade de combinar a tradição da engenharia elétrica com as mais 
                avançadas tecnologias, incluindo <span className="text-primary font-semibold">Inteligência Artificial 
                para análise de desempenho</span>, garantindo projetos mais eficientes, seguros e rentáveis.
              </p>

              <p className="text-lg">
                Da sua casa às grandes usinas, construímos o futuro energético com <span className="text-primary font-semibold">
                tecnologia de ponta</span>, <span className="text-primary font-semibold">confiabilidade comprovada</span> e 
                o compromisso de transformar a energia solar em um investimento seguro e lucrativo.
              </p>
            </div>
          </div>

          {/* Right Content - Stats */}
          <div className="space-y-8 animate-fade-in-right">
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div 
                  key={index}
                  className="bg-card border border-border rounded-2xl p-6 text-center hover:border-primary/50 transition-all duration-300 hover:scale-105 hover:glow-effect animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="text-primary mb-3 flex justify-center">
                    {stat.icon}
                  </div>
                  <div className="font-orbitron font-bold text-2xl md:text-3xl text-primary mb-2">
                    {stat.number}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Mission Statement */}
            <div className="bg-primary/10 border border-primary/30 rounded-2xl p-8 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              <h3 className="font-orbitron font-bold text-xl text-primary mb-4">Nossa Missão</h3>
              <p className="text-muted-foreground leading-relaxed">
                Democratizar o acesso à energia limpa e inteligente, transformando cada cliente em um produtor 
                de energia sustentável, contribuindo para um futuro mais verde e economicamente viável.
              </p>
            </div>

            {/* Certifications */}
            <div className="flex flex-wrap gap-4 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
              <div className="bg-card border border-border rounded-lg px-4 py-2 text-sm">
                CREA Registrado
              </div>
              <div className="bg-card border border-border rounded-lg px-4 py-2 text-sm">
                Cert. ANEEL
              </div>
              <div className="bg-card border border-border rounded-lg px-4 py-2 text-sm">
                ISO 9001
              </div>
              <div className="bg-card border border-border rounded-lg px-4 py-2 text-sm">
                Tecnologia IA
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;
