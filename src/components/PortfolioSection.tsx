
import { useState } from 'react';
import { Filter } from 'lucide-react';

const PortfolioSection = () => {
  const [activeFilter, setActiveFilter] = useState('Todos');

  const categories = ['Todos', 'Residencial', 'Comercial', 'Rural', 'Usinas'];

  const projects = [
    {
      id: 1,
      title: "Residência Sustentável",
      category: "Residencial",
      description: "Sistema On-Grid 15kWp",
      image: "https://images.unsplash.com/photo-1558618047-e8d6c2d7e2de?w=400&h=300&fit=crop",
      tags: ["On-Grid", "Residencial"]
    },
    {
      id: 2,
      title: "Indústria Alimentícia",
      category: "Comercial",
      description: "Sistema Híbrido 150kWp",
      image: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=400&h=300&fit=crop",
      tags: ["Híbrido", "Comercial"]
    },
    {
      id: 3,
      title: "Fazenda Inteligente",
      category: "Rural",
      description: "Sistema Off-Grid 75kWp",
      image: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=400&h=300&fit=crop",
      tags: ["Off-Grid", "Rural"]
    },
    {
      id: 4,
      title: "Usina Solar Comercial",
      category: "Usinas",
      description: "Sistema On-Grid 2MWp",
      image: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=400&h=300&fit=crop",
      tags: ["Usina", "On-Grid"]
    },
    {
      id: 5,
      title: "Condomínio Residencial",
      category: "Residencial",
      description: "Sistema On-Grid 120kWp",
      image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=400&h=300&fit=crop",
      tags: ["On-Grid", "Residencial"]
    },
    {
      id: 6,
      title: "Centro Logístico",
      category: "Comercial",
      description: "Sistema On-Grid 300kWp + VE",
      image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=400&h=300&fit=crop",
      tags: ["On-Grid", "VE", "Comercial"]
    }
  ];

  const filteredProjects = activeFilter === 'Todos' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="portfolio" className="py-20 relative overflow-hidden bg-muted/30">
      <div className="container-max section-padding">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="font-orbitron font-bold text-3xl md:text-4xl lg:text-5xl mb-6">
            Projetos em <span className="text-primary">Destaque</span>
          </h2>
          <div className="w-24 h-1 yellow-gradient rounded-full mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Conheça alguns dos nossos projetos que transformaram a realidade energética de nossos clientes
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeFilter === category
                  ? 'bg-primary text-primary-foreground shadow-lg scale-105'
                  : 'bg-card text-foreground hover:bg-primary/20 hover:text-primary border border-border'
              }`}
            >
              <Filter className="h-4 w-4 inline mr-2" />
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div 
              key={project.id}
              className="group bg-card rounded-2xl overflow-hidden border border-border hover:border-primary/50 transition-all duration-300 hover:scale-105 hover:glow-effect animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white font-semibold">Ver Detalhes</span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className="px-3 py-1 bg-primary/20 text-primary text-xs rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
          <button 
            onClick={() => {
              const element = document.getElementById('contact');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
            className="bg-primary text-primary-foreground px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transition-all duration-300 animate-pulse-glow"
          >
            Quero um Projeto Como Esses
          </button>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
