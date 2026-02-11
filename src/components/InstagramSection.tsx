import { useState, useEffect } from 'react';
import { Instagram } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';

interface InstagramPost {
  id: string;
  media_type: string;
  media_url: string;
  permalink: string;
  caption?: string;
  timestamp: string;
}

const InstagramSection = () => {
  const { t } = useLanguage();
  const [posts, setPosts] = useState<InstagramPost[]>([]);
  const [loading, setLoading] = useState(true);

  const mockPosts: InstagramPost[] = [
    { id: '1', media_type: 'IMAGE', media_url: '/placeholder.svg', permalink: 'https://www.instagram.com/p/example1/', caption: 'Projeto de energia solar residencial finalizado! ☀️ #EnergiaLimpa', timestamp: '2024-01-15T10:00:00Z' },
    { id: '2', media_type: 'IMAGE', media_url: '/placeholder.svg', permalink: 'https://www.instagram.com/p/example2/', caption: 'Instalação de sistema fotovoltaico em empresa local 🏢⚡', timestamp: '2024-01-12T14:30:00Z' },
    { id: '3', media_type: 'IMAGE', media_url: '/placeholder.svg', permalink: 'https://www.instagram.com/p/example3/', caption: 'Economia na conta de luz garantida! 💰 #Sustentabilidade', timestamp: '2024-01-10T09:15:00Z' },
    { id: '4', media_type: 'IMAGE', media_url: '/placeholder.svg', permalink: 'https://www.instagram.com/p/example4/', caption: 'Equipe Emersol em ação! 👷‍♂️⚡ #TrabalhoEmEquipe', timestamp: '2024-01-08T16:45:00Z' },
  ];

  useEffect(() => {
    const timer = setTimeout(() => { setPosts(mockPosts); setLoading(false); }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const formatDate = (dateString: string) => new Date(dateString).toLocaleDateString('pt-BR', { day: '2-digit', month: '2-digit', year: 'numeric' });
  const truncateCaption = (caption: string, maxLength: number) => caption.length <= maxLength ? caption : caption.substring(0, maxLength) + '...';

  if (loading) {
    return (
      <section className="py-24 bg-background">
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          <div className="text-center mb-16">
            <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-4">{t('instagram.title')}</p>
            <h2 className="font-inter font-bold text-3xl md:text-5xl tracking-tight">{t('instagram.handle')}</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="bg-secondary/60 rounded-2xl p-4 animate-pulse"><div className="bg-muted h-48 rounded-xl mb-4" /><div className="bg-muted h-4 rounded mb-2" /><div className="bg-muted h-3 rounded w-3/4" /></div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-24 bg-background">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <div className="text-center mb-16">
          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-accent font-semibold text-sm uppercase tracking-widest mb-4">{t('instagram.title')}</motion.p>
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="font-inter font-bold text-3xl md:text-5xl tracking-tight mb-6">{t('instagram.handle')}</motion.h2>
          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="text-muted-foreground text-lg font-light max-w-2xl mx-auto">{t('instagram.subtitle')}</motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
          {posts.map((post, index) => (
            <motion.a
              key={post.id}
              href={post.permalink}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="group bg-card border border-border/60 rounded-2xl overflow-hidden hover:border-accent/30 transition-all duration-500 hover:shadow-lg hover:shadow-accent/5 hover:-translate-y-1"
            >
              <div className="aspect-square relative overflow-hidden">
                <img src={post.media_url} alt="Instagram post" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="p-5">
                <p className="text-sm text-muted-foreground mb-3 font-light leading-relaxed">{post.caption ? truncateCaption(post.caption, 80) : 'Ver no Instagram'}</p>
                <div className="flex justify-between items-center">
                  <span className="text-xs text-muted-foreground/70">{formatDate(post.timestamp)}</span>
                  <Instagram className="h-4 w-4 text-muted-foreground group-hover:text-accent transition-colors" strokeWidth={1.5} />
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center">
          <a href="https://www.instagram.com/emersol_engenharia" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-7 py-3.5 rounded-full font-semibold text-sm hover:brightness-110 transition-all shadow-sm">
            <Instagram className="h-4 w-4" strokeWidth={1.5} />
            <span>{t('instagram.follow')}</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default InstagramSection;
