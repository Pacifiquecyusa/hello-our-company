import { Card } from "@/components/ui/card";
import { Package, Factory, Truck, HeadphonesIcon } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Package,
      title: "Commodity Trading",
      description:
        "Integrated commodity trading services with comprehensive and tailor-made business solutions for a wide range of customers. We offer top-quality products in the Agro industry with quality as our utmost priority.",
      features: ["Agricultural inputs", "Petrochemicals", "Fertilizers"],
    },
    {
      icon: Factory,
      title: "Raw Materials & Production",
      description:
        "We provide raw materials entering the agricultural and organic agricultural inputs production from the most trustable sources in the world with quality insurance always.",
      features: [
        "Fertilizers raw materials",
        "Pesticides raw materials",
        "Production line equipment",
      ],
    },
    {
      icon: Truck,
      title: "Logistics & Finance",
      description:
        "Comprehensive logistics and financing solutions to support your business operations. We ensure timely deliveries and provide flexible financial arrangements.",
      features: [
        "International shipping",
        "Storage solutions",
        "Trade finance",
      ],
    },
    {
      icon: HeadphonesIcon,
      title: "Customer Satisfaction",
      description:
        "Our professional team listens to clients and helps them make profitable business decisions. We cater to all business needs with personalized service and support.",
      features: [
        "Dedicated account managers",
        "24/7 support",
        "Market intelligence",
      ],
    },
  ];

  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            What We Do
          </h2>
          <div className="w-24 h-1 bg-gradient-accent mx-auto mb-6"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive services designed to meet the diverse needs of our global clients
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {services.map((service, index) => (
            <Card
              key={index}
              className="p-8 hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 border-border"
            >
              <div className="flex items-start space-x-4">
                <div className="bg-gradient-primary p-4 rounded-lg shrink-0">
                  <service.icon className="h-8 w-8 text-primary-foreground" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold mb-3 text-foreground">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-center text-sm text-muted-foreground"
                      >
                        <div className="w-1.5 h-1.5 bg-accent rounded-full mr-2"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Additional Service Highlight */}
        <Card className="bg-gradient-primary p-8 md:p-12 text-center border-none">
          <h3 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            We Strive to Reduce Trading Costs
          </h3>
          <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto">
            Behind our trading perspective is an indefatigable and undying thirst for information and knowledge.
            We continuously improve service levels and performance.
          </p>
        </Card>
      </div>
    </section>
  );
};

export default Services;
