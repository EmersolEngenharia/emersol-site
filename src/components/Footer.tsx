
const Footer = () => {
  return (
    <footer className="bg-background border-t border-border py-12">
      <div className="container-max section-padding">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img 
                src="/lovable-uploads/346171cb-7f65-42c1-93e8-9ccc997e289a.png" 
                alt="Emersol Logo" 
                className="h-10 w-10"
              />
              <div>
                <h3 className="font-orbitron font-bold text-xl text-primary">EMERSOL</h3>
                <p className="text-xs text-muted-foreground">ENGENHARIA • ENERGIA SOLAR</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Transformando energia solar em economia real para residências, empresas e indústrias. 
              Pioneiros em soluções inteligentes e sustentáveis.
            </p>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Nossos Serviços</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Energia Solar On-Grid</li>
              <li>• Energia Solar Off-Grid</li>
              <li>• Sistemas Híbridos</li>
              <li>• Estações de Recarga VE</li>
              <li>• Monitoramento 24h</li>
              <li>• Manutenção Especializada</li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Contato</h4>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>📞 (64) 9241-8765</p>
              <p>📞 (64) 3431-3777</p>
              <p>✉️ contato@emersol.com.br</p>
              <p>📍 Itumbiara - GO</p>
              <p>📍 Caldas Novas - GO</p>
              <p>🕐 Seg-Sex: 7:30h às 17:30h</p>
            </div>
          </div>

        </div>

        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-muted-foreground">
              © 2024 Emersol Engenharia. Todos os direitos reservados.
            </div>
            <div className="flex space-x-6 text-sm text-muted-foreground">
              <a href="#" className="hover:text-primary transition-colors">Política de Privacidade</a>
              <a href="#" className="hover:text-primary transition-colors">Termos de Uso</a>
              <a href="#" className="hover:text-primary transition-colors">LGPD</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
