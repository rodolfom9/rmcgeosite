
import { Ruler, Map, Compass, Landmark } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

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
    <section id="about" className="py-24 bg-muted/50 relative">
      {/* Decorative Elements */}
      <div className="absolute -top-12 left-0 right-0 h-24 bg-gradient-vaporwave opacity-10" />
      <div className="absolute -bottom-12 left-0 right-0 h-24 bg-gradient-vaporwave opacity-10 transform rotate-180" />
      
      <div className="container mx-auto px-4 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              Sobre Mim
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              Expertise em <span className="bg-gradient-to-r from-vaporwave-purple to-vaporwave-cyan bg-clip-text text-transparent">Geotecnologias</span>
            </h2>
            <p className="text-foreground/70 mb-6 leading-relaxed">
              Sou um profissional apaixonado por cartografia e agrimensura, com formação técnica na área e especialização em desenvolvimento de soluções digitais para geociências.
            </p>
            <p className="text-foreground/70 mb-6 leading-relaxed">
              Meu trabalho combina conhecimentos tradicionais de topografia e geodésia com tecnologias modernas como processamento de imagens, programação e sistemas de informações geográficas.
            </p>
            <p className="text-foreground/70 leading-relaxed">
              Estou constantemente explorando novas ferramentas e metodologias para aprimorar a coleta, processamento e visualização de dados geoespaciais, sempre buscando soluções inovadoras para os desafios da área.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skills.map((skill, index) => (
              <Card key={index} className="backdrop-blur-sm bg-background/50 border border-primary/10 hover:border-primary/30 transition-all duration-300">
                <CardHeader className="pb-2">
                  <div className="mb-2">{skill.icon}</div>
                  <CardTitle className="text-xl font-display">{skill.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-foreground/70">
                    {skill.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
