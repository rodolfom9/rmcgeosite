
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ProjectsSection from "@/components/ProjectsSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";

/**
 * Index Component
 * 
 * Main page component that structures the entire homepage
 * Contains all major sections of the website within a theme provider
 */
const Index = () => {
  return (
    <ThemeProvider defaultTheme="dark">
      {/* Main container with flex layout */}
      <div className="min-h-screen flex flex-col">
        {/* Navigation header */}
        <Header />
        
        {/* Main content sections */}
        <main>
          {/* Hero section with map background */}
          <HeroSection />
          
          {/* Project showcase section */}
          <ProjectsSection />
          
          {/* About section with skills and expertise */}
          <AboutSection />
          
          {/* Contact form section */}
          <ContactSection />
        </main>
        
        {/* Page footer with links */}
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default Index;
