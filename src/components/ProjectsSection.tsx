import { Github, Link, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";

// Sample project data - replace with your own
const projects = [
  {
    id: 1,
    title: "GeoMapeamento",
    description: "Sistema para mapeamento de propriedades rurais usando QGIS e Python, integrado com geração de relatórios automatizados.",
    tags: ["QGIS", "Python", "Geoespacial"],
    imageUrl: "https://images.unsplash.com/photo-1482881497185-d4a9ddbe4151?auto=format&fit=crop&w=600&h=400",
    githubUrl: "https://github.com/rodolfom9",
    liveUrl: "#"
  },
  {
    id: 2,
    title: "Nada aqui",
    description: "Aplicação para processamento de dados topográficos capturados por drones, com visualização 3D e geração de curvas de nível.",
    tags: ["React", "Three.js", "WebGL"],
    imageUrl: "https://images.unsplash.com/photo-1466442929976-97f336a657be?auto=format&fit=crop&w=600&h=400",
    githubUrl: "https://github.com/rodolfom9",
    liveUrl: "#"
  },
  {
    id: 3,
    title: "GeoDatabase",
    description: "Banco de dados geográfico para armazenamento e consulta de informações cadastrais e topográficas.",
    tags: ["PostgreSQL", "PostGIS", "TypeScript"],
    imageUrl: "https://images.unsplash.com/photo-1433086966358-54859d0ed716?auto=format&fit=crop&w=600&h=400",
    githubUrl: "https://github.com/rodolfom9",
    liveUrl: "#"
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
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    asChild
                    className="group/link"
                  >
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                      <Link size={16} className="group-hover/link:text-primary transition-colors duration-300" />
                      <span className="group-hover/link:text-primary transition-colors duration-300">Demo</span>
                    </a>
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
