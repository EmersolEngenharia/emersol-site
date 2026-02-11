import { useState } from 'react';
import { Phone, MapPin, Mail, MessageCircle, Send, Clock, Instagram } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';

const NewContactSection = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({ name: '', phone: '', city: '', service: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const whatsappMessage = `Olá! Gostaria de um orçamento para ${formData.service}.\n\nMeus dados:\nNome: ${formData.name}\nTelefone: ${formData.phone}\nCidade: ${formData.city}\nMensagem: ${formData.message}`;
    window.open(`https://wa.me/556492418765?text=${encodeURIComponent(whatsappMessage)}`, '_blank');
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const inputClass = "w-full px-4 py-3.5 bg-secondary/60 border-0 rounded-xl focus:ring-2 focus:ring-accent/30 focus:outline-none transition-all text-foreground placeholder:text-muted-foreground/50";

  return (
    <section id="contact" className="py-24 md:py-36 bg-secondary/50">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-accent font-semibold text-sm uppercase tracking-widest mb-4">{t('contact.title')}</motion.p>
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="font-inter font-bold text-3xl md:text-5xl tracking-tight mb-6">{t('contact.title.energy')}?</motion.h2>
          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="text-muted-foreground text-lg font-light leading-relaxed">{t('contact.subtitle')}</motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Form */}
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <div className="bg-card rounded-3xl p-8 md:p-10 shadow-xl shadow-foreground/[0.03]">
              <h3 className="font-semibold text-xl mb-8 text-foreground">{t('contact.form.title')}</h3>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-sm font-medium mb-2 text-foreground/80">{t('contact.form.name')}</label>
                  <input type="text" name="name" value={formData.name} onChange={handleInputChange} required className={inputClass} placeholder={t('contact.form.name.placeholder')} />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-foreground/80">{t('contact.form.phone')}</label>
                  <input type="tel" name="phone" value={formData.phone} onChange={handleInputChange} required className={inputClass} placeholder={t('contact.form.phone.placeholder')} />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-foreground/80">{t('contact.form.city')}</label>
                  <input type="text" name="city" value={formData.city} onChange={handleInputChange} required className={inputClass} placeholder={t('contact.form.city.placeholder')} />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-foreground/80">{t('contact.form.service')}</label>
                  <select name="service" value={formData.service} onChange={handleInputChange} required className={`${inputClass} appearance-none cursor-pointer`}>
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
                  <label className="block text-sm font-medium mb-2 text-foreground/80">{t('contact.form.message')}</label>
                  <textarea name="message" value={formData.message} onChange={handleInputChange} rows={4} className={`${inputClass} resize-none`} placeholder={t('contact.form.message.placeholder')} />
                </div>
                <button type="submit" className="w-full bg-accent text-accent-foreground px-8 py-4 rounded-full font-semibold text-base hover:brightness-110 transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-accent/20">
                  <MessageCircle className="h-5 w-5" />
                  <span>{t('contact.form.submit')}</span>
                  <Send className="h-4 w-4" />
                </button>
              </form>
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="space-y-5">
            <div className="bg-card rounded-3xl p-8 shadow-xl shadow-foreground/[0.03]">
              <h3 className="font-semibold text-xl mb-6 text-foreground">{t('contact.direct.title')}</h3>
              <div className="space-y-3">
                <a href="https://wa.me/556492418765" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 rounded-2xl bg-green-500/5 hover:bg-green-500/10 transition-all group">
                  <div className="w-10 h-10 rounded-xl bg-green-500/10 flex items-center justify-center"><MessageCircle className="h-5 w-5 text-green-600" /></div>
                  <div><div className="font-medium text-green-600 text-sm">{t('contact.direct.whatsapp')}</div><div className="text-sm text-muted-foreground">(64) 9241-8765</div></div>
                </a>
                <div className="flex items-center gap-4 p-4 rounded-2xl bg-secondary/60">
                  <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center"><Phone className="h-5 w-5 text-accent" /></div>
                  <div><div className="font-medium text-sm">{t('contact.direct.phone')}</div><div className="text-sm text-muted-foreground">(64) 3431-3777</div></div>
                </div>
                <div className="flex items-center gap-4 p-4 rounded-2xl bg-secondary/60">
                  <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center"><Mail className="h-5 w-5 text-accent" /></div>
                  <div><div className="font-medium text-sm">{t('contact.direct.email')}</div><div className="text-sm text-muted-foreground">contato@emersol.com.br</div></div>
                </div>
                <div className="flex items-center gap-4 p-4 rounded-2xl bg-secondary/60">
                  <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center"><Clock className="h-5 w-5 text-accent" /></div>
                  <div><div className="font-medium text-sm">{t('contact.direct.hours')}</div><div className="text-sm text-muted-foreground">{t('contact.direct.hours.text')}</div></div>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-3xl p-8 shadow-xl shadow-foreground/[0.03]">
              <h3 className="font-semibold text-xl mb-6 text-foreground">{t('contact.units.title')}</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-4 p-4 rounded-2xl bg-secondary/60">
                  <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0 mt-0.5"><MapPin className="h-5 w-5 text-accent" /></div>
                  <div><div className="font-medium text-sm">Itumbiara/GO</div><div className="text-sm text-muted-foreground">(64) 3431-3777 ou (64) 9966-3777</div><div className="text-sm text-muted-foreground">Rua Leopoldo de Bulhões, 1401A, B. Santos Dumont</div></div>
                </div>
                <div className="flex items-start gap-4 p-4 rounded-2xl bg-secondary/60">
                  <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0 mt-0.5"><MapPin className="h-5 w-5 text-accent" /></div>
                  <div><div className="font-medium text-sm">Caldas Novas/GO</div><div className="text-sm text-muted-foreground">(64) 3012-4017</div><div className="text-sm text-muted-foreground">Avenida A, Quadra 15, Lote 05</div></div>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-3xl p-8 shadow-xl shadow-foreground/[0.03]">
              <h3 className="font-semibold text-xl mb-4 text-foreground">{t('contact.social.title')}</h3>
              <a href="https://instagram.com/emersol_engenharia" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-4 rounded-2xl bg-pink-500/5 hover:bg-pink-500/10 transition-all">
                <div className="w-10 h-10 rounded-xl bg-pink-500/10 flex items-center justify-center"><Instagram className="h-5 w-5 text-pink-500" /></div>
                <span className="font-medium text-sm text-foreground">@emersol_engenharia</span>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default NewContactSection;
