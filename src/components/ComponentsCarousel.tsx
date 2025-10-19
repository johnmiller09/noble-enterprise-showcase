import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import equipment9 from "@/assets/equipment9.jpeg";
import equipment10 from "@/assets/equipment10.jpeg";
import equipment11 from "@/assets/equipment11.jpeg";
import equipment12 from "@/assets/equipment12.jpeg";
import equipment13 from "@/assets/equipment13.jpeg";
import equipment14 from "@/assets/equipment14.jpeg";
import equipment17 from "@/assets/equipment17.jpeg";
import equipment33 from "@/assets/equipment33.jpeg";

const componentsData = [
  {
    id: 1,
    image: equipment9,
    title: "Waters 4-Way Valve Assembly",
    description: "High-precision valve for flow path control in HPLC systems",
    category: "Valves"
  },
  {
    id: 2,
    image: equipment10,
    title: "Agilent MCG Valve Assembly",
    description: "Premium valve assembly for chromatography applications",
    category: "Valves"
  },
  {
    id: 3,
    image: equipment17,
    title: "Rheodyne Valve Kit",
    description: "Professional-grade valve assemblies with complete documentation",
    category: "Valves"
  },
  {
    id: 4,
    image: equipment11,
    title: "Thermal Management System",
    description: "Advanced cooling system for temperature-sensitive analytical equipment",
    category: "Cooling"
  },
  {
    id: 5,
    image: equipment12,
    title: "Main Control Board",
    description: "Central processing board for analytical instrument control",
    category: "Electronics"
  },
  {
    id: 6,
    image: equipment13,
    title: "Power Distribution Board",
    description: "High-capacity power circuit board with advanced regulation",
    category: "Electronics"
  },
  {
    id: 7,
    image: equipment14,
    title: "Signal Processing Board",
    description: "Precision control circuit for analytical data processing",
    category: "Electronics"
  },
  {
    id: 8,
    image: equipment33,
    title: "Advanced Control PCB",
    description: "High-density circuit board with integrated processors and memory modules",
    category: "Electronics"
  }
];

const ComponentsCarousel = () => {
  return (
    <section id="components" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">
              Components & Spare Parts
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Valves, circuit boards, cooling systems, and specialized components for analytical instruments
            </p>
          </div>

          <div className="relative">
            <Carousel className="w-full">
              <CarouselContent className="-ml-2 md:-ml-4">
                {componentsData.map((equipment) => (
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
                          <div className="inline-block px-3 py-1 bg-secondary/10 text-secondary text-sm font-medium rounded-full mb-3">
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

export default ComponentsCarousel;
