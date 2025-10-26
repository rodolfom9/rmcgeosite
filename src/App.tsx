import { ThemeProvider } from "@/components/ThemeProvider";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import Footer from "@/components/Footer";
import { HashRouter, Routes, Route } from "react-router-dom";
import RmcgeoDemo from "@/pages/RmcgeoDemo";
import RmcgeoleiteDemo from "@/pages/RmcgeoleiteDemo";
import EngcartagriDemo from "@/pages/EngcartagriDemo";

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
              </>
            } />
            <Route path="/rmcgeo" element={<RmcgeoDemo />} />
            <Route path="/rmcgeoleite" element={<RmcgeoleiteDemo />} />
            <Route path="/engcartagri" element={<EngcartagriDemo />} />
          </Routes>
          <Footer />
        </div>
      </HashRouter>
    </ThemeProvider>
  );
}

export default App;
