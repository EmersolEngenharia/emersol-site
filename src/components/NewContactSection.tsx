import { useState } from 'react';
import { Phone, MapPin, Mail, MessageCircle, Send, Clock, Instagram } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const NewContactSection = () => {
  const { t } = useLanguage();
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
    <section id="contact" className="py-20 md:py-32 bg-gradient-to-b from-background to-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-orbitron font-bold text-3xl md:text-4xl lg:text-5xl mb-6">
            {t('contact.title')} <span className="text-primary">{t('contact.title.energy')}</span>?
          </h2>
          <div className="w-24 h-1 bg-primary rounded-full mx-auto mb-6" />
          <p className="text-lg text-muted-foreground">
            {t('contact.subtitle')}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">

          {/* Contact Form */}
          <div>
            <div className="bg-card border border-border rounded-2xl p-8 shadow-sm">
              <h3 className="font-orbitron font-bold text-2xl mb-6 text-primary">
                {t('contact.form.title')}
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">{t('contact.form.name')}</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-background border border-border rounded-xl focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                    placeholder={t('contact.form.name.placeholder')}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">{t('contact.form.phone')}</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-background border border-border rounded-xl focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                    placeholder={t('contact.form.phone.placeholder')}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">{t('contact.form.city')}</label>
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-background border border-border rounded-xl focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                    placeholder={t('contact.form.city.placeholder')}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">{t('contact.form.service')}</label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-background border border-border rounded-xl focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all appearance-none cursor-pointer"
                  >
                    <option value="">{t('contact.form.service.placeholder')}</option>
                    <option value={t('contact.form.service.residential')}>{t('contact.form.service.residential')}</option>
                    <option value={t('contact.form.service.commercial')}>{t('contact.form.service.commercial')}</option>
                    <option value={t('contact.form.service.offgrid')}>{t('contact.form.service.offgrid')}</option>
                    <option value={t('contact.form.service.hybrid')}>{t('contact.form.service.hybrid')}</option>
                    <option value={t('contact.form.service.ev')}>{t('contact.form.service.ev')}</option>
                    <option value={t('contact.form.service.commissioning')}>{t('contact.form.service.commissioning')}</option>
                    <option value={t('contact.form.service.monitoring')}>{t('contact.form.service.monitoring')}</option>
                    <option value={t('contact.form.service.maintenance')}>{t('contact.form.service.maintenance')}</option>
                    <option value={t('contact.form.service.insurance')}>{t('contact.form.service.insurance')}</option>
                    <option value={t('contact.form.service.cooperative')}>{t('contact.form.service.cooperative')}</option>
                    <option value={t('contact.form.service.automation')}>{t('contact.form.service.automation')}</option>
                    <option value={t('contact.form.service.others')}>{t('contact.form.service.others')}</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">{t('contact.form.message')}</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-3 bg-background border border-border rounded-xl focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all resize-none"
                    placeholder={t('contact.form.message.placeholder')}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-primary text-primary-foreground px-8 py-4 rounded-xl font-bold text-lg hover:bg-primary/90 transition-all duration-200 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl"
                >
                  <MessageCircle className="h-5 w-5" />
                  <span>{t('contact.form.submit')}</span>
                  <Send className="h-5 w-5" />
                </button>
              </form>
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">

            {/* Direct Contact */}
            <div className="bg-card border border-border rounded-2xl p-8 shadow-sm">
              <h3 className="font-orbitron font-bold text-2xl mb-6 text-primary">
                {t('contact.direct.title')}
              </h3>

              <div className="space-y-4">
                <a
                  href="https://wa.me/556492418765"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-4 p-4 bg-green-500/10 border border-green-500/30 rounded-xl hover:bg-green-500/20 transition-all group"
                >
                  <MessageCircle className="h-6 w-6 text-green-500" />
                  <div>
                    <div className="font-semibold text-green-500">{t('contact.direct.whatsapp')}</div>
                    <div className="text-sm text-muted-foreground">(64) 9241-8765</div>
                  </div>
                </a>

                <div className="flex items-center space-x-4 p-4 bg-primary/5 border border-primary/20 rounded-xl">
                  <Phone className="h-6 w-6 text-primary" />
                  <div>
                    <div className="font-semibold">{t('contact.direct.phone')}</div>
                    <div className="text-sm text-muted-foreground">(64) 3431-3777</div>
                  </div>
                </div>

                <div className="flex items-center space-x-4 p-4 bg-primary/5 border border-primary/20 rounded-xl">
                  <Mail className="h-6 w-6 text-primary" />
                  <div>
                    <div className="font-semibold">{t('contact.direct.email')}</div>
                    <div className="text-sm text-muted-foreground">contato@emersol.com.br</div>
                  </div>
                </div>

                <div className="flex items-center space-x-4 p-4 bg-primary/5 border border-primary/20 rounded-xl">
                  <Clock className="h-6 w-6 text-primary" />
                  <div>
                    <div className="font-semibold">{t('contact.direct.hours')}</div>
                    <div className="text-sm text-muted-foreground">{t('contact.direct.hours.text')}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Locations */}
            <div className="bg-card border border-border rounded-2xl p-8 shadow-sm">
              <h3 className="font-orbitron font-bold text-2xl mb-6 text-primary">
                {t('contact.units.title')}
              </h3>

              <div className="space-y-4">
                <div className="flex items-start space-x-4 p-4 bg-muted/30 rounded-xl">
                  <MapPin className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-semibold">Itumbiara/GO</div>
                    <div className="text-sm text-muted-foreground">(64) 3431-3777 ou (64) 9966-3777</div>
                    <div className="text-sm text-muted-foreground">Rua Leopoldo de Bulhões, 1401A, B. Santos Dumont</div>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-4 bg-muted/30 rounded-xl">
                  <MapPin className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-semibold">Caldas Novas/GO</div>
                    <div className="text-sm text-muted-foreground">(64) 3012-4017</div>
                    <div className="text-sm text-muted-foreground">Avenida A, Quadra 15, Lote 05</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="bg-card border border-border rounded-2xl p-8 shadow-sm">
              <h3 className="font-orbitron font-bold text-2xl mb-6 text-primary">
                {t('contact.social.title')}
              </h3>

              <a
                href="https://instagram.com/emersol_engenharia"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 p-4 bg-pink-600/10 border border-pink-600/30 rounded-xl hover:bg-pink-600/20 transition-all group"
              >
                <Instagram className="h-6 w-6 text-pink-500" />
                <span className="font-medium text-foreground">@emersol_engenharia</span>
              </a>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default NewContactSection;
