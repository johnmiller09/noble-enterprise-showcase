import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  MessageCircle,
  Send
} from "lucide-react";

const ContactSection = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted');
  };

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">
              Contact Us
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Get in touch with our team for any inquiries. We're here to help with all your analytical needs.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-6">Get In Touch</h3>
                <p className="text-muted-foreground mb-6">
                  Please feel free to contact us regarding the sale of analytical equipment such as
                  chromatography analyzers, photometric analyzers, and electron microscopes.
                  We purchase everything from used to broken items.

                </p>
              </div>

              <div className="space-y-6">
                <Card className="shadow-elegant hover-lift">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <MapPin className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold mb-2">Office Address</h4>
                        <p className="text-muted-foreground">
                          Part 312 South Side Portion<br />
                          S.V.C.I.E Jeedimetla<br />
                          Hyderabad, Telangana 500055<br />
                          India
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="shadow-elegant hover-lift">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <Phone className="w-6 h-6 text-accent mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold mb-2">Phone Numbers</h4>
                        <div className="space-y-1 text-muted-foreground">
                          <p>Primary: +91 9100623882</p>
                          <p>Secondary: +91 7303567235</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="shadow-elegant hover-lift">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <Mail className="w-6 h-6 text-secondary mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold mb-2">Email & Website</h4>
                        <div className="space-y-1 text-muted-foreground">
                          <p>yusuf@thenobleenterprises.com</p>
                          <p>www.thenobleenterprises.com</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="shadow-elegant hover-lift">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <Clock className="w-6 h-6 text-success mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold mb-2">Business Hours</h4>
                        <div className="space-y-1 text-muted-foreground">
                          <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                          <p>Saturday: 9:00 AM - 6:00 PM</p>
                          <p>Sunday: Closed</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* WhatsApp CTA */}
              <Card className="bg-gradient-to-r from-success to-accent text-white shadow-glow">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <MessageCircle className="w-8 h-8 flex-shrink-0" />
                    <div className="flex-1">
                      <h4 className="font-semibold mb-1">Instant Response via WhatsApp</h4>
                      <p className="text-white/90 text-sm">
                        Get immediate assistance for urgent equipment needs
                      </p>
                    </div>
                    <a
                      href="https://wa.me/9100623882"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button className="bg-white text-success hover:bg-white/90">
                        Chat Now
                      </Button>
                    </a>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <div>
              <Card className="shadow-premium card-gradient">
                <CardHeader>
                  <CardTitle className="text-2xl">Send us a Message</CardTitle>
                  <p className="text-muted-foreground">
                    Fill out the form below and we'll get back to you within 24 hours.
                  </p>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="firstName" className="block text-sm font-medium mb-2">
                          First Name *
                        </label>
                        <Input
                          id="firstName"
                          placeholder="Enter your first name"
                          required
                          className="transition-smooth focus:shadow-medium"
                        />
                      </div>
                      <div>
                        <label htmlFor="lastName" className="block text-sm font-medium mb-2">
                          Last Name *
                        </label>
                        <Input
                          id="lastName"
                          placeholder="Enter your last name"
                          required
                          className="transition-smooth focus:shadow-medium"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">
                        Email Address *
                      </label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="Enter your email"
                        required
                        className="transition-smooth focus:shadow-medium"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium mb-2">
                        Phone Number
                      </label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="Enter your phone number"
                        className="transition-smooth focus:shadow-medium"
                      />
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium mb-2">
                        Subject *
                      </label>
                      <Input
                        id="subject"
                        placeholder="Equipment inquiry, quote request, etc."
                        required
                        className="transition-smooth focus:shadow-medium"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium mb-2">
                        Message *
                      </label>
                      <Textarea
                        id="message"
                        placeholder="Please describe your equipment needs, condition, specifications, or any other relevant details..."
                        rows={6}
                        required
                        className="transition-smooth focus:shadow-medium"
                      />
                    </div>

                    <Button type="submit" className="w-full hover-lift shadow-elegant">
                      <Send className="mr-2 h-4 w-4" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;