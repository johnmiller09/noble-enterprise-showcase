import { Separator } from "@/components/ui/separator";
import {
  MapPin,
  Phone,
  Mail,
  Globe,
  MessageCircle
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold mb-4 text-white">Noble Enterprises</h3>
            <p className="text-secondary-foreground/80 mb-6 max-w-md">
              Your trusted partner in analytical equipment trading. We specialize in purchasing
              and selling chromatography analyzers, photometric analyzers, electron microscopes,
              and physicochemical equipment from laboratories Nationwide.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="https://wa.link/peirzq"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-success text-white rounded-lg hover:bg-success/90 transition-smooth"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp
              </a>
              <a
                href="mailto:yusuf@thenobleenterprises.com"
                className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-smooth"
              >
                <Mail className="w-4 h-4" />
                Email Us
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-secondary-foreground/80 hover:text-white transition-smooth"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-secondary-foreground/80 hover:text-white transition-smooth"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById('equipment')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-secondary-foreground/80 hover:text-white transition-smooth"
                >
                  Equipment
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-secondary-foreground/80 hover:text-white transition-smooth"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-secondary-foreground/80 hover:text-white transition-smooth"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Contact Information</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                <div className="text-sm text-secondary-foreground/80">
                  Plot No. 115 Part 312 South Side Portion<br />
                  S.V.C.I.E Jeedimetla<br />
                  Hyderabad, Telangana 500055
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-accent flex-shrink-0" />
                <div className="text-sm text-secondary-foreground/80">
                  <div>+91 9100085944</div>
                  <div>+91 7303567235</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-accent flex-shrink-0" />
                <div className="text-sm text-secondary-foreground/80">
                  yusuf@thenobleenterprises.com
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Globe className="w-5 h-5 text-accent flex-shrink-0" />
                <div className="text-sm text-secondary-foreground/80">
                  www.thenobleenterprises.com
                </div>
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-8 bg-secondary-foreground/20" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-secondary-foreground/60">
            © {currentYear} Noble Enterprises. All rights reserved.
          </div>
          <div className="text-sm text-secondary-foreground/60">
            Professional Analytical Equipment Trading | Global Network | Quality Assured
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;