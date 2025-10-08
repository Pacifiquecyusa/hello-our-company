import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Plane, Droplet, Fuel, Zap, Settings } from "lucide-react";
import productsImage from "@/assets/products-bg.jpg";

const Products = () => {
  const productCategories = [
    {
      id: "aviation",
      title: "Aviation Fuel",
      icon: Plane,
      description:
        "Specialized petroleum-based fuel used to power aircraft. Generally of higher quality than fuels used in less critical applications.",
      products: [
        "Jet Fuel Jet A1",
        "Jet Fuel JP54",
        "Kerosene Jet Fuel TS-1",
      ],
    },
    {
      id: "crude",
      title: "Crude Hydrocarbons",
      icon: Droplet,
      description:
        "High-quality hydrocarbons for the emerging global natural gas market with diverse applications.",
      products: [
        "Gas Condensates",
        "Liquefied Natural Gas (LNG)",
        "Liquefied Petroleum Gas (LPG)",
        "Hydrocarbon Products",
      ],
    },
    {
      id: "heavy",
      title: "Heavy Petroleum Products",
      icon: Fuel,
      description:
        "Fuel oil supply for bunkers, power generation, and refinery feedstocks.",
      products: [
        "Fuel Oil Mazut M100/75",
        "Fuel Oil Mazut M100/99",
        "Fuel Oil Mazut M40",
        "Fuel Oil CST 180/280/380",
        "Furnace Oil",
      ],
    },
    {
      id: "light",
      title: "Light Petroleum Products",
      icon: Zap,
      description:
        "Low emission, environmentally clean diesel and gasoline products suitable for modern engines.",
      products: [
        "Diesel Fuel",
        "Gasoline",
        "Automotive Gas Oil",
        "Low Viscosity Marine Fuel",
        "Stable Natural Gasoline",
      ],
    },
    {
      id: "oils",
      title: "Petroleum Oil",
      icon: Settings,
      description:
        "Industrial petroleum oils for various applications, helping improve equipment life and performance.",
      products: [
        "Compressor Oil",
        "Industrial Oil",
        "Turbine Oil",
        "Base Oil",
        "Petrochemicals",
      ],
    },
  ];

  return (
    <section id="products" className="py-20 bg-background relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 opacity-5">
        <img
          src={productsImage}
          alt="Products background"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Our Products
          </h2>
          <div className="w-24 h-1 bg-gradient-accent mx-auto mb-6"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive portfolio of premium petroleum products and commodities
          </p>
        </div>

        <Tabs defaultValue="aviation" className="w-full">
          <TabsList className="grid w-full grid-cols-2 lg:grid-cols-5 h-auto gap-2 bg-muted/50 p-2">
            {productCategories.map((category) => (
              <TabsTrigger
                key={category.id}
                value={category.id}
                className="flex flex-col items-center py-3 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
              >
                <category.icon className="h-5 w-5 mb-1" />
                <span className="text-xs font-medium">{category.title}</span>
              </TabsTrigger>
            ))}
          </TabsList>

          {productCategories.map((category) => (
            <TabsContent key={category.id} value={category.id} className="mt-8">
              <Card className="p-8 md:p-12 border-border">
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="md:w-1/3">
                    <div className="bg-gradient-primary p-6 rounded-lg inline-block mb-4">
                      <category.icon className="h-12 w-12 text-primary-foreground" />
                    </div>
                    <h3 className="text-3xl font-bold mb-4 text-foreground">
                      {category.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {category.description}
                    </p>
                  </div>

                  <div className="md:w-2/3">
                    <h4 className="text-xl font-semibold mb-6 text-foreground">
                      Product Portfolio
                    </h4>
                    <div className="grid sm:grid-cols-2 gap-4">
                      {category.products.map((product, idx) => (
                        <div
                          key={idx}
                          className="flex items-center p-4 bg-muted/50 rounded-lg hover:bg-muted transition-colors"
                        >
                          <div className="w-2 h-2 bg-accent rounded-full mr-3 shrink-0"></div>
                          <span className="text-foreground font-medium">{product}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            </TabsContent>
          ))}
        </Tabs>

        {/* Global Presence Section */}
        <div className="mt-20">
          <Card className="p-8 md:p-12 bg-card border-border">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold mb-4 text-foreground">
                Global Presence
              </h3>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Operating across 4 continents with strategic partnerships and storage facilities
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-xl font-semibold mb-4 text-foreground">
                  East Africa Operations
                </h4>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We are well established in East Africa, operating from the Port of Dar es Salaam (Tanzania)
                  and the Port of Mombasa (Kenya) as our storage bases.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["Kenya", "Tanzania", "Rwanda", "Burundi", "DRC", "South Sudan", "Uganda"].map((country) => (
                    <span
                      key={country}
                      className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
                    >
                      {country}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-xl font-semibold mb-4 text-foreground">
                  Headquarters & Operations
                </h4>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-secondary rounded-full mr-3"></div>
                    <span className="text-foreground">
                      <strong>Headquarters:</strong> Dubai, United Arab Emirates
                    </span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-secondary rounded-full mr-3"></div>
                    <span className="text-foreground">
                      <strong>International Presence:</strong> 4 Continents
                    </span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-secondary rounded-full mr-3"></div>
                    <span className="text-foreground">
                      <strong>Annual Trades:</strong> 30+ Major & Minor Trades
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Products;
