import { useState, useEffect } from "react";
import { Github, Send, Moon, Sun, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/components/ThemeProvider";
import { motion, AnimatePresence } from "framer-motion";

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

  const navItems = [
    { id: 'home', label: 'Início' },
    { id: 'projects', label: 'Projetos' },
    { id: 'about', label: 'Sobre' }
  ];

  return (
    <motion.header 
      className={`fixed top-0 w-full z-40 transition-all duration-300 ${
        isScrolled ? "bg-background/80 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <motion.div 
          className="flex items-center gap-2"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <motion.div 
            className="text-2xl font-display font-semibold bg-gradient-to-r from-[#4CAF50] to-[#FFEB3B] bg-clip-text text-transparent"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            RMCGEO
          </motion.div>
        </motion.div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <motion.button 
              key={item.id}
              onClick={() => scrollToSection(item.id)} 
              className="text-foreground/80 hover:text-primary transition-colors relative group"
              whileHover={{ y: -2 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              {item.label}
              <motion.div
                className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300"
                initial={false}
                animate={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
              />
            </motion.button>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <motion.a 
            href="https://github.com/rodolfom9" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-primary transition-colors"
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <Github size={20} />
          </motion.a>
          <motion.a 
            href="https://t.me/rodolfo09" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-primary transition-colors"
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <Send size={20} />
          </motion.a>
          <motion.div whileHover={{ scale: 1.1 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="rounded-full"
            aria-label="Toggle theme"
            >
              <motion.div
                initial={false}
                animate={{ rotate: theme === 'dark' ? 180 : 0 }}
                transition={{ duration: 0.5 }}
          >
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
              </motion.div>
          </Button>
          </motion.div>
          
          {/* Mobile menu button */}
          <motion.div whileHover={{ scale: 1.1 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
          <Button 
            variant="ghost" 
            size="icon" 
            className="rounded-full md:hidden" 
            onClick={toggleMenu}
            >
              <motion.div
                animate={{ rotate: isMenuOpen ? 180 : 0 }}
                transition={{ duration: 0.3 }}
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </motion.div>
          </Button>
          </motion.div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
      {isMenuOpen && (
          <motion.div 
            className="absolute top-full left-0 w-full bg-background/95 backdrop-blur-md shadow-md py-4 md:hidden"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
          <nav className="container mx-auto px-4 flex flex-col gap-4">
              {navItems.map((item, index) => (
                <motion.button 
                  key={item.id}
                  onClick={() => scrollToSection(item.id)} 
              className="py-2 text-foreground/80 hover:text-primary transition-colors text-left"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {item.label}
                </motion.button>
              ))}
          </nav>
          </motion.div>
      )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
