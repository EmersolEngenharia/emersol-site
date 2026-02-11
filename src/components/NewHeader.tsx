import { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon, Globe } from 'lucide-react';
import { useTheme } from 'next-themes';
import { useLanguage, Language } from '@/contexts/LanguageContext';

const NewHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const { language, setLanguage, t } = useLanguage();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const languages: { code: Language; name: string; flag: string }[] = [
    { code: 'pt', name: 'Português', flag: '🇧🇷' },
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'es', name: 'Español', flag: '🇪🇸' },
  ];

  const currentLang = languages.find(lang => lang.code === language);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled
        ? 'bg-background/95 backdrop-blur-lg border-b border-border/40 shadow-sm'
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">

          {/* Logo */}
          <button
            onClick={() => scrollToSection('hero')}
            className="flex items-center space-x-3 group"
          >
            <img
              src="/lovable-uploads/346171cb-7f65-42c1-93e8-9ccc997e289a.png"
              alt="Emersol Logo"
              className="h-10 w-10 transition-transform duration-300 group-hover:scale-110"
            />
            <div>
              <h1 className="font-orbitron font-bold text-lg md:text-xl text-foreground group-hover:text-primary transition-colors">
                EMERSOL
              </h1>
              <p className="text-[10px] md:text-xs text-muted-foreground tracking-wide">
                ENGENHARIA SOLAR
              </p>
            </div>
          </button>

          {/* Desktop Menu */}
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
                className="px-4 py-2 text-sm font-medium text-foreground/80 hover:text-foreground hover:bg-muted/50 rounded-lg transition-all duration-200"
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-2">

            {/* Language Selector */}
            {mounted && (
              <div className="relative">
                <button
                  onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
                  className="hidden sm:flex items-center space-x-2 px-3 py-2 text-sm font-medium text-foreground/80 hover:text-foreground hover:bg-muted/50 rounded-lg transition-all duration-200"
                >
                  <Globe className="h-4 w-4" />
                  <span className="text-lg">{currentLang?.flag}</span>
                  <span className="hidden md:inline">{currentLang?.code.toUpperCase()}</span>
                </button>

                {/* Language Dropdown */}
                {isLangMenuOpen && (
                  <div className="absolute top-full right-0 mt-2 w-40 bg-background border border-border rounded-lg shadow-lg overflow-hidden">
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => {
                          setLanguage(lang.code);
                          setIsLangMenuOpen(false);
                        }}
                        className={`w-full flex items-center space-x-2 px-4 py-2.5 text-sm hover:bg-muted transition-colors ${
                          language === lang.code ? 'bg-muted text-primary font-medium' : 'text-foreground'
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

            {/* Theme Toggle */}
            {mounted && (
              <button
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className="hidden sm:flex items-center justify-center w-10 h-10 rounded-lg hover:bg-muted/50 transition-colors"
                aria-label="Toggle theme"
              >
                {theme === 'dark' ? (
                  <Sun className="h-5 w-5 text-foreground/80" />
                ) : (
                  <Moon className="h-5 w-5 text-foreground/80" />
                )}
              </button>
            )}

            {/* CTA Button - Desktop */}
            <button
              onClick={() => scrollToSection('contact')}
              className="hidden md:inline-flex items-center px-5 py-2.5 bg-primary text-primary-foreground font-semibold text-sm rounded-lg hover:bg-primary/90 transition-all duration-200 shadow-sm hover:shadow-md"
            >
              {t('nav.contact')}
            </button>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden flex items-center justify-center w-10 h-10 rounded-lg hover:bg-muted/50 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="h-5 w-5 text-foreground" />
              ) : (
                <Menu className="h-5 w-5 text-foreground" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-border/40 py-4 animate-fade-in-down">
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
                  className="text-left px-4 py-3 text-sm font-medium text-foreground/80 hover:text-foreground hover:bg-muted/50 rounded-lg transition-all duration-200"
                >
                  {item.label}
                </button>
              ))}

              {/* Mobile Language Selector */}
              <div className="px-4 py-2">
                <p className="text-xs font-medium text-muted-foreground mb-2">Idioma / Language</p>
                <div className="flex flex-wrap gap-2">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        setLanguage(lang.code);
                        setIsMenuOpen(false);
                      }}
                      className={`flex items-center space-x-2 px-3 py-2 text-sm rounded-lg transition-all ${
                        language === lang.code
                          ? 'bg-primary text-primary-foreground font-medium'
                          : 'bg-muted text-foreground hover:bg-muted/80'
                      }`}
                    >
                      <span>{lang.flag}</span>
                      <span>{lang.name}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Mobile Theme Toggle */}
              {mounted && (
                <button
                  onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                  className="flex items-center space-x-3 px-4 py-3 text-sm font-medium text-foreground/80 hover:text-foreground hover:bg-muted/50 rounded-lg transition-all duration-200"
                >
                  {theme === 'dark' ? (
                    <>
                      <Sun className="h-5 w-5" />
                      <span>Modo Claro</span>
                    </>
                  ) : (
                    <>
                      <Moon className="h-5 w-5" />
                      <span>Modo Escuro</span>
                    </>
                  )}
                </button>
              )}
            </nav>
          </div>
        )}
      </div>

      {/* Click outside to close language menu */}
      {isLangMenuOpen && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setIsLangMenuOpen(false)}
        />
      )}
    </header>
  );
};

export default NewHeader;
