import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import pt from '../locales/pt';
import en from '../locales/en';
import es from '../locales/es';

export type Language = 'pt' | 'en' | 'es';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Detecta o idioma do navegador
const detectBrowserLanguage = (): Language => {
  const browserLang = navigator.language.toLowerCase();

  if (browserLang.startsWith('pt')) return 'pt';
  if (browserLang.startsWith('es')) return 'es';
  return 'en'; // padrão inglês para outros idiomas
};

// Hook para usar o contexto de idioma
export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

interface LanguageProviderProps {
  children: ReactNode;
}

const translationsMap: Record<Language, Record<string, string>> = {
  pt,
  en,
  es
};

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    // Tenta pegar do localStorage primeiro
    const savedLang = localStorage.getItem('emersol-language') as Language | null;

    // Se não tiver salvo, detecta do navegador
    if (!savedLang) {
      const detected = detectBrowserLanguage();
      // Se não for pt, en ou es, usa pt como padrão
      return detected;
    }

    return savedLang;
  });

  const [translations, setTranslations] = useState<Record<string, string>>(translationsMap[language]);

  // Atualiza as traduções quando o idioma muda
  useEffect(() => {
    setTranslations(translationsMap[language]);
  }, [language]);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('emersol-language', lang);
  };

  const t = (key: string): string => {
    return translations[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};
