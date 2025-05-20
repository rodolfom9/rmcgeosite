
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HashRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

/**
 * Creates a new instance of QueryClient for data fetching
 * This manages all the query caching, invalidation, and state
 */
const queryClient = new QueryClient();

/**
 * App Component
 * 
 * Root component of the application that sets up:
 * - React Query for data fetching
 * - Toast notifications systems
 * - Tooltip context provider
 * - Router and route configuration
 */
const App = () => (
  <QueryClientProvider client={queryClient}>
    {/* TooltipProvider for managing tooltips across the app */}
    <TooltipProvider>
      {/* Toaster components for displaying notifications */}
      <Toaster />
      <Sonner />
      
      {/* HashRouter for client-side routing (works well with GitHub Pages) */}
      <HashRouter>
        <Routes>
          {/* Main route pointing to the Index page */}
          <Route path="/" element={<Index />} />
          
          {/* Catch-all route for handling 404 errors */}
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </HashRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
