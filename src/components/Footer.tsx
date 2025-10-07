import { MapPin, Phone, Mail } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">Propiedades Colombia</h3>
            <p className="opacity-90">
              Tu mejor opción para encontrar lotes, casas y apartamentos en Cundinamarca y Tolima.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Contacto</h4>
            <div className="space-y-3">
              <div className="flex items-center opacity-90">
                <Phone className="w-4 h-4 mr-2" />
                <span>+57 312 345 6789</span>
              </div>
              <div className="flex items-center opacity-90">
                <Mail className="w-4 h-4 mr-2" />
                <span>pablo.camacho@propiedades.com</span>
              </div>
              <div className="flex items-center opacity-90">
                <MapPin className="w-4 h-4 mr-2" />
                <span>Cundinamarca & Tolima, Colombia</span>
              </div>
            </div>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Horario de Atención</h4>
            <div className="space-y-2 opacity-90">
              <p>Lunes - Viernes: 8:00 AM - 6:00 PM</p>
              <p>Sábados: 9:00 AM - 2:00 PM</p>
              <p>Domingos: Cerrado</p>
            </div>
          </div>
        </div>
        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center opacity-75">
          <p>&copy; {new Date().getFullYear()} Propiedades Colombia. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};
