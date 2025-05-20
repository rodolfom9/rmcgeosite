
import { ArrowRight, Map } from "lucide-react";
import { Button } from "@/components/ui/button";
import Globe from "./Globe";

const HeroSection = () => {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section 
      id="home" 
      className="min-h-screen relative flex items-center pt-16 overflow-hidden"
    >
      {/* GIS Grid Background */}
      <div 
        className="absolute inset-0 bg-grid-pattern opacity-30" 
        style={{ 
          backgroundSize: '50px 50px',
          backgroundImage: `
            linear-gradient(rgba(155, 135, 245, 0.15) 1px, transparent 1px), 
            linear-gradient(to right, rgba(155, 135, 245, 0.15) 1px, transparent 1px),
            linear-gradient(rgba(51, 195, 240, 0.1) 5px, transparent 5px), 
            linear-gradient(to right, rgba(51, 195, 240, 0.1) 5px, transparent 5px)
          `
        }}
      />
      
      {/* Coordinate System Overlay */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{ 
          backgroundImage: "radial-gradient(circle at 50% 50%, rgba(155, 135, 245, 0.3) 0%, transparent 70%)",
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      />
      
      {/* Cartographic Map Background */}
      <div 
        className="absolute inset-0 opacity-15"
        style={{ 
          backgroundImage: `
            linear-gradient(rgba(51, 195, 240, 0.05) 0%, rgba(155, 135, 245, 0.05) 100%),
            url("data:image/svg+xml,%3Csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='contourLines' patternUnits='userSpaceOnUse' width='100' height='100' patternTransform='rotate(30)'%3E%3Cpath d='M 0,50 C 20,40 40,40 50,50 C 60,60 80,60 100,50 M 0,100 C 20,90 40,90 50,100' stroke='rgba(155, 135, 245, 0.2)' stroke-width='1' fill='none'/%3E%3C/pattern%3E%3Cpattern id='contourLines2' patternUnits='userSpaceOnUse' width='120' height='120' patternTransform='rotate(60)'%3E%3Cpath d='M 0,50 C 30,30 90,30 120,50 M 0,100 C 30,80 90,80 120,100' stroke='rgba(51, 195, 240, 0.15)' stroke-width='1.5' fill='none'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23contourLines)'/%3E%3Crect width='100%25' height='100%25' fill='url(%23contourLines2)'/%3E%3C/svg%3E")
          `,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          mixBlendMode: 'soft-light'
        }}
      />
      
      {/* Gradient Blobs */}
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-vaporwave-purple/20 rounded-full filter blur-3xl animate-pulse-light" />
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-vaporwave-cyan/20 rounded-full filter blur-3xl animate-pulse-light" />
      
      {/* 3D Globe */}
      <div className="absolute right-0 md:w-1/3 lg:w-2/5 h-full pointer-events-none">
        <div className="w-full h-full pointer-events-auto">
          <Globe className="opacity-85" />
        </div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto md:mx-0">
          <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            Cartografia & Agrimensura
          </span>
          <h1 className="text-4xl md:text-6xl font-display font-bold mb-6 text-glow">
            Projetos de <span className="bg-gradient-to-r from-vaporwave-purple to-vaporwave-cyan bg-clip-text text-transparent">Mapeamento</span> & Topografia
          </h1>
          <p className="text-lg text-foreground/80 mb-8 leading-relaxed">
            Explorando novos desafios com QGIS e python
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
      
      {/* GIS Map Elements */}
      <div className="hidden md:block absolute bottom-10 left-10 w-40 h-40 border-2 border-vaporwave-purple/30 rounded-full animate-float">
        <div className="absolute inset-0 opacity-60" style={{ 
          backgroundImage: "radial-gradient(circle, transparent 60%, rgba(155, 135, 245, 0.2) 60%, rgba(155, 135, 245, 0.2) 65%, transparent 65%)" 
        }}></div>
        <div className="absolute inset-0 opacity-60" style={{ 
          backgroundImage: "linear-gradient(0deg, transparent 49%, rgba(155, 135, 245, 0.2) 49%, rgba(155, 135, 245, 0.2) 51%, transparent 51%), linear-gradient(90deg, transparent 49%, rgba(155, 135, 245, 0.2) 49%, rgba(155, 135, 245, 0.2) 51%, transparent 51%)"
        }}></div>
        <Map className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-vaporwave-purple/50 h-8 w-8" />
      </div>
    </section>
  );
};

export default HeroSection;
