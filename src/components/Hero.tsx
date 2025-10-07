import { Button } from "@/components/ui/button";
import { ArrowRight, Phone } from "lucide-react";
import heroImage from "@/assets/hero-property.jpg";

export const Hero = () => {
  const handleWhatsApp = () => {
    window.open("https://wa.me/573123456789?text=Hola%20Pablo,%20estoy%20interesado%20en%20las%20propiedades", "_blank");
  };

  const scrollToContact = () => {
    document.getElementById("contacto")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-primary/60"></div>
      </div>
      
      <div className="container relative z-10 mx-auto px-4 text-center text-primary-foreground">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
          Tu Hogar en Cundinamarca y Tolima
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-95">
          Encuentra el lote, casa o apartamento perfecto para ti y tu familia
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            size="lg"
            onClick={scrollToContact}
            className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold text-lg px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all"
          >
            Ver Propiedades
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
          <Button
            size="lg"
            onClick={handleWhatsApp}
            variant="outline"
            className="bg-white/10 hover:bg-white/20 border-2 border-white text-white font-semibold text-lg px-8 py-6 rounded-full backdrop-blur-sm"
          >
            <Phone className="mr-2 w-5 h-5" />
            Contactar Ahora
          </Button>
        </div>
      </div>
    </section>
  );
};
