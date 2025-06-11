
import { Zap, TrendingUp, Shield } from 'lucide-react';

const HeroSection = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center relative overflow-hidden tech-gradient">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-64 h-64 bg-primary/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-128 h-128 bg-primary/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="container-max section-padding relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in-left">
            <div className="space-y-4">
              <h1 className="font-orbitron font-black text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-tight">
                <span className="text-glow">Energia</span>
                <br />
                <span className="text-primary">Inteligente</span>
                <br />
                <span className="text-foreground">para um Futuro</span>
                <br />
                <span className="text-primary">Sustentável</span>
              </h1>
              
              <div className="w-24 h-1 yellow-gradient rounded-full"></div>
              
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl">
                A solidez de <span className="text-primary font-semibold">+25 anos em Engenharia Elétrica</span> e 
                o pioneirismo de <span className="text-primary font-semibold">+10 anos em Energia Solar</span>.
                <br />
                Da sua casa a grandes usinas.
              </p>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap gap-6">
              <div className="flex items-center space-x-2">
                <Shield className="h-6 w-6 text-primary" />
                <span className="text-sm text-muted-foreground">25+ Anos de Experiência</span>
              </div>
              <div className="flex items-center space-x-2">
                <Zap className="h-6 w-6 text-primary" />
                <span className="text-sm text-muted-foreground">Tecnologia de Ponta</span>
              </div>
              <div className="flex items-center space-x-2">
                <TrendingUp className="h-6 w-6 text-primary" />
                <span className="text-sm text-muted-foreground">Máxima Economia</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={scrollToContact}
                className="bg-primary text-primary-foreground px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transition-all duration-300 animate-pulse-glow"
              >
                Simule sua Economia Agora
              </button>
              <button 
                onClick={() => {
                  const element = document.getElementById('services');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
                className="border-2 border-primary text-primary px-8 py-4 rounded-full font-bold text-lg hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                Conheça Nossas Soluções
              </button>
            </div>
          </div>

          {/* Right Content - Visual Element */}
          <div className="relative animate-fade-in-right">
            <div className="relative">
              {/* Main Logo/Visual */}
              <div className="flex items-center justify-center">
                <img 
                  src="/lovable-uploads/346171cb-7f65-42c1-93e8-9ccc997e289a.png" 
                  alt="Emersol Energy Solutions" 
                  className="w-96 h-96 object-contain animate-float glow-effect"
                />
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-10 -left-10 w-20 h-20 bg-primary/20 rounded-full blur-xl animate-float"></div>
              <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-primary/10 rounded-full blur-2xl animate-float" style={{ animationDelay: '1s' }}></div>
              <div className="absolute top-1/2 -right-20 w-16 h-16 bg-primary/30 rounded-full blur-lg animate-float" style={{ animationDelay: '3s' }}></div>
            </div>
          </div>

        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
