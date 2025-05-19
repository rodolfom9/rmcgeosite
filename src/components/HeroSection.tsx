
import { ArrowRight } from "lucide-react";
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
      {/* Grid Background */}
      <div 
        className="absolute inset-0 bg-grid-pattern bg-[size:40px_40px] opacity-30" 
        style={{ backgroundImage: 'linear-gradient(rgba(155, 135, 245, 0.15) 1px, transparent 1px), linear-gradient(to right, rgba(155, 135, 245, 0.15) 1px, transparent 1px)' }}
      />
      
      {/* Gradient Blob */}
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-vaporwave-purple/20 rounded-full filter blur-3xl animate-pulse-light" />
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-vaporwave-cyan/20 rounded-full filter blur-3xl animate-pulse-light" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto md:mx-0">
          <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            Cartografia & Agrimensura
          </span>
          <h1 className="text-4xl md:text-6xl font-display font-bold mb-6 text-glow">
            Projetos de <span className="bg-gradient-to-r from-vaporwave-purple to-vaporwave-cyan bg-clip-text text-transparent">Mapeamento</span> & Topografia
          </h1>
          <p className="text-lg text-foreground/80 mb-8 leading-relaxed">
            Desenvolvedor especializado em soluções digitais para cartografia, agrimensura e 
            geotecnologias. Explorando a interseção entre dados geográficos e programação.
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
      
      {/* Decorative Elements */}
      <div className="hidden md:block absolute bottom-10 right-10 w-32 h-32 border-2 border-vaporwave-purple/30 rounded-full animate-float" />
      <div className="hidden md:block absolute top-40 right-20 w-16 h-16 border-2 border-vaporwave-cyan/30 rounded-full animate-float" style={{ animationDelay: '1s' }} />
    </section>
  );
};

export default HeroSection;
