
import { useState } from 'react';
import { Phone, MapPin, Mail, MessageCircle, Send, Clock } from 'lucide-react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    city: '',
    service: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const whatsappMessage = `Olá! Gostaria de um orçamento para ${formData.service}. 
    
Meus dados:
Nome: ${formData.name}
Telefone: ${formData.phone}
Cidade: ${formData.city}
Mensagem: ${formData.message}`;
    
    const whatsappUrl = `https://wa.me/556492418765?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 relative overflow-hidden bg-muted/30">
      <div className="container-max section-padding">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="font-orbitron font-bold text-3xl md:text-4xl lg:text-5xl mb-6">
            Pronto para gerar sua <span className="text-primary">própria energia</span>?
          </h2>
          <div className="w-24 h-1 yellow-gradient rounded-full mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Fale com nossos especialistas e descubra como a energia solar pode transformar sua conta de luz em investimento
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          
          {/* Contact Form */}
          <div className="animate-fade-in-left">
            <div className="bg-card border border-border rounded-2xl p-8">
              <h3 className="font-orbitron font-bold text-2xl mb-6 text-primary">
                Solicite seu Orçamento
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Nome Completo</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:border-primary focus:outline-none transition-colors"
                    placeholder="Digite seu nome completo"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">WhatsApp/Telefone</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:border-primary focus:outline-none transition-colors"
                    placeholder="(64) 99999-9999"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Cidade</label>
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:border-primary focus:outline-none transition-colors"
                    placeholder="Sua cidade"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Do que você precisa?</label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:border-primary focus:outline-none transition-colors"
                  >
                    <option value="">Selecione uma opção</option>
                    <option value="Sistema On-Grid Residencial">Sistema On-Grid Residencial</option>
                    <option value="Sistema On-Grid Comercial">Sistema On-Grid Comercial</option>
                    <option value="Sistema Off-Grid">Sistema Off-Grid</option>
                    <option value="Sistema Híbrido">Sistema Híbrido</option>
                    <option value="Estação de Recarga VE">Estação de Recarga VE</option>
                    <option value="Comissionamento de Usina">Comissionamento de Usina</option>
                    <option value="Monitoramento 24h">Monitoramento 24h</option>
                    <option value="Manutenção">Plano de Manutenção</option>
                    <option value="Seguro Solar">Seguro Solar</option>
                    <option value="Outros">Outros</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Mensagem (opcional)</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:border-primary focus:outline-none transition-colors resize-none"
                    placeholder="Conte-nos mais detalhes sobre seu projeto..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-primary text-primary-foreground px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transition-all duration-300 animate-pulse-glow flex items-center justify-center space-x-2"
                >
                  <MessageCircle className="h-5 w-5" />
                  <span>Enviar via WhatsApp</span>
                  <Send className="h-5 w-5" />
                </button>
              </form>
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-8 animate-fade-in-right">
            
            {/* Direct Contact */}
            <div className="bg-card border border-border rounded-2xl p-8">
              <h3 className="font-orbitron font-bold text-2xl mb-6 text-primary">
                Contatos Diretos
              </h3>
              
              <div className="space-y-6">
                <a 
                  href="https://wa.me/556492418765" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-4 p-4 bg-green-500/10 border border-green-500/30 rounded-lg hover:bg-green-500/20 transition-colors group"
                >
                  <MessageCircle className="h-6 w-6 text-green-500" />
                  <div>
                    <div className="font-semibold text-green-500">WhatsApp Principal</div>
                    <div className="text-sm text-muted-foreground">(64) 9241-8765</div>
                  </div>
                </a>

                <div className="flex items-center space-x-4 p-4 bg-primary/10 border border-primary/30 rounded-lg">
                  <Phone className="h-6 w-6 text-primary" />
                  <div>
                    <div className="font-semibold">Telefone Comercial</div>
                    <div className="text-sm text-muted-foreground">(64) 3431-3777</div>
                  </div>
                </div>

                <div className="flex items-center space-x-4 p-4 bg-primary/10 border border-primary/30 rounded-lg">
                  <Mail className="h-6 w-6 text-primary" />
                  <div>
                    <div className="font-semibold">E-mail Comercial</div>
                    <div className="text-sm text-muted-foreground">contato@emersol.com.br</div>
                  </div>
                </div>

                <div className="flex items-center space-x-4 p-4 bg-primary/10 border border-primary/30 rounded-lg">
                  <Clock className="h-6 w-6 text-primary" />
                  <div>
                    <div className="font-semibold">Horário de Atendimento</div>
                    <div className="text-sm text-muted-foreground">Segunda a Sexta: 7:30h às 17:30h</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Locations */}
            <div className="bg-card border border-border rounded-2xl p-8">
              <h3 className="font-orbitron font-bold text-2xl mb-6 text-primary">
                Nossas Unidades
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4 p-4 bg-muted/50 rounded-lg">
                  <MapPin className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <div className="font-semibold">Itumbiara/GO</div>
                    <div className="text-sm text-muted-foreground">(64) 3431-3777 ou (64) 9966-3777</div>
                    <div className="text-sm text-muted-foreground">Rua Leopoldo de Bulhões, 1401A, B. Santos Dumont</div>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-4 bg-muted/50 rounded-lg">
                  <MapPin className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <div className="font-semibold">Caldas Novas/GO</div>
                    <div className="text-sm text-muted-foreground">(64) 3012-4017</div>
                    <div className="text-sm text-muted-foreground">Avenida A, Quadra 15, Lote 05</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="bg-card border border-border rounded-2xl p-8">
              <h3 className="font-orbitron font-bold text-2xl mb-6 text-primary">
                Siga a Emersol
              </h3>
              
              <div className="flex space-x-4">
                <a 
                  href="https://instagram.com/emersol_engenharia" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-12 h-12 bg-pink-600/20 border border-pink-600/30 rounded-lg hover:bg-pink-600/30 transition-colors"
                >
                  <span className="text-pink-400 font-bold">ig</span>
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
