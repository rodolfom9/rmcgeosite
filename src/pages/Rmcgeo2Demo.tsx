import { motion } from "framer-motion";
import { Github, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const Rmcgeo2Demo = () => {
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
              Plugin desenvolvido para o QGIS que automatiza e otimiza o fluxo de trabalho em projetos de cartografia e agrimensura. 
              O plugin oferece uma interface intuitiva e ferramentas especializadas para profissionais da área geoespacial.
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
              <Badge variant="outline" className="bg-primary/5 hover:bg-primary/10 border-primary/20">
                PostgreSQL
              </Badge>
              <Badge variant="outline" className="bg-primary/5 hover:bg-primary/10 border-primary/20">
                PostGIS
              </Badge>
            </div>
          </section>

          {/* Features */}
          <section className="mb-12">
            <h2 className="text-3xl font-display font-bold mb-6">Funcionalidades</h2>
            <div className="grid gap-6">
              <div className="p-6 rounded-lg border border-border/40 bg-card">
                <h3 className="text-xl font-display font-semibold mb-3">Ferramentas de Edição</h3>
                <p className="text-foreground/80">
                  • Edição avançada de geometrias<br />
                  • Ferramentas de topologia<br />
                  • Validação automática de dados<br />
                  • Correção de erros geométricos
                </p>
              </div>

              <div className="p-6 rounded-lg border border-border/40 bg-card">
                <h3 className="text-xl font-display font-semibold mb-3">Automação de Processos</h3>
                <p className="text-foreground/80">
                  • Processamento em lote de dados<br />
                  • Geração automática de relatórios<br />
                  • Exportação em múltiplos formatos<br />
                  • Templates personalizáveis
                </p>
              </div>

              <div className="p-6 rounded-lg border border-border/40 bg-card">
                <h3 className="text-xl font-display font-semibold mb-3">Integração com Banco de Dados</h3>
                <p className="text-foreground/80">
                  • Sincronização automática de dados<br />
                  • Backup e versionamento<br />
                </p>
              </div>

              <div className="p-6 rounded-lg border border-border/40 bg-card">
                <h3 className="text-xl font-display font-semibold mb-3">Interface Personalizada</h3>
                <p className="text-foreground/80">
                  • Painel de controle intuitivo<br />
                  • Atalhos personalizados<br />
                  • Temas e estilos personalizáveis<br />
                  • Suporte a múltiplos idiomas
                </p>
              </div>
            </div>
          </section>

          {/* Technical Details */}
          <section className="mb-12">
            <h2 className="text-3xl font-display font-bold mb-6">Detalhes Técnicos</h2>
            <div className="prose prose-invert max-w-none">
              <h3>Arquitetura</h3>
              <ul>
                <li>Desenvolvido em Python usando a API PyQGIS</li>
                <li>Interface gráfica com Qt Designer</li>
                <li>Integração nativa com PostgreSQL/PostGIS</li>
                <li>Suporte a múltiplas versões do QGIS</li>
              </ul>

              <h3>Requisitos</h3>
              <ul>
                <li>QGIS 3.x (3.16 ou superior)</li>
                <li>Python 3.8+</li>
                <li>PostgreSQL 12+ com PostGIS (opcional)</li>
                <li>Bibliotecas Python: PyQGIS, psycopg2, pandas</li>
              </ul>

              <h3>Instalação</h3>
              <ul>
                <li>Instalação via gerenciador de plugins do QGIS</li>
                <li>Instalação manual via arquivo ZIP</li>
                <li>Configuração automática de dependências</li>
                <li>Guia de instalação detalhado no GitHub</li>
              </ul>
            </div>
          </section>

          {/* GitHub Section */}
          <section className="mb-12">
            <h2 className="text-3xl font-display font-bold mb-6">Código Fonte</h2>
            <div className="p-6 rounded-lg border border-border/40 bg-card">
              <p className="text-foreground/80 mb-4">
                O código fonte do plugin está disponível no GitHub. Você pode contribuir, 
                reportar issues ou fazer um fork do projeto.
              </p>
              <Button asChild className="group">
                <a 
                  href="https://github.com/rodolfom9/rmcgeo2" 
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

export default Rmcgeo2Demo; 