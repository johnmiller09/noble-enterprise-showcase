import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import equipment1 from "@/assets/equipment1.jpeg";
import equipment2 from "@/assets/equipment2.jpeg";
import equipment3 from "@/assets/equipment3.jpeg";
import equipment4 from "@/assets/equipment4.jpeg";
import equipment5 from "@/assets/equipment5.jpeg";
import equipment6 from "@/assets/equipment6.jpeg";
import equipment7 from "@/assets/equipment7.jpeg";
import equipment8 from "@/assets/equipment8.jpeg";

const equipmentData = [
  {
    id: 1,
    image: equipment1,
    title: "KF Thermometer Analysis System",
    description: "Precise moisture analysis for pharmaceutical and chemical applications",
    category: "Analytical Equipment"
  },
  {
    id: 2,
    image: equipment2,
    title: "Agilent Chromatography System",
    description: "High-performance liquid chromatography for advanced analytical workflows",
    category: "Chromatography"
  },
  {
    id: 3,
    image: equipment3,
    title: "Agilent 7683B Series Injector",
    description: "Automated injection system for enhanced analytical precision",
    category: "Injection Systems"
  },
  {
    id: 4,
    image: equipment4,
    title: "Modular Chromatography Stack",
    description: "Complete analytical solution with multiple detection capabilities",
    category: "Integrated Systems"
  },
  {
    id: 5,
    image: equipment5,
    title: "Metrohm Ion Chromatography",
    description: "Specialized system for ion analysis and water quality testing",
    category: "Ion Analysis"
  },
  {
    id: 6,
    image: equipment6,
    title: "Waters Alliance HPLC System",
    description: "Comprehensive liquid chromatography platform for research applications",
    category: "HPLC Systems"
  },
  {
    id: 7,
    image: equipment7,
    title: "Waters Acquity UPLC System",
    description: "Ultra-performance liquid chromatography for enhanced resolution",
    category: "UPLC Systems"
  },
  {
    id: 8,
    image: equipment8,
    title: "Mass Spectrometry System",
    description: "Advanced mass spectrometry for molecular analysis and identification",
    category: "Mass Spectrometry"
  }
];

const EquipmentCarousel = () => {
  return (
    <section id="equipment" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">
              Our Equipment Portfolio
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Explore our extensive collection of analytical equipment from leading manufacturers.
              We handle everything from chromatography systems to analytical instruments.
            </p>
          </div>

          {/* Carousel */}
          <div className="relative">
            <Carousel className="w-full">
              <CarouselContent className="-ml-2 md:-ml-4">
                {equipmentData.map((equipment) => (
                  <CarouselItem key={equipment.id} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                    <Card className="shadow-elegant hover-lift card-gradient">
                      <CardContent className="p-0">
                        <div className="aspect-square overflow-hidden rounded-t-lg">
                          <img
                            src={equipment.image}
                            alt={equipment.title}
                            className="w-full h-full object-cover transition-smooth hover:scale-105"
                          />
                        </div>
                        <div className="p-6">
                          <div className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full mb-3">
                            {equipment.category}
                          </div>
                          <h3 className="text-xl font-bold mb-2">{equipment.title}</h3>
                          <p className="text-muted-foreground text-sm leading-relaxed">
                            {equipment.description}
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="hidden md:flex -left-12 bg-white shadow-medium hover:shadow-premium" />
              <CarouselNext className="hidden md:flex -right-12 bg-white shadow-medium hover:shadow-premium" />
            </Carousel>
          </div>

          {/* Equipment Categories */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-primary/5 rounded-lg hover-lift">
              <h4 className="font-bold text-primary mb-2">Chromatography</h4>
              <p className="text-sm text-muted-foreground">HPLC, UPLC, GC Systems</p>
            </div>
            <div className="text-center p-6 bg-accent/5 rounded-lg hover-lift">
              <h4 className="font-bold text-accent mb-2">Spectroscopy</h4>
              <p className="text-sm text-muted-foreground">UV-Vis, IR, NMR Equipment</p>
            </div>
            <div className="text-center p-6 bg-secondary/5 rounded-lg hover-lift">
              <h4 className="font-bold text-secondary mb-2">Mass Spectrometry</h4>
              <p className="text-sm text-muted-foreground">LC-MS, GC-MS Systems</p>
            </div>
            <div className="text-center p-6 bg-success/5 rounded-lg hover-lift">
              <h4 className="font-bold text-success mb-2">Microscopy</h4>
              <p className="text-sm text-muted-foreground">Electron & Optical</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EquipmentCarousel;