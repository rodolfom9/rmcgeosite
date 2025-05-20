
// Importações dos componentes necessários para construir a página principal
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ProjectsSection from "@/components/ProjectsSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";

/**
 * Componente Index - Página principal do site
 * Utiliza o tema do QGIS3, com foco em mapas e dados geoespaciais
 */
const Index = () => {
  return (
    // ThemeProvider gerencia o tema claro/escuro da aplicação
    <ThemeProvider defaultTheme="dark">
      <div className="min-h-screen flex flex-col">
        {/* Cabeçalho com navegação */}
        <Header />
        
        {/* Conteúdo principal organizado em seções */}
        <main>
          {/* Seção hero com elementos visuais do QGIS */}
          <HeroSection />
          
          {/* Seção de projetos com exemplos de uso do QGIS */}
          <ProjectsSection />
          
          {/* Seção sobre com informações adicionais */}
          <AboutSection />
          
          {/* Seção de contato com formulário */}
          <ContactSection />
        </main>
        
        {/* Rodapé com informações adicionais */}
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default Index;
