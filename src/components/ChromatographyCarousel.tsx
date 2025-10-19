import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import equipment2 from "@/assets/equipment2.jpeg";
import equipment4 from "@/assets/equipment4.jpeg";
import equipment6 from "@/assets/equipment6.jpeg";
import equipment7 from "@/assets/equipment7.jpeg";
import equipment15 from "@/assets/equipment15.jpeg";
import equipment18 from "@/assets/equipment18.jpeg";
import equipment19 from "@/assets/equipment19.jpeg";
import equipment20 from "@/assets/equipment20.jpeg";
import equipment21 from "@/assets/equipment21.jpeg";
import equipment22 from "@/assets/equipment22.jpeg";
import equipment28 from "@/assets/equipment28.jpeg";
import equipment31 from "@/assets/equipment31.jpeg";
import equipment34 from "@/assets/equipment34.jpeg";

const chromatographyData = [
  {
    id: 1,
    image: equipment2,
    title: "Agilent Chromatography System",
    description: "High-performance liquid chromatography for advanced analytical workflows",
    category: "HPLC"
  },
  {
    id: 2,
    image: equipment28,
    title: "LC Chromatography Systems",
    description: "Dual LC-2010C HT systems for high-throughput liquid chromatography analysis",
    category: "HPLC"
  },
  {
    id: 3,
    image: equipment31,
    title: "Waters Alliance HPLC Systems",
    description: "Professional-grade Alliance HPLC platforms for comprehensive analytical solutions",
    category: "HPLC"
  },
  {
    id: 4,
    image: equipment6,
    title: "Waters Alliance HPLC System",
    description: "Comprehensive liquid chromatography platform for research applications",
    category: "HPLC"
  },
  {
    id: 5,
    image: equipment7,
    title: "Waters Acquity UPLC System",
    description: "Ultra-performance liquid chromatography for enhanced resolution",
    category: "UPLC"
  },
  {
    id: 6,
    image: equipment15,
    title: "Waters Acquity UPLC Modules",
    description: "Dual FLR detector modules for enhanced analytical performance",
    category: "UPLC"
  },
  {
    id: 7,
    image: equipment34,
    title: "Automated Analysis System",
    description: "High-throughput automated analytical equipment for batch processing",
    category: "Automated Systems"
  },
  {
    id: 8,
    image: equipment4,
    title: "Modular Chromatography Stack",
    description: "Complete analytical solution with multiple detection capabilities",
    category: "Integrated Systems"
  },
  {
    id: 9,
    image: equipment18,
    title: "Chromatography Module Assembly",
    description: "Precision analytical module with advanced detection capabilities",
    category: "HPLC Modules"
  },
  {
    id: 10,
    image: equipment19,
    title: "Dual HPLC Configuration",
    description: "High-capacity dual system setup for parallel analytical workflows",
    category: "HPLC Systems"
  },
  {
    id: 11,
    image: equipment20,
    title: "Integrated LC System",
    description: "Complete liquid chromatography solution with multiple detectors",
    category: "LC Systems"
  },
  {
    id: 12,
    image: equipment21,
    title: "Advanced HPLC Platform",
    description: "State-of-the-art HPLC system for complex analytical requirements",
    category: "HPLC"
  },
  {
    id: 13,
    image: equipment22,
    title: "Modular LC Configuration",
    description: "Flexible liquid chromatography setup for diverse applications",
    category: "LC Systems"
  }
];

const ChromatographyCarousel = () => {
  return (
    <section id="chromatography" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">
              Chromatography Systems
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Advanced HPLC, UPLC, and LC systems from leading manufacturers including Waters and Agilent
            </p>
          </div>

          <div className="relative">
            <Carousel className="w-full">
              <CarouselContent className="-ml-2 md:-ml-4">
                {chromatographyData.map((equipment) => (
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
              <CarouselPrevious className="bg-white shadow-medium hover:shadow-premium" />
              <CarouselNext className="bg-white shadow-medium hover:shadow-premium" />
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChromatographyCarousel;
