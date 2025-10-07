import { PropertyCard } from "./PropertyCard";
import apartmentImg from "@/assets/apartment.jpg";
import houseImg from "@/assets/house.jpg";
import lotImg from "@/assets/lot.jpg";

export const FeaturedProperties = () => {
  const properties = [
    {
      image: apartmentImg,
      title: "Apartamento Moderno Centro",
      location: "Ibagué, Tolima",
      type: "Apartamento",
      area: "85 m²",
      price: "$250M",
    },
    {
      image: houseImg,
      title: "Casa Campestre",
      location: "La Mesa, Cundinamarca",
      type: "Casa",
      area: "200 m²",
      price: "$420M",
    },
    {
      image: lotImg,
      title: "Lote Residencial",
      location: "Melgar, Tolima",
      type: "Lote",
      area: "500 m²",
      price: "$180M",
    },
    {
      image: houseImg,
      title: "Casa en Conjunto Cerrado",
      location: "Girardot, Cundinamarca",
      type: "Casa",
      area: "150 m²",
      price: "$350M",
    },
    {
      image: apartmentImg,
      title: "Apartamento Vista Montaña",
      location: "Honda, Tolima",
      type: "Apartamento",
      area: "95 m²",
      price: "$280M",
    },
    {
      image: lotImg,
      title: "Terreno Comercial",
      location: "Fusagasugá, Cundinamarca",
      type: "Lote",
      area: "1200 m²",
      price: "$450M",
    },
  ];

  return (
    <section className="py-20 bg-background" id="propiedades">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4 text-foreground">
          Propiedades Destacadas
        </h2>
        <p className="text-center text-muted-foreground mb-12 text-lg">
          Descubre nuestras mejores oportunidades en Cundinamarca y Tolima
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((property, index) => (
            <PropertyCard key={index} {...property} />
          ))}
        </div>
      </div>
    </section>
  );
};
