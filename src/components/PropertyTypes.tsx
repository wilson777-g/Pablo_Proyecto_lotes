import { Home, Building2, MapPinned } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export const PropertyTypes = () => {
  const types = [
    {
      icon: MapPinned,
      title: "Lotes",
      description: "Terrenos ideales para construir tu proyecto de vida",
    },
    {
      icon: Home,
      title: "Casas",
      description: "Casas familiares en las mejores ubicaciones",
    },
    {
      icon: Building2,
      title: "Apartamentos",
      description: "Apartamentos modernos y cómodos para tu estilo de vida",
    },
  ];

  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4 text-foreground">
          ¿Qué Estás Buscando?
        </h2>
        <p className="text-center text-muted-foreground mb-12 text-lg">
          Tenemos la propiedad perfecta para cada necesidad
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          {types.map((type, index) => {
            const Icon = type.icon;
            return (
              <Card
                key={index}
                className="border-border hover:shadow-[var(--shadow-elegant)] transition-all duration-300 hover:-translate-y-2 bg-card"
              >
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-md">
                    <Icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3 text-foreground">{type.title}</h3>
                  <p className="text-muted-foreground">{type.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
