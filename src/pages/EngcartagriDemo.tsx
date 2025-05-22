import { motion } from "framer-motion";
import { Github, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";

const EngcartagriDemo = () => {
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
              Fluxo Curricular
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
              Sistema web moderno desenvolvido para gerenciamento e visualização do fluxo curricular 
              do curso de Engenharia Cartográfica e de Agrimensura do IFG. O projeto visa otimizar 
              a gestão do currículo através de uma interface intuitiva e funcionalidades especializadas.
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              <Badge variant="outline" className="bg-primary/5 hover:bg-primary/10 border-primary/20">
                React
              </Badge>
              <Badge variant="outline" className="bg-primary/5 hover:bg-primary/10 border-primary/20">
                TypeScript
              </Badge>
              <Badge variant="outline" className="bg-primary/5 hover:bg-primary/10 border-primary/20">
                Supabase
              </Badge>
              <Badge variant="outline" className="bg-primary/5 hover:bg-primary/10 border-primary/20">
                Tailwind
              </Badge>
              <Badge variant="outline" className="bg-primary/5 hover:bg-primary/10 border-primary/20">
                shadcn/ui
              </Badge>
            </div>
          </section>

          {/* Features */}
          <section className="mb-12">
            <h2 className="text-3xl font-display font-bold mb-6">Funcionalidades</h2>
            <div className="grid gap-6">
              <div className="p-6 rounded-lg border border-border/40 bg-card">
                <h3 className="text-xl font-display font-semibold mb-3">Gestão de Disciplinas</h3>
                <p className="text-foreground/80">
                  • Adição e edição de disciplinas<br />
                  • Definição de períodos e créditos<br />
                  • Gerenciamento de professores<br />
                  • Controle de horários
                </p>
              </div>

              <div className="p-6 rounded-lg border border-border/40 bg-card">
                <h3 className="text-xl font-display font-semibold mb-3">Fluxo Curricular</h3>
                <p className="text-foreground/80">
                  • Visualização por período<br />
                  • Gerenciamento de pré-requisitos<br />
                  • Marcação de disciplinas concluídas<br />
                  • Acompanhamento do progresso
                </p>
              </div>

              <div className="p-6 rounded-lg border border-border/40 bg-card">
                <h3 className="text-xl font-display font-semibold mb-3">Grade de Horários</h3>
                <p className="text-foreground/80">
                  • Visualização dos horários<br />
                  • Detecção de conflitos<br />
                  • Organização por dia/horário<br />
                  • Interface intuitiva
                </p>
              </div>

              <div className="p-6 rounded-lg border border-border/40 bg-card">
                <h3 className="text-xl font-display font-semibold mb-3">Autenticação</h3>
                <p className="text-foreground/80">
                  • Login/Registro de usuários<br />
                  • Persistência de dados<br />
                  • Controle de acesso<br />
                  • Perfis personalizados
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
                <li>Frontend em React com TypeScript</li>
                <li>Banco de dados Supabase</li>
                <li>Estilização com Tailwind CSS</li>
                <li>Componentes UI com shadcn/ui</li>
              </ul>

              <h3>Requisitos</h3>
              <ul>
                <li>Node.js 18+</li>
                <li>npm ou yarn</li>
                <li>Navegador moderno</li>
                <li>Conta Supabase</li>
              </ul>

              <h3>Instalação</h3>
              <ul>
                <li>Clone do repositório</li>
                <li>Instalação de dependências</li>
                <li>Configuração do Supabase</li>
                <li>Inicialização do servidor</li>
              </ul>
            </div>
          </section>

          {/* GitHub Section */}
          <section className="mb-12">
            <h2 className="text-3xl font-display font-bold mb-6">Código Fonte</h2>
            <div className="p-6 rounded-lg border border-border/40 bg-card">
              <p className="text-foreground/80 mb-4">
                O código fonte do projeto está disponível no GitHub. Você pode contribuir, 
                reportar issues ou fazer um fork do projeto.
              </p>
              <Button asChild className="group">
                <a 
                  href="https://github.com/rodolfom9/engcartagri" 
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

export default EngcartagriDemo; 