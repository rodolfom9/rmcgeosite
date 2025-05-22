import { ArrowRight, Map, MousePointerClick } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const HeroSection = () => {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="min-h-screen relative flex items-center pt-16 overflow-hidden overflow-x-hidden"
    >
      {/* Imagem de fundo com overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=1920&q=80')",
        }}
      />

      {/* Overlay gradiente */}
      <div className="absolute inset-0 bg-gradient-to-br from-background/90 via-background/80 to-background/95" />
      
      {/* Grid Pattern com animação suave */}
      <div
        className="absolute inset-0 bg-grid-pattern opacity-15"
        style={{
          backgroundSize: '50px 50px',
          backgroundImage: `
            linear-gradient(rgba(76, 175, 80, 0.15) 1px, transparent 1px),
            linear-gradient(to right, rgba(76, 175, 80, 0.15) 1px, transparent 1px)
          `
        }}
      />

      {/* Elementos flutuantes animados */}
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
      />

      <div className="container mx-auto px-4 relative z-30">
        <motion.div 
          className="max-w-3xl mx-auto md:mx-0"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1 
            className="text-5xl md:text-7xl font-display font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            Projetos de{" "}
            <span className="relative inline-block mr-4">
              <span className="bg-gradient-to-r from-[#4CAF50] to-[#FFEB3B] bg-clip-text text-transparent">
                Mapeamento
              </span>
              <motion.div
                className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-[#4CAF50] to-[#FFEB3B]"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.8, duration: 0.5 }}
              />
            </span>
            <span className="inline-block mt-4">& Topografia</span>
          </motion.h1>

          <motion.p 
            className="text-xl text-foreground/80 mb-8 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            Explorando novos desafios com QGIS e Python
          </motion.p>

          <motion.div 
            className="flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <Button
              onClick={scrollToProjects}
              className="group bg-primary hover:bg-primary/90 text-white px-8 hover-glow"
              size="lg"
            >
              Ver Projetos
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button
              variant="outline"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              size="lg"
              className="glass-effect hover-glow px-8"
            >
              Entrar em contato
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Elementos decorativos interativos */}
      <motion.div 
        className="hidden md:block absolute bottom-10 right-10 w-40 h-40 border-2 border-[#4CAF50]/20 rounded-full hover-glow"
        whileHover={{ scale: 1.1 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <div className="absolute inset-0 opacity-60" style={{
          backgroundImage: "radial-gradient(circle, transparent 60%, rgba(76, 175, 80, 0.15) 60%, rgba(76, 175, 80, 0.15) 65%, transparent 65%)"
        }}></div>
        <Map className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[#4CAF50]/40 h-8 w-8" />
      </motion.div>

      {/* Indicador de scroll */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-primary/40"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <MousePointerClick className="h-6 w-6 mb-2" />
        <span className="text-sm">Role para explorar</span>
      </motion.div>
    </section>
  );
};

export default HeroSection;