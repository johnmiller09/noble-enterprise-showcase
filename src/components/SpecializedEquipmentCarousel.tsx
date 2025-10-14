import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import equipment18 from "@/assets/equipment18.jpeg";
import equipment19 from "@/assets/equipment19.jpeg";
import equipment20 from "@/assets/equipment20.jpeg";
import equipment21 from "@/assets/equipment21.jpeg";
import equipment22 from "@/assets/equipment22.jpeg";
import equipment23 from "@/assets/equipment23.jpeg";
import equipment24 from "@/assets/equipment24.jpeg";
import equipment25 from "@/assets/equipment25.jpeg";
import equipment26 from "@/assets/equipment26.jpeg";
import equipment27 from "@/assets/equipment27.jpeg";

const specializedEquipmentData = [
  {
    id: 1,
    image: equipment18,
    title: "Automated Sample Processing System",
    description: "Advanced autosampler with integrated temperature control for precise sample handling",
    category: "Automation Systems"
  },
  {
    id: 2,
    image: equipment19,
    title: "TOC-V Analyzer",
    description: "Shimadzu Total Organic Carbon analyzer for water quality testing",
    category: "Water Analysis"
  },
  {
    id: 3,
    image: equipment20,
    title: "Advanced Thermal Module",
    description: "Precision temperature control module with dual cooling fans",
    category: "Thermal Systems"
  },
  {
    id: 4,
    image: equipment21,
    title: "Agilent 1260 Infinity Detector",
    description: "High-performance detector module for HPLC applications",
    category: "HPLC Detectors"
  },
  {
    id: 5,
    image: equipment22,
    title: "Mettler Toledo SevenExcellence",
    description: "Multi-parameter meter with printer for comprehensive water analysis",
    category: "pH & Conductivity"
  },
  {
    id: 6,
    image: equipment23,
    title: "Agilent 1200 Series Module",
    description: "Complete HPLC module from Agilent 1200 series chromatography system",
    category: "HPLC Systems"
  },
  {
    id: 7,
    image: equipment24,
    title: "UV-Vis Detector Module",
    description: "Precision optical detector with integrated lamp assembly",
    category: "Detection Systems"
  },
  {
    id: 8,
    image: equipment25,
    title: "Multi-Port Valve Assembly",
    description: "Professional-grade switching valves for flow control applications",
    category: "Valve Components"
  },
  {
    id: 9,
    image: equipment26,
    title: "Control Panel Interface",
    description: "Complete operator interface with keypad and display module",
    category: "Control Systems"
  },
  {
    id: 10,
    image: equipment27,
    title: "Industrial Cooling Platform",
    description: "Heavy-duty cooling unit with dual-fan design for temperature-sensitive equipment",
    category: "Cooling Systems"
  },
];

const SpecializedEquipmentCarousel = () => {
  return (
    <section id="specialized-equipment" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">
              Specialized Equipment & Components
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Premium analytical modules, detectors, and specialized components from leading manufacturers.
              Professional-grade equipment for advanced laboratory applications.
            </p>
          </div>

          {/* Carousel */}
          <div className="relative">
            <Carousel className="w-full">
              <CarouselContent className="-ml-2 md:-ml-4">
                {specializedEquipmentData.map((equipment) => (
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
                          <div className="inline-block px-3 py-1 bg-accent/10 text-accent text-sm font-medium rounded-full mb-3">
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
        </div>
      </div>
    </section>
  );
};

export default SpecializedEquipmentCarousel;
