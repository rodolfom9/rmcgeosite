
import { Github, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 border-t border-primary/10 bg-background relative">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <div className="text-2xl font-display font-semibold bg-gradient-to-r from-vaporwave-purple to-vaporwave-cyan bg-clip-text text-transparent">
              CartoDev
            </div>
            <p className="text-sm text-foreground/60 mt-1">
              © {currentYear} · Todos os direitos reservados
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
            <a 
              href="#home"
              className="text-foreground/70 hover:text-primary transition-colors"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Início
            </a>
            <a 
              href="#projects"
              className="text-foreground/70 hover:text-primary transition-colors"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Projetos
            </a>
            <a 
              href="#about"
              className="text-foreground/70 hover:text-primary transition-colors"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Sobre
            </a>
            <a 
              href="#contact"
              className="text-foreground/70 hover:text-primary transition-colors"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Contato
            </a>
          </div>
          
          <div className="mt-4 md:mt-0 flex items-center gap-4">
            <a 
              href="https://github.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors"
              aria-label="GitHub"
            >
              <Github size={18} />
            </a>
            <a 
              href="mailto:contato@exemplo.com"
              className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors"
              aria-label="Email"
            >
              <Mail size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
