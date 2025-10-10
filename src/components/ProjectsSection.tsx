import { Github, Link as LinkIcon, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import iconSvg from "@/assets/icon.svg";
import rmcgeoleiteImg from "@/assets/rmcgeoleite.png";
import fluxoImg from "@/assets/fluxo.png";

// Sample project data - replace with your own
const projects = [
  {
    id: 1,
    title: "Plugin RMCGEO",
    description: "Plugin para QGIS que automatiza e otimiza o fluxo de trabalho em projetos de cartografia e agrimensura, com ferramentas especializadas e interface intuitiva.",
    tags: ["QGIS", "Python", "PyQGIS", "PostgreSQL", "PostGIS"],
    imageUrl: iconSvg,
    githubUrl: "https://github.com/rodolfom9/rmcgeo",
    liveUrl: "/rmcgeo",
    demoDescription: "Sistema desenvolvido para automatizar o processo de mapeamento de propriedades rurais, utilizando QGIS como base e Python para automação. O projeto inclui:\n\n" +
      "• Processamento de dados geoespaciais\n" +
      "• Geração automática de relatórios\n" +
      "• Integração com PostgreSQL/PostGIS\n" +
      "• Análise espacial avançada\n" +
      "• Interface personalizada no QGIS"
  },
  {
    id: 2,
    title: "RMCGEO Leite",
    description: "Sistema web para gestão de propriedades leiteiras, integrando dados geoespaciais com informações zootécnicas e financeiras.",
    tags: ["React", "TypeScript", "Tailwind", "shadcn/ui", "Vite"],
    imageUrl: rmcgeoleiteImg,
    githubUrl: "https://github.com/rodolfom9/rmcgeoleite",
    liveUrl: "/rmcgeoleite",
    accessUrl: "https://agroleite.rmcgeo.com.br/",
  },
  {
    id: 3,
    title: "Fluxo Curricular",
    description: "Sistema web para gerenciamento e visualização do fluxo curricular do curso de Engenharia Cartográfica e de Agrimensura do IFG.",
    tags: ["React", "TypeScript", "Supabase", "Tailwind", "shadcn/ui"],
    imageUrl: fluxoImg,
    githubUrl: "https://github.com/rodolfom9/engcartagri",
    liveUrl: "/engcartagri",
    accessUrl: "https://engcartagri.rmcgeo.com.br",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 relative">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-pattern bg-[size:40px_40px] opacity-5" 
        style={{ backgroundImage: 'linear-gradient(rgba(76, 175, 80, 0.15) 1px, transparent 1px), linear-gradient(to right, rgba(76, 175, 80, 0.15) 1px, transparent 1px)' }}
      />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            <span className="bg-gradient-to-r from-[#4CAF50] to-[#FFEB3B] bg-clip-text text-transparent">
              Projetos do Github
            </span>
          </h2>
          <p className="text-foreground/70 max-w-2xl mx-auto text-lg">
            Explorando dados geográficos e criando soluções inovadoras para cartografia e agrimensura.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <Card className="backdrop-blur-sm bg-background/50 border border-primary/10 hover:border-primary/30 transition-all duration-300 overflow-hidden group h-full">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={project.imageUrl} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl font-display group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </CardTitle>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {project.tags.map((tag, i) => (
                      <Badge 
                        key={i} 
                        variant="outline" 
                        className="bg-primary/5 hover:bg-primary/10 border-primary/20 transition-colors duration-300"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-foreground/70">
                    {project.description}
                  </CardDescription>
                </CardContent>
                <CardFooter className="flex justify-between mt-auto">
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    asChild
                    className="group/link"
                  >
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                      <Github size={16} className="group-hover/link:text-primary transition-colors duration-300" />
                      <span className="group-hover/link:text-primary transition-colors duration-300">Código</span>
                    </a>
                  </Button>
                  {project.accessUrl && (
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      asChild
                      className="group/link"
                    >
                      <a href={project.accessUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                        <LinkIcon size={16} className="group-hover/link:text-primary transition-colors duration-300" />
                        <span className="group-hover/link:text-primary transition-colors duration-300">Acessar</span>
                      </a>
                    </Button>
                  )}
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    asChild
                    className="group/link"
                  >
                    <Link to={project.liveUrl} className="flex items-center gap-2">
                      <LinkIcon size={16} className="group-hover/link:text-primary transition-colors duration-300" />
                      <span className="group-hover/link:text-primary transition-colors duration-300">Demo</span>
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Button 
            variant="outline" 
            asChild 
            className="border-primary/20 hover:bg-primary/10 group"
          >
            <a 
              href="https://github.com/rodolfom9" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-2"
            >
              <Github size={18} className="group-hover:text-primary transition-colors duration-300" />
              <span className="group-hover:text-primary transition-colors duration-300">Ver mais no GitHub</span>
              <ArrowUpRight size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
