import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Globe, Shield, Star } from "lucide-react";
import proprietorImage from "@/assets/proprietor.jpeg";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">
              About Noble Enterprises
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We are a specialized trading company with years of expertise in analytical chemistry, biological, and environmental laboratory equipment. At Noble Enterprises, we serve as a vital bridge connecting labs that have outgrown their instruments with researchers who need them most. Our passion lies in rescuing valuable scientific equipment from obsolescence and placing it where it can continue advancing discovery. Through this meaningful circulation of laboratory assets, we create both economic value for our clients and environmental benefit for our planet - transforming what might be considered waste into scientific opportunity.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Proprietor Section */}
            <div className="order-2 lg:order-1">
              <Card className="card-gradient shadow-premium hover-lift">
                <CardContent className="p-8">
                  <div className="flex flex-col md:flex-row items-center gap-6">
                    <div className="flex-shrink-0">
                      <img
                        src={proprietorImage}
                        alt="Proprietor of Noble Enterprises"
                        className="w-32 h-32 md:w-40 md:h-40 rounded-xl object-cover shadow-medium"
                      />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold mb-2">Our Leadership</h3>
                      <p className="text-muted-foreground mb-4">
                        Driven by fresh energy and guided by solid expertise in analytical instrumentation, our team brings 2+ years of hands-on experience in, smart procurement.
                      </p>
                      <p className="text-muted-foreground">
                        We understand the critical role of analytical equipment in research, quality control,
                        and manufacturing processes. Our commitment is to provide reliable solutions that
                        meet your laboratory's specific requirements.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Company Info */}
            <div className="order-1 lg:order-2">
              <h3 className="text-3xl font-bold mb-6">Our Business Philosophy</h3>
              <p className="text-lg text-muted-foreground mb-6">
                We are a trading company based in Telangana, India
                that specialized in the sale of used pharmaceutical, analytical chemistry, biological and environmental laboratory equipment.

                I personally oversee our national marketing department.
                Please be aware that all of our instruments are un-refurbished. Given our company's business model, we do not employ engineers, which means we cannot provide refurbished instruments with test report However, I can assure you of the quality of our instruments. They are in excellent condition, accurately described, and were functioning properly before they were retired without any known issues.

                We hope that your company has your own engineers (or engineers of third-party) who can calibrate instruments for you.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-success mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">Comprehensive Equipment Range</h4>
                    <p className="text-muted-foreground">
                      Chromatography analyzers, photometric analyzers, electron microscopes,
                      and physicochemical equipment from leading manufacturers.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Globe className="w-6 h-6 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">National Network</h4>
                    <p className="text-muted-foreground">
                      Partnerships with domestic manufacturers,
                      ensuring access to the latest technology and competitive pricing.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Shield className="w-6 h-6 text-accent mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">Quality Assurance</h4>
                    <p className="text-muted-foreground">
                      Thorough inspection of all equipment to ensure
                      reliability and performance standards.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <Card className="text-center shadow-elegant hover-lift">
              <CardContent className="p-6">
                <Star className="w-8 h-8 text-primary mx-auto mb-2" />
                <div className="text-2xl font-bold text-primary">2+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </CardContent>
            </Card>

            <Card className="text-center shadow-elegant hover-lift">
              <CardContent className="p-6">
                <Globe className="w-8 h-8 text-accent mx-auto mb-2" />
                <div className="text-2xl font-bold text-accent">500+</div>
                <div className="text-sm text-muted-foreground">National Partners</div>
              </CardContent>
            </Card>

            <Card className="text-center shadow-elegant hover-lift">
              <CardContent className="p-6">
                <CheckCircle className="w-8 h-8 text-success mx-auto mb-2" />
                <div className="text-2xl font-bold text-success">1000+</div>
                <div className="text-sm text-muted-foreground">Equipment Handled</div>
              </CardContent>
            </Card>

            <Card className="text-center shadow-elegant hover-lift">
              <CardContent className="p-6">
                <Shield className="w-8 h-8 text-warning mx-auto mb-2" />
                <div className="text-2xl font-bold text-warning">100%</div>
                <div className="text-sm text-muted-foreground">Quality Guaranteed</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;