import { Github, Mail, ArrowUp } from "lucide-react";
import { motion } from "framer-motion";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navItems = [
    { id: 'home', label: 'Início' },
    { id: 'projects', label: 'Projetos' },
    { id: 'about', label: 'Sobre' },
    { id: 'contact', label: 'Contato' }
  ];
  
  return (
    <footer className="py-12 border-t border-primary/10 bg-background relative overflow-hidden">
      {/* Decorative Elements */}
      <motion.div 
        className="absolute inset-0 bg-grid-pattern opacity-5"
        style={{
          backgroundSize: '40px 40px',
          backgroundImage: 'linear-gradient(rgba(76, 175, 80, 0.15) 1px, transparent 1px), linear-gradient(to right, rgba(76, 175, 80, 0.15) 1px, transparent 1px)'
        }}
      />
      
      <div className="container mx-auto px-4 relative">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <motion.div 
            className="text-center md:text-left"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.div 
              className="text-2xl font-display font-semibold bg-gradient-to-r from-[#4CAF50] to-[#FFEB3B] bg-clip-text text-transparent"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              RMCGEO
            </motion.div>
            <p className="text-sm text-foreground/60 mt-1">
              © {currentYear} · Todos os direitos reservados
            </p>
          </motion.div>
          
          <motion.div 
            className="flex flex-wrap justify-center gap-6 md:gap-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {navItems.map((item, index) => (
              <motion.a 
                key={item.id}
                href={`#${item.id}`}
                className="text-foreground/70 hover:text-primary transition-colors relative group"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth' });
                }}
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
              </motion.a>
            ))}
          </motion.div>
          
          <motion.div 
            className="flex items-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <motion.a 
              href="https://github.com/rodolfom9" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors"
              aria-label="GitHub"
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Github size={18} />
            </motion.a>
            <motion.a 
              href="mailto:contato@exemplo.com"
              className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors"
              aria-label="Email"
              whileHover={{ scale: 1.1, rotate: -5 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Mail size={18} />
            </motion.a>
            <motion.button
              onClick={scrollToTop}
              className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors"
              aria-label="Voltar ao topo"
              whileHover={{ scale: 1.1, y: -2 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <ArrowUp size={18} />
            </motion.button>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
