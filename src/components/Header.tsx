
import { useState, useEffect } from "react";
import { Github, Moon, Sun, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/components/ThemeProvider";

const Header = () => {
  const { theme, setTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  
  const scrollToSection = (id: string) => {
    setIsMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header 
      className={`fixed top-0 w-full z-40 transition-all duration-300 ${
        isScrolled ? "bg-background/80 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <span className="text-2xl font-display font-semibold bg-gradient-to-r from-vaporwave-purple to-vaporwave-cyan bg-clip-text text-transparent">
            RMCGEO
          </span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <button 
            onClick={() => scrollToSection('home')} 
            className="text-foreground/80 hover:text-primary transition-colors"
          >
            Início
          </button>
          <button 
            onClick={() => scrollToSection('projects')} 
            className="text-foreground/80 hover:text-primary transition-colors"
          >
            Projetos
          </button>
          <button 
            onClick={() => scrollToSection('about')} 
            className="text-foreground/80 hover:text-primary transition-colors"
          >
            Sobre
          </button>
          <button 
            onClick={() => scrollToSection('contact')} 
            className="text-foreground/80 hover:text-primary transition-colors"
          >
            Contato
          </button>
        </nav>

        <div className="flex items-center gap-3">
          <a 
            href="https://github.com/rodolfom9" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-primary transition-colors"
          >
            <Github size={20} />
          </a>
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="rounded-full"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </Button>
          
          {/* Mobile menu button */}
          <Button 
            variant="ghost" 
            size="icon" 
            className="rounded-full md:hidden" 
            onClick={toggleMenu}
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-background/95 backdrop-blur-md shadow-md py-4 md:hidden">
          <nav className="container mx-auto px-4 flex flex-col gap-4">
            <button 
              onClick={() => scrollToSection('home')} 
              className="py-2 text-foreground/80 hover:text-primary transition-colors text-left"
            >
              Início
            </button>
            <button 
              onClick={() => scrollToSection('projects')} 
              className="py-2 text-foreground/80 hover:text-primary transition-colors text-left"
            >
              Projetos
            </button>
            <button 
              onClick={() => scrollToSection('about')} 
              className="py-2 text-foreground/80 hover:text-primary transition-colors text-left"
            >
              Sobre
            </button>
            <button 
              onClick={() => scrollToSection('contact')} 
              className="py-2 text-foreground/80 hover:text-primary transition-colors text-left"
            >
              Contato
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
