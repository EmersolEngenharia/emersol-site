import { Instagram } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import EmersolLogo from './EmersolLogo';

const NewFooter = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-muted/30 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        <div className="grid md:grid-cols-4 gap-8 mb-8">

          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <EmersolLogo size="medium" className="h-12 w-auto" />
              {/* 
              <div>
                <h3 className="font-orbitron font-bold text-xl text-foreground">EMERSOL</h3>
                <p className="text-xs text-muted-foreground">ENGENHARIA • ENERGIA SOLAR</p>
              </div>
              */}
            </div>
            <p className="text-sm text-muted-foreground max-w-md">
              {t('footer.slogan')}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">{t('footer.quick.links')}</h4>
            <nav className="flex flex-col space-y-2">
              {[
                { id: 'hero', label: t('nav.home') },
                { id: 'calculator', label: t('calculator.title.economy') },
                { id: 'about', label: t('nav.about') },
                { id: 'contact', label: t('nav.contact') },
              ].map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors text-left"
                >
                  {link.label}
                </button>
              ))}
            </nav>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">{t('footer.services')}</h4>
            <nav className="flex flex-col space-y-2">
              {[
                { id: 'engineering', label: t('engineering.title.energy') },
                { id: 'technical', label: t('technical.title.specialized') },
                { id: 'mobility', label: t('mobility.title.electric') },
                { id: 'technology', label: t('technology.title.systems') },
                { id: 'cooperatives', label: t('cooperatives.title.credits') },
              ].map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors text-left"
                >
                  {link.label}
                </button>
              ))}
            </nav>
          </div>

        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">

            <div className="text-sm text-muted-foreground text-center md:text-left">
              © {currentYear} Emersol. {t('footer.rights')} | {t('footer.crea')}
            </div>

            {/* Social */}
            <div className="flex items-center space-x-4">
              <a
                href="https://instagram.com/emersol_engenharia"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>

          </div>
        </div>

      </div>
    </footer>
  );
};

export default NewFooter;
