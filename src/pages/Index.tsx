import Header from "@/components/Header";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import ChromatographyCarousel from "@/components/ChromatographyCarousel";
import SpectroscopyCarousel from "@/components/SpectroscopyCarousel";
import ComponentsCarousel from "@/components/ComponentsCarousel";
import ServicesSection from "@/components/ServicesSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <AboutSection />
        <ChromatographyCarousel />
        <SpectroscopyCarousel />
        <ComponentsCarousel />
        <ServicesSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
