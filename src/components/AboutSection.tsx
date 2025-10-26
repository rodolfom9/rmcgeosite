import { Ruler, Map, Compass, Landmark } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";

const skills = [
  {
    icon: <Map className="h-8 w-8 text-primary" />,
    title: "Cartografia",
    description: " Desenvolvimento de PLugins no QGIS."
  },
  {
    icon: <Ruler className="h-8 w-8 text-primary" />,
    title: "Agrimensura",
    description: ""
  },
  {
    icon: <Compass className="h-8 w-8 text-primary" />,
    title: "Geotecnologias",
    description: ""
  },
  {
    icon: <Landmark className="h-8 w-8 text-primary" />,
    title: "Gestão Territorial",
    description: ""
  }
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-muted/50 relative overflow-hidden">
      {/* Decorative Elements */}
      <motion.div 
        className="absolute -top-12 left-0 right-0 h-24 bg-gradient-to-r from-[#4CAF50] to-[#FFEB3B] opacity-10"
        animate={{
          opacity: [0.1, 0.15, 0.1],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div 
        className="absolute -bottom-12 left-0 right-0 h-24 bg-gradient-to-r from-[#4CAF50] to-[#FFEB3B] opacity-10 transform rotate-180"
        animate={{
          opacity: [0.15, 0.1, 0.15],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <div className="container mx-auto px-4 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.span 
              className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              Sobre Mim
            </motion.span>
            <motion.h2 
              className="text-4xl md:text-5xl font-display font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              Um pouco sobre{" "}
              <span className="relative">
                <span className="bg-gradient-to-r from-[#4CAF50] to-[#FFEB3B] bg-clip-text text-transparent">
                  <br></br> Meu Trabalho
                </span>
                <motion.div
                  className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-[#4CAF50] to-[#FFEB3B]"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.8, duration: 0.5 }}
                />
              </span>
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="space-y-4"
            >
              <p className="text-foreground/70 leading-relaxed text-lg">
                <b>Plugin RMCGEO:</b> Plugin para QGIS que automatiza tarefas de cartografia e agrimensura, integrando ferramentas avançadas e interface intuitiva.
              </p>
              <p className="text-foreground/70 leading-relaxed text-lg">
                <b>Fluxo Curricular:</b> Sistema web para gerenciamento e visualização do fluxo curricular do curso de Engenharia Cartográfica e de Agrimensura do IFG. Criado para me auxiliar e auxiliar outros alunos.
              </p>
              <p className="text-foreground/70 leading-relaxed text-lg">
                <b>RMCGEO Leite:</b> Plataforma online para gestão de propriedades leiteiras, unindo dados geoespaciais, e financeiros.
              </p>
            </motion.div>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <Card className="backdrop-blur-sm bg-background/50 border border-primary/10 hover:border-primary/30 transition-all duration-300 group h-full">
                  <CardHeader className="pb-2">
                    <motion.div 
                      className="mb-2 group-hover:scale-110 transition-transform duration-300"
                      whileHover={{ rotate: 5 }}
                    >
                      {skill.icon}
                    </motion.div>
                    <CardTitle className="text-xl font-display group-hover:text-primary transition-colors duration-300">
                      {skill.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-foreground/70">
                      {skill.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
