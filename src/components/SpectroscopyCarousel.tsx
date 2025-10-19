import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import equipment1 from "@/assets/equipment1.jpeg";
import equipment3 from "@/assets/equipment3.jpeg";
import equipment5 from "@/assets/equipment5.jpeg";
import equipment8 from "@/assets/equipment8.jpeg";
import equipment16 from "@/assets/equipment16.jpeg";
import equipment23 from "@/assets/equipment23.jpeg";
import equipment24 from "@/assets/equipment24.jpeg";
import equipment25 from "@/assets/equipment25.jpeg";
import equipment26 from "@/assets/equipment26.jpeg";
import equipment27 from "@/assets/equipment27.jpeg";
import equipment29 from "@/assets/equipment29.jpeg";
import equipment30 from "@/assets/equipment30.jpeg";
import equipment32 from "@/assets/equipment32.jpeg";

const spectroscopyData = [
  {
    id: 1,
    image: equipment1,
    title: "KF Thermometer Analysis System",
    description: "Precise moisture analysis for pharmaceutical and chemical applications",
    category: "Karl Fischer"
  },
  {
    id: 2,
    image: equipment30,
    title: "UV-VIS Spectrophotometer",
    description: "UV-1700 series precision spectrophotometer for optical analysis",
    category: "UV-VIS"
  },
  {
    id: 3,
    image: equipment32,
    title: "UV Spectrophotometer",
    description: "LabIndia UV 3092 spectrophotometer for UV/VIS measurements",
    category: "UV-VIS"
  },
  {
    id: 4,
    image: equipment29,
    title: "Agilent Fluorescence Detector",
    description: "1200 Series fluorescence detection system for sensitive analysis",
    category: "Fluorescence"
  },
  {
    id: 5,
    image: equipment8,
    title: "Mass Spectrometry System",
    description: "Advanced mass spectrometry for molecular analysis and identification",
    category: "Mass Spec"
  },
  {
    id: 6,
    image: equipment5,
    title: "Metrohm Ion Chromatography",
    description: "Specialized system for ion analysis and water quality testing",
    category: "Ion Analysis"
  },
  {
    id: 7,
    image: equipment3,
    title: "Agilent 7683B Series Injector",
    description: "Automated injection system for enhanced analytical precision",
    category: "Injection Systems"
  },
  {
    id: 8,
    image: equipment16,
    title: "Precision Injection Module",
    description: "High-precision mechanical injection system with stepper motor control",
    category: "Injection Systems"
  },
  {
    id: 9,
    image: equipment23,
    title: "Chromatography Detector Module",
    description: "Advanced detection module for analytical instrumentation",
    category: "Detectors"
  },
  {
    id: 10,
    image: equipment24,
    title: "Analytical Detection System",
    description: "High-sensitivity detector for chromatography applications",
    category: "Detectors"
  },
  {
    id: 11,
    image: equipment25,
    title: "Precision Optical Module",
    description: "Optical detection system with enhanced signal processing",
    category: "Optical Systems"
  },
  {
    id: 12,
    image: equipment26,
    title: "Multi-Channel Detector",
    description: "Advanced multi-wavelength detection system",
    category: "Detectors"
  },
  {
    id: 13,
    image: equipment27,
    title: "Flow Analysis Module",
    description: "Precision flow control and detection module",
    category: "Flow Systems"
  }
];

const SpectroscopyCarousel = () => {
  return (
    <section id="spectroscopy" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">
              Spectroscopy & Detection Equipment
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              UV-VIS spectrophotometers, mass spectrometry, and advanced detection systems for precise analysis
            </p>
          </div>

          <div className="relative">
            <Carousel className="w-full">
              <CarouselContent className="-ml-2 md:-ml-4">
                {spectroscopyData.map((equipment) => (
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
              <CarouselPrevious className="bg-white shadow-medium hover:shadow-premium" />
              <CarouselNext className="bg-white shadow-medium hover:shadow-premium" />
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpectroscopyCarousel;
