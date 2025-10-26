import { motion } from "framer-motion";
import { Github, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";

const RmcgeoleiteDemo = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleBack = () => {
    window.scrollTo(0, 0);
    setTimeout(() => {
      navigate("/#projects");
    }, 100);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="fixed top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 max-w-screen-2xl items-center">
          <Button variant="ghost" size="sm" onClick={handleBack} className="mr-4">
            <div className="flex items-center gap-2">
              <ArrowLeft size={16} />
              <span>Voltar</span>
            </div>
          </Button>
          <h1 className="text-xl font-display font-bold">
            <span className="bg-gradient-to-r from-[#4CAF50] to-[#FFEB3B] bg-clip-text text-transparent">
              RMCGEO Leite
            </span>
          </h1>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8 mt-14">
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
              Sistema para gestão integrada de propriedades leiteiras, 
              combinando dados geoespaciais com informações zootécnicas e financeiras. Ainda em desenvolvimento.
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              <Badge variant="outline" className="bg-primary/5 hover:bg-primary/10 border-primary/20">
                React
              </Badge>
              <Badge variant="outline" className="bg-primary/5 hover:bg-primary/10 border-primary/20">
                TypeScript
              </Badge>
              <Badge variant="outline" className="bg-primary/5 hover:bg-primary/10 border-primary/20">
                Tailwind
              </Badge>
            </div>
          </section>

          {/* Features */}
          <section className="mb-12">
            <h2 className="text-3xl font-display font-bold mb-6">Funcionalidades</h2>
            <div className="grid gap-6">
              <div className="p-6 rounded-lg border border-border/40 bg-card">
                <h3 className="text-xl font-display font-semibold mb-3">Gestão de Propriedades</h3>
                <p className="text-foreground/80">
                  • Cadastro completo de propriedades<br />
                  • Visualização em mapa interativo<br />
                  • Gestão de áreas e divisões<br />
                </p>
              </div>

              <div className="p-6 rounded-lg border border-border/40 bg-card">
                <h3 className="text-xl font-display font-semibold mb-3">Controle Zootécnico</h3>
                <p className="text-foreground/80">
                  • Registro de rebanho<br />
                  • Controle de produção<br />
                </p>
              </div>

              <div className="p-6 rounded-lg border border-border/40 bg-card">
                <h3 className="text-xl font-display font-semibold mb-3">Gestão Financeira</h3>
                <p className="text-foreground/80">
                  • Controle de custos<br />
                  • Análise de rentabilidade<br />
                  • Relatórios financeiros<br />
                  • Planejamento orçamentário
                </p>
              </div>

              <div className="p-6 rounded-lg border border-border/40 bg-card">
                <h3 className="text-xl font-display font-semibold mb-3">Interface Moderna</h3>
                <p className="text-foreground/80">
                  • Design responsivo<br />
                  • Tema claro/escuro<br />
                  • Componentes reutilizáveis<br />
                  • Experiência intuitiva
                </p>
              </div>
            </div>
          </section>

          {/* GitHub Section */}
          <section className="mb-12">
            <h2 className="text-3xl font-display font-bold mb-6">Código Fonte</h2>
            <div className="p-6 rounded-lg border border-border/40 bg-card">
              <p className="text-foreground/80 mb-4">
                O código fonte do projeto está disponível no GitHub.
              </p>
              <Button asChild className="group">
                <a 
                  href="https://github.com/rodolfom9/rmcgeoleite" 
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

export default RmcgeoleiteDemo; 