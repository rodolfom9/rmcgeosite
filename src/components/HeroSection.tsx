import { ArrowRight, Map } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

// Componente da seção principal do site
const HeroSection = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    // Seção principal com altura total da tela
    <section
      id="home"
      className="min-h-screen relative flex items-center pt-16 overflow-hidden"
      aria-label="Seção principal"
    >
      {/* Imagem de fundo com descrição para acessibilidade */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=1920&q=80')",
        }}
        role="img"
        aria-label="Mapa topográfico de fundo"
      />

      {/* Camada escura sobre a imagem */}
      <div className="absolute inset-0 bg-gradient-to-br from-background/90 via-background/80 to-background/95" />
      
      {/* Padrão de grade decorativo */}
      <div
        className="absolute inset-0 opacity-15"
        style={{
          backgroundSize: '50px 50px',
          backgroundImage: `
            linear-gradient(rgba(76, 175, 80, 0.15) 1px, transparent 1px),
            linear-gradient(to right, rgba(76, 175, 80, 0.15) 1px, transparent 1px)
          `
        }}
        aria-hidden="true"
      />

      {/* Círculos decorativos animados - Otimizados para performance */}
      <motion.div
        className="absolute -top-40 -right-40 w-96 h-96 bg-[#4CAF50]/5 rounded-full filter blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        aria-hidden="true"
      />
      <motion.div
        className="absolute -bottom-40 -left-40 w-96 h-96 bg-[#FFEB3B]/5 rounded-full filter blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.4, 0.2, 0.4],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        aria-hidden="true"
      />

      {/* Conteúdo principal */}
      <div className="container mx-auto px-4 relative z-30">
        <motion.div 
          className="max-w-3xl mx-auto md:mx-0"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Título principal */}
          <motion.h1 
            className="text-4xl md:text-7xl font-display font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            Projetos de{" "}
            <span className="relative inline-block mr-4">
              <span className="bg-gradient-to-r from-[#4CAF50] to-[#FFEB3B] bg-clip-text text-transparent">
                Mapeamento
              </span>
              {/* Linha decorativa sob "Mapeamento" */}
              <motion.div
                className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-[#4CAF50] to-[#FFEB3B]"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.8, duration: 0.5 }}
                aria-hidden="true"
              />
            </span>
            <span className="inline-block mt-4">& Topografia</span>
          </motion.h1>

          {/* Subtítulo */}
          <motion.p 
            className="text-lg md:text-xl text-foreground/90 mb-8 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            Explorando novos desafios com QGIS e Python
          </motion.p>

          {/* Botões de ação */}
          <motion.div 
            className="flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <Button
              onClick={() => scrollToSection('projects')}
              className="group bg-primary hover:bg-primary/90 text-white px-8 hover-glow"
              size="lg"
              aria-label="Ver projetos"
            >
              Ver Projetos
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </Button>
            <Button
              variant="outline"
              onClick={() => scrollToSection('contact')}
              size="lg"
              className="glass-effect hover-glow px-8"
              aria-label="Entrar em contato"
            >
              Entrar em contato
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Círculo decorativo com ícone */}
      <motion.div 
        className="hidden md:block absolute bottom-10 right-10 w-40 h-40 border-2 border-[#4CAF50]/20 rounded-full hover-glow"
        whileHover={{ scale: 1.1 }}
        transition={{ type: "spring", stiffness: 300 }}
        aria-hidden="true"
      >
        <div className="absolute inset-0 opacity-60" style={{
          backgroundImage: "radial-gradient(circle, transparent 60%, rgba(76, 175, 80, 0.15) 60%, rgba(76, 175, 80, 0.15) 65%, transparent 65%)"
        }}></div>
        <Map className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[#4CAF50]/40 h-8 w-8" aria-hidden="true" />
      </motion.div>
    </section>
  );
};

export default HeroSection;