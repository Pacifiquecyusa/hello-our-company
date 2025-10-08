import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="font-display font-bold text-2xl mb-4 text-primary-foreground">
              D.P.I
            </div>
            <p className="text-primary-foreground/80 mb-4">
              Leading commodity trading company specializing in petroleum products, fertilizers, and petrochemicals.
            </p>
            <div className="flex space-x-4">
              <a
                href="http://www.dme-petroleum.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-foreground/80 hover:text-secondary transition-colors"
              >
                Website
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection("home")}
                  className="text-primary-foreground/80 hover:text-secondary transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("about")}
                  className="text-primary-foreground/80 hover:text-secondary transition-colors"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("services")}
                  className="text-primary-foreground/80 hover:text-secondary transition-colors"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("products")}
                  className="text-primary-foreground/80 hover:text-secondary transition-colors"
                >
                  Products
                </button>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Our Products</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li>Aviation Fuel</li>
              <li>Crude Hydrocarbons</li>
              <li>Heavy Petroleum Products</li>
              <li>Light Petroleum Products</li>
              <li>Petroleum Oil</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <Phone className="h-5 w-5 text-secondary mt-0.5 shrink-0" />
                <a
                  href="tel:+971561780645"
                  className="text-primary-foreground/80 hover:text-secondary transition-colors"
                >
                  +971 56 178 0645
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <Mail className="h-5 w-5 text-secondary mt-0.5 shrink-0" />
                <a
                  href="mailto:info@dme-petroleum.com"
                  className="text-primary-foreground/80 hover:text-secondary transition-colors"
                >
                  info@dme-petroleum.com
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-secondary mt-0.5 shrink-0" />
                <span className="text-primary-foreground/80">
                  Dubai, United Arab Emirates
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-primary-foreground/60 text-sm">
              © {currentYear} DME Petroleum & Investment. All rights reserved.
            </p>
            <p className="text-primary-foreground/60 text-sm">
              Confidential and Proprietary Document
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
