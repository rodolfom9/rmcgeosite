import { useState } from "react";
import { Github, Mail, User, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";

const ContactSection = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // This is a mock submission - in a real app, you would send this to your backend
    setTimeout(() => {
      toast.success("Mensagem enviada com sucesso!");
      setName("");
      setEmail("");
      setMessage("");
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section id="contact" className="py-24 relative">
      {/* Grid Background */}
      <div className="absolute inset-0 bg-grid-pattern bg-[size:40px_40px] opacity-5" 
        style={{ backgroundImage: 'linear-gradient(rgba(155, 135, 245, 0.15) 1px, transparent 1px), linear-gradient(to right, rgba(155, 135, 245, 0.15) 1px, transparent 1px)' }}
      />
      
      {/* Gradient Blobs */}
      <motion.div 
        className="absolute top-1/4 right-0 w-96 h-96 bg-[#FFEB3B]/10 rounded-full filter blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div 
        className="absolute bottom-0 left-0 w-96 h-96 bg-[#4CAF50]/10 rounded-full filter blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.5, 0.3, 0.5],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            <span className="bg-gradient-to-r from-[#4CAF50] to-[#FFEB3B] bg-clip-text text-transparent">
              Contato
            </span>
          </h2>
          <p className="text-foreground/70 max-w-2xl mx-auto text-lg">
            Tem interesse em trabalharmos juntos ou gostaria de saber mais sobre meus projetos?
            Entre em contato!
          </p>
        </motion.div>
        
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div 
            className="md:col-span-1 space-y-4"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="p-6 backdrop-blur-sm bg-background/50 border border-primary/10 hover:border-primary/30 transition-all duration-300 group">
              <div className="flex items-center gap-4">
                <div className="bg-primary/10 p-3 rounded-full group-hover:bg-primary/20 transition-colors duration-300">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold group-hover:text-primary transition-colors duration-300">Email</h3>
                  <p className="text-foreground/70 text-sm">contato@exemplo.com</p>
                </div>
              </div>
            </Card>
            
            <Card className="p-6 backdrop-blur-sm bg-background/50 border border-primary/10 hover:border-primary/30 transition-all duration-300 group">
              <div className="flex items-center gap-4">
                <div className="bg-primary/10 p-3 rounded-full group-hover:bg-primary/20 transition-colors duration-300">
                  <Github className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold group-hover:text-primary transition-colors duration-300">GitHub</h3>
                  <p className="text-foreground/70 text-sm">github.com/username</p>
                </div>
              </div>
            </Card>
          </motion.div>
          
          <motion.form 
            onSubmit={handleSubmit} 
            className="md:col-span-2 space-y-4"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-1">
                Nome
              </label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <User className="h-4 w-4 text-foreground/50 group-focus-within:text-primary transition-colors duration-300" />
                </div>
                <Input
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Seu nome"
                  className="pl-10 transition-all duration-300 focus:border-primary/50 focus:ring-primary/20"
                  required
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-1">
                Email
              </label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <Mail className="h-4 w-4 text-foreground/50 group-focus-within:text-primary transition-colors duration-300" />
                </div>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="seu.email@exemplo.com"
                  className="pl-10 transition-all duration-300 focus:border-primary/50 focus:ring-primary/20"
                  required
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-1">
                Mensagem
              </label>
              <Textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Sua mensagem"
                className="min-h-[120px] transition-all duration-300 focus:border-primary/50 focus:ring-primary/20"
                required
              />
            </div>
            
            <Button 
              type="submit" 
              className="w-full bg-primary hover:bg-primary/90 group"
              disabled={isSubmitting}
            >
              <span className="flex items-center gap-2">
                {isSubmitting ? "Enviando..." : "Enviar Mensagem"}
                <Send className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
            </Button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
