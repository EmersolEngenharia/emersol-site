import { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon, Globe } from 'lucide-react';
import { useTheme } from 'next-themes';
import { useLanguage, Language } from '@/contexts/LanguageContext';
import EmersolLogo from './EmersolLogo';

const NewHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const { language, setLanguage, t } = useLanguage();
  const [mounted, setMounted] = useState(false);

  useEffect(() => { setMounted(true); }, []);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const languages: { code: Language; name: string; flag: string }[] = [
    { code: 'pt', name: 'Português', flag: '🇧🇷' },
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'es', name: 'Español', flag: '🇪🇸' },
  ];

  const currentLang = languages.find(lang => lang.code === language);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled
        ? 'glass border-b border-border/30 shadow-sm'
        : 'bg-transparent'
    }`}>
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">

          <button onClick={() => scrollToSection('hero')} className="flex items-center space-x-3 group">
            <EmersolLogo size="medium" className="transition-transform duration-300 group-hover:scale-105" />
          </button>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center space-x-1">
            {[
              { id: 'hero', label: t('nav.home') },
              { id: 'solutions', label: t('nav.solutions') },
              { id: 'about', label: t('nav.about') },
              { id: 'contact', label: t('nav.contact') },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="px-4 py-2 text-sm font-medium text-foreground/70 hover:text-foreground rounded-full transition-all duration-200"
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Right Side */}
          <div className="flex items-center space-x-2">
            {mounted && (
              <div className="relative">
                <button
                  onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
                  className="hidden sm:flex items-center space-x-1.5 px-3 py-2 text-sm text-foreground/70 hover:text-foreground rounded-full transition-all"
                >
                  <Globe className="h-4 w-4" />
                  <span className="text-base">{currentLang?.flag}</span>
                </button>

                {isLangMenuOpen && (
                  <div className="absolute top-full right-0 mt-2 w-40 glass border border-border rounded-2xl shadow-xl overflow-hidden z-50">
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => { setLanguage(lang.code); setIsLangMenuOpen(false); }}
                        className={`w-full flex items-center space-x-2 px-4 py-2.5 text-sm hover:bg-foreground/5 transition-colors ${
                          language === lang.code ? 'text-accent font-medium' : 'text-foreground'
                        }`}
                      >
                        <span className="text-lg">{lang.flag}</span>
                        <span>{lang.name}</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            )}

            {mounted && (
              <button
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className="hidden sm:flex items-center justify-center w-9 h-9 rounded-full hover:bg-foreground/5 transition-colors"
                aria-label="Toggle theme"
              >
                {theme === 'dark' ? <Sun className="h-4 w-4 text-foreground/70" /> : <Moon className="h-4 w-4 text-foreground/70" />}
              </button>
            )}

            <button
              onClick={() => scrollToSection('contact')}
              className="hidden md:inline-flex items-center px-5 py-2 bg-accent text-accent-foreground font-semibold text-sm rounded-full hover:brightness-110 transition-all duration-200 shadow-sm"
            >
              {t('nav.contact')}
            </button>

            <button
              className="lg:hidden flex items-center justify-center w-9 h-9 rounded-full hover:bg-foreground/5 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-border/30 py-4 animate-fade-in-down">
            <nav className="flex flex-col space-y-1">
              {[
                { id: 'hero', label: t('nav.home') },
                { id: 'solutions', label: t('nav.solutions') },
                { id: 'about', label: t('nav.about') },
                { id: 'contact', label: t('nav.contact') },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-left px-4 py-3 text-sm font-medium text-foreground/70 hover:text-foreground hover:bg-foreground/5 rounded-xl transition-all"
                >
                  {item.label}
                </button>
              ))}

              <div className="px-4 py-2">
                <p className="text-xs font-medium text-muted-foreground mb-2">Idioma / Language</p>
                <div className="flex flex-wrap gap-2">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => { setLanguage(lang.code); setIsMenuOpen(false); }}
                      className={`flex items-center space-x-2 px-3 py-2 text-sm rounded-full transition-all ${
                        language === lang.code
                          ? 'bg-accent text-accent-foreground font-medium'
                          : 'bg-foreground/5 text-foreground hover:bg-foreground/10'
                      }`}
                    >
                      <span>{lang.flag}</span>
                      <span>{lang.name}</span>
                    </button>
                  ))}
                </div>
              </div>

              {mounted && (
                <button
                  onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                  className="flex items-center space-x-3 px-4 py-3 text-sm font-medium text-foreground/70 hover:text-foreground hover:bg-foreground/5 rounded-xl transition-all"
                >
                  {theme === 'dark' ? <><Sun className="h-5 w-5" /><span>Modo Claro</span></> : <><Moon className="h-5 w-5" /><span>Modo Escuro</span></>}
                </button>
              )}
            </nav>
          </div>
        )}
      </div>

      {isLangMenuOpen && <div className="fixed inset-0 z-40" onClick={() => setIsLangMenuOpen(false)} />}
    </header>
  );
};

export default NewHeader;
