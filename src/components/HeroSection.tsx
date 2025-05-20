
import { ArrowRight, Map } from "lucide-react";
import { Button } from "@/components/ui/button";
import Globe from "./Globe";

/**
 * Hero section component for the landing page
 * Contains the main headline, call-to-action buttons, and 3D globe
 */
const HeroSection = () => {
  // Function to scroll to the projects section smoothly
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section 
      id="home" 
      className="min-h-screen relative flex items-center pt-16 overflow-hidden"
    >
      {/* GIS Grid Background - adds a topographic map feel */}
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
      
      {/* Coordinate System Overlay - adds depth to background */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{ 
          backgroundImage: "radial-gradient(circle at 50% 50%, rgba(155, 135, 245, 0.3) 0%, transparent 70%)",
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      />
      
      {/* Simplified background pattern */}
      <div 
        className="absolute inset-0 opacity-15"
        style={{ 
          backgroundImage: `linear-gradient(rgba(51, 195, 240, 0.05) 0%, rgba(155, 135, 245, 0.05) 100%)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          mixBlendMode: 'soft-light'
        }}
      />
      
      {/* Gradient Blobs - visual elements for depth */}
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-vaporwave-purple/20 rounded-full filter blur-3xl" />
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-vaporwave-cyan/20 rounded-full filter blur-3xl" />
      
      {/* 3D Globe - centered better in the layout */}
      <div className="absolute w-full md:w-1/2 h-full pointer-events-none flex items-center justify-center">
        <div className="w-full h-full pointer-events-auto">
          <Globe className="opacity-85" />
        </div>
      </div>
      
      {/* Content Container */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto md:mr-auto md:ml-4">
          {/* Category Label */}
          <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            Cartografia & Agrimensura
          </span>
          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl font-display font-bold mb-6 text-glow">
            Projetos de <span className="bg-gradient-to-r from-vaporwave-purple to-vaporwave-cyan bg-clip-text text-transparent">Mapeamento</span> & Topografia
          </h1>
          {/* Description */}
          <p className="text-lg text-foreground/80 mb-8 leading-relaxed">
            Explorando novos desafios com QGIS e python
          </p>
          {/* Call-to-Action Buttons */}
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
      
      {/* Removed GIS Map Elements for simplification */}
    </section>
  );
};

export default HeroSection;
