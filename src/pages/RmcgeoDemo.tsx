import { motion } from "framer-motion";
import { Github, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const RmcgeoDemo = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 max-w-screen-2xl items-center">
          <Button variant="ghost" size="sm" asChild className="mr-4">
            <Link to="/#projects" className="flex items-center gap-2">
              <ArrowLeft size={16} />
              <span>Voltar</span>
            </Link>
          </Button>
          <h1 className="text-xl font-display font-bold">
            <span className="bg-gradient-to-r from-[#4CAF50] to-[#FFEB3B] bg-clip-text text-transparent">
              Plugin RMCGEO
            </span>
          </h1>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          {/* Project Overview */}
          <section className="mb-12">
            <h2 className="text-3xl font-display font-bold mb-6">Visão Geral</h2>
            <p className="text-foreground/80 text-lg mb-6">
              RMCGEO é um conjunto abrangente de ferramentas geoespaciais que inclui:
              conversão de coordenadas, desenho por azimute e distância,
              desenho por rumo e distância, offset, extend, chanfer, inserção de pontos por coordenadas,
              cópia de coordenadas e ferramentas para manipulação de tabelas de atributos.
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              <Badge variant="outline" className="bg-primary/5 hover:bg-primary/10 border-primary/20">
                QGIS
              </Badge>
              <Badge variant="outline" className="bg-primary/5 hover:bg-primary/10 border-primary/20">
                Python
              </Badge>
              <Badge variant="outline" className="bg-primary/5 hover:bg-primary/10 border-primary/20">
                PyQGIS
              </Badge>
            </div>
          </section>

          {/* Features */}
          <section className="mb-12">
            <h2 className="text-3xl font-display font-bold mb-6">Funcionalidades</h2>
            <div className="grid gap-6">
              <div className="p-6 rounded-lg border border-border/40 bg-card">
                <h3 className="text-xl font-display font-semibold mb-3">Desenho por azimute e distância</h3>
                <p className="text-foreground/80">
                  • Desenha com Preview<br />
                  • Edição da linha mesmo em Preview<br />
                </p>
              </div>

              <div className="p-6 rounded-lg border border-border/40 bg-card">
                <h3 className="text-xl font-display font-semibold mb-3">Desenho por rumo e distância</h3>
                <p className="text-foreground/80">
                  • Desenha com Preview<br />
                  • Edição da linha mesmo em Preview<br />
                </p>
              </div>

              <div className="p-6 rounded-lg border border-border/40 bg-card">
                <h3 className="text-xl font-display font-semibold mb-3">Conversor de Cordenadas</h3>
                <p className="text-foreground/80">
                  • Converter Decimal para GMS<br />
                  • Converter GMS para Decimal<br />
                </p>
              </div>

              <div className="p-6 rounded-lg border border-border/40 bg-card">
                <h3 className="text-xl font-display font-semibold mb-3">Similares a ferramentas CAD</h3>
                <p className="text-foreground/80">
                  • Offset<br />
                  • Extend<br />
                  • Chanfro<br />
                </p>
              </div>

              <div className="p-6 rounded-lg border border-border/40 bg-card">
                <h3 className="text-xl font-display font-semibold mb-3">Ferramentas</h3>
                <p className="text-foreground/80">
                  • Street View<br />
                  • Copiar coordenadas<br />
                  • Pontos por coordenadas<br />
                  • Suporte a múltiplos idiomas
                </p>
              </div>

              <div className="p-6 rounded-lg border border-border/40 bg-card">
                <h3 className="text-xl font-display font-semibold mb-3">Ferramentas para manipulação de tabelas de atributos</h3>
                <p className="text-foreground/80">
                  • Adicionar Área na Tabela<br />
                  • Adicionar Azimute GMS ou decimal na Tabela<br />
                  • Adicionar Perímetro na Tabela<br />
                  • Adicionar Coordenada X e Y na Tabela<br />
                  • Adicionar Comprimento na Tabela<br />
                </p>
              </div>
            </div>
          </section>

          {/* GitHub Section */}
          <section className="mb-12">
            <h2 className="text-3xl font-display font-bold mb-6">Código Fonte</h2>
            <div className="p-6 rounded-lg border border-border/40 bg-card">
              <p className="text-foreground/80 mb-4">
                O código fonte do plugin está disponível no GitHub.
              </p>
              <Button asChild className="group">
                <a 
                  href="https://github.com/rodolfom9/rmcgeo" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <Github size={18} className="group-hover:text-primary transition-colors duration-300" />
                  <span className="group-hover:text-primary transition-colors duration-300">
                    Acessar Repositório
                  </span>
                </a>
              </Button>
            </div>
          </section>
        </motion.div>
      </main>
    </div>
  );
};

export default RmcgeoDemo;
