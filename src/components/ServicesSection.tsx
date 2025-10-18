import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  ShoppingCart,
  Wrench,
  Search,
  Truck,
  Shield,
  MessageCircle,
  CheckCircle,
  Globe
} from "lucide-react";

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">
              Our Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive analytical equipment solutions from purchase to delivery.
              We handle all your laboratory instrumentation needs.
            </p>
          </div>

          {/* Main Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <Card className="shadow-elegant hover-lift card-gradient">
              <CardHeader>
                <ShoppingCart className="w-12 h-12 text-primary mb-4" />
                <CardTitle className="text-xl">Equipment Purchase</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  We purchase analytical equipment in all conditions - from pristine used instruments
                  to items requiring refurbishment. Get competitive quotes instantly.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-success" />
                    <span>Used equipment evaluation</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-success" />
                    <span>Broken equipment purchase</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-success" />
                    <span>Fair market pricing</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="shadow-elegant hover-lift card-gradient">
              <CardHeader>
                <Search className="w-12 h-12 text-accent mb-4" />
                <CardTitle className="text-xl">Equipment Sourcing</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Looking for specific analytical equipment? We leverage our National network
                  to source the exact instruments your laboratory needs.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-success" />
                    <span>National sourcing network</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-success" />
                    <span>Custom specifications</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-success" />
                    <span>Competitive pricing</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* <Card className="shadow-elegant hover-lift card-gradient">
              {/* <CardHeader>
                <Wrench className="w-12 h-12 text-secondary mb-4" />
                <CardTitle className="text-xl">Technical Evaluation</CardTitle>
              </CardHeader> */}
            {/* <CardContent>
                <p className="text-muted-foreground mb-4">
                  Professional assessment of equipment condition, functionality, and market value.
                  We provide detailed technical reports for informed decisions.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-success" />
                    <span>Performance testing</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-success" />
                    <span>Condition assessment</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-success" />
                    <span>Market valuation</span>
                  </li>
                </ul>
              </CardContent>
            </Card> */}

            <Card className="shadow-elegant hover-lift card-gradient">
              <CardHeader>
                <Truck className="w-12 h-12 text-warning mb-4" />
                <CardTitle className="text-xl">Logistics & Delivery</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Safe and secure transportation of sensitive analytical equipment with
                  specialized handling and insurance coverage.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-success" />
                    <span>Specialized packaging</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-success" />
                    <span>Insured transportation</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-success" />
                    <span>Installation support</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="shadow-elegant hover-lift card-gradient">
              <CardHeader>
                <Shield className="w-12 h-12 text-success mb-4" />
                <CardTitle className="text-xl">Quality Assurance</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Rigorous quality control processes ensure every piece of equipment meets
                  our high standards before reaching your laboratory.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-success" />
                    <span>Multi-point inspection</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-success" />
                    <span>Performance verification</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-success" />
                    <span>Documentation review</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="shadow-elegant hover-lift card-gradient">
              <CardHeader>
                <Globe className="w-12 h-12 text-primary mb-4" />
                <CardTitle className="text-xl">National Network</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Access to national markets and manufacturers ensures competitive
                  pricing and availability of the latest analytical technologies.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-success" />
                    <span>National partnerships</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-success" />
                    <span>Latest technology access</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-success" />
                    <span>Competitive pricing</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Call to Action */}
          <div className="text-center bg-gradient-to-r from-primary to-accent rounded-2xl p-8 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Work With Us?
            </h3>
            <p className="text-lg mb-6 text-white/90">
              Contact us today for a free consultation and quote on your analytical equipment needs — whether you’re looking to purchase or sell
            </p>
            <a
              href="https://wa.link/peirzq"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="lg" className="bg-white text-primary hover:bg-white/90 shadow-glow">
                <MessageCircle className="mr-2 h-5 w-5" />
                Start Conversation
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;