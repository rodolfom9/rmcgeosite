
import { ArrowRight, Map, Layers, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section 
      id="home" 
      className="min-h-screen relative flex items-center pt-16 overflow-hidden"
    >
      {/* QGIS Grid Background - Representa a grade de coordenadas do QGIS */}
      <div 
        className="absolute inset-0 qgis-grid opacity-30" 
      />
      
      {/* Sistema de Coordenadas - Efeito visual inspirado nas projeções do QGIS */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{ 
          backgroundImage: "radial-gradient(circle at 50% 50%, rgba(88, 150, 50, 0.3) 0%, transparent 70%)",
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      />
      
      {/* Efeito de Camada GIS - Simula camadas sobrepostas no QGIS */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?auto=format&fit=crop')", 
          backgroundSize: 'cover', 
          backgroundPosition: 'center',
          mixBlendMode: 'overlay'
        }}
      />
      
      {/* Gradientes com cores do QGIS */}
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-qgis-green/20 rounded-full filter blur-3xl animate-pulse-light" />
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-qgis-blue/20 rounded-full filter blur-3xl animate-pulse-light" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto md:mx-0">
          <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            QGIS3 • Geoprocessamento • GIS
          </span>
          <h1 className="text-4xl md:text-6xl font-display font-bold mb-6 text-glow">
            Soluções de <span className="bg-gradient-qgis bg-clip-text text-transparent">Mapeamento</span> & SIG
          </h1>
          <p className="text-lg text-foreground/80 mb-8 leading-relaxed">
            Explorando dados geoespaciais com QGIS3 e Python para análises avançadas
          </p>
          <div className="flex flex-wrap gap-4">
            <Button 
              onClick={scrollToProjects}
              className="group bg-primary hover:bg-primary/90 text-white"
              size="lg"
            >
              Ver Projetos
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button 
              variant="outline" 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              size="lg"
              className="backdrop-blur-sm border-primary/20 hover:bg-primary/10"
            >
              Entrar em contato
            </Button>
          </div>
        </div>
      </div>
      
      {/* Elementos de Mapa do QGIS */}
      <div className="hidden md:block absolute bottom-10 right-10 w-40 h-40 border-2 border-qgis-green/30 rounded-full animate-float qgis-layer-shadow">
        <div className="absolute inset-0 opacity-60" style={{ 
          backgroundImage: "radial-gradient(circle, transparent 60%, rgba(88, 150, 50, 0.2) 60%, rgba(88, 150, 50, 0.2) 65%, transparent 65%)" 
        }}></div>
        <div className="absolute inset-0 opacity-60" style={{ 
          backgroundImage: "linear-gradient(0deg, transparent 49%, rgba(88, 150, 50, 0.2) 49%, rgba(88, 150, 50, 0.2) 51%, transparent 51%), linear-gradient(90deg, transparent 49%, rgba(88, 150, 50, 0.2) 49%, rgba(88, 150, 50, 0.2) 51%, transparent 51%)"
        }}></div>
        <Globe className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-qgis-green/50 h-8 w-8 animate-rotate-globe" />
      </div>

      {/* Camadas GIS - Representa o conceito de camadas no QGIS */}
      <div className="hidden md:block absolute top-40 right-20 w-20 h-20 border-2 border-qgis-blue/30 rounded-full animate-float" style={{ animationDelay: '1s' }}>
        <div className="absolute inset-0 opacity-40" style={{
          backgroundImage: "linear-gradient(45deg, transparent 40%, rgba(76, 184, 218, 0.2) 40%, rgba(76, 184, 218, 0.2) 60%, transparent 60%)"
        }}></div>
        <Layers className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-qgis-blue/50 h-8 w-8" />
      </div>

      {/* Elemento de Coordenadas - Simulando pontos de coordenadas no QGIS */}
      <div className="hidden md:block absolute top-60 left-20 w-16 h-16 border-2 border-qgis-gray/30 rounded-full animate-float" style={{ animationDelay: '2s' }}>
        <Map className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-qgis-gray/50 h-6 w-6" />
      </div>
    </section>
  );
};

export default HeroSection;
