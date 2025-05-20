
// Importação dos componentes de UI e provedores necessários
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HashRouter, Routes, Route } from "react-router-dom";

// Importação das páginas da aplicação
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

// Criando um cliente QueryClient para gerenciar estados e requisições
const queryClient = new QueryClient();

/**
 * Componente App - Componente raiz da aplicação
 * 
 * Configurações:
 * - QueryClientProvider: Gerenciamento de estados e requisições
 * - TooltipProvider: Fornece funcionalidade para tooltips
 * - HashRouter: Navegação baseada em hash para compatibilidade
 * - Toasters: Componentes para exibição de notificações
 */
const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <HashRouter>
        <Routes>
          {/* Rota principal que mostra a página inicial */}
          <Route path="/" element={<Index />} />
          {/* ADICIONE ROTAS PERSONALIZADAS ACIMA DA ROTA "*" DE CAPTURA */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </HashRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
