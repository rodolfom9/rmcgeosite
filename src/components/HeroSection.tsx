
import { ArrowRight, Map } from "lucide-react";
import { Button } from "@/components/ui/button";
import MapBackground from "./MapBackground";

/**
 * HeroSection Component
 * 
 * The main landing section displayed at the top of the homepage
 * Contains the main heading, call-to-action buttons, and decorative elements
 */
const HeroSection = () => {
  /**
   * Handles smooth scrolling to the projects section
   */
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section 
      id="home" 
      className="min-h-screen relative flex items-center pt-16 overflow-hidden"
    >
      {/* Map Background Component */}
      <div className="absolute inset-0 z-0">
        <MapBackground />
      </div>
      
      {/* GIS Grid Background - Creates a coordinate grid effect */}
      <div 
        className="absolute inset-0 bg-grid-pattern opacity-30 z-10" 
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
      
      {/* Coordinate System Overlay - Adds a radial gradient effect */}
      <div 
        className="absolute inset-0 opacity-10 z-10"
        style={{ 
          backgroundImage: "radial-gradient(circle at 50% 50%, rgba(155, 135, 245, 0.3) 0%, transparent 70%)",
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      />
      
      {/* Layer-like GIS Effect - Adds texture to the background */}
      <div 
        className="absolute inset-0 opacity-5 z-10"
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1544985361-b420d7a77043?auto=format&fit=crop')", 
          backgroundSize: 'cover', 
          backgroundPosition: 'center',
          mixBlendMode: 'overlay'
        }}
      />
      
      {/* Gradient Blobs - Create colorful, animated accent elements */}
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-vaporwave-purple/20 rounded-full filter blur-3xl animate-pulse-light z-10" />
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-vaporwave-cyan/20 rounded-full filter blur-3xl animate-pulse-light z-10" />
      
      {/* Main Content Container */}
      <div className="container mx-auto px-4 relative z-20">
        <div className="max-w-3xl mx-auto md:mx-0">
          {/* Category Badge */}
          <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            Cartografia & Agrimensura
          </span>
          
          {/* Main Heading with Gradient Text Effect */}
          <h1 className="text-4xl md:text-6xl font-display font-bold mb-6 text-glow">
            Projetos de <span className="bg-gradient-to-r from-vaporwave-purple to-vaporwave-cyan bg-clip-text text-transparent">Mapeamento</span> & Topografia
          </h1>
          
          {/* Subtitle Text */}
          <p className="text-lg text-foreground/80 mb-8 leading-relaxed">
            Explorando novos desafios com QGIS e python
          </p>
          
          {/* Call-to-Action Buttons */}
          <div className="flex flex-wrap gap-4">
            {/* Primary Button with Animation */}
            <Button 
              onClick={scrollToProjects}
              className="group bg-primary hover:bg-primary/90 text-white"
              size="lg"
            >
              Ver Projetos
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            
            {/* Secondary Button with Blur Effect */}
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
      
      {/* GIS Map Elements - Decorative circular elements with map icon */}
      <div className="hidden md:block absolute bottom-10 right-10 w-40 h-40 border-2 border-vaporwave-purple/30 rounded-full animate-float z-20">
        {/* Circle Pattern Element */}
        <div className="absolute inset-0 opacity-60" style={{ 
          backgroundImage: "radial-gradient(circle, transparent 60%, rgba(155, 135, 245, 0.2) 60%, rgba(155, 135, 245, 0.2) 65%, transparent 65%)" 
        }}></div>
        
        {/* Grid Pattern Element */}
        <div className="absolute inset-0 opacity-60" style={{ 
          backgroundImage: "linear-gradient(0deg, transparent 49%, rgba(155, 135, 245, 0.2) 49%, rgba(155, 135, 245, 0.2) 51%, transparent 51%), linear-gradient(90deg, transparent 49%, rgba(155, 135, 245, 0.2) 49%, rgba(155, 135, 245, 0.2) 51%, transparent 51%)"
        }}></div>
        
        {/* Map Icon */}
        <Map className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-vaporwave-purple/50 h-8 w-8" />
      </div>
      
      {/* Secondary Map Element - Smaller decorative element */}
      <div className="hidden md:block absolute top-40 right-20 w-20 h-20 border-2 border-vaporwave-cyan/30 rounded-full animate-float z-20" style={{ animationDelay: '1s' }}>
        <div className="absolute inset-0 opacity-40" style={{
          backgroundImage: "linear-gradient(45deg, transparent 40%, rgba(51, 195, 240, 0.2) 40%, rgba(51, 195, 240, 0.2) 60%, transparent 60%)"
        }}></div>
      </div>
    </section>
  );
};

export default HeroSection;
