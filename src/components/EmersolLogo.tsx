import { useTheme } from 'next-themes';
import { useState, useEffect } from 'react';

interface EmersolLogoProps {
  className?: string;
  size?: 'small' | 'medium' | 'large' | 'full';
}

const EmersolLogo = ({ className = '', size = 'medium' }: EmersolLogoProps) => {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const sizeClasses = {
    small: 'h-8 md:h-10',
    medium: 'h-10 md:h-12',
    large: 'h-16 md:h-20',
    full: 'h-auto w-full',
  };

  // Enquanto não está montado, mostra uma versão padrão
  if (!mounted) {
    return (
      <img
        src="/lovable-uploads/346171cb-7f65-42c1-93e8-9ccc997e289a.png"
        alt="Emersol Logo"
        className={`${sizeClasses[size]} ${className} object-contain`}
      />
    );
  }

  // Determina qual logo usar baseado no tema
  const logoSrc = theme === 'dark'
    ? '/logos/emersol-logo-light.png' // Logo clara para fundo escuro
    : '/logos/emersol-logo-dark.png';  // Logo escura para fundo claro

  // Fallback para a logo antiga se as novas não existirem
  return (
    <img
      src={logoSrc}
      alt="Emersol - Engenharia e Energia Solar"
      className={`${sizeClasses[size]} ${className} object-contain`}
      onError={(e) => {
        // Se a nova logo não existir, usa a antiga como fallback
        e.currentTarget.src = '/lovable-uploads/346171cb-7f65-42c1-93e8-9ccc997e289a.png';
      }}
    />
  );
};

export default EmersolLogo;
