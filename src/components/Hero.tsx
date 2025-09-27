import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle } from "lucide-react";
import heroEquipment from "@/assets/hero-equipment.jpg";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToEquipment = () => {
    const element = document.getElementById('equipment');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 hero-gradient"></div>
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `url(${heroEquipment})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      ></div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            Premium Analytical
            <span className="block text-accent-light">Equipment Trading</span>
          </h1>

          <p className="text-xl md:text-2xl mb-8 text-white/90 animate-fade-in max-w-3xl mx-auto">
            We purchase analytical equipment including chromatography analyzers, photometric analyzers,
            and electron microscopes. From used to broken items - we handle everything from
            manufacturing sites to research laboratories.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
            <a
              href="https://wa.me/9100623882"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="lg" className="group shadow-glow hover-lift bg-white text-primary hover:bg-white/90">
                <MessageCircle className="mr-2 h-5 w-5" />
                Get Quote via WhatsApp
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-smooth" />
              </Button>
            </a>

            <Button
              size="lg"
              variant="outline"
              onClick={scrollToEquipment}
              className="group border-white text-white hover:bg-white hover:text-primary transition-smooth bg-white/10 backdrop-blur-sm"
            >
              View Equipment
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-smooth" />
            </Button>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-accent-light">2+</div>
              <div className="text-white/80">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent-light">1000+</div>
              <div className="text-white/80">Equipment Handled</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent-light">24/7</div>
              <div className="text-white/80">Support Available</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;