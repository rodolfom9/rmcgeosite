import { Ruler, Map, Compass, Landmark } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";

const skills = [
  {
    icon: <Map className="h-8 w-8 text-primary" />,
    title: "Cartografia",
    description: "Desenvolvimento de mapas digitais, Sistemas de Informações Geográficas (SIG) e visualização de dados espaciais."
  },
  {
    icon: <Ruler className="h-8 w-8 text-primary" />,
    title: "Agrimensura",
    description: "Levantamentos topográficos, georreferenciamento de imóveis rurais e processamento de dados de campo."
  },
  {
    icon: <Compass className="h-8 w-8 text-primary" />,
    title: "Geotecnologias",
    description: "Utilização de drones para mapeamento, processamento de dados LIDAR e fotogrametria digital."
  },
  {
    icon: <Landmark className="h-8 w-8 text-primary" />,
    title: "Gestão Territorial",
    description: "Análise espacial, planejamento territorial e regularização fundiária com uso de tecnologias modernas."
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
              Expertise em{" "}
              <span className="relative">
                <span className="bg-gradient-to-r from-[#4CAF50] to-[#FFEB3B] bg-clip-text text-transparent">
                  Geotecnologias
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
                Sou um profissional apaixonado por cartografia e agrimensura, com formação técnica na área e especialização em desenvolvimento de soluções digitais para geociências.
              </p>
              <p className="text-foreground/70 leading-relaxed text-lg">
                Meu trabalho combina conhecimentos tradicionais de topografia e geodésia com tecnologias modernas como processamento de imagens, programação e sistemas de informações geográficas.
              </p>
              <p className="text-foreground/70 leading-relaxed text-lg">
                Estou constantemente explorando novas ferramentas e metodologias para aprimorar a coleta, processamento e visualização de dados geoespaciais, sempre buscando soluções inovadoras para os desafios da área.
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
