import { Button } from "@/components/ui/button";
import { ArrowRight, Globe, TrendingUp, Award } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Oil refinery at sunset"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-hero opacity-95"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-32 relative z-10">
        <div className="max-w-4xl">
          <div className="inline-block mb-6 px-4 py-2 bg-secondary/20 backdrop-blur-sm rounded-full border border-secondary/30">
            <span className="text-secondary font-semibold text-sm">
              Leading Energy & Commodity Trading Since 1995
            </span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-6 leading-tight">
            Global Energy Solutions
            <span className="block text-secondary">Powering Progress</span>
          </h1>

          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 max-w-2xl">
            DME Petroleum & Investment is a leading commodity trading company based in Dubai,
            specializing in petroleum products, fertilizers, and petrochemicals across 4 continents.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button
              size="lg"
              onClick={() => scrollToSection("services")}
              className="bg-secondary text-secondary-foreground hover:bg-secondary/90 shadow-glow"
            >
              Explore Our Services
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              onClick={() => scrollToSection("contact")}
              variant="outline"
              className="border-primary-foreground text-primary-foreground bg-primary-foreground/10 hover:bg-primary-foreground/20"
            >
              Contact Us
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl">
            <div className="flex items-center space-x-3 bg-card/10 backdrop-blur-sm p-4 rounded-lg border border-primary-foreground/20">
              <div className="bg-secondary/20 p-3 rounded-lg">
                <Globe className="h-6 w-6 text-secondary" />
              </div>
              <div>
                <div className="text-2xl font-bold text-primary-foreground">4</div>
                <div className="text-sm text-primary-foreground/70">Continents</div>
              </div>
            </div>

            <div className="flex items-center space-x-3 bg-card/10 backdrop-blur-sm p-4 rounded-lg border border-primary-foreground/20">
              <div className="bg-secondary/20 p-3 rounded-lg">
                <Award className="h-6 w-6 text-secondary" />
              </div>
              <div>
                <div className="text-2xl font-bold text-primary-foreground">4</div>
                <div className="text-sm text-primary-foreground/70">Global Services</div>
              </div>
            </div>

            <div className="flex items-center space-x-3 bg-card/10 backdrop-blur-sm p-4 rounded-lg border border-primary-foreground/20">
              <div className="bg-secondary/20 p-3 rounded-lg">
                <TrendingUp className="h-6 w-6 text-secondary" />
              </div>
              <div>
                <div className="text-2xl font-bold text-primary-foreground">30+</div>
                <div className="text-sm text-primary-foreground/70">Trades Yearly</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
        >
          <path
            d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="hsl(var(--background))"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
