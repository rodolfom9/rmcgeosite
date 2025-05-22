import { ThemeProvider } from "@/components/ThemeProvider";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import { HashRouter, Routes, Route } from "react-router-dom";
import Rmcgeo2Demo from "@/pages/Rmcgeo2Demo";
import RmcgeoleiteDemo from "@/pages/RmcgeoleiteDemo";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <HashRouter>
        <div className="relative min-h-screen bg-background font-sans antialiased">
          <Header />
          <Routes>
            <Route path="/" element={
              <>
                <HeroSection />
                <AboutSection />
                <ProjectsSection />
                <ContactSection />
              </>
            } />
            <Route path="/rmcgeo2" element={<Rmcgeo2Demo />} />
            <Route path="/rmcgeoleite" element={<RmcgeoleiteDemo />} />
          </Routes>
          <Footer />
        </div>
      </HashRouter>
    </ThemeProvider>
  );
}

export default App;
