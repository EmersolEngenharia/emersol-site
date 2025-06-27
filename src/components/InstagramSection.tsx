
import { useState, useEffect } from 'react';
import { Instagram } from 'lucide-react';

interface InstagramPost {
  id: string;
  media_type: string;
  media_url: string;
  permalink: string;
  caption?: string;
  timestamp: string;
}

const InstagramSection = () => {
  const [posts, setPosts] = useState<InstagramPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Simulando dados do Instagram para demonstração
  // Em produção, você precisará configurar a API do Instagram
  const mockPosts: InstagramPost[] = [
    {
      id: '1',
      media_type: 'IMAGE',
      media_url: '/placeholder.svg',
      permalink: 'https://www.instagram.com/p/example1/',
      caption: 'Projeto de energia solar residencial finalizado! ☀️ #EnergiaLimpa #EnergiaSolar',
      timestamp: '2024-01-15T10:00:00Z'
    },
    {
      id: '2',
      media_type: 'IMAGE',
      media_url: '/placeholder.svg',
      permalink: 'https://www.instagram.com/p/example2/',
      caption: 'Instalação de sistema fotovoltaico em empresa local 🏢⚡',
      timestamp: '2024-01-12T14:30:00Z'
    },
    {
      id: '3',
      media_type: 'IMAGE',
      media_url: '/placeholder.svg',
      permalink: 'https://www.instagram.com/p/example3/',
      caption: 'Economia na conta de luz garantida! 💰 #Sustentabilidade',
      timestamp: '2024-01-10T09:15:00Z'
    },
    {
      id: '4',
      media_type: 'IMAGE',
      media_url: '/placeholder.svg',
      permalink: 'https://www.instagram.com/p/example4/',
      caption: 'Equipe Emersol em ação! 👷‍♂️⚡ #TrabalhoEmEquipe',
      timestamp: '2024-01-08T16:45:00Z'
    }
  ];

  useEffect(() => {
    // Simulando carregamento
    const timer = setTimeout(() => {
      setPosts(mockPosts);
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    });
  };

  const truncateCaption = (caption: string, maxLength: number) => {
    if (caption.length <= maxLength) return caption;
    return caption.substring(0, maxLength) + '...';
  };

  if (loading) {
    return (
      <section className="py-20 bg-muted/30">
        <div className="container-max section-padding">
          <div className="text-center mb-12">
            <h2 className="font-orbitron font-bold text-3xl md:text-4xl mb-4">
              <span className="text-primary">Instagram</span> @emersol_engenharia
            </h2>
            <div className="w-24 h-1 yellow-gradient rounded-full mx-auto mb-6"></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[...Array(4)].map((_, index) => (
              <div key={index} className="bg-card border border-border rounded-lg p-4 animate-pulse">
                <div className="bg-muted h-48 rounded-lg mb-4"></div>
                <div className="bg-muted h-4 rounded mb-2"></div>
                <div className="bg-muted h-3 rounded w-3/4"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="py-20 bg-muted/30">
        <div className="container-max section-padding">
          <div className="text-center">
            <h2 className="font-orbitron font-bold text-3xl md:text-4xl mb-4">
              <span className="text-primary">Instagram</span> @emersol_engenharia
            </h2>
            <div className="w-24 h-1 yellow-gradient rounded-full mx-auto mb-6"></div>
            <p className="text-muted-foreground">Erro ao carregar as publicações do Instagram.</p>
            <a 
              href="https://www.instagram.com/emersol_engenharia" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 mt-4 text-primary hover:text-primary/80 transition-colors"
            >
              <Instagram className="h-5 w-5" />
              <span>Visite nosso Instagram</span>
            </a>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-muted/30">
      <div className="container-max section-padding">
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="font-orbitron font-bold text-3xl md:text-4xl mb-4">
            <span className="text-primary">Instagram</span> @emersol_engenharia
          </h2>
          <div className="w-24 h-1 yellow-gradient rounded-full mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Acompanhe nossos projetos mais recentes e veja como estamos transformando a energia solar em realidade.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {posts.map((post, index) => (
            <div 
              key={post.id}
              className="bg-card border border-border rounded-lg overflow-hidden hover:border-primary/50 transition-all duration-300 hover:scale-105 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="aspect-square relative overflow-hidden">
                <img 
                  src={post.media_url} 
                  alt="Instagram post"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-4">
                <p className="text-sm text-muted-foreground mb-3 leading-relaxed">
                  {post.caption ? truncateCaption(post.caption, 80) : 'Ver no Instagram'}
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-xs text-muted-foreground">
                    {formatDate(post.timestamp)}
                  </span>
                  <a 
                    href={post.permalink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:text-primary/80 transition-colors"
                  >
                    <Instagram className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a 
            href="https://www.instagram.com/emersol_engenharia" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
          >
            <Instagram className="h-5 w-5" />
            <span>Seguir @emersol_engenharia</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default InstagramSection;
