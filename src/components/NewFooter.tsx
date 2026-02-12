import { Instagram, Youtube, Podcast } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import EmersolLogo from './EmersolLogo';

const NewFooter = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-background border-t border-border/50">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-5">
              <EmersolLogo size="medium" className="h-10 w-auto" />
            </div>
            <p className="text-sm text-muted-foreground max-w-sm font-light leading-relaxed">
              {t('footer.slogan')}
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-sm text-foreground mb-4 uppercase tracking-wider">{t('footer.quick.links')}</h4>
            <nav className="flex flex-col space-y-3">
              {[
                { id: 'hero', label: t('nav.home') },
                { id: 'about', label: t('nav.about') },
                { id: 'contact', label: t('nav.contact') },
              ].map((link) => (
                <button key={link.id} onClick={() => scrollToSection(link.id)} className="text-sm text-muted-foreground hover:text-accent transition-colors text-left font-light">
                  {link.label}
                </button>
              ))}
            </nav>
          </div>

          <div>
            <h4 className="font-semibold text-sm text-foreground mb-4 uppercase tracking-wider">{t('footer.services')}</h4>
            <nav className="flex flex-col space-y-3">
              {[
                { id: 'engineering', label: t('engineering.title.energy') },
                { id: 'technical', label: t('technical.title.specialized') },
                { id: 'mobility', label: t('mobility.title.electric') },
                { id: 'technology', label: t('technology.title.systems') },
                { id: 'cooperatives', label: t('cooperatives.title.credits') },
              ].map((link) => (
                <button key={link.id} onClick={() => scrollToSection(link.id)} className="text-sm text-muted-foreground hover:text-accent transition-colors text-left font-light">
                  {link.label}
                </button>
              ))}
            </nav>
          </div>
        </div>

        <div className="pt-8 border-t border-border/30">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-xs text-muted-foreground text-center md:text-left font-light">
              © {currentYear} Emersol. {t('footer.rights')} | {t('footer.crea')}
            </div>
            <div className="flex items-center gap-4">
              <a href="https://instagram.com/emersol_engenharia" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-accent transition-colors" aria-label="Instagram">
                <Instagram className="h-5 w-5" strokeWidth={1.5} />
              </a>
              <a href="https://www.youtube.com/@emersol4591" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-accent transition-colors" aria-label="YouTube">
                <Youtube className="h-5 w-5" strokeWidth={1.5} />
              </a>
              <a href="https://open.spotify.com/show/08YZzUlNLOs3SdyqewyH6j?si=59682be0f8d8431e" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-accent transition-colors" aria-label="Podcast">
                <Podcast className="h-5 w-5" strokeWidth={1.5} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default NewFooter;
