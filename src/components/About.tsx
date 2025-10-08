import { Card } from "@/components/ui/card";
import { Target, Eye, Award, Users } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Who We Are
          </h2>
          <div className="w-24 h-1 bg-gradient-accent mx-auto mb-6"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A fast-growing commodities trading company bridging global markets with quality products and services
          </p>
        </div>

        {/* Main About Content */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-foreground">About DME Petroleum & Investment</h3>
            <p className="text-muted-foreground leading-relaxed">
              We are a fast-growing commodities trading company, working strategically with fertiliser producers,
              agrochemicals manufacturers and brokers to help them maximize profit and business value.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              DME is a Limited liability international multi-commodities trading company in Dubai, supplying
              agricultural inputs like fertilizers and petrochemicals to both domestic and international markets.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              A long-standing supplier of fertiliser products to the African Region, we bridge the gap between
              comprehensive business partners and enthusiastic stakeholders through our quality products and services.
            </p>
          </div>

          <div className="space-y-6">
            <p className="text-muted-foreground leading-relaxed">
              Our prime focus is on the upstream and downstream of the commodities industry, by which we make smart
              investment strategies to promote the growth and development of the Agricultural industry.
            </p>
            <div className="bg-card border border-border rounded-lg p-6">
              <h4 className="text-xl font-semibold text-foreground mb-3">Our Commitment</h4>
              <p className="text-muted-foreground leading-relaxed">
                We create lasting change in terms of how our industry works. We innovate to simplify and standardise
                our activities through a mind-set of radical change and collaboration. Through developing technology
                for lasting value creation we break new ground and work in a smarter, better and simpler way.
              </p>
            </div>
          </div>
        </div>

        {/* Values Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="p-6 hover:shadow-elegant transition-shadow duration-300 border-border">
            <div className="bg-primary/10 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
              <Target className="h-7 w-7 text-primary" />
            </div>
            <h4 className="text-xl font-semibold mb-3 text-foreground">Our Mission</h4>
            <p className="text-muted-foreground">
              To provide top-quality commodities and petrochemical products while maintaining the highest standards
              of service and sustainability.
            </p>
          </Card>

          <Card className="p-6 hover:shadow-elegant transition-shadow duration-300 border-border">
            <div className="bg-accent/10 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
              <Eye className="h-7 w-7 text-accent" />
            </div>
            <h4 className="text-xl font-semibold mb-3 text-foreground">Our Vision</h4>
            <p className="text-muted-foreground">
              To be the leading global commodity trading partner, recognized for excellence, innovation, and
              sustainable business practices.
            </p>
          </Card>

          <Card className="p-6 hover:shadow-elegant transition-shadow duration-300 border-border">
            <div className="bg-primary/10 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
              <Award className="h-7 w-7 text-primary" />
            </div>
            <h4 className="text-xl font-semibold mb-3 text-foreground">Quality Standards</h4>
            <p className="text-muted-foreground">
              We abound with a skilled workforce that applies stringent international quality processes to all our
              products and services.
            </p>
          </Card>

          <Card className="p-6 hover:shadow-elegant transition-shadow duration-300 border-border">
            <div className="bg-primary/10 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
              <Users className="h-7 w-7 text-primary" />
            </div>
            <h4 className="text-xl font-semibold mb-3 text-foreground">Customer Focus</h4>
            <p className="text-muted-foreground">
              We constantly strive to provide complete client satisfaction by listening to their needs and helping
              them make profitable business decisions.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
